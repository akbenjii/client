import RoomScene from '../RoomScene'

import { Button, MoveTo } from '@components/components'

/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {Phaser.GameObjects.Sprite} */
        this.puck_png;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'rink': () => this.triggerRoom(801, 560, 400)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("rink-pack", "assets/media/rooms/old/rink/rink-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        const bg_png = this.add.image(751, 379, "rink", "bg.png");
        bg_png.scaleX = 1.03;
        bg_png.scaleY = 1.03;

        // foreground_png
        const foreground_png = this.add.image(761, 564, "rink", "foreground.png");
        foreground_png.scaleX = 1.03;
        foreground_png.scaleY = 1.03;

        // glass_png
        const glass_png = this.add.image(508, 261, "rink", "glass.png");
        glass_png.scaleX = 1.03;
        glass_png.scaleY = 1.03;

        // left_net2_png
        const left_net2_png = this.add.image(283, 423, "rink", "left net2.png");
        left_net2_png.scaleX = 1.03;
        left_net2_png.scaleY = 1.03;

        // door_png
        const door_png = this.add.image(771, 260, "rink", "door.png");
        door_png.scaleX = 1.03;
        door_png.scaleY = 1.03;

        // left_net_png
        const left_net_png = this.add.image(244, 460, "rink", "left net.png");
        left_net_png.scaleX = 1.03;
        left_net_png.scaleY = 1.03;

        // right_net2_png
        const right_net2_png = this.add.image(1253, 423, "rink", "right net2.png");
        right_net2_png.scaleX = 1.03;
        right_net2_png.scaleY = 1.03;

        // right_net_png
        const right_net_png = this.add.image(1291, 460, "rink", "right net.png");
        right_net_png.scaleX = 1.03;
        right_net_png.scaleY = 1.03;

        // puck_png
        const puck_png = this.add.sprite(791, 481, "rink", "puck.png");
        puck_png.scaleX = 1.03;
        puck_png.scaleY = 1.03;

        // lists
        const sort = [left_net2_png, left_net_png, right_net2_png, right_net_png, glass_png];

        // door_png (components)
        const door_pngButton = new Button(door_png);
        door_pngButton.spriteName = "door.png";
        door_pngButton.activeFrame = false;
        const door_pngMoveTo = new MoveTo(door_png);
        door_pngMoveTo.x = 781;
        door_pngMoveTo.y = 280;

        this.puck_png = puck_png;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
