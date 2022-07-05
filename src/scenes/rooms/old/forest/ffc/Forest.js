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
        const bg = this.add.image(-24, -13, "forest", "bg");
        bg.setOrigin(0, 0);

        // rock0001
        const rock0001 = this.add.image(254, 681, "forest", "rock0001");
        rock0001.setOrigin(0.6005747126436781, 0.7300884955752213);

        // shadows
        this.add.image(756, 564, "ffc-forest", "shadows");

        // tree
        const tree = this.add.image(-17, 272, "forest", "tree");
        tree.setOrigin(0, 0);

        // fg
        const fg = this.add.image(-1, 969, "forest", "fg");
        fg.setOrigin(0, 1);

        // box
        const box = this.add.image(823, 307, "ffc-forest", "box");

        // table
        const table = this.add.image(528, 378, "ffc-forest", "table");

        // middle
        const middle = this.add.image(781, 548, "forest", "middle");
        middle.setOrigin(0.5, 0.608540925266904);

        // stairs
        const stairs = this.add.image(1129, 302, "forest", "stairs");
        stairs.setOrigin(0, 0);

        // rail
        const rail = this.add.image(1441, 831, "forest", "rail");
        rail.setOrigin(0.5, 0.5885714285714285);

        // sign
        const sign = this.add.image(1317, 681, "forest", "sign");
        sign.setOrigin(0.4794520547945205, 0.9397590361445783);

        // balloon_box
        const balloon_box = this.add.image(944, 312, "ffc-forest", "balloon_box");

        // extinguisher
        const extinguisher = this.add.image(1033, 345, "ffc-forest", "extinguisher");
        extinguisher.scaleX = 0.5913328597450803;
        extinguisher.scaleY = 0.5913328597450803;

        // wood
        this.add.image(1072, 686, "ffc-forest", "wood");

        // sign_1
        const sign_1 = this.add.image(310, 298, "ffc-forest", "sign");

        // lists
        const sort = [sign, rail, middle, fg, tree, rock0001, box, balloon_box, extinguisher, table, sign_1];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
