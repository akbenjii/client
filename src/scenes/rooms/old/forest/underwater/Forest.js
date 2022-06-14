import RoomScene from '@scenes/rooms/RoomScene'


/* START OF COMPILED CODE */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bridge_front;
        /** @type {Phaser.GameObjects.Sprite} */
        this.log_front;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfall2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfall1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfall_down;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.shipwreck;
        /** @type {Phaser.GameObjects.Sprite[]} */
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
        const bg = this.add.sprite(722, 448, "underwaterforest", "bg");

        // bridge_front
        const bridge_front = this.add.sprite(561.9425196422718, 599.3213422553359, "underwaterforest", "bridge_front");
        bridge_front.setOrigin(0.446474972517503, 0.9226182988175686);

        // log_front
        const log_front = this.add.sprite(951.5132810649637, 785.8428090953325, "underwaterforest", "log_front");
        log_front.setOrigin(0.4796373642119966, 0.9001807304032005);

        // waterfall2
        const waterfall2 = this.add.sprite(1011, 278, "underwaterforest", "waterfall0001");

        // waterfall1
        const waterfall1 = this.add.sprite(599, 280, "underwaterforest", "waterfall0001");
        waterfall1.scaleX = -1;

        // waterfall_down
        const waterfall_down = this.add.sprite(1323, 988, "underwaterforest", "waterfall_down0001");

        // fg
        const fg = this.add.sprite(52.06503317191019, 989.6783965833829, "underwaterforest", "fg");
        fg.setOrigin(0.45536253887447903, 0.8537278778139583);

        // shipwreck
        const shipwreck = this.add.sprite(791, 382, "underwaterforest", "shipwreck0001");

        // lists
        const sort = [fg, log_front, bridge_front];

        this.bg = bg;
        this.bridge_front = bridge_front;
        this.log_front = log_front;
        this.waterfall2 = waterfall2;
        this.waterfall1 = waterfall1;
        this.waterfall_down = waterfall_down;
        this.fg = fg;
        this.shipwreck = shipwreck;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create(){
        super.create()
        this.waterfall1.play("uwforest_waterfall")
        this.waterfall2.play("uwforest_waterfall")
        this.waterfall_down.play("uwforest_waterfall_down")
        this.shipwreck.play("uwforest_shipwreck")
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
