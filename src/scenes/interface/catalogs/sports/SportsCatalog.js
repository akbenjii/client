import { Button, Interactive, SimpleButton } from '@components/components'

import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class SportsCatalog extends Book {

    constructor() {
        super("SportsCatalog");

        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("clothingcatalog-pack", "assets/media/interface/catalogs/clothing/clothingcatalog-pack.json");
        this.load.pack("jul22-sports", "assets/media/interface/catalogs/sports/jul22-sports.json");
        this.load.pack("jul22-pack", "assets/media/interface/catalogs/clothing/july22/jul22-pack.json");
        this.load.pack("sep05-pack", "assets/media/interface/catalogs/clothing/sep05-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page8
        const page8 = this.add.container(14, 19);
        page8.visible = false;

        // page8_fin
        const page8_fin = this.add.image(765, 432, "jul22-sport", "page8_fin");
        page8.add(page8_fin);

        // close_left_16
        const close_left_16 = this.add.image(486, 38, "clothingcatalog", "close_left");
        close_left_16.setOrigin(0, 0);
        page8.add(close_left_16);

        // page_left_16
        const page_left_16 = this.add.image(485, 588, "clothingcatalog", "page_left");
        page_left_16.setOrigin(0, 0);
        page8.add(page_left_16);

        // page7
        const page7 = this.add.container(14, 19);
        page7.visible = false;

        // page7_fin
        const page7_fin = this.add.image(765, 432, "jul22-sport", "page7_fin");
        page7.add(page7_fin);

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

        // small_buy0001_png_1_1
        const small_buy0001_png_1_1 = this.add.image(604, 465, "Sep2005", "small-buy0001.png");
        page7.add(small_buy0001_png_1_1);

        // coin_1_1
        const coin_1_1 = this.add.image(446, 462, "jul22", "coin");
        page7.add(coin_1_1);

        // coin_1_1_1
        const coin_1_1_1 = this.add.image(266, 704, "jul22", "coin");
        page7.add(coin_1_1_1);

        // small_buy0001_png_1_1_1
        const small_buy0001_png_1_1_1 = this.add.image(424, 707, "Sep2005", "small-buy0001.png");
        page7.add(small_buy0001_png_1_1_1);

        // bg_holder_2
        const bg_holder_2 = this.add.image(943, 400, "jul22", "bg_holder");
        bg_holder_2.angle = -15;
        page7.add(bg_holder_2);

        // bg_1_1
        const bg_1_1 = this.add.image(943, 400, "jul22-sport", "bg_3");
        bg_1_1.scaleX = 0.95;
        bg_1_1.scaleY = 0.95;
        bg_1_1.angle = -3;
        page7.add(bg_1_1);

        // shadow_bg_2
        const shadow_bg_2 = this.add.image(943, 407, "jul22", "shadow_bg");
        shadow_bg_2.angle = -15;
        page7.add(shadow_bg_2);

        // bg_holder_2_1
        const bg_holder_2_1 = this.add.image(1177, 443, "jul22", "bg_holder");
        bg_holder_2_1.angle = 16;
        page7.add(bg_holder_2_1);

        // bg_1_1_1
        const bg_1_1_1 = this.add.image(1177, 443, "jul22-sport", "bg_2");
        bg_1_1_1.scaleX = 0.95;
        bg_1_1_1.scaleY = 0.95;
        bg_1_1_1.angle = 9;
        page7.add(bg_1_1_1);

        // shadow_bg_2_1
        const shadow_bg_2_1 = this.add.image(1177, 450, "jul22", "shadow_bg");
        shadow_bg_2_1.angle = 16;
        page7.add(shadow_bg_2_1);

        // bg_holder_2_1_1
        const bg_holder_2_1_1 = this.add.image(933, 646, "jul22", "bg_holder");
        bg_holder_2_1_1.angle = 3;
        page7.add(bg_holder_2_1_1);

        // bg_1_1_1_1
        const bg_1_1_1_1 = this.add.image(933, 646, "jul22-sport", "bg_4");
        bg_1_1_1_1.scaleX = 0.95;
        bg_1_1_1_1.scaleY = 0.95;
        bg_1_1_1_1.angle = -1;
        page7.add(bg_1_1_1_1);

        // shadow_bg_2_1_1
        const shadow_bg_2_1_1 = this.add.image(933, 653, "jul22", "shadow_bg");
        shadow_bg_2_1_1.angle = 3;
        page7.add(shadow_bg_2_1_1);

        // big_coin
        const big_coin = this.add.image(1192, 651, "jul22-sport", "big_coin");
        page7.add(big_coin);

        // page6
        const page6 = this.add.container(14, 19);
        page6.visible = false;

        // page6_fin
        const page6_fin = this.add.image(765, 432, "jul22-sport", "page6_fin");
        page6.add(page6_fin);

        // coin_1
        const coin_1 = this.add.image(1183, 612, "jul22", "coin");
        page6.add(coin_1);

        // small_buy0001_png_1
        const small_buy0001_png_1 = this.add.image(1229, 674, "Sep2005", "small-buy0001.png");
        page6.add(small_buy0001_png_1);

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

        // sec-bpom
        const sec_bpom = this.add.ellipse(565, 260, 128, 128);
        sec_bpom.scaleX = 0.3423781066406252;
        sec_bpom.scaleY = 0.3011570029001281;
        sec_bpom.isFilled = true;
        sec_bpom.fillAlpha = 0;
        page6.add(sec_bpom);

        // sec-rpom
        const sec_rpom = this.add.ellipse(290, 214, 128, 128);
        sec_rpom.scaleX = 0.3423781066406252;
        sec_rpom.scaleY = 0.3011570029001281;
        sec_rpom.isFilled = true;
        sec_rpom.fillAlpha = 0;
        page6.add(sec_rpom);

        // sec-gpom
        const sec_gpom = this.add.ellipse(688, 88, 128, 128);
        sec_gpom.scaleX = 0.3423781066406252;
        sec_gpom.scaleY = 0.3011570029001281;
        sec_gpom.isFilled = true;
        sec_gpom.fillAlpha = 0;
        page6.add(sec_gpom);

        // sec-opom
        const sec_opom = this.add.ellipse(327, 588, 128, 128);
        sec_opom.scaleX = 0.3423781066406252;
        sec_opom.scaleY = 0.3011570029001281;
        sec_opom.isFilled = true;
        sec_opom.fillAlpha = 0;
        page6.add(sec_opom);

        // sec-ypom
        const sec_ypom = this.add.ellipse(686, 625, 128, 128);
        sec_ypom.scaleX = 0.3423781066406252;
        sec_ypom.scaleY = 0.3011570029001281;
        sec_ypom.isFilled = true;
        sec_ypom.fillAlpha = 0;
        page6.add(sec_ypom);

        // page5
        const page5 = this.add.container(16, 19);
        page5.visible = false;

        // page5_done
        const page5_done = this.add.image(765, 432, "jul22", "page5_done");
        page5.add(page5_done);

        // page5_fin
        const page5_fin = this.add.image(765, 432, "jul22-sport", "page5_fin");
        page5.add(page5_fin);

        // coin_3_1_1
        const coin_3_1_1 = this.add.image(525, 330, "jul22-sport", "coin");
        page5.add(coin_3_1_1);

        // coin_2_1_1_1_2_1
        const coin_2_1_1_1_2_1 = this.add.image(839, 705, "jul22-sport", "coin");
        page5.add(coin_2_1_1_1_2_1);

        // coin_2_1_2_1_1
        const coin_2_1_2_1_1 = this.add.image(1044, 474, "jul22-sport", "coin");
        page5.add(coin_2_1_2_1_1);

        // coin_2_2_1_1
        const coin_2_2_1_1 = this.add.image(845, 243, "jul22-sport", "coin");
        page5.add(coin_2_2_1_1);

        // coin_2_1_1_1_1_1_1_1
        const coin_2_1_1_1_1_1_1_1 = this.add.image(258, 690, "jul22-sport", "coin");
        page5.add(coin_2_1_1_1_1_1_1_1);

        // small_buy0001_png_1_2_3_1_1_2_1_1_1_1
        const small_buy0001_png_1_2_3_1_1_2_1_1_1_1 = this.add.image(996, 706, "Sep2005", "small-buy0001.png");
        page5.add(small_buy0001_png_1_2_3_1_1_2_1_1_1_1);

        // small_buy0001_png_1_2_3_1_1_1_1_1_1
        const small_buy0001_png_1_2_3_1_1_1_1_1_1 = this.add.image(1209, 474, "Sep2005", "small-buy0001.png");
        page5.add(small_buy0001_png_1_2_3_1_1_1_1_1_1);

        // small_buy0001_png_1_2_3_1_1_3_1_1
        const small_buy0001_png_1_2_3_1_1_3_1_1 = this.add.image(1009, 245, "Sep2005", "small-buy0001.png");
        page5.add(small_buy0001_png_1_2_3_1_1_3_1_1);

        // small_buy0001_png_1_2_3_1_2_1_1
        const small_buy0001_png_1_2_3_1_2_1_1 = this.add.image(412, 689, "Sep2005", "small-buy0001.png");
        page5.add(small_buy0001_png_1_2_3_1_2_1_1);

        // small_buy0001_png_1_2_3_2_1_1
        const small_buy0001_png_1_2_3_2_1_1 = this.add.image(677, 329, "Sep2005", "small-buy0001.png");
        page5.add(small_buy0001_png_1_2_3_2_1_1);

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

        // page4
        const page4 = this.add.container(14, 19);
        page4.visible = false;

        // page4_fin
        const page4_fin = this.add.image(765, 432, "jul22-sport", "page4_fin");
        page4.add(page4_fin);

        // small_buy0001_png_1_2_3_2_1
        const small_buy0001_png_1_2_3_2_1 = this.add.image(568, 215, "Sep2005", "small-buy0001.png");
        page4.add(small_buy0001_png_1_2_3_2_1);

        // small_buy0001_png_1_2_3_1_2_1
        const small_buy0001_png_1_2_3_1_2_1 = this.add.image(407, 673, "Sep2005", "small-buy0001.png");
        page4.add(small_buy0001_png_1_2_3_1_2_1);

        // small_buy0001_png_1_2_3_1_1_3_1
        const small_buy0001_png_1_2_3_1_1_3_1 = this.add.image(641, 488, "Sep2005", "small-buy0001.png");
        page4.add(small_buy0001_png_1_2_3_1_1_3_1);

        // small_buy0001_png_1_2_3_1_1_1_1_1
        const small_buy0001_png_1_2_3_1_1_1_1_1 = this.add.image(1237, 315, "Sep2005", "small-buy0001.png");
        page4.add(small_buy0001_png_1_2_3_1_1_1_1_1);

        // small_buy0001_png_1_2_3_1_1_2_1_1_1
        const small_buy0001_png_1_2_3_1_1_2_1_1_1 = this.add.image(969, 674, "Sep2005", "small-buy0001.png");
        page4.add(small_buy0001_png_1_2_3_1_1_2_1_1_1);

        // coin_2_1_1_1_1_1_1
        const coin_2_1_1_1_1_1_1 = this.add.image(259, 671, "jul22-sport", "coin");
        page4.add(coin_2_1_1_1_1_1_1);

        // coin_2_2_1
        const coin_2_2_1 = this.add.image(492, 488, "jul22-sport", "coin");
        page4.add(coin_2_2_1);

        // coin_2_1_2_1
        const coin_2_1_2_1 = this.add.image(1087, 312, "jul22-sport", "coin");
        page4.add(coin_2_1_2_1);

        // coin_2_1_1_1_2
        const coin_2_1_1_1_2 = this.add.image(816, 669, "jul22-sport", "coin");
        page4.add(coin_2_1_1_1_2);

        // coin_3_1
        const coin_3_1 = this.add.image(408, 217, "jul22-sport", "coin");
        page4.add(coin_3_1);

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

        // page3
        const page3 = this.add.container(14, 19);
        page3.visible = false;

        // page3_fin
        const page3_fin = this.add.image(765, 432, "jul22-sport", "page3_fin");
        page3.add(page3_fin);

        // coin_3
        const coin_3 = this.add.image(276, 237, "jul22-sport", "coin");
        page3.add(coin_3);

        // coin_2_1_1_1
        const coin_2_1_1_1 = this.add.image(1205, 461, "jul22-sport", "coin");
        page3.add(coin_2_1_1_1);

        // coin_2_1_2
        const coin_2_1_2 = this.add.image(944, 265, "jul22-sport", "coin");
        page3.add(coin_2_1_2);

        // coin_2_2
        const coin_2_2 = this.add.image(474, 469, "jul22-sport", "coin");
        page3.add(coin_2_2);

        // coin_2_1_1_1_1
        const coin_2_1_1_1_1 = this.add.image(1024, 623, "jul22-sport", "coin");
        page3.add(coin_2_1_1_1_1);

        // coin_2_1_1_1_1_1
        const coin_2_1_1_1_1_1 = this.add.image(266, 698, "jul22-sport", "coin");
        page3.add(coin_2_1_1_1_1_1);

        // small_buy0001_png_1_2_3_1_1_2_1_1
        const small_buy0001_png_1_2_3_1_1_2_1_1 = this.add.image(929, 686, "Sep2005", "small-buy0001.png");
        page3.add(small_buy0001_png_1_2_3_1_1_2_1_1);

        // small_buy0001_png_1_2_3_1_1_2_2
        const small_buy0001_png_1_2_3_1_1_2_2 = this.add.image(1129, 464, "Sep2005", "small-buy0001.png");
        page3.add(small_buy0001_png_1_2_3_1_1_2_2);

        // small_buy0001_png_1_2_3_1_1_1_1
        const small_buy0001_png_1_2_3_1_1_1_1 = this.add.image(859, 263, "Sep2005", "small-buy0001.png");
        page3.add(small_buy0001_png_1_2_3_1_1_1_1);

        // small_buy0001_png_1_2_3_1_1_3
        const small_buy0001_png_1_2_3_1_1_3 = this.add.image(628, 467, "Sep2005", "small-buy0001.png");
        page3.add(small_buy0001_png_1_2_3_1_1_3);

        // small_buy0001_png_1_2_3_1_2
        const small_buy0001_png_1_2_3_1_2 = this.add.image(416, 696, "Sep2005", "small-buy0001.png");
        page3.add(small_buy0001_png_1_2_3_1_2);

        // small_buy0001_png_1_2_3_2
        const small_buy0001_png_1_2_3_2 = this.add.image(438, 234, "Sep2005", "small-buy0001.png");
        page3.add(small_buy0001_png_1_2_3_2);

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

        // page2
        const page2 = this.add.container(14, 19);
        page2.visible = false;

        // page2_fin
        const page2_fin = this.add.image(765, 432, "jul22-sport", "page2_fin");
        page2.add(page2_fin);

        // small_buy0001_png_1_2_3
        const small_buy0001_png_1_2_3 = this.add.image(577, 328, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_3);

        // coin
        const coin = this.add.image(536, 260, "jul22-sport", "coin");
        page2.add(coin);

        // coin_2
        const coin_2 = this.add.image(326, 581, "jul22-sport", "coin");
        page2.add(coin_2);

        // coin_2_1
        const coin_2_1 = this.add.image(1012, 189, "jul22-sport", "coin");
        page2.add(coin_2_1);

        // coin_2_1_1
        const coin_2_1_1 = this.add.image(1012, 565, "jul22-sport", "coin");
        page2.add(coin_2_1_1);

        // small_buy0001_png_1_2_3_1
        const small_buy0001_png_1_2_3_1 = this.add.image(363, 654, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_3_1);

        // small_buy0001_png_1_2_3_1_1
        const small_buy0001_png_1_2_3_1_1 = this.add.image(905, 187, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_3_1_1);

        // small_buy0001_png_1_2_3_1_1_1
        const small_buy0001_png_1_2_3_1_1_1 = this.add.image(1202, 187, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_3_1_1_1);

        // small_buy0001_png_1_2_3_1_1_2
        const small_buy0001_png_1_2_3_1_1_2 = this.add.image(898, 715, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_3_1_1_2);

        // small_buy0001_png_1_2_3_1_1_2_1
        const small_buy0001_png_1_2_3_1_1_2_1 = this.add.image(1202, 715, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_3_1_1_2_1);

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
        const page1 = this.add.container(13, 19);
        page1.visible = false;

        // page1_fin
        const page1_fin = this.add.image(765, 432, "jul22-sport", "page1_fin");
        page1.add(page1_fin);

        // close_right_4_1
        const close_right_4_1 = this.add.image(918, 39, "clothingcatalog", "close_right");
        close_right_4_1.setOrigin(0, 0);
        page1.add(close_right_4_1);

        // page_right_4_1
        const page_right_4_1 = this.add.image(916, 588, "clothingcatalog", "page_right");
        page_right_4_1.setOrigin(0, 0);
        page1.add(page_right_4_1);

        // buttons
        const buttons = this.add.container(204, 59);
        buttons.visible = false;

        // coins
        const coins = this.add.text(1134, 796, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8];

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

        // small_buy0001_png_1_1 (components)
        const small_buy0001_png_1_1Button = new Button(small_buy0001_png_1_1);
        small_buy0001_png_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_1Button.callback = () => this.interface.prompt.showItem(712);

        // small_buy0001_png_1_1_1 (components)
        const small_buy0001_png_1_1_1Button = new Button(small_buy0001_png_1_1_1);
        small_buy0001_png_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_1_1Button.callback = () => this.interface.prompt.showItem(711);

        // bg_holder_2 (components)
        const bg_holder_2Button = new Button(bg_holder_2);
        bg_holder_2Button.spriteName = "bg_holder";
        bg_holder_2Button.callback = () => this.interface.prompt.showItem(920);
        bg_holder_2Button.activeFrame = false;

        // bg_holder_2_1 (components)
        const bg_holder_2_1Button = new Button(bg_holder_2_1);
        bg_holder_2_1Button.spriteName = "bg_holder";
        bg_holder_2_1Button.callback = () => this.interface.prompt.showItem(993);
        bg_holder_2_1Button.activeFrame = false;

        // bg_holder_2_1_1 (components)
        const bg_holder_2_1_1Button = new Button(bg_holder_2_1_1);
        bg_holder_2_1_1Button.spriteName = "bg_holder";
        bg_holder_2_1_1Button.callback = () => this.interface.prompt.showItem(918);
        bg_holder_2_1_1Button.activeFrame = false;

        // small_buy0001_png_1 (components)
        const small_buy0001_png_1Button = new Button(small_buy0001_png_1);
        small_buy0001_png_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1Button.callback = () => this.interface.prompt.showItem(321);

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

        // sec_bpom (components)
        const sec_bpomSimpleButton = new SimpleButton(sec_bpom);
        sec_bpomSimpleButton.callback = () => this.interface.prompt.showItem(333);

        // sec_rpom (components)
        const sec_rpomSimpleButton = new SimpleButton(sec_rpom);
        sec_rpomSimpleButton.callback = () => this.interface.prompt.showItem(330);

        // sec_gpom (components)
        const sec_gpomSimpleButton = new SimpleButton(sec_gpom);
        sec_gpomSimpleButton.callback = () => this.interface.prompt.showItem(5138);

        // sec_opom (components)
        const sec_opomSimpleButton = new SimpleButton(sec_opom);
        sec_opomSimpleButton.callback = () => this.interface.prompt.showItem(329);

        // sec_ypom (components)
        const sec_ypomSimpleButton = new SimpleButton(sec_ypom);
        sec_ypomSimpleButton.callback = () => this.interface.prompt.showItem(5139);

        // small_buy0001_png_1_2_3_1_1_2_1_1_1_1 (components)
        const small_buy0001_png_1_2_3_1_1_2_1_1_1_1Button = new Button(small_buy0001_png_1_2_3_1_1_2_1_1_1_1);
        small_buy0001_png_1_2_3_1_1_2_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_2_1_1_1_1Button.callback = () => this.interface.prompt.showItem(717);

        // small_buy0001_png_1_2_3_1_1_1_1_1_1 (components)
        const small_buy0001_png_1_2_3_1_1_1_1_1_1Button = new Button(small_buy0001_png_1_2_3_1_1_1_1_1_1);
        small_buy0001_png_1_2_3_1_1_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(436);

        // small_buy0001_png_1_2_3_1_1_3_1_1 (components)
        const small_buy0001_png_1_2_3_1_1_3_1_1Button = new Button(small_buy0001_png_1_2_3_1_1_3_1_1);
        small_buy0001_png_1_2_3_1_1_3_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_3_1_1Button.callback = () => this.interface.prompt.showItem(435);

        // small_buy0001_png_1_2_3_1_2_1_1 (components)
        const small_buy0001_png_1_2_3_1_2_1_1Button = new Button(small_buy0001_png_1_2_3_1_2_1_1);
        small_buy0001_png_1_2_3_1_2_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_2_1_1Button.callback = () => this.interface.prompt.showItem(791);

        // small_buy0001_png_1_2_3_2_1_1 (components)
        const small_buy0001_png_1_2_3_2_1_1Button = new Button(small_buy0001_png_1_2_3_2_1_1);
        small_buy0001_png_1_2_3_2_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_2_1_1Button.callback = () => this.interface.prompt.showItem(792);

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

        // small_buy0001_png_1_2_3_2_1 (components)
        const small_buy0001_png_1_2_3_2_1Button = new Button(small_buy0001_png_1_2_3_2_1);
        small_buy0001_png_1_2_3_2_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_2_1Button.callback = () => this.interface.prompt.showItem(349);

        // small_buy0001_png_1_2_3_1_2_1 (components)
        const small_buy0001_png_1_2_3_1_2_1Button = new Button(small_buy0001_png_1_2_3_1_2_1);
        small_buy0001_png_1_2_3_1_2_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_2_1Button.callback = () => this.interface.prompt.showItem(255);

        // small_buy0001_png_1_2_3_1_1_3_1 (components)
        const small_buy0001_png_1_2_3_1_1_3_1Button = new Button(small_buy0001_png_1_2_3_1_1_3_1);
        small_buy0001_png_1_2_3_1_1_3_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_3_1Button.callback = () => this.interface.prompt.showItem(254);

        // small_buy0001_png_1_2_3_1_1_1_1_1 (components)
        const small_buy0001_png_1_2_3_1_1_1_1_1Button = new Button(small_buy0001_png_1_2_3_1_1_1_1_1);
        small_buy0001_png_1_2_3_1_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_1_1_1Button.callback = () => this.interface.prompt.showItem(836);

        // small_buy0001_png_1_2_3_1_1_2_1_1_1 (components)
        const small_buy0001_png_1_2_3_1_1_2_1_1_1Button = new Button(small_buy0001_png_1_2_3_1_1_2_1_1_1);
        small_buy0001_png_1_2_3_1_1_2_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_2_1_1_1Button.callback = () => this.interface.prompt.showItem(837);

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

        // small_buy0001_png_1_2_3_1_1_2_1_1 (components)
        const small_buy0001_png_1_2_3_1_1_2_1_1Button = new Button(small_buy0001_png_1_2_3_1_1_2_1_1);
        small_buy0001_png_1_2_3_1_1_2_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_2_1_1Button.callback = () => this.interface.prompt.showItem(385);

        // small_buy0001_png_1_2_3_1_1_2_2 (components)
        const small_buy0001_png_1_2_3_1_1_2_2Button = new Button(small_buy0001_png_1_2_3_1_1_2_2);
        small_buy0001_png_1_2_3_1_1_2_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_2_2Button.callback = () => this.interface.prompt.showItem(778);

        // small_buy0001_png_1_2_3_1_1_1_1 (components)
        const small_buy0001_png_1_2_3_1_1_1_1Button = new Button(small_buy0001_png_1_2_3_1_1_1_1);
        small_buy0001_png_1_2_3_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_1_1Button.callback = () => this.interface.prompt.showItem(775);

        // small_buy0001_png_1_2_3_1_1_3 (components)
        const small_buy0001_png_1_2_3_1_1_3Button = new Button(small_buy0001_png_1_2_3_1_1_3);
        small_buy0001_png_1_2_3_1_1_3Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_3Button.callback = () => this.interface.prompt.showItem(726);

        // small_buy0001_png_1_2_3_1_2 (components)
        const small_buy0001_png_1_2_3_1_2Button = new Button(small_buy0001_png_1_2_3_1_2);
        small_buy0001_png_1_2_3_1_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_2Button.callback = () => this.interface.prompt.showItem(727);

        // small_buy0001_png_1_2_3_2 (components)
        const small_buy0001_png_1_2_3_2Button = new Button(small_buy0001_png_1_2_3_2);
        small_buy0001_png_1_2_3_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_2Button.callback = () => this.interface.prompt.showItem(719);

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

        // small_buy0001_png_1_2_3 (components)
        const small_buy0001_png_1_2_3Button = new Button(small_buy0001_png_1_2_3);
        small_buy0001_png_1_2_3Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3Button.callback = () => this.interface.prompt.showItem(4005);

        // small_buy0001_png_1_2_3_1 (components)
        const small_buy0001_png_1_2_3_1Button = new Button(small_buy0001_png_1_2_3_1);
        small_buy0001_png_1_2_3_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1Button.callback = () => this.interface.prompt.showItem(4006);

        // small_buy0001_png_1_2_3_1_1 (components)
        const small_buy0001_png_1_2_3_1_1Button = new Button(small_buy0001_png_1_2_3_1_1);
        small_buy0001_png_1_2_3_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1Button.callback = () => this.interface.prompt.showItem(721);

        // small_buy0001_png_1_2_3_1_1_1 (components)
        const small_buy0001_png_1_2_3_1_1_1Button = new Button(small_buy0001_png_1_2_3_1_1_1);
        small_buy0001_png_1_2_3_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_1Button.callback = () => this.interface.prompt.showItem(720);

        // small_buy0001_png_1_2_3_1_1_2 (components)
        const small_buy0001_png_1_2_3_1_1_2Button = new Button(small_buy0001_png_1_2_3_1_1_2);
        small_buy0001_png_1_2_3_1_1_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_2Button.callback = () => this.interface.prompt.showItem(462);

        // small_buy0001_png_1_2_3_1_1_2_1 (components)
        const small_buy0001_png_1_2_3_1_1_2_1Button = new Button(small_buy0001_png_1_2_3_1_1_2_1);
        small_buy0001_png_1_2_3_1_1_2_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_3_1_1_2_1Button.callback = () => this.interface.prompt.showItem(463);

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

        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

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

// You can write more code here
