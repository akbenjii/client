import RoomScene from '../RoomScene'

import { Button, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class Shack extends RoomScene {

    constructor() {
        super("Shack");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'mine': () => this.triggerRoom(808, 760, 512)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("shack-pack", "assets/media/rooms/old/shack/shack-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png_1
        const bg_png_1 = this.add.image(758, 485, "shack", "bg.png");
        bg_png_1.scaleX = 1.02;
        bg_png_1.scaleY = 1.02;

        // left_tree_png
        this.add.image(121, 738, "shack", "left tree.png");

        // right_tree_png
        this.add.image(1372, 743, "shack", "right tree.png");

        // orange_png
        const orange_png = this.add.image(612, 426, "shack", "orange.png");

        // wood_png
        this.add.image(1097, 361, "shack", "wood.png");

        // cart2_png
        const cart2_png = this.add.image(628, 517, "shack", "cart2.png");

        // cart1_png
        const cart1_png = this.add.image(530, 557, "shack", "cart1.png");

        // coal2_png
        const coal2_png = this.add.image(785, 601, "shack", "coal2.png");

        // red_png
        const red_png = this.add.image(728, 567, "shack", "red.png");

        // coal1_png
        const coal1_png = this.add.image(692, 604, "shack", "coal1.png");

        // water_png
        this.add.image(938, 577, "shack", "water.png");

        // lists
        const sort = [red_png, coal2_png, coal1_png, cart1_png, cart2_png, orange_png];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
