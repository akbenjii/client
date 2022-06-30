import PuffleLoader from '@engine/world/room/loader/PuffleLoader'
import BaseContainer from '@scenes/base/BaseContainer'

export default class Puffle extends BaseContainer {

    constructor(puffle, room) {

        // picks a random x and y position to spawn in. it cannot be within 200 pixels of the edge of the screen
        let xpos = Phaser.Math.Between(200, 1320)
        let ypos = Phaser.Math.Between(200, 760)

        // makes sure the spawn position is not blocked by the blockmap
        while (!room.matter.containsPoint(room.pet, xpos, ypos)) {
            xpos = Phaser.Math.Between(200, 1320)
            ypos = Phaser.Math.Between(200, 760)
        }

        super(room, xpos, ypos)

        this.room = room
        this.isButton = true
        this.id = puffle.id
        this.color = puffle.color
        this.name = puffle.name
        this.xpos = xpos
        this.ypos = ypos

        this.ploader = new PuffleLoader(this, this.room)

        // adds the sprite for the puffle
        this.color = this.world.crumbs.puffles[this.color].name
		
		if (!this.ploader.textureExists(`puffle_${this.color}`)) {
			this.ploader.loadPuffle(this.color)
		}
		else {
			this.loadPuffle()
		}
        
    }

    loadPuffle(){
        if (this.world.client.penguin.puffle == this.id) return

        this.sprite = this.room.add.sprite(this.xpos, this.ypos, `puffle_${this.color}`, '1_1')

        this.sprite.scale = 1.25
        
        this.x = this.sprite.x
        this.y = this.sprite.y

        // makes sure that the puffle is layered correctly
        this.sprite.depth = this.y

        // if the penguin owns the igloo, this allows the puffles to be clicked on
        if (this.world.client.penguin.id == this.room.id) {
            this.addPuffleInput()
        }

        this.room.puffles[this.id] = this

        // the puffle will decide whether or not to walk every 3 seconds
        this.moveInterval = setInterval(this.puffleAi.bind(this), 3000)
    }

    addPuffleInput() {
        // creates the hitbox to open the puffle care menu
        this.hitArea = new Phaser.Geom.Ellipse(0, 0, 50, 50)
        this.setInteractive({
            cursor: 'pointer',
            hitArea: this.hitArea,
            hitAreaCallback: Phaser.Geom.Ellipse.Contains
        })
        this.on('pointerup', () => this.onPuffleClick())
    }

    onPuffleClick() {
        // sends a packet to the server which requests the wellbeing information for the care menu to use
        this.network.send('get_wellbeing', {
            puffle: this.id
        })
    }

    puffleAi() {
        // tells the puffle how to manage the screen position for each possible walking direction 
        this.directions = [
            ["s", -0, 1],
            ["sw", -1, 1]
            ["w", -1, 0],
            ["nw", -1, -1],
            ["n", 0, -1],
            ["ne", 1, -1],
            ["e", 1, 0],
            ["se", 1, 1],        
        ]

        // if the puffle is currently walking, this makes sure it does not try and walk somewhere else
        if (this.tween || this.isTweening) {
            return
        }

        // 1 in 5 chance that the puffle will decide to walk
        else if (Phaser.Math.Between(0, 5) == 5) {

            let dirnum = Math.floor(Math.random() * this.directions.length)

            // chooses a random direction from the array
            var arrayentry = this.directions[dirnum]

            // gets the letter code for the direction
            var direction = arrayentry[0]

            // chooses a random co-ordinate to walk to, between 50 and 250 pixels to move
            let movedist = Phaser.Math.Between(50, 250)
            let xmove = arrayentry[1] * movedist
            let ymove = arrayentry[2] * movedist

            // finds the final position that the puffle will end up in after moving
            let xdest = this.x + xmove
            let ydest = this.y + ymove

            let tries = 0

            // if the puffle is going to walk into an area that in not accessible, or too close to the edge of the screen, it will not walk
            while (!this.room.matter.containsPoint(this.room.pet, xdest, ydest) || xdest > 1320 || ydest > 760 || xdest < 200 || ydest < 200) {
                if (isNaN(xdest) || isNaN(ydest) || tries > 50) return
                // chooses a random co-ordinate to walk to, between 50 and 250 pixels to move
                movedist = Phaser.Math.Between(50, 250)
                xmove = arrayentry[1] * movedist
                ymove = arrayentry[2] * movedist

                // finds the final position that the puffle will end up in after moving
                xdest = this.x + xmove
                ydest = this.y + ymove

                tries = tries + 1
            }

            // starts the animation for the puffle walking
            this.playFrame(9 + dirnum)

            this.movePuffle(xdest, ydest)
        }
    }

    movePuffle(x, y) {
        let path = this.getPath({
            x,
            y
        })
        if (path) {
            // adds the tween for the puffle to change its screen position each frame
            this.addMoveTween(path)
        }

        if (this.world.interface.main.puffleCare.visible && this.world.interface.main.puffleCare.args.puffleId == this.id) {
            this.world.interface.main.puffleCare.visible = false
        }
    }

    getPath(target) {
        // sets the speed for the puffle to walk at. higher is faster (obviously)
        const speed = 110

        // calculates the distance between the puffle and the final destination
        // there should be a phaser math component (Phaser.Math.Distance.BetweenPoints) for this, but it kept breaking for me
        let dx = this.x - target.x
        let dy = this.y - target.y;
        let distance = Math.sqrt(dx * dx + dy * dy)

        // calculates the time the puffle should be walking for
        let duration = (distance / speed) * 1000

        return {
            target: target,
            duration: duration
        }
    }

    addMoveTween(path) {
        if (this.tween) {
            // if the puffle is currently walking, this makes sure it does not try and walk somewhere else
            return
        }

        // adds the tween for the puffle to change its screen position each frame to the room
        this.tween = this.room.tweens.add({
            targets: this.sprite,
            duration: path.duration,
            x: Math.round(path.target.x),
            y: Math.round(path.target.y),
            onUpdate: () => this.onMoveUpdate(),
            onComplete: () => this.onMoveComplete()
        })
    }

    onMoveUpdate() {
        this.x = this.sprite.x
        this.y = this.sprite.y
        // makes sure that the puffle is layered correctly even whilst moving
        this.sprite.depth = this.y
    }

    onMoveComplete() {
        if (!this.tween) {
            return
        }

        // removes the tween from the puffle, allowing it to walk again
        this.tween.remove()
        this.tween = null

        // stops the walking animation, and returns the puffle to its original direction
        this.sprite.anims.stop()
        this.sprite.setFrame('1_1')
    }

    chewGum() {
        this.play("bubblegum")
    }

    eatCookie() {
        this.play("cookie")
    }

    eatOs() {
        this.play("eating")
    }

    bathe() {
        this.play("wash")
    }

    sleep() {
        this.play("sleep")
    }

    ball() {
        let rng = Phaser.Math.Between(1, 3)
        this.play("ball" + rng)
    }

    play(anim) {
        var anim = this.sprite.play(anim)
        // puffle cannot choose to walk whilst performing an animation
        this.isTweening = true
        this.removeInteractive()

        anim.on('animationcomplete', function() {
            this.sprite.setFrame('stand/south')
            this.isTweening = false
            this.addPuffleInput()
        }, this)
    }

    destroy(){
        this.sprite.destroy()
        if (this.tween) {
            this.tween.remove()
        }
        clearInterval(this.moveInterval)
        this.room.puffles[this.id] = null
    }

    /*========== Frames ==========*/

    playFrame(_frame, set = true) {
        // Moving penguin can only update when frames are movement frames (9-16)
        if (this.isTweening && (frame < 9 || frame > 16)) {
            return
        }

        // Get correct frame id
        let frame = ([25, 26].includes(_frame))
            ? this.getSecretFrame(_frame)
            : _frame

        let key = `${this.sprite.texture.key}_${frame}`

        if (!this.world.anims.exists(key)) {
            this.createAnim(this.sprite.texture.key, frame)
        }
        if (this.checkAnim(key)) {
            this.sprite.visible = true
            this.sprite.anims.play(key)
        } else {
            this.sprite.visible = false
        }

        // Frames that aren't set get set to 1
        this.frame = (set) ? _frame : 1
    }

    createAnim(key, frame) {
        let animation = this.crumbs.penguin[frame]
        let frames = this.generateFrames(key, frame, animation)

        this.world.anims.create({
            key: `${key}_${frame}`,
            frames: frames,
            frameRate: 24,
            repeat: animation.repeat || 0
        })
    }

    generateFrames(key, frame, animation) {
        let config = {
            prefix: `${frame}_`,
            frames: animation.frames || Phaser.Utils.Array.NumberArray(animation.start || 1, animation.end)
        }

        let textureFrames = this.world.textures.get(key).getFrameNames(false)

        // Filter out null frames
        config.frames = config.frames.filter((i) => {
            return textureFrames.includes(`${frame}_${i}`)
        })

        return this.world.anims.generateFrameNames(key, config)
    }

    checkAnim(key) {
        let animation = this.world.anims.get(key)
        return animation && animation.frames.length > 0
    }

    getSecretFrame(frame) {
        let equipped = this.items.equippedFlat

        for (let secret of this.crumbs.secretFrames[frame]) {
            if (this.checkSecretFrames(equipped, secret)) {
                return secret.secret_frame
            }
        }

        return frame
    }

    checkSecretFrames(equipped, secret) {
        for (let item in equipped) {
            if (equipped[item] !== secret[item]) {
                return false
            }
        }

        // Only return true if frame is found in crumbs
        return secret.secret_frame in this.crumbs.penguin
    }
}
