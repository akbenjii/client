import { Button, Interactive, SimpleButton } from '@components/components'

import Book from '@scenes/interface/books/Book'
import BuyButton from './buttons/BuyButton'


/* START OF COMPILED CODE */

export default class FurnitureCatalog extends Book {

    constructor() {
        super("FurnitureCatalog");

        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_hb;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_winb;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_bam;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_window;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_ml;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_ar;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_pap;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_pb;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_or;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_rr;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_mr;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_sr;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_hd;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_ag;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_gs;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_torch;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.sec_eg;
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

        this.load.pack("furniturecatalog-pack", "assets/media/interface/catalogs/furniture/furniturecatalog-pack.json");
        this.load.pack("sep05-pack", "assets/media/interface/catalogs/clothing/sep05-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page11
        const page11 = this.add.container(0, 0);
        page11.visible = false;

        // page_11_fin
        const page_11_fin = this.add.image(765, 432, "furnjul22", "page_11_fin");
        page11.add(page_11_fin);

        // page_left_111111111
        const page_left_111111111 = this.add.image(483, 585, "furniturecatalog", "page_left");
        page_left_111111111.setOrigin(0, 0);
        page11.add(page_left_111111111);

        // close_left_1_111111111
        const close_left_1_111111111 = this.add.image(486, 38, "furniturecatalog", "close_left");
        close_left_1_111111111.setOrigin(0, 0);
        page11.add(close_left_1_111111111);

        // page10
        const page10 = this.add.container(0, 0);
        page10.visible = false;

        // page_10_fin
        const page_10_fin = this.add.image(765, 432, "furnjul22", "page_10_fin");
        page10.add(page_10_fin);

        // buyButton_51111111
        const buyButton_51111111 = new BuyButton(this, 298, 418);
        buyButton_51111111.scaleX = 0.8485573892810738;
        buyButton_51111111.scaleY = 0.8485573892810738;
        page10.add(buyButton_51111111);

        // buyButton_81111111
        const buyButton_81111111 = new BuyButton(this, 853, 179);
        buyButton_81111111.scaleX = 0.8485573892810738;
        buyButton_81111111.scaleY = 0.8485573892810738;
        page10.add(buyButton_81111111);

        // buyButton_5_21111111
        const buyButton_5_21111111 = new BuyButton(this, 1121, 406);
        buyButton_5_21111111.scaleX = 0.8485573892810738;
        buyButton_5_21111111.scaleY = 0.8485573892810738;
        page10.add(buyButton_5_21111111);

        // buyButton_5_2_11111111
        const buyButton_5_2_11111111 = new BuyButton(this, 858, 437);
        buyButton_5_2_11111111.scaleX = 0.8485573892810738;
        buyButton_5_2_11111111.scaleY = 0.8485573892810738;
        page10.add(buyButton_5_2_11111111);

        // page_left_11111111
        const page_left_11111111 = this.add.image(193, 586, "furniturecatalog", "page_left");
        page_left_11111111.setOrigin(0, 0);
        page10.add(page_left_11111111);

        // close_left_1_11111111
        const close_left_1_11111111 = this.add.image(196, 39, "furniturecatalog", "close_left");
        close_left_1_11111111.setOrigin(0, 0);
        page10.add(close_left_1_11111111);

        // page_right_1_11111111
        const page_right_1_11111111 = this.add.image(1205, 587, "furniturecatalog", "page_right");
        page_right_1_11111111.setOrigin(0, 0);
        page10.add(page_right_1_11111111);

        // close_right_1_11111111
        const close_right_1_11111111 = this.add.image(1206, 37, "furniturecatalog", "close_right");
        close_right_1_11111111.setOrigin(0, 0);
        page10.add(close_right_1_11111111);

        // buyButton_5111_1_11111
        const buyButton_5111_1_11111 = new BuyButton(this, 473, 615);
        buyButton_5111_1_11111.scaleX = 0.8485573892810738;
        buyButton_5111_1_11111.scaleY = 0.8485573892810738;
        page10.add(buyButton_5111_1_11111);

        // buyButton_51111111_1
        const buyButton_51111111_1 = new BuyButton(this, 555, 418);
        buyButton_51111111_1.scaleX = 0.8485573892810738;
        buyButton_51111111_1.scaleY = 0.8485573892810738;
        page10.add(buyButton_51111111_1);

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // page_9_fin
        const page_9_fin = this.add.image(765, 432, "furnjul22", "page_9_fin");
        page9.add(page_9_fin);

        // buyButton_5111111
        const buyButton_5111111 = new BuyButton(this, 539, 229);
        buyButton_5111111.scaleX = 0.8485573892810738;
        buyButton_5111111.scaleY = 0.8485573892810738;
        page9.add(buyButton_5111111);

        // buyButton_8111111
        const buyButton_8111111 = new BuyButton(this, 835, 370);
        buyButton_8111111.scaleX = 0.8485573892810738;
        buyButton_8111111.scaleY = 0.8485573892810738;
        page9.add(buyButton_8111111);

        // buyButton_5_2111111
        const buyButton_5_2111111 = new BuyButton(this, 1103, 370);
        buyButton_5_2111111.scaleX = 0.8485573892810738;
        buyButton_5_2111111.scaleY = 0.8485573892810738;
        page9.add(buyButton_5_2111111);

        // buyButton_5_2_1111111
        const buyButton_5_2_1111111 = new BuyButton(this, 874, 585);
        buyButton_5_2_1111111.scaleX = 0.8485573892810738;
        buyButton_5_2_1111111.scaleY = 0.8485573892810738;
        page9.add(buyButton_5_2_1111111);

        // page_left_1111111
        const page_left_1111111 = this.add.image(193, 586, "furniturecatalog", "page_left");
        page_left_1111111.setOrigin(0, 0);
        page9.add(page_left_1111111);

        // close_left_1_1111111
        const close_left_1_1111111 = this.add.image(196, 39, "furniturecatalog", "close_left");
        close_left_1_1111111.setOrigin(0, 0);
        page9.add(close_left_1_1111111);

        // page_right_1_1111111
        const page_right_1_1111111 = this.add.image(1205, 587, "furniturecatalog", "page_right");
        page_right_1_1111111.setOrigin(0, 0);
        page9.add(page_right_1_1111111);

        // close_right_1_1111111
        const close_right_1_1111111 = this.add.image(1206, 37, "furniturecatalog", "close_right");
        close_right_1_1111111.setOrigin(0, 0);
        page9.add(close_right_1_1111111);

        // buyButton_5111_1_1111
        const buyButton_5111_1_1111 = new BuyButton(this, 288, 581);
        buyButton_5111_1_1111.scaleX = 0.8485573892810738;
        buyButton_5111_1_1111.scaleY = 0.8485573892810738;
        page9.add(buyButton_5111_1_1111);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // page_8_fin
        const page_8_fin = this.add.image(765, 432, "furnjul22", "page_8_fin");
        page8.add(page_8_fin);

        // buyButton_511111
        const buyButton_511111 = new BuyButton(this, 494, 216);
        buyButton_511111.scaleX = 0.8485573892810738;
        buyButton_511111.scaleY = 0.8485573892810738;
        page8.add(buyButton_511111);

        // buyButton_811111
        const buyButton_811111 = new BuyButton(this, 819, 429);
        buyButton_811111.scaleX = 0.8485573892810738;
        buyButton_811111.scaleY = 0.8485573892810738;
        page8.add(buyButton_811111);

        // buyButton_5_211111
        const buyButton_5_211111 = new BuyButton(this, 1087, 452);
        buyButton_5_211111.scaleX = 0.8485573892810738;
        buyButton_5_211111.scaleY = 0.8485573892810738;
        page8.add(buyButton_5_211111);

        // buyButton_5_2_111111
        const buyButton_5_2_111111 = new BuyButton(this, 873, 659);
        buyButton_5_2_111111.scaleX = 0.8485573892810738;
        buyButton_5_2_111111.scaleY = 0.8485573892810738;
        page8.add(buyButton_5_2_111111);

        // page_left_111111
        const page_left_111111 = this.add.image(193, 586, "furniturecatalog", "page_left");
        page_left_111111.setOrigin(0, 0);
        page8.add(page_left_111111);

        // close_left_1_111111
        const close_left_1_111111 = this.add.image(196, 39, "furniturecatalog", "close_left");
        close_left_1_111111.setOrigin(0, 0);
        page8.add(close_left_1_111111);

        // page_right_1_111111
        const page_right_1_111111 = this.add.image(1205, 587, "furniturecatalog", "page_right");
        page_right_1_111111.setOrigin(0, 0);
        page8.add(page_right_1_111111);

        // close_right_1_111111
        const close_right_1_111111 = this.add.image(1206, 37, "furniturecatalog", "close_right");
        close_right_1_111111.setOrigin(0, 0);
        page8.add(close_right_1_111111);

        // buyButton_5_11_11111
        const buyButton_5_11_11111 = new BuyButton(this, 543, 677);
        buyButton_5_11_11111.scaleX = 0.8485573892810738;
        buyButton_5_11_11111.scaleY = 0.8485573892810738;
        page8.add(buyButton_5_11_11111);

        // buyButton_5111_1_111
        const buyButton_5111_1_111 = new BuyButton(this, 288, 677);
        buyButton_5111_1_111.scaleX = 0.8485573892810738;
        buyButton_5111_1_111.scaleY = 0.8485573892810738;
        page8.add(buyButton_5111_1_111);

        // sec_hb
        const sec_hb = this.add.ellipse(613, 478, 128, 128);
        sec_hb.scaleX = 0.226648688900411;
        sec_hb.scaleY = 0.226648688900411;
        sec_hb.isFilled = true;
        sec_hb.fillAlpha = 0;
        page8.add(sec_hb);

        // sec_winb
        const sec_winb = this.add.ellipse(1084, 671, 128, 128);
        sec_winb.scaleX = 0.226648688900411;
        sec_winb.scaleY = 0.226648688900411;
        sec_winb.isFilled = true;
        sec_winb.fillAlpha = 0;
        page8.add(sec_winb);

        // sec_bam
        const sec_bam = this.add.ellipse(951, 190, 128, 128);
        sec_bam.scaleX = 0.226648688900411;
        sec_bam.scaleY = 0.226648688900411;
        sec_bam.isFilled = true;
        sec_bam.fillAlpha = 0;
        page8.add(sec_bam);

        // sec_window
        const sec_window = this.add.ellipse(286, 200, 128, 128);
        sec_window.scaleX = 0.226648688900411;
        sec_window.scaleY = 0.226648688900411;
        sec_window.isFilled = true;
        sec_window.fillAlpha = 0;
        page8.add(sec_window);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // page_7_fin
        const page_7_fin = this.add.image(765, 432, "furnjul22", "page_7_fin");
        page7.add(page_7_fin);

        // buyButton_51111
        const buyButton_51111 = new BuyButton(this, 274, 400);
        buyButton_51111.scaleX = 0.8485573892810738;
        buyButton_51111.scaleY = 0.8485573892810738;
        page7.add(buyButton_51111);

        // buyButton_81111
        const buyButton_81111 = new BuyButton(this, 836, 642);
        buyButton_81111.scaleX = 0.8485573892810738;
        buyButton_81111.scaleY = 0.8485573892810738;
        page7.add(buyButton_81111);

        // buyButton_5_21111
        const buyButton_5_21111 = new BuyButton(this, 1129, 228);
        buyButton_5_21111.scaleX = 0.8485573892810738;
        buyButton_5_21111.scaleY = 0.8485573892810738;
        page7.add(buyButton_5_21111);

        // buyButton_5_2_11111
        const buyButton_5_2_11111 = new BuyButton(this, 1112, 642);
        buyButton_5_2_11111.scaleX = 0.8485573892810738;
        buyButton_5_2_11111.scaleY = 0.8485573892810738;
        page7.add(buyButton_5_2_11111);

        // page_left_11111
        const page_left_11111 = this.add.image(193, 586, "furniturecatalog", "page_left");
        page_left_11111.setOrigin(0, 0);
        page7.add(page_left_11111);

        // close_left_1_11111
        const close_left_1_11111 = this.add.image(196, 39, "furniturecatalog", "close_left");
        close_left_1_11111.setOrigin(0, 0);
        page7.add(close_left_1_11111);

        // page_right_1_11111
        const page_right_1_11111 = this.add.image(1205, 587, "furniturecatalog", "page_right");
        page_right_1_11111.setOrigin(0, 0);
        page7.add(page_right_1_11111);

        // close_right_1_11111
        const close_right_1_11111 = this.add.image(1206, 37, "furniturecatalog", "close_right");
        close_right_1_11111.setOrigin(0, 0);
        page7.add(close_right_1_11111);

        // buyButton_5_11_1111
        const buyButton_5_11_1111 = new BuyButton(this, 538, 624);
        buyButton_5_11_1111.scaleX = 0.8485573892810738;
        buyButton_5_11_1111.scaleY = 0.8485573892810738;
        page7.add(buyButton_5_11_1111);

        // buyButton_5111_1_11
        const buyButton_5111_1_11 = new BuyButton(this, 545, 405);
        buyButton_5111_1_11.scaleX = 0.8485573892810738;
        buyButton_5111_1_11.scaleY = 0.8485573892810738;
        page7.add(buyButton_5111_1_11);

        // sec_ml
        const sec_ml = this.add.ellipse(895, 222, 128, 128);
        sec_ml.scaleX = 0.226648688900411;
        sec_ml.scaleY = 0.226648688900411;
        sec_ml.isFilled = true;
        sec_ml.fillAlpha = 0;
        page7.add(sec_ml);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // page_6_fin
        const page_6_fin = this.add.image(765, 432, "furnjul22", "page_6_fin");
        page6.add(page_6_fin);

        // buyButton_5111
        const buyButton_5111 = new BuyButton(this, 243, 414);
        buyButton_5111.scaleX = 0.8485573892810738;
        buyButton_5111.scaleY = 0.8485573892810738;
        page6.add(buyButton_5111);

        // buyButton_8111
        const buyButton_8111 = new BuyButton(this, 845, 685);
        buyButton_8111.scaleX = 0.8485573892810738;
        buyButton_8111.scaleY = 0.8485573892810738;
        page6.add(buyButton_8111);

        // buyButton_5_2111
        const buyButton_5_2111 = new BuyButton(this, 848, 202);
        buyButton_5_2111.scaleX = 0.8485573892810738;
        buyButton_5_2111.scaleY = 0.8485573892810738;
        page6.add(buyButton_5_2111);

        // buyButton_5_2_1111
        const buyButton_5_2_1111 = new BuyButton(this, 1126, 689);
        buyButton_5_2_1111.scaleX = 0.8485573892810738;
        buyButton_5_2_1111.scaleY = 0.8485573892810738;
        page6.add(buyButton_5_2_1111);

        // page_left_1111
        const page_left_1111 = this.add.image(193, 586, "furniturecatalog", "page_left");
        page_left_1111.setOrigin(0, 0);
        page6.add(page_left_1111);

        // close_left_1_1111
        const close_left_1_1111 = this.add.image(196, 39, "furniturecatalog", "close_left");
        close_left_1_1111.setOrigin(0, 0);
        page6.add(close_left_1_1111);

        // page_right_1_1111
        const page_right_1_1111 = this.add.image(1205, 587, "furniturecatalog", "page_right");
        page_right_1_1111.setOrigin(0, 0);
        page6.add(page_right_1_1111);

        // close_right_1_1111
        const close_right_1_1111 = this.add.image(1206, 37, "furniturecatalog", "close_right");
        close_right_1_1111.setOrigin(0, 0);
        page6.add(close_right_1_1111);

        // buyButton_5_11_111
        const buyButton_5_11_111 = new BuyButton(this, 500, 655);
        buyButton_5_11_111.scaleX = 0.8485573892810738;
        buyButton_5_11_111.scaleY = 0.8485573892810738;
        page6.add(buyButton_5_11_111);

        // buyButton_5111_1
        const buyButton_5111_1 = new BuyButton(this, 417, 414);
        buyButton_5111_1.scaleX = 0.8485573892810738;
        buyButton_5111_1.scaleY = 0.8485573892810738;
        page6.add(buyButton_5111_1);

        // buyButton_5111_1_1
        const buyButton_5111_1_1 = new BuyButton(this, 583, 414);
        buyButton_5111_1_1.scaleX = 0.8485573892810738;
        buyButton_5111_1_1.scaleY = 0.8485573892810738;
        page6.add(buyButton_5111_1_1);

        // sec_ar
        const sec_ar = this.add.ellipse(964, 379, 128, 128);
        sec_ar.scaleX = 0.226648688900411;
        sec_ar.scaleY = 0.226648688900411;
        sec_ar.isFilled = true;
        sec_ar.fillAlpha = 0;
        page6.add(sec_ar);

        // sec_pap
        const sec_pap = this.add.ellipse(1203, 407, 128, 128);
        sec_pap.scaleX = 0.226648688900411;
        sec_pap.scaleY = 0.226648688900411;
        sec_pap.isFilled = true;
        sec_pap.fillAlpha = 0;
        page6.add(sec_pap);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // page_5_fin
        const page_5_fin = this.add.image(765, 432, "furnjul22", "page_5_fin");
        page5.add(page_5_fin);

        // buyButton_511
        const buyButton_511 = new BuyButton(this, 515, 217);
        buyButton_511.scaleX = 0.8485573892810738;
        buyButton_511.scaleY = 0.8485573892810738;
        page5.add(buyButton_511);

        // buyButton_811
        const buyButton_811 = new BuyButton(this, 831, 685);
        buyButton_811.scaleX = 0.8485573892810738;
        buyButton_811.scaleY = 0.8485573892810738;
        page5.add(buyButton_811);

        // buyButton_5_111
        const buyButton_5_111 = new BuyButton(this, 846, 393);
        buyButton_5_111.scaleX = 0.8485573892810738;
        buyButton_5_111.scaleY = 0.8485573892810738;
        page5.add(buyButton_5_111);

        // buyButton_5_211
        const buyButton_5_211 = new BuyButton(this, 1068, 200);
        buyButton_5_211.scaleX = 0.8485573892810738;
        buyButton_5_211.scaleY = 0.8485573892810738;
        page5.add(buyButton_5_211);

        // page_left_111
        const page_left_111 = this.add.image(193, 586, "furniturecatalog", "page_left");
        page_left_111.setOrigin(0, 0);
        page5.add(page_left_111);

        // close_left_1_111
        const close_left_1_111 = this.add.image(196, 39, "furniturecatalog", "close_left");
        close_left_1_111.setOrigin(0, 0);
        page5.add(close_left_1_111);

        // page_right_1_111
        const page_right_1_111 = this.add.image(1205, 587, "furniturecatalog", "page_right");
        page_right_1_111.setOrigin(0, 0);
        page5.add(page_right_1_111);

        // close_right_1_111
        const close_right_1_111 = this.add.image(1206, 37, "furniturecatalog", "close_right");
        close_right_1_111.setOrigin(0, 0);
        page5.add(close_right_1_111);

        // buyButton_5_2_111
        const buyButton_5_2_111 = new BuyButton(this, 1102, 689);
        buyButton_5_2_111.scaleX = 0.8485573892810738;
        buyButton_5_2_111.scaleY = 0.8485573892810738;
        page5.add(buyButton_5_2_111);

        // buyButton_5_11_11
        const buyButton_5_11_11 = new BuyButton(this, 554, 657);
        buyButton_5_11_11.scaleX = 0.8485573892810738;
        buyButton_5_11_11.scaleY = 0.8485573892810738;
        page5.add(buyButton_5_11_11);

        // buyButton_5_11_1_11
        const buyButton_5_11_1_11 = new BuyButton(this, 279, 661);
        buyButton_5_11_1_11.scaleX = 0.8485573892810738;
        buyButton_5_11_1_11.scaleY = 0.8485573892810738;
        page5.add(buyButton_5_11_1_11);

        // sec_pb
        const sec_pb = this.add.ellipse(858, 615, 128, 128);
        sec_pb.scaleX = 0.226648688900411;
        sec_pb.scaleY = 0.226648688900411;
        sec_pb.isFilled = true;
        sec_pb.fillAlpha = 0;
        page5.add(sec_pb);

        // sec_or
        const sec_or = this.add.ellipse(636, 512, 128, 128);
        sec_or.scaleX = 0.226648688900411;
        sec_or.scaleY = 0.226648688900411;
        sec_or.isFilled = true;
        sec_or.fillAlpha = 0;
        page5.add(sec_or);

        // sec_rr
        const sec_rr = this.add.ellipse(286, 479, 128, 128);
        sec_rr.scaleX = 0.226648688900411;
        sec_rr.scaleY = 0.226648688900411;
        sec_rr.isFilled = true;
        sec_rr.fillAlpha = 0;
        page5.add(sec_rr);

        // sec_mr
        const sec_mr = this.add.ellipse(345, 124, 128, 128);
        sec_mr.scaleX = 0.226648688900411;
        sec_mr.scaleY = 0.226648688900411;
        sec_mr.isFilled = true;
        sec_mr.fillAlpha = 0;
        page5.add(sec_mr);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // page_4_fin
        const page_4_fin = this.add.image(765, 432, "furnjul22", "page_4_fin");
        page4.add(page_4_fin);

        // buyButton_51
        const buyButton_51 = new BuyButton(this, 505, 198);
        buyButton_51.scaleX = 0.8485573892810738;
        buyButton_51.scaleY = 0.8485573892810738;
        page4.add(buyButton_51);

        // buyButton_81
        const buyButton_81 = new BuyButton(this, 1097, 495);
        buyButton_81.scaleX = 0.8485573892810738;
        buyButton_81.scaleY = 0.8485573892810738;
        page4.add(buyButton_81);

        // buyButton_5_11
        const buyButton_5_11 = new BuyButton(this, 417, 585);
        buyButton_5_11.scaleX = 0.8485573892810738;
        buyButton_5_11.scaleY = 0.8485573892810738;
        page4.add(buyButton_5_11);

        // buyButton_5_21
        const buyButton_5_21 = new BuyButton(this, 860, 256);
        buyButton_5_21.scaleX = 0.8485573892810738;
        buyButton_5_21.scaleY = 0.8485573892810738;
        page4.add(buyButton_5_21);

        // page_left_11
        const page_left_11 = this.add.image(193, 586, "furniturecatalog", "page_left");
        page_left_11.setOrigin(0, 0);
        page4.add(page_left_11);

        // close_left_1_11
        const close_left_1_11 = this.add.image(196, 39, "furniturecatalog", "close_left");
        close_left_1_11.setOrigin(0, 0);
        page4.add(close_left_1_11);

        // page_right_1_11
        const page_right_1_11 = this.add.image(1205, 587, "furniturecatalog", "page_right");
        page_right_1_11.setOrigin(0, 0);
        page4.add(page_right_1_11);

        // close_right_1_11
        const close_right_1_11 = this.add.image(1206, 37, "furniturecatalog", "close_right");
        close_right_1_11.setOrigin(0, 0);
        page4.add(close_right_1_11);

        // buyButton_5_2_11
        const buyButton_5_2_11 = new BuyButton(this, 1085, 683);
        buyButton_5_2_11.scaleX = 0.8485573892810738;
        buyButton_5_2_11.scaleY = 0.8485573892810738;
        page4.add(buyButton_5_2_11);

        // buyButton_5_11_1
        const buyButton_5_11_1 = new BuyButton(this, 579, 651);
        buyButton_5_11_1.scaleX = 0.8485573892810738;
        buyButton_5_11_1.scaleY = 0.8485573892810738;
        page4.add(buyButton_5_11_1);

        // buyButton_5_11_1_1
        const buyButton_5_11_1_1 = new BuyButton(this, 254, 647);
        buyButton_5_11_1_1.scaleX = 0.8485573892810738;
        buyButton_5_11_1_1.scaleY = 0.8485573892810738;
        page4.add(buyButton_5_11_1_1);

        // sec_sr
        const sec_sr = this.add.ellipse(613, 577, 128, 128);
        sec_sr.scaleX = 0.226648688900411;
        sec_sr.scaleY = 0.226648688900411;
        sec_sr.isFilled = true;
        sec_sr.fillAlpha = 0;
        page4.add(sec_sr);

        // sec_hd
        const sec_hd = this.add.ellipse(1010, 537, 128, 128);
        sec_hd.scaleX = 0.226648688900411;
        sec_hd.scaleY = 0.226648688900411;
        sec_hd.isFilled = true;
        sec_hd.fillAlpha = 0;
        page4.add(sec_hd);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // page_3_fin
        const page_3_fin = this.add.image(765, 432, "furnjul22", "page_3_fin");
        page3.add(page_3_fin);

        // buyButton_5
        const buyButton_5 = new BuyButton(this, 551, 101);
        buyButton_5.scaleX = 0.8485573892810738;
        buyButton_5.scaleY = 0.8485573892810738;
        page3.add(buyButton_5);

        // buyButton_8
        const buyButton_8 = new BuyButton(this, 1117, 656);
        buyButton_8.scaleX = 0.8485573892810738;
        buyButton_8.scaleY = 0.8485573892810738;
        page3.add(buyButton_8);

        // buyButton_5_1
        const buyButton_5_1 = new BuyButton(this, 547, 654);
        buyButton_5_1.scaleX = 0.8485573892810738;
        buyButton_5_1.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_1);

        // buyButton_5_1_1
        const buyButton_5_1_1 = new BuyButton(this, 271, 656);
        buyButton_5_1_1.scaleX = 0.8485573892810738;
        buyButton_5_1_1.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_1_1);

        // buyButton_5_2
        const buyButton_5_2 = new BuyButton(this, 867, 209);
        buyButton_5_2.scaleX = 0.8485573892810738;
        buyButton_5_2.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_2);

        // page_left_1
        const page_left_1 = this.add.image(193, 586, "furniturecatalog", "page_left");
        page_left_1.setOrigin(0, 0);
        page3.add(page_left_1);

        // close_left_1_1
        const close_left_1_1 = this.add.image(196, 39, "furniturecatalog", "close_left");
        close_left_1_1.setOrigin(0, 0);
        page3.add(close_left_1_1);

        // page_right_1_1
        const page_right_1_1 = this.add.image(1205, 587, "furniturecatalog", "page_right");
        page_right_1_1.setOrigin(0, 0);
        page3.add(page_right_1_1);

        // close_right_1_1
        const close_right_1_1 = this.add.image(1206, 37, "furniturecatalog", "close_right");
        close_right_1_1.setOrigin(0, 0);
        page3.add(close_right_1_1);

        // buyButton_5_2_1
        const buyButton_5_2_1 = new BuyButton(this, 849, 655);
        buyButton_5_2_1.scaleX = 0.8485573892810738;
        buyButton_5_2_1.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_2_1);

        // sec_ag
        const sec_ag = this.add.ellipse(347, 580, 128, 128);
        sec_ag.scaleX = 0.4114263934541442;
        sec_ag.scaleY = 0.4322169016004844;
        sec_ag.isFilled = true;
        sec_ag.fillAlpha = 0;
        page3.add(sec_ag);

        // sec_gs
        const sec_gs = this.add.ellipse(1195, 276, 128, 128);
        sec_gs.scaleX = 0.4114263934541442;
        sec_gs.scaleY = 0.4322169016004844;
        sec_gs.isFilled = true;
        sec_gs.fillAlpha = 0;
        page3.add(sec_gs);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // page_2_fin
        const page_2_fin = this.add.image(765, 432, "furnjul22", "page_2_fin");
        page2.add(page_2_fin);

        // buyButton
        const buyButton = new BuyButton(this, 535, 402);
        page2.add(buyButton);

        // buyButton_1
        const buyButton_1 = new BuyButton(this, 264, 403);
        page2.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(this, 563, 558);
        buyButton_2.scaleX = 0.8290542482481168;
        buyButton_2.scaleY = 0.8290542482481168;
        page2.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(this, 1049, 196);
        page2.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(this, 819, 429);
        page2.add(buyButton_4);

        // close_right_1
        const close_right_1 = this.add.image(1206, 37, "furniturecatalog", "close_right");
        close_right_1.setOrigin(0, 0);
        page2.add(close_right_1);

        // page_right_1
        const page_right_1 = this.add.image(1205, 587, "furniturecatalog", "page_right");
        page_right_1.setOrigin(0, 0);
        page2.add(page_right_1);

        // close_left_1
        const close_left_1 = this.add.image(196, 39, "furniturecatalog", "close_left");
        close_left_1.setOrigin(0, 0);
        page2.add(close_left_1);

        // page_left
        const page_left = this.add.image(193, 586, "furniturecatalog", "page_left");
        page_left.setOrigin(0, 0);
        page2.add(page_left);

        // buyButton_4_1
        const buyButton_4_1 = new BuyButton(this, 850, 660);
        page2.add(buyButton_4_1);

        // sec_torch
        const sec_torch = this.add.ellipse(892, 132, 128, 128);
        sec_torch.scaleX = 0.4114263934541442;
        sec_torch.scaleY = 0.4322169016004844;
        sec_torch.isFilled = true;
        sec_torch.fillAlpha = 0;
        page2.add(sec_torch);

        // sec_eg
        const sec_eg = this.add.ellipse(363, 346, 128, 128);
        sec_eg.scaleX = 0.4114263934541442;
        sec_eg.scaleY = 0.4322169016004844;
        sec_eg.isFilled = true;
        sec_eg.fillAlpha = 0;
        page2.add(sec_eg);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // page_1_fin
        const page_1_fin = this.add.image(765, 432, "furnjul22", "page_1_fin");
        page1.add(page_1_fin);

        // close_right
        const close_right = this.add.image(917, 38, "furniturecatalog", "close_right");
        close_right.setOrigin(0, 0);
        page1.add(close_right);

        // page_right
        const page_right = this.add.image(918, 588, "furniturecatalog", "page_right");
        page_right.setOrigin(0, 0);
        page1.add(page_right);

        // buttons
        const buttons = this.add.container(190, 41);
        buttons.visible = false;

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8, page9, page10, page11];

        // block (components)
        new Interactive(block);

        // page_left_111111111 (components)
        const page_left_111111111Button = new Button(page_left_111111111);
        page_left_111111111Button.spriteName = "page_left";
        page_left_111111111Button.callback = () => this.prevPage();
        page_left_111111111Button.activeFrame = false;

        // close_left_1_111111111 (components)
        const close_left_1_111111111Button = new Button(close_left_1_111111111);
        close_left_1_111111111Button.spriteName = "close_left";
        close_left_1_111111111Button.callback = () => this.close();

        // buyButton_51111111 (prefab fields)
        buyButton_51111111.item = 65;

        // buyButton_81111111 (prefab fields)
        buyButton_81111111.item = 393;

        // buyButton_5_21111111 (prefab fields)
        buyButton_5_21111111.item = 361;

        // buyButton_5_2_11111111 (prefab fields)
        buyButton_5_2_11111111.item = 394;

        // page_left_11111111 (components)
        const page_left_11111111Button = new Button(page_left_11111111);
        page_left_11111111Button.spriteName = "page_left";
        page_left_11111111Button.callback = () => this.prevPage();
        page_left_11111111Button.activeFrame = false;

        // close_left_1_11111111 (components)
        const close_left_1_11111111Button = new Button(close_left_1_11111111);
        close_left_1_11111111Button.spriteName = "close_left";
        close_left_1_11111111Button.callback = () => this.close();

        // page_right_1_11111111 (components)
        const page_right_1_11111111Button = new Button(page_right_1_11111111);
        page_right_1_11111111Button.spriteName = "page_right";
        page_right_1_11111111Button.callback = () => this.nextPage();
        page_right_1_11111111Button.activeFrame = false;

        // close_right_1_11111111 (components)
        const close_right_1_11111111Button = new Button(close_right_1_11111111);
        close_right_1_11111111Button.spriteName = "close_right";
        close_right_1_11111111Button.callback = () => this.close();

        // buyButton_5111_1_11111 (prefab fields)
        buyButton_5111_1_11111.item = 66;

        // buyButton_51111111_1 (prefab fields)
        buyButton_51111111_1.item = 67;

        // buyButton_5111111 (prefab fields)
        buyButton_5111111.item = 80;

        // buyButton_8111111 (prefab fields)
        buyButton_8111111.item = 61;

        // buyButton_5_2111111 (prefab fields)
        buyButton_5_2111111.item = 63;

        // buyButton_5_2_1111111 (prefab fields)
        buyButton_5_2_1111111.item = 62;

        // page_left_1111111 (components)
        const page_left_1111111Button = new Button(page_left_1111111);
        page_left_1111111Button.spriteName = "page_left";
        page_left_1111111Button.callback = () => this.prevPage();
        page_left_1111111Button.activeFrame = false;

        // close_left_1_1111111 (components)
        const close_left_1_1111111Button = new Button(close_left_1_1111111);
        close_left_1_1111111Button.spriteName = "close_left";
        close_left_1_1111111Button.callback = () => this.close();

        // page_right_1_1111111 (components)
        const page_right_1_1111111Button = new Button(page_right_1_1111111);
        page_right_1_1111111Button.spriteName = "page_right";
        page_right_1_1111111Button.callback = () => this.nextPage();
        page_right_1_1111111Button.activeFrame = false;

        // close_right_1_1111111 (components)
        const close_right_1_1111111Button = new Button(close_right_1_1111111);
        close_right_1_1111111Button.spriteName = "close_right";
        close_right_1_1111111Button.callback = () => this.close();

        // buyButton_5111_1_1111 (prefab fields)
        buyButton_5111_1_1111.item = 85;

        // buyButton_511111 (prefab fields)
        buyButton_511111.item = 345;

        // buyButton_811111 (prefab fields)
        buyButton_811111.item = 162;

        // buyButton_5_211111 (prefab fields)
        buyButton_5_211111.item = 167;

        // buyButton_5_2_111111 (prefab fields)
        buyButton_5_2_111111.item = 368;

        // page_left_111111 (components)
        const page_left_111111Button = new Button(page_left_111111);
        page_left_111111Button.spriteName = "page_left";
        page_left_111111Button.callback = () => this.prevPage();
        page_left_111111Button.activeFrame = false;

        // close_left_1_111111 (components)
        const close_left_1_111111Button = new Button(close_left_1_111111);
        close_left_1_111111Button.spriteName = "close_left";
        close_left_1_111111Button.callback = () => this.close();

        // page_right_1_111111 (components)
        const page_right_1_111111Button = new Button(page_right_1_111111);
        page_right_1_111111Button.spriteName = "page_right";
        page_right_1_111111Button.callback = () => this.nextPage();
        page_right_1_111111Button.activeFrame = false;

        // close_right_1_111111 (components)
        const close_right_1_111111Button = new Button(close_right_1_111111);
        close_right_1_111111Button.spriteName = "close_right";
        close_right_1_111111Button.callback = () => this.close();

        // buyButton_5_11_11111 (prefab fields)
        buyButton_5_11_11111.item = 31;

        // buyButton_5111_1_111 (prefab fields)
        buyButton_5111_1_111.item = 344;

        // sec_hb (components)
        const sec_hbSimpleButton = new SimpleButton(sec_hb);
        sec_hbSimpleButton.callback = () => this.interface.prompt.showFurniture(688);

        // sec_winb (components)
        const sec_winbSimpleButton = new SimpleButton(sec_winb);
        sec_winbSimpleButton.callback = () => this.interface.prompt.showFurniture(685);

        // sec_bam (components)
        const sec_bamSimpleButton = new SimpleButton(sec_bam);
        sec_bamSimpleButton.callback = () => this.interface.prompt.showFurniture(777);

        // sec_window (components)
        const sec_windowSimpleButton = new SimpleButton(sec_window);
        sec_windowSimpleButton.callback = () => this.interface.prompt.showFurniture(560);

        // buyButton_51111 (prefab fields)
        buyButton_51111.item = 107;

        // buyButton_81111 (prefab fields)
        buyButton_81111.item = 377;

        // buyButton_5_21111 (prefab fields)
        buyButton_5_21111.item = 158;

        // buyButton_5_2_11111 (prefab fields)
        buyButton_5_2_11111.item = 378;

        // page_left_11111 (components)
        const page_left_11111Button = new Button(page_left_11111);
        page_left_11111Button.spriteName = "page_left";
        page_left_11111Button.callback = () => this.prevPage();
        page_left_11111Button.activeFrame = false;

        // close_left_1_11111 (components)
        const close_left_1_11111Button = new Button(close_left_1_11111);
        close_left_1_11111Button.spriteName = "close_left";
        close_left_1_11111Button.callback = () => this.close();

        // page_right_1_11111 (components)
        const page_right_1_11111Button = new Button(page_right_1_11111);
        page_right_1_11111Button.spriteName = "page_right";
        page_right_1_11111Button.callback = () => this.nextPage();
        page_right_1_11111Button.activeFrame = false;

        // close_right_1_11111 (components)
        const close_right_1_11111Button = new Button(close_right_1_11111);
        close_right_1_11111Button.spriteName = "close_right";
        close_right_1_11111Button.callback = () => this.close();

        // buyButton_5_11_1111 (prefab fields)
        buyButton_5_11_1111.item = 184;

        // buyButton_5111_1_11 (prefab fields)
        buyButton_5111_1_11.item = 181;

        // sec_ml (components)
        const sec_mlSimpleButton = new SimpleButton(sec_ml);
        sec_mlSimpleButton.callback = () => this.interface.prompt.showFurniture(106);

        // buyButton_5111 (prefab fields)
        buyButton_5111.item = 373;

        // buyButton_8111 (prefab fields)
        buyButton_8111.item = 343;

        // buyButton_5_2111 (prefab fields)
        buyButton_5_2111.item = 146;

        // buyButton_5_2_1111 (prefab fields)
        buyButton_5_2_1111.item = 341;

        // page_left_1111 (components)
        const page_left_1111Button = new Button(page_left_1111);
        page_left_1111Button.spriteName = "page_left";
        page_left_1111Button.callback = () => this.prevPage();
        page_left_1111Button.activeFrame = false;

        // close_left_1_1111 (components)
        const close_left_1_1111Button = new Button(close_left_1_1111);
        close_left_1_1111Button.spriteName = "close_left";
        close_left_1_1111Button.callback = () => this.close();

        // page_right_1_1111 (components)
        const page_right_1_1111Button = new Button(page_right_1_1111);
        page_right_1_1111Button.spriteName = "page_right";
        page_right_1_1111Button.callback = () => this.nextPage();
        page_right_1_1111Button.activeFrame = false;

        // close_right_1_1111 (components)
        const close_right_1_1111Button = new Button(close_right_1_1111);
        close_right_1_1111Button.spriteName = "close_right";
        close_right_1_1111Button.callback = () => this.close();

        // buyButton_5_11_111 (prefab fields)
        buyButton_5_11_111.item = 376;

        // buyButton_5111_1 (prefab fields)
        buyButton_5111_1.item = 374;

        // buyButton_5111_1_1 (prefab fields)
        buyButton_5111_1_1.item = 375;

        // sec_ar (components)
        const sec_arSimpleButton = new SimpleButton(sec_ar);
        sec_arSimpleButton.callback = () => this.interface.prompt.showFurniture(694);

        // sec_pap (components)
        const sec_papSimpleButton = new SimpleButton(sec_pap);
        sec_papSimpleButton.callback = () => this.interface.prompt.showFurniture(356);

        // buyButton_511 (prefab fields)
        buyButton_511.item = 180;

        // buyButton_811 (prefab fields)
        buyButton_811.item = 150;

        // buyButton_5_111 (prefab fields)
        buyButton_5_111.item = 76;

        // buyButton_5_211 (prefab fields)
        buyButton_5_211.item = 77;

        // page_left_111 (components)
        const page_left_111Button = new Button(page_left_111);
        page_left_111Button.spriteName = "page_left";
        page_left_111Button.callback = () => this.prevPage();
        page_left_111Button.activeFrame = false;

        // close_left_1_111 (components)
        const close_left_1_111Button = new Button(close_left_1_111);
        close_left_1_111Button.spriteName = "close_left";
        close_left_1_111Button.callback = () => this.close();

        // page_right_1_111 (components)
        const page_right_1_111Button = new Button(page_right_1_111);
        page_right_1_111Button.spriteName = "page_right";
        page_right_1_111Button.callback = () => this.nextPage();
        page_right_1_111Button.activeFrame = false;

        // close_right_1_111 (components)
        const close_right_1_111Button = new Button(close_right_1_111);
        close_right_1_111Button.spriteName = "close_right";
        close_right_1_111Button.callback = () => this.close();

        // buyButton_5_2_111 (prefab fields)
        buyButton_5_2_111.item = 78;

        // buyButton_5_11_11 (prefab fields)
        buyButton_5_11_11.item = 183;

        // buyButton_5_11_1_11 (prefab fields)
        buyButton_5_11_1_11.item = 182;

        // sec_pb (components)
        const sec_pbSimpleButton = new SimpleButton(sec_pb);
        sec_pbSimpleButton.callback = () => this.interface.prompt.showFurniture(392);

        // sec_or (components)
        const sec_orSimpleButton = new SimpleButton(sec_or);
        sec_orSimpleButton.callback = () => this.interface.prompt.showFurniture(151);

        // sec_rr (components)
        const sec_rrSimpleButton = new SimpleButton(sec_rr);
        sec_rrSimpleButton.callback = () => this.interface.prompt.showFurniture(152);

        // sec_mr (components)
        const sec_mrSimpleButton = new SimpleButton(sec_mr);
        sec_mrSimpleButton.callback = () => this.interface.prompt.showFurniture(494);

        // buyButton_51 (prefab fields)
        buyButton_51.item = 412;

        // buyButton_81 (prefab fields)
        buyButton_81.item = 109;

        // buyButton_5_11 (prefab fields)
        buyButton_5_11.item = 415;

        // buyButton_5_21 (prefab fields)
        buyButton_5_21.item = 364;

        // page_left_11 (components)
        const page_left_11Button = new Button(page_left_11);
        page_left_11Button.spriteName = "page_left";
        page_left_11Button.callback = () => this.prevPage();
        page_left_11Button.activeFrame = false;

        // close_left_1_11 (components)
        const close_left_1_11Button = new Button(close_left_1_11);
        close_left_1_11Button.spriteName = "close_left";
        close_left_1_11Button.callback = () => this.close();

        // page_right_1_11 (components)
        const page_right_1_11Button = new Button(page_right_1_11);
        page_right_1_11Button.spriteName = "page_right";
        page_right_1_11Button.callback = () => this.nextPage();
        page_right_1_11Button.activeFrame = false;

        // close_right_1_11 (components)
        const close_right_1_11Button = new Button(close_right_1_11);
        close_right_1_11Button.spriteName = "close_right";
        close_right_1_11Button.callback = () => this.close();

        // buyButton_5_2_11 (prefab fields)
        buyButton_5_2_11.item = 159;

        // buyButton_5_11_1 (prefab fields)
        buyButton_5_11_1.item = 416;

        // buyButton_5_11_1_1 (prefab fields)
        buyButton_5_11_1_1.item = 417;

        // sec_sr (components)
        const sec_srSimpleButton = new SimpleButton(sec_sr);
        sec_srSimpleButton.callback = () => this.interface.prompt.showFurniture(351);

        // sec_hd (components)
        const sec_hdSimpleButton = new SimpleButton(sec_hd);
        sec_hdSimpleButton.callback = () => this.interface.prompt.showFurniture(596);

        // buyButton_5 (prefab fields)
        buyButton_5.item = 414;

        // buyButton_8 (prefab fields)
        buyButton_8.item = 252;

        // buyButton_5_1 (prefab fields)
        buyButton_5_1.item = 410;

        // buyButton_5_1_1 (prefab fields)
        buyButton_5_1_1.item = 350;

        // buyButton_5_2 (prefab fields)
        buyButton_5_2.item = 251;

        // page_left_1 (components)
        const page_left_1Button = new Button(page_left_1);
        page_left_1Button.spriteName = "page_left";
        page_left_1Button.callback = () => this.prevPage();
        page_left_1Button.activeFrame = false;

        // close_left_1_1 (components)
        const close_left_1_1Button = new Button(close_left_1_1);
        close_left_1_1Button.spriteName = "close_left";
        close_left_1_1Button.callback = () => this.close();

        // page_right_1_1 (components)
        const page_right_1_1Button = new Button(page_right_1_1);
        page_right_1_1Button.spriteName = "page_right";
        page_right_1_1Button.callback = () => this.nextPage();
        page_right_1_1Button.activeFrame = false;

        // close_right_1_1 (components)
        const close_right_1_1Button = new Button(close_right_1_1);
        close_right_1_1Button.spriteName = "close_right";
        close_right_1_1Button.callback = () => this.close();

        // buyButton_5_2_1 (prefab fields)
        buyButton_5_2_1.item = 352;

        // sec_ag (components)
        const sec_agSimpleButton = new SimpleButton(sec_ag);
        sec_agSimpleButton.callback = () => this.interface.prompt.showFurniture(514);

        // sec_gs (components)
        const sec_gsSimpleButton = new SimpleButton(sec_gs);
        sec_gsSimpleButton.callback = () => this.interface.prompt.showFurniture(413);

        // buyButton (prefab fields)
        buyButton.item = 411;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 418;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 355;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 353;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 354;

        // close_right_1 (components)
        const close_right_1Button = new Button(close_right_1);
        close_right_1Button.spriteName = "close_right";
        close_right_1Button.callback = () => this.close();

        // page_right_1 (components)
        const page_right_1Button = new Button(page_right_1);
        page_right_1Button.spriteName = "page_right";
        page_right_1Button.callback = () => this.nextPage();
        page_right_1Button.activeFrame = false;

        // close_left_1 (components)
        const close_left_1Button = new Button(close_left_1);
        close_left_1Button.spriteName = "close_left";
        close_left_1Button.callback = () => this.close();

        // page_left (components)
        const page_leftButton = new Button(page_left);
        page_leftButton.spriteName = "page_left";
        page_leftButton.callback = () => this.prevPage();
        page_leftButton.activeFrame = false;

        // buyButton_4_1 (prefab fields)
        buyButton_4_1.item = 164;

        // sec_torch (components)
        const sec_torchSimpleButton = new SimpleButton(sec_torch);
        sec_torchSimpleButton.callback = () => this.interface.prompt.showFurniture(342);

        // sec_eg (components)
        const sec_egSimpleButton = new SimpleButton(sec_eg);
        sec_egSimpleButton.callback = () => this.interface.prompt.showFurniture(515);

        // close_right (components)
        const close_rightButton = new Button(close_right);
        close_rightButton.spriteName = "close_right";
        close_rightButton.callback = () => this.close();

        // page_right (components)
        const page_rightButton = new Button(page_right);
        page_rightButton.spriteName = "page_right";
        page_rightButton.callback = () => this.nextPage();
        page_rightButton.activeFrame = false;

        this.sec_hb = sec_hb;
        this.sec_winb = sec_winb;
        this.sec_bam = sec_bam;
        this.sec_window = sec_window;
        this.sec_ml = sec_ml;
        this.sec_ar = sec_ar;
        this.sec_pap = sec_pap;
        this.sec_pb = sec_pb;
        this.sec_or = sec_or;
        this.sec_rr = sec_rr;
        this.sec_mr = sec_mr;
        this.sec_sr = sec_sr;
        this.sec_hd = sec_hd;
        this.sec_ag = sec_ag;
        this.sec_gs = sec_gs;
        this.sec_torch = sec_torch;
        this.sec_eg = sec_eg;
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
        this.interface.prompt.showFurniture(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
