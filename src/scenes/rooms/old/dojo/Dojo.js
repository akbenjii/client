import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class Dojo extends RoomScene {

    constructor() {
        super("Dojo");

        /** @type {Phaser.GameObjects.Sprite} */
        this.dojodoor_png;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'dojo': () => this.interface.main.map.visible = true,
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojo-pack", "assets/media/rooms/old/dojo/dojo-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        const bg_png = this.add.image(764, 481, "dojo", "dojo_bg_2005.png");
        bg_png.scaleX = 1.01;
        bg_png.scaleY = 1.01;

        // dojodoor_png
        const dojodoor_png = this.add.sprite(386, 505, "dojo", "dojodoor.png");

        // dojodoor_png (components)
        const dojodoor_pngButton = new Button(dojodoor_png);
        dojodoor_pngButton.spriteName = "dojodoor.png";
        dojodoor_pngButton.activeFrame = false;
        dojodoor_pngButton.pixelPerfect = true;
        const dojodoor_pngMoveTo = new MoveTo(dojodoor_png);
        dojodoor_pngMoveTo.x = 386;
        dojodoor_pngMoveTo.y = 508;

        this.dojodoor_png = dojodoor_png;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
