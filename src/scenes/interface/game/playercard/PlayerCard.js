import BaseContainer from '@scenes/base/BaseContainer'

import { Button, DraggableContainer, Interactive } from '@components/components'

import Inventory from './inventory/Inventory'
import InventorySort from './inventory_sort/InventorySort'
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
        this.stamps;
        /** @type {Phaser.GameObjects.Text} */
        this.username;
        /** @type {InventorySort} */
        this.inventorySort;
        /** @type {Inventory} */
        this.inventory;
        /** @type {Phaser.GameObjects.Image} */
        this.edit_player_button;


        // photo
        const photo = scene.add.container(0, -2);
        this.add(photo);

        // card_photo
        const card_photo = scene.add.image(0, 0, "main", "card-photo");
        photo.add(card_photo);

        // card_bg
        const card_bg = scene.add.image(0, 0, "main", "card-bg-player");
        this.add(card_bg);

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

        // stamps_btn
        const stamps_btn = scene.add.image(-132, 23, "main", "blue-button");
        stats.add(stamps_btn);

        // card_coin
        const card_coin = scene.add.image(-133, -29, "main", "card-coin");
        stats.add(card_coin);

        // coins
        const coins = scene.add.text(50, -27, "", {});
        coins.setOrigin(0.5, 0.5);
        coins.text = "Your Coins: 000000";
        coins.setStyle({ "color": "#000000ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "24px" });
        stats.add(coins);

        // stamps
        const stamps = scene.add.text(50, 23, "", {});
        stamps.setOrigin(0.5, 0.5);
        stamps.text = "Your Stamps: 69/420";
        stamps.setStyle({ "color": "#000000ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "24px" });
        stats.add(stamps);

        // card_stamp
        const card_stamp = scene.add.image(-132, 21, "main", "stamps-icon");
        stats.add(card_stamp);

        // username
        const username = scene.add.text(0, -238, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Username";
        username.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":360,"fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        this.add(username);

        // card_badge_member
        const card_badge_member = scene.add.image(-149, -224, "main", "card-badge-member");
        this.add(card_badge_member);

        // x_button
        const x_button = scene.add.image(177, -237, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(177, -239, "main", "blue-x");
        this.add(blue_x);

        // inventorySort
        const inventorySort = new InventorySort(scene, 434, 315);
        inventorySort.visible = false;
        this.add(inventorySort);

        // inventory
        const inventory = new Inventory(scene, -135, 33);
        this.add(inventory);

        // edit_player_button
        const edit_player_button = scene.add.image(162, -174, "main", "edit_player_button");
        edit_player_button.visible = false;
        this.add(edit_player_button);

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = card_bg;

        // card_photo (components)
        new Interactive(card_photo);

        // stamps_btn (components)
        const stamps_btnButton = new Button(stamps_btn);
        stamps_btnButton.spriteName = "blue-button";
        stamps_btnButton.callback = () => { this.interface.loadExternal('Stampbook'); this.interface.stampbookId = this.id };

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        // edit_player_button (components)
        const edit_player_buttonButton = new Button(edit_player_button);
        edit_player_buttonButton.spriteName = "edit_player_button";
        edit_player_buttonButton.callback = () => this.editPlayer();

        this.photo = photo;
        this.paperDoll = paperDoll;
        this.buttons = buttons;
        this.stats = stats;
        this.coins = coins;
        this.stamps = stamps;
        this.username = username;
        this.inventorySort = inventorySort;
        this.inventory = inventory;
        this.edit_player_button = edit_player_button;

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
        } else {
            this.username.text = "P" + penguin.id
        }

        for (var x in this.world.mascots) {
            if (this.world.mascots[x].id == penguin.id) this.username.text = this.world.mascots[x].name
        }

        if (penguin.puffle && !items.puffle){
            items.puffle = penguin.puffle
        }

        // Paper doll
        this.paperDoll.loadDoll(items, penguin.isClient)

        // Visible elements
        if (penguin.isClient) {
            this.coins.text = `Your Coins: ${this.world.client.coins}`
            this.stats.visible = true
            this.buttons.visible = false
            this.inventory.visible = true
            this.inventory.showPage()
            this.stamps.text = `Your Stamps: ${this.world.client.stamps.length}/${Object.keys(this.crumbs.stamps).length}`

        } else {
            this.stats.visible = false
            this.buttons.visible = true
            this.inventory.visible = false
        }

        if (this.world.client.rank > 3) this.edit_player_button.visible = true

        this.inventorySort.closeMenu()

        this.id = penguin.id

        this.updateButtons()

        this.interface.main.showWidget(this)
    }

    updateButtons() {
        if (this.buttons.visible) {
            let relationship = this.world.getRelationship(this.id)
            this.buttons.updateButtons(relationship)
        }
    }

    editPlayer(){
        this.network.send('edit_player', { id: this.id })
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
