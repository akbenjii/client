import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /** @type {Phaser.GameObjects.Sprite} */
        this.stage;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 1284, 720),
            'pet': () => this.triggerRoom(310, 818, 520),
            'cave': () => { this.triggerRoom(806, 1180, 614); this.world.client.stampEarned(10); },
            'stage1': () => this.triggerRoom(340, 240, 660),
            'stage2': () => this.triggerRoom(340, 240, 660),
            'pizza': () => this.triggerRoom(330, 1200, 400),
            'forest': () => this.triggerRoom(809, 270, 430)
        }
        this.roomAnims = true
        this.music = '213'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("plaza-pack", "assets/media/rooms/old/plaza/plaza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-18, -2, "plaza", "bg");
        bg.setOrigin(0, 0);

        // track
        this.add.image(761, 637, "pg-plaza", "track");

        // pet_shop
        this.add.image(450, 297, "pg-plaza", "pet_shop");

        // stage
        const stage = this.add.sprite(837, 240, "pg-plaza", "stage0001");

        // pet_door
        const pet_door = this.add.image(333, 489, "plaza", "pet_door");
        pet_door.setOrigin(0.473118, 0.678218);

        // cave_door
        const cave_door = this.add.image(564, 510, "plaza", "cave_door");
        cave_door.setOrigin(0.473684, 0.781513);

        // pizza_door
        const pizza_door = this.add.image(1194, 410, "plaza", "pizza_door");
        pizza_door.setOrigin(0.5311, 0.442211);

        // rope_under_3
        this.add.image(93, 585, "pg-plaza", "rope_under_3");

        // rope_under_2
        this.add.image(50, 542, "pg-plaza", "rope_under_2");

        // rope_under_4
        this.add.image(134, 622, "pg-plaza", "rope_under_4");

        // rope_under_5
        this.add.image(135, 688, "pg-plaza", "rope_under_5");

        // lamp
        const lamp = this.add.image(129, 827, "plaza", "lamp");
        lamp.setOrigin(0.5099009900990099, 0.9323076923076923);

        // stage_door_1
        const stage_door_1 = this.add.image(733, 385, "plaza", "stage_door_1");
        stage_door_1.setOrigin(0.5045871559633027, 0.4567901234567901);

        // stage_door_2
        const stage_door_2 = this.add.image(958, 385, "plaza", "stage_door_2");
        stage_door_2.setOrigin(0.5045871559633027, 0.4567901234567901);

        // tickets
        const tickets = this.add.image(846, 457, "plaza", "tickets");
        tickets.setOrigin(0.49612403100775193, 0.9247311827956989);

        // puffle
        this.add.image(250, 205, "pg-plaza", "puffle");

        // upper_rope_1
        this.add.image(137, 429, "pg-plaza", "upper_rope_1");

        // left_blue_flags
        this.add.image(72, 279, "pg-plaza", "left_blue_flags");

        // puffle_sign
        this.add.image(488, 390, "pg-plaza", "puffle_sign");

        // balloons
        this.add.image(848, 323, "pg-plaza", "balloons");

        // team_blue
        this.add.image(1359, 166, "pg-plaza", "team_blue");

        // upper_rope_2
        this.add.image(261, 565, "pg-plaza", "upper_rope_2");

        // upper_rope_3
        this.add.image(276, 621, "pg-plaza", "upper_rope_3");

        // upper_rope_4
        const upper_rope_4 = this.add.image(327, 666, "pg-plaza", "upper_rope_4");

        // upper_rope_5
        this.add.image(375, 726, "pg-plaza", "upper_rope_5");

        // upper_rope_6
        const upper_rope_6 = this.add.image(540, 772, "pg-plaza", "upper_rope_6");

        // upper_rope_7
        this.add.image(1084, 771, "pg-plaza", "upper_rope_7");

        // upper_rope_13
        this.add.image(1436, 533, "pg-plaza", "upper_rope_13");

        // upper_rope_11
        this.add.image(1331, 603, "pg-plaza", "upper_rope_11");

        // upper_rope_10
        this.add.image(1282, 654, "pg-plaza", "upper_rope_10");

        // upper_rope_9
        this.add.image(1290, 707, "pg-plaza", "upper_rope_9");

        // upper_rope_8
        const upper_rope_8 = this.add.image(1274, 750, "pg-plaza", "upper_rope_8");

        // rope_under_1
        this.add.image(16, 496, "pg-plaza", "rope_under_1");

        // rope_under_6
        const rope_under_6 = this.add.image(163, 740, "pg-plaza", "rope_under_6");

        // rope_under_7
        const rope_under_7 = this.add.image(231, 778, "pg-plaza", "rope_under_7");

        // rope_under_8
        const rope_under_8 = this.add.image(292, 839, "pg-plaza", "rope_under_8");

        // rope_under_14
        const rope_under_14 = this.add.image(1493, 651, "pg-plaza", "rope_under_14");

        // rope_under_13
        const rope_under_13 = this.add.image(1445, 697, "pg-plaza", "rope_under_13");

        // rope_under_12
        const rope_under_12 = this.add.image(1449, 752, "pg-plaza", "rope_under_12");

        // rope_under_11
        const rope_under_11 = this.add.image(1431, 814, "pg-plaza", "rope_under_11");

        // rope_under_10
        const rope_under_10 = this.add.image(1348, 864, "pg-plaza", "rope_under_10");

        // rope_under_9
        const rope_under_9 = this.add.image(807, 885, "pg-plaza", "rope_under_9");

        // left_sign
        const left_sign = this.add.image(639, 725, "pg-plaza", "left_sign");

        // right_sign
        const right_sign = this.add.image(998, 725, "pg-plaza", "right_sign");

        // mid_flags
        this.add.image(845, 60, "pg-plaza", "mid_flags");

        // right_flags
        this.add.image(1503, 252, "pg-plaza", "right_flags");

        // lamp_flags
        this.add.image(12, 646, "pg-plaza", "lamp_flags");

        // lists
        const sort = [lamp, tickets, upper_rope_4, upper_rope_6, upper_rope_8, rope_under_7, rope_under_6, rope_under_8, rope_under_9, rope_under_10, rope_under_11, rope_under_12, rope_under_13, rope_under_14, left_sign, right_sign];

        // pet_door (components)
        const pet_doorButton = new Button(pet_door);
        pet_doorButton.spriteName = "pet_door";
        pet_doorButton.activeFrame = false;
        pet_doorButton.pixelPerfect = true;
        const pet_doorMoveTo = new MoveTo(pet_door);
        pet_doorMoveTo.x = 340;
        pet_doorMoveTo.y = 540;

        // cave_door (components)
        const cave_doorButton = new Button(cave_door);
        cave_doorButton.spriteName = "cave_door";
        cave_doorButton.activeFrame = false;
        cave_doorButton.pixelPerfect = true;
        const cave_doorMoveTo = new MoveTo(cave_door);
        cave_doorMoveTo.x = 560;
        cave_doorMoveTo.y = 500;

        // pizza_door (components)
        const pizza_doorButton = new Button(pizza_door);
        pizza_doorButton.spriteName = "pizza_door";
        pizza_doorButton.activeFrame = false;
        pizza_doorButton.pixelPerfect = true;
        const pizza_doorMoveTo = new MoveTo(pizza_door);
        pizza_doorMoveTo.x = 1152;
        pizza_doorMoveTo.y = 500;

        // stage_door_1 (components)
        const stage_door_1Button = new Button(stage_door_1);
        stage_door_1Button.spriteName = "stage_door_1";
        stage_door_1Button.activeFrame = false;
        const stage_door_1MoveTo = new MoveTo(stage_door_1);
        stage_door_1MoveTo.x = 730;
        stage_door_1MoveTo.y = 460;

        // stage_door_2 (components)
        const stage_door_2Button = new Button(stage_door_2);
        stage_door_2Button.spriteName = "stage_door_2";
        stage_door_2Button.activeFrame = false;
        const stage_door_2MoveTo = new MoveTo(stage_door_2);
        stage_door_2MoveTo.x = 960;
        stage_door_2MoveTo.y = 460;

        // tickets (components)
        new SimpleButton(tickets);
        const ticketsMoveTo = new MoveTo(tickets);
        ticketsMoveTo.x = 846;
        ticketsMoveTo.y = 426;

        this.stage = stage;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.stage.play('pgstage')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
