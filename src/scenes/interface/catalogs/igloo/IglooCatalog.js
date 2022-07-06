import { Button, Interactive } from '@components/components'

import Book from '@scenes/interface/books/Book'
import FloorButton from './buttons/FloorButton'
import UpgradeButton from './buttons/UpgradeButton'


/* START OF COMPILED CODE */

export default class IglooCatalog extends Book {

    constructor() {
        super("IglooCatalog");

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

        this.load.pack("clothingcatalog-pack", "assets/media/interface/catalogs/clothing/clothingcatalog-pack.json");
        this.load.pack("igloocatalog-pack", "assets/media/interface/catalogs/igloo/igloocatalog-pack.json");
        this.load.pack("sep05-pack", "assets/media/interface/catalogs/clothing/sep05-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page7
        const page7 = this.add.container(0, 0);
        page7.visible = false;

        // page_7_fin
        const page_7_fin = this.add.image(775, 432, "igloojul22", "page_7_fin");
        page7.add(page_7_fin);

        // close_left_111111
        const close_left_111111 = this.add.image(494, 36, "clothingcatalog", "close_left");
        close_left_111111.setOrigin(0, 0);
        page7.add(close_left_111111);

        // page_left_1_11111
        const page_left_1_11111 = this.add.image(492, 584, "clothingcatalog", "page_left");
        page_left_1_11111.setOrigin(0, 0);
        page7.add(page_left_1_11111);

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // page_6_fin
        const page_6_fin = this.add.image(765, 432, "igloojul22", "page_6_fin");
        page6.add(page_6_fin);

        // upgradeButton_21111111
        const upgradeButton_21111111 = new UpgradeButton(this, 287, 540);
        page6.add(upgradeButton_21111111);

        // upgradeButton_2_111111
        const upgradeButton_2_111111 = new UpgradeButton(this, 859, 541);
        page6.add(upgradeButton_2_111111);

        // close_left_11111
        const close_left_11111 = this.add.image(196, 36, "clothingcatalog", "close_left");
        close_left_11111.setOrigin(0, 0);
        page6.add(close_left_11111);

        // page_right_4_11111
        const page_right_4_11111 = this.add.image(1208, 585, "clothingcatalog", "page_right");
        page_right_4_11111.setOrigin(0, 0);
        page6.add(page_right_4_11111);

        // close_right_4_21111
        const close_right_4_21111 = this.add.image(1207, 36, "clothingcatalog", "close_right");
        close_right_4_21111.setOrigin(0, 0);
        page6.add(close_right_4_21111);

        // page_left_1_1111
        const page_left_1_1111 = this.add.image(194, 584, "clothingcatalog", "page_left");
        page_left_1_1111.setOrigin(0, 0);
        page6.add(page_left_1_1111);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // page_4_fin
        const page_4_fin = this.add.image(765, 432, "igloojul22", "page_4_fin");
        page5.add(page_4_fin);

        // upgradeButton_211
        const upgradeButton_211 = new UpgradeButton(this, 299, 553);
        page5.add(upgradeButton_211);

        // upgradeButton_2_111
        const upgradeButton_2_111 = new UpgradeButton(this, 875, 542);
        page5.add(upgradeButton_2_111);

        // close_left_111
        const close_left_111 = this.add.image(196, 36, "clothingcatalog", "close_left");
        close_left_111.setOrigin(0, 0);
        page5.add(close_left_111);

        // page_right_4_111
        const page_right_4_111 = this.add.image(1208, 585, "clothingcatalog", "page_right");
        page_right_4_111.setOrigin(0, 0);
        page5.add(page_right_4_111);

        // close_right_4_211
        const close_right_4_211 = this.add.image(1207, 36, "clothingcatalog", "close_right");
        close_right_4_211.setOrigin(0, 0);
        page5.add(close_right_4_211);

        // page_left_1_111
        const page_left_1_111 = this.add.image(194, 584, "clothingcatalog", "page_left");
        page_left_1_111.setOrigin(0, 0);
        page5.add(page_left_1_111);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // page_5_fin
        const page_5_fin = this.add.image(765, 432, "igloojul22", "page_5_fin");
        page4.add(page_5_fin);

        // upgradeButton_21
        const upgradeButton_21 = new UpgradeButton(this, 299, 553);
        page4.add(upgradeButton_21);

        // upgradeButton_2_11
        const upgradeButton_2_11 = new UpgradeButton(this, 875, 542);
        page4.add(upgradeButton_2_11);

        // close_left_11
        const close_left_11 = this.add.image(196, 36, "clothingcatalog", "close_left");
        close_left_11.setOrigin(0, 0);
        page4.add(close_left_11);

        // page_right_4_11
        const page_right_4_11 = this.add.image(1208, 585, "clothingcatalog", "page_right");
        page_right_4_11.setOrigin(0, 0);
        page4.add(page_right_4_11);

        // close_right_4_21
        const close_right_4_21 = this.add.image(1207, 36, "clothingcatalog", "close_right");
        close_right_4_21.setOrigin(0, 0);
        page4.add(close_right_4_21);

        // page_left_1_11
        const page_left_1_11 = this.add.image(194, 584, "clothingcatalog", "page_left");
        page_left_1_11.setOrigin(0, 0);
        page4.add(page_left_1_11);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // upgradeButton_2
        const upgradeButton_2 = new UpgradeButton(this, 584, 526);
        page3.add(upgradeButton_2);

        // page_3_fin
        const page_3_fin = this.add.image(765, 432, "igloojul22", "page_3_fin");
        page3.add(page_3_fin);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_1
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_1 = this.add.image(573, 368, "Sep2005", "small-buy0001.png");
        page3.add(small_buy0001_png_1_2_2_2_2_1_1_1_1_1);

        // small_buy0001_png_1_2_2_2_2_1_1_1_2
        const small_buy0001_png_1_2_2_2_2_1_1_1_2 = this.add.image(565, 544, "Sep2005", "small-buy0001.png");
        page3.add(small_buy0001_png_1_2_2_2_2_1_1_1_2);

        // small_buy0001_png_1_2_2_2_2_1_1_2
        const small_buy0001_png_1_2_2_2_2_1_1_2 = this.add.image(911, 694, "Sep2005", "small-buy0001.png");
        small_buy0001_png_1_2_2_2_2_1_1_2.scaleX = 1.3328786018674257;
        small_buy0001_png_1_2_2_2_2_1_1_2.scaleY = 1.3328786018674257;
        page3.add(small_buy0001_png_1_2_2_2_2_1_1_2);

        // small_buy0001_png_1_2_2_2_2_1_2
        const small_buy0001_png_1_2_2_2_2_1_2 = this.add.image(572, 712, "Sep2005", "small-buy0001.png");
        page3.add(small_buy0001_png_1_2_2_2_2_1_2);

        // small_buy0001_png_1_2_2_2_2_2
        const small_buy0001_png_1_2_2_2_2_2 = this.add.image(562, 204, "Sep2005", "small-buy0001.png");
        page3.add(small_buy0001_png_1_2_2_2_2_2);

        // close_left_1
        const close_left_1 = this.add.image(196, 36, "clothingcatalog", "close_left");
        close_left_1.setOrigin(0, 0);
        page3.add(close_left_1);

        // page_right_4_1
        const page_right_4_1 = this.add.image(1208, 585, "clothingcatalog", "page_right");
        page_right_4_1.setOrigin(0, 0);
        page3.add(page_right_4_1);

        // close_right_4_2
        const close_right_4_2 = this.add.image(1207, 36, "clothingcatalog", "close_right");
        close_right_4_2.setOrigin(0, 0);
        page3.add(close_right_4_2);

        // page_left_1_1
        const page_left_1_1 = this.add.image(194, 584, "clothingcatalog", "page_left");
        page_left_1_1.setOrigin(0, 0);
        page3.add(page_left_1_1);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // page_2_fin
        const page_2_fin = this.add.image(765, 432, "igloojul22", "page_2_fin");
        page2.add(page_2_fin);

        // small_buy0001_png_1_2_2_2_2
        const small_buy0001_png_1_2_2_2_2 = this.add.image(585, 478, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_2_2_2);

        // small_buy0001_png_1_2_2_2_2_1
        const small_buy0001_png_1_2_2_2_2_1 = this.add.image(587, 685, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_2_2_2_1);

        // small_buy0001_png_1_2_2_2_2_1_1
        const small_buy0001_png_1_2_2_2_2_1_1 = this.add.image(1147, 705, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_2_2_2_1_1);

        // small_buy0001_png_1_2_2_2_2_1_1_1
        const small_buy0001_png_1_2_2_2_2_1_1_1 = this.add.image(1147, 464, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_2_2_2_1_1_1);

        // small_buy0001_png_1_2_2_2_2_1_1_1_1
        const small_buy0001_png_1_2_2_2_2_1_1_1_1 = this.add.image(1145, 244, "Sep2005", "small-buy0001.png");
        page2.add(small_buy0001_png_1_2_2_2_2_1_1_1_1);

        // page_left_1
        const page_left_1 = this.add.image(194, 587, "clothingcatalog", "page_left");
        page_left_1.setOrigin(0, 0);
        page2.add(page_left_1);

        // close_right_4
        const close_right_4 = this.add.image(1207, 39, "clothingcatalog", "close_right");
        close_right_4.setOrigin(0, 0);
        page2.add(close_right_4);

        // page_right_4
        const page_right_4 = this.add.image(1208, 588, "clothingcatalog", "page_right");
        page_right_4.setOrigin(0, 0);
        page2.add(page_right_4);

        // close_left
        const close_left = this.add.image(196, 39, "clothingcatalog", "close_left");
        close_left.setOrigin(0, 0);
        page2.add(close_left);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // page_1_fin
        const page_1_fin = this.add.image(765, 432, "igloojul22", "page_1_fin");
        page1.add(page_1_fin);

        // next_page0001_png
        const next_page0001_png = this.add.image(979, 691, "Sep2005", "next-page0001.png");
        page1.add(next_page0001_png);

        // close_right_4_1
        const close_right_4_1 = this.add.image(918, 38, "clothingcatalog", "close_right");
        close_right_4_1.setOrigin(0, 0);
        page1.add(close_right_4_1);

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
        const pages = [page1, page2, page3, page4, page5, page6, page7];

        // block (components)
        new Interactive(block);

        // close_left_111111 (components)
        const close_left_111111Button = new Button(close_left_111111);
        close_left_111111Button.spriteName = "close_left";
        close_left_111111Button.callback = () => this.close();
        close_left_111111Button.activeFrame = false;

        // page_left_1_11111 (components)
        const page_left_1_11111Button = new Button(page_left_1_11111);
        page_left_1_11111Button.spriteName = "page_left";
        page_left_1_11111Button.callback = () => this.prevPage();
        page_left_1_11111Button.activeFrame = false;

        // upgradeButton_21111111 (prefab fields)
        upgradeButton_21111111.igloo = 3;

        // upgradeButton_2_111111 (prefab fields)
        upgradeButton_2_111111.igloo = 1;

        // close_left_11111 (components)
        const close_left_11111Button = new Button(close_left_11111);
        close_left_11111Button.spriteName = "close_left";
        close_left_11111Button.callback = () => this.close();
        close_left_11111Button.activeFrame = false;

        // page_right_4_11111 (components)
        const page_right_4_11111Button = new Button(page_right_4_11111);
        page_right_4_11111Button.spriteName = "page_right";
        page_right_4_11111Button.callback = () => this.nextPage();
        page_right_4_11111Button.activeFrame = false;

        // close_right_4_21111 (components)
        const close_right_4_21111Button = new Button(close_right_4_21111);
        close_right_4_21111Button.spriteName = "close_right";
        close_right_4_21111Button.callback = () => this.close();
        close_right_4_21111Button.activeFrame = false;

        // page_left_1_1111 (components)
        const page_left_1_1111Button = new Button(page_left_1_1111);
        page_left_1_1111Button.spriteName = "page_left";
        page_left_1_1111Button.callback = () => this.prevPage();
        page_left_1_1111Button.activeFrame = false;

        // upgradeButton_211 (prefab fields)
        upgradeButton_211.igloo = 10;

        // upgradeButton_2_111 (prefab fields)
        upgradeButton_2_111.igloo = 5;

        // close_left_111 (components)
        const close_left_111Button = new Button(close_left_111);
        close_left_111Button.spriteName = "close_left";
        close_left_111Button.callback = () => this.close();
        close_left_111Button.activeFrame = false;

        // page_right_4_111 (components)
        const page_right_4_111Button = new Button(page_right_4_111);
        page_right_4_111Button.spriteName = "page_right";
        page_right_4_111Button.callback = () => this.nextPage();
        page_right_4_111Button.activeFrame = false;

        // close_right_4_211 (components)
        const close_right_4_211Button = new Button(close_right_4_211);
        close_right_4_211Button.spriteName = "close_right";
        close_right_4_211Button.callback = () => this.close();
        close_right_4_211Button.activeFrame = false;

        // page_left_1_111 (components)
        const page_left_1_111Button = new Button(page_left_1_111);
        page_left_1_111Button.spriteName = "page_left";
        page_left_1_111Button.callback = () => this.prevPage();
        page_left_1_111Button.activeFrame = false;

        // upgradeButton_21 (prefab fields)
        upgradeButton_21.igloo = 11;

        // upgradeButton_2_11 (prefab fields)
        upgradeButton_2_11.igloo = 12;

        // close_left_11 (components)
        const close_left_11Button = new Button(close_left_11);
        close_left_11Button.spriteName = "close_left";
        close_left_11Button.callback = () => this.close();
        close_left_11Button.activeFrame = false;

        // page_right_4_11 (components)
        const page_right_4_11Button = new Button(page_right_4_11);
        page_right_4_11Button.spriteName = "page_right";
        page_right_4_11Button.callback = () => this.nextPage();
        page_right_4_11Button.activeFrame = false;

        // close_right_4_21 (components)
        const close_right_4_21Button = new Button(close_right_4_21);
        close_right_4_21Button.spriteName = "close_right";
        close_right_4_21Button.callback = () => this.close();
        close_right_4_21Button.activeFrame = false;

        // page_left_1_11 (components)
        const page_left_1_11Button = new Button(page_left_1_11);
        page_left_1_11Button.spriteName = "page_left";
        page_left_1_11Button.callback = () => this.prevPage();
        page_left_1_11Button.activeFrame = false;

        // upgradeButton_2 (prefab fields)
        upgradeButton_2.igloo = 1;

        // small_buy0001_png_1_2_2_2_2_1_1_1_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_1_1);
        small_buy0001_png_1_2_2_2_2_1_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_1_1Button.callback = () => this.unimplementedPrompt();

        // small_buy0001_png_1_2_2_2_2_1_1_1_2 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_2Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_2);
        small_buy0001_png_1_2_2_2_2_1_1_1_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_2Button.callback = () => this.unimplementedPrompt();

        // small_buy0001_png_1_2_2_2_2_1_1_2 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_2Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_2);
        small_buy0001_png_1_2_2_2_2_1_1_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_2Button.callback = () => this.unimplementedPrompt();

        // small_buy0001_png_1_2_2_2_2_1_2 (components)
        const small_buy0001_png_1_2_2_2_2_1_2Button = new Button(small_buy0001_png_1_2_2_2_2_1_2);
        small_buy0001_png_1_2_2_2_2_1_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_2Button.callback = () => this.unimplementedPrompt();

        // small_buy0001_png_1_2_2_2_2_2 (components)
        const small_buy0001_png_1_2_2_2_2_2Button = new Button(small_buy0001_png_1_2_2_2_2_2);
        small_buy0001_png_1_2_2_2_2_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_2Button.callback = () => this.unimplementedPrompt();

        // close_left_1 (components)
        const close_left_1Button = new Button(close_left_1);
        close_left_1Button.spriteName = "close_left";
        close_left_1Button.callback = () => this.close();
        close_left_1Button.activeFrame = false;

        // page_right_4_1 (components)
        const page_right_4_1Button = new Button(page_right_4_1);
        page_right_4_1Button.spriteName = "page_right";
        page_right_4_1Button.callback = () => this.nextPage();
        page_right_4_1Button.activeFrame = false;

        // close_right_4_2 (components)
        const close_right_4_2Button = new Button(close_right_4_2);
        close_right_4_2Button.spriteName = "close_right";
        close_right_4_2Button.callback = () => this.close();
        close_right_4_2Button.activeFrame = false;

        // page_left_1_1 (components)
        const page_left_1_1Button = new Button(page_left_1_1);
        page_left_1_1Button.spriteName = "page_left";
        page_left_1_1Button.callback = () => this.prevPage();
        page_left_1_1Button.activeFrame = false;

        // small_buy0001_png_1_2_2_2_2 (components)
        const small_buy0001_png_1_2_2_2_2Button = new Button(small_buy0001_png_1_2_2_2_2);
        small_buy0001_png_1_2_2_2_2Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2Button.callback = () => this.unimplementedPrompt();

        // small_buy0001_png_1_2_2_2_2_1 (components)
        const small_buy0001_png_1_2_2_2_2_1Button = new Button(small_buy0001_png_1_2_2_2_2_1);
        small_buy0001_png_1_2_2_2_2_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1Button.callback = () => this.unimplementedPrompt();

        // small_buy0001_png_1_2_2_2_2_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1);
        small_buy0001_png_1_2_2_2_2_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1Button.callback = () => this.unimplementedPrompt();

        // small_buy0001_png_1_2_2_2_2_1_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1);
        small_buy0001_png_1_2_2_2_2_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1Button.callback = () => this.unimplementedPrompt();

        // small_buy0001_png_1_2_2_2_2_1_1_1_1 (components)
        const small_buy0001_png_1_2_2_2_2_1_1_1_1Button = new Button(small_buy0001_png_1_2_2_2_2_1_1_1_1);
        small_buy0001_png_1_2_2_2_2_1_1_1_1Button.spriteName = "small-buy0001.png";
        small_buy0001_png_1_2_2_2_2_1_1_1_1Button.callback = () => this.unimplementedPrompt();

        // page_left_1 (components)
        const page_left_1Button = new Button(page_left_1);
        page_left_1Button.spriteName = "page_left";
        page_left_1Button.callback = () => this.prevPage();
        page_left_1Button.activeFrame = false;

        // close_right_4 (components)
        const close_right_4Button = new Button(close_right_4);
        close_right_4Button.spriteName = "close_right";
        close_right_4Button.callback = () => this.close();
        close_right_4Button.activeFrame = false;

        // page_right_4 (components)
        const page_right_4Button = new Button(page_right_4);
        page_right_4Button.spriteName = "page_right";
        page_right_4Button.callback = () => this.nextPage();
        page_right_4Button.activeFrame = false;

        // close_left (components)
        const close_leftButton = new Button(close_left);
        close_leftButton.spriteName = "close_left";
        close_leftButton.callback = () => this.close();
        close_leftButton.activeFrame = false;

        // next_page0001_png (components)
        const next_page0001_pngButton = new Button(next_page0001_png);
        next_page0001_pngButton.spriteName = "next-page0001.png";
        next_page0001_pngButton.callback = () => this.nextPage();
        next_page0001_pngButton.pixelPerfect = true;

        // close_right_4_1 (components)
        const close_right_4_1Button = new Button(close_right_4_1);
        close_right_4_1Button.spriteName = "close_right";
        close_right_4_1Button.callback = () => this.close();
        close_right_4_1Button.activeFrame = false;

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

    buyFloor(floor) {
        if (floor == this.world.room.args.flooring) {
            return this.interface.prompt.showError('You already have this flooring.')
        }

        this.showPrompt(floor, 'flooring', () => {
            this.network.send('update_flooring', { flooring: floor })
            this.interface.prompt.window.visible = false
            this.close()
        })
    }

    buyIgloo(igloo) {
        if (this.world.client.igloos.includes(igloo)) {
            return this.interface.prompt.showError('You already have this igloo.')
        }

        this.showPrompt(igloo, 'igloos', () => {
            this.network.send('add_igloo', { igloo: igloo })
            this.interface.prompt.window.visible = false
        })
    }

    showPrompt(id, type, callback) {
        let name = this.crumbs[type][id].name
        let cost = this.crumbs[type][id].cost

        let text = `Would you like to buy ${name}\n for ${cost} coins? You currently have ${this.world.client.coins} coins.`

        this.interface.prompt.showWindow(text, 'dual', callback, () => {
            this.interface.prompt.window.visible = false
        })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
