import BaseContainer from '@scenes/base/BaseContainer'

import {
    Button,
    SimpleButton,
    DraggableContainer,
    Interactive
} from '@components/components'


/* START OF COMPILED CODE */

export default class PuffleCare extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460);

        /** @type {Phaser.GameObjects.Container} */
        this.inventory;
        /** @type {Phaser.GameObjects.Sprite} */
        this.inventory_bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.slot8_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.slot7_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.slot6_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.slot5_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bath_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bath_icon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffleos_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffleos_icon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cookie_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cookie_icon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gum_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.gum_icon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.card_bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.tab_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.close_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blue_x;
        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {Phaser.GameObjects.Sprite} */
        this.card;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rest_bar;
        /** @type {Phaser.GameObjects.Text} */
        this.rest_txt;
        /** @type {Phaser.GameObjects.Sprite} */
        this.play_bar;
        /** @type {Phaser.GameObjects.Text} */
        this.play_txt;
        /** @type {Phaser.GameObjects.Sprite} */
        this.food_bar;
        /** @type {Phaser.GameObjects.Text} */
        this.food_txt;
        /** @type {Phaser.GameObjects.Sprite} */
        this.clean_bar;
        /** @type {Phaser.GameObjects.Text} */
        this.clean_txt;
        /** @type {Phaser.GameObjects.Sprite} */
        this.walk_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.walk;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eat_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.eat;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sleep_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sleep;
        /** @type {Phaser.GameObjects.Sprite} */
        this.play_btn;
        /** @type {Phaser.GameObjects.Sprite} */
        this.play;


        // inventory
        const inventory = scene.add.container(168, -185);
        inventory.visible = false;
        this.add(inventory);

        // inventory_bg
        const inventory_bg = scene.add.sprite(0, 201, "care", "tab_bg");
        inventory.add(inventory_bg);

        // slot8_btn
        const slot8_btn = scene.add.sprite(277, 405, "care", "slot");
        inventory.add(slot8_btn);

        // slot7_btn
        const slot7_btn = scene.add.sprite(137, 405, "care", "slot");
        inventory.add(slot7_btn);

        // slot6_btn
        const slot6_btn = scene.add.sprite(277, 270, "care", "slot");
        inventory.add(slot6_btn);

        // slot5_btn
        const slot5_btn = scene.add.sprite(137, 270, "care", "slot");
        inventory.add(slot5_btn);

        // bath_btn
        const bath_btn = scene.add.sprite(277, 135, "care", "slot");
        inventory.add(bath_btn);

        // bath_icon
        const bath_icon = scene.add.sprite(277, 136, "care", "bath");
        inventory.add(bath_icon);

        // puffleos_btn
        const puffleos_btn = scene.add.sprite(137, 135, "care", "slot");
        inventory.add(puffleos_btn);

        // puffleos_icon
        const puffleos_icon = scene.add.sprite(137, 136, "care", "puffleos");
        inventory.add(puffleos_icon);

        // cookie_btn
        const cookie_btn = scene.add.sprite(277, 0, "care", "slot");
        inventory.add(cookie_btn);

        // cookie_icon
        const cookie_icon = scene.add.sprite(277, 0, "care", "cookie");
        inventory.add(cookie_icon);

        // gum_btn
        const gum_btn = scene.add.sprite(137, 0, "care", "slot");
        inventory.add(gum_btn);

        // gum_icon
        const gum_icon = scene.add.sprite(137, 0, "care", "gum");
        inventory.add(gum_icon);

        // card_bg
        const card_bg = scene.add.sprite(0, 0, "care", "bg");
        this.add(card_bg);

        // tab_btn
        const tab_btn = scene.add.sprite(240, -91, "care", "tab_button");
        this.add(tab_btn);

        // close_btn
        const close_btn = scene.add.sprite(177, -236, "care", "button");
        this.add(close_btn);

        // blue_x
        const blue_x = scene.add.sprite(177, -238, "main", "blue-x");
        this.add(blue_x);

        // name
        const name = scene.add.text(0, -237, "", {});
        name.setOrigin(0.5, 0.5);
        name.text = "Name";
        name.setStyle({
            "align": "center",
            "color": "#000000ff",
            "fixedWidth": 360,
            "fontFamily": "Burbank Small",
            "fontSize": "32px",
            "fontStyle": "bold"
        });
        this.add(name);

        // card
        const card = scene.add.sprite(0, 0, "care", "card");
        this.add(card);

        // puffle
        const puffle = scene.add.sprite(0, -90, "care", "puffles0001");
        this.add(puffle);

        // rest_bar
        const rest_bar = scene.add.sprite(70, 175, "care", "bar0001");
        this.add(rest_bar);

        // rest_txt
        const rest_txt = scene.add.text(-125, 175, "", {});
        rest_txt.setOrigin(0.5, 0.5);
        rest_txt.text = "REST";
        rest_txt.setStyle({
            "align": "center",
            "color": "#ffffffff",
            "fixedWidth": 160,
            fontFamily: 'Burbank Small',
            "fontSize": "32px",
            "fontStyle": "bold italic",
            "stroke": "#003366",
            "strokeThickness": 6
        });
        this.add(rest_txt);

        // play_bar
        const play_bar = scene.add.sprite(70, 130, "care", "bar0001");
        this.add(play_bar);

        // play_txt
        const play_txt = scene.add.text(-125, 130, "", {});
        play_txt.setOrigin(0.5, 0.5);
        play_txt.text = "PLAY";
        play_txt.setStyle({
            "align": "center",
            "color": "#ffffffff",
            "fixedWidth": 160,
            fontFamily: 'Burbank Small',
            "fontSize": "32px",
            "fontStyle": "bold italic",
            "stroke": "#003366",
            "strokeThickness": 6
        });
        this.add(play_txt);

        // food_bar
        const food_bar = scene.add.sprite(70, 85, "care", "bar0001");
        this.add(food_bar);

        // food_txt
        const food_txt = scene.add.text(-125, 85, "", {});
        food_txt.setOrigin(0.5, 0.5);
        food_txt.text = "FOOD";
        food_txt.setStyle({
            "align": "center",
            "color": "#ffffffff",
            "fixedWidth": 160,
            fontFamily: 'Burbank Small',
            "fontSize": "32px",
            "fontStyle": "bold italic",
            "stroke": "#003366",
            "strokeThickness": 6
        });
        this.add(food_txt);

        // clean_bar
        const clean_bar = scene.add.sprite(70, 40, "care", "bar0001");
        this.add(clean_bar);

        // clean_txt
        const clean_txt = scene.add.text(-125, 40, "", {});
        clean_txt.setOrigin(0.5, 0.5);
        clean_txt.text = "CLEAN";
        clean_txt.setStyle({
            "align": "center",
            "color": "#ffffffff",
            "fixedWidth": 160,
            fontFamily: 'Burbank Small',
            "fontSize": "32px",
            "fontStyle": "bold italic",
            "stroke": "#003366",
            "strokeThickness": 6
        });
        this.add(clean_txt);

        // walk_btn
        const walk_btn = scene.add.sprite(105, 250, "care", "button");
        this.add(walk_btn);

        // walk
        const walk = scene.add.sprite(106, 249, "care", "walk");
        this.add(walk);

        // eat_btn
        const eat_btn = scene.add.sprite(35, 250, "care", "button");
        this.add(eat_btn);

        // eat
        const eat = scene.add.sprite(35, 248, "care", "eat");
        this.add(eat);

        // sleep_btn
        const sleep_btn = scene.add.sprite(-35, 250, "care", "button");
        this.add(sleep_btn);

        // sleep
        const sleep = scene.add.sprite(-35, 250, "care", "sleep");
        this.add(sleep);

        // play_btn
        const play_btn = scene.add.sprite(-105, 250, "care", "button");
        this.add(play_btn);

        // play
        const play = scene.add.sprite(-105, 249, "care", "play");
        this.add(play);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = card_bg;

        // slot8_btn (components)
        const slot8_btnButton = new Button(slot8_btn);
        slot8_btnButton.spriteName = "slot";
        slot8_btnButton.activeFrame = false;

        // slot7_btn (components)
        const slot7_btnButton = new Button(slot7_btn);
        slot7_btnButton.spriteName = "slot";
        slot7_btnButton.activeFrame = false;

        // slot6_btn (components)
        const slot6_btnButton = new Button(slot6_btn);
        slot6_btnButton.spriteName = "slot";
        slot6_btnButton.activeFrame = false;

        // slot5_btn (components)
        const slot5_btnButton = new Button(slot5_btn);
        slot5_btnButton.spriteName = "slot";
        slot5_btnButton.activeFrame = false;

        // bath_btn (components)
        const bath_btnButton = new Button(bath_btn);
        bath_btnButton.spriteName = "slot";
        bath_btnButton.callback = () => this.onBathDown();
        bath_btnButton.activeFrame = false;

        // puffleos_btn (components)
        const puffleos_btnButton = new Button(puffleos_btn);
        puffleos_btnButton.spriteName = "slot";
        puffleos_btnButton.callback = () => this.onFoodDown();
        puffleos_btnButton.activeFrame = false;

        // cookie_btn (components)
        const cookie_btnButton = new Button(cookie_btn);
        cookie_btnButton.spriteName = "slot";
        cookie_btnButton.callback = () => this.onCookieDown();
        cookie_btnButton.activeFrame = false;

        // gum_btn (components)
        const gum_btnButton = new Button(gum_btn);
        gum_btnButton.spriteName = "slot";
        gum_btnButton.callback = () => this.onGumDown();
        gum_btnButton.activeFrame = false;

        // tab_btn (components)
        const tab_btnSimpleButton = new SimpleButton(tab_btn);
        tab_btnSimpleButton.callback = () => this.onTabDown();

        // close_btn (components)
        const close_btnButton = new Button(close_btn);
        close_btnButton.spriteName = "button";
        close_btnButton.callback = () => {
            this.visible = false
        };

        // walk_btn (components)
        const walk_btnButton = new Button(walk_btn);
        walk_btnButton.spriteName = "button";
        walk_btnButton.callback = () => this.onWalkDown();

        // eat_btn (components)
        const eat_btnButton = new Button(eat_btn);
        eat_btnButton.spriteName = "button";
        eat_btnButton.callback = () => this.onTabDown();

        // sleep_btn (components)
        const sleep_btnButton = new Button(sleep_btn);
        sleep_btnButton.spriteName = "button";
        sleep_btnButton.callback = () => this.onSleepDown();

        // play_btn (components)
        const play_btnButton = new Button(play_btn);
        play_btnButton.spriteName = "button";
        play_btnButton.callback = () => this.onPlayDown();

        this.inventory = inventory;
        this.inventory_bg = inventory_bg;
        this.slot8_btn = slot8_btn;
        this.slot7_btn = slot7_btn;
        this.slot6_btn = slot6_btn;
        this.slot5_btn = slot5_btn;
        this.bath_btn = bath_btn;
        this.bath_icon = bath_icon;
        this.puffleos_btn = puffleos_btn;
        this.puffleos_icon = puffleos_icon;
        this.cookie_btn = cookie_btn;
        this.cookie_icon = cookie_icon;
        this.gum_btn = gum_btn;
        this.gum_icon = gum_icon;
        this.card_bg = card_bg;
        this.tab_btn = tab_btn;
        this.close_btn = close_btn;
        this.blue_x = blue_x;
        this.name = name;
        this.card = card;
        this.puffle = puffle;
        this.rest_bar = rest_bar;
        this.rest_txt = rest_txt;
        this.play_bar = play_bar;
        this.play_txt = play_txt;
        this.food_bar = food_bar;
        this.food_txt = food_txt;
        this.clean_bar = clean_bar;
        this.clean_txt = clean_txt;
        this.walk_btn = walk_btn;
        this.walk = walk;
        this.eat_btn = eat_btn;
        this.eat = eat;
        this.sleep_btn = sleep_btn;
        this.sleep = sleep;
        this.play_btn = play_btn;
        this.play = play;

        /* START-USER-CTR-CODE */

        // Active penguin id
        this.id = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    _showCard(puffle) {
        // Text
        this.name.text = puffle.name
        this.id = puffle.puffleId

        if (puffle.clean >= 5 && puffle.clean < 95) {
            this.clean_bar.setFrame("bar000" + Math.round(puffle.clean / 10))
        } else if (puffle.clean < 5) {
            this.clean_bar.setFrame("bar0001")
        } else {
            this.clean_bar.setFrame("bar0010")
        }

        if (puffle.food >= 5 && puffle.food < 95) {
            this.food_bar.setFrame("bar000" + Math.round(puffle.food / 10))
        } else if (puffle.food < 5) {
            this.food_bar.setFrame("bar0001")
        } else {
            this.food_bar.setFrame("bar0010")
        }

        if (puffle.play >= 5 && puffle.play < 95) {
            this.play_bar.setFrame("bar000" + Math.round(puffle.play / 10))
        } else if (puffle.play < 5) {
            this.play_bar.setFrame("bar0001")
        } else {
            this.play_bar.setFrame("bar0010")
        }

        if (puffle.rest >= 5 && puffle.rest < 95) {
            this.rest_bar.setFrame("bar000" + Math.round(puffle.rest / 10))
        } else if (puffle.rest < 5) {
            this.rest_bar.setFrame("bar0001")
        } else {
            this.rest_bar.setFrame("bar0010")
        }

        this.shutInventory()
        this.interface.main.showWidget(this)
    }

    onGumDown() {
        this.world.room.puffles[this.id].chewGum()
        this.visible = false
    }

    onCookieDown() {
        this.world.room.puffles[this.id].eatCookie()
        this.visible = false
    }

    onFoodDown() {
        this.world.room.puffles[this.id].eatOs()
        this.visible = false
    }

    onBathDown() {
        this.world.room.puffles[this.id].bathe()
        this.visible = false
    }

    onPlayDown() {
        this.world.room.puffles[this.id].ball()
        this.visible = false
    }

    onSleepDown() {
        this.world.room.puffles[this.id].sleep()
        this.visible = false
    }

    onWalkDown() {

    }

    onTabDown() {
        if (this.inventoryOpen) {
            this.shutInventory()
        } else {
            this.openInventory()
        }
    }

    openInventory() {
        this.inventory.visible = true
        this.inventoryOpen = true
        this.tab_btn.x = 544
    }

    shutInventory() {
        this.inventory.visible = false
        this.inventoryOpen = false
        this.tab_btn.x = 240
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
