import BaseScene from '@scenes/base/BaseScene'

import ClientController from './penguin/ClientController'
import PenguinFactory from './penguin/PenguinFactory'
import RoomFactory from './room/RoomFactory'
import IglooFactory from './room/IglooFactory'
import RuffleManager from './minigame/RuffleManager'


export default class WorldController extends BaseScene {

    constructor(key) {
        super(key)

        this.client
        this.room

        this.muteMusic = false
    }

    create() {
		
		var RuffleHolder = this.scene.get("RuffleHolder")
		
		if (window.location.hostname == "localhost") window.world = this
		
        this.penguinFactory = new PenguinFactory(this)
        this.roomFactory = new RoomFactory(this)
        this.iglooFactory = new IglooFactory(this)
		this.RuffleManager = new RuffleManager(this, RuffleHolder, this.crumbs)

        this.network.sendGetPin()
    }

    setClient(args) {
        this.client = new ClientController(this, args)
    }

    joinRoom(id, users = null) {
        this.interface.showLoading(this.getString('loading', this.crumbs.scenes.rooms[id].key))

        if (!this.room) {
            return this.createRoom(id, users)
        }

        this.room.events.once('shutdown', () => this.createRoom(id, users))
        this.room.stop()
    }

    createRoom(id, users) {
        this.room = this.roomFactory.createRoom(id)
        this.room.waiting = users

        this.room.events.once('create', () => this.addPenguins())
    }

    joinIgloo(args) {
        this.interface.showLoading(this.getString('loading', 'igloo'))

        if (!this.room) {
            return this.createIgloo(args)
        }

        this.room.events.once('shutdown', () => this.createIgloo(args))
        this.room.stop()
    }

    createIgloo(args) {
        this.room = this.iglooFactory.createIgloo(args)
        this.room.waiting = args.users

        this.room.events.once('create', () => this.addPenguins())
    }

    addPenguins() {
        this.room.penguins = this.penguinFactory.createPenguins(this.room.waiting, this.room)
        this.room.isReady = true
    }

    addPenguin(user) {
        // If room isn't ready then user gets added into waiting array
        if (!this.room.isReady && !this.room.getWaiting(user.id)) {
            return this.room.waiting.push(user)
        }

        if (!(user.id in this.room.penguins)) {
            let penguin = this.penguinFactory.createPenguin(user, this.room)
            this.room.addPenguin(user.id, penguin)
        }
    }

    removePenguin(id) {
        if (!this.room.isReady) {
            return this.room.removeWaiting(id)
        }

        this.room.removePenguin(id)
    }

    getRelationship(id) {
        if (id == this.client.id) return 'player'

        if (this.isBuddy(id)) {
            return this.isOnline(id) ? 'online' : 'offline'
        }

        if (this.isIgnore(id)) return 'ignore'

        return 'none'
    }

    isBuddy(id) {
        let buddiesFlat = this.client.buddies.map(buddy => buddy.id)
        return buddiesFlat.includes(id)
    }

    isIgnore(id) {
        let ignoresFlat = this.client.ignores.map(ignore => ignore.id)
        return ignoresFlat.includes(id)
    }

    isOnline(id) {
        let buddy = this.client.buddies.find(obj => obj.id == id)
        return buddy.online
    }

    getColor(id) {
        return this.crumbs.colors[id - 1] || this.crumbs.colors[0]
    }
	
	loadMinigame(minigame) {
		this.RuffleManager.handleLoadMinigame(minigame)
	}

}
