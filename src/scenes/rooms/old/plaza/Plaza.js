import RoomScene from '../RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 1284, 720),
            'pet': () => this.triggerRoom(310, 818, 520),
            'cave': () => this.triggerRoom(806, 1180, 614),
            'pizza': () => this.triggerRoom(330, 837, 500)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("plaza-pack", "assets/media/rooms/old/plaza/plaza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky_png
        const sky_png = this.add.image(0, 0, "plaza", "sky.png");
        sky_png.setOrigin(0, 0);

        // tree2_png
        this.add.image(47, 321, "plaza", "tree2.png");

        // tree3_png
        this.add.image(105, 300, "plaza", "tree3.png");

        // tree4_png
        this.add.image(195, 279, "plaza", "tree4.png");

        // tree9_png
        this.add.image(1450, 287, "plaza", "tree9.png");

        // bg_png
        this.add.image(759, 569, "plaza", "bg.png");

        // tree1_png
        this.add.image(185, 362, "plaza", "tree1.png");

        // snow2_png
        this.add.image(781, 318, "plaza", "snow2.png");

        // petbuilding_png
        this.add.image(455, 293, "plaza", "petbuilding.png");

        // tree5_png
        const tree5_png = this.add.image(667, 441, "plaza", "tree5.png");
        tree5_png.setOrigin(0.013089005235602094, 1.0458333333333334);

        // snow1_png
        this.add.image(744, 416, "plaza", "snow1.png");

        // signholder_png
        this.add.image(287, 212, "plaza", "signholder.png");

        // pufflesign_png
        this.add.image(254, 220, "plaza", "pufflesign.png");

        // tree7_png
        this.add.image(951, 233, "plaza", "tree7.png");

        // tree8_png
        this.add.image(1033, 214, "plaza", "tree8.png");

        // tree6_png
        this.add.image(987, 284, "plaza", "tree6.png");

        // pizzabuilding_png
        this.add.image(1252, 269, "pizza_bd_correct");

        // pufflessign_png
        this.add.image(494, 387, "plaza", "pufflessign.png");

        // lightpost_png
        this.add.image(136, 680, "plaza", "lightpost.png");

        // petdoor_png
        const petdoor_png = this.add.image(343, 451, "plaza", "petdoor.png");

        // manhole_png
        const manhole_png = this.add.image(568, 474, "plaza", "manhole.png");

        // pizzadoor_png
        const pizzadoor_png = this.add.image(1186, 416, "plaza", "pizzadoor.png");

        // table2_png
        this.add.image(926, 415, "plaza", "table2.png");

        // table1_png
        this.add.image(853, 425, "plaza", "table1.png");

        // lists
        const sort = [];

        // petdoor_png (components)
        const petdoor_pngButton = new Button(petdoor_png);
        petdoor_pngButton.spriteName = "petdoor.png";
        petdoor_pngButton.activeFrame = false;
        petdoor_pngButton.pixelPerfect = true;
        const petdoor_pngMoveTo = new MoveTo(petdoor_png);
        petdoor_pngMoveTo.x = 343;
        petdoor_pngMoveTo.y = 501;

        // manhole_png (components)
        const manhole_pngButton = new Button(manhole_png);
        manhole_pngButton.spriteName = "manhole.png";
        manhole_pngButton.activeFrame = false;
        manhole_pngButton.pixelPerfect = true;
        const manhole_pngMoveTo = new MoveTo(manhole_png);
        manhole_pngMoveTo.x = 568;
        manhole_pngMoveTo.y = 474;

        // pizzadoor_png (components)
        const pizzadoor_pngButton = new Button(pizzadoor_png);
        pizzadoor_pngButton.spriteName = "pizzadoor.png";
        pizzadoor_pngButton.activeFrame = false;
        pizzadoor_pngButton.pixelPerfect = true;
        const pizzadoor_pngMoveTo = new MoveTo(pizzadoor_png);
        pizzadoor_pngMoveTo.x = 1186;
        pizzadoor_pngMoveTo.y = 515;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
