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

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // p4
        const p4 = this.add.image(755, 416, "furnjun22", "p4");
        p4.scaleX = 0.95;
        p4.scaleY = 0.95;
        page4.add(p4);

        // buyButton_6
        const buyButton_6 = new BuyButton(this, 791, 174);
        buyButton_6.scaleX = 0.8485573892810738;
        buyButton_6.scaleY = 0.8485573892810738;
        page4.add(buyButton_6);

        // buyButton_6_2
        const buyButton_6_2 = new BuyButton(this, 562, 632);
        buyButton_6_2.scaleX = 0.8485573892810738;
        buyButton_6_2.scaleY = 0.8485573892810738;
        page4.add(buyButton_6_2);

        // page_left_2
        const page_left_2 = this.add.image(492, 548, "furniturecatalog", "page_left");
        page_left_2.setOrigin(0, 0);
        page4.add(page_left_2);

        // close_left_1_2
        const close_left_1_2 = this.add.image(495, 33, "furniturecatalog", "close_left");
        close_left_1_2.setOrigin(0, 0);
        page4.add(close_left_1_2);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // p3
        const p3 = this.add.image(769, 416, "furnjun22", "p3");
        p3.scaleX = 0.92;
        p3.scaleY = 0.92;
        page3.add(p3);

        // buyButton_5
        const buyButton_5 = new BuyButton(this, 472, 180);
        buyButton_5.scaleX = 0.8485573892810738;
        buyButton_5.scaleY = 0.8485573892810738;
        page3.add(buyButton_5);

        // buyButton_8
        const buyButton_8 = new BuyButton(this, 1058, 389);
        page3.add(buyButton_8);

        // buyButton_5_1
        const buyButton_5_1 = new BuyButton(this, 541, 617);
        buyButton_5_1.scaleX = 0.8485573892810738;
        buyButton_5_1.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_1);

        // buyButton_5_1_1
        const buyButton_5_1_1 = new BuyButton(this, 304, 616);
        buyButton_5_1_1.scaleX = 0.8485573892810738;
        buyButton_5_1_1.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_1_1);

        // buyButton_5_2
        const buyButton_5_2 = new BuyButton(this, 1029, 169);
        buyButton_5_2.scaleX = 0.8485573892810738;
        buyButton_5_2.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_2);

        // page_left_1
        const page_left_1 = this.add.image(241, 535, "furniturecatalog", "page_left");
        page_left_1.setOrigin(0, 0);
        page3.add(page_left_1);

        // close_left_1_1
        const close_left_1_1 = this.add.image(241, 50, "furniturecatalog", "close_left");
        close_left_1_1.setOrigin(0, 0);
        page3.add(close_left_1_1);

        // page_right_1_1
        const page_right_1_1 = this.add.image(1159, 539, "furniturecatalog", "page_right");
        page_right_1_1.setOrigin(0, 0);
        page3.add(page_right_1_1);

        // close_right_1_1
        const close_right_1_1 = this.add.image(1161, 49, "furniturecatalog", "close_right");
        close_right_1_1.setOrigin(0, 0);
        page3.add(close_right_1_1);

        // buyButton_5_2_1
        const buyButton_5_2_1 = new BuyButton(this, 1029, 640);
        buyButton_5_2_1.scaleX = 0.8485573892810738;
        buyButton_5_2_1.scaleY = 0.8485573892810738;
        page3.add(buyButton_5_2_1);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // p2
        const p2 = this.add.image(769, 416, "furnjun22", "p2");
        p2.scaleX = 0.92;
        p2.scaleY = 0.92;
        page2.add(p2);

        // buyButton
        const buyButton = new BuyButton(this, 360, 171);
        page2.add(buyButton);

        // buyButton_1
        const buyButton_1 = new BuyButton(this, 352, 385);
        page2.add(buyButton_1);

        // buyButton_2
        const buyButton_2 = new BuyButton(this, 371, 638);
        page2.add(buyButton_2);

        // buyButton_3
        const buyButton_3 = new BuyButton(this, 900, 180);
        page2.add(buyButton_3);

        // buyButton_4
        const buyButton_4 = new BuyButton(this, 827, 588);
        page2.add(buyButton_4);

        // close_right_1
        const close_right_1 = this.add.image(1159, 51, "furniturecatalog", "close_right");
        close_right_1.setOrigin(0, 0);
        page2.add(close_right_1);

        // page_right_1
        const page_right_1 = this.add.image(1157, 541, "furniturecatalog", "page_right");
        page_right_1.setOrigin(0, 0);
        page2.add(page_right_1);

        // close_left_1
        const close_left_1 = this.add.image(239, 52, "furniturecatalog", "close_left");
        close_left_1.setOrigin(0, 0);
        page2.add(close_left_1);

        // page_left
        const page_left = this.add.image(239, 537, "furniturecatalog", "page_left");
        page_left.setOrigin(0, 0);
        page2.add(page_left);

        // buyButton_4_1
        const buyButton_4_1 = new BuyButton(this, 1069, 588);
        page2.add(buyButton_4_1);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // p1
        const p1 = this.add.image(755, 416, "furnjun22", "p1");
        p1.scaleX = 1.1;
        p1.scaleY = 1.1;
        page1.add(p1);

        // close_right
        const close_right = this.add.image(884, 73, "furniturecatalog", "close_right");
        close_right.setOrigin(0, 0);
        page1.add(close_right);

        // page_right
        const page_right = this.add.image(881, 523, "furniturecatalog", "page_right");
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
        const pages = [page1, page2, page3, page4];

        // block (components)
        new Interactive(block);

        // buyButton_6 (prefab fields)
        buyButton_6.item = 107;

        // buyButton_6_2 (prefab fields)
        buyButton_6_2.item = 108;

        // page_left_2 (components)
        const page_left_2Button = new Button(page_left_2);
        page_left_2Button.spriteName = "page_left";
        page_left_2Button.callback = () => this.prevPage();
        page_left_2Button.activeFrame = false;

        // close_left_1_2 (components)
        const close_left_1_2Button = new Button(close_left_1_2);
        close_left_1_2Button.spriteName = "close_left";
        close_left_1_2Button.callback = () => this.close();

        // buyButton_5 (prefab fields)
        buyButton_5.item = 71;

        // buyButton_8 (prefab fields)
        buyButton_8.item = 41;

        // buyButton_5_1 (prefab fields)
        buyButton_5_1.item = 109;

        // buyButton_5_1_1 (prefab fields)
        buyButton_5_1_1.item = 213;

        // buyButton_5_2 (prefab fields)
        buyButton_5_2.item = 43;

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
        buyButton_5_2_1.item = 33;

        // buyButton (prefab fields)
        buyButton.item = 166;

        // buyButton_1 (prefab fields)
        buyButton_1.item = 99;

        // buyButton_2 (prefab fields)
        buyButton_2.item = 251;

        // buyButton_3 (prefab fields)
        buyButton_3.item = 435;

        // buyButton_4 (prefab fields)
        buyButton_4.item = 169;

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
        buyButton_4_1.item = 176;

        // close_right (components)
        const close_rightButton = new Button(close_right);
        close_rightButton.spriteName = "close_right";
        close_rightButton.callback = () => this.close();

        // page_right (components)
        const page_rightButton = new Button(page_right);
        page_rightButton.spriteName = "page_right";
        page_rightButton.callback = () => this.nextPage();
        page_rightButton.activeFrame = false;

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
