import { Button, Interactive, SimpleButton } from '@components/components'

import Book from '@scenes/interface/books/Book'
import ColorButton from './buttons/ColorButton'
import FlagButton from './buttons/FlagButton'
import PhotoButton from './buttons/PhotoButton'
import Tag1 from './buttons/Tag1'
import Tag2 from './buttons/Tag2'


/* START OF COMPILED CODE */

export default class ClothingCatalog extends Book {

    constructor() {
        super("ClothingCatalog");

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("sep05-pack", "assets/media/interface/catalogs/clothing/sep05-pack.json");
        this.load.pack("clothingcatalog-pack", "assets/media/interface/catalogs/clothing/clothingcatalog-pack.json");
        this.load.pack("catalogs-master-pack", "assets/media/interface/catalogs/catalogs-master-pack.json");
        this.load.pack("jul22-pack", "assets/media/interface/catalogs/clothing/july22/jul22-pack.json");
        this.load.pack("may22-clothing", "assets/media/interface/catalogs/clothing/may22-clothing.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page16
        const page16 = this.add.container(-1, 0);
        page16.visible = false;

        // page16_done
        const page16_done = this.add.image(765, 432, "jul22", "page16_done");
        page16.add(page16_done);

        // close_left_16
        const close_left_16 = this.add.image(486, 38, "clothingcatalog", "close_left");
        close_left_16.setOrigin(0, 0);
        page16.add(close_left_16);

        // page_left_16
        const page_left_16 = this.add.image(485, 588, "clothingcatalog", "page_left");
        page_left_16.setOrigin(0, 0);
        page16.add(page_left_16);

        // page15
        const page15 = this.add.container(763, 463);
        page15.scaleX = 0.94175026927846;
        page15.scaleY = 0.94175026927846;
        page15.visible = false;

        // page12_bg
        const page12_bg = this.add.image(0, 0, "june22clothing", "page12");
        page15.add(page12_bg);

        // flag_button_7187
        const flag_button_7187 = this.add.ellipse(-384, -229, 75, 75);
        flag_button_7187.fillColor = 50917;
        flag_button_7187.fillAlpha = 0.5;
        page15.add(flag_button_7187);

        // flag_button_7186
        const flag_button_7186 = this.add.ellipse(-483, -230, 75, 75);
        flag_button_7186.fillColor = 50917;
        flag_button_7186.fillAlpha = 0.5;
        page15.add(flag_button_7186);

        // flag_button_7188
        const flag_button_7188 = this.add.ellipse(-273, -227, 75, 75);
        flag_button_7188.fillColor = 50917;
        flag_button_7188.fillAlpha = 0.5;
        page15.add(flag_button_7188);

        // flag_button_7189
        const flag_button_7189 = this.add.ellipse(-166, -229, 75, 75);
        flag_button_7189.fillColor = 50917;
        flag_button_7189.fillAlpha = 0.5;
        page15.add(flag_button_7189);

        // flag_button_7185
        const flag_button_7185 = this.add.ellipse(-538, -144, 75, 75);
        flag_button_7185.fillColor = 50917;
        flag_button_7185.fillAlpha = 0.5;
        page15.add(flag_button_7185);

        // flag_button_7184
        const flag_button_7184 = this.add.ellipse(-427, -135, 75, 75);
        flag_button_7184.fillColor = 50917;
        flag_button_7184.fillAlpha = 0.5;
        page15.add(flag_button_7184);

        // flag_button_7183
        const flag_button_7183 = this.add.ellipse(-318, -139, 75, 75);
        flag_button_7183.fillColor = 50917;
        flag_button_7183.fillAlpha = 0.5;
        page15.add(flag_button_7183);

        // flag_button_7182
        const flag_button_7182 = this.add.ellipse(-223, -140, 75, 75);
        flag_button_7182.fillColor = 50917;
        flag_button_7182.fillAlpha = 0.5;
        page15.add(flag_button_7182);

        // flag_button_7148
        const flag_button_7148 = this.add.ellipse(-106, -139, 75, 75);
        flag_button_7148.fillColor = 50917;
        flag_button_7148.fillAlpha = 0.5;
        page15.add(flag_button_7148);

        // flag_button_514
        const flag_button_514 = this.add.ellipse(-544, -43, 75, 75);
        flag_button_514.fillColor = 50917;
        flag_button_514.fillAlpha = 0.5;
        page15.add(flag_button_514);

        // flag_button_533
        const flag_button_533 = this.add.ellipse(-427, -41, 75, 75);
        flag_button_533.fillColor = 50917;
        flag_button_533.fillAlpha = 0.5;
        page15.add(flag_button_533);

        // flag_button_502
        const flag_button_502 = this.add.ellipse(-322, -47, 75, 75);
        flag_button_502.fillColor = 50917;
        flag_button_502.fillAlpha = 0.5;
        page15.add(flag_button_502);

        // flag_button_7096
        const flag_button_7096 = this.add.ellipse(-219, -45, 75, 75);
        flag_button_7096.fillColor = 50917;
        flag_button_7096.fillAlpha = 0.5;
        page15.add(flag_button_7096);

        // flag_button_504
        const flag_button_504 = this.add.ellipse(-110, -41, 75, 75);
        flag_button_504.fillColor = 50917;
        flag_button_504.fillAlpha = 0.5;
        page15.add(flag_button_504);

        // flag_button_538
        const flag_button_538 = this.add.ellipse(-534, 51, 75, 75);
        flag_button_538.fillColor = 50917;
        flag_button_538.fillAlpha = 0.5;
        page15.add(flag_button_538);

        // flag_button_529
        const flag_button_529 = this.add.ellipse(-427, 47, 75, 75);
        flag_button_529.fillColor = 50917;
        flag_button_529.fillAlpha = 0.5;
        page15.add(flag_button_529);

        // flag_button_505
        const flag_button_505 = this.add.ellipse(-324, 49, 75, 75);
        flag_button_505.fillColor = 50917;
        flag_button_505.fillAlpha = 0.5;
        page15.add(flag_button_505);

        // flag_button_500
        const flag_button_500 = this.add.ellipse(-221, 47, 75, 75);
        flag_button_500.fillColor = 50917;
        flag_button_500.fillAlpha = 0.5;
        page15.add(flag_button_500);

        // flag_button_535
        const flag_button_535 = this.add.ellipse(-110, 49, 75, 75);
        flag_button_535.fillColor = 50917;
        flag_button_535.fillAlpha = 0.5;
        page15.add(flag_button_535);

        // flag_button_525
        const flag_button_525 = this.add.ellipse(-538, 144, 75, 75);
        flag_button_525.fillColor = 50917;
        flag_button_525.fillAlpha = 0.5;
        page15.add(flag_button_525);

        // flag_button_506
        const flag_button_506 = this.add.ellipse(-428, 142, 75, 75);
        flag_button_506.fillColor = 50917;
        flag_button_506.fillAlpha = 0.5;
        page15.add(flag_button_506);

        // flag_button_536
        const flag_button_536 = this.add.ellipse(-325, 144, 75, 75);
        flag_button_536.fillColor = 50917;
        flag_button_536.fillAlpha = 0.5;
        page15.add(flag_button_536);

        // flag_button_540
        const flag_button_540 = this.add.ellipse(-221, 144, 75, 75);
        flag_button_540.fillColor = 50917;
        flag_button_540.fillAlpha = 0.5;
        page15.add(flag_button_540);

        // flag_button_507
        const flag_button_507 = this.add.ellipse(-109, 144, 75, 75);
        flag_button_507.fillColor = 50917;
        flag_button_507.fillAlpha = 0.5;
        page15.add(flag_button_507);

        // flag_button_542
        const flag_button_542 = this.add.ellipse(-544, 240, 75, 75);
        flag_button_542.fillColor = 50917;
        flag_button_542.fillAlpha = 0.5;
        page15.add(flag_button_542);

        // flag_button_546
        const flag_button_546 = this.add.ellipse(-431, 236, 75, 75);
        flag_button_546.fillColor = 50917;
        flag_button_546.fillAlpha = 0.5;
        page15.add(flag_button_546);

        // flag_button_548
        const flag_button_548 = this.add.ellipse(-321, 236, 75, 75);
        flag_button_548.fillColor = 50917;
        flag_button_548.fillAlpha = 0.5;
        page15.add(flag_button_548);

        // flag_button_530
        const flag_button_530 = this.add.ellipse(-219, 240, 75, 75);
        flag_button_530.fillColor = 50917;
        flag_button_530.fillAlpha = 0.5;
        page15.add(flag_button_530);

        // flag_button_508
        const flag_button_508 = this.add.ellipse(-111, 239, 75, 75);
        flag_button_508.fillColor = 50917;
        flag_button_508.fillAlpha = 0.5;
        page15.add(flag_button_508);

        // flag_button_541
        const flag_button_541 = this.add.ellipse(408.9185791015625, -230.4365997314453, 75, 75);
        flag_button_541.fillColor = 50917;
        flag_button_541.fillAlpha = 0.5;
        page15.add(flag_button_541);

        // flag_button_519
        const flag_button_519 = this.add.ellipse(508.3985595703125, -227.6732635498047, 75, 75);
        flag_button_519.fillColor = 50917;
        flag_button_519.fillAlpha = 0.5;
        page15.add(flag_button_519);

        // flag_button_545
        const flag_button_545 = this.add.ellipse(103, -109, 75, 75);
        flag_button_545.fillColor = 50917;
        flag_button_545.fillAlpha = 0.5;
        page15.add(flag_button_545);

        // flag_button_531
        const flag_button_531 = this.add.ellipse(199, -112, 75, 75);
        flag_button_531.fillColor = 50917;
        flag_button_531.fillAlpha = 0.5;
        page15.add(flag_button_531);

        // flag_button_527
        const flag_button_527 = this.add.ellipse(308, -112, 75, 75);
        flag_button_527.fillColor = 50917;
        flag_button_527.fillAlpha = 0.5;
        page15.add(flag_button_527);

        // flag_button_524
        const flag_button_524 = this.add.ellipse(410, -114, 75, 75);
        flag_button_524.fillColor = 50917;
        flag_button_524.fillAlpha = 0.5;
        page15.add(flag_button_524);

        // flag_button_501
        const flag_button_501 = this.add.ellipse(507, -112, 75, 75);
        flag_button_501.fillColor = 50917;
        flag_button_501.fillAlpha = 0.5;
        page15.add(flag_button_501);

        // flag_button_511
        const flag_button_511 = this.add.ellipse(102, 9, 75, 75);
        flag_button_511.fillColor = 50917;
        flag_button_511.fillAlpha = 0.5;
        page15.add(flag_button_511);

        // flag_button_528
        const flag_button_528 = this.add.ellipse(206, 7, 75, 75);
        flag_button_528.fillColor = 50917;
        flag_button_528.fillAlpha = 0.5;
        page15.add(flag_button_528);

        // flag_button_534
        const flag_button_534 = this.add.ellipse(305, 9, 75, 75);
        flag_button_534.fillColor = 50917;
        flag_button_534.fillAlpha = 0.5;
        page15.add(flag_button_534);

        // flag_button_512
        const flag_button_512 = this.add.ellipse(404, 8, 75, 75);
        flag_button_512.fillColor = 50917;
        flag_button_512.fillAlpha = 0.5;
        page15.add(flag_button_512);

        // flag_button_520
        const flag_button_520 = this.add.ellipse(511, 9, 75, 75);
        flag_button_520.fillColor = 50917;
        flag_button_520.fillAlpha = 0.5;
        page15.add(flag_button_520);

        // flag_button_513
        const flag_button_513 = this.add.ellipse(102, 130, 75, 75);
        flag_button_513.fillColor = 50917;
        flag_button_513.fillAlpha = 0.5;
        page15.add(flag_button_513);

        // flag_button_7095
        const flag_button_7095 = this.add.ellipse(200, 130, 75, 75);
        flag_button_7095.fillColor = 50917;
        flag_button_7095.fillAlpha = 0.5;
        page15.add(flag_button_7095);

        // flag_button_543
        const flag_button_543 = this.add.ellipse(307, 131, 75, 75);
        flag_button_543.fillColor = 50917;
        flag_button_543.fillAlpha = 0.5;
        page15.add(flag_button_543);

        // flag_button_522
        const flag_button_522 = this.add.ellipse(405, 128, 75, 75);
        flag_button_522.fillColor = 50917;
        flag_button_522.fillAlpha = 0.5;
        page15.add(flag_button_522);

        // flag_button_547
        const flag_button_547 = this.add.ellipse(508, 135, 75, 75);
        flag_button_547.fillColor = 50917;
        flag_button_547.fillAlpha = 0.5;
        page15.add(flag_button_547);

        // flag_button_537
        const flag_button_537 = this.add.ellipse(98, 251, 75, 75);
        flag_button_537.fillColor = 50917;
        flag_button_537.fillAlpha = 0.5;
        page15.add(flag_button_537);

        // flag_button_517
        const flag_button_517 = this.add.ellipse(203, 248, 75, 75);
        flag_button_517.fillColor = 50917;
        flag_button_517.fillAlpha = 0.5;
        page15.add(flag_button_517);

        // flag_button_526
        const flag_button_526 = this.add.ellipse(303, 250, 75, 75);
        flag_button_526.fillColor = 50917;
        flag_button_526.fillAlpha = 0.5;
        page15.add(flag_button_526);

        // flag_button_518
        const flag_button_518 = this.add.ellipse(407, 250, 75, 75);
        flag_button_518.fillColor = 50917;
        flag_button_518.fillAlpha = 0.5;
        page15.add(flag_button_518);

        // flag_button_539
        const flag_button_539 = this.add.ellipse(506, 252, 75, 75);
        flag_button_539.fillColor = 50917;
        flag_button_539.fillAlpha = 0.5;
        page15.add(flag_button_539);

        // flag_button_523
        const flag_button_523 = this.add.ellipse(103, -344, 75, 75);
        flag_button_523.fillColor = 50917;
        flag_button_523.fillAlpha = 0.5;
        page15.add(flag_button_523);

        // flag_button_503
        const flag_button_503 = this.add.ellipse(306, -229, 75, 75);
        flag_button_503.fillColor = 50917;
        flag_button_503.fillAlpha = 0.5;
        page15.add(flag_button_503);

        // flag_button_510
        const flag_button_510 = this.add.ellipse(202, -229, 75, 75);
        flag_button_510.fillColor = 50917;
        flag_button_510.fillAlpha = 0.5;
        page15.add(flag_button_510);

        // flag_button_509
        const flag_button_509 = this.add.ellipse(100, -231, 75, 75);
        flag_button_509.fillColor = 50917;
        flag_button_509.fillAlpha = 0.5;
        page15.add(flag_button_509);

        // flag_button_521
        const flag_button_521 = this.add.ellipse(513, -341, 75, 75);
        flag_button_521.fillColor = 50917;
        flag_button_521.fillAlpha = 0.5;
        page15.add(flag_button_521);

        // flag_button_516
        const flag_button_516 = this.add.ellipse(405, -348, 75, 75);
        flag_button_516.fillColor = 50917;
        flag_button_516.fillAlpha = 0.5;
        page15.add(flag_button_516);

        // flag_button_544
        const flag_button_544 = this.add.ellipse(304, -343, 75, 75);
        flag_button_544.fillColor = 50917;
        flag_button_544.fillAlpha = 0.5;
        page15.add(flag_button_544);

        // flag_button_515
        const flag_button_515 = this.add.ellipse(201, -344, 75, 75);
        flag_button_515.fillColor = 50917;
        flag_button_515.fillAlpha = 0.5;
        page15.add(flag_button_515);

        // page_left_15_1
        const page_left_15_1 = this.add.image(-625, 123, "clothingcatalog", "page_left");
        page_left_15_1.setOrigin(0, 0);
        page15.add(page_left_15_1);

        // close_right_15_1
        const close_right_15_1 = this.add.image(491, -424, "clothingcatalog", "close_right");
        close_right_15_1.setOrigin(0, 0);
        page15.add(close_right_15_1);

        // page_right_15_1
        const page_right_15_1 = this.add.image(491, 126, "clothingcatalog", "page_right");
        page_right_15_1.setOrigin(0, 0);
        page15.add(page_right_15_1);

        // close_left_15_1
        const close_left_15_1 = this.add.image(-625, -424, "clothingcatalog", "close_left");
        close_left_15_1.setOrigin(0, 0);
        page15.add(close_left_15_1);

        // page14
        const page14 = this.add.container(-1, 0);
        page14.visible = false;

        // page14_done
        const page14_done = this.add.image(765, 432, "jul22", "page14_done");
        page14.add(page14_done);

        // close_left_15
        const close_left_15 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_15.setOrigin(0, 0);
        page14.add(close_left_15);

        // bg_holder_1_1b
        const bg_holder_1_1b = this.add.image(337, 619, "jul22", "bg_holder");
        page14.add(bg_holder_1_1b);

        // bg_2_1b
        const bg_2_1b = this.add.image(338, 619, "jul22", "bg_7");
        page14.add(bg_2_1b);

        // shadow_bg_1_1b
        const shadow_bg_1_1b = this.add.image(337, 626, "jul22", "shadow_bg");
        page14.add(shadow_bg_1_1b);

        // bg_holder_1_1_1_1
        const bg_holder_1_1_1_1 = this.add.image(1193, 619, "jul22", "bg_holder");
        page14.add(bg_holder_1_1_1_1);

        // bg_2_1_1_1
        const bg_2_1_1_1 = this.add.image(1194, 619, "jul22", "bg_12");
        page14.add(bg_2_1_1_1);

        // shadow_bg_1_1_1_1
        const shadow_bg_1_1_1_1 = this.add.image(1193, 626, "jul22", "shadow_bg");
        page14.add(shadow_bg_1_1_1_1);

        // page_right_15
        const page_right_15 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_15.setOrigin(0, 0);
        page14.add(page_right_15);

        // close_right_15
        const close_right_15 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_15.setOrigin(0, 0);
        page14.add(close_right_15);

        // page_left_15
        const page_left_15 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_15.setOrigin(0, 0);
        page14.add(page_left_15);

        // coin_1_1_1_1_2_1_1_1_1_1_1_1_1_1b
        const coin_1_1_1_1_2_1_1_1_1_1_1_1_1_1b = this.add.image(1040, 148, "jul22", "coin");
        page14.add(coin_1_1_1_1_2_1_1_1_1_1_1_1_1_1b);

        // bg_holderb
        const bg_holderb = this.add.image(337, 359, "jul22", "bg_holder");
        page14.add(bg_holderb);

        // bg_1b
        const bg_1b = this.add.image(338, 359, "jul22", "bg_5");
        page14.add(bg_1b);

        // shadow_bgb
        const shadow_bgb = this.add.image(337, 366, "jul22", "shadow_bg");
        page14.add(shadow_bgb);

        // bg_holder_1b
        const bg_holder_1b = this.add.image(603, 359, "jul22", "bg_holder");
        page14.add(bg_holder_1b);

        // bg_2b
        const bg_2b = this.add.image(604, 359, "jul22", "bg_6");
        page14.add(bg_2b);

        // shadow_bg_1b
        const shadow_bg_1b = this.add.image(603, 366, "jul22", "shadow_bg");
        page14.add(shadow_bg_1b);

        // bg_holder_1_1_1b
        const bg_holder_1_1_1b = this.add.image(603, 619, "jul22", "bg_holder");
        page14.add(bg_holder_1_1_1b);

        // bg_2_1_1b
        const bg_2_1_1b = this.add.image(604, 619, "jul22", "bg_8");
        page14.add(bg_2_1_1b);

        // shadow_bg_1_1_1b
        const shadow_bg_1_1_1b = this.add.image(603, 626, "jul22", "shadow_bg");
        page14.add(shadow_bg_1_1_1b);

        // bg_holder_1_1_2
        const bg_holder_1_1_2 = this.add.image(927, 619, "jul22", "bg_holder");
        page14.add(bg_holder_1_1_2);

        // bg_2_1_2
        const bg_2_1_2 = this.add.image(928, 619, "jul22", "bg_11");
        page14.add(bg_2_1_2);

        // shadow_bg_1_1_2
        const shadow_bg_1_1_2 = this.add.image(927, 626, "jul22", "shadow_bg");
        page14.add(shadow_bg_1_1_2);

        // bg_holder_1_2
        const bg_holder_1_2 = this.add.image(1193, 359, "jul22", "bg_holder");
        page14.add(bg_holder_1_2);

        // bg_2_2
        const bg_2_2 = this.add.image(1194, 359, "jul22", "bg_10");
        page14.add(bg_2_2);

        // shadow_bg_1_2
        const shadow_bg_1_2 = this.add.image(1193, 366, "jul22", "shadow_bg");
        page14.add(shadow_bg_1_2);

        // bg_holder_2
        const bg_holder_2 = this.add.image(927, 359, "jul22", "bg_holder");
        page14.add(bg_holder_2);

        // bg_1_1
        const bg_1_1 = this.add.image(928, 359, "jul22", "bg_9");
        page14.add(bg_1_1);

        // shadow_bg_2
        const shadow_bg_2 = this.add.image(927, 366, "jul22", "shadow_bg");
        page14.add(shadow_bg_2);

        // page13
        const page13 = this.add.container(-1, 0);
        page13.visible = false;

        // page13_done
        const page13_done = this.add.image(765, 432, "jul22", "page13_done");
        page13.add(page13_done);

        // close_left_14
        const close_left_14 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_14.setOrigin(0, 0);
        page13.add(close_left_14);

        // bg_holder_1_1_1
        const bg_holder_1_1_1 = this.add.image(1193, 619, "jul22", "bg_holder");
        page13.add(bg_holder_1_1_1);

        // bg_2_1_1
        const bg_2_1_1 = this.add.image(1194, 619, "jul22", "bg_4");
        page13.add(bg_2_1_1);

        // shadow_bg_1_1_1
        const shadow_bg_1_1_1 = this.add.image(1193, 626, "jul22", "shadow_bg");
        page13.add(shadow_bg_1_1_1);

        // page_right_14
        const page_right_14 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_14.setOrigin(0, 0);
        page13.add(page_right_14);

        // close_right_14
        const close_right_14 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_14.setOrigin(0, 0);
        page13.add(close_right_14);

        // page_left_14
        const page_left_14 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_14.setOrigin(0, 0);
        page13.add(page_left_14);

        // small_buy0001_png_1_2_2_2_2_1_1_1_2_1_1
        const small_buy0001_png_1_2_2_2_2_1_1_1_2_1_1 = this.add.image(610, 659, "Sep2005", "small-buy0001.png");
        page13.add(small_buy0001_png_1_2_2_2_2_1_1_1_2_1_1);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1_1
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1_1 = this.add.image(587, 123, "Sep2005", "small-buy0001.png");
        page13.add(small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1_1);

        // coin_1_1_1_1_2_1_1_1_1_1_2_1
        const coin_1_1_1_1_2_1_1_1_1_1_2_1 = this.add.image(492, 114, "jul22", "coin");
        page13.add(coin_1_1_1_1_2_1_1_1_1_1_2_1);

        // coin_1_1_1_1_2_1_1_1_1_1_1_1_1
        const coin_1_1_1_1_2_1_1_1_1_1_1_1_1 = this.add.image(411, 672, "jul22", "coin");
        page13.add(coin_1_1_1_1_2_1_1_1_1_1_1_1_1);

        // coin_1_1_1_1_2_1_1_1_1_1_1_1_1_1
        const coin_1_1_1_1_2_1_1_1_1_1_1_1_1_1 = this.add.image(1184, 189, "jul22", "coin");
        page13.add(coin_1_1_1_1_2_1_1_1_1_1_1_1_1_1);

        // bg_holder
        const bg_holder = this.add.image(927, 359, "jul22", "bg_holder");
        page13.add(bg_holder);

        // bg_1
        const bg_1 = this.add.image(928, 359, "jul22", "bg_1");
        page13.add(bg_1);

        // shadow_bg
        const shadow_bg = this.add.image(927, 366, "jul22", "shadow_bg");
        page13.add(shadow_bg);

        // bg_holder_1
        const bg_holder_1 = this.add.image(1193, 359, "jul22", "bg_holder");
        page13.add(bg_holder_1);

        // bg_2
        const bg_2 = this.add.image(1194, 359, "jul22", "bg_2");
        page13.add(bg_2);

        // shadow_bg_1
        const shadow_bg_1 = this.add.image(1193, 366, "jul22", "shadow_bg");
        page13.add(shadow_bg_1);

        // bg_holder_1_1
        const bg_holder_1_1 = this.add.image(927, 619, "jul22", "bg_holder");
        page13.add(bg_holder_1_1);

        // bg_2_1
        const bg_2_1 = this.add.image(928, 619, "jul22", "bg_3");
        page13.add(bg_2_1);

        // shadow_bg_1_1
        const shadow_bg_1_1 = this.add.image(927, 626, "jul22", "shadow_bg");
        page13.add(shadow_bg_1_1);

        // page12
        const page12 = this.add.container(-1, 0);
        page12.visible = false;

        // page12_done
        const page12_done = this.add.image(765, 432, "jul22", "page12_done");
        page12.add(page12_done);

        // close_left_13
        const close_left_13 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_13.setOrigin(0, 0);
        page12.add(close_left_13);

        // page_right_13
        const page_right_13 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_13.setOrigin(0, 0);
        page12.add(page_right_13);

        // close_right_13
        const close_right_13 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_13.setOrigin(0, 0);
        page12.add(close_right_13);

        // page_left_13
        const page_left_13 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_13.setOrigin(0, 0);
        page12.add(page_left_13);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1 = this.add.image(1052, 492, "Sep2005", "small-buy0001.png");
        page12.add(small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_2
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_2 = this.add.image(295, 238, "Sep2005", "small-buy0001.png");
        page12.add(small_buy0001_png_1_2_2_2_2_1_1_1_1_2);

        // small_buy0001_png_1_2_2_2_2_1_1_1_2
        const small_buy0001_png_1_2_2_2_2_1_1_1_2 = this.add.image(919, 739, "Sep2005", "small-buy0001.png");
        page12.add(small_buy0001_png_1_2_2_2_2_1_1_1_2);

        // small_buy0001_png_1_2_2_2_2_1_1_2
        const small_buy0001_png_1_2_2_2_2_1_1_2 = this.add.image(885, 492, "Sep2005", "small-buy0001.png");
        page12.add(small_buy0001_png_1_2_2_2_2_1_1_2);

        // big_coin_1
        const big_coin_1 = this.add.image(1035, 196, "jul22", "big_coin");
        page12.add(big_coin_1);

        // coin_1_1_1_1_2_1_1_1_1_1_1_1
        const coin_1_1_1_1_2_1_1_1_1_1_1_1 = this.add.image(930, 861, "jul22", "coin");
        page12.add(coin_1_1_1_1_2_1_1_1_1_1_1_1);

        // coin_1_1_1_1_2_1_1_1_1_1_2
        const coin_1_1_1_1_2_1_1_1_1_1_2 = this.add.image(346, 179, "jul22", "coin");
        page12.add(coin_1_1_1_1_2_1_1_1_1_1_2);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1 = this.add.image(1218, 492, "Sep2005", "small-buy0001.png");
        page12.add(small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1);

        // small_buy0001_png_1_2_2_2_2_1_1_1_2_1
        const small_buy0001_png_1_2_2_2_2_1_1_1_2_1 = this.add.image(1154, 739, "Sep2005", "small-buy0001.png");
        page12.add(small_buy0001_png_1_2_2_2_2_1_1_1_2_1);

        // sec-rocker_1
        const sec_rocker_1 = this.add.ellipse(510, 88, 128, 128);
        sec_rocker_1.scaleX = 0.3423781066406252;
        sec_rocker_1.scaleY = 0.3011570029001281;
        sec_rocker_1.isFilled = true;
        sec_rocker_1.fillAlpha = 0;
        page12.add(sec_rocker_1);

        // page11
        const page11 = this.add.container(-1, 0);
        page11.visible = false;

        // page11_done
        const page11_done = this.add.image(765, 432, "jul22", "page11_done");
        page11.add(page11_done);

        // close_left_12
        const close_left_12 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_12.setOrigin(0, 0);
        page11.add(close_left_12);

        // page_right_12
        const page_right_12 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_12.setOrigin(0, 0);
        page11.add(page_right_12);

        // close_right_12
        const close_right_12 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_12.setOrigin(0, 0);
        page11.add(close_right_12);

        // page_left_12
        const page_left_12 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_12.setOrigin(0, 0);
        page11.add(page_left_12);

        // small_buy0001_png_1_2_2_2_2_1
        const small_buy0001_png_1_2_2_2_2_1 = this.add.image(575, 425, "Sep2005", "small-buy0001.png");
        page11.add(small_buy0001_png_1_2_2_2_2_1);

        // coin_1_1_1_1_2_1_1_1_1_1
        const coin_1_1_1_1_2_1_1_1_1_1 = this.add.image(927, 286, "jul22", "coin");
        page11.add(coin_1_1_1_1_2_1_1_1_1_1);

        // coin_1_1_1_1_2_1_1_1_1_1_1
        const coin_1_1_1_1_2_1_1_1_1_1_1 = this.add.image(933, 650, "jul22", "coin");
        page11.add(coin_1_1_1_1_2_1_1_1_1_1_1);

        // big_coin
        const big_coin = this.add.image(458, 187, "jul22", "big_coin");
        page11.add(big_coin);

        // small_buy0001_png_1_2_2_2_2_1_1
        const small_buy0001_png_1_2_2_2_2_1_1 = this.add.image(361, 718, "Sep2005", "small-buy0001.png");
        page11.add(small_buy0001_png_1_2_2_2_2_1_1);

        // small_buy0001_png_1_2_2_2_2_1_1_1
        const small_buy0001_png_1_2_2_2_2_1_1_1 = this.add.image(593, 718, "Sep2005", "small-buy0001.png");
        page11.add(small_buy0001_png_1_2_2_2_2_1_1_1);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1
        const small_buy0001_png_1_2_2_2_2_1_1_1_1 = this.add.image(1027, 220, "Sep2005", "small-buy0001.png");
        page11.add(small_buy0001_png_1_2_2_2_2_1_1_1_1);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_1
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_1 = this.add.image(893, 544, "Sep2005", "small-buy0001.png");
        page11.add(small_buy0001_png_1_2_2_2_2_1_1_1_1_1);

        // page10
        const page10 = this.add.container(-1, 0);
        page10.visible = false;

        // page10_done
        const page10_done = this.add.image(765, 432, "jul22", "page10_done");
        page10.add(page10_done);

        // close_left_11
        const close_left_11 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_11.setOrigin(0, 0);
        page10.add(close_left_11);

        // page_right_11
        const page_right_11 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_11.setOrigin(0, 0);
        page10.add(page_right_11);

        // close_right_11
        const close_right_11 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_11.setOrigin(0, 0);
        page10.add(close_right_11);

        // page_left_11
        const page_left_11 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_11.setOrigin(0, 0);
        page10.add(page_left_11);

        // coin_1_1_1_1_2_1_1_1_1
        const coin_1_1_1_1_2_1_1_1_1 = this.add.image(930, 266, "jul22", "coin");
        page10.add(coin_1_1_1_1_2_1_1_1_1);

        // small_buy0001_png_1_2_2_2_2
        const small_buy0001_png_1_2_2_2_2 = this.add.image(884, 336, "Sep2005", "small-buy0001.png");
        page10.add(small_buy0001_png_1_2_2_2_2);

        // buy2_3_1_1_1_1_1_1_1_1
        const buy2_3_1_1_1_1_1_1_1_1 = this.add.image(522, 486, "clothingcatalog", "buy2");
        buy2_3_1_1_1_1_1_1_1_1.angle = 30;
        buy2_3_1_1_1_1_1_1_1_1.setOrigin(0, 0);
        page10.add(buy2_3_1_1_1_1_1_1_1_1);

        // page9
        const page9 = this.add.container(-1, 0);
        page9.visible = false;

        // page9_done
        const page9_done = this.add.image(765, 432, "jul22", "page9_done");
        page9.add(page9_done);

        // coin_1_1_1_1_2_2_1
        const coin_1_1_1_1_2_2_1 = this.add.image(1288, 743, "jul22", "coin");
        page9.add(coin_1_1_1_1_2_2_1);

        // close_left_10
        const close_left_10 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_10.setOrigin(0, 0);
        page9.add(close_left_10);

        // page_right_10
        const page_right_10 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_10.setOrigin(0, 0);
        page9.add(page_right_10);

        // close_right_10
        const close_right_10 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_10.setOrigin(0, 0);
        page9.add(close_right_10);

        // page_left_10
        const page_left_10 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_10.setOrigin(0, 0);
        page9.add(page_left_10);

        // coin_1_1_1_1_1_1_1_1
        const coin_1_1_1_1_1_1_1_1 = this.add.image(1267, 393, "jul22", "coin");
        page9.add(coin_1_1_1_1_1_1_1_1);

        // coin_1_2_1_1
        const coin_1_2_1_1 = this.add.image(642, 112, "jul22", "coin");
        page9.add(coin_1_2_1_1);

        // coin_1_1_1_1_2_1_1_1
        const coin_1_1_1_1_2_1_1_1 = this.add.image(1205, 118, "jul22", "coin");
        page9.add(coin_1_1_1_1_2_1_1_1);

        // small_buy0001_png_1_2_2_2
        const small_buy0001_png_1_2_2_2 = this.add.image(467, 183, "Sep2005", "small-buy0001.png");
        page9.add(small_buy0001_png_1_2_2_2);

        // small_buy0001_png_1_2_2_2_1
        const small_buy0001_png_1_2_2_2_1 = this.add.image(1072, 179, "Sep2005", "small-buy0001.png");
        page9.add(small_buy0001_png_1_2_2_2_1);

        // small_buy0001_png_1_2_2_2_1_1
        const small_buy0001_png_1_2_2_2_1_1 = this.add.image(1232, 452, "Sep2005", "small-buy0001.png");
        page9.add(small_buy0001_png_1_2_2_2_1_1);

        // small_buy0001_png_1_2_2_2_1_1_1
        const small_buy0001_png_1_2_2_2_1_1_1 = this.add.image(864, 740, "Sep2005", "small-buy0001.png");
        page9.add(small_buy0001_png_1_2_2_2_1_1_1);

        // sec-rocker
        const sec_rocker = this.add.ellipse(408, 537, 128, 128);
        sec_rocker.scaleX = 0.3423781066406252;
        sec_rocker.scaleY = 0.3011570029001281;
        sec_rocker.isFilled = true;
        sec_rocker.fillAlpha = 0;
        page9.add(sec_rocker);

        // sec-suprema
        const sec_suprema = this.add.ellipse(959, 366, 128, 128);
        sec_suprema.scaleX = 0.3423781066406252;
        sec_suprema.scaleY = 0.3011570029001281;
        sec_suprema.isFilled = true;
        sec_suprema.fillAlpha = 0;
        page9.add(sec_suprema);

        // page8
        const page8 = this.add.container(-1, 0);
        page8.visible = false;

        // page8_done
        const page8_done = this.add.image(765, 432, "jul22", "page8_done");
        page8.add(page8_done);

        // close_left_9
        const close_left_9 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_9.setOrigin(0, 0);
        page8.add(close_left_9);

        // page_right_9
        const page_right_9 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_9.setOrigin(0, 0);
        page8.add(page_right_9);

        // close_right_9
        const close_right_9 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_9.setOrigin(0, 0);
        page8.add(close_right_9);

        // page_left_9
        const page_left_9 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_9.setOrigin(0, 0);
        page8.add(page_left_9);

        // coin_1_1_1_1_2_1_1
        const coin_1_1_1_1_2_1_1 = this.add.image(960, 139, "jul22", "coin");
        page8.add(coin_1_1_1_1_2_1_1);

        // coin_1_2_1
        const coin_1_2_1 = this.add.image(427, 133, "jul22", "coin");
        page8.add(coin_1_2_1);

        // coin_1_1_2_1
        const coin_1_1_2_1 = this.add.image(396, 754, "jul22", "coin");
        page8.add(coin_1_1_2_1);

        // coin_1_1_1_2_1
        const coin_1_1_1_2_1 = this.add.image(718, 593, "jul22", "coin");
        page8.add(coin_1_1_1_2_1);

        // coin_1_1_1_1_2_2
        const coin_1_1_1_1_2_2 = this.add.image(1005, 713, "jul22", "coin");
        page8.add(coin_1_1_1_1_2_2);

        // coin_1_1_1_1_1_1_1
        const coin_1_1_1_1_1_1_1 = this.add.image(691, 132, "jul22", "coin");
        page8.add(coin_1_1_1_1_1_1_1);

        // small_buy0001_png_1_2_2
        const small_buy0001_png_1_2_2 = this.add.image(292, 194, "Sep2005", "small-buy0001.png");
        page8.add(small_buy0001_png_1_2_2);

        // small_buy0001_png_1_2_2_1
        const small_buy0001_png_1_2_2_1 = this.add.image(620, 189, "Sep2005", "small-buy0001.png");
        page8.add(small_buy0001_png_1_2_2_1);

        // small_buy0001_png_1_2_2_1_1
        const small_buy0001_png_1_2_2_1_1 = this.add.image(617, 375, "Sep2005", "small-buy0001.png");
        page8.add(small_buy0001_png_1_2_2_1_1);

        // small_buy0001_png_1_2_2_1_1_1
        const small_buy0001_png_1_2_2_1_1_1 = this.add.image(592, 730, "Sep2005", "small-buy0001.png");
        page8.add(small_buy0001_png_1_2_2_1_1_1);

        // small_buy0001_png_1_2_2_1_1_1_1
        const small_buy0001_png_1_2_2_1_1_1_1 = this.add.image(1073, 124, "Sep2005", "small-buy0001.png");
        page8.add(small_buy0001_png_1_2_2_1_1_1_1);

        // small_buy0001_png_1_2_2_1_1_1_1_1
        const small_buy0001_png_1_2_2_1_1_1_1_1 = this.add.image(1178, 679, "Sep2005", "small-buy0001.png");
        page8.add(small_buy0001_png_1_2_2_1_1_1_1_1);

        // sec-bcowboy
        const sec_bcowboy = this.add.ellipse(450, 481, 128, 128);
        sec_bcowboy.scaleX = 0.3423781066406252;
        sec_bcowboy.scaleY = 0.3011570029001281;
        sec_bcowboy.isFilled = true;
        sec_bcowboy.fillAlpha = 0;
        page8.add(sec_bcowboy);

        // sec-cvest
        const sec_cvest = this.add.ellipse(1220, 281, 128, 128);
        sec_cvest.scaleX = 0.3423781066406252;
        sec_cvest.scaleY = 0.3011570029001281;
        sec_cvest.isFilled = true;
        sec_cvest.fillAlpha = 0;
        page8.add(sec_cvest);

        // sec-cbell
        const sec_cbell = this.add.ellipse(1155, 181, 128, 128);
        sec_cbell.scaleX = 0.3423781066406252;
        sec_cbell.scaleY = 0.3011570029001281;
        sec_cbell.isFilled = true;
        sec_cbell.fillAlpha = 0;
        page8.add(sec_cbell);

        // page7
        const page7 = this.add.container(-1, 0);
        page7.visible = false;

        // page7_done
        const page7_done = this.add.image(765, 432, "jul22", "page7_done");
        page7.add(page7_done);

        // close_left_8
        const close_left_8 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_8.setOrigin(0, 0);
        page7.add(close_left_8);

        // page_right_8
        const page_right_8 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_8.setOrigin(0, 0);
        page7.add(page_right_8);

        // close_right_8
        const close_right_8 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_8.setOrigin(0, 0);
        page7.add(close_right_8);

        // page_left_8
        const page_left_8 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_8.setOrigin(0, 0);
        page7.add(page_left_8);

        // coin_1_1_1_1_1_1
        const coin_1_1_1_1_1_1 = this.add.image(908, 450, "jul22", "coin");
        page7.add(coin_1_1_1_1_1_1);

        // coin_1_1_1_1_2
        const coin_1_1_1_1_2 = this.add.image(1175, 738, "jul22", "coin");
        page7.add(coin_1_1_1_1_2);

        // coin_1_1_1_2
        const coin_1_1_1_2 = this.add.image(709, 555, "jul22", "coin");
        page7.add(coin_1_1_1_2);

        // coin_1_1_2
        const coin_1_1_2 = this.add.image(610, 733, "jul22", "coin");
        page7.add(coin_1_1_2);

        // coin_1_2
        const coin_1_2 = this.add.image(687, 102, "jul22", "coin");
        page7.add(coin_1_2);

        // coin_1_1_1_1_2_1
        const coin_1_1_1_1_2_1 = this.add.image(1244, 105, "jul22", "coin");
        page7.add(coin_1_1_1_1_2_1);

        // small_buy0001_png_1_2
        const small_buy0001_png_1_2 = this.add.image(638, 173, "Sep2005", "small-buy0001.png");
        page7.add(small_buy0001_png_1_2);

        // small_buy0001_png_1_2_1
        const small_buy0001_png_1_2_1 = this.add.image(644, 428, "Sep2005", "small-buy0001.png");
        page7.add(small_buy0001_png_1_2_1);

        // small_buy0001_png_1_2_1_1
        const small_buy0001_png_1_2_1_1 = this.add.image(401, 724, "Sep2005", "small-buy0001.png");
        page7.add(small_buy0001_png_1_2_1_1);

        // small_buy0001_png_1_2_1_1_1
        const small_buy0001_png_1_2_1_1_1 = this.add.image(944, 724, "Sep2005", "small-buy0001.png");
        page7.add(small_buy0001_png_1_2_1_1_1);

        // small_buy0001_png_1_2_1_1_1_1
        const small_buy0001_png_1_2_1_1_1_1 = this.add.image(878, 516, "Sep2005", "small-buy0001.png");
        page7.add(small_buy0001_png_1_2_1_1_1_1);

        // small_buy0001_png_1_2_1_1_1_1_1
        const small_buy0001_png_1_2_1_1_1_1_1 = this.add.image(1187, 169, "Sep2005", "small-buy0001.png");
        page7.add(small_buy0001_png_1_2_1_1_1_1_1);

        // sec-free
        const sec_free = this.add.ellipse(870, 201, 128, 128);
        sec_free.scaleX = 0.3423781066406252;
        sec_free.scaleY = 0.3011570029001281;
        sec_free.isFilled = true;
        sec_free.fillAlpha = 0;
        page7.add(sec_free);

        // sec-sidetied
        const sec_sidetied = this.add.ellipse(500, 233, 128, 128);
        sec_sidetied.scaleX = 0.3423781066406252;
        sec_sidetied.scaleY = 0.3011570029001281;
        sec_sidetied.isFilled = true;
        sec_sidetied.fillAlpha = 0;
        page7.add(sec_sidetied);

        // sec-fire
        const sec_fire = this.add.ellipse(1095, 510, 128, 128);
        sec_fire.scaleX = 0.3423781066406252;
        sec_fire.scaleY = 0.3011570029001281;
        sec_fire.isFilled = true;
        sec_fire.fillAlpha = 0;
        page7.add(sec_fire);

        // page6
        const page6 = this.add.container(-1, 0);
        page6.visible = false;

        // page6_done
        const page6_done = this.add.image(765, 432, "jul22", "page6_done");
        page6.add(page6_done);

        // close_left_7
        const close_left_7 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_7.setOrigin(0, 0);
        page6.add(close_left_7);

        // page_right_7
        const page_right_7 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_7.setOrigin(0, 0);
        page6.add(page_right_7);

        // close_right_7
        const close_right_7 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_7.setOrigin(0, 0);
        page6.add(close_right_7);

        // page_left_7
        const page_left_7 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_7.setOrigin(0, 0);
        page6.add(page_left_7);

        // coin_1
        const coin_1 = this.add.image(578, 84, "jul22", "coin");
        page6.add(coin_1);

        // coin_1_1
        const coin_1_1 = this.add.image(948, 134, "jul22", "coin");
        page6.add(coin_1_1);

        // coin_1_1_1
        const coin_1_1_1 = this.add.image(1234, 169, "jul22", "coin");
        page6.add(coin_1_1_1);

        // coin_1_1_1_1
        const coin_1_1_1_1 = this.add.image(588, 755, "jul22", "coin");
        page6.add(coin_1_1_1_1);

        // coin_1_1_1_1_1
        const coin_1_1_1_1_1 = this.add.image(984, 757, "jul22", "coin");
        page6.add(coin_1_1_1_1_1);

        // small_buy0001_png_1
        const small_buy0001_png_1 = this.add.image(659, 148, "Sep2005", "small-buy0001.png");
        page6.add(small_buy0001_png_1);

        // small_buy0001_png_1_1
        const small_buy0001_png_1_1 = this.add.image(667, 693, "Sep2005", "small-buy0001.png");
        page6.add(small_buy0001_png_1_1);

        // small_buy0001_png_1_1_1
        const small_buy0001_png_1_1_1 = this.add.image(905, 192, "Sep2005", "small-buy0001.png");
        page6.add(small_buy0001_png_1_1_1);

        // small_buy0001_png_1_1_1_1
        const small_buy0001_png_1_1_1_1 = this.add.image(1236, 236, "Sep2005", "small-buy0001.png");
        page6.add(small_buy0001_png_1_1_1_1);

        // small_buy0001_png_1_1_1_1_1
        const small_buy0001_png_1_1_1_1_1 = this.add.image(1169, 730, "Sep2005", "small-buy0001.png");
        page6.add(small_buy0001_png_1_1_1_1_1);

        // sec-darkvision
        const sec_darkvision = this.add.ellipse(556, 262, 128, 128);
        sec_darkvision.scaleX = 0.3423781066406252;
        sec_darkvision.scaleY = 0.3011570029001281;
        sec_darkvision.isFilled = true;
        sec_darkvision.fillAlpha = 0;
        page6.add(sec_darkvision);

        // sec-suit
        const sec_suit = this.add.ellipse(281, 518, 128, 128);
        sec_suit.scaleX = 0.3423781066406252;
        sec_suit.scaleY = 0.3011570029001281;
        sec_suit.isFilled = true;
        sec_suit.fillAlpha = 0;
        page6.add(sec_suit);

        // sec-mb
        const sec_mb = this.add.ellipse(1096, 307, 128, 128);
        sec_mb.scaleX = 0.3423781066406252;
        sec_mb.scaleY = 0.3011570029001281;
        sec_mb.isFilled = true;
        sec_mb.fillAlpha = 0;
        page6.add(sec_mb);

        // page5
        const page5 = this.add.container(1, 0);
        page5.visible = false;

        // page5_done
        const page5_done = this.add.image(765, 432, "jul22", "page5_done");
        page5.add(page5_done);

        // close_left_6
        const close_left_6 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_6.setOrigin(0, 0);
        page5.add(close_left_6);

        // page_right_6
        const page_right_6 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_6.setOrigin(0, 0);
        page5.add(page_right_6);

        // close_right_6
        const close_right_6 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_6.setOrigin(0, 0);
        page5.add(close_right_6);

        // page_left_6
        const page_left_6 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_6.setOrigin(0, 0);
        page5.add(page_left_6);

        // buy1_3_1_1
        const buy1_3_1_1 = this.add.image(257, 543, "clothingcatalog", "buy1");
        buy1_3_1_1.angle = -26;
        buy1_3_1_1.setOrigin(0, 0);
        page5.add(buy1_3_1_1);

        // buy2_3_1_1_1
        const buy2_3_1_1_1 = this.add.image(592, 234, "clothingcatalog", "buy2");
        buy2_3_1_1_1.angle = -33;
        buy2_3_1_1_1.setOrigin(0, 0);
        page5.add(buy2_3_1_1_1);

        // buy2_3_1_1_1_1
        const buy2_3_1_1_1_1 = this.add.image(520, 651, "clothingcatalog", "buy2");
        buy2_3_1_1_1_1.angle = 20;
        buy2_3_1_1_1_1.setOrigin(0, 0);
        page5.add(buy2_3_1_1_1_1);

        // buy2_3_1_1_1_1_1
        const buy2_3_1_1_1_1_1 = this.add.image(1175, 164, "clothingcatalog", "buy2");
        buy2_3_1_1_1_1_1.angle = 20;
        buy2_3_1_1_1_1_1.setOrigin(0, 0);
        page5.add(buy2_3_1_1_1_1_1);

        // buy2_3_1_1_1_1_1_1
        const buy2_3_1_1_1_1_1_1 = this.add.image(1078, 645, "clothingcatalog", "buy2");
        buy2_3_1_1_1_1_1_1.angle = 14;
        buy2_3_1_1_1_1_1_1.setOrigin(0, 0);
        page5.add(buy2_3_1_1_1_1_1_1);

        // buy2_3_1_1_1_1_1_1_1
        const buy2_3_1_1_1_1_1_1_1 = this.add.image(924, 360, "clothingcatalog", "buy2");
        buy2_3_1_1_1_1_1_1_1.angle = -32.00000000000006;
        buy2_3_1_1_1_1_1_1_1.setOrigin(0, 0);
        page5.add(buy2_3_1_1_1_1_1_1_1);

        // sec-blacksneak
        const sec_blacksneak = this.add.ellipse(627, 404, 128, 128);
        sec_blacksneak.scaleX = 0.3423781066406252;
        sec_blacksneak.scaleY = 0.3011570029001281;
        sec_blacksneak.isFilled = true;
        sec_blacksneak.fillAlpha = 0;
        page5.add(sec_blacksneak);

        // sec-rugby
        const sec_rugby = this.add.ellipse(903, 662, 128, 128);
        sec_rugby.scaleX = 0.3423781066406252;
        sec_rugby.scaleY = 0.3011570029001281;
        sec_rugby.isFilled = true;
        sec_rugby.fillAlpha = 0;
        page5.add(sec_rugby);

        // page4
        const page4 = this.add.container(-1, 0);
        page4.visible = false;

        // page4_done
        const page4_done = this.add.image(765, 432, "jul22", "page4_done");
        page4.add(page4_done);

        // close_left_5
        const close_left_5 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_5.setOrigin(0, 0);
        page4.add(close_left_5);

        // page_right_5
        const page_right_5 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_5.setOrigin(0, 0);
        page4.add(page_right_5);

        // close_right_5
        const close_right_5 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_5.setOrigin(0, 0);
        page4.add(close_right_5);

        // page_left_5
        const page_left_5 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_5.setOrigin(0, 0);
        page4.add(page_left_5);

        // buy2_3_1_1
        const buy2_3_1_1 = this.add.image(624, 497, "clothingcatalog", "buy2");
        buy2_3_1_1.angle = 33;
        buy2_3_1_1.setOrigin(0, 0);
        page4.add(buy2_3_1_1);

        // buy2_3_2_3
        const buy2_3_2_3 = this.add.image(551, 192, "clothingcatalog", "buy2");
        buy2_3_2_3.angle = 25;
        buy2_3_2_3.setOrigin(0, 0);
        page4.add(buy2_3_2_3);

        // buy2_3_2_3_1
        const buy2_3_2_3_1 = this.add.image(1168, 143, "clothingcatalog", "buy2");
        buy2_3_2_3_1.angle = 25;
        buy2_3_2_3_1.setOrigin(0, 0);
        page4.add(buy2_3_2_3_1);

        // buy1_3_1
        const buy1_3_1 = this.add.image(855, 398, "clothingcatalog", "buy1");
        buy1_3_1.angle = -26;
        buy1_3_1.setOrigin(0, 0);
        page4.add(buy1_3_1);

        // sec-bluehockey
        const sec_bluehockey = this.add.ellipse(390, 531, 128, 128);
        sec_bluehockey.scaleX = 0.3423781066406252;
        sec_bluehockey.scaleY = 0.3011570029001281;
        sec_bluehockey.isFilled = true;
        sec_bluehockey.fillAlpha = 0;
        page4.add(sec_bluehockey);

        // sec-greenface
        const sec_greenface = this.add.ellipse(1104, 600, 128, 128);
        sec_greenface.scaleX = 0.3423781066406252;
        sec_greenface.scaleY = 0.3011570029001281;
        sec_greenface.isFilled = true;
        sec_greenface.fillAlpha = 0;
        page4.add(sec_greenface);

        // sec-yellowface
        const sec_yellowface = this.add.ellipse(807, 430, 128, 128);
        sec_yellowface.scaleX = 0.3423781066406252;
        sec_yellowface.scaleY = 0.3011570029001281;
        sec_yellowface.isFilled = true;
        sec_yellowface.fillAlpha = 0;
        page4.add(sec_yellowface);

        // page3
        const page3 = this.add.container(-1, 0);
        page3.visible = false;

        // page3_done
        const page3_done = this.add.image(765, 432, "jul22", "page3_done");
        page3.add(page3_done);

        // buy1_3
        const buy1_3 = this.add.image(789, 81, "clothingcatalog", "buy1");
        buy1_3.angle = -7;
        buy1_3.setOrigin(0, 0);
        page3.add(buy1_3);

        // buy1_1_3
        const buy1_1_3 = this.add.image(823, 352, "clothingcatalog", "buy1");
        buy1_1_3.angle = -26;
        buy1_1_3.setOrigin(0, 0);
        page3.add(buy1_1_3);

        // buy2_3
        const buy2_3 = this.add.image(497, 369, "clothingcatalog", "buy2");
        buy2_3.angle = -18;
        buy2_3.setOrigin(0, 0);
        page3.add(buy2_3);

        // close_left_3
        const close_left_3 = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left_3.setOrigin(0, 0);
        page3.add(close_left_3);

        // page_right_3
        const page_right_3 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_3.setOrigin(0, 0);
        page3.add(page_right_3);

        // close_right_3
        const close_right_3 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_3.setOrigin(0, 0);
        page3.add(close_right_3);

        // page_left_3
        const page_left_3 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_3.setOrigin(0, 0);
        page3.add(page_left_3);

        // buy2_3_1
        const buy2_3_1 = this.add.image(596, 636, "clothingcatalog", "buy2");
        buy2_3_1.angle = 33;
        buy2_3_1.setOrigin(0, 0);
        page3.add(buy2_3_1);

        // buy2_3_2
        const buy2_3_2 = this.add.image(1153, 630, "clothingcatalog", "buy2");
        buy2_3_2.angle = 25;
        buy2_3_2.setOrigin(0, 0);
        page3.add(buy2_3_2);

        // buy2_3_2_1
        const buy2_3_2_1 = this.add.image(1104, 186, "clothingcatalog", "buy2");
        buy2_3_2_1.angle = -44;
        buy2_3_2_1.setOrigin(0, 0);
        page3.add(buy2_3_2_1);

        // buy2_3_2_2
        const buy2_3_2_2 = this.add.image(1191, 503, "clothingcatalog", "buy2");
        buy2_3_2_2.angle = -31;
        buy2_3_2_2.setOrigin(0, 0);
        page3.add(buy2_3_2_2);

        // sec-redbackpack
        const sec_redbackpack = this.add.ellipse(1107, 607, 128, 128);
        sec_redbackpack.scaleX = 0.3423781066406252;
        sec_redbackpack.scaleY = 0.3011570029001281;
        sec_redbackpack.isFilled = true;
        sec_redbackpack.fillAlpha = 0;
        page3.add(sec_redbackpack);

        // sec-redhockey
        const sec_redhockey = this.add.ellipse(710, 205, 128, 128);
        sec_redhockey.scaleX = 0.3423781066406252;
        sec_redhockey.scaleY = 0.3011570029001281;
        sec_redhockey.isFilled = true;
        sec_redhockey.fillAlpha = 0;
        page3.add(sec_redhockey);

        // page2
        const page2 = this.add.container(-1, 0);
        page2.visible = false;

        // page2_done
        const page2_done = this.add.image(765, 432, "jul22", "page2_done");
        page2.add(page2_done);

        // blue
        const blue = this.add.image(554, 225, "jul22", "blue");
        page2.add(blue);

        // green
        const green = this.add.image(629, 225, "jul22", "green");
        page2.add(green);

        // salmon
        const salmon = this.add.image(704, 225, "jul22", "salmon");
        page2.add(salmon);

        // black
        const black = this.add.image(590, 300, "jul22", "black");
        page2.add(black);

        // red
        const red = this.add.image(665, 300, "jul22", "red");
        page2.add(red);

        // yellow
        const yellow = this.add.image(554, 375, "jul22", "yellow");
        page2.add(yellow);

        // purple
        const purple = this.add.image(629, 375, "jul22", "purple");
        page2.add(purple);

        // darkgreen
        const darkgreen = this.add.image(704, 375, "jul22", "darkgreen");
        page2.add(darkgreen);

        // arctic
        const arctic = this.add.image(554, 450, "jul22", "arctic");
        page2.add(arctic);

        // brown
        const brown = this.add.image(629, 450, "jul22", "brown");
        page2.add(brown);

        // pink
        const pink = this.add.image(704, 450, "jul22", "pink");
        page2.add(pink);

        // orange
        const orange = this.add.image(554, 525, "jul22", "orange");
        page2.add(orange);

        // lblue
        const lblue = this.add.image(629, 525, "jul22", "lblue");
        page2.add(lblue);

        // lgreen
        const lgreen = this.add.image(704, 525, "jul22", "lgreen");
        page2.add(lgreen);

        // coin
        const coin = this.add.image(692, 614, "jul22", "coin");
        page2.add(coin);

        // sec-redviking
        const sec_redviking = this.add.ellipse(272, 557, 128, 128);
        sec_redviking.scaleX = 0.7631339150761072;
        sec_redviking.scaleY = 0.740531067432945;
        sec_redviking.isFilled = true;
        sec_redviking.fillAlpha = 0;
        page2.add(sec_redviking);

        // buy1
        const buy1 = this.add.image(942, 162, "clothingcatalog", "buy1");
        buy1.angle = -7;
        buy1.setOrigin(0, 0);
        page2.add(buy1);

        // buy1_1
        const buy1_1 = this.add.image(833, 536, "clothingcatalog", "buy1");
        buy1_1.angle = 39;
        buy1_1.setOrigin(0, 0);
        page2.add(buy1_1);

        // buy2
        const buy2 = this.add.image(1152, 346, "clothingcatalog", "buy2");
        buy2.angle = -18;
        buy2.setOrigin(0, 0);
        page2.add(buy2);

        // close_left
        const close_left = this.add.image(195, 38, "clothingcatalog", "close_left");
        close_left.setOrigin(0, 0);
        page2.add(close_left);

        // page_right_4
        const page_right_4 = this.add.image(1207, 587, "clothingcatalog", "page_right");
        page_right_4.setOrigin(0, 0);
        page2.add(page_right_4);

        // close_right_4
        const close_right_4 = this.add.image(1206, 38, "clothingcatalog", "close_right");
        close_right_4.setOrigin(0, 0);
        page2.add(close_right_4);

        // page_left_1
        const page_left_1 = this.add.image(193, 586, "clothingcatalog", "page_left");
        page_left_1.setOrigin(0, 0);
        page2.add(page_left_1);

        // page1
        const page1 = this.add.container(-2, 0);
        page1.visible = false;

        // page1_done
        const page1_done = this.add.image(765, 432, "jul22", "page1_done");
        page1.add(page1_done);

        // close_right_4_1
        const close_right_4_1 = this.add.image(914, 39, "clothingcatalog", "close_right");
        close_right_4_1.setOrigin(0, 0);
        page1.add(close_right_4_1);

        // page_right_4_1
        const page_right_4_1 = this.add.image(914, 588, "clothingcatalog", "page_right");
        page_right_4_1.setOrigin(0, 0);
        page1.add(page_right_4_1);

        // buttons
        const buttons = this.add.container(189, 40);
        buttons.visible = false;

        // coins
        const coins = this.add.text(1134, 796, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // page_left
        const page_left = this.add.image(-43, 519, "catalogs-master", "prevpagebtn");
        page_left.setOrigin(0, 0);
        page_left.visible = false;
        buttons.add(page_left);

        // page_right_1
        const page_right_1 = this.add.image(1095, 517, "catalogs-master", "nextpagebtn");
        page_right_1.setOrigin(0, 0);
        page_right_1.visible = false;
        buttons.add(page_right_1);

        // close_right_1
        const close_right_1 = this.add.image(1092, -31, "catalogs-master", "catclosebtn");
        close_right_1.setOrigin(0, 0);
        close_right_1.visible = false;
        buttons.add(close_right_1);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11, page12, page13, page14, page15, page16];

        // block (components)
        new Interactive(block);

        // close_left_16 (components)
        const close_left_16Button = new Button(close_left_16);
        close_left_16Button.spriteName = "close_left";
        close_left_16Button.callback = () => this.close();
        close_left_16Button.activeFrame = false;

        // page_left_16 (components)
        const page_left_16Button = new Button(page_left_16);
        page_left_16Button.spriteName = "page_left";
        page_left_16Button.callback = () => this.prevPage();
        page_left_16Button.activeFrame = false;

        // flag_button_7187 (components)
        const flag_button_7187SimpleButton = new SimpleButton(flag_button_7187);
        flag_button_7187SimpleButton.callback = () => this.buy(7187);

        // flag_button_7186 (components)
        const flag_button_7186SimpleButton = new SimpleButton(flag_button_7186);
        flag_button_7186SimpleButton.callback = () => this.buy(7186);

        // flag_button_7188 (components)
        const flag_button_7188SimpleButton = new SimpleButton(flag_button_7188);
        flag_button_7188SimpleButton.callback = () => this.buy(7188);

        // flag_button_7189 (components)
        const flag_button_7189SimpleButton = new SimpleButton(flag_button_7189);
        flag_button_7189SimpleButton.callback = () => this.buy(7189);

        // flag_button_7185 (components)
        const flag_button_7185SimpleButton = new SimpleButton(flag_button_7185);
        flag_button_7185SimpleButton.callback = () => this.buy(7185);

        // flag_button_7184 (components)
        const flag_button_7184SimpleButton = new SimpleButton(flag_button_7184);
        flag_button_7184SimpleButton.callback = () => this.buy(7184);

        // flag_button_7183 (components)
        const flag_button_7183SimpleButton = new SimpleButton(flag_button_7183);
        flag_button_7183SimpleButton.callback = () => this.buy(7183);

        // flag_button_7182 (components)
        const flag_button_7182SimpleButton = new SimpleButton(flag_button_7182);
        flag_button_7182SimpleButton.callback = () => this.buy(7182);

        // flag_button_7148 (components)
        const flag_button_7148SimpleButton = new SimpleButton(flag_button_7148);
        flag_button_7148SimpleButton.callback = () => this.buy(7148);

        // flag_button_514 (components)
        const flag_button_514SimpleButton = new SimpleButton(flag_button_514);
        flag_button_514SimpleButton.callback = () => this.buy(514);

        // flag_button_533 (components)
        const flag_button_533SimpleButton = new SimpleButton(flag_button_533);
        flag_button_533SimpleButton.callback = () => this.buy(533);

        // flag_button_502 (components)
        const flag_button_502SimpleButton = new SimpleButton(flag_button_502);
        flag_button_502SimpleButton.callback = () => this.buy(502);

        // flag_button_7096 (components)
        const flag_button_7096SimpleButton = new SimpleButton(flag_button_7096);
        flag_button_7096SimpleButton.callback = () => this.buy(7096);

        // flag_button_504 (components)
        const flag_button_504SimpleButton = new SimpleButton(flag_button_504);
        flag_button_504SimpleButton.callback = () => this.buy(504);

        // flag_button_538 (components)
        const flag_button_538SimpleButton = new SimpleButton(flag_button_538);
        flag_button_538SimpleButton.callback = () => this.buy(538);

        // flag_button_529 (components)
        const flag_button_529SimpleButton = new SimpleButton(flag_button_529);
        flag_button_529SimpleButton.callback = () => this.buy(529);

        // flag_button_505 (components)
        const flag_button_505SimpleButton = new SimpleButton(flag_button_505);
        flag_button_505SimpleButton.callback = () => this.buy(505);

        // flag_button_500 (components)
        const flag_button_500SimpleButton = new SimpleButton(flag_button_500);
        flag_button_500SimpleButton.callback = () => this.buy(500);

        // flag_button_535 (components)
        const flag_button_535SimpleButton = new SimpleButton(flag_button_535);
        flag_button_535SimpleButton.callback = () => this.buy(535);

        // flag_button_525 (components)
        const flag_button_525SimpleButton = new SimpleButton(flag_button_525);
        flag_button_525SimpleButton.callback = () => this.buy(525);

        // flag_button_506 (components)
        const flag_button_506SimpleButton = new SimpleButton(flag_button_506);
        flag_button_506SimpleButton.callback = () => this.buy(506);

        // flag_button_536 (components)
        const flag_button_536SimpleButton = new SimpleButton(flag_button_536);
        flag_button_536SimpleButton.callback = () => this.buy(536);

        // flag_button_540 (components)
        const flag_button_540SimpleButton = new SimpleButton(flag_button_540);
        flag_button_540SimpleButton.callback = () => this.buy(540);

        // flag_button_507 (components)
        const flag_button_507SimpleButton = new SimpleButton(flag_button_507);
        flag_button_507SimpleButton.callback = () => this.buy(507);

        // flag_button_542 (components)
        const flag_button_542SimpleButton = new SimpleButton(flag_button_542);
        flag_button_542SimpleButton.callback = () => this.buy(542);

        // flag_button_546 (components)
        const flag_button_546SimpleButton = new SimpleButton(flag_button_546);
        flag_button_546SimpleButton.callback = () => this.buy(546);

        // flag_button_548 (components)
        const flag_button_548SimpleButton = new SimpleButton(flag_button_548);
        flag_button_548SimpleButton.callback = () => this.buy(548);

        // flag_button_530 (components)
        const flag_button_530SimpleButton = new SimpleButton(flag_button_530);
        flag_button_530SimpleButton.callback = () => this.buy(530);

        // flag_button_508 (components)
        const flag_button_508SimpleButton = new SimpleButton(flag_button_508);
        flag_button_508SimpleButton.callback = () => this.buy(508);

        // flag_button_541 (components)
        const flag_button_541SimpleButton = new SimpleButton(flag_button_541);
        flag_button_541SimpleButton.callback = () => this.buy(541);

        // flag_button_519 (components)
        const flag_button_519SimpleButton = new SimpleButton(flag_button_519);
        flag_button_519SimpleButton.callback = () => this.buy(519);

        // flag_button_545 (components)
        const flag_button_545SimpleButton = new SimpleButton(flag_button_545);
        flag_button_545SimpleButton.callback = () => this.buy(545);

        // flag_button_531 (components)
        const flag_button_531SimpleButton = new SimpleButton(flag_button_531);
        flag_button_531SimpleButton.callback = () => this.buy(531);

        // flag_button_527 (components)
        const flag_button_527SimpleButton = new SimpleButton(flag_button_527);
        flag_button_527SimpleButton.callback = () => this.buy(527);

        // flag_button_524 (components)
        const flag_button_524SimpleButton = new SimpleButton(flag_button_524);
        flag_button_524SimpleButton.callback = () => this.buy(524);

        // flag_button_501 (components)
        const flag_button_501SimpleButton = new SimpleButton(flag_button_501);
        flag_button_501SimpleButton.callback = () => this.buy(501);

        // flag_button_511 (components)
        const flag_button_511SimpleButton = new SimpleButton(flag_button_511);
        flag_button_511SimpleButton.callback = () => this.buy(511);

        // flag_button_528 (components)
        const flag_button_528SimpleButton = new SimpleButton(flag_button_528);
        flag_button_528SimpleButton.callback = () => this.buy(528);

        // flag_button_534 (components)
        const flag_button_534SimpleButton = new SimpleButton(flag_button_534);
        flag_button_534SimpleButton.callback = () => this.buy(534);

        // flag_button_512 (components)
        const flag_button_512SimpleButton = new SimpleButton(flag_button_512);
        flag_button_512SimpleButton.callback = () => this.buy(512);

        // flag_button_520 (components)
        const flag_button_520SimpleButton = new SimpleButton(flag_button_520);
        flag_button_520SimpleButton.callback = () => this.buy(520);

        // flag_button_513 (components)
        const flag_button_513SimpleButton = new SimpleButton(flag_button_513);
        flag_button_513SimpleButton.callback = () => this.buy(513);

        // flag_button_7095 (components)
        const flag_button_7095SimpleButton = new SimpleButton(flag_button_7095);
        flag_button_7095SimpleButton.callback = () => this.buy(7095);

        // flag_button_543 (components)
        const flag_button_543SimpleButton = new SimpleButton(flag_button_543);
        flag_button_543SimpleButton.callback = () => this.buy(543);

        // flag_button_522 (components)
        const flag_button_522SimpleButton = new SimpleButton(flag_button_522);
        flag_button_522SimpleButton.callback = () => this.buy(522);

        // flag_button_547 (components)
        const flag_button_547SimpleButton = new SimpleButton(flag_button_547);
        flag_button_547SimpleButton.callback = () => this.buy(547);

        // flag_button_537 (components)
        const flag_button_537SimpleButton = new SimpleButton(flag_button_537);
        flag_button_537SimpleButton.callback = () => this.buy(537);

        // flag_button_517 (components)
        const flag_button_517SimpleButton = new SimpleButton(flag_button_517);
        flag_button_517SimpleButton.callback = () => this.buy(517);

        // flag_button_526 (components)
        const flag_button_526SimpleButton = new SimpleButton(flag_button_526);
        flag_button_526SimpleButton.callback = () => this.buy(526);

        // flag_button_518 (components)
        const flag_button_518SimpleButton = new SimpleButton(flag_button_518);
        flag_button_518SimpleButton.callback = () => this.buy(518);

        // flag_button_539 (components)
        const flag_button_539SimpleButton = new SimpleButton(flag_button_539);
        flag_button_539SimpleButton.callback = () => this.buy(539);

        // flag_button_523 (components)
        const flag_button_523SimpleButton = new SimpleButton(flag_button_523);
        flag_button_523SimpleButton.callback = () => this.buy(523);

        // flag_button_503 (components)
        const flag_button_503SimpleButton = new SimpleButton(flag_button_503);
        flag_button_503SimpleButton.callback = () => this.buy(503);

        // flag_button_510 (components)
        const flag_button_510SimpleButton = new SimpleButton(flag_button_510);
        flag_button_510SimpleButton.callback = () => this.buy(510);

        // flag_button_509 (components)
        const flag_button_509SimpleButton = new SimpleButton(flag_button_509);
        flag_button_509SimpleButton.callback = () => this.buy(509);

        // flag_button_521 (components)
        const flag_button_521SimpleButton = new SimpleButton(flag_button_521);
        flag_button_521SimpleButton.callback = () => this.buy(521);

        // flag_button_516 (components)
        const flag_button_516SimpleButton = new SimpleButton(flag_button_516);
        flag_button_516SimpleButton.callback = () => this.buy(516);

        // flag_button_544 (components)
        const flag_button_544SimpleButton = new SimpleButton(flag_button_544);
        flag_button_544SimpleButton.callback = () => this.buy(544);

        // flag_button_515 (components)
        const flag_button_515SimpleButton = new SimpleButton(flag_button_515);
        flag_button_515SimpleButton.callback = () => this.buy(515);

        // page_left_15_1 (components)
        const page_left_15_1Button = new Button(page_left_15_1);
        page_left_15_1Button.spriteName = "page_left";
        page_left_15_1Button.callback = () => this.prevPage();
        page_left_15_1Button.activeFrame = false;

        // close_right_15_1 (components)
        const close_right_15_1Button = new Button(close_right_15_1);
        close_right_15_1Button.spriteName = "close_right";
        close_right_15_1Button.callback = () => this.close();
        close_right_15_1Button.activeFrame = false;

        // page_right_15_1 (components)
        const page_right_15_1Button = new Button(page_right_15_1);
        page_right_15_1Button.spriteName = "page_right";
        page_right_15_1Button.callback = () => this.nextPage();
        page_right_15_1Button.activeFrame = false;

        // close_left_15_1 (components)
        const close_left_15_1Button = new Button(close_left_15_1);
        close_left_15_1Button.spriteName = "close_left";
        close_left_15_1Button.callback = () => this.close();
        close_left_15_1Button.activeFrame = false;

        // close_left_15 (components)
        const close_left_15Button = new Button(close_left_15);
        close_left_15Button.spriteName = "close_left";
        close_left_15Button.callback = () => this.close();
        close_left_15Button.activeFrame = false;

        // bg_holder_1_1b (components)
        const bg_holder_1_1bButton = new Button(bg_holder_1_1b);
        bg_holder_1_1bButton.spriteName = "bg_holder";
        bg_holder_1_1bButton.callback = () => this.interface.prompt.showItem(952);
        bg_holder_1_1bButton.activeFrame = false;

        // bg_holder_1_1_1_1 (components)
        const bg_holder_1_1_1_1Button = new Button(bg_holder_1_1_1_1);
        bg_holder_1_1_1_1Button.spriteName = "bg_holder";
        bg_holder_1_1_1_1Button.callback = () => this.interface.prompt.showItem(909);
        bg_holder_1_1_1_1Button.activeFrame = false;

        // page_right_15 (components)
        const page_right_15Button = new Button(page_right_15);
        page_right_15Button.spriteName = "page_right";
        page_right_15Button.callback = () => this.nextPage();
        page_right_15Button.activeFrame = false;

        // close_right_15 (components)
        const close_right_15Button = new Button(close_right_15);
        close_right_15Button.spriteName = "close_right";
        close_right_15Button.callback = () => this.close();
        close_right_15Button.activeFrame = false;

        // page_left_15 (components)
        const page_left_15Button = new Button(page_left_15);
        page_left_15Button.spriteName = "page_left";
        page_left_15Button.callback = () => this.prevPage();
        page_left_15Button.activeFrame = false;

        // bg_holderb (components)
        const bg_holderbButton = new Button(bg_holderb);
        bg_holderbButton.spriteName = "bg_holder";
        bg_holderbButton.callback = () => this.interface.prompt.showItem(938);
        bg_holderbButton.activeFrame = false;

        // bg_holder_1b (components)
        const bg_holder_1bButton = new Button(bg_holder_1b);
        bg_holder_1bButton.spriteName = "bg_holder";
        bg_holder_1bButton.callback = () => this.interface.prompt.showItem(994);
        bg_holder_1bButton.activeFrame = false;

        // bg_holder_1_1_1b (components)
        const bg_holder_1_1_1bButton = new Button(bg_holder_1_1_1b);
        bg_holder_1_1_1bButton.spriteName = "bg_holder";
        bg_holder_1_1_1bButton.callback = () => this.interface.prompt.showItem(946);
        bg_holder_1_1_1bButton.activeFrame = false;

        // bg_holder_1_1_2 (components)
        const bg_holder_1_1_2Button = new Button(bg_holder_1_1_2);
        bg_holder_1_1_2Button.spriteName = "bg_holder";
        bg_holder_1_1_2Button.callback = () => this.interface.prompt.showItem(937);
        bg_holder_1_1_2Button.activeFrame = false;

        // bg_holder_1_2 (components)
        const bg_holder_1_2Button = new Button(bg_holder_1_2);
        bg_holder_1_2Button.spriteName = "bg_holder";
        bg_holder_1_2Button.callback = () => this.interface.prompt.showItem(991);
        bg_holder_1_2Button.activeFrame = false;

        // bg_holder_2 (components)
        const bg_holder_2Button = new Button(bg_holder_2);
        bg_holder_2Button.spriteName = "bg_holder";
        bg_holder_2Button.callback = () => this.interface.prompt.showItem(947);
        bg_holder_2Button.activeFrame = false;

        // close_left_14 (components)
        const close_left_14Button = new Button(close_left_14);
        close_left_14Button.spriteName = "close_left";
        close_left_14Button.callback = () => this.close();
        close_left_14Button.activeFrame = false;

        // bg_holder_1_1_1 (components)
        const bg_holder_1_1_1Button = new Button(bg_holder_1_1_1);
        bg_holder_1_1_1Button.spriteName = "bg_holder";
        bg_holder_1_1_1Button.callback = () => this.interface.prompt.showItem(966);
        bg_holder_1_1_1Button.activeFrame = false;

        // page_right_14 (components)
        const page_right_14Button = new Button(page_right_14);
        page_right_14Button.spriteName = "page_right";
        page_right_14Button.callback = () => this.nextPage();
        page_right_14Button.activeFrame = false;

        // close_right_14 (components)
        const close_right_14Button = new Button(close_right_14);
        close_right_14Button.spriteName = "close_right";
        close_right_14Button.callback = () => this.close();
        close_right_14Button.activeFrame = false;

        // page_left_14 (components)
        const page_left_14Button = new Button(page_left_14);
        page_left_14Button.spriteName = "page_left";
        page_left_14Button.callback = () => this.prevPage();
        page_left_14Button.activeFrame = false;

        // small_buy0001_png_1_2_2_2_2_1_1_1_2_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_2_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_2_1_1);
        small_buy0001_png_1_2_2_2_2_1_1_1_2_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_2_1_1Button.callback = () => this.interface.prompt.showItem(383);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1_1);
        small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(832);

        // bg_holder (components)
        const bg_holderButton = new Button(bg_holder);
        bg_holderButton.spriteName = "bg_holder";
        bg_holderButton.callback = () => this.interface.prompt.showItem(9000);
        bg_holderButton.activeFrame = false;

        // bg_holder_1 (components)
        const bg_holder_1Button = new Button(bg_holder_1);
        bg_holder_1Button.spriteName = "bg_holder";
        bg_holder_1Button.callback = () => this.interface.prompt.showItem(929);
        bg_holder_1Button.activeFrame = false;

        // bg_holder_1_1 (components)
        const bg_holder_1_1Button = new Button(bg_holder_1_1);
        bg_holder_1_1Button.spriteName = "bg_holder";
        bg_holder_1_1Button.callback = () => this.interface.prompt.showItem(997);
        bg_holder_1_1Button.activeFrame = false;

        // close_left_13 (components)
        const close_left_13Button = new Button(close_left_13);
        close_left_13Button.spriteName = "close_left";
        close_left_13Button.callback = () => this.close();
        close_left_13Button.activeFrame = false;

        // page_right_13 (components)
        const page_right_13Button = new Button(page_right_13);
        page_right_13Button.spriteName = "page_right";
        page_right_13Button.callback = () => this.nextPage();
        page_right_13Button.activeFrame = false;

        // close_right_13 (components)
        const close_right_13Button = new Button(close_right_13);
        close_right_13Button.spriteName = "close_right";
        close_right_13Button.callback = () => this.close();
        close_right_13Button.activeFrame = false;

        // page_left_13 (components)
        const page_left_13Button = new Button(page_left_13);
        page_left_13Button.spriteName = "page_left";
        page_left_13Button.callback = () => this.prevPage();
        page_left_13Button.activeFrame = false;

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1);
        small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(271);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_2 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_2Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_1_2);
        small_buy0001_png_1_2_2_2_2_1_1_1_1_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_1_2Button.callback = () => this.interface.prompt.showItem(139);

        // small_buy0001_png_1_2_2_2_2_1_1_1_2 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_2Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_2);
        small_buy0001_png_1_2_2_2_2_1_1_1_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_2Button.callback = () => this.interface.prompt.showItem(269);

        // small_buy0001_png_1_2_2_2_2_1_1_2 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_2Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_2);
        small_buy0001_png_1_2_2_2_2_1_1_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_2Button.callback = () => this.interface.prompt.showItem(273);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1);
        small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(270);

        // small_buy0001_png_1_2_2_2_2_1_1_1_2_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_2_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_2_1);
        small_buy0001_png_1_2_2_2_2_1_1_1_2_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_2_1Button.callback = () => this.interface.prompt.showItem(830);

        // sec_rocker_1 (components)
        const sec_rocker_1SimpleButton = new SimpleButton(sec_rocker_1);
        sec_rocker_1SimpleButton.callback = () => this.interface.prompt.showItem(382);

        // close_left_12 (components)
        const close_left_12Button = new Button(close_left_12);
        close_left_12Button.spriteName = "close_left";
        close_left_12Button.callback = () => this.close();
        close_left_12Button.activeFrame = false;

        // page_right_12 (components)
        const page_right_12Button = new Button(page_right_12);
        page_right_12Button.spriteName = "page_right";
        page_right_12Button.callback = () => this.nextPage();
        page_right_12Button.activeFrame = false;

        // close_right_12 (components)
        const close_right_12Button = new Button(close_right_12);
        close_right_12Button.spriteName = "close_right";
        close_right_12Button.callback = () => this.close();
        close_right_12Button.activeFrame = false;

        // page_left_12 (components)
        const page_left_12Button = new Button(page_left_12);
        page_left_12Button.spriteName = "page_left";
        page_left_12Button.callback = () => this.prevPage();
        page_left_12Button.activeFrame = false;

        // small_buy0001_png_1_2_2_2_2_1 (components)
        const small_buy0001_png_1_2_2_2_2_1Button = new Button(small_buy0001_png_1_2_2_2_2_1);
        small_buy0001_png_1_2_2_2_2_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1Button.callback = () => this.interface.prompt.showItem(831);

        // small_buy0001_png_1_2_2_2_2_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1);
        small_buy0001_png_1_2_2_2_2_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1Button.callback = () => this.interface.prompt.showItem(267);

        // small_buy0001_png_1_2_2_2_2_1_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1);
        small_buy0001_png_1_2_2_2_2_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1Button.callback = () => this.interface.prompt.showItem(272);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_1);
        small_buy0001_png_1_2_2_2_2_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_1Button.callback = () => this.interface.prompt.showItem(125);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_1_1);
        small_buy0001_png_1_2_2_2_2_1_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(384);

        // close_left_11 (components)
        const close_left_11Button = new Button(close_left_11);
        close_left_11Button.spriteName = "close_left";
        close_left_11Button.callback = () => this.close();
        close_left_11Button.activeFrame = false;

        // page_right_11 (components)
        const page_right_11Button = new Button(page_right_11);
        page_right_11Button.spriteName = "page_right";
        page_right_11Button.callback = () => this.nextPage();
        page_right_11Button.activeFrame = false;

        // close_right_11 (components)
        const close_right_11Button = new Button(close_right_11);
        close_right_11Button.spriteName = "close_right";
        close_right_11Button.callback = () => this.close();
        close_right_11Button.activeFrame = false;

        // page_left_11 (components)
        const page_left_11Button = new Button(page_left_11);
        page_left_11Button.spriteName = "page_left";
        page_left_11Button.callback = () => this.prevPage();
        page_left_11Button.activeFrame = false;

        // small_buy0001_png_1_2_2_2_2 (components)
        const small_buy0001_png_1_2_2_2_2Button = new Button(small_buy0001_png_1_2_2_2_2);
        small_buy0001_png_1_2_2_2_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2Button.callback = () => this.interface.prompt.showItem(833);

        // buy2_3_1_1_1_1_1_1_1_1 (components)
        const buy2_3_1_1_1_1_1_1_1_1Button = new Button(buy2_3_1_1_1_1_1_1_1_1);
        buy2_3_1_1_1_1_1_1_1_1Button.spriteName = "buy2";
        buy2_3_1_1_1_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(4011);

        // close_left_10 (components)
        const close_left_10Button = new Button(close_left_10);
        close_left_10Button.spriteName = "close_left";
        close_left_10Button.callback = () => this.close();
        close_left_10Button.activeFrame = false;

        // page_right_10 (components)
        const page_right_10Button = new Button(page_right_10);
        page_right_10Button.spriteName = "page_right";
        page_right_10Button.callback = () => this.nextPage();
        page_right_10Button.activeFrame = false;

        // close_right_10 (components)
        const close_right_10Button = new Button(close_right_10);
        close_right_10Button.spriteName = "close_right";
        close_right_10Button.callback = () => this.close();
        close_right_10Button.activeFrame = false;

        // page_left_10 (components)
        const page_left_10Button = new Button(page_left_10);
        page_left_10Button.spriteName = "page_left";
        page_left_10Button.callback = () => this.prevPage();
        page_left_10Button.activeFrame = false;

        // small_buy0001_png_1_2_2_2 (components)
        const small_buy0001_png_1_2_2_2Button = new Button(small_buy0001_png_1_2_2_2);
        small_buy0001_png_1_2_2_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2Button.callback = () => this.interface.prompt.showItem(841);

        // small_buy0001_png_1_2_2_2_1 (components)
        const small_buy0001_png_1_2_2_2_1Button = new Button(small_buy0001_png_1_2_2_2_1);
        small_buy0001_png_1_2_2_2_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_1Button.callback = () => this.interface.prompt.showItem(732);

        // small_buy0001_png_1_2_2_2_1_1 (components)
        const small_buy0001_png_1_2_2_2_1_1Button = new Button(small_buy0001_png_1_2_2_2_1_1);
        small_buy0001_png_1_2_2_2_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_1_1Button.callback = () => this.interface.prompt.showItem(842);

        // small_buy0001_png_1_2_2_2_1_1_1 (components)
        const small_buy0001_png_1_2_2_2_1_1_1Button = new Button(small_buy0001_png_1_2_2_2_1_1_1);
        small_buy0001_png_1_2_2_2_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_1_1_1Button.callback = () => this.interface.prompt.showItem(388);

        // sec_rocker (components)
        const sec_rockerSimpleButton = new SimpleButton(sec_rocker);
        sec_rockerSimpleButton.callback = () => this.interface.prompt.showItem(650);

        // sec_suprema (components)
        const sec_supremaSimpleButton = new SimpleButton(sec_suprema);
        sec_supremaSimpleButton.callback = () => this.interface.prompt.showItem(677);

        // close_left_9 (components)
        const close_left_9Button = new Button(close_left_9);
        close_left_9Button.spriteName = "close_left";
        close_left_9Button.callback = () => this.close();
        close_left_9Button.activeFrame = false;

        // page_right_9 (components)
        const page_right_9Button = new Button(page_right_9);
        page_right_9Button.spriteName = "page_right";
        page_right_9Button.callback = () => this.nextPage();
        page_right_9Button.activeFrame = false;

        // close_right_9 (components)
        const close_right_9Button = new Button(close_right_9);
        close_right_9Button.spriteName = "close_right";
        close_right_9Button.callback = () => this.close();
        close_right_9Button.activeFrame = false;

        // page_left_9 (components)
        const page_left_9Button = new Button(page_left_9);
        page_left_9Button.spriteName = "page_left";
        page_left_9Button.callback = () => this.prevPage();
        page_left_9Button.activeFrame = false;

        // small_buy0001_png_1_2_2 (components)
        const small_buy0001_png_1_2_2Button = new Button(small_buy0001_png_1_2_2);
        small_buy0001_png_1_2_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2Button.callback = () => this.interface.prompt.showItem(843);

        // small_buy0001_png_1_2_2_1 (components)
        const small_buy0001_png_1_2_2_1Button = new Button(small_buy0001_png_1_2_2_1);
        small_buy0001_png_1_2_2_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_1Button.callback = () => this.interface.prompt.showItem(433);

        // small_buy0001_png_1_2_2_1_1 (components)
        const small_buy0001_png_1_2_2_1_1Button = new Button(small_buy0001_png_1_2_2_1_1);
        small_buy0001_png_1_2_2_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_1_1Button.callback = () => this.interface.prompt.showItem(730);

        // small_buy0001_png_1_2_2_1_1_1 (components)
        const small_buy0001_png_1_2_2_1_1_1Button = new Button(small_buy0001_png_1_2_2_1_1_1);
        small_buy0001_png_1_2_2_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_1_1_1Button.callback = () => this.interface.prompt.showItem(368);

        // small_buy0001_png_1_2_2_1_1_1_1 (components)
        const small_buy0001_png_1_2_2_1_1_1_1Button = new Button(small_buy0001_png_1_2_2_1_1_1_1);
        small_buy0001_png_1_2_2_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_1_1_1_1Button.callback = () => this.interface.prompt.showItem(434);

        // small_buy0001_png_1_2_2_1_1_1_1_1 (components)
        const small_buy0001_png_1_2_2_1_1_1_1_1Button = new Button(small_buy0001_png_1_2_2_1_1_1_1_1);
        small_buy0001_png_1_2_2_1_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(844);

        // sec_bcowboy (components)
        const sec_bcowboySimpleButton = new SimpleButton(sec_bcowboy);
        sec_bcowboySimpleButton.callback = () => this.interface.prompt.showItem(6022);

        // sec_cvest (components)
        const sec_cvestSimpleButton = new SimpleButton(sec_cvest);
        sec_cvestSimpleButton.callback = () => this.interface.prompt.showItem(217);

        // sec_cbell (components)
        const sec_cbellSimpleButton = new SimpleButton(sec_cbell);
        sec_cbellSimpleButton.callback = () => this.interface.prompt.showItem(5035);

        // close_left_8 (components)
        const close_left_8Button = new Button(close_left_8);
        close_left_8Button.spriteName = "close_left";
        close_left_8Button.callback = () => this.close();
        close_left_8Button.activeFrame = false;

        // page_right_8 (components)
        const page_right_8Button = new Button(page_right_8);
        page_right_8Button.spriteName = "page_right";
        page_right_8Button.callback = () => this.nextPage();
        page_right_8Button.activeFrame = false;

        // close_right_8 (components)
        const close_right_8Button = new Button(close_right_8);
        close_right_8Button.spriteName = "close_right";
        close_right_8Button.callback = () => this.close();
        close_right_8Button.activeFrame = false;

        // page_left_8 (components)
        const page_left_8Button = new Button(page_left_8);
        page_left_8Button.spriteName = "page_left";
        page_left_8Button.callback = () => this.prevPage();
        page_left_8Button.activeFrame = false;

        // small_buy0001_png_1_2 (components)
        const small_buy0001_png_1_2Button = new Button(small_buy0001_png_1_2);
        small_buy0001_png_1_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2Button.callback = () => this.interface.prompt.showItem(839);

        // small_buy0001_png_1_2_1 (components)
        const small_buy0001_png_1_2_1Button = new Button(small_buy0001_png_1_2_1);
        small_buy0001_png_1_2_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_1Button.callback = () => this.interface.prompt.showItem(731);

        // small_buy0001_png_1_2_1_1 (components)
        const small_buy0001_png_1_2_1_1Button = new Button(small_buy0001_png_1_2_1_1);
        small_buy0001_png_1_2_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_1_1Button.callback = () => this.interface.prompt.showItem(386);

        // small_buy0001_png_1_2_1_1_1 (components)
        const small_buy0001_png_1_2_1_1_1Button = new Button(small_buy0001_png_1_2_1_1_1);
        small_buy0001_png_1_2_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_1_1_1Button.callback = () => this.interface.prompt.showItem(387);

        // small_buy0001_png_1_2_1_1_1_1 (components)
        const small_buy0001_png_1_2_1_1_1_1Button = new Button(small_buy0001_png_1_2_1_1_1_1);
        small_buy0001_png_1_2_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_1_1_1_1Button.callback = () => this.interface.prompt.showItem(728);

        // small_buy0001_png_1_2_1_1_1_1_1 (components)
        const small_buy0001_png_1_2_1_1_1_1_1Button = new Button(small_buy0001_png_1_2_1_1_1_1_1);
        small_buy0001_png_1_2_1_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(840);

        // sec_free (components)
        const sec_freeSimpleButton = new SimpleButton(sec_free);
        sec_freeSimpleButton.callback = () => this.interface.prompt.showItem(1028);

        // sec_sidetied (components)
        const sec_sidetiedSimpleButton = new SimpleButton(sec_sidetied);
        sec_sidetiedSimpleButton.callback = () => this.interface.prompt.showItem(658);

        // sec_fire (components)
        const sec_fireSimpleButton = new SimpleButton(sec_fire);
        sec_fireSimpleButton.callback = () => this.interface.prompt.showItem(670);

        // close_left_7 (components)
        const close_left_7Button = new Button(close_left_7);
        close_left_7Button.spriteName = "close_left";
        close_left_7Button.callback = () => this.close();
        close_left_7Button.activeFrame = false;

        // page_right_7 (components)
        const page_right_7Button = new Button(page_right_7);
        page_right_7Button.spriteName = "page_right";
        page_right_7Button.callback = () => this.nextPage();
        page_right_7Button.activeFrame = false;

        // close_right_7 (components)
        const close_right_7Button = new Button(close_right_7);
        close_right_7Button.spriteName = "close_right";
        close_right_7Button.callback = () => this.close();
        close_right_7Button.activeFrame = false;

        // page_left_7 (components)
        const page_left_7Button = new Button(page_left_7);
        page_left_7Button.spriteName = "page_left";
        page_left_7Button.callback = () => this.prevPage();
        page_left_7Button.activeFrame = false;

        // small_buy0001_png_1 (components)
        const small_buy0001_png_1Button = new Button(small_buy0001_png_1);
        small_buy0001_png_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1Button.callback = () => this.interface.prompt.showItem(101);

        // small_buy0001_png_1_1 (components)
        const small_buy0001_png_1_1Button = new Button(small_buy0001_png_1_1);
        small_buy0001_png_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_1Button.callback = () => this.interface.prompt.showItem(4000);

        // small_buy0001_png_1_1_1 (components)
        const small_buy0001_png_1_1_1Button = new Button(small_buy0001_png_1_1_1);
        small_buy0001_png_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_1_1Button.callback = () => this.interface.prompt.showItem(4001);

        // small_buy0001_png_1_1_1_1 (components)
        const small_buy0001_png_1_1_1_1Button = new Button(small_buy0001_png_1_1_1_1);
        small_buy0001_png_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_1_1_1Button.callback = () => this.interface.prompt.showItem(3000);

        // small_buy0001_png_1_1_1_1_1 (components)
        const small_buy0001_png_1_1_1_1_1Button = new Button(small_buy0001_png_1_1_1_1_1);
        small_buy0001_png_1_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(6001);

        // sec_darkvision (components)
        const sec_darkvisionSimpleButton = new SimpleButton(sec_darkvision);
        sec_darkvisionSimpleButton.callback = () => this.interface.prompt.showItem(102);

        // sec_suit (components)
        const sec_suitSimpleButton = new SimpleButton(sec_suit);
        sec_suitSimpleButton.callback = () => this.interface.prompt.showItem(261);

        // sec_mb (components)
        const sec_mbSimpleButton = new SimpleButton(sec_mb);
        sec_mbSimpleButton.callback = () => this.interface.prompt.showItem(5001);

        // close_left_6 (components)
        const close_left_6Button = new Button(close_left_6);
        close_left_6Button.spriteName = "close_left";
        close_left_6Button.callback = () => this.close();
        close_left_6Button.activeFrame = false;

        // page_right_6 (components)
        const page_right_6Button = new Button(page_right_6);
        page_right_6Button.spriteName = "page_right";
        page_right_6Button.callback = () => this.nextPage();
        page_right_6Button.activeFrame = false;

        // close_right_6 (components)
        const close_right_6Button = new Button(close_right_6);
        close_right_6Button.spriteName = "close_right";
        close_right_6Button.callback = () => this.close();
        close_right_6Button.activeFrame = false;

        // page_left_6 (components)
        const page_left_6Button = new Button(page_left_6);
        page_left_6Button.spriteName = "page_left";
        page_left_6Button.callback = () => this.prevPage();
        page_left_6Button.activeFrame = false;

        // buy1_3_1_1 (components)
        const buy1_3_1_1Button = new Button(buy1_3_1_1);
        buy1_3_1_1Button.spriteName = "buy1";
        buy1_3_1_1Button.callback = () => this.interface.prompt.showItem(281);

        // buy2_3_1_1_1 (components)
        const buy2_3_1_1_1Button = new Button(buy2_3_1_1_1);
        buy2_3_1_1_1Button.spriteName = "buy2";
        buy2_3_1_1_1Button.callback = () => this.interface.prompt.showItem(6002);

        // buy2_3_1_1_1_1 (components)
        const buy2_3_1_1_1_1Button = new Button(buy2_3_1_1_1_1);
        buy2_3_1_1_1_1Button.spriteName = "buy2";
        buy2_3_1_1_1_1Button.callback = () => this.interface.prompt.showItem(6004);

        // buy2_3_1_1_1_1_1 (components)
        const buy2_3_1_1_1_1_1Button = new Button(buy2_3_1_1_1_1_1);
        buy2_3_1_1_1_1_1Button.spriteName = "buy2";
        buy2_3_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(6003);

        // buy2_3_1_1_1_1_1_1 (components)
        const buy2_3_1_1_1_1_1_1Button = new Button(buy2_3_1_1_1_1_1_1);
        buy2_3_1_1_1_1_1_1Button.spriteName = "buy2";
        buy2_3_1_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(6006);

        // buy2_3_1_1_1_1_1_1_1 (components)
        const buy2_3_1_1_1_1_1_1_1Button = new Button(buy2_3_1_1_1_1_1_1_1);
        buy2_3_1_1_1_1_1_1_1Button.spriteName = "buy2";
        buy2_3_1_1_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(6005);

        // sec_blacksneak (components)
        const sec_blacksneakSimpleButton = new SimpleButton(sec_blacksneak);
        sec_blacksneakSimpleButton.callback = () => this.interface.prompt.showItem(352);

        // sec_rugby (components)
        const sec_rugbySimpleButton = new SimpleButton(sec_rugby);
        sec_rugbySimpleButton.callback = () => this.interface.prompt.showItem(781);

        // close_left_5 (components)
        const close_left_5Button = new Button(close_left_5);
        close_left_5Button.spriteName = "close_left";
        close_left_5Button.callback = () => this.close();
        close_left_5Button.activeFrame = false;

        // page_right_5 (components)
        const page_right_5Button = new Button(page_right_5);
        page_right_5Button.spriteName = "page_right";
        page_right_5Button.callback = () => this.nextPage();
        page_right_5Button.activeFrame = false;

        // close_right_5 (components)
        const close_right_5Button = new Button(close_right_5);
        close_right_5Button.spriteName = "close_right";
        close_right_5Button.callback = () => this.close();
        close_right_5Button.activeFrame = false;

        // page_left_5 (components)
        const page_left_5Button = new Button(page_left_5);
        page_left_5Button.spriteName = "page_left";
        page_left_5Button.callback = () => this.prevPage();
        page_left_5Button.activeFrame = false;

        // buy2_3_1_1 (components)
        const buy2_3_1_1Button = new Button(buy2_3_1_1);
        buy2_3_1_1Button.spriteName = "buy2";
        buy2_3_1_1Button.callback = () => this.interface.prompt.showItem(219);

        // buy2_3_2_3 (components)
        const buy2_3_2_3Button = new Button(buy2_3_2_3);
        buy2_3_2_3Button.spriteName = "buy2";
        buy2_3_2_3Button.callback = () => this.interface.prompt.showItem(111);

        // buy2_3_2_3_1 (components)
        const buy2_3_2_3_1Button = new Button(buy2_3_2_3_1);
        buy2_3_2_3_1Button.spriteName = "buy2";
        buy2_3_2_3_1Button.callback = () => this.interface.prompt.showItem(1006);

        // buy1_3_1 (components)
        const buy1_3_1Button = new Button(buy1_3_1);
        buy1_3_1Button.spriteName = "buy1";
        buy1_3_1Button.callback = () => this.interface.prompt.showItem(4010);

        // sec_bluehockey (components)
        const sec_bluehockeySimpleButton = new SimpleButton(sec_bluehockey);
        sec_bluehockeySimpleButton.callback = () => this.interface.prompt.showItem(278);

        // sec_greenface (components)
        const sec_greenfaceSimpleButton = new SimpleButton(sec_greenface);
        sec_greenfaceSimpleButton.callback = () => this.interface.prompt.showItem(2018);

        // sec_yellowface (components)
        const sec_yellowfaceSimpleButton = new SimpleButton(sec_yellowface);
        sec_yellowfaceSimpleButton.callback = () => this.interface.prompt.showItem(2019);

        // buy1_3 (components)
        const buy1_3Button = new Button(buy1_3);
        buy1_3Button.spriteName = "buy1";
        buy1_3Button.callback = () => this.interface.prompt.showItem(1005);

        // buy1_1_3 (components)
        const buy1_1_3Button = new Button(buy1_1_3);
        buy1_1_3Button.spriteName = "buy1";
        buy1_1_3Button.callback = () => this.interface.prompt.showItem(314);

        // buy2_3 (components)
        const buy2_3Button = new Button(buy2_3);
        buy2_3Button.spriteName = "buy2";
        buy2_3Button.callback = () => this.interface.prompt.showItem(4008);

        // close_left_3 (components)
        const close_left_3Button = new Button(close_left_3);
        close_left_3Button.spriteName = "close_left";
        close_left_3Button.callback = () => this.close();
        close_left_3Button.activeFrame = false;

        // page_right_3 (components)
        const page_right_3Button = new Button(page_right_3);
        page_right_3Button.spriteName = "page_right";
        page_right_3Button.callback = () => this.nextPage();
        page_right_3Button.activeFrame = false;

        // close_right_3 (components)
        const close_right_3Button = new Button(close_right_3);
        close_right_3Button.spriteName = "close_right";
        close_right_3Button.callback = () => this.close();
        close_right_3Button.activeFrame = false;

        // page_left_3 (components)
        const page_left_3Button = new Button(page_left_3);
        page_left_3Button.spriteName = "page_left";
        page_left_3Button.callback = () => this.prevPage();
        page_left_3Button.activeFrame = false;

        // buy2_3_1 (components)
        const buy2_3_1Button = new Button(buy2_3_1);
        buy2_3_1Button.spriteName = "buy2";
        buy2_3_1Button.callback = () => this.interface.prompt.showItem(3004);

        // buy2_3_2 (components)
        const buy2_3_2Button = new Button(buy2_3_2);
        buy2_3_2Button.spriteName = "buy2";
        buy2_3_2Button.callback = () => this.interface.prompt.showItem(222);

        // buy2_3_2_1 (components)
        const buy2_3_2_1Button = new Button(buy2_3_2_1);
        buy2_3_2_1Button.spriteName = "buy2";
        buy2_3_2_1Button.callback = () => this.interface.prompt.showItem(4009);

        // buy2_3_2_2 (components)
        const buy2_3_2_2Button = new Button(buy2_3_2_2);
        buy2_3_2_2Button.spriteName = "buy2";
        buy2_3_2_2Button.callback = () => this.interface.prompt.showItem(312);

        // sec_redbackpack (components)
        const sec_redbackpackSimpleButton = new SimpleButton(sec_redbackpack);
        sec_redbackpackSimpleButton.callback = () => this.interface.prompt.showItem(306);

        // sec_redhockey (components)
        const sec_redhockeySimpleButton = new SimpleButton(sec_redhockey);
        sec_redhockeySimpleButton.callback = () => this.interface.prompt.showItem(277);

        // blue (components)
        const blueButton = new Button(blue);
        blueButton.spriteName = "blue";
        blueButton.callback = () => this.interface.prompt.showItem(1);

        // green (components)
        const greenButton = new Button(green);
        greenButton.spriteName = "green";
        greenButton.callback = () => this.interface.prompt.showItem(2);

        // salmon (components)
        const salmonButton = new Button(salmon);
        salmonButton.spriteName = "salmon";
        salmonButton.callback = () => this.interface.prompt.showItem(10);

        // black (components)
        const blackButton = new Button(black);
        blackButton.spriteName = "black";
        blackButton.callback = () => this.interface.prompt.showItem(4);

        // red (components)
        const redButton = new Button(red);
        redButton.spriteName = "red";
        redButton.callback = () => this.interface.prompt.showItem(5);

        // yellow (components)
        const yellowButton = new Button(yellow);
        yellowButton.spriteName = "yellow";
        yellowButton.callback = () => this.interface.prompt.showItem(7);

        // purple (components)
        const purpleButton = new Button(purple);
        purpleButton.spriteName = "purple";
        purpleButton.callback = () => this.interface.prompt.showItem(8);

        // darkgreen (components)
        const darkgreenButton = new Button(darkgreen);
        darkgreenButton.spriteName = "darkgreen";
        darkgreenButton.callback = () => this.interface.prompt.showItem(11);

        // arctic (components)
        const arcticButton = new Button(arctic);
        arcticButton.spriteName = "arctic";
        arcticButton.callback = () => this.interface.prompt.showItem(16);

        // brown (components)
        const brownButton = new Button(brown);
        brownButton.spriteName = "brown";
        brownButton.callback = () => this.interface.prompt.showItem(9);

        // pink (components)
        const pinkButton = new Button(pink);
        pinkButton.spriteName = "pink";
        pinkButton.callback = () => this.interface.prompt.showItem(3);

        // orange (components)
        const orangeButton = new Button(orange);
        orangeButton.spriteName = "orange";
        orangeButton.callback = () => this.interface.prompt.showItem(6);

        // lblue (components)
        const lblueButton = new Button(lblue);
        lblueButton.spriteName = "lblue";
        lblueButton.callback = () => this.interface.prompt.showItem(12);

        // lgreen (components)
        const lgreenButton = new Button(lgreen);
        lgreenButton.spriteName = "lgreen";
        lgreenButton.callback = () => this.interface.prompt.showItem(13);

        // sec_redviking (components)
        const sec_redvikingSimpleButton = new SimpleButton(sec_redviking);
        sec_redvikingSimpleButton.callback = () => this.interface.prompt.showItem(452);

        // buy1 (components)
        const buy1Button = new Button(buy1);
        buy1Button.spriteName = "buy1";
        buy1Button.callback = () => this.interface.prompt.showItem(1004);

        // buy1_1 (components)
        const buy1_1Button = new Button(buy1_1);
        buy1_1Button.spriteName = "buy1";
        buy1_1Button.callback = () => this.interface.prompt.showItem(5002);

        // buy2 (components)
        const buy2Button = new Button(buy2);
        buy2Button.spriteName = "buy2";
        buy2Button.callback = () => this.interface.prompt.showItem(4007);

        // close_left (components)
        const close_leftButton = new Button(close_left);
        close_leftButton.spriteName = "close_left";
        close_leftButton.callback = () => this.close();
        close_leftButton.activeFrame = false;

        // page_right_4 (components)
        const page_right_4Button = new Button(page_right_4);
        page_right_4Button.spriteName = "page_right";
        page_right_4Button.callback = () => this.nextPage();
        page_right_4Button.activeFrame = false;

        // close_right_4 (components)
        const close_right_4Button = new Button(close_right_4);
        close_right_4Button.spriteName = "close_right";
        close_right_4Button.callback = () => this.close();
        close_right_4Button.activeFrame = false;

        // page_left_1 (components)
        const page_left_1Button = new Button(page_left_1);
        page_left_1Button.spriteName = "page_left";
        page_left_1Button.callback = () => this.prevPage();
        page_left_1Button.activeFrame = false;

        // close_right_4_1 (components)
        const close_right_4_1Button = new Button(close_right_4_1);
        close_right_4_1Button.spriteName = "close_right";
        close_right_4_1Button.callback = () => this.close();
        close_right_4_1Button.activeFrame = false;

        // page_right_4_1 (components)
        const page_right_4_1Button = new Button(page_right_4_1);
        page_right_4_1Button.spriteName = "page_right";
        page_right_4_1Button.callback = () => this.nextPage();
        page_right_4_1Button.activeFrame = false;

        // page_left (components)
        const page_leftButton = new Button(page_left);
        page_leftButton.spriteName = "prevpagebtn";
        page_leftButton.callback = () => this.prevPage();
        page_leftButton.activeFrame = false;
        page_leftButton.pixelPerfect = true;

        // page_right_1 (components)
        const page_right_1Button = new Button(page_right_1);
        page_right_1Button.spriteName = "nextpagebtn";
        page_right_1Button.callback = () => this.nextPage();
        page_right_1Button.activeFrame = false;
        page_right_1Button.pixelPerfect = true;

        // close_right_1 (components)
        const close_right_1Button = new Button(close_right_1);
        close_right_1Button.spriteName = "catclosebtn";
        close_right_1Button.callback = () => this.close();
        close_right_1Button.activeFrame = false;
        close_right_1Button.pixelPerfect = true;

        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.setCoins(this.world.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showItem(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
