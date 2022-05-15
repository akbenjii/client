import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class Dojo extends RoomScene {

    constructor() {
        super("Dojo");

        /** @type {Phaser.GameObjects.Sprite} */
        this.dojodoor_png;
        /** @type {Phaser.GameObjects.Sprite} */
        this.magic_steam0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.magic_bubbles0001;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'dojo': () => this.triggerRoom(321, 760, 672)
        }
        this.music = 'dojo'
        this.roomAnims = true
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

        // belt_legend
        this.add.image(554, 452, "new-dojo", "belt_legend");

        // instructions
        this.add.image(673, 451, "new-dojo", "instructions");

        // cj_spot
        this.add.image(1123, 500, "new-dojo", "cj_spot");

        // magic_pot_back
        this.add.image(941, 562, "new-dojo", "magic_pot_back");

        // magic_steam0001
        const magic_steam0001 = this.add.sprite(940, 502, "new-dojo", "magic_steam0001");

        // magic_bubbles0001
        const magic_bubbles0001 = this.add.sprite(941, 541, "new-dojo", "magic_bubbles0001");

        // magic_pot_front
        this.add.image(942, 567, "new-dojo", "magic_pot_front");

        // cj_mat_bottom
        const cj_mat_bottom = this.add.image(352, 811, "new-dojo", "cj_mat_bottom");

        // cj_mat_top_left
        const cj_mat_top_left = this.add.image(598, 704, "new-dojo", "cj_mat_top_left");

        // cj_mat_top_right
        const cj_mat_top_right = this.add.image(914, 704, "new-dojo", "cj_mat_top_right");

        // cj_mat_bottom_right
        const cj_mat_bottom_right = this.add.image(1176, 811, "new-dojo", "cj_mat_bottom_right");

        // dojodoor_png (components)
        const dojodoor_pngButton = new Button(dojodoor_png);
        dojodoor_pngButton.spriteName = "dojodoor.png";
        dojodoor_pngButton.activeFrame = false;
        dojodoor_pngButton.pixelPerfect = true;
        const dojodoor_pngMoveTo = new MoveTo(dojodoor_png);
        dojodoor_pngMoveTo.x = 386;
        dojodoor_pngMoveTo.y = 508;

        // cj_mat_bottom (components)
        const cj_mat_bottomButton = new Button(cj_mat_bottom);
        cj_mat_bottomButton.spriteName = "cj_mat_bottom";
        cj_mat_bottomButton.activeFrame = false;
        cj_mat_bottomButton.pixelPerfect = true;
        new MoveTo(cj_mat_bottom);

        // cj_mat_top_left (components)
        const cj_mat_top_leftButton = new Button(cj_mat_top_left);
        cj_mat_top_leftButton.spriteName = "cj_mat_top_left";
        cj_mat_top_leftButton.activeFrame = false;
        cj_mat_top_leftButton.pixelPerfect = true;
        new MoveTo(cj_mat_top_left);

        // cj_mat_top_right (components)
        const cj_mat_top_rightButton = new Button(cj_mat_top_right);
        cj_mat_top_rightButton.spriteName = "cj_mat_top_right";
        cj_mat_top_rightButton.activeFrame = false;
        cj_mat_top_rightButton.pixelPerfect = true;
        new MoveTo(cj_mat_top_right);

        // cj_mat_bottom_right (components)
        const cj_mat_bottom_rightButton = new Button(cj_mat_bottom_right);
        cj_mat_bottom_rightButton.spriteName = "cj_mat_bottom_right";
        cj_mat_bottom_rightButton.activeFrame = false;
        cj_mat_bottom_rightButton.pixelPerfect = true;
        new MoveTo(cj_mat_bottom_right);

        this.dojodoor_png = dojodoor_png;
        this.magic_steam0001 = magic_steam0001;
        this.magic_bubbles0001 = magic_bubbles0001;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.magic_steam0001.play('magic_steam')
        this.magic_bubbles0001.play('magic_bubbles')
    }

    onJitsu() {
        this.triggerGame("card", 998)
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
