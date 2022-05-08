import RoomScene from '@scenes/rooms/RoomScene'

import { MoveTo, SimpleButton, ShowHint, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /** @type {Phaser.GameObjects.Image} */
        this.scarf;
        /** @type {Phaser.GameObjects.Image} */
        this.shoes;
        /** @type {Phaser.GameObjects.Image} */
        this.jacket;


        /* START-USER-CTR-CODE */
         this.roomTriggers = {
            'yumyuck': () => this.triggerGame("yumyuck", 911)
         }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("berg-pack", "assets/media/rooms/old/berg/berg-pack.json");
    }

    /** @returns {void} */
    _create() {

        // berg_bg
        const berg_bg = this.add.image(-6, 2, "berg", "bg.png");
        berg_bg.setOrigin(0, 0);

        // image
        this.add.image(760, 105, "bergsky");

        // scarf
        const scarf = this.add.image(946, 495, "scarf");

        // shoes
        const shoes = this.add.image(735, 638, "shoes");

        // jacket
        const jacket = this.add.image(432, 511, "jacket");

        this.scarf = scarf;
        this.shoes = shoes;
        this.jacket = jacket;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        super.create()

        this.roomZones = {
            'scarf': { 
                key: this.scarf,
                callback: () => this.interface.prompt.showItem(35004)
            },
            'shoes': { 
                key: this.shoes, 
                callback: () => this.interface.prompt.showItem(35003)
            },
			'jacket': { 
                key: this.jacket, 
                callback: () => this.interface.prompt.showItem(35002)
            }
        }

        super.addZones()
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
