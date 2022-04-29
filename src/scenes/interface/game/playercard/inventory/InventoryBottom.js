import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, SimpleButton } from '@components/components'

import InventoryLoader from '@engine/interface/inventory/InventoryLoader'

/* START OF COMPILED CODE */

export default class InventoryBottom extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 460);

        /** @type {Phaser.GameObjects.Container} */
        this.container;
        /** @type {Phaser.GameObjects.Image[]} */
        this.slots;


        // container
        const container = scene.add.container(-56, -272);
        container.scaleY = 0.9710566380541222;
        container.visible = false;
        this.add(container);

        // items_wrapper_png
        const items_wrapper_png = scene.add.image(56, 262, "playercard", "items-wrapper.png");
        container.add(items_wrapper_png);

        // inventory_scroll
        const inventory_scroll = scene.add.image(368, 245, "main", "inventory/scroll");
        container.add(inventory_scroll);

        // down_button
        const down_button = scene.add.image(368, 472, "main", "grey-button");
        container.add(down_button);

        // grey_arrow_1
        const grey_arrow_1 = scene.add.image(368, 470, "main", "grey-arrow");
        grey_arrow_1.flipY = true;
        container.add(grey_arrow_1);

        // up_button
        const up_button = scene.add.image(368, 2, "main", "grey-button");
        container.add(up_button);

        // grey_arrow
        const grey_arrow = scene.add.image(368, 0, "main", "grey-arrow");
        container.add(grey_arrow);

        // slot_12
        const slot_12 = scene.add.image(264, 439, "main", "large-box");
        container.add(slot_12);

        // slot_11
        const slot_11 = scene.add.image(132, 439, "main", "large-box");
        container.add(slot_11);

        // slot_10
        const slot_10 = scene.add.image(0, 439, "main", "large-box");
        container.add(slot_10);

        // slot_9
        const slot_9 = scene.add.image(264, 307, "main", "large-box");
        container.add(slot_9);

        // slot_8
        const slot_8 = scene.add.image(132, 307, "main", "large-box");
        container.add(slot_8);

        // slot_7
        const slot_7 = scene.add.image(0, 307, "main", "large-box");
        container.add(slot_7);

        // slot_6
        const slot_6 = scene.add.image(264, 175, "main", "large-box");
        container.add(slot_6);

        // slot_5
        const slot_5 = scene.add.image(132, 175, "main", "large-box");
        container.add(slot_5);

        // slot_4
        const slot_4 = scene.add.image(0, 175, "main", "large-box");
        container.add(slot_4);

        // slot_3
        const slot_3 = scene.add.image(264, 43, "main", "large-box");
        container.add(slot_3);

        // slot_2
        const slot_2 = scene.add.image(132, 43, "main", "large-box");
        container.add(slot_2);

        // slot_1
        const slot_1 = scene.add.image(0, 43, "main", "large-box");
        container.add(slot_1);

        // tab
        const tab = scene.add.container(369, -156);
        this.add(tab);

        // playercard_clothing_2
        const playercard_clothing_2 = scene.add.image(8, 222, "playercard-clothing-2");
        tab.add(playercard_clothing_2);

        // lists
        const slots = [slot_1, slot_2, slot_3, slot_4, slot_5, slot_6, slot_7, slot_8, slot_9, slot_10, slot_11, slot_12];

        // down_button (components)
        const down_buttonButton = new Button(down_button);
        down_buttonButton.spriteName = "grey-button";
        down_buttonButton.callback = () => { this.nextPage() };

        // up_button (components)
        const up_buttonButton = new Button(up_button);
        up_buttonButton.spriteName = "grey-button";
        up_buttonButton.callback = () => { this.prevPage() };

        // slot_12 (components)
        const slot_12Button = new Button(slot_12);
        slot_12Button.spriteName = "large-box";
        slot_12Button.callback = () => { this.onSlotClick(11) };
        slot_12Button.activeFrame = false;

        // slot_11 (components)
        const slot_11Button = new Button(slot_11);
        slot_11Button.spriteName = "large-box";
        slot_11Button.callback = () => { this.onSlotClick(10) };
        slot_11Button.activeFrame = false;

        // slot_10 (components)
        const slot_10Button = new Button(slot_10);
        slot_10Button.spriteName = "large-box";
        slot_10Button.callback = () => { this.onSlotClick(9) };
        slot_10Button.activeFrame = false;

        // slot_9 (components)
        const slot_9Button = new Button(slot_9);
        slot_9Button.spriteName = "large-box";
        slot_9Button.callback = () => { this.onSlotClick(8) };
        slot_9Button.activeFrame = false;

        // slot_8 (components)
        const slot_8Button = new Button(slot_8);
        slot_8Button.spriteName = "large-box";
        slot_8Button.callback = () => { this.onSlotClick(7) };
        slot_8Button.activeFrame = false;

        // slot_7 (components)
        const slot_7Button = new Button(slot_7);
        slot_7Button.spriteName = "large-box";
        slot_7Button.callback = () => { this.onSlotClick(6) };
        slot_7Button.activeFrame = false;

        // slot_6 (components)
        const slot_6Button = new Button(slot_6);
        slot_6Button.spriteName = "large-box";
        slot_6Button.callback = () => { this.onSlotClick(5) };
        slot_6Button.activeFrame = false;

        // slot_5 (components)
        const slot_5Button = new Button(slot_5);
        slot_5Button.spriteName = "large-box";
        slot_5Button.callback = () => { this.onSlotClick(4) };
        slot_5Button.activeFrame = false;

        // slot_4 (components)
        const slot_4Button = new Button(slot_4);
        slot_4Button.spriteName = "large-box";
        slot_4Button.callback = () => { this.onSlotClick(3) };
        slot_4Button.activeFrame = false;

        // slot_3 (components)
        const slot_3Button = new Button(slot_3);
        slot_3Button.spriteName = "large-box";
        slot_3Button.callback = () => { this.onSlotClick(2) };
        slot_3Button.activeFrame = false;

        // slot_2 (components)
        const slot_2Button = new Button(slot_2);
        slot_2Button.spriteName = "large-box";
        slot_2Button.callback = () => { this.onSlotClick(1) };
        slot_2Button.activeFrame = false;

        // slot_1 (components)
        const slot_1Button = new Button(slot_1);
        slot_1Button.spriteName = "large-box";
        slot_1Button.callback = () => { this.onSlotClick(0) };
        slot_1Button.activeFrame = false;

        // playercard_clothing_2 (components)
        const playercard_clothing_2SimpleButton = new SimpleButton(playercard_clothing_2);
        playercard_clothing_2SimpleButton.callback = () => { this.onTabClick() };

        this.container = container;
        this.slots = slots;

        /* START-USER-CTR-CODE */
        this.page = 1
        this.pageSize = 12
        this.filter = null

        this.inventoryLoader = new InventoryLoader(this, this.slots)
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

  get inventory() {
        let inventory = this.world.client.inventory

        let returned_inventory = inventory.color.concat(inventory.flag, inventory.photo)

        return Object.values(returned_inventory).flat()
    }

    get maxPage() {
        return Math.ceil(this.inventory.length / this.pageSize)
    }

    showPage() {
        if (!this.visible) return

        let page = this.inventory.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)
        this.inventoryLoader.loadPage(page)
    }

    prevPage() {
        let page = this.page - 1
        if (page < 1) return

        this.page = page
        this.showPage()
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.maxPage) return

        this.page = page
        this.showPage()
    }

    onTabClick() {
        if (this.container.visible) {
            this.parentContainer.bringToTop(this)
            this.parentContainer.inventorySort.closeMenu()
            this.x -= 495

        } else {
            this.parentContainer.sendToBack(this)
            this.x += 495
        }

        this.container.visible = !this.container.visible
    }

    onSlotClick(slotId) {
        let item = this.slots[slotId].item

        if (!item || !item.id || !item.active) return

        this.network.send('update_player', { item: item.id })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
