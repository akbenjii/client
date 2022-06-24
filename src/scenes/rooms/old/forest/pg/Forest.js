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
            'shack': null,
            'cove': () => this.triggerRoom(810, 520, 416),
            'lake': null
        }
        this.music='213'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forest-pack", "assets/media/rooms/old/forest/forest-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-24, -13, "pg-forest", "test");
        bg.setOrigin(0, 0);

        // bottom_rope
        const bottom_rope = this.add.image(692.2336764974109, 405.06971009859444, "pg-forest", "bottom_rope");
        bottom_rope.setOrigin(0.5443671910832643, 0.7085215442858688);

        // tree
        const tree = this.add.image(-17, 272, "forest", "tree");
        tree.setOrigin(0, 0);

        // fg
        const fg = this.add.image(-1, 969, "forest", "fg");
        fg.setOrigin(0, 1);

        // middle
        const middle = this.add.image(776, 548, "forest", "middle");
        middle.setOrigin(0.5, 0.608540925266904);

        // stairs
        const stairs = this.add.image(1129, 302, "forest", "stairs");
        stairs.setOrigin(0, 0);

        // rail
        const rail = this.add.image(1441, 831, "forest", "rail");
        rail.setOrigin(0.5, 0.5885714285714285);

        // left_green_sign
        this.add.image(470, 266, "pg-forest", "left_green_sign");

        // right_green_sign
        this.add.image(1216, 450, "pg-forest", "right_green_sign");

        // top_rope
        const top_rope = this.add.image(709, 265, "pg-forest", "top_rope");
        top_rope.setOrigin(0.5253246356183233, 0.5573771192956499);

        // right_ropes
        const right_ropes = this.add.image(1376.635247899926, 759.7461933891996, "pg-forest", "right_ropes");
        right_ropes.setOrigin(0.5089848785710224, 1.0353053663434968);

        // bottom_rope_right
        const bottom_rope_right = this.add.image(1192.3088196557358, 846.9217493989994, "pg-forest", "bottom_rope_right");
        bottom_rope_right.setOrigin(0.4715686039741561, 1.0275222877084322);

        // lists
        const sort = [rail, middle, fg, tree, bottom_rope, right_ropes, bottom_rope_right];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
