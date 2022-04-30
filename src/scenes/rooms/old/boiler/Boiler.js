import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class Boiler extends RoomScene {

    constructor() {
        super("Boiler");

        /** @type {Phaser.GameObjects.Sprite} */
        this.drawer1_png;
        /** @type {Phaser.GameObjects.Sprite} */
        this.smoke;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'dance': () => this.triggerRoom(120, 870, 330),
            'cave': () => this.triggerRoom(806, 220, 620)
        }

        this.roomAnims = true
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("boiler-pack", "assets/media/rooms/old/boiler/boiler-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        const bg_png = this.add.image(760, 485, "boiler", "bg.png");
        bg_png.scaleX = 1.02;
        bg_png.scaleY = 1.02;

        // boiler_door_png
        const boiler_door_png = this.add.image(582, 363, "boiler", "boiler-door.png");
        boiler_door_png.scaleX = 1.02;
        boiler_door_png.scaleY = 1.02;

        // drawer1.png
        const drawer1_png = this.add.sprite(826, 550, "boiler", "drawer1.png0001");
        drawer1_png.scaleX = 1.02;
        drawer1_png.scaleY = 1.02;

        // drawer1_png0001
        this.add.image(828, 473, "boiler", "drawer1.png0001");

        // drawer1_png0001_1
        this.add.image(832, 397, "boiler", "drawer1.png0001");

        // drawer1_png0001_1_1
        this.add.image(947, 472, "boiler", "drawer1.png0001");

        // drawer1_png0001_2
        this.add.image(943, 548, "boiler", "drawer1.png0001");

        // drawer1_png0001_1_1_1
        this.add.image(949, 399, "boiler", "drawer1.png0001");

        // smoke
        const smoke = this.add.sprite(250, 198, "boiler", "smoke0001.png");

        // boiler_door_png (components)
        const boiler_door_pngButton = new Button(boiler_door_png);
        boiler_door_pngButton.spriteName = "boiler-door.png";
        boiler_door_pngButton.activeFrame = false;
        boiler_door_pngButton.pixelPerfect = true;
        const boiler_door_pngMoveTo = new MoveTo(boiler_door_png);
        boiler_door_pngMoveTo.x = 582;
        boiler_door_pngMoveTo.y = 500;

        // drawer1_png (components)
        const drawer1_pngSimpleButton = new SimpleButton(drawer1_png);
        drawer1_pngSimpleButton.hoverCallback = () => this.onDrawerOver();
        drawer1_pngSimpleButton.hoverOutCallback = () => this.onDrawerOut();
        drawer1_pngSimpleButton.pixelPerfect = true;
        const drawer1_pngShowHint = new ShowHint(drawer1_png);
        drawer1_pngShowHint.text = "Coming Soon";

        this.drawer1_png = drawer1_png;
        this.smoke = smoke;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onDrawerOver() {
        this.drawer1_png.play('drawerhover')
    }

    onDrawerOut() {
        this.drawer1_png.play('drawerout')
    }

    create() {
        super.create()

        this.smoke.play("boiler-steam")
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
