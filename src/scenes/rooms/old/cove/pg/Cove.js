import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class Cove extends RoomScene {

    constructor() {
        super("Cove");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers =  {
            'forest': () => this.triggerRoom(809, 1190, 750)
        }
		this.music = '213'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cove-pack", "assets/media/rooms/old/cove/cove-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-2, -15, "cove", "bg");
        bg.setOrigin(0, 0);

        // trail
        const trail = this.add.image(525, 586, "pg-cove", "trail");
        trail.scaleX = 1.02;
        trail.scaleY = 1.02;

        // cliff_1
        const cliff_1 = this.add.image(-5, 5, "cove", "cliff_1");
        cliff_1.setOrigin(0, 0);

        // upper_rope_1
        this.add.image(268, 442, "pg-cove", "upper_rope_1");

        // upper_rope_2
        const upper_rope_2 = this.add.image(227.4961129331161, 812.5621648675448, "pg-cove", "upper_rope_2");
        upper_rope_2.setOrigin(0.35925881982842284, 0.9747012878867318);

        // upper_rope_3
        const upper_rope_3 = this.add.image(552.9218376905052, 744.5310261430309, "pg-cove", "upper_rope_3");
        upper_rope_3.setOrigin(0.5893877995583794, 0.6011493521318504);

        // water_water_15
        const water_water_15 = this.add.image(1109, 673, "cove", "water/water_15");
        water_water_15.setOrigin(0.5011135857461024, 2.909090909090909);

        // water_water_14
        const water_water_14 = this.add.image(1034, 695, "cove", "water/water_14");
        water_water_14.setOrigin(0.5, 1.9545454545454546);

        // water_water_13
        const water_water_13 = this.add.image(1002, 717, "cove", "water/water_13");
        water_water_13.setOrigin(0.5006993006993007, 1.9545454545454546);

        // water_water_12
        const water_water_12 = this.add.image(995, 739, "cove", "water/water_12");
        water_water_12.setOrigin(0.5, 1.9545454545454546);

        // water_water_11
        const water_water_11 = this.add.image(1011, 761, "cove", "water/water_11");
        water_water_11.setOrigin(0.5005662514156285, 1.9545454545454546);

        // water_water_10
        const water_water_10 = this.add.image(1031, 783, "cove", "water/water_10");
        water_water_10.setOrigin(0.5005045408678103, 1.9545454545454546);

        // water_water_9
        const water_water_9 = this.add.image(1024, 805, "cove", "water/water_9");
        water_water_9.setOrigin(0.5, 1.9545454545454546);

        // water_water_8
        const water_water_8 = this.add.image(1014, 827, "cove", "water/water_8");
        water_water_8.setOrigin(0.5, 1.65625);

        // water_water_7
        const water_water_7 = this.add.image(1008, 849, "cove", "water/water_7");
        water_water_7.setOrigin(0.5004821600771456, 1.9545454545454546);

        // water_water_6
        const water_water_6 = this.add.image(1008, 871, "cove", "water/water_6");
        water_water_6.setOrigin(0.5004812319538018, 1.9545454545454546);

        // water_water_5
        const water_water_5 = this.add.image(1018, 893, "cove", "water/water_5");
        water_water_5.setOrigin(0.5, 1.9545454545454546);

        // water_water_4
        const water_water_4 = this.add.image(1026, 915, "cove", "water/water_4");
        water_water_4.setOrigin(0.5005015045135406, 1.9545454545454546);

        // water_water_3
        const water_water_3 = this.add.image(1005, 937, "cove", "water/water_3");
        water_water_3.setOrigin(0.5, 1.9545454545454546);

        // water_water_2
        const water_water_2 = this.add.image(1005, 959, "cove", "water/water_2");
        water_water_2.setOrigin(0.5, 1.9545454545454546);

        // water_water_1
        const water_water_1 = this.add.image(1005, 981, "cove", "water/water_1");
        water_water_1.setOrigin(0.5, 1.9545454545454546);

        // podium
        this.add.image(960, 239, "pg-cove", "podium");

        // hut
        const hut = this.add.image(1326, 423, "cove", "hut");
        hut.setOrigin(0.5537459283387622, 0.43842364532019706);

        // hut_wall
        const hut_wall = this.add.image(1440, 545, "cove", "hut_wall");
        hut_wall.setOrigin(0.5210526315789473, 0.8577777777777778);

        // boards
        const boards = this.add.image(1101, 485, "cove", "boards");
        boards.setOrigin(0.502262443438914, 0.8586956521739131);

        // rock_1
        const rock_1 = this.add.image(461, 884, "cove", "rock_1");
        rock_1.setOrigin(0.456, 0.6329113924050633);

        // inner_rope_5
        const inner_rope_5 = this.add.image(311, 506, "pg-cove", "inner_rope_5");

        // fg
        const fg = this.add.image(-12, 963, "cove", "fg");
        fg.setOrigin(0, 1);

        // log_1
        const log_1 = this.add.image(108, 285, "cove", "log_1");
        log_1.setOrigin(0, 0);

        // fire
        const fire = this.add.sprite(435, 600, "cove", "fire0001");
        fire.setOrigin(0.5029239766081871, 0.7318840579710145);

        // chair_arm
        const chair_arm = this.add.image(633, 283, "cove", "chair_arm");
        chair_arm.setOrigin(0.40298507462686567, 0.7115384615384616);

        // binoculars
        const binoculars = this.add.image(651, 300, "cove", "binoculars0001");
        binoculars.setOrigin(1.0597014925373134, 1.1666666666666667);

        // silver_board
        const silver_board = this.add.image(1463, 557, "cove", "silver_board");
        silver_board.setOrigin(0.5167785234899329, 0.8613445378151261);

        // rock_4
        const rock_4 = this.add.image(1497, 583, "cove", "rock_4");
        rock_4.setOrigin(0.5094339622641509, 0.5423728813559322);

        // rock_2
        const rock_2 = this.add.image(1292, 697, "cove", "rock_2");
        rock_2.setOrigin(0.4935064935064935, 0.6458333333333334);

        // rock_3
        const rock_3 = this.add.image(1447, 690, "cove", "rock_3");
        rock_3.setOrigin(0.5588235294117647, 0.5949367088607594);

        // hut_stool
        const hut_stool = this.add.image(1310, 493, "cove", "hut_stool");
        hut_stool.setOrigin(0.5, 0.5185185185185185);

        // upper_rope_4
        const upper_rope_4 = this.add.image(625.8436753810103, 707.6482696072732, "pg-cove", "upper_rope_4");
        upper_rope_4.setOrigin(0.5480459422626283, 0.6372741207503677);

        // upper_rope_5
        const upper_rope_5 = this.add.image(710, 666.5310261430309, "pg-cove", "upper_rope_5");
        upper_rope_5.setOrigin(0.5, 0.6517240281977749);

        // upper_rope_6
        const upper_rope_6 = this.add.image(770.6643964723567, 620.1011048284225, "pg-cove", "upper_rope_6");
        upper_rope_6.angle = 16;
        upper_rope_6.setOrigin(0.27116885475871705, 0.6852351107570154);

        // upper_rope_7
        const upper_rope_7 = this.add.image(831, 463.4919449882834, "pg-cove", "upper_rope_7");
        upper_rope_7.setOrigin(0.5, 0.727126272514244);

        // upper_rope_8
        const upper_rope_8 = this.add.image(854, 572, "pg-cove", "upper_rope_8");
        upper_rope_8.setOrigin(0.5565246379560316, 0.7044508181388447);

        // upper_finish_2
        const upper_finish_2 = this.add.image(839.9697214470024, 802.7916015555637, "pg-cove", "upper_finish_2");
        upper_finish_2.setOrigin(0.6659458726425995, 1.2761223873103855);

        // upper_finish_3
        const upper_finish_3 = this.add.image(889.1921552095384, 867.3885698811815, "pg-cove", "upper_finish_3");
        upper_finish_3.setOrigin(0.4859853820846391, 1.4820948743000322);

        // upper_finish_4
        const upper_finish_4 = this.add.image(979.620640120744, 910.7608512589796, "pg-cove", "upper_finish_4");
        upper_finish_4.setOrigin(0.41708595103947765, 1.5587637138018753);

        // inner_rope_1
        const inner_rope_1 = this.add.image(599.7478556366896, 348.8186715328865, "pg-cove", "inner_rope_1");
        inner_rope_1.setOrigin(0.31692599351231365, 0.38437431169198705);

        // inner_rope_2
        const inner_rope_2 = this.add.image(601, 429, "pg-cove", "inner_rope_2");

        // inner_rope_3
        const inner_rope_3 = this.add.image(530, 454, "pg-cove", "inner_rope_3");

        // inner_rope_4
        const inner_rope_4 = this.add.image(442, 474, "pg-cove", "inner_rope_4");

        // inner_rope_6
        const inner_rope_6 = this.add.image(205, 562, "pg-cove", "inner_rope_6");
        inner_rope_6.setOrigin(0.3812411036138706, 0.5);

        // inner_rope_7
        const inner_rope_7 = this.add.image(232, 595, "pg-cove", "inner_rope_7");

        // inner_rope_8
        const inner_rope_8 = this.add.image(303, 625, "pg-cove", "inner_rope_8");

        // inner_rope_9
        const inner_rope_9 = this.add.image(411, 667, "pg-cove", "inner_rope_9");

        // inner_rope_10
        const inner_rope_10 = this.add.image(519, 643, "pg-cove", "inner_rope_10");

        // inner_rope_11
        const inner_rope_11 = this.add.image(595, 606, "pg-cove", "inner_rope_11");

        // inner_rope_12
        const inner_rope_12 = this.add.image(663, 564, "pg-cove", "inner_rope_12");

        // inner_rope_13
        const inner_rope_13 = this.add.image(691, 533, "pg-cove", "inner_rope_13");

        // inner_rope_14
        const inner_rope_14 = this.add.image(712, 417, "pg-cove", "inner_rope_14");

        // inner_rope_15
        const inner_rope_15 = this.add.image(797, 379, "pg-cove", "inner_rope_15");

        // inner_rope_16
        const inner_rope_16 = this.add.image(851, 372, "pg-cove", "inner_rope_16");

        // inner_rope_17
        const inner_rope_17 = this.add.image(897, 376, "pg-cove", "inner_rope_17");

        // inner_rope_18
        const inner_rope_18 = this.add.image(956, 437, "pg-cove", "inner_rope_18");

        // inner_rope_19
        const inner_rope_19 = this.add.image(960, 565, "pg-cove", "inner_rope_19");

        // inner_finish_1
        const inner_finish_1 = this.add.image(969.1796454610717, 775.7725546825064, "pg-cove", "inner_finish_1");
        inner_finish_1.setOrigin(0.6595476769127041, 1.5769468191607603);

        // inner_finish_2
        const inner_finish_2 = this.add.image(1045, 826.6946819160761, "pg-cove", "inner_finish_2");
        inner_finish_2.setOrigin(0.5, 2.0607924915373346);

        // inner_finish_3
        const inner_finish_3 = this.add.image(1181, 910, "pg-cove", "inner_finish_3");
        inner_finish_3.setOrigin(0.5427359848873314, 2.3188435168048396);

        // finish_line
        this.add.image(1162, 874, "pg-cove", "finish_line");

        // green_sign
        const green_sign = this.add.image(579, 547, "pg-cove", "green_sign");

        // left_bottom_buoy
        const left_bottom_buoy = this.add.image(1025, 1110, "pg-cove", "left_bottom_buoy");
        left_bottom_buoy.setOrigin(0.3735278124423222, 3.952497140445684);

        // left_buoy
        const left_buoy = this.add.image(1030.3972543163206, 986.3700149338256, "pg-cove", "left_buoy");
        left_buoy.setOrigin(0.4499701556121809, 1.454227763689639);

        // right_bottom_buoy
        const right_bottom_buoy = this.add.image(1287, 1060, "pg-cove", "right_bottom_buoy");
        right_bottom_buoy.setOrigin(0.5178621433725952, 4.806920009999881);

        // right_buoy
        const right_buoy = this.add.image(1289, 1008, "pg-cove", "right_buoy");
        right_buoy.setOrigin(0.5341710568867014, 2.424183996413237);

        // finish
        const finish = this.add.image(1152.8365288737816, 1080.9788325038733, "pg-cove", "finish");
        finish.setOrigin(0.5060017283456916, 2.2416846596425977);

        // lists
        const sort = [water_water_15, water_water_1, water_water_2, water_water_3, water_water_4, water_water_5, water_water_6, water_water_7, water_water_8, water_water_9, water_water_10, water_water_11, water_water_12, water_water_13, water_water_14, hut_wall, boards, rock_1, fire, chair_arm, binoculars, silver_board, rock_3, rock_2, rock_4, fg, upper_rope_3, upper_rope_4, upper_rope_5, upper_rope_6, upper_rope_7, upper_rope_8, upper_finish_2, upper_finish_3, upper_finish_4, inner_rope_1, inner_rope_2, inner_rope_3, inner_rope_4, inner_rope_5, upper_rope_2, inner_rope_6, inner_rope_7, inner_rope_8, inner_rope_9, inner_rope_10, inner_rope_11, inner_rope_12, inner_rope_13, inner_rope_14, inner_rope_15, inner_rope_16, inner_rope_17, inner_rope_18, inner_rope_19, inner_finish_1, inner_finish_2, green_sign, left_buoy, right_buoy, right_bottom_buoy, finish];

        // hut (components)
        const hutButton = new Button(hut);
        hutButton.spriteName = "hut";
        hutButton.activeFrame = false;
        const hutMoveTo = new MoveTo(hut);
        hutMoveTo.x = 1250;
        hutMoveTo.y = 500;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 10;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
