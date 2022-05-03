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
        this.blue0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.green0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.pink0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.black0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.red0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.orange0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.yellow0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.purple0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.brown0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.darkgreen0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.lightblue0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.darkpink0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_sombrero;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_roman;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_beekeeper;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_trend;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_disco;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_sstriker;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_sk;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_funster;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_pballcap;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_tuft;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_bflutt;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_flouncy;
        /** @type {Phaser.GameObjects.Image} */
        this.buy2_flutterby;
        /** @type {Phaser.GameObjects.Image} */
        this.buy2_pinkear;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_bletterman;
        /** @type {Phaser.GameObjects.Image} */
        this.buy2_blackhoodie;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_daisy;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_bparka;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_greenrug;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_pband;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_lighthouse;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_poncho;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_ballerina;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_ad;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_ljacket;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_qvest;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_rainjacket;
        /** @type {Phaser.GameObjects.Image} */
        this.buy2_yellowhoodie;
        /** @type {Phaser.GameObjects.Image} */
        this.buy2_pinkhoodie;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_3_1_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy2_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_3_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_1_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_4_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_1_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_2_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_3_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_2_1_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_1_1_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_3_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_2_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_4;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_1_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_3;
        /** @type {Phaser.GameObjects.Image} */
        this.buy2_1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.vikinghelmet_rec;
        /** @type {Phaser.GameObjects.Image} */
        this.buy2;
        /** @type {Phaser.GameObjects.Image} */
        this.buy;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_1;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_2;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_2_3;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.sec_wtshirt;
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
        this.load.pack("may22-clothing", "assets/media/interface/catalogs/clothing/may22-clothing.json");
        this.load.pack("clothingcatalog-pack", "assets/media/interface/catalogs/clothing/clothingcatalog-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page9
        const page9 = this.add.container(0, 0);
        page9.visible = false;

        // page_page0016
        const page_page0016 = this.add.image(-4, 2, "clothingcatalog", "page/page0016");
        page_page0016.setOrigin(0, 0);
        page9.add(page_page0016);

        // close_left_page6_1_1
        const close_left_page6_1_1 = this.add.image(487, 41, "clothingcatalog", "close_left");
        close_left_page6_1_1.setOrigin(0, 0);
        page9.add(close_left_page6_1_1);

        // page_left_page6_1_1
        const page_left_page6_1_1 = this.add.image(486, 592, "clothingcatalog", "page_left");
        page_left_page6_1_1.setOrigin(0, 0);
        page9.add(page_left_page6_1_1);

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // page_page0002
        const page_page0002 = this.add.image(0, -7, "clothingcatalog", "page/page0002");
        page_page0002.setOrigin(0, 0);
        page8.add(page_page0002);

        // blue0001_png
        const blue0001_png = this.add.image(919, 322, "Sep2005", "blue0001.png");
        blue0001_png.scaleX = 0.544399396429802;
        blue0001_png.scaleY = 0.544399396429802;
        page8.add(blue0001_png);

        // green0001_png
        const green0001_png = this.add.image(1034, 323, "Sep2005", "green0001.png");
        green0001_png.scaleX = 0.544399396429802;
        green0001_png.scaleY = 0.544399396429802;
        page8.add(green0001_png);

        // pink0001_png
        const pink0001_png = this.add.image(1148, 323, "Sep2005", "pink0001.png");
        pink0001_png.scaleX = 0.544399396429802;
        pink0001_png.scaleY = 0.544399396429802;
        page8.add(pink0001_png);

        // black0001_png
        const black0001_png = this.add.image(919, 412, "Sep2005", "black0001.png");
        black0001_png.scaleX = 0.544399396429802;
        black0001_png.scaleY = 0.544399396429802;
        page8.add(black0001_png);

        // red0001_png
        const red0001_png = this.add.image(1034, 412, "Sep2005", "red0001.png");
        red0001_png.scaleX = 0.544399396429802;
        red0001_png.scaleY = 0.544399396429802;
        page8.add(red0001_png);

        // orange0001_png
        const orange0001_png = this.add.image(1148, 412, "Sep2005", "orange0001.png");
        orange0001_png.scaleX = 0.544399396429802;
        orange0001_png.scaleY = 0.544399396429802;
        page8.add(orange0001_png);

        // yellow0001_png
        const yellow0001_png = this.add.image(919, 507, "Sep2005", "yellow0001.png");
        yellow0001_png.scaleX = 0.544399396429802;
        yellow0001_png.scaleY = 0.544399396429802;
        page8.add(yellow0001_png);

        // purple0001_png
        const purple0001_png = this.add.image(1034, 507, "Sep2005", "purple0001.png");
        purple0001_png.scaleX = 0.544399396429802;
        purple0001_png.scaleY = 0.544399396429802;
        page8.add(purple0001_png);

        // brown0001_png
        const brown0001_png = this.add.image(1148, 507, "Sep2005", "brown0001.png");
        brown0001_png.scaleX = 0.544399396429802;
        brown0001_png.scaleY = 0.544399396429802;
        page8.add(brown0001_png);

        // darkgreen0001_png
        const darkgreen0001_png = this.add.image(1034, 598, "Sep2005", "darkgreen0001.png");
        darkgreen0001_png.scaleX = 0.544399396429802;
        darkgreen0001_png.scaleY = 0.544399396429802;
        page8.add(darkgreen0001_png);

        // lightblue0001_png
        const lightblue0001_png = this.add.image(1148, 598, "Sep2005", "lightblue0001.png");
        lightblue0001_png.scaleX = 0.544399396429802;
        lightblue0001_png.scaleY = 0.544399396429802;
        page8.add(lightblue0001_png);

        // darkpink0001_png
        const darkpink0001_png = this.add.image(919, 598, "Sep2005", "darkpink0001.png");
        darkpink0001_png.scaleX = 0.544399396429802;
        darkpink0001_png.scaleY = 0.544399396429802;
        page8.add(darkpink0001_png);

        // close_left_page6_1
        const close_left_page6_1 = this.add.image(193, 36, "clothingcatalog", "close_left");
        close_left_page6_1.setOrigin(0, 0);
        page8.add(close_left_page6_1);

        // page_left_page6_1
        const page_left_page6_1 = this.add.image(190, 580, "clothingcatalog", "page_left");
        page_left_page6_1.setOrigin(0, 0);
        page8.add(page_left_page6_1);

        // page_right_page6_1
        const page_right_page6_1 = this.add.image(1201, 582, "clothingcatalog", "page_right");
        page_right_page6_1.setOrigin(0, 0);
        page8.add(page_right_page6_1);

        // close_right_page6_1
        const close_right_page6_1 = this.add.image(1202, 36, "clothingcatalog", "close_right");
        close_right_page6_1.setOrigin(0, 0);
        page8.add(close_right_page6_1);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // page6_1
        const page6_1 = this.add.image(768, 431, "may22cat", "page6");
        page6.add(page6_1);

        // buy_sombrero
        const buy_sombrero = this.add.image(645, 762, "may22cat", "buy");
        page6.add(buy_sombrero);

        // buy_roman
        const buy_roman = this.add.image(287, 762, "may22cat", "buy");
        page6.add(buy_roman);

        // text_roman
        const text_roman = this.add.text(241, 743, "", {});
        text_roman.text = "800";
        text_roman.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_roman);

        // close_right_page6
        const close_right_page6 = this.add.image(1202, 36, "clothingcatalog", "close_right");
        close_right_page6.setOrigin(0, 0);
        page6.add(close_right_page6);

        // page_right_page6
        const page_right_page6 = this.add.image(1201, 582, "clothingcatalog", "page_right");
        page_right_page6.setOrigin(0, 0);
        page6.add(page_right_page6);

        // page_left_page6
        const page_left_page6 = this.add.image(190, 580, "clothingcatalog", "page_left");
        page_left_page6.setOrigin(0, 0);
        page6.add(page_left_page6);

        // close_left_page6
        const close_left_page6 = this.add.image(193, 36, "clothingcatalog", "close_left");
        close_left_page6.setOrigin(0, 0);
        page6.add(close_left_page6);

        // buy_beekeeper
        const buy_beekeeper = this.add.image(287, 381, "may22cat", "buy");
        page6.add(buy_beekeeper);

        // text_beekeeper
        const text_beekeeper = this.add.text(246, 364, "", {});
        text_beekeeper.text = "750";
        text_beekeeper.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_beekeeper);

        // buy_trend
        const buy_trend = this.add.image(463, 381, "may22cat", "buy");
        page6.add(buy_trend);

        // text_trend
        const text_trend = this.add.text(426, 364, "", {});
        text_trend.text = "450";
        text_trend.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_trend);

        // buy_disco
        const buy_disco = this.add.image(645, 381, "may22cat", "buy");
        page6.add(buy_disco);

        // text_disco
        const text_disco = this.add.text(606, 364, "", {});
        text_disco.text = "600";
        text_disco.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_disco);

        // buy_sstriker
        const buy_sstriker = this.add.image(288, 576, "may22cat", "buy");
        page6.add(buy_sstriker);

        // text_sstriker
        const text_sstriker = this.add.text(246, 559, "", {});
        text_sstriker.text = "550";
        text_sstriker.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_sstriker);

        // buy_sk
        const buy_sk = this.add.image(463, 576, "may22cat", "buy");
        page6.add(buy_sk);

        // text_sk
        const text_sk = this.add.text(426, 559, "", {});
        text_sk.text = "550";
        text_sk.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_sk);

        // buy_funster
        const buy_funster = this.add.image(645, 576, "may22cat", "buy");
        page6.add(buy_funster);

        // text_funster
        const text_funster = this.add.text(606, 559, "", {});
        text_funster.text = "500";
        text_funster.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_funster);

        // text_sombrero
        const text_sombrero = this.add.text(606, 743, "", {});
        text_sombrero.text = "500";
        text_sombrero.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_sombrero);

        // buy_pballcap
        const buy_pballcap = this.add.image(463, 762, "may22cat", "buy");
        page6.add(buy_pballcap);

        // text_pballcap
        const text_pballcap = this.add.text(426, 743, "", {});
        text_pballcap.text = "200";
        text_pballcap.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_pballcap);

        // buy_tuft
        const buy_tuft = this.add.image(645, 186, "may22cat", "buy");
        page6.add(buy_tuft);

        // text_tuft
        const text_tuft = this.add.text(606, 169, "", {});
        text_tuft.text = "250";
        text_tuft.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_tuft);

        // buy_bflutt
        const buy_bflutt = this.add.image(463, 186, "may22cat", "buy");
        page6.add(buy_bflutt);

        // text_bflutt
        const text_bflutt = this.add.text(426, 169, "", {});
        text_bflutt.text = "350";
        text_bflutt.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_bflutt);

        // buy_flouncy
        const buy_flouncy = this.add.image(287, 186, "may22cat", "buy");
        page6.add(buy_flouncy);

        // text_flouncy
        const text_flouncy = this.add.text(246, 169, "", {});
        text_flouncy.text = "600";
        text_flouncy.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page6.add(text_flouncy);

        // buy2_flutterby
        const buy2_flutterby = this.add.image(1110, 381, "clothingcatalog", "buy2");
        buy2_flutterby.scaleX = 0.7060432626289486;
        buy2_flutterby.scaleY = 0.7060432626289486;
        buy2_flutterby.angle = -135;
        buy2_flutterby.setOrigin(0, 0);
        page6.add(buy2_flutterby);

        // buy2_pinkear
        const buy2_pinkear = this.add.image(887, 293, "clothingcatalog", "buy2");
        buy2_pinkear.scaleX = 0.7060432626289486;
        buy2_pinkear.scaleY = 0.7060432626289486;
        buy2_pinkear.angle = -52.99999999999994;
        buy2_pinkear.setOrigin(0, 0);
        page6.add(buy2_pinkear);

        // sec-blackcape
        const sec_blackcape = this.add.ellipse(844, 422, 128, 128);
        sec_blackcape.scaleX = 0.2175016673872514;
        sec_blackcape.scaleY = 0.21393876922214905;
        sec_blackcape.isFilled = true;
        sec_blackcape.fillAlpha = 0;
        page6.add(sec_blackcape);

        // sec-pinkdress
        const sec_pinkdress = this.add.ellipse(1205, 356, 128, 128);
        sec_pinkdress.scaleX = 0.2175016673872514;
        sec_pinkdress.scaleY = 0.21393876922214905;
        sec_pinkdress.isFilled = true;
        sec_pinkdress.fillAlpha = 0;
        page6.add(sec_pinkdress);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // page5_1
        const page5_1 = this.add.image(768, 431, "may22cat", "page5");
        page5.add(page5_1);

        // buy_bletterman
        const buy_bletterman = this.add.image(1215, 755, "may22cat", "buy");
        page5.add(buy_bletterman);

        // close_right_page5
        const close_right_page5 = this.add.image(1202, 36, "clothingcatalog", "close_right");
        close_right_page5.setOrigin(0, 0);
        page5.add(close_right_page5);

        // page_right_page5
        const page_right_page5 = this.add.image(1201, 582, "clothingcatalog", "page_right");
        page_right_page5.setOrigin(0, 0);
        page5.add(page_right_page5);

        // page_left_page5
        const page_left_page5 = this.add.image(190, 580, "clothingcatalog", "page_left");
        page_left_page5.setOrigin(0, 0);
        page5.add(page_left_page5);

        // close_left_page5
        const close_left_page5 = this.add.image(193, 35, "clothingcatalog", "close_left");
        close_left_page5.setOrigin(0, 0);
        page5.add(close_left_page5);

        // buy2_blackhoodie
        const buy2_blackhoodie = this.add.image(588, 548, "clothingcatalog", "buy2");
        buy2_blackhoodie.scaleX = 0.8414916020698116;
        buy2_blackhoodie.scaleY = 0.8414916020698116;
        buy2_blackhoodie.angle = 30;
        buy2_blackhoodie.setOrigin(0, 0);
        page5.add(buy2_blackhoodie);

        // buy_daisy
        const buy_daisy = this.add.image(870, 380, "may22cat", "buy");
        page5.add(buy_daisy);

        // text_daisy
        const text_daisy = this.add.text(829, 363, "", {});
        text_daisy.text = "200";
        text_daisy.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_daisy);

        // buy_bparka
        const buy_bparka = this.add.image(1046, 380, "may22cat", "buy");
        page5.add(buy_bparka);

        // text_bparka
        const text_bparka = this.add.text(1009, 363, "", {});
        text_bparka.text = "500";
        text_bparka.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_bparka);

        // buy_greenrug
        const buy_greenrug = this.add.image(1215, 380, "may22cat", "buy");
        page5.add(buy_greenrug);

        // text_greenrug
        const text_greenrug = this.add.text(1176, 363, "", {});
        text_greenrug.text = "400";
        text_greenrug.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_greenrug);

        // buy_pband
        const buy_pband = this.add.image(871, 566, "may22cat", "buy");
        page5.add(buy_pband);

        // text_pband
        const text_pband = this.add.text(829, 549, "", {});
        text_pband.text = "500";
        text_pband.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_pband);

        // buy_lighthouse
        const buy_lighthouse = this.add.image(1046, 566, "may22cat", "buy");
        page5.add(buy_lighthouse);

        // text_lighthouse
        const text_lighthouse = this.add.text(1007, 549, "", {});
        text_lighthouse.text = "750";
        text_lighthouse.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_lighthouse);

        // buy_poncho
        const buy_poncho = this.add.image(1215, 566, "may22cat", "buy");
        page5.add(buy_poncho);

        // text_poncho
        const text_poncho = this.add.text(1176, 549, "", {});
        text_poncho.text = "350";
        text_poncho.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_poncho);

        // text_bletterman
        const text_bletterman = this.add.text(1171, 736, "", {});
        text_bletterman.text = "550";
        text_bletterman.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_bletterman);

        // buy_ballerina
        const buy_ballerina = this.add.image(1046, 755, "may22cat", "buy");
        page5.add(buy_ballerina);

        // text_ballerina
        const text_ballerina = this.add.text(1002, 736, "", {});
        text_ballerina.text = "450";
        text_ballerina.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_ballerina);

        // buy_ad
        const buy_ad = this.add.image(870, 755, "may22cat", "buy");
        page5.add(buy_ad);

        // text_ad
        const text_ad = this.add.text(824, 736, "", {});
        text_ad.text = "350";
        text_ad.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_ad);

        // buy_ljacket
        const buy_ljacket = this.add.image(1215, 199, "may22cat", "buy");
        page5.add(buy_ljacket);

        // text_ljacket
        const text_ljacket = this.add.text(1176, 182, "", {});
        text_ljacket.text = "320";
        text_ljacket.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_ljacket);

        // buy_qvest
        const buy_qvest = this.add.image(1046, 199, "may22cat", "buy");
        page5.add(buy_qvest);

        // text_qvest
        const text_qvest = this.add.text(1009, 182, "", {});
        text_qvest.text = "450";
        text_qvest.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_qvest);

        // buy_rainjacket
        const buy_rainjacket = this.add.image(870, 199, "may22cat", "buy");
        page5.add(buy_rainjacket);

        // text_rainjacket
        const text_rainjacket = this.add.text(829, 182, "", {});
        text_rainjacket.text = "450";
        text_rainjacket.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page5.add(text_rainjacket);

        // buy2_yellowhoodie
        const buy2_yellowhoodie = this.add.image(640, 118, "clothingcatalog", "buy2");
        buy2_yellowhoodie.scaleX = 0.7060432626289486;
        buy2_yellowhoodie.scaleY = 0.7060432626289486;
        buy2_yellowhoodie.angle = -35.00000000000006;
        buy2_yellowhoodie.setOrigin(0, 0);
        page5.add(buy2_yellowhoodie);

        // buy2_pinkhoodie
        const buy2_pinkhoodie = this.add.image(393, 124, "clothingcatalog", "buy2");
        buy2_pinkhoodie.scaleX = 0.7060432626289486;
        buy2_pinkhoodie.scaleY = 0.7060432626289486;
        buy2_pinkhoodie.angle = -35.00000000000006;
        buy2_pinkhoodie.setOrigin(0, 0);
        page5.add(buy2_pinkhoodie);

        // sec-bluesneakers
        const sec_bluesneakers = this.add.ellipse(640, 472, 128, 128);
        sec_bluesneakers.scaleX = 0.2175016673872514;
        sec_bluesneakers.scaleY = 0.21393876922214905;
        sec_bluesneakers.isFilled = true;
        sec_bluesneakers.fillAlpha = 0;
        page5.add(sec_bluesneakers);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // page4_1
        const page4_1 = this.add.image(768, 431, "may22cat", "page4");
        page4.add(page4_1);

        // sec-blueballcap
        const sec_blueballcap = this.add.ellipse(430, 282, 128, 128);
        sec_blueballcap.scaleX = 0.2175016673872514;
        sec_blueballcap.scaleY = 0.21393876922214905;
        sec_blueballcap.isFilled = true;
        sec_blueballcap.fillAlpha = 0;
        page4.add(sec_blueballcap);

        // buy_2_3_1_1_1
        const buy_2_3_1_1_1 = this.add.image(1228, 717, "may22cat", "buy");
        page4.add(buy_2_3_1_1_1);

        // text_2_3_1_1_1
        const text_2_3_1_1_1 = this.add.text(1184, 698, "", {});
        text_2_3_1_1_1.text = "150";
        text_2_3_1_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_2_3_1_1_1);

        // close_right_1_1_1
        const close_right_1_1_1 = this.add.image(1202, 36, "clothingcatalog", "close_right");
        close_right_1_1_1.setOrigin(0, 0);
        page4.add(close_right_1_1_1);

        // page_right_1_1_1
        const page_right_1_1_1 = this.add.image(1201, 582, "clothingcatalog", "page_right");
        page_right_1_1_1.setOrigin(0, 0);
        page4.add(page_right_1_1_1);

        // page_left_1_1
        const page_left_1_1 = this.add.image(190, 580, "clothingcatalog", "page_left");
        page_left_1_1.setOrigin(0, 0);
        page4.add(page_left_1_1);

        // close_left_1_1
        const close_left_1_1 = this.add.image(193, 35, "clothingcatalog", "close_left");
        close_left_1_1.setOrigin(0, 0);
        page4.add(close_left_1_1);

        // buy2_1_1
        const buy2_1_1 = this.add.image(622, 375, "clothingcatalog", "buy2");
        buy2_1_1.scaleX = 1.0216448780669118;
        buy2_1_1.scaleY = 1.0216448780669118;
        buy2_1_1.angle = -25;
        buy2_1_1.setOrigin(0, 0);
        page4.add(buy2_1_1);

        // buy_3_1
        const buy_3_1 = this.add.image(874, 342, "may22cat", "buy");
        page4.add(buy_3_1);

        // text_3_1
        const text_3_1 = this.add.text(833, 325, "", {});
        text_3_1.text = "110";
        text_3_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_3_1);

        // buy_1_1_1
        const buy_1_1_1 = this.add.image(1059, 342, "may22cat", "buy");
        page4.add(buy_1_1_1);

        // text_1_1_1
        const text_1_1_1 = this.add.text(1022, 325, "", {});
        text_1_1_1.text = "200";
        text_1_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_1_1_1);

        // buy_2_4_1
        const buy_2_4_1 = this.add.image(1228, 342, "may22cat", "buy");
        page4.add(buy_2_4_1);

        // text_2_4_1
        const text_2_4_1 = this.add.text(1189, 325, "", {});
        text_2_4_1.text = "50";
        text_2_4_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_2_4_1);

        // buy_2_1_1_1
        const buy_2_1_1_1 = this.add.image(874, 528, "may22cat", "buy");
        page4.add(buy_2_1_1_1);

        // text_2_1_1_1
        const text_2_1_1_1 = this.add.text(833, 511, "", {});
        text_2_1_1_1.text = "150";
        text_2_1_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_2_1_1_1);

        // buy_2_2_1_1
        const buy_2_2_1_1 = this.add.image(1059, 528, "may22cat", "buy");
        page4.add(buy_2_2_1_1);

        // text_2_2_1_1
        const text_2_2_1_1 = this.add.text(1020, 511, "", {});
        text_2_2_1_1.text = "250";
        text_2_2_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_2_2_1_1);

        // buy_2_3_1_1
        const buy_2_3_1_1 = this.add.image(1228, 528, "may22cat", "buy");
        page4.add(buy_2_3_1_1);

        // text_2_3_1_1
        const text_2_3_1_1 = this.add.text(1189, 511, "", {});
        text_2_3_1_1.text = "200";
        text_2_3_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_2_3_1_1);

        // buy_2_2_1_1_1
        const buy_2_2_1_1_1 = this.add.image(1059, 717, "may22cat", "buy");
        page4.add(buy_2_2_1_1_1);

        // text_2_2_1_1_1
        const text_2_2_1_1_1 = this.add.text(1015, 698, "", {});
        text_2_2_1_1_1.text = "100";
        text_2_2_1_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_2_2_1_1_1);

        // buy_2_1_1_1_1
        const buy_2_1_1_1_1 = this.add.image(874, 717, "may22cat", "buy");
        page4.add(buy_2_1_1_1_1);

        // text_2_1_1_1_1
        const text_2_1_1_1_1 = this.add.text(828, 698, "", {});
        text_2_1_1_1_1.text = "200";
        text_2_1_1_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page4.add(text_2_1_1_1_1);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // page3_1
        const page3_1 = this.add.image(768, 431, "may22cat", "page3");
        page3.add(page3_1);

        // sec-500carat
        const sec_500carat = this.add.ellipse(1230, 128, 128, 128);
        sec_500carat.scaleX = 0.21527549275843366;
        sec_500carat.scaleY = 0.3510992995774665;
        sec_500carat.isFilled = true;
        sec_500carat.fillAlpha = 0;
        page3.add(sec_500carat);

        // sec-snork
        const sec_snork = this.add.ellipse(382, 634, 128, 128);
        sec_snork.scaleX = 0.3205912312918101;
        sec_snork.scaleY = 0.3004642695097448;
        sec_snork.isFilled = true;
        sec_snork.fillAlpha = 0;
        page3.add(sec_snork);

        // sec-pbandana
        const sec_pbandana = this.add.ellipse(467, 445, 128, 128);
        sec_pbandana.scaleX = 0.32974944403940937;
        sec_pbandana.scaleY = 0.22396362289127164;
        sec_pbandana.isFilled = true;
        sec_pbandana.fillAlpha = 0;
        page3.add(sec_pbandana);

        // close_left_1
        const close_left_1 = this.add.image(193, 35, "clothingcatalog", "close_left");
        close_left_1.setOrigin(0, 0);
        page3.add(close_left_1);

        // page_left_1
        const page_left_1 = this.add.image(190, 580, "clothingcatalog", "page_left");
        page_left_1.setOrigin(0, 0);
        page3.add(page_left_1);

        // page_right_1_1
        const page_right_1_1 = this.add.image(1201, 582, "clothingcatalog", "page_right");
        page_right_1_1.setOrigin(0, 0);
        page3.add(page_right_1_1);

        // close_right_1_1
        const close_right_1_1 = this.add.image(1202, 36, "clothingcatalog", "close_right");
        close_right_1_1.setOrigin(0, 0);
        page3.add(close_right_1_1);

        // buy_2_3_1
        const buy_2_3_1 = this.add.image(1228, 537, "may22cat", "buy");
        page3.add(buy_2_3_1);

        // text_2_3_1
        const text_2_3_1 = this.add.text(1189, 520, "", {});
        text_2_3_1.text = "200";
        text_2_3_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page3.add(text_2_3_1);

        // buy_2_2_1
        const buy_2_2_1 = this.add.image(1059, 537, "may22cat", "buy");
        page3.add(buy_2_2_1);

        // text_2_2_1
        const text_2_2_1 = this.add.text(1020, 520, "", {});
        text_2_2_1.text = "500";
        text_2_2_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page3.add(text_2_2_1);

        // buy_2_1_1
        const buy_2_1_1 = this.add.image(874, 537, "may22cat", "buy");
        page3.add(buy_2_1_1);

        // text_2_1_1
        const text_2_1_1 = this.add.text(833, 520, "", {});
        text_2_1_1.text = "500";
        text_2_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page3.add(text_2_1_1);

        // buy_2_4
        const buy_2_4 = this.add.image(1228, 351, "may22cat", "buy");
        page3.add(buy_2_4);

        // text_2_4
        const text_2_4 = this.add.text(1189, 334, "", {});
        text_2_4.text = "225";
        text_2_4.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page3.add(text_2_4);

        // buy_1_1
        const buy_1_1 = this.add.image(1059, 351, "may22cat", "buy");
        page3.add(buy_1_1);

        // text_1_1
        const text_1_1 = this.add.text(1022, 334, "", {});
        text_1_1.text = "200";
        text_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page3.add(text_1_1);

        // buy_3
        const buy_3 = this.add.image(874, 351, "may22cat", "buy");
        page3.add(buy_3);

        // text_3
        const text_3 = this.add.text(833, 334, "", {});
        text_3.text = "100";
        text_3.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page3.add(text_3);

        // buy2_1
        const buy2_1 = this.add.image(561, 390, "clothingcatalog", "buy2");
        buy2_1.scaleX = 0.7346337597386997;
        buy2_1.scaleY = 0.7346337597386997;
        buy2_1.angle = 80;
        buy2_1.setOrigin(0, 0);
        page3.add(buy2_1);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // page2_1
        const page2_1 = this.add.image(768, 431, "may22cat", "page2");
        page2.add(page2_1);

        // vikinghelmet-rec
        const vikinghelmet_rec = this.add.rectangle(996, 626, 128, 128);
        vikinghelmet_rec.scaleX = 0.4416027868089266;
        vikinghelmet_rec.scaleY = 0.4243594644875376;
        vikinghelmet_rec.isFilled = true;
        vikinghelmet_rec.fillAlpha = 0;
        page2.add(vikinghelmet_rec);

        // sec-magicianwand
        const sec_magicianwand = this.add.ellipse(600, 228, 128, 128);
        sec_magicianwand.scaleX = 0.19270091046363402;
        sec_magicianwand.scaleY = 0.18425493561131656;
        sec_magicianwand.isFilled = true;
        sec_magicianwand.fillAlpha = 0;
        page2.add(sec_magicianwand);

        // buy2
        const buy2 = this.add.image(538, 521, "clothingcatalog", "buy2");
        buy2.scaleX = 0.7346337597386997;
        buy2.scaleY = 0.7346337597386997;
        buy2.angle = -20;
        buy2.setOrigin(0, 0);
        page2.add(buy2);

        // buy
        const buy = this.add.image(878, 316, "may22cat", "buy");
        page2.add(buy);

        // text
        const text = this.add.text(837, 299, "", {});
        text.text = "400";
        text.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page2.add(text);

        // buy_1
        const buy_1 = this.add.image(1055, 316, "may22cat", "buy");
        page2.add(buy_1);

        // text_1
        const text_1 = this.add.text(1018, 299, "", {});
        text_1.text = "100";
        text_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page2.add(text_1);

        // buy_2
        const buy_2 = this.add.image(1216, 316, "may22cat", "buy");
        page2.add(buy_2);

        // text_2
        const text_2 = this.add.text(1177, 299, "", {});
        text_2.text = "150";
        text_2.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page2.add(text_2);

        // buy_2_1
        const buy_2_1 = this.add.image(878, 502, "may22cat", "buy");
        page2.add(buy_2_1);

        // text_2_1
        const text_2_1 = this.add.text(837, 485, "", {});
        text_2_1.text = "500";
        text_2_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page2.add(text_2_1);

        // buy_2_2
        const buy_2_2 = this.add.image(1055, 502, "may22cat", "buy");
        page2.add(buy_2_2);

        // text_2_2
        const text_2_2 = this.add.text(1016, 485, "", {});
        text_2_2.text = "400";
        text_2_2.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page2.add(text_2_2);

        // buy_2_3
        const buy_2_3 = this.add.image(1216, 502, "may22cat", "buy");
        page2.add(buy_2_3);

        // text_2_3
        const text_2_3 = this.add.text(1177, 485, "", {});
        text_2_3.text = "200";
        text_2_3.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page2.add(text_2_3);

        // close_right_1
        const close_right_1 = this.add.image(1202, 36, "clothingcatalog", "close_right");
        close_right_1.setOrigin(0, 0);
        page2.add(close_right_1);

        // page_right_1
        const page_right_1 = this.add.image(1201, 582, "clothingcatalog", "page_right");
        page_right_1.setOrigin(0, 0);
        page2.add(page_right_1);

        // page_left
        const page_left = this.add.image(190, 580, "clothingcatalog", "page_left");
        page_left.setOrigin(0, 0);
        page2.add(page_left);

        // close_left
        const close_left = this.add.image(193, 35, "clothingcatalog", "close_left");
        close_left.setOrigin(0, 0);
        page2.add(close_left);

        // sec-wtshirt
        const sec_wtshirt = this.add.rectangle(515, 92, 128, 128);
        sec_wtshirt.scaleX = 0.2984607664172768;
        sec_wtshirt.scaleY = 0.38961293968586874;
        sec_wtshirt.isFilled = true;
        sec_wtshirt.fillAlpha = 0;
        page2.add(sec_wtshirt);

        // page1
        const page1 = this.add.container(-1, 1);
        page1.visible = false;

        // page1_1
        const page1_1 = this.add.image(765, 432, "may22cat", "page1");
        page1.add(page1_1);

        // page_right
        const page_right = this.add.image(909, 582, "clothingcatalog", "page_right");
        page_right.setOrigin(0, 0);
        page1.add(page_right);

        // close_right
        const close_right = this.add.image(910, 32, "clothingcatalog", "close_right");
        close_right.setOrigin(0, 0);
        page1.add(close_right);

        // buttons
        const buttons = this.add.container(189, 41);
        buttons.visible = false;

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6, page8, page9];

        // block (components)
        new Interactive(block);

        // close_left_page6_1_1 (components)
        const close_left_page6_1_1Button = new Button(close_left_page6_1_1);
        close_left_page6_1_1Button.spriteName = "close_left";
        close_left_page6_1_1Button.callback = () => this.close();
        close_left_page6_1_1Button.pixelPerfect = true;

        // page_left_page6_1_1 (components)
        const page_left_page6_1_1Button = new Button(page_left_page6_1_1);
        page_left_page6_1_1Button.spriteName = "page_left";
        page_left_page6_1_1Button.callback = () => this.prevPage();
        page_left_page6_1_1Button.activeFrame = false;
        page_left_page6_1_1Button.pixelPerfect = true;

        // blue0001_png (components)
        const blue0001_pngButton = new Button(blue0001_png);
        blue0001_pngButton.spriteName = "blue0001.png";
        blue0001_pngButton.callback = () => this.interface.prompt.showItem(1);
        blue0001_pngButton.activeFrame = false;

        // green0001_png (components)
        const green0001_pngButton = new Button(green0001_png);
        green0001_pngButton.spriteName = "green0001.png";
        green0001_pngButton.callback = () => this.interface.prompt.showItem(2);
        green0001_pngButton.activeFrame = false;

        // pink0001_png (components)
        const pink0001_pngButton = new Button(pink0001_png);
        pink0001_pngButton.spriteName = "pink0001.png";
        pink0001_pngButton.callback = () => this.interface.prompt.showItem(3);
        pink0001_pngButton.activeFrame = false;

        // black0001_png (components)
        const black0001_pngButton = new Button(black0001_png);
        black0001_pngButton.spriteName = "black0001.png";
        black0001_pngButton.callback = () => this.interface.prompt.showItem(4);
        black0001_pngButton.activeFrame = false;

        // red0001_png (components)
        const red0001_pngButton = new Button(red0001_png);
        red0001_pngButton.spriteName = "red0001.png";
        red0001_pngButton.callback = () => this.interface.prompt.showItem(5);
        red0001_pngButton.activeFrame = false;

        // orange0001_png (components)
        const orange0001_pngButton = new Button(orange0001_png);
        orange0001_pngButton.spriteName = "orange0001.png";
        orange0001_pngButton.callback = () => this.interface.prompt.showItem(6);
        orange0001_pngButton.activeFrame = false;

        // yellow0001_png (components)
        const yellow0001_pngButton = new Button(yellow0001_png);
        yellow0001_pngButton.spriteName = "yellow0001.png";
        yellow0001_pngButton.callback = () => this.interface.prompt.showItem(7);
        yellow0001_pngButton.activeFrame = false;

        // purple0001_png (components)
        const purple0001_pngButton = new Button(purple0001_png);
        purple0001_pngButton.spriteName = "purple0001.png";
        purple0001_pngButton.callback = () => this.interface.prompt.showItem(8);
        purple0001_pngButton.activeFrame = false;

        // brown0001_png (components)
        const brown0001_pngButton = new Button(brown0001_png);
        brown0001_pngButton.spriteName = "brown0001.png";
        brown0001_pngButton.callback = () => this.interface.prompt.showItem(9);
        brown0001_pngButton.activeFrame = false;

        // darkgreen0001_png (components)
        const darkgreen0001_pngButton = new Button(darkgreen0001_png);
        darkgreen0001_pngButton.spriteName = "darkgreen0001.png";
        darkgreen0001_pngButton.callback = () => this.interface.prompt.showItem(11);
        darkgreen0001_pngButton.activeFrame = false;

        // lightblue0001_png (components)
        const lightblue0001_pngButton = new Button(lightblue0001_png);
        lightblue0001_pngButton.spriteName = "lightblue0001.png";
        lightblue0001_pngButton.callback = () => this.interface.prompt.showItem(12);
        lightblue0001_pngButton.activeFrame = false;

        // darkpink0001_png (components)
        const darkpink0001_pngButton = new Button(darkpink0001_png);
        darkpink0001_pngButton.spriteName = "darkpink0001.png";
        darkpink0001_pngButton.callback = () => this.interface.prompt.showItem(10);
        darkpink0001_pngButton.activeFrame = false;

        // close_left_page6_1 (components)
        const close_left_page6_1Button = new Button(close_left_page6_1);
        close_left_page6_1Button.spriteName = "close_left";
        close_left_page6_1Button.callback = () => this.close();
        close_left_page6_1Button.pixelPerfect = true;

        // page_left_page6_1 (components)
        const page_left_page6_1Button = new Button(page_left_page6_1);
        page_left_page6_1Button.spriteName = "page_left";
        page_left_page6_1Button.callback = () => this.prevPage();
        page_left_page6_1Button.activeFrame = false;
        page_left_page6_1Button.pixelPerfect = true;

        // page_right_page6_1 (components)
        const page_right_page6_1Button = new Button(page_right_page6_1);
        page_right_page6_1Button.spriteName = "page_right";
        page_right_page6_1Button.callback = () => this.nextPage();
        page_right_page6_1Button.activeFrame = false;
        page_right_page6_1Button.pixelPerfect = true;

        // close_right_page6_1 (components)
        const close_right_page6_1Button = new Button(close_right_page6_1);
        close_right_page6_1Button.spriteName = "close_right";
        close_right_page6_1Button.callback = () => this.close();
        close_right_page6_1Button.pixelPerfect = true;

        // buy_sombrero (components)
        const buy_sombreroButton = new Button(buy_sombrero);
        buy_sombreroButton.spriteName = "buy";
        buy_sombreroButton.callback = () => this.interface.prompt.showItem(401);
        buy_sombreroButton.activeFrame = false;

        // buy_roman (components)
        const buy_romanButton = new Button(buy_roman);
        buy_romanButton.spriteName = "buy";
        buy_romanButton.callback = () => this.interface.prompt.showItem(451);
        buy_romanButton.activeFrame = false;

        // close_right_page6 (components)
        const close_right_page6Button = new Button(close_right_page6);
        close_right_page6Button.spriteName = "close_right";
        close_right_page6Button.callback = () => this.close();
        close_right_page6Button.pixelPerfect = true;

        // page_right_page6 (components)
        const page_right_page6Button = new Button(page_right_page6);
        page_right_page6Button.spriteName = "page_right";
        page_right_page6Button.callback = () => this.nextPage();
        page_right_page6Button.activeFrame = false;
        page_right_page6Button.pixelPerfect = true;

        // page_left_page6 (components)
        const page_left_page6Button = new Button(page_left_page6);
        page_left_page6Button.spriteName = "page_left";
        page_left_page6Button.callback = () => this.prevPage();
        page_left_page6Button.activeFrame = false;
        page_left_page6Button.pixelPerfect = true;

        // close_left_page6 (components)
        const close_left_page6Button = new Button(close_left_page6);
        close_left_page6Button.spriteName = "close_left";
        close_left_page6Button.callback = () => this.close();
        close_left_page6Button.pixelPerfect = true;

        // buy_beekeeper (components)
        const buy_beekeeperButton = new Button(buy_beekeeper);
        buy_beekeeperButton.spriteName = "buy";
        buy_beekeeperButton.callback = () => this.interface.prompt.showItem(654);
        buy_beekeeperButton.activeFrame = false;

        // buy_trend (components)
        const buy_trendButton = new Button(buy_trend);
        buy_trendButton.spriteName = "buy";
        buy_trendButton.callback = () => this.interface.prompt.showItem(1139);
        buy_trendButton.activeFrame = false;

        // buy_disco (components)
        const buy_discoButton = new Button(buy_disco);
        buy_discoButton.spriteName = "buy";
        buy_discoButton.callback = () => this.interface.prompt.showItem(652);
        buy_discoButton.activeFrame = false;

        // buy_sstriker (components)
        const buy_sstrikerButton = new Button(buy_sstriker);
        buy_sstrikerButton.spriteName = "buy";
        buy_sstrikerButton.callback = () => this.interface.prompt.showItem(656);
        buy_sstrikerButton.activeFrame = false;

        // buy_sk (components)
        const buy_skButton = new Button(buy_sk);
        buy_skButton.spriteName = "buy";
        buy_skButton.callback = () => this.interface.prompt.showItem(662);
        buy_skButton.activeFrame = false;

        // buy_funster (components)
        const buy_funsterButton = new Button(buy_funster);
        buy_funsterButton.spriteName = "buy";
        buy_funsterButton.callback = () => this.interface.prompt.showItem(653);
        buy_funsterButton.activeFrame = false;

        // buy_pballcap (components)
        const buy_pballcapButton = new Button(buy_pballcap);
        buy_pballcapButton.spriteName = "buy";
        buy_pballcapButton.callback = () => this.interface.prompt.showItem(406);
        buy_pballcapButton.activeFrame = false;

        // buy_tuft (components)
        const buy_tuftButton = new Button(buy_tuft);
        buy_tuftButton.spriteName = "buy";
        buy_tuftButton.callback = () => this.interface.prompt.showItem(1007);
        buy_tuftButton.activeFrame = false;

        // buy_bflutt (components)
        const buy_bfluttButton = new Button(buy_bflutt);
        buy_bfluttButton.spriteName = "buy";
        buy_bfluttButton.callback = () => this.interface.prompt.showItem(1039);
        buy_bfluttButton.activeFrame = false;

        // buy_flouncy (components)
        const buy_flouncyButton = new Button(buy_flouncy);
        buy_flouncyButton.spriteName = "buy";
        buy_flouncyButton.callback = () => this.interface.prompt.showItem(1022);
        buy_flouncyButton.activeFrame = false;

        // buy2_flutterby (components)
        const buy2_flutterbyButton = new Button(buy2_flutterby);
        buy2_flutterbyButton.spriteName = "buy2";
        buy2_flutterbyButton.callback = () => this.interface.prompt.showItem(657);

        // buy2_pinkear (components)
        const buy2_pinkearButton = new Button(buy2_pinkear);
        buy2_pinkearButton.spriteName = "buy2";
        buy2_pinkearButton.callback = () => this.interface.prompt.showItem(484);

        // sec_blackcape (components)
        const sec_blackcapeSimpleButton = new SimpleButton(sec_blackcape);
        sec_blackcapeSimpleButton.callback = () => this.interface.prompt.showItem(303);

        // sec_pinkdress (components)
        const sec_pinkdressSimpleButton = new SimpleButton(sec_pinkdress);
        sec_pinkdressSimpleButton.callback = () => this.interface.prompt.showItem(252);

        // buy_bletterman (components)
        const buy_blettermanButton = new Button(buy_bletterman);
        buy_blettermanButton.spriteName = "buy";
        buy_blettermanButton.callback = () => this.interface.prompt.showItem(281);
        buy_blettermanButton.activeFrame = false;

        // close_right_page5 (components)
        const close_right_page5Button = new Button(close_right_page5);
        close_right_page5Button.spriteName = "close_right";
        close_right_page5Button.callback = () => this.close();
        close_right_page5Button.pixelPerfect = true;

        // page_right_page5 (components)
        const page_right_page5Button = new Button(page_right_page5);
        page_right_page5Button.spriteName = "page_right";
        page_right_page5Button.callback = () => this.nextPage();
        page_right_page5Button.activeFrame = false;
        page_right_page5Button.pixelPerfect = true;

        // page_left_page5 (components)
        const page_left_page5Button = new Button(page_left_page5);
        page_left_page5Button.spriteName = "page_left";
        page_left_page5Button.callback = () => this.prevPage();
        page_left_page5Button.activeFrame = false;
        page_left_page5Button.pixelPerfect = true;

        // close_left_page5 (components)
        const close_left_page5Button = new Button(close_left_page5);
        close_left_page5Button.spriteName = "close_left";
        close_left_page5Button.callback = () => this.close();
        close_left_page5Button.pixelPerfect = true;

        // buy2_blackhoodie (components)
        const buy2_blackhoodieButton = new Button(buy2_blackhoodie);
        buy2_blackhoodieButton.spriteName = "buy2";
        buy2_blackhoodieButton.callback = () => this.interface.prompt.showItem(221);

        // buy_daisy (components)
        const buy_daisyButton = new Button(buy_daisy);
        buy_daisyButton.spriteName = "buy";
        buy_daisyButton.callback = () => this.interface.prompt.showItem(14051);
        buy_daisyButton.activeFrame = false;

        // buy_bparka (components)
        const buy_bparkaButton = new Button(buy_bparka);
        buy_bparkaButton.spriteName = "buy";
        buy_bparkaButton.callback = () => this.interface.prompt.showItem(243);
        buy_bparkaButton.activeFrame = false;

        // buy_greenrug (components)
        const buy_greenrugButton = new Button(buy_greenrug);
        buy_greenrugButton.spriteName = "buy";
        buy_greenrugButton.callback = () => this.interface.prompt.showItem(4061);
        buy_greenrugButton.activeFrame = false;

        // buy_pband (components)
        const buy_pbandButton = new Button(buy_pband);
        buy_pbandButton.spriteName = "buy";
        buy_pbandButton.callback = () => this.interface.prompt.showItem(773);
        buy_pbandButton.activeFrame = false;

        // buy_lighthouse (components)
        const buy_lighthouseButton = new Button(buy_lighthouse);
        buy_lighthouseButton.spriteName = "buy";
        buy_lighthouseButton.callback = () => this.interface.prompt.showItem(282);
        buy_lighthouseButton.activeFrame = false;

        // buy_poncho (components)
        const buy_ponchoButton = new Button(buy_poncho);
        buy_ponchoButton.spriteName = "buy";
        buy_ponchoButton.callback = () => this.interface.prompt.showItem(236);
        buy_ponchoButton.activeFrame = false;

        // buy_ballerina (components)
        const buy_ballerinaButton = new Button(buy_ballerina);
        buy_ballerinaButton.spriteName = "buy";
        buy_ballerinaButton.callback = () => this.interface.prompt.showItem(256);
        buy_ballerinaButton.activeFrame = false;

        // buy_ad (components)
        const buy_adButton = new Button(buy_ad);
        buy_adButton.spriteName = "buy";
        buy_adButton.callback = () => this.interface.prompt.showItem(285);
        buy_adButton.activeFrame = false;

        // buy_ljacket (components)
        const buy_ljacketButton = new Button(buy_ljacket);
        buy_ljacketButton.spriteName = "buy";
        buy_ljacketButton.callback = () => this.interface.prompt.showItem(215);
        buy_ljacketButton.activeFrame = false;

        // buy_qvest (components)
        const buy_qvestButton = new Button(buy_qvest);
        buy_qvestButton.spriteName = "buy";
        buy_qvestButton.callback = () => this.interface.prompt.showItem(218);
        buy_qvestButton.activeFrame = false;

        // buy_rainjacket (components)
        const buy_rainjacketButton = new Button(buy_rainjacket);
        buy_rainjacketButton.spriteName = "buy";
        buy_rainjacketButton.callback = () => this.interface.prompt.showItem(235);
        buy_rainjacketButton.activeFrame = false;

        // buy2_yellowhoodie (components)
        const buy2_yellowhoodieButton = new Button(buy2_yellowhoodie);
        buy2_yellowhoodieButton.spriteName = "buy2";
        buy2_yellowhoodieButton.callback = () => this.interface.prompt.showItem(4259);

        // buy2_pinkhoodie (components)
        const buy2_pinkhoodieButton = new Button(buy2_pinkhoodie);
        buy2_pinkhoodieButton.spriteName = "buy2";
        buy2_pinkhoodieButton.callback = () => this.interface.prompt.showItem(222);

        // sec_bluesneakers (components)
        const sec_bluesneakersSimpleButton = new SimpleButton(sec_bluesneakers);
        sec_bluesneakersSimpleButton.callback = () => this.interface.prompt.showItem(357);

        // sec_blueballcap (components)
        const sec_blueballcapSimpleButton = new SimpleButton(sec_blueballcap);
        sec_blueballcapSimpleButton.callback = () => this.interface.prompt.showItem(436);

        // buy_2_3_1_1_1 (components)
        const buy_2_3_1_1_1Button = new Button(buy_2_3_1_1_1);
        buy_2_3_1_1_1Button.spriteName = "buy";
        buy_2_3_1_1_1Button.callback = () => this.interface.prompt.showItem(179);
        buy_2_3_1_1_1Button.activeFrame = false;

        // close_right_1_1_1 (components)
        const close_right_1_1_1Button = new Button(close_right_1_1_1);
        close_right_1_1_1Button.spriteName = "close_right";
        close_right_1_1_1Button.callback = () => this.close();
        close_right_1_1_1Button.pixelPerfect = true;

        // page_right_1_1_1 (components)
        const page_right_1_1_1Button = new Button(page_right_1_1_1);
        page_right_1_1_1Button.spriteName = "page_right";
        page_right_1_1_1Button.callback = () => this.nextPage();
        page_right_1_1_1Button.activeFrame = false;
        page_right_1_1_1Button.pixelPerfect = true;

        // page_left_1_1 (components)
        const page_left_1_1Button = new Button(page_left_1_1);
        page_left_1_1Button.spriteName = "page_left";
        page_left_1_1Button.callback = () => this.prevPage();
        page_left_1_1Button.activeFrame = false;
        page_left_1_1Button.pixelPerfect = true;

        // close_left_1_1 (components)
        const close_left_1_1Button = new Button(close_left_1_1);
        close_left_1_1Button.spriteName = "close_left";
        close_left_1_1Button.callback = () => this.close();
        close_left_1_1Button.pixelPerfect = true;

        // buy2_1_1 (components)
        const buy2_1_1Button = new Button(buy2_1_1);
        buy2_1_1Button.spriteName = "buy2";
        buy2_1_1Button.callback = () => this.interface.prompt.showItem(13017);

        // buy_3_1 (components)
        const buy_3_1Button = new Button(buy_3_1);
        buy_3_1Button.spriteName = "buy";
        buy_3_1Button.callback = () => this.interface.prompt.showItem(182);
        buy_3_1Button.activeFrame = false;

        // buy_1_1_1 (components)
        const buy_1_1_1Button = new Button(buy_1_1_1);
        buy_1_1_1Button.spriteName = "buy";
        buy_1_1_1Button.callback = () => this.interface.prompt.showItem(192);
        buy_1_1_1Button.activeFrame = false;

        // buy_2_4_1 (components)
        const buy_2_4_1Button = new Button(buy_2_4_1);
        buy_2_4_1Button.spriteName = "buy";
        buy_2_4_1Button.callback = () => this.interface.prompt.showItem(214);
        buy_2_4_1Button.activeFrame = false;

        // buy_2_1_1_1 (components)
        const buy_2_1_1_1Button = new Button(buy_2_1_1_1);
        buy_2_1_1_1Button.spriteName = "buy";
        buy_2_1_1_1Button.callback = () => this.interface.prompt.showItem(3049);
        buy_2_1_1_1Button.activeFrame = false;

        // buy_2_2_1_1 (components)
        const buy_2_2_1_1Button = new Button(buy_2_2_1_1);
        buy_2_2_1_1Button.spriteName = "buy";
        buy_2_2_1_1Button.callback = () => this.interface.prompt.showItem(3101);
        buy_2_2_1_1Button.activeFrame = false;

        // buy_2_3_1_1 (components)
        const buy_2_3_1_1Button = new Button(buy_2_3_1_1);
        buy_2_3_1_1Button.spriteName = "buy";
        buy_2_3_1_1Button.callback = () => this.interface.prompt.showItem(3100);
        buy_2_3_1_1Button.activeFrame = false;

        // buy_2_2_1_1_1 (components)
        const buy_2_2_1_1_1Button = new Button(buy_2_2_1_1_1);
        buy_2_2_1_1_1Button.spriteName = "buy";
        buy_2_2_1_1_1Button.callback = () => this.interface.prompt.showItem(191);
        buy_2_2_1_1_1Button.activeFrame = false;

        // buy_2_1_1_1_1 (components)
        const buy_2_1_1_1_1Button = new Button(buy_2_1_1_1_1);
        buy_2_1_1_1_1Button.spriteName = "buy";
        buy_2_1_1_1_1Button.callback = () => this.interface.prompt.showItem(171);
        buy_2_1_1_1_1Button.activeFrame = false;

        // sec_500carat (components)
        const sec_500caratSimpleButton = new SimpleButton(sec_500carat);
        sec_500caratSimpleButton.callback = () => this.interface.prompt.showItem(5210);

        // sec_snork (components)
        const sec_snorkSimpleButton = new SimpleButton(sec_snork);
        sec_snorkSimpleButton.callback = () => this.interface.prompt.showItem(132);

        // sec_pbandana (components)
        const sec_pbandanaSimpleButton = new SimpleButton(sec_pbandana);
        sec_pbandanaSimpleButton.callback = () => this.interface.prompt.showItem(490);

        // close_left_1 (components)
        const close_left_1Button = new Button(close_left_1);
        close_left_1Button.spriteName = "close_left";
        close_left_1Button.callback = () => this.close();
        close_left_1Button.pixelPerfect = true;

        // page_left_1 (components)
        const page_left_1Button = new Button(page_left_1);
        page_left_1Button.spriteName = "page_left";
        page_left_1Button.callback = () => this.prevPage();
        page_left_1Button.activeFrame = false;
        page_left_1Button.pixelPerfect = true;

        // page_right_1_1 (components)
        const page_right_1_1Button = new Button(page_right_1_1);
        page_right_1_1Button.spriteName = "page_right";
        page_right_1_1Button.callback = () => this.nextPage();
        page_right_1_1Button.activeFrame = false;
        page_right_1_1Button.pixelPerfect = true;

        // close_right_1_1 (components)
        const close_right_1_1Button = new Button(close_right_1_1);
        close_right_1_1Button.spriteName = "close_right";
        close_right_1_1Button.callback = () => this.close();
        close_right_1_1Button.pixelPerfect = true;

        // buy_2_3_1 (components)
        const buy_2_3_1Button = new Button(buy_2_3_1);
        buy_2_3_1Button.spriteName = "buy";
        buy_2_3_1Button.callback = () => this.interface.prompt.showItem(103);
        buy_2_3_1Button.activeFrame = false;

        // buy_2_2_1 (components)
        const buy_2_2_1Button = new Button(buy_2_2_1);
        buy_2_2_1Button.spriteName = "buy";
        buy_2_2_1Button.callback = () => this.interface.prompt.showItem(101);
        buy_2_2_1Button.activeFrame = false;

        // buy_2_1_1 (components)
        const buy_2_1_1Button = new Button(buy_2_1_1);
        buy_2_1_1Button.spriteName = "buy";
        buy_2_1_1Button.callback = () => this.interface.prompt.showItem(112);
        buy_2_1_1Button.activeFrame = false;

        // buy_2_4 (components)
        const buy_2_4Button = new Button(buy_2_4);
        buy_2_4Button.spriteName = "buy";
        buy_2_4Button.callback = () => this.interface.prompt.showItem(118);
        buy_2_4Button.activeFrame = false;

        // buy_1_1 (components)
        const buy_1_1Button = new Button(buy_1_1);
        buy_1_1Button.spriteName = "buy";
        buy_1_1Button.callback = () => this.interface.prompt.showItem(111);
        buy_1_1Button.activeFrame = false;

        // buy_3 (components)
        const buy_3Button = new Button(buy_3);
        buy_3Button.spriteName = "buy";
        buy_3Button.callback = () => this.interface.prompt.showItem(106);
        buy_3Button.activeFrame = false;

        // buy2_1 (components)
        const buy2_1Button = new Button(buy2_1);
        buy2_1Button.spriteName = "buy2";
        buy2_1Button.callback = () => this.interface.prompt.showItem(138);

        // vikinghelmet_rec (components)
        const vikinghelmet_recSimpleButton = new SimpleButton(vikinghelmet_rec);
        vikinghelmet_recSimpleButton.callback = () => this.interface.prompt.showItem(452);

        // sec_magicianwand (components)
        const sec_magicianwandSimpleButton = new SimpleButton(sec_magicianwand);
        sec_magicianwandSimpleButton.callback = () => this.interface.prompt.showItem(5080);

        // buy2 (components)
        const buy2Button = new Button(buy2);
        buy2Button.spriteName = "buy2";
        buy2Button.callback = () => this.interface.prompt.showItem(341);

        // buy (components)
        const buyButton = new Button(buy);
        buyButton.spriteName = "buy";
        buyButton.callback = () => this.interface.prompt.showItem(5053);
        buyButton.activeFrame = false;

        // buy_1 (components)
        const buy_1Button = new Button(buy_1);
        buy_1Button.spriteName = "buy";
        buy_1Button.callback = () => this.interface.prompt.showItem(5010);
        buy_1Button.activeFrame = false;

        // buy_2 (components)
        const buy_2Button = new Button(buy_2);
        buy_2Button.spriteName = "buy";
        buy_2Button.callback = () => this.interface.prompt.showItem(5013);
        buy_2Button.activeFrame = false;

        // buy_2_1 (components)
        const buy_2_1Button = new Button(buy_2_1);
        buy_2_1Button.spriteName = "buy";
        buy_2_1Button.callback = () => this.interface.prompt.showItem(5560);
        buy_2_1Button.activeFrame = false;

        // buy_2_2 (components)
        const buy_2_2Button = new Button(buy_2_2);
        buy_2_2Button.spriteName = "buy";
        buy_2_2Button.callback = () => this.interface.prompt.showItem(15026);
        buy_2_2Button.activeFrame = false;

        // buy_2_3 (components)
        const buy_2_3Button = new Button(buy_2_3);
        buy_2_3Button.spriteName = "buy";
        buy_2_3Button.callback = () => this.interface.prompt.showItem(5117);
        buy_2_3Button.activeFrame = false;

        // close_right_1 (components)
        const close_right_1Button = new Button(close_right_1);
        close_right_1Button.spriteName = "close_right";
        close_right_1Button.callback = () => this.close();
        close_right_1Button.pixelPerfect = true;

        // page_right_1 (components)
        const page_right_1Button = new Button(page_right_1);
        page_right_1Button.spriteName = "page_right";
        page_right_1Button.callback = () => this.nextPage();
        page_right_1Button.activeFrame = false;
        page_right_1Button.pixelPerfect = true;

        // page_left (components)
        const page_leftButton = new Button(page_left);
        page_leftButton.spriteName = "page_left";
        page_leftButton.callback = () => this.prevPage();
        page_leftButton.activeFrame = false;
        page_leftButton.pixelPerfect = true;

        // close_left (components)
        const close_leftButton = new Button(close_left);
        close_leftButton.spriteName = "close_left";
        close_leftButton.callback = () => this.close();
        close_leftButton.pixelPerfect = true;

        // sec_wtshirt (components)
        const sec_wtshirtSimpleButton = new SimpleButton(sec_wtshirt);
        sec_wtshirtSimpleButton.callback = () => this.interface.prompt.showItem(850);

        // page_right (components)
        const page_rightButton = new Button(page_right);
        page_rightButton.spriteName = "page_right";
        page_rightButton.callback = () => this.nextPage();
        page_rightButton.activeFrame = false;
        page_rightButton.pixelPerfect = true;

        // close_right (components)
        const close_rightButton = new Button(close_right);
        close_rightButton.spriteName = "close_right";
        close_rightButton.callback = () => this.close();
        close_rightButton.pixelPerfect = true;

        this.blue0001_png = blue0001_png;
        this.green0001_png = green0001_png;
        this.pink0001_png = pink0001_png;
        this.black0001_png = black0001_png;
        this.red0001_png = red0001_png;
        this.orange0001_png = orange0001_png;
        this.yellow0001_png = yellow0001_png;
        this.purple0001_png = purple0001_png;
        this.brown0001_png = brown0001_png;
        this.darkgreen0001_png = darkgreen0001_png;
        this.lightblue0001_png = lightblue0001_png;
        this.darkpink0001_png = darkpink0001_png;
        this.buy_sombrero = buy_sombrero;
        this.buy_roman = buy_roman;
        this.buy_beekeeper = buy_beekeeper;
        this.buy_trend = buy_trend;
        this.buy_disco = buy_disco;
        this.buy_sstriker = buy_sstriker;
        this.buy_sk = buy_sk;
        this.buy_funster = buy_funster;
        this.buy_pballcap = buy_pballcap;
        this.buy_tuft = buy_tuft;
        this.buy_bflutt = buy_bflutt;
        this.buy_flouncy = buy_flouncy;
        this.buy2_flutterby = buy2_flutterby;
        this.buy2_pinkear = buy2_pinkear;
        this.buy_bletterman = buy_bletterman;
        this.buy2_blackhoodie = buy2_blackhoodie;
        this.buy_daisy = buy_daisy;
        this.buy_bparka = buy_bparka;
        this.buy_greenrug = buy_greenrug;
        this.buy_pband = buy_pband;
        this.buy_lighthouse = buy_lighthouse;
        this.buy_poncho = buy_poncho;
        this.buy_ballerina = buy_ballerina;
        this.buy_ad = buy_ad;
        this.buy_ljacket = buy_ljacket;
        this.buy_qvest = buy_qvest;
        this.buy_rainjacket = buy_rainjacket;
        this.buy2_yellowhoodie = buy2_yellowhoodie;
        this.buy2_pinkhoodie = buy2_pinkhoodie;
        this.buy_2_3_1_1_1 = buy_2_3_1_1_1;
        this.buy2_1_1 = buy2_1_1;
        this.buy_3_1 = buy_3_1;
        this.buy_1_1_1 = buy_1_1_1;
        this.buy_2_4_1 = buy_2_4_1;
        this.buy_2_1_1_1 = buy_2_1_1_1;
        this.buy_2_2_1_1 = buy_2_2_1_1;
        this.buy_2_3_1_1 = buy_2_3_1_1;
        this.buy_2_2_1_1_1 = buy_2_2_1_1_1;
        this.buy_2_1_1_1_1 = buy_2_1_1_1_1;
        this.buy_2_3_1 = buy_2_3_1;
        this.buy_2_2_1 = buy_2_2_1;
        this.buy_2_1_1 = buy_2_1_1;
        this.buy_2_4 = buy_2_4;
        this.buy_1_1 = buy_1_1;
        this.buy_3 = buy_3;
        this.buy2_1 = buy2_1;
        this.vikinghelmet_rec = vikinghelmet_rec;
        this.buy2 = buy2;
        this.buy = buy;
        this.buy_1 = buy_1;
        this.buy_2 = buy_2;
        this.buy_2_1 = buy_2_1;
        this.buy_2_2 = buy_2_2;
        this.buy_2_3 = buy_2_3;
        this.sec_wtshirt = sec_wtshirt;
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
