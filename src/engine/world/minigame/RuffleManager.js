export default class RuffleManager {

	constructor(world, RuffleHolder, crumbs) {

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

		window.killSwf = this.killSwf
		window.killSwf = killSwf.bind(this)

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

		window.getLocalizedString = this.getLocalizedString
		window.getLocalizedString = getLocalizedString.bind(this)

		window.getMyPuffleCount = this.getMyPuffleCount
		window.getMyPuffleCount = getMyPuffleCount.bind(this)

		window.getMyPlayerTotalCoins = this.getMyPlayerTotalCoins
		window.getMyPlayerTotalCoins = getMyPlayerTotalCoins.bind(this)

		window.getMyPlayerUsername = this.getMyPlayerUsername
		window.getMyPlayerUsername = getMyPlayerUsername.bind(this)

		window.adoptPuffle = this.adoptPuffle
		window.adoptPuffle = adoptPuffle.bind(this)

		window.getPostcards = this.getPostcards
		window.getPostcards = getPostcards.bind(this)

		window.deletePostcard = this.deletePostcard
		window.deletePostcard = deletePostcard.bind(this)

		window.sendPostcard = this.sendPostcard
		window.sendPostcard = sendPostcard.bind(this)

		window.getCurrentPostcards = this.getCurrentPostcards
		window.getCurrentPostcards = getCurrentPostcards.bind(this)

		this.swfInstance = this.rufflePlayer.load({
			url: "assets/media/games/swf/sse.swf",
			allowScriptAccess: true,
			quality: "low",
			logLevel: (localStorage.getItem('debugMode') === 'true') ? "Trace" : "Error",
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

	handleLoadOtherSwf(path, params) {
		var ruffleplayer = document.getElementsByTagName("ruffle-player")[0]
		ruffleplayer.play()
		ruffleplayer.style.visibility = "visible";
		ruffleplayer.volume = 0.05;

		ruffleplayer.loadOtherSwf(path, params)
	}

	onSSEInit() {
		var ruffleplayer = document.getElementsByTagName("ruffle-player")[0]

		ruffleplayer.setMediaPath("/assets/media/games/swf/", "/assets/media/swf/")

		console.log("sse + ruffle init")

		ruffleplayer.pause()
	}

	getMyPlayerHex() {
		return this.world.getColor(this.world.client.penguin.color)
	}

	killMinigame(game, roomid, coins) {
		document.getElementsByTagName("ruffle-player")[0].style.visibility = "hidden";
		let room = this.crumbs.scenes.rooms[roomid]
		this.world.client.sendJoinRoom(roomid, room.key)

		this.world.client.inMinigame = false

		this.world.network.send('end_ruffle_mingame', {
			coins: coins,
			game: game
		})
	}

	killSwf() {
		var ruffleplayer = document.getElementsByTagName("ruffle-player")[0]
		ruffleplayer.style.visibility = "hidden";
		ruffleplayer.pause()
	}

	setCannonData(data) {
		console.log("set cannon data", data)
		let compressed = this.compressCannonData(data)
		this.world.client.cannonData = compressed
		this.world.network.send('set_cannon_data', {
			data: compressed
		})
	}

	getCannonData() {
		console.log("get cannon data", this.world.client.cannonData)
		let uncompressed = this.uncompressCannonData(this.world.client.cannonData)
		return uncompressed
	}

	getStampInfo(stamp) {
		let stampInfo = this.crumbs.stamps[stamp]
		console.log(`get stamp info ${stamp}`, stampInfo)
		return [stampInfo.name, stampInfo.groupid, stampInfo.difficulty, stampInfo.description]
	}

	checkIfPlayerHasStamp(stamp) {
		let hasStamp = this.world.client.stamps.includes(parseInt(stamp))
		console.log(`check if player has stamp ${stamp}`, hasStamp)
		return hasStamp
	}

	playerWearingItem(item) {
		let items = this.world.client.penguin.items.equippedFlat
		for (var x in items) {
			if (items[x] === item) {
				return true
			}
		}
	}

	compressCannonData(data) {
		let compressed = []
		for (var x of data) {
			if (x[1] == true) {
				compressed.push(1)
			} else if (x[1] == false) {
				compressed.push(0)
			} else if (x[1] == 600) {
				compressed.push('A')
			} else {
				compressed.push(x[1])
			}
		}
		return compressed.join("#")
	}

	uncompressCannonData(data) {
		let uncompressed = []
		let dataArray = data.split("#")
		for (var x in dataArray) {
			if (x < 36) {
				uncompressed.push(["level" + (parseInt(x) + 1) + "playerPuffleOs", dataArray[x]])
			} else if (x < 72) {
				if (dataArray[x] == "A") {
					uncompressed.push(["level" + (parseInt(x) - 35) + "bestTime", 600])
				} else {
					uncompressed.push(["level" + (parseInt(x) - 35) + "bestTime", dataArray[x]])
				}
			} else if (x < 108) {
				if (dataArray[x] == 0) {
					uncompressed.push(["level" + (parseInt(x) - 71) + "turboDone", false])
				} else if (dataArray[x] == 1) {
					uncompressed.push(["level" + (parseInt(x) - 71) + "turboDone", true])
				}
			} else {
				console.log("too much compressed cannon data, some has been ommitted!")
			}
		}
		return uncompressed
	}

	getLocalizedString(key) {
		return this.world.getString(key)
	}

	getMyPuffleCount() {
		return this.world.client.pufflecount
	}

	getMyPlayerTotalCoins() {
		return this.world.client.coins
	}

	getMyPlayerUsername() {
		return this.world.client.penguin.username
	}

	adoptPuffle(type, name) {
		this.world.network.send('adopt_puffle', {
			type: type,
			name: name
		})
	}

	getPostcards() {
		return this.world.client.postcards
	}

	deletePostcard(index) {
		this.world.client.postcards.splice(index, 1)
		clearTimeout(this.postcardTimeout)
		this.postcardTimeout = setTimeout(() => this.world.network.send('update_postcards', {
			postcardArray: this.world.client.postcards
		}, 1000))
	}

	sendPostcard(postcard, username) {
		this.world.network.send('send_postcard', {
			id: postcard,
			username: username
		})
	}

	getCurrentPostcards() {
		// this should probably be in crumbs in future. each page is one item in the array, there can be up to infinite pages of postcards
		return [{
			title: "Featured Postcards",
			id1: 217,
			name1: "Let's Explore",
			id2: 43,
			name2: "Happy Puffles",
			id3: 36,
			name3: "You're Funny",
			id4: 62,
			name4: "Let's Hang Out",
			id5: 48,
			name5: "Follow Me",
			id6: 12,
			name6: "Welcome to Club Penguin"
		}, {
			title: "Friendship",
			id1: 32,
			name1: "Terrific Friend",
			id2: 57,
			name2: "Be My Buddy",
			id3: 35,
			name3: "Long Time No See",
			id4: 200,
			name4: "Campfire Story",
			id5: 201,
			name5: "Thank You",
			id6: 64,
			name6: "Stopping By"
		}, {
			title: "Friendship",
			id1: 56,
			name1: "Hey There",
			id2: 24,
			name2: "Cool Name",
			id3: 25,
			name3: "Awesome Outfit",
			id4: 26,
			name4: "I Like Your Outfit",
			id5: 88,
			name5: "My Tour",
			id6: 219,
			name6: "Best Friends for Life!"
		}, {
			title: "Puffles",
			id1: 222,
			name1: "Bring your puffles!",
			id2: 231,
			name2: "Cool Puffles!",
			id3: 224,
			name3: "Green Puffle",
			id4: 225,
			name4: "Orange Puffle",
			id5: 220,
			name5: "Black Puffle",
			id6: 221,
			name6: "Blue Puffle"
		}, {
			title: "Igloo",
			id1: 1,
			name1: "Re-decorated Igloo",
			id2: 202,
			name2: "Check out my igloo",
			id3: 27,
			name3: "Party at my iggy!",
			id4: 61,
			name4: "Igloo Party",
			id5: 17,
			name5: "Cool Igloo",
			id6: 237,
			name6: "Thanks for my gift!"
		}, {
			title: "Games",
			id1: 10,
			name1: "Mancala",
			id2: 19,
			name2: "Great Game",
			id3: 52,
			name3: "Ski Hill",
			id4: 218,
			name4: "My Stamp Book",
			id5: 59,
			name5: "Find Four",
			id6: 206,
			name6: "Stamp Book"
		}, {
			title: "Rooms",
			id1: 20,
			name1: "Snow Forts",
			id2: 21,
			name2: "Pool",
			id3: 55,
			name3: "Dojo",
			id4: 29,
			name4: "Tip The Berg",
			id5: 30,
			name5: "Hidden Lake",
			id6: 16,
			name6: "Ice Rink"
		}]
	}
}