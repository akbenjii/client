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

        this.load.pack("sep05-pack", "assets/media/interface/catalogs/clothing/sep05-pack.json");
        this.load.pack("igloocatalog-pack", "assets/media/interface/catalogs/igloo/igloocatalog-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // lastpage
        const lastpage = this.add.image(469, 44, "iglooupgrade", "lastpage");
        lastpage.setOrigin(0, 0);
        page3.add(lastpage);

        // upgradeButton_2
        const upgradeButton_2 = new UpgradeButton(this, 584, 526);
        page3.add(upgradeButton_2);

        // exit0001_png_1_1
        const exit0001_png_1_1 = this.add.image(997, 86, "Sep2005", "exit0001.png");
        page3.add(exit0001_png_1_1);

        // last_page0001_png_1
        const last_page0001_png_1 = this.add.image(545, 692, "Sep2005", "last-page0001.png");
        page3.add(last_page0001_png_1);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // page1_png
        const page1_png = this.add.image(760, 430, "iglooupgrade", "page1.png");
        page2.add(page1_png);

        // upgradeButton
        const upgradeButton = new UpgradeButton(this, 298, 526);
        page2.add(upgradeButton);

        // upgradeButton_1
        const upgradeButton_1 = new UpgradeButton(this, 866, 526);
        page2.add(upgradeButton_1);

        // next_page0001_png_1
        const next_page0001_png_1 = this.add.image(1267, 697, "Sep2005", "next-page0001.png");
        page2.add(next_page0001_png_1);

        // exit0001_png_1
        const exit0001_png_1 = this.add.image(1285, 92, "Sep2005", "exit0001.png");
        page2.add(exit0001_png_1);

        // last_page0001_png
        const last_page0001_png = this.add.image(251, 698, "Sep2005", "last-page0001.png");
        page2.add(last_page0001_png);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // cover_png
        const cover_png = this.add.image(469, 44, "iglooupgrade", "cover.png");
        cover_png.setOrigin(0, 0);
        page1.add(cover_png);

        // exit0001_png
        const exit0001_png = this.add.image(997, 86, "Sep2005", "exit0001.png");
        page1.add(exit0001_png);

        // next_page0001_png
        const next_page0001_png = this.add.image(979, 691, "Sep2005", "next-page0001.png");
        page1.add(next_page0001_png);

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
        const pages = [page1, page2, page3];

        // block (components)
        new Interactive(block);

        // upgradeButton_2 (prefab fields)
        upgradeButton_2.igloo = 1;

        // exit0001_png_1_1 (components)
        const exit0001_png_1_1Button = new Button(exit0001_png_1_1);
        exit0001_png_1_1Button.spriteName = "exit0001.png";
        exit0001_png_1_1Button.callback = () => this.close();
        exit0001_png_1_1Button.pixelPerfect = true;

        // last_page0001_png_1 (components)
        const last_page0001_png_1Button = new Button(last_page0001_png_1);
        last_page0001_png_1Button.spriteName = "last-page0001.png";
        last_page0001_png_1Button.callback = () => this.prevPage();
        last_page0001_png_1Button.pixelPerfect = true;

        // upgradeButton (prefab fields)
        upgradeButton.igloo = 3;

        // upgradeButton_1 (prefab fields)
        upgradeButton_1.igloo = 2;

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

        // exit0001_png (components)
        const exit0001_pngButton = new Button(exit0001_png);
        exit0001_pngButton.spriteName = "exit0001.png";
        exit0001_pngButton.callback = () => this.close();
        exit0001_pngButton.pixelPerfect = true;

        // next_page0001_png (components)
        const next_page0001_pngButton = new Button(next_page0001_png);
        next_page0001_pngButton.spriteName = "next-page0001.png";
        next_page0001_pngButton.callback = () => this.nextPage();
        next_page0001_pngButton.pixelPerfect = true;

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
