export default class RuffleManager {
	
	constructor(world, RuffleHolder, crumbs){
		
		this.world = world
		this.RuffleHolder = RuffleHolder
		this.crumbs = crumbs
		
		window.RufflePlayer = window.RufflePlayer || {};
		window.RufflePlayer.config = {
			"publicPath": "assets/scripts/lib/ruffle"
		}

		if (localStorage.noRuffle === 'true') return

		this.ruffle = window.RufflePlayer.newest();
        this.rufflePlayer = this.ruffle.createPlayer();
        this.rufflePlayer.style.width = '1520px';
        this.rufflePlayer.style.height = '960px';
		this.rufflePlayer.style.pointerEvents = 'auto';

        this.RuffleHolder.add.dom(760, 480, this.rufflePlayer)
		
		var ruffleplayer = document.getElementsByTagName("ruffle-player")[0]
		ruffleplayer.style.visibility = "hidden";

		this.ruffle = window.RufflePlayer;
		
		window.getMyPlayerHex = this.getMyPlayerHex
		window.getMyPlayerHex = getMyPlayerHex.bind(this)
		
		window.killMinigame = this.killMinigame
		window.killMinigame = killMinigame.bind(this)
		
		window.onSSEInit = this.onSSEInit
		window.onSSEInit = onSSEInit.bind(this)

		window.setCannonData = this.setCannonData
		window.setCannonData = setCannonData.bind(this)

		window.getCannonData = this.getCannonData
		window.getCannonData = getCannonData.bind(this)

		window.getStampInfo = this.getStampInfo
		window.getStampInfo = getStampInfo.bind(this)

		window.checkIfPlayerHasStamp = this.checkIfPlayerHasStamp
		window.checkIfPlayerHasStamp = checkIfPlayerHasStamp.bind(this)

		window.playerWearingItem = this.playerWearingItem
		window.playerWearingItem = playerWearingItem.bind(this)
		
		this.swfInstance = this.rufflePlayer.load({
			url: "assets/media/games/swf/sse.swf",
			allowScriptAccess: true,
			quality: "low",
			logLevel: "trace"
		});
	}
	

    handleLoadMinigame(minigame) {
		var ruffleplayer = document.getElementsByTagName("ruffle-player")[0]
		ruffleplayer.play()
		ruffleplayer.style.visibility = "visible";
		ruffleplayer.volume = 0.05;
		
		ruffleplayer.loadMinigame(`${minigame}/bootstrap.swf`)

		this.world.client.inMinigame = true
            
	}
	
	onSSEInit() {
		var ruffleplayer = document.getElementsByTagName("ruffle-player")[0]
		
		ruffleplayer.setMediaPath("/assets/media/games/swf/")
		
		console.log("sse + ruffle init")

		ruffleplayer.pause()
	}
	
	getMyPlayerHex(){
		return this.world.getColor(this.world.client.penguin.color)
	}
	
	killMinigame(game, roomid, coins){
		document.getElementsByTagName("ruffle-player")[0].style.visibility = "hidden";
		let room = this.crumbs.scenes.rooms[roomid]
        this.world.client.sendJoinRoom(roomid, room.key)

		this.world.client.inMinigame = false
		
		this.world.network.send('end_ruffle_mingame', { coins: coins, game: game })
	}

	setCannonData(data){
		console.log("set cannon data", data)
		let compressed = this.compressCannonData(data)
		this.world.client.cannonData = compressed
		this.world.network.send('set_cannon_data', { data: compressed })
	}

	getCannonData(){
		console.log("get cannon data", this.world.client.cannonData)
		let uncompressed = this.uncompressCannonData(this.world.client.cannonData)
		return uncompressed
	}

	getStampInfo(stamp){
		let stampInfo = this.crumbs.stamps[stamp]
		console.log(`get stamp info ${stamp}`, stampInfo)
		return [stampInfo.name, stampInfo.groupid, stampInfo.difficulty, stampInfo.description]
	}

	checkIfPlayerHasStamp(stamp){
		let hasStamp = this.world.client.stamps.includes(parseInt(stamp))
		console.log(`check if player has stamp ${stamp}`, hasStamp)
		return hasStamp
	}

	playerWearingItem(item){
		let items = this.world.client.penguin.items.equippedFlat
		for (var x in items) {
			if (items[x] === item) {
				return true
			}
		}
	}

	compressCannonData(data){
		let compressed = []
		for(var x of data){
			if (x[1] == true){
				compressed.push(1)
			}
			else if (x[1] == false){
				compressed.push(0)
			}
			else if (x[1] == 600){
				compressed.push('A')
			}
			else{
				compressed.push(x[1])
			}
		}
		return compressed.join("#")
	}

	uncompressCannonData(data){
		let uncompressed = []
		let dataArray = data.split("#")
		for(var x in dataArray){
			if (x < 36) {
				uncompressed.push(["level" + (parseInt(x) + 1) + "playerPuffleOs", dataArray[x]])
			}
			else if (x < 72) {
				if (dataArray[x] == "A"){
					uncompressed.push(["level" + (parseInt(x) - 35) + "bestTime", 600])
				}
				else{
					uncompressed.push(["level" + (parseInt(x) -35) + "bestTime", dataArray[x]])
				}
			}
			else if (x < 108) {
				if (dataArray[x] == 0){
					uncompressed.push(["level" + (parseInt(x) - 71) + "turboDone", false])
				}
				else if (dataArray[x] == 1){
					uncompressed.push(["level" + (parseInt(x) - 71) + "turboDone", true])
				}
			}
			else{
				console.log("too much compressed cannon data, some has been ommitted!")
			}
		}
		return uncompressed
	}

	
}