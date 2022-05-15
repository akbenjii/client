export default class RuffleManager {
	
	constructor(world, RuffleHolder, crumbs){
		
		this.world = world
		this.RuffleHolder = RuffleHolder
		this.crumbs = crumbs
		
		window.RufflePlayer = window.RufflePlayer || {};
		window.RufflePlayer.config = {
			"publicPath": "assets/scripts/lib/ruffle"
		}

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
		
		this.swfInstance = this.rufflePlayer.load({
			url: "assets/media/games/swf/sse.swf",
			allowScriptAccess: true,
			quality: "low",
		});
	}
	

    handleLoadMinigame(minigame) {
		
		var ruffleplayer = document.getElementsByTagName("ruffle-player")[0]
		ruffleplayer.style.visibility = "visible";
		ruffleplayer.volume = 0.05;
		
		ruffleplayer.loadMinigame(`${minigame}/bootstrap.swf`)
		
		this.inMinigame = true
            
	}
	
	onSSEInit() {
		var ruffleplayer = document.getElementsByTagName("ruffle-player")[0]
		
		ruffleplayer.setMediaPath("/assets/media/games/swf/")
		
		console.log("sse + ruffle init")
	}
	
	getMyPlayerHex(){
		return this.world.getColor(this.world.client.penguin.color)
	}
	
	killMinigame(game, roomid, coins){
		document.getElementsByTagName("ruffle-player")[0].style.visibility = "hidden";
		let room = this.crumbs.scenes.rooms[roomid]
        this.world.client.sendJoinRoom(roomid, room.key)
		
		this.world.network.send('end_ruffle_mingame', { coins: coins, game: game })
	}
	
}