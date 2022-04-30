import BaseContainer from '@scenes/base/BaseContainer'

import { Button, SimpleButton, Interactive, NineSlice } from '@components/components'

import Inventory from '../playercard/inventory/Inventory'
import InventorySort from '../playercard/inventory_sort/InventorySort'
import Buttons from '../playercard/buttons/Buttons'
import PaperDoll from '../playercard/paperdoll/PaperDoll'


/* START OF COMPILED CODE */

export default class ModActions extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle;
        /** @type {PaperDoll} */
        this.paperDoll;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Sprite} */
        this.badge;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Text} */
        this.item_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.ban_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.stamps_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.ban_count_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.banned_until_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.joindate_txt;
        /** @type {Phaser.GameObjects.Text} */
        this.username_status_txt;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // rectangle
        const rectangle = scene.add.rectangle(0, 0, 800, 600);
        rectangle.isFilled = true;
        rectangle.fillColor = 164045;
        this.add(rectangle);

        // card_photo
        const card_photo = scene.add.image(-156, -2, "main", "card-photo");
        this.add(card_photo);

        // paperDoll
        const paperDoll = new PaperDoll(scene, -156, -2);
        this.add(paperDoll);

        // username
        const username = scene.add.text(-156, -238, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Username";
        username.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":360,"fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        this.add(username);

        // badge
        const badge = scene.add.sprite(-305, -217, "main", "card-badge-free");
        this.add(badge);

        // x_button
        const x_button = scene.add.image(347, -253, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(347, -255, "main", "blue-x");
        this.add(blue_x);

        // coins
        const coins = scene.add.text(246, -183, "", {});
        coins.setOrigin(0.5, 0.5);
        coins.text = "add coins: 000000";
        coins.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(coins);

        // card_coin
        const card_coin = scene.add.image(90, -185, "main", "card-coin");
        this.add(card_coin);

        // item_txt
        const item_txt = scene.add.text(247, -82, "", {});
        item_txt.setOrigin(0.5, 0.5);
        item_txt.text = "add item by id";
        item_txt.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(item_txt);

        // item_icon
        const item_icon = scene.add.image(90, -81, "main", "buddy/icon-mascot");
        this.add(item_icon);

        // ban_txt
        const ban_txt = scene.add.text(247, 31, "", {});
        ban_txt.setOrigin(0.5, 0.5);
        ban_txt.text = "ban player until date";
        ban_txt.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(ban_txt);

        // ban_icon
        const ban_icon = scene.add.image(90, 31, "main", "mod-icon");
        this.add(ban_icon);

        // stamps_txt
        const stamps_txt = scene.add.text(247, 138, "", {});
        stamps_txt.setOrigin(0.5, 0.5);
        stamps_txt.text = "change username";
        stamps_txt.setStyle({ "color": "#000000ff", "fixedWidth":250,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(stamps_txt);

        // help_icon
        const help_icon = scene.add.image(90, 137, "main", "help-icon");
        this.add(help_icon);

        // username_rounded
        const username_rounded = scene.add.ellipse(124, 180, 30, 30);
        username_rounded.isFilled = true;
        username_rounded.fillColor = 1136020;
        this.add(username_rounded);

        // username_bg
        const username_bg = scene.add.rectangle(223, 180, 200, 30);
        username_bg.isFilled = true;
        username_bg.fillColor = 1136020;
        this.add(username_bg);

        // username_btn
        const username_btn = scene.add.image(322, 180, "main", "grey-arrow");
        username_btn.angle = 90;
        this.add(username_btn);

        // ban_rounded
        const ban_rounded = scene.add.ellipse(124, 77, 30, 30);
        ban_rounded.isFilled = true;
        ban_rounded.fillColor = 1136020;
        this.add(ban_rounded);

        // ban_bg
        const ban_bg = scene.add.rectangle(223, 77, 200, 30);
        ban_bg.isFilled = true;
        ban_bg.fillColor = 1136020;
        this.add(ban_bg);

        // ban_btn
        const ban_btn = scene.add.image(322, 77, "main", "grey-arrow");
        ban_btn.angle = 90;
        this.add(ban_btn);

        // items_rounded
        const items_rounded = scene.add.ellipse(124, -32, 30, 30);
        items_rounded.isFilled = true;
        items_rounded.fillColor = 1136020;
        this.add(items_rounded);

        // items_bg
        const items_bg = scene.add.rectangle(223, -32, 200, 30);
        items_bg.isFilled = true;
        items_bg.fillColor = 1136020;
        this.add(items_bg);

        // items_btn
        const items_btn = scene.add.image(322, -32, "main", "grey-arrow");
        items_btn.angle = 90;
        this.add(items_btn);

        // coins_rounded
        const coins_rounded = scene.add.ellipse(124, -137, 30, 30);
        coins_rounded.isFilled = true;
        coins_rounded.fillColor = 1136020;
        this.add(coins_rounded);

        // coins_bg
        const coins_bg = scene.add.rectangle(223, -137, 200, 30);
        coins_bg.isFilled = true;
        coins_bg.fillColor = 1136020;
        this.add(coins_bg);

        // coins_btn
        const coins_btn = scene.add.image(322, -137, "main", "grey-arrow");
        coins_btn.angle = 90;
        this.add(coins_btn);

        // ban_count_txt
        const ban_count_txt = scene.add.text(150, 235, "", {});
        ban_count_txt.setOrigin(0.5, 0.5);
        ban_count_txt.text = "banned 0 times";
        ban_count_txt.setStyle({ "color": "#000000ff", "fixedWidth":180,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(ban_count_txt);

        // banned_until_txt
        const banned_until_txt = scene.add.text(-157, 235, "", {});
        banned_until_txt.setOrigin(0.5, 0.5);
        banned_until_txt.text = "not currently banned";
        banned_until_txt.setStyle({ "color": "#000000ff", "fixedWidth":430,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(banned_until_txt);

        // joindate_txt
        const joindate_txt = scene.add.text(-157, 265, "", {});
        joindate_txt.setOrigin(0.5, 0.5);
        joindate_txt.text = "no join time recorded";
        joindate_txt.setStyle({ "color": "#000000ff", "fixedWidth":430,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(joindate_txt);

        // username_status_txt
        const username_status_txt = scene.add.text(150, 265, "", {});
        username_status_txt.setOrigin(0.5, 0.5);
        username_status_txt.text = "status: pending";
        username_status_txt.setStyle({ "color": "#000000ff", "fixedWidth":180,"fontFamily": "Burbank Small", "fontSize": "20px" });
        this.add(username_status_txt);

        // block (components)
        new Interactive(block);

        // rectangle (components)
        const rectangleNineSlice = new NineSlice(rectangle);
        rectangleNineSlice.corner = 50;

        // card_photo (components)
        new Interactive(card_photo);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.hide() };

        // username_btn (components)
        const username_btnSimpleButton = new SimpleButton(username_btn);
        username_btnSimpleButton.callback = () => this.handleChangeUsername();

        // ban_btn (components)
        const ban_btnSimpleButton = new SimpleButton(ban_btn);
        ban_btnSimpleButton.callback = () => this.handleBanPlayer();

        // items_btn (components)
        const items_btnSimpleButton = new SimpleButton(items_btn);
        items_btnSimpleButton.callback = () => this.handleAddItems();

        // coins_btn (components)
        const coins_btnSimpleButton = new SimpleButton(coins_btn);
        coins_btnSimpleButton.callback = () => this.handleAddCoins();

        this.rectangle = rectangle;
        this.paperDoll = paperDoll;
        this.username = username;
        this.badge = badge;
        this.coins = coins;
        this.item_txt = item_txt;
        this.ban_txt = ban_txt;
        this.stamps_txt = stamps_txt;
        this.ban_count_txt = ban_count_txt;
        this.banned_until_txt = banned_until_txt;
        this.joindate_txt = joindate_txt;
        this.username_status_txt = username_status_txt;

        /* START-USER-CTR-CODE */

        // Active penguin id
        this.id = null

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    /**
     * Shows a player card by id, if the user is found in the current room the penguin object can
     * be taken from there. Otherwise the penguin object must be fetched from the server.
     *
     * @param {number} id - Penguin ID
     * @param {boolean} refresh - Whether or not a card should pass the already open check
     */
    showCard(id, refresh = false) {
        // Don't open player's card if it's already open
        if (id == this.id && this.visible && !refresh) return

        else {
            this.network.send('get_player', { id: id })
        }
    }

    /**
     * Primary showCard function, which accepts a penguin object, and optionally an items object to
     * fill the player card with the correct data. The items object is not required if the penguin is fetched
     * from the server due to all necessary data being available from the penguin object.
     *
     * @param {object} penguin - Penguin object
     * @param {object} items - Penguin items object
     */
    _showCard(penguin, bancount, activeban, items = penguin) {

        this.addcoins = document.getElementById("addcoins")
        this.additems = document.getElementById("additems")
        this.banplayer = document.getElementById("banplayer")
        this.changeusername = document.getElementById("changeusername")

        // Text
        this.username.text = penguin.username

        let jointime = new Date(penguin.joinTime)
        this.joindate_txt.text = "join time: " + jointime.toUTCString().substring(5)

        if (penguin.username_rejected == 1) this.username_status_txt.text = "status: rejected"
        if (penguin.username_approved == 1) this.username_status_txt.text = "status: approved"
        if (penguin.username_approved == 0 && penguin.username_rejected == 0) this.username_status_txt.text = "status: pending"

        if (activeban) { 
            let banduration = new Date(activeban.expires)
            this.banned_until_txt.text = "banned until: " + banduration.toUTCString().substring(5)
        }
        if (penguin.permaBan == 1) this.banned_until_txt.text = "ACCOUNT PERMANENTLY BANNED"
        if (penguin.permaBan == 0 && !activeban) this.banned_until_txt.text = "not currently banned"

        if (!bancount || bancount == 0) { this.ban_count_txt.text = "banned 0 times" }
        else if (bancount == 1) { this.ban_count_txt.text = "banned 1 time" }
        else { this.ban_count_txt.text = "banned " + bancount + " times" }

        // Paper doll
        this.paperDoll.loadDoll(items, penguin.isClient)

        // Visible elements
        this.coins.text = `add coins: ${penguin.coins}`

        this.id = penguin.id

        this.visible = true

        this.addcoins.style.visibility = 'visible'
        this.additems.style.visibility = 'visible'
        this.banplayer.style.visibility = 'visible'
        this.changeusername.style.visibility = 'visible'
    }

    hide(){
        this.visible = false

        this.addcoins.style.visibility = 'hidden' 
        this.additems.style.visibility = 'hidden'  
        this.banplayer.style.visibility = 'hidden'
        this.changeusername.style.visibility = 'hidden'
    }

    handleAddCoins(){
        console.log(this.addcoins)
        let coins = this.addcoins.value.toString()
        this.network.send('add_user_coins', { id: this.id, coins: coins })
    }

    handleAddItems(){
        let item = this.additems.value.toString()
        this.network.send('add_user_items', { id: this.id, item: item })
    }

    handleBanPlayer(){
        let banDuration = this.banplayer.value.toString()
        this.network.send('ban_user', { id: this.id, banDuration: banDuration })
    }

    handleChangeUsername(){
        let newUsername = this.changeusername.value.toString()
        this.network.send('change_user_name', { id: this.id, newUsername: newUsername })
    }




    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
