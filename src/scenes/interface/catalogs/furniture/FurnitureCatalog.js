import { Button, Interactive } from '@components/components'

import Book from '@scenes/interface/books/Book'
import BuyButton from './buttons/BuyButton'


/* START OF COMPILED CODE */

export default class FurnitureCatalog extends Book {

    constructor() {
        super("FurnitureCatalog");

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

        // page8
        const page8 = this.add.container(0, 0);
        page8.visible = false;

        // lastpage_png
        const lastpage_png = this.add.image(521, 395, "furniture", "lastpage.png");
        page8.add(lastpage_png);

        // exit0001_png_1_1_1_1_2_1
        const exit0001_png_1_1_1_1_2_1 = this.add.image(982, 109, "Sep2005", "exit0001.png");
        page8.add(exit0001_png_1_1_1_1_2_1);

        // last_page0001_png_1_1_1_2_1
        const last_page0001_png_1_1_1_2_1 = this.add.image(538, 691, "Sep2005", "last-page0001.png");
        page8.add(last_page0001_png_1_1_1_2_1);

        // buyButton_30_1
        const buyButton_30_1 = new BuyButton(this, 782, 100);
        page8.add(buyButton_30_1);

        // buyButton_30_1_1
        const buyButton_30_1_1 = new BuyButton(this, 560, 560);
        page8.add(buyButton_30_1_1);

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // page5_png
        const page5_png = this.add.image(615, 394, "furniture", "page5.png");
        page7.add(page5_png);

        // buyButton_30
        const buyButton_30 = new BuyButton(this, 437, 379);
        page7.add(buyButton_30);

        // buyButton_31
        const buyButton_31 = new BuyButton(this, 309, 608);
        page7.add(buyButton_31);

        // buyButton_34
        const buyButton_34 = new BuyButton(this, 1162, 624);
        buyButton_34.scaleX = 0.8168502009576887;
        buyButton_34.scaleY = 0.8168502009576887;
        page7.add(buyButton_34);

        // buyButton_34_1
        const buyButton_34_1 = new BuyButton(this, 1003, 458);
        buyButton_34_1.scaleX = 0.8168502009576887;
        buyButton_34_1.scaleY = 0.8168502009576887;
        page7.add(buyButton_34_1);

        // buyButton_34_1_1
        const buyButton_34_1_1 = new BuyButton(this, 1143, 290);
        buyButton_34_1_1.scaleX = 0.8168502009576887;
        buyButton_34_1_1.scaleY = 0.8168502009576887;
        page7.add(buyButton_34_1_1);

        // next_page0001_png_1_1_1_1_2
        const next_page0001_png_1_1_1_1_2 = this.add.image(1286, 696, "Sep2005", "next-page0001.png");
        page7.add(next_page0001_png_1_1_1_1_2);

        // exit0001_png_1_1_1_1_2
        const exit0001_png_1_1_1_1_2 = this.add.image(1298, 99, "Sep2005", "exit0001.png");
        page7.add(exit0001_png_1_1_1_1_2);

        // last_page0001_png_1_1_1_2
        const last_page0001_png_1_1_1_2 = this.add.image(271, 697, "Sep2005", "last-page0001.png");
        page7.add(last_page0001_png_1_1_1_2);

        // page6
        const page6 = this.add.container(0, -2);
        page6.visible = false;

        // page4_png
        const page4_png = this.add.image(780, 447, "furniture", "page4.png");
        page6.add(page4_png);

        // buyButton_23
        const buyButton_23 = new BuyButton(this, 547, 268);
        page6.add(buyButton_23);

        // buyButton_24
        const buyButton_24 = new BuyButton(this, 324, 607);
        page6.add(buyButton_24);

        // buyButton_27
        const buyButton_27 = new BuyButton(this, 1128, 349);
        page6.add(buyButton_27);

        // buyButton_28
        const buyButton_28 = new BuyButton(this, 1154, 638);
        buyButton_28.scaleX = 0.8163092426869883;
        buyButton_28.scaleY = 0.8163092426869883;
        page6.add(buyButton_28);

        // buyButton_28_1
        const buyButton_28_1 = new BuyButton(this, 1087, 183);
        buyButton_28_1.scaleX = 0.8163092426869883;
        buyButton_28_1.scaleY = 0.8163092426869883;
        page6.add(buyButton_28_1);

        // last_page0001_png_1_1_1
        const last_page0001_png_1_1_1 = this.add.image(271, 700, "Sep2005", "last-page0001.png");
        page6.add(last_page0001_png_1_1_1);

        // exit0001_png_1_1_1_1
        const exit0001_png_1_1_1_1 = this.add.image(1303, 94, "Sep2005", "exit0001.png");
        page6.add(exit0001_png_1_1_1_1);

        // next_page0001_png_1_1_1_1
        const next_page0001_png_1_1_1_1 = this.add.image(1288, 700, "Sep2005", "next-page0001.png");
        page6.add(next_page0001_png_1_1_1_1);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // page3_png
        const page3_png = this.add.image(615, 394, "furniture", "page3.png");
        page5.add(page3_png);

        // buyButton_15
        const buyButton_15 = new BuyButton(this, 264, 579);
        page5.add(buyButton_15);

        // buyButton_16
        const buyButton_16 = new BuyButton(this, 551, 676);
        buyButton_16.scaleX = 0.8492537964378466;
        buyButton_16.scaleY = 0.8492537964378466;
        page5.add(buyButton_16);

        // buyButton_18
        const buyButton_18 = new BuyButton(this, 874, 432);
        page5.add(buyButton_18);

        // buyButton_16_1
        const buyButton_16_1 = new BuyButton(this, 553, 377);
        buyButton_16_1.scaleX = 0.8492537964378466;
        buyButton_16_1.scaleY = 0.8492537964378466;
        page5.add(buyButton_16_1);

        // buyButton_16_1_1
        const buyButton_16_1_1 = new BuyButton(this, 1056, 675);
        buyButton_16_1_1.scaleX = 0.8492537964378466;
        buyButton_16_1_1.scaleY = 0.8492537964378466;
        page5.add(buyButton_16_1_1);

        // buyButton_16_1_2
        const buyButton_16_1_2 = new BuyButton(this, 1155, 448);
        buyButton_16_1_2.scaleX = 0.8492537964378466;
        buyButton_16_1_2.scaleY = 0.8492537964378466;
        page5.add(buyButton_16_1_2);

        // next_page0001_png_1_1_1_1_1
        const next_page0001_png_1_1_1_1_1 = this.add.image(1286, 694, "Sep2005", "next-page0001.png");
        page5.add(next_page0001_png_1_1_1_1_1);

        // exit0001_png_1_1_1_1_1
        const exit0001_png_1_1_1_1_1 = this.add.image(1303, 94, "Sep2005", "exit0001.png");
        page5.add(exit0001_png_1_1_1_1_1);

        // last_page0001_png_1_1_1_1
        const last_page0001_png_1_1_1_1 = this.add.image(271, 695, "Sep2005", "last-page0001.png");
        page5.add(last_page0001_png_1_1_1_1);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // page2_png
        const page2_png = this.add.image(615, 394, "furniture", "page2.png");
        page4.add(page2_png);

        // buyButton_10
        const buyButton_10 = new BuyButton(this, 280, 264);
        page4.add(buyButton_10);

        // buyButton_11
        const buyButton_11 = new BuyButton(this, 541, 488);
        page4.add(buyButton_11);

        // buyButton_12
        const buyButton_12 = new BuyButton(this, 1065, 179);
        buyButton_12.scaleX = 0.864365405564014;
        buyButton_12.scaleY = 0.864365405564014;
        page4.add(buyButton_12);

        // buyButton_14
        const buyButton_14 = new BuyButton(this, 1129, 588);
        page4.add(buyButton_14);

        // buyButton_12_1
        const buyButton_12_1 = new BuyButton(this, 857, 454);
        buyButton_12_1.scaleX = 0.864365405564014;
        buyButton_12_1.scaleY = 0.864365405564014;
        page4.add(buyButton_12_1);

        // next_page0001_png_1_1_1
        const next_page0001_png_1_1_1 = this.add.image(1285, 694, "Sep2005", "next-page0001.png");
        page4.add(next_page0001_png_1_1_1);

        // exit0001_png_1_1_1
        const exit0001_png_1_1_1 = this.add.image(1303, 94, "Sep2005", "exit0001.png");
        page4.add(exit0001_png_1_1_1);

        // last_page0001_png_1_1
        const last_page0001_png_1_1 = this.add.image(269, 695, "Sep2005", "last-page0001.png");
        page4.add(last_page0001_png_1_1);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // hgf_png
        const hgf_png = this.add.image(615, 394, "pink", "hgf.png");
        page3.add(hgf_png);

        // buyButton_5
        const buyButton_5 = new BuyButton(this, 519, 259);
        buyButton_5.scaleX = 0.8485573892810738;
        buyButton_5.scaleY = 0.8485573892810738;
        page3.add(buyButton_5);

        // buyButton_6
        const buyButton_6 = new BuyButton(this, 886, 605);
        page3.add(buyButton_6);

        // buyButton_8
        const buyButton_8 = new BuyButton(this, 1098, 332);
        page3.add(buyButton_8);

        // buyButton_5_1
        const buyButton_5_1 = new BuyButton(this, 549, 461);
        buyButton_5_1.scaleX = 0.8485573892810738;
        buyButton_5_1.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_1);

        // buyButton_5_1_1
        const buyButton_5_1_1 = new BuyButton(this, 413, 624);
        buyButton_5_1_1.scaleX = 0.8485573892810738;
        buyButton_5_1_1.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_1_1);

        // buyButton_5_2
        const buyButton_5_2 = new BuyButton(this, 838, 131);
        buyButton_5_2.scaleX = 0.8485573892810738;
        buyButton_5_2.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_2);

        // last_page0001_png_1
        const last_page0001_png_1 = this.add.image(271, 699, "Sep2005", "last-page0001.png");
        page3.add(last_page0001_png_1);

        // exit0001_png_1_1
        const exit0001_png_1_1 = this.add.image(1304, 93, "Sep2005", "exit0001.png");
        page3.add(exit0001_png_1_1);

        // next_page0001_png_1_1
        const next_page0001_png_1_1 = this.add.image(1287, 698, "Sep2005", "next-page0001.png");
        page3.add(next_page0001_png_1_1);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // page1_png
        const page1_png = this.add.image(772, 442, "furniture", "page1.png");
        page2.add(page1_png);

        // buyButton
        const buyButton = new BuyButton(this, 559, 353);
        page2.add(buyButton);

        // buyButton_1
        const buyButton_1 = new BuyButton(this, 271, 608);
        page2.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(this, 1040, 148);
        page2.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(this, 881, 407);
        page2.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(this, 1083, 590);
        page2.add(buyButton_4);

        // next_page0001_png_1
        const next_page0001_png_1 = this.add.image(1280, 694, "Sep2005", "next-page0001.png");
        page2.add(next_page0001_png_1);

        // exit0001_png_1
        const exit0001_png_1 = this.add.image(1303, 94, "Sep2005", "exit0001.png");
        page2.add(exit0001_png_1);

        // last_page0001_png
        const last_page0001_png = this.add.image(263, 695, "Sep2005", "last-page0001.png");
        page2.add(last_page0001_png);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // frontpage_png
        const frontpage_png = this.add.image(469, 44, "furniture", "frontpage.png");
        frontpage_png.setOrigin(0, 0);
        page1.add(frontpage_png);

        // next_page0001_png
        const next_page0001_png = this.add.image(978, 691, "Sep2005", "next-page0001.png");
        page1.add(next_page0001_png);

        // exit0001_png
        const exit0001_png = this.add.image(996, 86, "Sep2005", "exit0001.png");
        page1.add(exit0001_png);

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
        const pages = [page1, page2, page3, page4, page5, page6, page7, page8];

        // block (components)
        new Interactive(block);

        // exit0001_png_1_1_1_1_2_1 (components)
        const exit0001_png_1_1_1_1_2_1Button = new Button(exit0001_png_1_1_1_1_2_1);
        exit0001_png_1_1_1_1_2_1Button.spriteName = "exit0001.png";
        exit0001_png_1_1_1_1_2_1Button.callback = () => this.close();
        exit0001_png_1_1_1_1_2_1Button.pixelPerfect = true;

        // last_page0001_png_1_1_1_2_1 (components)
        const last_page0001_png_1_1_1_2_1Button = new Button(last_page0001_png_1_1_1_2_1);
        last_page0001_png_1_1_1_2_1Button.spriteName = "last-page0001.png";
        last_page0001_png_1_1_1_2_1Button.callback = () => this.prevPage();
        last_page0001_png_1_1_1_2_1Button.pixelPerfect = true;

        // buyButton_30_1 (prefab fields)
        buyButton_30_1.item = 107;

        // buyButton_30_1_1 (prefab fields)
        buyButton_30_1_1.item = 108;

        // buyButton_30 (prefab fields)
        buyButton_30.item = 110;

        // buyButton_31 (prefab fields)
        buyButton_31.item = 114;

        // buyButton_34 (prefab fields)
        buyButton_34.item = 113;

        // buyButton_34_1 (prefab fields)
        buyButton_34_1.item = 112;

        // buyButton_34_1_1 (prefab fields)
        buyButton_34_1_1.item = 111;

        // next_page0001_png_1_1_1_1_2 (components)
        const next_page0001_png_1_1_1_1_2Button = new Button(next_page0001_png_1_1_1_1_2);
        next_page0001_png_1_1_1_1_2Button.spriteName = "next-page0001.png";
        next_page0001_png_1_1_1_1_2Button.callback = () => this.nextPage();
        next_page0001_png_1_1_1_1_2Button.pixelPerfect = true;

        // exit0001_png_1_1_1_1_2 (components)
        const exit0001_png_1_1_1_1_2Button = new Button(exit0001_png_1_1_1_1_2);
        exit0001_png_1_1_1_1_2Button.spriteName = "exit0001.png";
        exit0001_png_1_1_1_1_2Button.callback = () => this.close();
        exit0001_png_1_1_1_1_2Button.pixelPerfect = true;

        // last_page0001_png_1_1_1_2 (components)
        const last_page0001_png_1_1_1_2Button = new Button(last_page0001_png_1_1_1_2);
        last_page0001_png_1_1_1_2Button.spriteName = "last-page0001.png";
        last_page0001_png_1_1_1_2Button.callback = () => this.prevPage();
        last_page0001_png_1_1_1_2Button.pixelPerfect = true;

        // buyButton_23 (prefab fields)
        buyButton_23.item = 100;

        // buyButton_24 (prefab fields)
        buyButton_24.item = 106;

        // buyButton_27 (prefab fields)
        buyButton_27.item = 103;

        // buyButton_28 (prefab fields)
        buyButton_28.item = 104;

        // buyButton_28_1 (prefab fields)
        buyButton_28_1.item = 101;

        // last_page0001_png_1_1_1 (components)
        const last_page0001_png_1_1_1Button = new Button(last_page0001_png_1_1_1);
        last_page0001_png_1_1_1Button.spriteName = "last-page0001.png";
        last_page0001_png_1_1_1Button.callback = () => this.prevPage();
        last_page0001_png_1_1_1Button.pixelPerfect = true;

        // exit0001_png_1_1_1_1 (components)
        const exit0001_png_1_1_1_1Button = new Button(exit0001_png_1_1_1_1);
        exit0001_png_1_1_1_1Button.spriteName = "exit0001.png";
        exit0001_png_1_1_1_1Button.callback = () => this.close();
        exit0001_png_1_1_1_1Button.pixelPerfect = true;

        // next_page0001_png_1_1_1_1 (components)
        const next_page0001_png_1_1_1_1Button = new Button(next_page0001_png_1_1_1_1);
        next_page0001_png_1_1_1_1Button.spriteName = "next-page0001.png";
        next_page0001_png_1_1_1_1Button.callback = () => this.nextPage();
        next_page0001_png_1_1_1_1Button.pixelPerfect = true;

        // buyButton_15 (prefab fields)
        buyButton_15.item = 31;

        // buyButton_16 (prefab fields)
        buyButton_16.item = 33;

        // buyButton_18 (prefab fields)
        buyButton_18.item = 109;

        // buyButton_16_1 (prefab fields)
        buyButton_16_1.item = 32;

        // buyButton_16_1_1 (prefab fields)
        buyButton_16_1_1.item = 105;

        // buyButton_16_1_2 (prefab fields)
        buyButton_16_1_2.item = 102;

        // next_page0001_png_1_1_1_1_1 (components)
        const next_page0001_png_1_1_1_1_1Button = new Button(next_page0001_png_1_1_1_1_1);
        next_page0001_png_1_1_1_1_1Button.spriteName = "next-page0001.png";
        next_page0001_png_1_1_1_1_1Button.callback = () => this.nextPage();
        next_page0001_png_1_1_1_1_1Button.pixelPerfect = true;

        // exit0001_png_1_1_1_1_1 (components)
        const exit0001_png_1_1_1_1_1Button = new Button(exit0001_png_1_1_1_1_1);
        exit0001_png_1_1_1_1_1Button.spriteName = "exit0001.png";
        exit0001_png_1_1_1_1_1Button.callback = () => this.close();
        exit0001_png_1_1_1_1_1Button.pixelPerfect = true;

        // last_page0001_png_1_1_1_1 (components)
        const last_page0001_png_1_1_1_1Button = new Button(last_page0001_png_1_1_1_1);
        last_page0001_png_1_1_1_1Button.spriteName = "last-page0001.png";
        last_page0001_png_1_1_1_1Button.callback = () => this.prevPage();
        last_page0001_png_1_1_1_1Button.pixelPerfect = true;

        // buyButton_10 (prefab fields)
        buyButton_10.item = 22;

        // buyButton_11 (prefab fields)
        buyButton_11.item = 25;

        // buyButton_12 (prefab fields)
        buyButton_12.item = 23;

        // buyButton_14 (prefab fields)
        buyButton_14.item = 24;

        // buyButton_12_1 (prefab fields)
        buyButton_12_1.item = 21;

        // next_page0001_png_1_1_1 (components)
        const next_page0001_png_1_1_1Button = new Button(next_page0001_png_1_1_1);
        next_page0001_png_1_1_1Button.spriteName = "next-page0001.png";
        next_page0001_png_1_1_1Button.callback = () => this.nextPage();
        next_page0001_png_1_1_1Button.pixelPerfect = true;

        // exit0001_png_1_1_1 (components)
        const exit0001_png_1_1_1Button = new Button(exit0001_png_1_1_1);
        exit0001_png_1_1_1Button.spriteName = "exit0001.png";
        exit0001_png_1_1_1Button.callback = () => this.close();
        exit0001_png_1_1_1Button.pixelPerfect = true;

        // last_page0001_png_1_1 (components)
        const last_page0001_png_1_1Button = new Button(last_page0001_png_1_1);
        last_page0001_png_1_1Button.spriteName = "last-page0001.png";
        last_page0001_png_1_1Button.callback = () => this.prevPage();
        last_page0001_png_1_1Button.pixelPerfect = true;

        // buyButton_5 (prefab fields)
        buyButton_5.item = 1;

        // buyButton_6 (prefab fields)
        buyButton_6.item = 5;

        // buyButton_8 (prefab fields)
        buyButton_8.item = 4;

        // buyButton_5_1 (prefab fields)
        buyButton_5_1.item = 6;

        // buyButton_5_1_1 (prefab fields)
        buyButton_5_1_1.item = 2;

        // buyButton_5_2 (prefab fields)
        buyButton_5_2.item = 3;

        // last_page0001_png_1 (components)
        const last_page0001_png_1Button = new Button(last_page0001_png_1);
        last_page0001_png_1Button.spriteName = "last-page0001.png";
        last_page0001_png_1Button.callback = () => this.prevPage();
        last_page0001_png_1Button.pixelPerfect = true;

        // exit0001_png_1_1 (components)
        const exit0001_png_1_1Button = new Button(exit0001_png_1_1);
        exit0001_png_1_1Button.spriteName = "exit0001.png";
        exit0001_png_1_1Button.callback = () => this.close();
        exit0001_png_1_1Button.pixelPerfect = true;

        // next_page0001_png_1_1 (components)
        const next_page0001_png_1_1Button = new Button(next_page0001_png_1_1);
        next_page0001_png_1_1Button.spriteName = "next-page0001.png";
        next_page0001_png_1_1Button.callback = () => this.nextPage();
        next_page0001_png_1_1Button.pixelPerfect = true;

        // buyButton (prefab fields)
        buyButton.item = 11;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 10;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 12;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 14;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 13;

        // next_page0001_png_1 (components)
        const next_page0001_png_1Button = new Button(next_page0001_png_1);
        next_page0001_png_1Button.spriteName = "next-page0001.png";
        next_page0001_png_1Button.callback = () => this.nextPage();
        next_page0001_png_1Button.pixelPerfect = true;

        // exit0001_png_1 (components)
        const exit0001_png_1Button = new Button(exit0001_png_1);
        exit0001_png_1Button.spriteName = "exit0001.png";
        exit0001_png_1Button.callback = () => this.close();
        exit0001_png_1Button.pixelPerfect = true;

        // last_page0001_png (components)
        const last_page0001_pngButton = new Button(last_page0001_png);
        last_page0001_pngButton.spriteName = "last-page0001.png";
        last_page0001_pngButton.callback = () => this.prevPage();
        last_page0001_pngButton.pixelPerfect = true;

        // next_page0001_png (components)
        const next_page0001_pngButton = new Button(next_page0001_png);
        next_page0001_pngButton.spriteName = "next-page0001.png";
        next_page0001_pngButton.callback = () => this.nextPage();
        next_page0001_pngButton.pixelPerfect = true;

        // exit0001_png (components)
        const exit0001_pngButton = new Button(exit0001_png);
        exit0001_pngButton.spriteName = "exit0001.png";
        exit0001_pngButton.callback = () => this.close();
        exit0001_pngButton.pixelPerfect = true;

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
