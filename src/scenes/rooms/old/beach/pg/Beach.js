import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Sprite} */
        this.fire;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 450, 750),
            'dock': () => this.triggerRoom(800, 240, 420),
            'lighthouse': () => this.triggerRoom(410, 530, 530),
            'ship': null
        }
        this.roomAnims = true
		this.music = '213'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beach-pack", "assets/media/rooms/old/beach/beach-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-25, -20, "beach", "bg");
        bg.setOrigin(0, 0);

        // go_team
        this.add.image(516, 200, "pg-beach", "go_team");

        // trail
        this.add.image(904, 559, "pg-beach", "trail");

        // upper_rope_92
        const upper_rope_92 = this.add.image(1388, 413, "pg-beach", "upper_rope_92");

        // lighthouse_door
        const lighthouse_door = this.add.image(383, 214, "beach", "lighthouse_door");
        lighthouse_door.setOrigin(0, 0);

        // cage
        const cage = this.add.image(232, 352, "beach", "cage");
        cage.setOrigin(0.4935064935064935, 0.5);

        // buoy
        const buoy = this.add.image(194, 428, "beach", "buoy");
        buoy.setOrigin(0.5185185185185185, 0.4965034965034965);

        // fish
        const fish = this.add.image(297, 392, "beach", "fish");
        fish.setOrigin(0.4782608695652174, 0.4956521739130435);

        // balloons
        this.add.image(265, 271, "pg-beach", "balloons");

        // net
        const net = this.add.image(290, 465, "beach", "net");
        net.setOrigin(0.49767441860465117, 0.5);

        // fg
        const fg = this.add.image(1217, 293, "beach", "fg");
        fg.setOrigin(0, 0);

        // sign
        const sign = this.add.image(1146, 323, "beach", "sign");
        sign.setOrigin(0, 0);

        // chair_ground
        const chair_ground = this.add.image(906, 524, "beach", "chair_ground");
        chair_ground.setOrigin(0, 0);

        // fire
        const fire = this.add.sprite(1037, 72, "pg-beach", "fire0001");
        fire.scaleX = 0.2354890337076162;
        fire.scaleY = 0.2354890337076162;

        // fire_holder
        this.add.image(1036, 94, "pg-beach", "fire_holder");

        // start
        this.add.image(933, 246, "pg-beach", "start");

        // gatorade
        const gatorade = this.add.image(998.7586770421385, 520.965291831446, "pg-beach", "gatorade");
        gatorade.setOrigin(0.47680830549618813, 0.6233252460673298);

        // rock
        this.add.image(282, 668, "pg-beach", "rock");

        // bench
        const bench = this.add.image(757.7586770421385, 678.2644617368975, "pg-beach", "bench");
        bench.setOrigin(0.4775050516829979, 0.4312162341487991);

        // upper_rope_1
        this.add.image(744, 326, "pg-beach", "upper_rope_1");

        // upper_rope_3
        const upper_rope_3 = this.add.image(284, 522, "pg-beach", "upper_rope_3");

        // upper_rope_4
        const upper_rope_4 = this.add.image(315.3340966139988, 574.6679797802544, "pg-beach", "upper_rope_4");
        upper_rope_4.setOrigin(0.3837991834980474, 0.29683787069733775);

        // upper_rope_5
        const upper_rope_5 = this.add.image(433, 652, "pg-beach", "upper_rope_5");
        upper_rope_5.setOrigin(0.4945358546166038, 0.5168766009309959);

        // upper_rope_6
        const upper_rope_6 = this.add.image(514, 703, "pg-beach", "upper_rope_6");

        // upper_rope91
        this.add.image(1266, 514, "pg-beach", "upper_rope91");

        // upper_rope_7
        const upper_rope_7 = this.add.image(777, 794, "pg-beach", "upper_rope_7");

        // upper_rope_8
        const upper_rope_8 = this.add.image(1036, 741, "pg-beach", "upper_rope_8");

        // upper_rope_9
        const upper_rope_9 = this.add.image(1176, 640, "pg-beach", "upper_rope_9");

        // green_sign_2
        const green_sign_2 = this.add.image(909, 601, "pg-beach", "green_sign_2");

        // green_sign_1
        this.add.image(630, 312, "pg-beach", "green_sign_1");

        // inner_rope_1
        const inner_rope_1 = this.add.image(867.9922390760437, 299.94850219502354, "pg-beach", "inner_rope_1");
        inner_rope_1.setOrigin(0.6450676042197792, 0.17168519679906633);

        // inner_rope_2
        const inner_rope_2 = this.add.image(465, 508, "pg-beach", "inner_rope_2");

        // inner_rope_3
        const inner_rope_3 = this.add.image(473, 559, "pg-beach", "inner_rope_3");

        // inner_rope_4
        const inner_rope_4 = this.add.image(563, 612, "pg-beach", "inner_rope_4");

        // inner_rope_5
        const inner_rope_5 = this.add.image(634, 679, "pg-beach", "inner_rope_5");

        // inner_rope_6
        const inner_rope_6 = this.add.image(792, 727, "pg-beach", "inner_rope_6");

        // inner_rope_7
        const inner_rope_7 = this.add.image(948, 672, "pg-beach", "inner_rope_7");

        // inner_rope_8
        const inner_rope_8 = this.add.image(1028, 624, "pg-beach", "inner_rope_8");

        // inner_rope_9
        const inner_rope_9 = this.add.image(1108, 583, "pg-beach", "inner_rope_9");

        // inner_rope_92
        const inner_rope_92 = this.add.image(1091, 477, "pg-beach", "inner_rope_92");

        // inner_rope_91
        const inner_rope_91 = this.add.image(1125, 534, "pg-beach", "inner_rope_91");

        // inner_rope_93
        const inner_rope_93 = this.add.image(1283, 390, "pg-beach", "inner_rope_93");

        // lists
        const sort = [net, fish, buoy, cage, upper_rope_3, upper_rope_4, upper_rope_5, upper_rope_6, upper_rope_7, upper_rope_8, upper_rope_9, upper_rope_92, fg, green_sign_2, gatorade, inner_rope_1, inner_rope_2, inner_rope_3, inner_rope_4, inner_rope_5, inner_rope_6, inner_rope_7, inner_rope_8, inner_rope_9, inner_rope_91, inner_rope_92, inner_rope_93];

        // lighthouse_door (components)
        const lighthouse_doorButton = new Button(lighthouse_door);
        lighthouse_doorButton.spriteName = "lighthouse_door";
        lighthouse_doorButton.activeFrame = false;
        const lighthouse_doorMoveTo = new MoveTo(lighthouse_door);
        lighthouse_doorMoveTo.x = 480;
        lighthouse_doorMoveTo.y = 400;

        this.fire = fire;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.fire.play('pgfire')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
