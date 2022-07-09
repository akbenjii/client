import BaseScene from '@scenes/base/BaseScene'



export default class RoomScene extends BaseScene {

    constructor(key) {
        super(key)

        this.key = key

        this.penguins = null

        // Block collision body
        this.block = null
        // Trigger collision bodies
        this.triggers = null
        // this.constantTriggers = null
        // this.mining = false
        // this.constantUpdates = null

        // If room is fully loaded
        this.isReady = false
        // Array of users to be added once ready
        this.waiting = []
		this.mar_check = [800, 200, 100, 400, 801, 300, 809, 810]
		this.swim_check = [806]
		this.berg_check = [805]
		this.medal_check = [800, 200, 100, 400, 801, 300, 809, 810, 805, 806]
    }

    get client() {
        return this.world.client
    }

    init(data) {
        this.id = data.id
    }

    create() {

        this._create()
        this.sortChildren()

        if (this.roomPhysics) this.addPhysics()
        // if (this.roomPhysics) this.addConstantPhysics()
        if (this.roomAnims) this.addAnims()
        this.addInput()

        this.sound.pauseOnBlur = false
        if (!this.music) this.music = 0
        this.addMusic()

        if (this.waddles) this.getWaddles()

        this.interface.showInterface()

        if (this.crumbs.pin.id && this.crumbs.pin.room === this.id) this.interface.addPin()

        if (!this.world.client.roomsWaddled.includes(this.id)) {
            this.world.client.roomsWaddled.push(this.id)
        }
        if (this.world.client.roomsWaddled.length >= 20) {
            this.world.client.stampEarned(15)
        }
    }
	
    preload() {
        if (this.crumbs.pin.id && this.crumbs.pin.room === this.id) {
            this.load.image('pin', `assets/media/clothing/icon/${this.crumbs.pin.id}.png`)
        }
		
        this._preload()
    }

    sortChildren() {
        if (!this.sort) return

        for (let child of this.sort) {
            child.depth = child.y
        }
    }

    addPenguin(id, penguin) {
        if (penguin.stealthMode && this.world.client.rank < 4) return

        this.penguins[id] = penguin

        this.interface.main.buddy.showPage()

        this.checkMascot(id)
    }

    checkMascot(id){
        for (var x in this.world.mascots) {
            if (this.world.mascots[x].id == id) this.world.client.stampEarned(this.world.mascots[x].stamp)
        }
    }

    removePenguin(id) {
        let penguin = this.penguins[id]

        if (!penguin) return

        if (penguin.isTweening) penguin.removeTween()

        if (penguin.balloon) penguin.balloon.destroy()
        penguin.nameTag.destroy()
        penguin.destroy()

        delete this.penguins[id]

        this.interface.main.buddy.showPage()
    }

    addInput() {
        // Movement
        this.input.on('pointerup', (pointer, target) => this.client.onPointerUp(pointer, target))
    }

    addMusic() {
        if (!this.world.muteMusic) {
            this.world.MusicController.addMusic(this.music)
        }
    }

    getWaddles() {
        this.network.send('get_waddles')
    }

    setWaddles(waddles) {
        this.waddles = waddles

        for (let [id, seats] of Object.entries(waddles)) {
            this.setSeats(id, seats)
        }
    }

    setSeats(id, seats) {
        for (let [index, seat] of seats.entries()) {
            if (seat) {
                this.world.room[`seats${id}`][index].visible = true
            }
        }
    }

    onSnowballComplete(x, y) {
        // To be overridden in derived class
    }

    stop() {
        this.interface.main.snowballFactory.clearBalls()
        //this.sound.stopAll()
        this.scene.stop()
    }

    getWaiting(id) {
        return this.waiting.find(user => user.id == id)
    }

    updateWaiting(id, attributes) {
        let user = this.getWaiting(id)

        if (user) {
            user = Object.assign(user, attributes)
        }
    }

    removeWaiting(id) {
        this.waiting = this.waiting.filter(user => user.id != id)
    }

    /*========== Physics ==========*/

    get roomPhysics() {
        let key = this.key.toLowerCase()
		let newphysics = this.cache.json.get(`${key}-physics-new`)

        return (newphysics) ? newphysics : this.cache.json.get(`${key}-physics`)
    }


    addPhysics() {
        this.matter.world.setBounds(0, 0, this.game.config.width, this.game.config.height)
        this.block = this.addBody('block', 0x111111)
        this.triggers = this.addTriggers()
    }

    // addConstantPhysics() {
    //     this.constantTriggers = this.addConstantTriggers()
    // }

    addBody(key, color = null) {
        if (!this.roomPhysics[key]) return null

        let body = this.matter.add.fromPhysicsEditor(0, 0, this.roomPhysics[key])
        this.matter.body.setPosition(body, body.centerOffset) // Centers body in room

        // Debug color
        color = (color) ? color : body.render.fillColor

        body.render.lineColor = color
        body.render.fillColor = color
        body.render.fillOpacity = 0.5

        return body
    }

    addTriggers() {
        if (!this.roomTriggers) return null
 
        let triggers = []

        for (let t in this.roomTriggers) {
            let trigger = this.addBody(t, 0x00FF00)

            trigger.callback = this.roomTriggers[t]
            triggers.push(trigger)
        }
        return triggers

    }

    // addConstantTriggers() {
    //     if (!this.constantTriggers) return null
    //     if (this.constantTriggers == null) return null

    //     let triggers = []
    //     for (let t in this.constantTriggers) {
    //         let trigger = this.addBody(t, 0x00FF00)

    //         trigger.callback = this.constantTriggers[t]
    //         triggers.push(trigger)
    //     }
    //     return triggers
    // }
	
	addZones() {
		if (!this.roomZones) return null
		
		for (let t in this.roomZones) {
            let trigger = this.matter.add.gameObject(this.roomZones[t].key).setStatic(true)

            trigger.callback = this.roomZones[t].callback
            this.triggers.push(trigger)
        }
	}

    triggerRoom(id, x, y) {
        let room = this.crumbs.scenes.rooms[id]
        this.world.client.sendJoinRoom(id, room.key, x, y)
    }
	
	triggerGame(minigame, id) {
		let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showWindow('Do you want to play ' + this.getString(minigame) + '?', "dual",  () => this.joinGame(minigame, id))
    }

    turnOnMining() {
        if (!this.mining) this.mining = true;
        console.log(this.mining)
    }

    // update() {
    //     this.triggerMining();
    //     if (this.constantUpdates) {
    //         if (this.roomPhysics) this.addConstantPhysics()
    //     }  
    // }

    // getPenguinFrame() {
    //     return this.world.client.penguin.frame
    // }

    // triggerMining() {
    //     let penguin = this.world.client.penguin;
    //     console.log(penguin)
    //     const allEqual = arr => arr.every( v => v === arr[0] )
    //     console.log("outer frame:", penguin.frame)
    //     var frame_check = setInterval(function () {this.getPenguinFrame}, 2000);
    //     console.log(frame_check)
    //     if ([429].includes(penguin.head) && allEqual([penguin.body, penguin.feet, penguin.hand, penguin.neck, penguin.face]))  {
    //         console.log(frame_check)
    //         if (frame_check == 26) {
    //             console.log('dancing')
    //             let coinValues = [5,10,25,50,100];
    //         }
    //     } else {
    //         this.mining = false;
    //     }
    // }
	
	joinGame(minigame, id){
		this.world.loadMinigame(minigame)
        let room = this.crumbs.scenes.rooms[id]
        this.world.client.sendJoinRoom(id, room.key)
	}

    triggerWaddle(id) {
        // To be overridden in derived class
    }

    /*========== Animations ==========*/

    /**
     * Loads complex animations from JSON room anims file,
     * simpler animations should use the Animation component instead.
     * To trigger this add a roomAnims get property to the room, and
     * set it to return true.
     */
    addAnims() {
        let key = this.key.toLowerCase()
        let anims = this.cache.json.get(`${key}-anims`)

        this.anims.fromJSON(anims)
    }
	
	/*======= Prompts ========*/
	
	unimplementedPrompt(){
		let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('This feature is not yet implemented!\nCPForever is in development, and is being\nactively updated. Check back soon!',)
	}

}
