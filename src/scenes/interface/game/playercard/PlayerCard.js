import BaseContainer from '@scenes/base/BaseContainer'

import { Button, DraggableContainer, Interactive } from '@components/components'

import Inventory from './inventory/Inventory'
import InventorySort from './inventory_sort/InventorySort'
import InventoryBottom from './inventory/InventoryBottom'
import Buttons from './buttons/Buttons'
import PaperDoll from './paperdoll/PaperDoll'


/* START OF COMPILED CODE */

export default class PlayerCard extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460);

        /** @type {Phaser.GameObjects.Container} */
        this.photo;
        /** @type {PaperDoll} */
        this.paperDoll;
        /** @type {Buttons} */
        this.buttons;
        /** @type {Phaser.GameObjects.Container} */
        this.stats;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {Phaser.GameObjects.Container} */
        this.edit_player_button;
        /** @type {Phaser.GameObjects.Image} */
        this.playericon;
        /** @type {Phaser.GameObjects.Image} */
        this.playericonbuddy;
        /** @type {Phaser.GameObjects.Image} */
        this.nobuddyon;
        /** @type {Phaser.GameObjects.Image} */
        this.notbuddyicon;
        /** @type {Phaser.GameObjects.Image} */
        this.modbadge;
        /** @type {InventorySort} */
        this.inventorySort;
        /** @type {Inventory} */
        this.inventory;
        /** @type {InventoryBottom} */
        this.inventoryBottom;


        // photo
        const photo = scene.add.container(0, -2);
        this.add(photo);

        // card_photo
        const card_photo = scene.add.image(0, 0, "main", "card-photo");
        card_photo.tintFill = true;
        card_photo.tintTopLeft = 26012;
        card_photo.tintTopRight = 26012;
        card_photo.tintBottomLeft = 26012;
        card_photo.tintBottomRight = 26012;
        photo.add(card_photo);

        // playercard_1
        const playercard_1 = scene.add.image(0, 0, "playercard_1");
        this.add(playercard_1);

        // paperDoll
        const paperDoll = new PaperDoll(scene, 0, -7);
        this.add(paperDoll);

        // buttons
        const buttons = new Buttons(scene, 0, 255);
        buttons.visible = false;
        this.add(buttons);

        // stats
        const stats = scene.add.container(-13, 255);
        this.add(stats);

        // coins
        const coins = scene.add.text(0, 0, "", {});
        coins.setOrigin(0.5, 0.5);
        coins.text = "Your Coins: 000000";
        coins.setStyle({ "align": "right", "color": "#000000ff", "fixedWidth":300,"fontFamily": "Arial", "fontSize": "24px" });
        stats.add(coins);

        // coins_png
        const coins_png = scene.add.image(-125, -5, "playercard", "coins.png");
        coins_png.scaleX = 0.7779987388695455;
        coins_png.scaleY = 0.7779987388695455;
        stats.add(coins_png);

        // username
        const username = scene.add.text(0, -233, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Username";
        username.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":360,"fontFamily": "Arial", "fontSize": "32px", "fontStyle": "bold" });
        this.add(username);

        // x_button
        const x_button = scene.add.image(177, -237, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(177, -239, "main", "blue-x");
        this.add(blue_x);

        // edit_player_button
        const edit_player_button = scene.add.container(104, -259);
        edit_player_button.visible = false;
        this.add(edit_player_button);

        // edit_player_btn
        const edit_player_btn = scene.add.image(13, 22, "main", "blue-button");
        edit_player_button.add(edit_player_btn);

        // edit_player_txt
        const edit_player_txt = scene.add.text(0, -1, "", {});
        edit_player_txt.text = "?";
        edit_player_txt.setStyle({ "color": "#ffffffff", "fontFamily": "Arial", "fontSize": "35px", "stroke": "#00013cff", "strokeThickness":5});
        edit_player_button.add(edit_player_txt);

        // playericon
        const playericon = scene.add.image(-156, -227, "playercard", "playercard-icon0004.png");
        playericon.scaleX = 0.95;
        playericon.scaleY = 0.95;
        this.add(playericon);

        // playericonbuddy
        const playericonbuddy = scene.add.image(-155, -228, "playercard", "playercard-icon0002.png");
        playericonbuddy.scaleX = 0.9;
        playericonbuddy.scaleY = 0.9;
        playericonbuddy.visible = false;
        this.add(playericonbuddy);

        // nobuddyon
        const nobuddyon = scene.add.image(-155, -228, "playercard", "playercard-icon0001.png");
        nobuddyon.scaleX = 0.9;
        nobuddyon.scaleY = 0.9;
        nobuddyon.visible = false;
        this.add(nobuddyon);

        // notbuddyicon
        const notbuddyicon = scene.add.image(-155, -228, "playercard", "playercard-icon0003.png");
        notbuddyicon.scaleX = 0.9;
        notbuddyicon.scaleY = 0.9;
        notbuddyicon.visible = false;
        this.add(notbuddyicon);

        // modbadge
        const modbadge = scene.add.image(144, -145, "playercard", "mod-badge.png");
        modbadge.scaleX = 0.7613167824088007;
        modbadge.scaleY = 0.7613167824088007;
        modbadge.visible = false;
        this.add(modbadge);

        // inventorySort
        const inventorySort = new InventorySort(scene, 434, 318);
        inventorySort.visible = false;
        this.add(inventorySort);

        // inventory
        const inventory = new Inventory(scene, -135, 35);
        this.add(inventory);

        // inventoryBottom
        const inventoryBottom = new InventoryBottom(scene, -135, 35);
        this.add(inventoryBottom);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = playercard_1;

        // card_photo (components)
        new Interactive(card_photo);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        // edit_player_btn (components)
        const edit_player_btnButton = new Button(edit_player_btn);
        edit_player_btnButton.spriteName = "blue-button";
        edit_player_btnButton.callback = () => this.editPlayer();

        this.photo = photo;
        this.paperDoll = paperDoll;
        this.buttons = buttons;
        this.stats = stats;
        this.coins = coins;
        this.username = username;
        this.edit_player_button = edit_player_button;
        this.playericon = playericon;
        this.playericonbuddy = playericonbuddy;
        this.nobuddyon = nobuddyon;
        this.notbuddyicon = notbuddyicon;
        this.modbadge = modbadge;
        this.inventorySort = inventorySort;
        this.inventory = inventory;
        this.inventoryBottom = inventoryBottom;

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
        if (id == this.id && this.visible && !refresh) {
            this.interface.main.showWidget(this)
            return
        }

        if (id in this.world.room.penguins) {
            let penguin = this.world.room.penguins[id]
            this._showCard(penguin, penguin.items.flat)

        } else {
            // Fetch penguin object from server
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
    _showCard(penguin, items = penguin) {
        // Text
        if (penguin.username_approved == 1) {
            this.username.text = penguin.username
        }
        else {
            this.username.text = "P" + penguin.id
        }

        // Paper doll
        this.paperDoll.loadDoll(items, penguin.isClient)

        // Visible elements
        if (penguin.isClient) {
            this.coins.text = `Your Coins: ${this.world.client.coins}`
            this.stats.visible = true
            this.buttons.visible = false
            this.inventory.visible = true
            this.inventoryBottom.visible = true
            this.inventory.showPage()
            this.inventoryBottom.showPage()

        } else {
            this.stats.visible = false
            this.buttons.visible = true
            this.inventory.visible = false
            this.inventoryBottom.visible = false
        }

        this.inventorySort.closeMenu()

        this.id = penguin.id

        if (this.world.client.penguin.rank > 3) this.edit_player_button.visible = true
        // Update buttons
        this.modbadge.visible = false
        switch (penguin.rank) {
            case penguin.rank = 4:
                this.modbadge.visible = true
                break
            case penguin.rank = 3:
                this.modbadge.visible = false
                break
            case penguin.rank = 2:
                this.modbadge.visible = false
                break
            case penguin.rank = 1:
                this.modbadge.visible = false
                break
            default:
                this.modbadge.visible = false
                break
        }

        this.updateButtons()
        this.updateIcon()

        this.interface.main.showWidget(this)
    }

    updateButtons() {
        if (this.buttons.visible) {
            let relationship = this.world.getRelationship(this.id)
            this.buttons.updateButtons(relationship)
        }
    }

    updateIcon() {
        if (this.playericon.visible = true) {
            let relationship = this.world.getRelationship(this.id)
            this.updateIcons(relationship)
        } else if (this.playericonbuddy.visible = true) {
            let relationship = this.world.getRelationship(this.id)
            this.updateIcons(relationship)
        } else {
            let relationship = this.world.getRelationship(this.id)
            this.updateIcons(relationship)
        }
    }

    updateIcons(relationship) {
        this.playericonbuddy.visible = false
        this.notbuddyicon.visible = false
        this.nobuddyon.visible = false

        switch (relationship) {
            case 'online':
                this.playericonbuddy.visible = true
                this.playericon.visible = false
                break

            case 'offline':
                this.notbuddyicon.visible = true
                this.playericon.visible = false
                break

            case 'ignore':
                this.notbuddyicon.visible = true
                this.playericon.visible = false
                break

            case 'none':
                this.nobuddyon.visible = true
                this.playericon.visible = false
                break

            default:
                this.playericon.visible = true
                break
        }
    }

    editPlayer(){
        this.network.send('edit_player', { id: this.id })
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
