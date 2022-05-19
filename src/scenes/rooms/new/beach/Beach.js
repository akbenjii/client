import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Sprite} */
        this.woodrailing;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftrocks;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lighthousedoor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lighthouserailing;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightchair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightchairarm;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftchair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snowcastle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.trees;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightrocks;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 450, 750),
            'dock': () => this.triggerRoom(800, 240, 420),
            'light': () => this.triggerRoom(410, 530, 530),
            'ship': null
        }
        this.music = "582"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beach-pack-new", "assets/media/rooms/new/beach/beach-pack-new.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(726, 456, "beach-new", "bg");

        // woodrailing
        const woodrailing = this.add.sprite(161, 524, "beach-new", "woodrailing");

        // leftrocks
        const leftrocks = this.add.sprite(249, 650, "beach-new", "leftrocks");

        // lighthousedoor
        const lighthousedoor = this.add.sprite(397, 322, "beach-new", "lighthousedoor");

        // lighthouserailing
        const lighthouserailing = this.add.sprite(382, 411, "beach-new", "lighthouserailing");

        // rightchair
        const rightchair = this.add.sprite(1013, 480, "beach-new", "rightchair");

        // rightchairarm
        const rightchairarm = this.add.sprite(948.0086684597807, 559.7832885054825, "beach-new", "rightchairarm");
        rightchairarm.setOrigin(0.48642011588740636, 0.7478328850548246);

        // leftchair
        const leftchair = this.add.sprite(850, 545, "beach-new", "leftchair");

        // snowcastle
        const snowcastle = this.add.sprite(775, 690, "beach-new", "snowcastle");

        // trees
        const trees = this.add.sprite(1382, 441, "beach-new", "trees");

        // rightrocks
        const rightrocks = this.add.sprite(1352, 616, "beach-new", "rightrocks");

        // lists
        const sort = [rightrocks, trees, snowcastle, leftchair, rightchairarm, rightchair, lighthouserailing, lighthousedoor];

        // lighthousedoor (components)
        const lighthousedoorButton = new Button(lighthousedoor);
        lighthousedoorButton.spriteName = "lighthousedoor";
        lighthousedoorButton.activeFrame = false;
        const lighthousedoorMoveTo = new MoveTo(lighthousedoor);
        lighthousedoorMoveTo.x = 420;
        lighthousedoorMoveTo.y = 400;

        this.woodrailing = woodrailing;
        this.leftrocks = leftrocks;
        this.lighthousedoor = lighthousedoor;
        this.lighthouserailing = lighthouserailing;
        this.rightchair = rightchair;
        this.rightchairarm = rightchairarm;
        this.leftchair = leftchair;
        this.snowcastle = snowcastle;
        this.trees = trees;
        this.rightrocks = rightrocks;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
