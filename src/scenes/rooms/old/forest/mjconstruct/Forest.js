import RoomScene from '@scenes/rooms/RoomScene'


/* START OF COMPILED CODE */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 1240, 660),
            'shack': () => this.triggerRoom(807, 500, 800),
            'cove': () => this.triggerRoom(810, 520, 416),
            'lake': null
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forest-pack", "assets/media/rooms/old/forest/forest-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-24, -13, "mjc-forest", "testbg.png");
        bg.setOrigin(0, 0);

        // tree
        const tree = this.add.image(-17, 272, "forest", "tree");
        tree.setOrigin(0, 0);

        // cac_png
        const cac_png = this.add.image(275, 675.1922809869769, "mjc-forest", "cac.png");
        cac_png.setOrigin(0.5, 0.7108649065641125);

        // barrel_png
        const barrel_png = this.add.image(157, 574, "mjc-forest", "barrel.png");

        // fg
        const fg = this.add.image(-1, 969, "forest", "fg");
        fg.setOrigin(0, 1);

        // back_logs_png
        this.add.image(1204, 415, "mjc-forest", "back_logs.png");

        // front_log_png
        this.add.image(1192, 425, "mjc-forest", "front_log.png");

        // middle
        const middle = this.add.image(781, 548, "forest", "middle");
        middle.setOrigin(0.5, 0.608540925266904);

        // stairs
        const stairs = this.add.image(1129, 302, "forest", "stairs");
        stairs.setOrigin(0, 0);

        // cac_right_png
        this.add.image(1416, 516, "mjc-forest", "cac_right.png");

        // rail
        const rail = this.add.image(1441, 831, "forest", "rail");
        rail.setOrigin(0.5, 0.5885714285714285);

        // sign
        const sign = this.add.image(1317, 681, "forest", "sign");
        sign.setOrigin(0.4794520547945205, 0.9397590361445783);

        // hay_png
        const hay_png = this.add.image(378, 369, "mjc-forest", "hay.png");

        // cone_png
        const cone_png = this.add.image(254, 379, "mjc-forest", "cone.png");

        // cone_png_1
        const cone_png_1 = this.add.image(509, 317, "mjc-forest", "cone.png");

        // cone_png_2
        const cone_png_2 = this.add.image(451, 424, "mjc-forest", "cone.png");

        // other_cone_png_1_1
        const other_cone_png_1_1 = this.add.image(1110, 583, "mjc-forest", "other_cone.png");

        // coffee_png
        const coffee_png = this.add.image(1035, 619, "mjc-forest", "coffee.png");

        // other_cone_png
        const other_cone_png = this.add.image(908, 646, "mjc-forest", "other_cone.png");

        // other_cone_png_1
        const other_cone_png_1 = this.add.image(1027, 742, "mjc-forest", "other_cone.png");

        // other_cone_png_2
        const other_cone_png_2 = this.add.image(1171, 685, "mjc-forest", "other_cone.png");

        // lists
        const sort = [sign, rail, middle, fg, tree, cac_png, barrel_png, cone_png, cone_png_1, cone_png_2, hay_png, coffee_png, other_cone_png, other_cone_png_1, other_cone_png_2, other_cone_png_1_1];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
