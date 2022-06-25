import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.lift_sign;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sled_penguins;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'phone': null
        }
        this.roomAnims = true
        this.music = '213'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("village-pack", "assets/media/rooms/old/village/village-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-25, -15, "village", "bg");
        bg.setOrigin(0, 0);

        // tv
        this.add.image(788, 311, "pg-village", "tv");

        // sled_racing_sign
        this.add.image(494, 343, "pg-village", "sled_racing_sign");

        // snow_stuff
        this.add.image(760, 558, "pg-village", "snow_stuff");

        // lift_snow
        this.add.image(277, 214, "pg-village", "lift_snow");

        // lower_sled
        this.add.image(141, 458, "pg-village", "lower_sled");

        // lodge_door
        const lodge_door = this.add.image(1075, 317, "village", "lodge_door");
        lodge_door.setOrigin(0.27807486631016043, 0.5560538116591929);

        // lodge_stairs
        this.add.image(972, 443, "village", "lodge_stairs");

        // lodge_front
        const lodge_front = this.add.image(1087, 388, "village", "lodge_front");
        lodge_front.setOrigin(0.4807692307692308, 0.5352112676056338);

        // lodge_snow
        const lodge_snow = this.add.image(1104, 428, "village", "lodge_snow");
        lodge_snow.setOrigin(0.5368217054263565, 0.4838709677419355);

        // phone
        this.add.image(1373, 315, "village", "phone");

        // phone_door
        const phone_door = this.add.image(1350, 386, "village", "phone_door");
        phone_door.setOrigin(0.22797927461139897, 0.6206896551724138);

        // phone_snow
        const phone_snow = this.add.image(1361, 594, "village", "phone_snow");
        phone_snow.setOrigin(0.509090909090909, 0.5272727272727272);

        // lift
        this.add.image(348, 199, "village", "lift");

        // smoke
        const smoke = this.add.sprite(1110, 31, "village", "smoke0001");

        // right_sign
        const right_sign = this.add.image(1471, 667, "village", "right_sign");
        right_sign.setOrigin(0.4861111111111111, 0.7831325301204819);

        // chair
        const chair = this.add.sprite(292, 149, "village", "chair0001");

        // track
        this.add.image(732, 796, "pg-village", "track");

        // snow_trees
        const snow_trees = this.add.image(176, 660, "pg-village", "snow_trees");
        snow_trees.scaleX = 1.0881824282865682;
        snow_trees.scaleY = 1.0881824282865682;

        // marathon_sign
        const marathon_sign = this.add.image(1139, 727, "pg-village", "marathon_sign");

        // upper_sled
        this.add.image(209, 247, "pg-village", "upper_sled");

        // tour_stand
        const tour_stand = this.add.image(246.8178712854658, 744.1008333053408, "pg-village", "tour_stand");
        tour_stand.setOrigin(0.5230520157199321, 0.7215869762441004);
        tour_stand.flipX = true;

        // epf_flags
        this.add.image(1546, 146, "pg-village", "epf_flags");

        // green_flags
        this.add.image(1219, 152, "pg-village", "green_flags");

        // lift_sign
        const lift_sign = this.add.sprite(597, 142, "pg-village", "lift_sign0001");

        // start_sign
        const start_sign = this.add.image(1105, 475, "pg-village", "start_sign");

        // right_start_stick
        const right_start_stick = this.add.image(1194, 505, "pg-village", "right_start_stick");

        // rope_down_1
        const rope_down_1 = this.add.image(1105, 616, "pg-village", "rope_down_1");

        // rope_down_2
        const rope_down_2 = this.add.image(974, 639, "pg-village", "rope_down_2");

        // rope_down_3
        const rope_down_3 = this.add.image(852, 666, "pg-village", "rope_down_3");

        // rope_down_4
        const rope_down_4 = this.add.image(552, 801, "pg-village", "rope_down_4");

        // rope_down_5
        const rope_down_5 = this.add.image(436, 910, "pg-village", "rope_down_5");

        // rope_up_1
        const rope_up_1 = this.add.image(955, 556, "pg-village", "rope_up_1");

        // rope_up_2
        const rope_up_2 = this.add.image(846, 566, "pg-village", "rope_up_2");

        // rope_up_3
        const rope_up_3 = this.add.image(735, 588, "pg-village", "rope_up_3");

        // rope_up_4
        const rope_up_4 = this.add.image(449, 692, "pg-village", "rope_up_4");

        // rope_up_5
        const rope_up_5 = this.add.image(325, 783, "pg-village", "rope_up_5");

        // rope_up_6
        const rope_up_6 = this.add.image(203, 869, "pg-village", "rope_up_6");

        // rope_up_7
        const rope_up_7 = this.add.image(73, 893, "pg-village", "rope_up_7");

        // green_flag_mountain
        const green_flag_mountain = this.add.image(415, 389, "pg-village", "green_flag_mountain");
        green_flag_mountain.angle = -8;

        // sled_penguins
        const sled_penguins = this.add.sprite(783, 286, "pg-village", "sled_penguins0001");

        // lists
        const sort = [marathon_sign, right_start_stick, start_sign, rope_down_1, rope_down_2, rope_down_4, rope_down_5, rope_up_1, rope_up_2, rope_up_3, rope_up_4, rope_up_5, tour_stand, rope_up_6, rope_up_7, rope_down_3];

        // lodge_door (components)
        const lodge_doorButton = new Button(lodge_door);
        lodge_doorButton.spriteName = "lodge_door";
        lodge_doorButton.activeFrame = false;
        const lodge_doorMoveTo = new MoveTo(lodge_door);
        lodge_doorMoveTo.x = 1000;
        lodge_doorMoveTo.y = 400;

        // phone_door (components)
        const phone_doorButton = new Button(phone_door);
        phone_doorButton.spriteName = "phone_door";
        phone_doorButton.activeFrame = false;
        const phone_doorMoveTo = new MoveTo(phone_door);
        phone_doorMoveTo.x = 1340;
        phone_doorMoveTo.y = 480;

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair";
        chairAnimation.end = 179;
        chairAnimation.repeatDelay = 1500;

        // tour_stand (components)
        const tour_standSimpleButton = new SimpleButton(tour_stand);
        tour_standSimpleButton.callback = () => this.interface.prompt.showItem(428);

        this.lift_sign = lift_sign;
        this.sled_penguins = sled_penguins;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.lift_sign.play('pg_liftsign')
        this.sled_penguins.play('penguin_sled')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
