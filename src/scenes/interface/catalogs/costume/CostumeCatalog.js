import { Button, Interactive, SimpleButton } from '@components/components'

import Book from '@scenes/interface/books/Book'

/* START OF COMPILED CODE */

export default class CostumeCatalog extends Book {

    constructor() {
        super("CostumeCatalog");

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
        this.load.pack("costume-pack", "assets/media/interface/catalogs/costume/costume-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page6
        const page6 = this.add.container(14, 19);
        page6.visible = false;

        // page_6_fin
        const page_6_fin = this.add.image(765, 432, "costume", "page_6_fin");
        page6.add(page_6_fin);

        // close_left_16
        const close_left_16 = this.add.image(486, 38, "clothingcatalog", "close_left");
        close_left_16.setOrigin(0, 0);
        page6.add(close_left_16);

        // page_left_16
        const page_left_16 = this.add.image(485, 588, "clothingcatalog", "page_left");
        page_left_16.setOrigin(0, 0);
        page6.add(page_left_16);

        // page5
        const page5 = this.add.container(16, 19);
        page5.visible = false;

        // page_5_fin
        const page_5_fin = this.add.image(765, 432, "costume", "page_5_fin");
        page5.add(page_5_fin);

        // buy_director
        const buy_director = this.add.image(360, 271, "Sep2005", "small-buy0001.png");
        page5.add(buy_director);

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

        // bg
        const bg = this.add.image(468, 619, "costume", "bg");
        page5.add(bg);

        // bg_purch
        const bg_purch = this.add.image(468, 619, "costume", "bg_purch");
        bg_purch.scaleX = 0.6514250751313656;
        bg_purch.scaleY = 0.6514250751313656;
        page5.add(bg_purch);

        // shadow
        const shadow = this.add.image(468, 619, "costume", "shadow");
        page5.add(shadow);

        // page4
        const page4 = this.add.container(14, 19);
        page4.visible = false;

        // page_4_fin
        const page_4_fin = this.add.image(765, 432, "costume", "page_4_fin");
        page4.add(page_4_fin);

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

        // buy_btrack
        const buy_btrack = this.add.image(268, 652, "clothingcatalog", "buy1");
        buy_btrack.angle = -28;
        buy_btrack.setOrigin(0, 0);
        page4.add(buy_btrack);

        // buy_redcheer
        const buy_redcheer = this.add.image(955, 369, "clothingcatalog", "buy2");
        buy_redcheer.angle = 12;
        buy_redcheer.setOrigin(0, 0);
        page4.add(buy_redcheer);

        // buy_rtrack
        const buy_rtrack = this.add.image(858, 606, "clothingcatalog", "buy1");
        buy_rtrack.angle = -12;
        buy_rtrack.setOrigin(0, 0);
        page4.add(buy_rtrack);

        // buy_bluecheer
        const buy_bluecheer = this.add.image(616, 224, "clothingcatalog", "buy2");
        buy_bluecheer.angle = -45.00000000000006;
        buy_bluecheer.setOrigin(0, 0);
        page4.add(buy_bluecheer);

        // buy_bpom
        const buy_bpom = this.add.image(273, 166, "clothingcatalog", "buy1");
        buy_bpom.angle = 44;
        buy_bpom.setOrigin(0, 0);
        page4.add(buy_bpom);

        // buy_redpom
        const buy_redpom = this.add.image(1000, 97, "clothingcatalog", "buy2");
        buy_redpom.angle = 36;
        buy_redpom.setOrigin(0, 0);
        page4.add(buy_redpom);

        // sec-dball
        const sec_dball = this.add.ellipse(1141, 643, 128, 128);
        sec_dball.scaleX = 0.3423781066406252;
        sec_dball.scaleY = 0.3011570029001281;
        sec_dball.isFilled = true;
        sec_dball.fillAlpha = 0;
        page4.add(sec_dball);

        // page3
        const page3 = this.add.container(14, 19);
        page3.visible = false;

        // page_3_fin
        const page_3_fin = this.add.image(765, 432, "costume", "page_3_fin");
        page3.add(page_3_fin);

        // coin_3
        const coin_3 = this.add.image(679, 256, "jul22-sport", "coin");
        page3.add(coin_3);

        // buy_moose
        const buy_moose = this.add.image(880, 221, "Sep2005", "small-buy0001.png");
        page3.add(buy_moose);

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

        // page_2_fin
        const page_2_fin = this.add.image(765, 432, "costume", "page_2_fin");
        page2.add(page_2_fin);

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

        // buy_ref
        const buy_ref = this.add.image(279, 217, "clothingcatalog", "buy1");
        buy_ref.angle = 23;
        buy_ref.setOrigin(0, 0);
        page2.add(buy_ref);

        // buy_whistle
        const buy_whistle = this.add.image(618, 203, "clothingcatalog", "buy2");
        buy_whistle.angle = -18;
        buy_whistle.setOrigin(0, 0);
        page2.add(buy_whistle);

        // page1
        const page1 = this.add.container(13, 19);
        page1.visible = false;

        // page_1_fin
        const page_1_fin = this.add.image(765, 432, "costume", "page_1_fin");
        page1.add(page_1_fin);

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
        const pages = [page1, page2, page3, page4, page5, page6];

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

        // buy_director (components)
        const buy_directorButton = new Button(buy_director);
        buy_directorButton.spriteName = "small-buy0001.png";
        buy_directorButton.callback = () => this.interface.prompt.showItem(489);

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

        // bg (components)
        const bgButton = new Button(bg);
        bgButton.spriteName = "bg";
        bgButton.callback = () => this.interface.prompt.showItem(998);
        bgButton.activeFrame = false;

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

        // buy_btrack (components)
        const buy_btrackButton = new Button(buy_btrack);
        buy_btrackButton.spriteName = "buy1";
        buy_btrackButton.callback = () => this.interface.prompt.showItem(771);

        // buy_redcheer (components)
        const buy_redcheerButton = new Button(buy_redcheer);
        buy_redcheerButton.spriteName = "buy2";
        buy_redcheerButton.callback = () => this.interface.prompt.showItem(4003);

        // buy_rtrack (components)
        const buy_rtrackButton = new Button(buy_rtrack);
        buy_rtrackButton.spriteName = "buy1";
        buy_rtrackButton.callback = () => this.interface.prompt.showItem(4004);

        // buy_bluecheer (components)
        const buy_bluecheerButton = new Button(buy_bluecheer);
        buy_bluecheerButton.spriteName = "buy2";
        buy_bluecheerButton.callback = () => this.interface.prompt.showItem(4002);

        // buy_bpom (components)
        const buy_bpomButton = new Button(buy_bpom);
        buy_bpomButton.spriteName = "buy1";
        buy_bpomButton.callback = () => this.interface.prompt.showItem(333);

        // buy_redpom (components)
        const buy_redpomButton = new Button(buy_redpom);
        buy_redpomButton.spriteName = "buy2";
        buy_redpomButton.callback = () => this.interface.prompt.showItem(330);

        // sec_dball (components)
        const sec_dballSimpleButton = new SimpleButton(sec_dball);
        sec_dballSimpleButton.callback = () => this.interface.prompt.showItem(617);

        // buy_moose (components)
        const buy_mooseButton = new Button(buy_moose);
        buy_mooseButton.spriteName = "small-buy0001.png";
        buy_mooseButton.callback = () => this.interface.prompt.showItem(479);

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

        // buy_ref (components)
        const buy_refButton = new Button(buy_ref);
        buy_refButton.spriteName = "buy1";
        buy_refButton.callback = () => this.interface.prompt.showItem(722);

        // buy_whistle (components)
        const buy_whistleButton = new Button(buy_whistle);
        buy_whistleButton.spriteName = "buy2";
        buy_whistleButton.callback = () => this.interface.prompt.showItem(3002);

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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
