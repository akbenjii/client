import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Sprite} */
        this.redflag;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blueflag;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 1240, 660),
            'rink': () => this.triggerRoom(802, 780, 340),
            'plaza': () => this.triggerRoom(300, 340, 660)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forts-pack", "assets/media/rooms/old/forts/forts-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        this.add.image(772, 488, "forts", "bg.png");

        // snowballs2_png
        const snowballs2_png = this.add.image(608, 623, "forts", "snowballs2.png");

        // redflag
        const redflag = this.add.sprite(632.4024546201628, 641.907951743897, "forts", "flag10001.png");
        redflag.setOrigin(0.46472994725649763, 0.9978153200881809);

        // fort1_png
        const fort1_png = this.add.image(706, 685, "forts", "fort1.png");

        // blueflag
        const blueflag = this.add.sprite(962, 329, "forts", "flag20001.png");

        // fort2_png
        const fort2_png = this.add.image(1021, 432, "forts", "fort2.png");

        // lists
        const sort = [fort2_png, fort1_png, snowballs2_png, redflag, blueflag];

        this.redflag = redflag;
        this.blueflag = blueflag;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

	create(){
		super.create()
		
		this.redflag.play("redflag")
		this.blueflag.play("blueflag")
		
	}

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
