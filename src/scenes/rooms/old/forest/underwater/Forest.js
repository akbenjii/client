import RoomScene from '@scenes/rooms/RoomScene'


/* START OF COMPILED CODE */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Array<any>} */
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

        // plant
        this.add.image(755, 373, "forestuw", "plant");

        // forestmain
        this.add.image(457, 471, "forestuw", "forestmain");

        // bright
        this.add.image(1358, 660, "forestuw", "bright");

        // rail
        this.add.image(1215, 923, "forestuw", "rail");

        // tree
        this.add.image(207, 720, "forestuw", "tree");

        // board
        this.add.image(1334, 639, "forestuw", "board");

        // p2
        this.add.image(488, 297, "forestuw", "p2");

        // lists
        const sort = [];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
