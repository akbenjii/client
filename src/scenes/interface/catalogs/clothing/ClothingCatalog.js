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

        /** @type {Phaser.GameObjects.Image} */
        this.buy_bluesnorkel;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_blueracing;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_blueflippers;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_blackscuba;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_scubatank;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_greenwetsuit;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_yellowflippers;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_sagefish;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_squidzoi;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_3_1_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_3_1;
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
        this.load.pack("may22-clothing", "assets/media/interface/catalogs/clothing/may22-clothing.json");
        this.load.pack("catalogs-master-pack", "assets/media/interface/catalogs/catalogs-master-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page13
        const page13 = this.add.container(0, 0);
        page13.visible = false;

        // page13_bg
        const page13_bg = this.add.image(772, 417, "june22clothing", "page13");
        page13.add(page13_bg);

        // close_right_2
        const close_right_2 = this.add.image(596, 42, "catalogs-master", "catclosebtn");
        close_right_2.scaleX = -1;
        close_right_2.setOrigin(0, 0);
        page13.add(close_right_2);

        // page_right_2
        const page_right_2 = this.add.image(595, 592, "catalogs-master", "nextpagebtn");
        page_right_2.scaleX = -1;
        page_right_2.setOrigin(0, 0);
        page13.add(page_right_2);

        // page12
        const page12 = this.add.container(761, 430);
        page12.visible = false;

        // page12_bg
        const page12_bg = this.add.image(0, 0, "june22clothing", "page12");
        page12.add(page12_bg);

        // flag_button_7187
        const flag_button_7187 = this.add.ellipse(-384, -229, 75, 75);
        flag_button_7187.fillColor = 50917;
        flag_button_7187.fillAlpha = 0.5;
        page12.add(flag_button_7187);

        // flag_button_7186
        const flag_button_7186 = this.add.ellipse(-483, -230, 75, 75);
        flag_button_7186.fillColor = 50917;
        flag_button_7186.fillAlpha = 0.5;
        page12.add(flag_button_7186);

        // flag_button_7188
        const flag_button_7188 = this.add.ellipse(-273, -227, 75, 75);
        flag_button_7188.fillColor = 50917;
        flag_button_7188.fillAlpha = 0.5;
        page12.add(flag_button_7188);

        // flag_button_7189
        const flag_button_7189 = this.add.ellipse(-166, -229, 75, 75);
        flag_button_7189.fillColor = 50917;
        flag_button_7189.fillAlpha = 0.5;
        page12.add(flag_button_7189);

        // flag_button_7185
        const flag_button_7185 = this.add.ellipse(-538, -144, 75, 75);
        flag_button_7185.fillColor = 50917;
        flag_button_7185.fillAlpha = 0.5;
        page12.add(flag_button_7185);

        // flag_button_7184
        const flag_button_7184 = this.add.ellipse(-427, -135, 75, 75);
        flag_button_7184.fillColor = 50917;
        flag_button_7184.fillAlpha = 0.5;
        page12.add(flag_button_7184);

        // flag_button_7183
        const flag_button_7183 = this.add.ellipse(-318, -139, 75, 75);
        flag_button_7183.fillColor = 50917;
        flag_button_7183.fillAlpha = 0.5;
        page12.add(flag_button_7183);

        // flag_button_7182
        const flag_button_7182 = this.add.ellipse(-223, -140, 75, 75);
        flag_button_7182.fillColor = 50917;
        flag_button_7182.fillAlpha = 0.5;
        page12.add(flag_button_7182);

        // flag_button_7148
        const flag_button_7148 = this.add.ellipse(-106, -139, 75, 75);
        flag_button_7148.fillColor = 50917;
        flag_button_7148.fillAlpha = 0.5;
        page12.add(flag_button_7148);

        // flag_button_514
        const flag_button_514 = this.add.ellipse(-544, -43, 75, 75);
        flag_button_514.fillColor = 50917;
        flag_button_514.fillAlpha = 0.5;
        page12.add(flag_button_514);

        // flag_button_533
        const flag_button_533 = this.add.ellipse(-427, -41, 75, 75);
        flag_button_533.fillColor = 50917;
        flag_button_533.fillAlpha = 0.5;
        page12.add(flag_button_533);

        // flag_button_502
        const flag_button_502 = this.add.ellipse(-322, -47, 75, 75);
        flag_button_502.fillColor = 50917;
        flag_button_502.fillAlpha = 0.5;
        page12.add(flag_button_502);

        // flag_button_7096
        const flag_button_7096 = this.add.ellipse(-219, -45, 75, 75);
        flag_button_7096.fillColor = 50917;
        flag_button_7096.fillAlpha = 0.5;
        page12.add(flag_button_7096);

        // flag_button_504
        const flag_button_504 = this.add.ellipse(-110, -41, 75, 75);
        flag_button_504.fillColor = 50917;
        flag_button_504.fillAlpha = 0.5;
        page12.add(flag_button_504);

        // flag_button_538
        const flag_button_538 = this.add.ellipse(-534, 51, 75, 75);
        flag_button_538.fillColor = 50917;
        flag_button_538.fillAlpha = 0.5;
        page12.add(flag_button_538);

        // flag_button_529
        const flag_button_529 = this.add.ellipse(-427, 47, 75, 75);
        flag_button_529.fillColor = 50917;
        flag_button_529.fillAlpha = 0.5;
        page12.add(flag_button_529);

        // flag_button_505
        const flag_button_505 = this.add.ellipse(-324, 49, 75, 75);
        flag_button_505.fillColor = 50917;
        flag_button_505.fillAlpha = 0.5;
        page12.add(flag_button_505);

        // flag_button_500
        const flag_button_500 = this.add.ellipse(-221, 47, 75, 75);
        flag_button_500.fillColor = 50917;
        flag_button_500.fillAlpha = 0.5;
        page12.add(flag_button_500);

        // flag_button_535
        const flag_button_535 = this.add.ellipse(-110, 49, 75, 75);
        flag_button_535.fillColor = 50917;
        flag_button_535.fillAlpha = 0.5;
        page12.add(flag_button_535);

        // flag_button_525
        const flag_button_525 = this.add.ellipse(-538, 144, 75, 75);
        flag_button_525.fillColor = 50917;
        flag_button_525.fillAlpha = 0.5;
        page12.add(flag_button_525);

        // flag_button_506
        const flag_button_506 = this.add.ellipse(-428, 142, 75, 75);
        flag_button_506.fillColor = 50917;
        flag_button_506.fillAlpha = 0.5;
        page12.add(flag_button_506);

        // flag_button_536
        const flag_button_536 = this.add.ellipse(-325, 144, 75, 75);
        flag_button_536.fillColor = 50917;
        flag_button_536.fillAlpha = 0.5;
        page12.add(flag_button_536);

        // flag_button_540
        const flag_button_540 = this.add.ellipse(-221, 144, 75, 75);
        flag_button_540.fillColor = 50917;
        flag_button_540.fillAlpha = 0.5;
        page12.add(flag_button_540);

        // flag_button_507
        const flag_button_507 = this.add.ellipse(-109, 144, 75, 75);
        flag_button_507.fillColor = 50917;
        flag_button_507.fillAlpha = 0.5;
        page12.add(flag_button_507);

        // flag_button_542
        const flag_button_542 = this.add.ellipse(-544, 240, 75, 75);
        flag_button_542.fillColor = 50917;
        flag_button_542.fillAlpha = 0.5;
        page12.add(flag_button_542);

        // flag_button_546
        const flag_button_546 = this.add.ellipse(-431, 236, 75, 75);
        flag_button_546.fillColor = 50917;
        flag_button_546.fillAlpha = 0.5;
        page12.add(flag_button_546);

        // flag_button_548
        const flag_button_548 = this.add.ellipse(-321, 236, 75, 75);
        flag_button_548.fillColor = 50917;
        flag_button_548.fillAlpha = 0.5;
        page12.add(flag_button_548);

        // flag_button_530
        const flag_button_530 = this.add.ellipse(-219, 240, 75, 75);
        flag_button_530.fillColor = 50917;
        flag_button_530.fillAlpha = 0.5;
        page12.add(flag_button_530);

        // flag_button_508
        const flag_button_508 = this.add.ellipse(-111, 239, 75, 75);
        flag_button_508.fillColor = 50917;
        flag_button_508.fillAlpha = 0.5;
        page12.add(flag_button_508);

        // flag_button_541
        const flag_button_541 = this.add.ellipse(408.9185791015625, -230.4365997314453, 75, 75);
        flag_button_541.fillColor = 50917;
        flag_button_541.fillAlpha = 0.5;
        page12.add(flag_button_541);

        // flag_button_519
        const flag_button_519 = this.add.ellipse(508.3985595703125, -227.6732635498047, 75, 75);
        flag_button_519.fillColor = 50917;
        flag_button_519.fillAlpha = 0.5;
        page12.add(flag_button_519);

        // flag_button_545
        const flag_button_545 = this.add.ellipse(103, -109, 75, 75);
        flag_button_545.fillColor = 50917;
        flag_button_545.fillAlpha = 0.5;
        page12.add(flag_button_545);

        // flag_button_531
        const flag_button_531 = this.add.ellipse(199, -112, 75, 75);
        flag_button_531.fillColor = 50917;
        flag_button_531.fillAlpha = 0.5;
        page12.add(flag_button_531);

        // flag_button_527
        const flag_button_527 = this.add.ellipse(308, -112, 75, 75);
        flag_button_527.fillColor = 50917;
        flag_button_527.fillAlpha = 0.5;
        page12.add(flag_button_527);

        // flag_button_524
        const flag_button_524 = this.add.ellipse(410, -114, 75, 75);
        flag_button_524.fillColor = 50917;
        flag_button_524.fillAlpha = 0.5;
        page12.add(flag_button_524);

        // flag_button_501
        const flag_button_501 = this.add.ellipse(507, -112, 75, 75);
        flag_button_501.fillColor = 50917;
        flag_button_501.fillAlpha = 0.5;
        page12.add(flag_button_501);

        // flag_button_511
        const flag_button_511 = this.add.ellipse(102, 9, 75, 75);
        flag_button_511.fillColor = 50917;
        flag_button_511.fillAlpha = 0.5;
        page12.add(flag_button_511);

        // flag_button_528
        const flag_button_528 = this.add.ellipse(206, 7, 75, 75);
        flag_button_528.fillColor = 50917;
        flag_button_528.fillAlpha = 0.5;
        page12.add(flag_button_528);

        // flag_button_534
        const flag_button_534 = this.add.ellipse(305, 9, 75, 75);
        flag_button_534.fillColor = 50917;
        flag_button_534.fillAlpha = 0.5;
        page12.add(flag_button_534);

        // flag_button_512
        const flag_button_512 = this.add.ellipse(404, 8, 75, 75);
        flag_button_512.fillColor = 50917;
        flag_button_512.fillAlpha = 0.5;
        page12.add(flag_button_512);

        // flag_button_520
        const flag_button_520 = this.add.ellipse(511, 9, 75, 75);
        flag_button_520.fillColor = 50917;
        flag_button_520.fillAlpha = 0.5;
        page12.add(flag_button_520);

        // flag_button_513
        const flag_button_513 = this.add.ellipse(102, 130, 75, 75);
        flag_button_513.fillColor = 50917;
        flag_button_513.fillAlpha = 0.5;
        page12.add(flag_button_513);

        // flag_button_7095
        const flag_button_7095 = this.add.ellipse(200, 130, 75, 75);
        flag_button_7095.fillColor = 50917;
        flag_button_7095.fillAlpha = 0.5;
        page12.add(flag_button_7095);

        // flag_button_543
        const flag_button_543 = this.add.ellipse(307, 131, 75, 75);
        flag_button_543.fillColor = 50917;
        flag_button_543.fillAlpha = 0.5;
        page12.add(flag_button_543);

        // flag_button_522
        const flag_button_522 = this.add.ellipse(405, 128, 75, 75);
        flag_button_522.fillColor = 50917;
        flag_button_522.fillAlpha = 0.5;
        page12.add(flag_button_522);

        // flag_button_547
        const flag_button_547 = this.add.ellipse(508, 135, 75, 75);
        flag_button_547.fillColor = 50917;
        flag_button_547.fillAlpha = 0.5;
        page12.add(flag_button_547);

        // flag_button_537
        const flag_button_537 = this.add.ellipse(98, 251, 75, 75);
        flag_button_537.fillColor = 50917;
        flag_button_537.fillAlpha = 0.5;
        page12.add(flag_button_537);

        // flag_button_517
        const flag_button_517 = this.add.ellipse(203, 248, 75, 75);
        flag_button_517.fillColor = 50917;
        flag_button_517.fillAlpha = 0.5;
        page12.add(flag_button_517);

        // flag_button_526
        const flag_button_526 = this.add.ellipse(303, 250, 75, 75);
        flag_button_526.fillColor = 50917;
        flag_button_526.fillAlpha = 0.5;
        page12.add(flag_button_526);

        // flag_button_518
        const flag_button_518 = this.add.ellipse(407, 250, 75, 75);
        flag_button_518.fillColor = 50917;
        flag_button_518.fillAlpha = 0.5;
        page12.add(flag_button_518);

        // flag_button_539
        const flag_button_539 = this.add.ellipse(506, 252, 75, 75);
        flag_button_539.fillColor = 50917;
        flag_button_539.fillAlpha = 0.5;
        page12.add(flag_button_539);

        // flag_button_523
        const flag_button_523 = this.add.ellipse(103, -344, 75, 75);
        flag_button_523.fillColor = 50917;
        flag_button_523.fillAlpha = 0.5;
        page12.add(flag_button_523);

        // flag_button_503
        const flag_button_503 = this.add.ellipse(306, -229, 75, 75);
        flag_button_503.fillColor = 50917;
        flag_button_503.fillAlpha = 0.5;
        page12.add(flag_button_503);

        // flag_button_510
        const flag_button_510 = this.add.ellipse(202, -229, 75, 75);
        flag_button_510.fillColor = 50917;
        flag_button_510.fillAlpha = 0.5;
        page12.add(flag_button_510);

        // flag_button_509
        const flag_button_509 = this.add.ellipse(100, -231, 75, 75);
        flag_button_509.fillColor = 50917;
        flag_button_509.fillAlpha = 0.5;
        page12.add(flag_button_509);

        // flag_button_521
        const flag_button_521 = this.add.ellipse(513, -341, 75, 75);
        flag_button_521.fillColor = 50917;
        flag_button_521.fillAlpha = 0.5;
        page12.add(flag_button_521);

        // flag_button_516
        const flag_button_516 = this.add.ellipse(405, -348, 75, 75);
        flag_button_516.fillColor = 50917;
        flag_button_516.fillAlpha = 0.5;
        page12.add(flag_button_516);

        // flag_button_544
        const flag_button_544 = this.add.ellipse(304, -343, 75, 75);
        flag_button_544.fillColor = 50917;
        flag_button_544.fillAlpha = 0.5;
        page12.add(flag_button_544);

        // flag_button_515
        const flag_button_515 = this.add.ellipse(201, -344, 75, 75);
        flag_button_515.fillColor = 50917;
        flag_button_515.fillAlpha = 0.5;
        page12.add(flag_button_515);

        // page11
        const page11 = this.add.container(761, 430);
        page11.visible = false;

        // page11_bg
        const page11_bg = this.add.image(0, 0, "june22clothing", "page11");
        page11.add(page11_bg);

        // buy-seafarersgown
        const buy_seafarersgown = this.add.sprite(509, -52, "clothingcatalog", "buy2");
        buy_seafarersgown.scaleX = 1.3;
        buy_seafarersgown.scaleY = 1.3;
        buy_seafarersgown.angle = -23;
        page11.add(buy_seafarersgown);

        // buy-boonycurls
        const buy_boonycurls = this.add.sprite(113, -288, "clothingcatalog", "buy1");
        buy_boonycurls.scaleX = 1.3;
        buy_boonycurls.scaleY = 1.3;
        buy_boonycurls.angle = 21;
        page11.add(buy_boonycurls);

        // buy-nauticalboots
        const buy_nauticalboots = this.add.sprite(-148, 290, "clothingcatalog", "buy2");
        buy_nauticalboots.scaleX = 1.3;
        buy_nauticalboots.scaleY = 1.3;
        buy_nauticalboots.angle = 31;
        page11.add(buy_nauticalboots);

        // buy-shipshapesuit
        const buy_shipshapesuit = this.add.sprite(-504, 174, "clothingcatalog", "buy1");
        buy_shipshapesuit.scaleX = 1.2;
        buy_shipshapesuit.scaleY = 1.2;
        buy_shipshapesuit.angle = -45.00000000000006;
        page11.add(buy_shipshapesuit);

        // buy-shipshape
        const buy_shipshape = this.add.sprite(-490, -192, "clothingcatalog", "buy1");
        buy_shipshape.scaleX = 1.2;
        buy_shipshape.scaleY = 1.2;
        buy_shipshape.angle = -18;
        page11.add(buy_shipshape);

        // buy-treasuremaps
        const buy_treasuremaps = this.add.sprite(-126, 53, "clothingcatalog", "buy2");
        buy_treasuremaps.scaleX = 1.2;
        buy_treasuremaps.scaleY = 1.2;
        buy_treasuremaps.angle = 45;
        page11.add(buy_treasuremaps);

        // sec-fishingvest
        const sec_fishingvest = this.add.ellipse(-34, -67, 128, 128);
        sec_fishingvest.scaleX = 0.2175016673872514;
        sec_fishingvest.scaleY = 0.21393876922214905;
        sec_fishingvest.isFilled = true;
        sec_fishingvest.fillAlpha = 0;
        page11.add(sec_fishingvest);

        // sec-grassskirt
        const sec_grassskirt = this.add.ellipse(127, -393, 128, 128);
        sec_grassskirt.scaleX = 0.2175016673872514;
        sec_grassskirt.scaleY = 0.21393876922214905;
        sec_grassskirt.isFilled = true;
        sec_grassskirt.fillAlpha = 0;
        page11.add(sec_grassskirt);

        // page10
        const page10 = this.add.container(761, 429);
        page10.visible = false;

        // page10_bg
        const page10_bg = this.add.image(0, 0, "june22clothing", "page10");
        page10.add(page10_bg);

        // buy-telescope
        const buy_telescope = this.add.image(-483, -181, "clothingcatalog", "buy2");
        buy_telescope.scaleX = 1.2892080995527262;
        buy_telescope.scaleY = 1.2892080995527262;
        buy_telescope.angle = -15;
        page10.add(buy_telescope);

        // buy-thepirateer
        const buy_thepirateer = this.add.image(-394, -316, "clothingcatalog", "buy1");
        buy_thepirateer.scaleX = 1.2;
        buy_thepirateer.scaleY = 1.2;
        buy_thepirateer.angle = 15;
        page10.add(buy_thepirateer);

        // buy-crowsnestvest
        const buy_crowsnestvest = this.add.image(-100, 68, "clothingcatalog", "buy2");
        buy_crowsnestvest.scaleX = 1.2859928030062104;
        buy_crowsnestvest.scaleY = 1.2859928030062104;
        buy_crowsnestvest.angle = 33;
        page10.add(buy_crowsnestvest);

        // buy-raggedyrags
        const buy_raggedyrags = this.add.image(126, -36, "clothingcatalog", "buy1");
        buy_raggedyrags.scaleX = 1.2;
        buy_raggedyrags.scaleY = 1.2;
        buy_raggedyrags.angle = -17;
        page10.add(buy_raggedyrags);

        // buy-buccaneer
        const buy_buccaneer = this.add.image(506, -292, "clothingcatalog", "buy2");
        buy_buccaneer.scaleX = 1.2759678083080723;
        buy_buccaneer.scaleY = 1.2759678083080723;
        buy_buccaneer.angle = 10;
        page10.add(buy_buccaneer);

        // sec-lifegaurdshirt
        const sec_lifegaurdshirt = this.add.ellipse(-219, -274, 128, 128);
        sec_lifegaurdshirt.scaleX = 0.2175016673872514;
        sec_lifegaurdshirt.scaleY = 0.21393876922214905;
        sec_lifegaurdshirt.isFilled = true;
        sec_lifegaurdshirt.fillAlpha = 0;
        page10.add(sec_lifegaurdshirt);

        // page9
        const page9 = this.add.container(761, 430);
        page9.visible = false;

        // page9_bg
        const page9_bg = this.add.image(0, 0, "june22clothing", "page9");
        page9.add(page9_bg);

        // buy-commanderhat
        const buy_commanderhat = this.add.image(-471, -280, "clothingcatalog", "buy1");
        buy_commanderhat.scaleX = 1.2;
        buy_commanderhat.scaleY = 1.2;
        buy_commanderhat.angle = -39.99999999999994;
        page9.add(buy_commanderhat);

        // buy-commanderoutfit
        const buy_commanderoutfit = this.add.image(-457, -86, "clothingcatalog", "buy1");
        buy_commanderoutfit.scaleX = 1.2;
        buy_commanderoutfit.scaleY = 1.2;
        buy_commanderoutfit.angle = 15;
        page9.add(buy_commanderoutfit);

        // buy-commanderboots
        const buy_commanderboots = this.add.image(-441, 285, "clothingcatalog", "buy1");
        buy_commanderboots.scaleX = 1.2;
        buy_commanderboots.scaleY = 1.2;
        buy_commanderboots.angle = -15;
        page9.add(buy_commanderboots);

        // buy-swashbuckleroutfit
        const buy_swashbuckleroutfit = this.add.image(452, -59, "clothingcatalog", "buy2");
        buy_swashbuckleroutfit.scaleX = 1.2;
        buy_swashbuckleroutfit.scaleY = 1.2;
        page9.add(buy_swashbuckleroutfit);

        // buy-swashbucklerhat
        const buy_swashbucklerhat = this.add.image(433, -311, "clothingcatalog", "buy2");
        buy_swashbucklerhat.scaleX = 1.2;
        buy_swashbucklerhat.scaleY = 1.2;
        buy_swashbucklerhat.angle = 18;
        page9.add(buy_swashbucklerhat);

        // sec-hawaiinhat
        const sec_hawaiinhat = this.add.ellipse(484, 293, 128, 128);
        sec_hawaiinhat.scaleX = 0.2175016673872514;
        sec_hawaiinhat.scaleY = 0.21393876922214905;
        sec_hawaiinhat.isFilled = true;
        sec_hawaiinhat.fillAlpha = 0;
        page9.add(sec_hawaiinhat);

        // page8
        const page8 = this.add.container(0, -1);
        page8.visible = false;

        // page8_bg
        const page8_bg = this.add.image(761, 431, "june22clothing", "page8");
        page8.add(page8_bg);

        // buy-waterwings
        const buy_waterwings = this.add.image(239, 385, "clothingcatalog", "buy2");
        buy_waterwings.scaleX = 0.7;
        buy_waterwings.scaleY = 0.7;
        buy_waterwings.angle = 20;
        page8.add(buy_waterwings);

        // buy-crabcostume
        const buy_crabcostume = this.add.image(690, 367, "clothingcatalog", "buy2");
        buy_crabcostume.scaleX = 1.2;
        buy_crabcostume.scaleY = 1.2;
        buy_crabcostume.angle = 20;
        page8.add(buy_crabcostume);

        // buy-squidlid
        const buy_squidlid = this.add.image(622, 638, "clothingcatalog", "buy2");
        buy_squidlid.scaleX = 1.2;
        buy_squidlid.scaleY = 1.2;
        buy_squidlid.angle = 20;
        page8.add(buy_squidlid);

        // buy-mopbucket
        const buy_mopbucket = this.add.image(902, 612, "clothingcatalog", "buy1");
        buy_mopbucket.angle = -45.00000000000006;
        page8.add(buy_mopbucket);

        // buy-yellowsnorkel
        const buy_yellowsnorkel = this.add.image(1215, 607, "clothingcatalog", "buy1");
        buy_yellowsnorkel.scaleX = 1.2;
        buy_yellowsnorkel.scaleY = 1.2;
        buy_yellowsnorkel.angle = -45.00000000000006;
        page8.add(buy_yellowsnorkel);

        // sec-marcas
        const sec_marcas = this.add.ellipse(1016, 562, 128, 128);
        sec_marcas.scaleX = 0.2175016673872514;
        sec_marcas.scaleY = 0.21393876922214905;
        sec_marcas.isFilled = true;
        sec_marcas.fillAlpha = 0;
        page8.add(sec_marcas);

        // sec-fishinghat
        const sec_fishinghat = this.add.ellipse(1301, 295, 128, 128);
        sec_fishinghat.scaleX = 0.2175016673872514;
        sec_fishinghat.scaleY = 0.21393876922214905;
        sec_fishinghat.isFilled = true;
        sec_fishinghat.fillAlpha = 0;
        page8.add(sec_fishinghat);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // page7_bg
        const page7_bg = this.add.image(761, 431, "june22clothing", "page7");
        page7.add(page7_bg);

        // buy-razzmatazz
        const buy_razzmatazz = this.add.image(320, 267, "clothingcatalog", "buy1");
        buy_razzmatazz.scaleX = 1.2;
        buy_razzmatazz.scaleY = 1.2;
        buy_razzmatazz.angle = -45.00000000000006;
        page7.add(buy_razzmatazz);

        // buy-coralmermaid
        const buy_coralmermaid = this.add.image(658, 418, "clothingcatalog", "buy2");
        buy_coralmermaid.scaleX = 1.2;
        buy_coralmermaid.scaleY = 1.2;
        buy_coralmermaid.angle = 20;
        page7.add(buy_coralmermaid);

        // buy-tropicalmermaid
        const buy_tropicalmermaid = this.add.image(1281, 248, "clothingcatalog", "buy2");
        buy_tropicalmermaid.scaleX = 1.2;
        buy_tropicalmermaid.scaleY = 1.2;
        page7.add(buy_tropicalmermaid);

        // buy-aquamarine
        const buy_aquamarine = this.add.image(1161, 78, "clothingcatalog", "buy2");
        buy_aquamarine.scaleX = 1.2;
        buy_aquamarine.scaleY = 1.2;
        buy_aquamarine.angle = -39;
        page7.add(buy_aquamarine);

        // sec-purplespringdress
        const sec_purplespringdress = this.add.ellipse(657, 188, 128, 128);
        sec_purplespringdress.scaleX = 0.2175016673872514;
        sec_purplespringdress.scaleY = 0.21393876922214905;
        sec_purplespringdress.isFilled = true;
        sec_purplespringdress.fillAlpha = 0;
        page7.add(sec_purplespringdress);

        // page6
        const page6 = this.add.container(0, 1);
        page6.visible = false;

        // page6_bg
        const page6_bg = this.add.image(768, 431, "june22clothing", "page6");
        page6.add(page6_bg);

        // buy_bluesnorkel
        const buy_bluesnorkel = this.add.image(296, 354, "may22cat", "buy");
        page6.add(buy_bluesnorkel);

        // text_bluesnorkel
        const text_bluesnorkel = this.add.text(259, 334, "", {});
        text_bluesnorkel.text = "250";
        text_bluesnorkel.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_bluesnorkel);

        // buy_blueracing
        const buy_blueracing = this.add.image(285, 579, "may22cat", "buy");
        page6.add(buy_blueracing);

        // text_blueracing
        const text_blueracing = this.add.text(248, 560, "", {});
        text_blueracing.text = "500";
        text_blueracing.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_blueracing);

        // buy_blueflippers
        const buy_blueflippers = this.add.image(286, 753, "may22cat", "buy");
        page6.add(buy_blueflippers);

        // text_blueflippers
        const text_blueflippers = this.add.text(251, 733, "", {});
        text_blueflippers.text = "225";
        text_blueflippers.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_blueflippers);

        // buy_blackscuba
        const buy_blackscuba = this.add.image(1037, 488, "may22cat", "buy");
        page6.add(buy_blackscuba);

        // text_blackscuba
        const text_blackscuba = this.add.text(999, 468, "", {});
        text_blackscuba.text = "200";
        text_blackscuba.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_blackscuba);

        // buy_scubatank
        const buy_scubatank = this.add.image(1257, 488, "may22cat", "buy");
        page6.add(buy_scubatank);

        // text_scubatank
        const text_scubatank = this.add.text(1218, 467, "", {});
        text_scubatank.text = "480";
        text_scubatank.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_scubatank);

        // buy_greenwetsuit
        const buy_greenwetsuit = this.add.image(1035, 736, "may22cat", "buy");
        page6.add(buy_greenwetsuit);

        // text_greenwetsuit
        const text_greenwetsuit = this.add.text(996, 716, "", {});
        text_greenwetsuit.text = "250";
        text_greenwetsuit.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_greenwetsuit);

        // buy_yellowflippers
        const buy_yellowflippers = this.add.image(1264, 737, "may22cat", "buy");
        page6.add(buy_yellowflippers);

        // text_yellowflippers
        const text_yellowflippers = this.add.text(1225, 716, "", {});
        text_yellowflippers.text = "200";
        text_yellowflippers.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_yellowflippers);

        // sec-greenbikini
        const sec_greenbikini = this.add.ellipse(545, 656, 128, 128);
        sec_greenbikini.scaleX = 0.2175016673872514;
        sec_greenbikini.scaleY = 0.21393876922214905;
        sec_greenbikini.isFilled = true;
        sec_greenbikini.fillAlpha = 0;
        page6.add(sec_greenbikini);

        // page5
        const page5 = this.add.container(0, -1);
        page5.visible = false;

        // page5_bg
        const page5_bg = this.add.image(768, 431, "june22clothing", "page5");
        page5.add(page5_bg);

        // buy_sagefish
        const buy_sagefish = this.add.image(627, 290, "may22cat", "buy");
        page5.add(buy_sagefish);

        // text_bparka
        const text_bparka = this.add.text(589, 270, "", {});
        text_bparka.text = "400";
        text_bparka.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_bparka);

        // buy_squidzoi
        const buy_squidzoi = this.add.image(880, 291, "may22cat", "buy");
        page5.add(buy_squidzoi);

        // text_greenrug
        const text_greenrug = this.add.text(841, 270, "", {});
        text_greenrug.text = "600";
        text_greenrug.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_greenrug);

        // sec-redshorts
        const sec_redshorts = this.add.ellipse(707, 407, 128, 128);
        sec_redshorts.scaleX = 0.2175016673872514;
        sec_redshorts.scaleY = 0.21393876922214905;
        sec_redshorts.isFilled = true;
        sec_redshorts.fillAlpha = 0;
        page5.add(sec_redshorts);

        // sec-pinkswimsuit
        const sec_pinkswimsuit = this.add.ellipse(1209, 387, 128, 128);
        sec_pinkswimsuit.scaleX = 0.2175016673872514;
        sec_pinkswimsuit.scaleY = 0.21393876922214905;
        sec_pinkswimsuit.isFilled = true;
        sec_pinkswimsuit.fillAlpha = 0;
        page5.add(sec_pinkswimsuit);

        // sec-floralbikini
        const sec_floralbikini = this.add.ellipse(948, 513, 128, 128);
        sec_floralbikini.scaleX = 0.2175016673872514;
        sec_floralbikini.scaleY = 0.21393876922214905;
        sec_floralbikini.isFilled = true;
        sec_floralbikini.fillAlpha = 0;
        page5.add(sec_floralbikini);

        // page4
        const page4 = this.add.container(0, 1);
        page4.visible = false;

        // page4_bg
        const page4_bg = this.add.image(768, 431, "june22clothing", "page4");
        page4.add(page4_bg);

        // sec-bluewaterwings
        const sec_bluewaterwings = this.add.ellipse(313, 643, 128, 128);
        sec_bluewaterwings.scaleX = 0.2175016673872514;
        sec_bluewaterwings.scaleY = 0.21393876922214905;
        sec_bluewaterwings.isFilled = true;
        sec_bluewaterwings.fillAlpha = 0;
        page4.add(sec_bluewaterwings);

        // buy_2_3_1_1_1
        const buy_2_3_1_1_1 = this.add.image(607, 466, "may22cat", "buy");
        page4.add(buy_2_3_1_1_1);

        // text_2_3_1_1_1
        const text_2_3_1_1_1 = this.add.text(567, 446, "", {});
        text_2_3_1_1_1.text = "600";
        text_2_3_1_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_2_3_1_1_1);

        // buy_3_1
        const buy_3_1 = this.add.image(318, 466, "may22cat", "buy");
        page4.add(buy_3_1);

        // text_3_1
        const text_3_1 = this.add.text(280, 446, "", {});
        text_3_1.text = "500";
        text_3_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_3_1);

        // sec-blackhawaiishorts
        const sec_blackhawaiishorts = this.add.ellipse(1057, 283, 128, 128);
        sec_blackhawaiishorts.scaleX = 0.2175016673872514;
        sec_blackhawaiishorts.scaleY = 0.21393876922214905;
        sec_blackhawaiishorts.isFilled = true;
        sec_blackhawaiishorts.fillAlpha = 0;
        page4.add(sec_blackhawaiishorts);

        // sec-blueboarshorts
        const sec_blueboarshorts = this.add.ellipse(1252, 323, 128, 128);
        sec_blueboarshorts.scaleX = 0.2175016673872514;
        sec_blueboarshorts.scaleY = 0.21393876922214905;
        sec_blueboarshorts.isFilled = true;
        sec_blueboarshorts.fillAlpha = 0;
        page4.add(sec_blueboarshorts);

        // page3
        const page3 = this.add.container(0, -1);
        page3.visible = false;

        // page3_bg
        const page3_bg = this.add.image(768, 431, "june22clothing", "page3");
        page3.add(page3_bg);

        // emerald-bg
        const emerald_bg = this.add.rectangle(338, 348, 128, 128);
        emerald_bg.scaleX = 1.6391672389424585;
        emerald_bg.scaleY = 1.6391672389424585;
        emerald_bg.isFilled = true;
        emerald_bg.fillAlpha = 0;
        page3.add(emerald_bg);

        // camp-bg
        const camp_bg = this.add.rectangle(578, 348, 128, 128);
        camp_bg.scaleX = 1.6391672389424585;
        camp_bg.scaleY = 1.6391672389424585;
        camp_bg.isFilled = true;
        camp_bg.fillAlpha = 0;
        page3.add(camp_bg);

        // tropical-bg
        const tropical_bg = this.add.rectangle(944, 348, 128, 128);
        tropical_bg.scaleX = 1.6391672389424585;
        tropical_bg.scaleY = 1.6391672389424585;
        tropical_bg.isFilled = true;
        tropical_bg.fillAlpha = 0;
        page3.add(tropical_bg);

        // treasure-bg
        const treasure_bg = this.add.rectangle(1184, 348, 128, 128);
        treasure_bg.scaleX = 1.6391672389424585;
        treasure_bg.scaleY = 1.6391672389424585;
        treasure_bg.isFilled = true;
        treasure_bg.fillAlpha = 0;
        page3.add(treasure_bg);

        // ice-fishing-bg
        const ice_fishing_bg = this.add.rectangle(338, 572, 128, 128);
        ice_fishing_bg.scaleX = 1.6391672389424585;
        ice_fishing_bg.scaleY = 1.6391672389424585;
        ice_fishing_bg.isFilled = true;
        ice_fishing_bg.fillAlpha = 0;
        page3.add(ice_fishing_bg);

        // day-beach-bg
        const day_beach_bg = this.add.rectangle(578, 572, 128, 128);
        day_beach_bg.scaleX = 1.6391672389424585;
        day_beach_bg.scaleY = 1.6391672389424585;
        day_beach_bg.isFilled = true;
        day_beach_bg.fillAlpha = 0;
        page3.add(day_beach_bg);

        // beach-bg
        const beach_bg = this.add.rectangle(944, 572, 128, 128);
        beach_bg.scaleX = 1.6391672389424585;
        beach_bg.scaleY = 1.6391672389424585;
        beach_bg.isFilled = true;
        beach_bg.fillAlpha = 0;
        page3.add(beach_bg);

        // deep-bg
        const deep_bg = this.add.rectangle(1184, 572, 128, 128);
        deep_bg.scaleX = 1.6391672389424585;
        deep_bg.scaleY = 1.6391672389424585;
        deep_bg.isFilled = true;
        deep_bg.fillAlpha = 0;
        page3.add(deep_bg);

        // page2
        const page2 = this.add.container(-1, 0);
        page2.visible = false;

        // page2_bg
        const page2_bg = this.add.image(769, 431, "june22clothing", "page2");
        page2.add(page2_bg);

        // black-color
        const black_color = this.add.ellipse(855, 313, 500, 500);
        black_color.scaleX = 0.19270091046363402;
        black_color.scaleY = 0.18425493561131656;
        black_color.isFilled = true;
        black_color.fillAlpha = 0;
        page2.add(black_color);

        // dark-blue-color
        const dark_blue_color = this.add.ellipse(963, 312, 500, 500);
        dark_blue_color.scaleX = 0.19270091046363402;
        dark_blue_color.scaleY = 0.18425493561131656;
        dark_blue_color.isFilled = true;
        dark_blue_color.fillAlpha = 0;
        page2.add(dark_blue_color);

        // red-color
        const red_color = this.add.ellipse(1072, 312, 500, 500);
        red_color.scaleX = 0.19270091046363402;
        red_color.scaleY = 0.18425493561131656;
        red_color.isFilled = true;
        red_color.fillAlpha = 0;
        page2.add(red_color);

        // green-color
        const green_color = this.add.ellipse(1180, 312, 500, 500);
        green_color.scaleX = 0.19270091046363402;
        green_color.scaleY = 0.18425493561131656;
        green_color.isFilled = true;
        green_color.fillAlpha = 0;
        page2.add(green_color);

        // orange-color
        const orange_color = this.add.ellipse(1288, 312, 500, 500);
        orange_color.scaleX = 0.19270091046363402;
        orange_color.scaleY = 0.18425493561131656;
        orange_color.isFilled = true;
        orange_color.fillAlpha = 0;
        page2.add(orange_color);

        // brown-color
        const brown_color = this.add.ellipse(904, 417, 500, 500);
        brown_color.scaleX = 0.19270091046363402;
        brown_color.scaleY = 0.18425493561131656;
        brown_color.isFilled = true;
        brown_color.fillAlpha = 0;
        page2.add(brown_color);

        // peach-color
        const peach_color = this.add.ellipse(1013, 417, 500, 500);
        peach_color.scaleX = 0.19270091046363402;
        peach_color.scaleY = 0.18425493561131656;
        peach_color.isFilled = true;
        peach_color.fillAlpha = 0;
        page2.add(peach_color);

        // yellow-color
        const yellow_color = this.add.ellipse(1121, 417, 500, 500);
        yellow_color.scaleX = 0.19270091046363402;
        yellow_color.scaleY = 0.18425493561131656;
        yellow_color.isFilled = true;
        yellow_color.fillAlpha = 0;
        page2.add(yellow_color);

        // light-blue-color
        const light_blue_color = this.add.ellipse(1228, 417, 500, 500);
        light_blue_color.scaleX = 0.19270091046363402;
        light_blue_color.scaleY = 0.18425493561131656;
        light_blue_color.isFilled = true;
        light_blue_color.fillAlpha = 0;
        page2.add(light_blue_color);

        // pink-color
        const pink_color = this.add.ellipse(855, 523, 500, 500);
        pink_color.scaleX = 0.19270091046363402;
        pink_color.scaleY = 0.18425493561131656;
        pink_color.isFilled = true;
        pink_color.fillAlpha = 0;
        page2.add(pink_color);

        // dark-green-color
        const dark_green_color = this.add.ellipse(965, 523, 500, 500);
        dark_green_color.scaleX = 0.19270091046363402;
        dark_green_color.scaleY = 0.18425493561131656;
        dark_green_color.isFilled = true;
        dark_green_color.fillAlpha = 0;
        page2.add(dark_green_color);

        // dark-purple-color
        const dark_purple_color = this.add.ellipse(1073, 523, 500, 500);
        dark_purple_color.scaleX = 0.19270091046363402;
        dark_purple_color.scaleY = 0.18425493561131656;
        dark_purple_color.isFilled = true;
        dark_purple_color.fillAlpha = 0;
        page2.add(dark_purple_color);

        // lime-green-color
        const lime_green_color = this.add.ellipse(1180, 523, 500, 500);
        lime_green_color.scaleX = 0.19270091046363402;
        lime_green_color.scaleY = 0.18425493561131656;
        lime_green_color.isFilled = true;
        lime_green_color.fillAlpha = 0;
        page2.add(lime_green_color);

        // aqua-color
        const aqua_color = this.add.ellipse(1288, 523, 500, 500);
        aqua_color.scaleX = 0.19270091046363402;
        aqua_color.scaleY = 0.18425493561131656;
        aqua_color.isFilled = true;
        aqua_color.fillAlpha = 0;
        page2.add(aqua_color);

        // sec-ballonvender
        const sec_ballonvender = this.add.ellipse(473, 187, 128, 128);
        sec_ballonvender.scaleX = 0.2175016673872514;
        sec_ballonvender.scaleY = 0.21393876922214905;
        sec_ballonvender.isFilled = true;
        sec_ballonvender.fillAlpha = 0;
        page2.add(sec_ballonvender);

        // page1
        const page1 = this.add.container(-2, 0);
        page1.visible = false;

        // page1_bg
        const page1_bg = this.add.image(765, 432, "june22clothing", "page1");
        page1.add(page1_bg);

        // page_right
        const page_right = this.add.image(937, 605, "catalogs-master", "nextpagebtn");
        page_right.setOrigin(0, 0);
        page1.add(page_right);

        // close_right
        const close_right = this.add.image(935, 52, "catalogs-master", "catclosebtn");
        close_right.setOrigin(0, 0);
        page1.add(close_right);

        // sec-beachdress
        const sec_beachdress = this.add.ellipse(776, 423, 128, 128);
        sec_beachdress.scaleX = 0.2175016673872514;
        sec_beachdress.scaleY = 0.21393876922214905;
        sec_beachdress.isFilled = true;
        sec_beachdress.fillAlpha = 0;
        page1.add(sec_beachdress);

        // sec-creamsandals
        const sec_creamsandals = this.add.ellipse(918, 765, 128, 128);
        sec_creamsandals.scaleX = 0.2175016673872514;
        sec_creamsandals.scaleY = 0.21393876922214905;
        sec_creamsandals.isFilled = true;
        sec_creamsandals.fillAlpha = 0;
        page1.add(sec_creamsandals);

        // buttons
        const buttons = this.add.container(189, 41);
        buttons.visible = false;

        // coins
        const coins = this.add.text(1134, 766, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // page_left
        const page_left = this.add.image(-43, 519, "catalogs-master", "prevpagebtn");
        page_left.setOrigin(0, 0);
        buttons.add(page_left);

        // page_right_1
        const page_right_1 = this.add.image(1095, 517, "catalogs-master", "nextpagebtn");
        page_right_1.setOrigin(0, 0);
        buttons.add(page_right_1);

        // close_right_1
        const close_right_1 = this.add.image(1092, -31, "catalogs-master", "catclosebtn");
        close_right_1.setOrigin(0, 0);
        buttons.add(close_right_1);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page13];

        // block (components)
        new Interactive(block);

        // close_right_2 (components)
        const close_right_2Button = new Button(close_right_2);
        close_right_2Button.spriteName = "catclosebtn";
        close_right_2Button.callback = () => this.close();
        close_right_2Button.pixelPerfect = true;

        // page_right_2 (components)
        const page_right_2Button = new Button(page_right_2);
        page_right_2Button.spriteName = "nextpagebtn";
        page_right_2Button.callback = () => this.prevPage();
        page_right_2Button.activeFrame = false;
        page_right_2Button.pixelPerfect = true;

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

        // buy_seafarersgown (components)
        const buy_seafarersgownButton = new Button(buy_seafarersgown);
        buy_seafarersgownButton.spriteName = "buy2";
        buy_seafarersgownButton.callback = () => this.interface.prompt.showItem(4225);

        // buy_boonycurls (components)
        const buy_boonycurlsButton = new Button(buy_boonycurls);
        buy_boonycurlsButton.spriteName = "buy1";
        buy_boonycurlsButton.callback = () => this.interface.prompt.showItem(1151);

        // buy_nauticalboots (components)
        const buy_nauticalbootsButton = new Button(buy_nauticalboots);
        buy_nauticalbootsButton.spriteName = "buy2";
        buy_nauticalbootsButton.callback = () => this.interface.prompt.showItem(6044);

        // buy_shipshapesuit (components)
        const buy_shipshapesuitButton = new Button(buy_shipshapesuit);
        buy_shipshapesuitButton.spriteName = "buy1";
        buy_shipshapesuitButton.callback = () => this.interface.prompt.showItem(4386);

        // buy_shipshape (components)
        const buy_shipshapeButton = new Button(buy_shipshape);
        buy_shipshapeButton.spriteName = "buy1";
        buy_shipshapeButton.callback = () => this.interface.prompt.showItem(1276);

        // buy_treasuremaps (components)
        const buy_treasuremapsButton = new Button(buy_treasuremaps);
        buy_treasuremapsButton.spriteName = "buy2";
        buy_treasuremapsButton.callback = () => this.interface.prompt.showItem(5109);

        // sec_fishingvest (components)
        const sec_fishingvestSimpleButton = new SimpleButton(sec_fishingvest);
        sec_fishingvestSimpleButton.callback = () => this.interface.prompt.showItem(265);

        // sec_grassskirt (components)
        const sec_grassskirtSimpleButton = new SimpleButton(sec_grassskirt);
        sec_grassskirtSimpleButton.callback = () => this.interface.prompt.showItem(212);

        // buy_telescope (components)
        const buy_telescopeButton = new Button(buy_telescope);
        buy_telescopeButton.spriteName = "buy2";
        buy_telescopeButton.callback = () => this.interface.prompt.showItem(5108);

        // buy_thepirateer (components)
        const buy_thepirateerButton = new Button(buy_thepirateer);
        buy_thepirateerButton.spriteName = "buy1";
        buy_thepirateerButton.callback = () => this.interface.prompt.showItem(1277);

        // buy_crowsnestvest (components)
        const buy_crowsnestvestButton = new Button(buy_crowsnestvest);
        buy_crowsnestvestButton.spriteName = "buy2";
        buy_crowsnestvestButton.callback = () => this.interface.prompt.showItem(4385);

        // buy_raggedyrags (components)
        const buy_raggedyragsButton = new Button(buy_raggedyrags);
        buy_raggedyragsButton.spriteName = "buy1";
        buy_raggedyragsButton.callback = () => this.interface.prompt.showItem(4388);

        // buy_buccaneer (components)
        const buy_buccaneerButton = new Button(buy_buccaneer);
        buy_buccaneerButton.spriteName = "buy2";
        buy_buccaneerButton.callback = () => this.interface.prompt.showItem(1280);

        // sec_lifegaurdshirt (components)
        const sec_lifegaurdshirtSimpleButton = new SimpleButton(sec_lifegaurdshirt);
        sec_lifegaurdshirtSimpleButton.callback = () => this.interface.prompt.showItem(297);

        // buy_commanderhat (components)
        const buy_commanderhatButton = new Button(buy_commanderhat);
        buy_commanderhatButton.spriteName = "buy1";
        buy_commanderhatButton.callback = () => this.interface.prompt.showItem(1155);

        // buy_commanderoutfit (components)
        const buy_commanderoutfitButton = new Button(buy_commanderoutfit);
        buy_commanderoutfitButton.spriteName = "buy1";
        buy_commanderoutfitButton.callback = () => this.interface.prompt.showItem(4229);

        // buy_commanderboots (components)
        const buy_commanderbootsButton = new Button(buy_commanderboots);
        buy_commanderbootsButton.spriteName = "buy1";
        buy_commanderbootsButton.callback = () => this.interface.prompt.showItem(6045);

        // buy_swashbuckleroutfit (components)
        const buy_swashbuckleroutfitButton = new Button(buy_swashbuckleroutfit);
        buy_swashbuckleroutfitButton.spriteName = "buy2";
        buy_swashbuckleroutfitButton.callback = () => this.interface.prompt.showItem(1154);

        // buy_swashbucklerhat (components)
        const buy_swashbucklerhatButton = new Button(buy_swashbucklerhat);
        buy_swashbucklerhatButton.spriteName = "buy2";
        buy_swashbucklerhatButton.callback = () => this.interface.prompt.showItem(1154);

        // sec_hawaiinhat (components)
        const sec_hawaiinhatSimpleButton = new SimpleButton(sec_hawaiinhat);
        sec_hawaiinhatSimpleButton.callback = () => this.interface.prompt.showItem(211);

        // buy_waterwings (components)
        const buy_waterwingsButton = new Button(buy_waterwings);
        buy_waterwingsButton.spriteName = "buy2";
        buy_waterwingsButton.callback = () => this.interface.prompt.showItem(325);

        // buy_crabcostume (components)
        const buy_crabcostumeButton = new Button(buy_crabcostume);
        buy_crabcostumeButton.spriteName = "buy2";
        buy_crabcostumeButton.callback = () => this.interface.prompt.showItem(14212);

        // buy_squidlid (components)
        const buy_squidlidButton = new Button(buy_squidlid);
        buy_squidlidButton.spriteName = "buy2";
        buy_squidlidButton.callback = () => this.interface.prompt.showItem(1160);

        // buy_mopbucket (components)
        const buy_mopbucketButton = new Button(buy_mopbucket);
        buy_mopbucketButton.spriteName = "buy1";
        buy_mopbucketButton.callback = () => this.interface.prompt.showItem(5084);

        // buy_yellowsnorkel (components)
        const buy_yellowsnorkelButton = new Button(buy_yellowsnorkel);
        buy_yellowsnorkelButton.spriteName = "buy1";
        buy_yellowsnorkelButton.callback = () => this.interface.prompt.showItem(135);

        // sec_marcas (components)
        const sec_marcasSimpleButton = new SimpleButton(sec_marcas);
        sec_marcasSimpleButton.callback = () => this.interface.prompt.showItem(335);

        // sec_fishinghat (components)
        const sec_fishinghatSimpleButton = new SimpleButton(sec_fishinghat);
        sec_fishinghatSimpleButton.callback = () => this.interface.prompt.showItem(446);

        // buy_razzmatazz (components)
        const buy_razzmatazzButton = new Button(buy_razzmatazz);
        buy_razzmatazzButton.spriteName = "buy1";
        buy_razzmatazzButton.callback = () => this.interface.prompt.showItem(1156);

        // buy_coralmermaid (components)
        const buy_coralmermaidButton = new Button(buy_coralmermaid);
        buy_coralmermaidButton.spriteName = "buy2";
        buy_coralmermaidButton.callback = () => this.interface.prompt.showItem(4230);

        // buy_tropicalmermaid (components)
        const buy_tropicalmermaidButton = new Button(buy_tropicalmermaid);
        buy_tropicalmermaidButton.spriteName = "buy2";
        buy_tropicalmermaidButton.callback = () => this.interface.prompt.showItem(4231);

        // buy_aquamarine (components)
        const buy_aquamarineButton = new Button(buy_aquamarine);
        buy_aquamarineButton.spriteName = "buy2";
        buy_aquamarineButton.callback = () => this.interface.prompt.showItem(1157);

        // sec_purplespringdress (components)
        const sec_purplespringdressSimpleButton = new SimpleButton(sec_purplespringdress);
        sec_purplespringdressSimpleButton.callback = () => this.interface.prompt.showItem(4189);

        // buy_bluesnorkel (components)
        const buy_bluesnorkelButton = new Button(buy_bluesnorkel);
        buy_bluesnorkelButton.spriteName = "buy";
        buy_bluesnorkelButton.callback = () => this.interface.prompt.showItem(132);
        buy_bluesnorkelButton.activeFrame = false;

        // buy_blueracing (components)
        const buy_blueracingButton = new Button(buy_blueracing);
        buy_blueracingButton.spriteName = "buy";
        buy_blueracingButton.callback = () => this.interface.prompt.showItem(4113);
        buy_blueracingButton.activeFrame = false;

        // buy_blueflippers (components)
        const buy_blueflippersButton = new Button(buy_blueflippers);
        buy_blueflippersButton.spriteName = "buy";
        buy_blueflippersButton.callback = () => this.interface.prompt.showItem(364);
        buy_blueflippersButton.activeFrame = false;

        // buy_blackscuba (components)
        const buy_blackscubaButton = new Button(buy_blackscuba);
        buy_blackscubaButton.spriteName = "buy";
        buy_blackscubaButton.callback = () => this.interface.prompt.showItem(2003);
        buy_blackscubaButton.activeFrame = false;

        // buy_scubatank (components)
        const buy_scubatankButton = new Button(buy_scubatank);
        buy_scubatankButton.spriteName = "buy";
        buy_scubatankButton.callback = () => this.interface.prompt.showItem(308);
        buy_scubatankButton.activeFrame = false;

        // buy_greenwetsuit (components)
        const buy_greenwetsuitButton = new Button(buy_greenwetsuit);
        buy_greenwetsuitButton.spriteName = "buy";
        buy_greenwetsuitButton.callback = () => this.interface.prompt.showItem(4114);
        buy_greenwetsuitButton.activeFrame = false;

        // buy_yellowflippers (components)
        const buy_yellowflippersButton = new Button(buy_yellowflippers);
        buy_yellowflippersButton.spriteName = "buy";
        buy_yellowflippersButton.callback = () => this.interface.prompt.showItem(367);
        buy_yellowflippersButton.activeFrame = false;

        // sec_greenbikini (components)
        const sec_greenbikiniSimpleButton = new SimpleButton(sec_greenbikini);
        sec_greenbikiniSimpleButton.callback = () => this.interface.prompt.showItem(4097);

        // buy_sagefish (components)
        const buy_sagefishButton = new Button(buy_sagefish);
        buy_sagefishButton.spriteName = "buy";
        buy_sagefishButton.callback = () => this.interface.prompt.showItem(4455);
        buy_sagefishButton.activeFrame = false;

        // buy_squidzoi (components)
        const buy_squidzoiButton = new Button(buy_squidzoi);
        buy_squidzoiButton.spriteName = "buy";
        buy_squidzoiButton.callback = () => this.interface.prompt.showItem(767);
        buy_squidzoiButton.activeFrame = false;

        // sec_redshorts (components)
        const sec_redshortsSimpleButton = new SimpleButton(sec_redshorts);
        sec_redshortsSimpleButton.callback = () => this.interface.prompt.showItem(10267);

        // sec_pinkswimsuit (components)
        const sec_pinkswimsuitSimpleButton = new SimpleButton(sec_pinkswimsuit);
        sec_pinkswimsuitSimpleButton.callback = () => this.interface.prompt.showItem(269);

        // sec_floralbikini (components)
        const sec_floralbikiniSimpleButton = new SimpleButton(sec_floralbikini);
        sec_floralbikiniSimpleButton.callback = () => this.interface.prompt.showItem(4236);

        // sec_bluewaterwings (components)
        const sec_bluewaterwingsSimpleButton = new SimpleButton(sec_bluewaterwings);
        sec_bluewaterwingsSimpleButton.callback = () => this.interface.prompt.showItem(345);

        // buy_2_3_1_1_1 (components)
        const buy_2_3_1_1_1Button = new Button(buy_2_3_1_1_1);
        buy_2_3_1_1_1Button.spriteName = "buy";
        buy_2_3_1_1_1Button.callback = () => this.interface.prompt.showItem(4111);
        buy_2_3_1_1_1Button.activeFrame = false;

        // buy_3_1 (components)
        const buy_3_1Button = new Button(buy_3_1);
        buy_3_1Button.spriteName = "buy";
        buy_3_1Button.callback = () => this.interface.prompt.showItem(4112);
        buy_3_1Button.activeFrame = false;

        // sec_blackhawaiishorts (components)
        const sec_blackhawaiishortsSimpleButton = new SimpleButton(sec_blackhawaiishorts);
        sec_blackhawaiishortsSimpleButton.callback = () => this.interface.prompt.showItem(4096);

        // sec_blueboarshorts (components)
        const sec_blueboarshortsSimpleButton = new SimpleButton(sec_blueboarshorts);
        sec_blueboarshortsSimpleButton.callback = () => this.interface.prompt.showItem(4095);

        // emerald_bg (components)
        const emerald_bgSimpleButton = new SimpleButton(emerald_bg);
        emerald_bgSimpleButton.callback = () => this.interface.prompt.showItem(9102);

        // camp_bg (components)
        const camp_bgSimpleButton = new SimpleButton(camp_bg);
        camp_bgSimpleButton.callback = () => this.interface.prompt.showItem(9103);

        // tropical_bg (components)
        const tropical_bgSimpleButton = new SimpleButton(tropical_bg);
        tropical_bgSimpleButton.callback = () => this.interface.prompt.showItem(9038);

        // treasure_bg (components)
        const treasure_bgSimpleButton = new SimpleButton(treasure_bg);
        treasure_bgSimpleButton.callback = () => this.interface.prompt.showItem(960);

        // ice_fishing_bg (components)
        const ice_fishing_bgSimpleButton = new SimpleButton(ice_fishing_bg);
        ice_fishing_bgSimpleButton.callback = () => this.interface.prompt.showItem(936);

        // day_beach_bg (components)
        const day_beach_bgSimpleButton = new SimpleButton(day_beach_bg);
        day_beach_bgSimpleButton.callback = () => this.interface.prompt.showItem(9063);

        // beach_bg (components)
        const beach_bgSimpleButton = new SimpleButton(beach_bg);
        beach_bgSimpleButton.callback = () => this.interface.prompt.showItem(912);

        // deep_bg (components)
        const deep_bgSimpleButton = new SimpleButton(deep_bg);
        deep_bgSimpleButton.callback = () => this.interface.prompt.showItem(9128);

        // black_color (components)
        const black_colorSimpleButton = new SimpleButton(black_color);
        black_colorSimpleButton.callback = () => this.interface.prompt.showItem(4);

        // dark_blue_color (components)
        const dark_blue_colorSimpleButton = new SimpleButton(dark_blue_color);
        dark_blue_colorSimpleButton.callback = () => this.interface.prompt.showItem(1);

        // red_color (components)
        const red_colorSimpleButton = new SimpleButton(red_color);
        red_colorSimpleButton.callback = () => this.interface.prompt.showItem(5);

        // green_color (components)
        const green_colorSimpleButton = new SimpleButton(green_color);
        green_colorSimpleButton.callback = () => this.interface.prompt.showItem(2);

        // orange_color (components)
        const orange_colorSimpleButton = new SimpleButton(orange_color);
        orange_colorSimpleButton.callback = () => this.interface.prompt.showItem(6);

        // brown_color (components)
        const brown_colorSimpleButton = new SimpleButton(brown_color);
        brown_colorSimpleButton.callback = () => this.interface.prompt.showItem(9);

        // peach_color (components)
        const peach_colorSimpleButton = new SimpleButton(peach_color);
        peach_colorSimpleButton.callback = () => this.interface.prompt.showItem(10);

        // yellow_color (components)
        const yellow_colorSimpleButton = new SimpleButton(yellow_color);
        yellow_colorSimpleButton.callback = () => this.interface.prompt.showItem(7);

        // light_blue_color (components)
        const light_blue_colorSimpleButton = new SimpleButton(light_blue_color);
        light_blue_colorSimpleButton.callback = () => this.interface.prompt.showItem(12);

        // pink_color (components)
        const pink_colorSimpleButton = new SimpleButton(pink_color);
        pink_colorSimpleButton.callback = () => this.interface.prompt.showItem(3);

        // dark_green_color (components)
        const dark_green_colorSimpleButton = new SimpleButton(dark_green_color);
        dark_green_colorSimpleButton.callback = () => this.interface.prompt.showItem(11);

        // dark_purple_color (components)
        const dark_purple_colorSimpleButton = new SimpleButton(dark_purple_color);
        dark_purple_colorSimpleButton.callback = () => this.interface.prompt.showItem(8);

        // lime_green_color (components)
        const lime_green_colorSimpleButton = new SimpleButton(lime_green_color);
        lime_green_colorSimpleButton.callback = () => this.interface.prompt.showItem(13);

        // aqua_color (components)
        const aqua_colorSimpleButton = new SimpleButton(aqua_color);
        aqua_colorSimpleButton.callback = () => this.interface.prompt.showItem(15);

        // sec_ballonvender (components)
        const sec_ballonvenderSimpleButton = new SimpleButton(sec_ballonvender);
        sec_ballonvenderSimpleButton.callback = () => this.interface.prompt.showItem(4418);

        // page_right (components)
        const page_rightButton = new Button(page_right);
        page_rightButton.spriteName = "nextpagebtn";
        page_rightButton.callback = () => this.nextPage();
        page_rightButton.activeFrame = false;
        page_rightButton.pixelPerfect = true;

        // close_right (components)
        const close_rightButton = new Button(close_right);
        close_rightButton.spriteName = "catclosebtn";
        close_rightButton.callback = () => this.close();
        close_rightButton.pixelPerfect = true;

        // sec_beachdress (components)
        const sec_beachdressSimpleButton = new SimpleButton(sec_beachdress);
        sec_beachdressSimpleButton.callback = () => this.interface.prompt.showItem(4660);

        // sec_creamsandals (components)
        const sec_creamsandalsSimpleButton = new SimpleButton(sec_creamsandals);
        sec_creamsandalsSimpleButton.callback = () => this.interface.prompt.showItem(6126);

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

        this.buy_bluesnorkel = buy_bluesnorkel;
        this.buy_blueracing = buy_blueracing;
        this.buy_blueflippers = buy_blueflippers;
        this.buy_blackscuba = buy_blackscuba;
        this.buy_scubatank = buy_scubatank;
        this.buy_greenwetsuit = buy_greenwetsuit;
        this.buy_yellowflippers = buy_yellowflippers;
        this.buy_sagefish = buy_sagefish;
        this.buy_squidzoi = buy_squidzoi;
        this.buy_2_3_1_1_1 = buy_2_3_1_1_1;
        this.buy_3_1 = buy_3_1;
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
