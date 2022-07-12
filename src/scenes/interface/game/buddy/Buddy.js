import BaseContainer from '@scenes/base/BaseContainer'

import { Button, DraggableContainer, ShowHint } from '@components/components'

import BuddyItem from './buddy_item/BuddyItem'


/* START OF COMPILED CODE */

export default class Buddy extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Text} */
        this.text;
        /** @type {Phaser.GameObjects.Text} */
        this.total;
        /** @type {BuddyItem[]} */
        this.items;


        // friend_popup_png
        const friend_popup_png = scene.add.image(0, 0, "friends", "friend popup.png");
        this.add(friend_popup_png);

        // text
        const text = scene.add.text(0, -236, "", {});
        text.setOrigin(0.5, 0.5);
        text.text = "Your Friends";
        text.setStyle({ "align": "center", "color": "#000000", "fixedWidth":420,"fontFamily": "Burbank Small", "fontSize": "30px" });
        this.add(text);

        // x_button
        const x_button = scene.add.image(177, -231, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(177, -233, "main", "blue-x");
        this.add(blue_x);

        // scroller_png
        const scroller_png = scene.add.image(177, 19, "friends", "scroller.png");
        this.add(scroller_png);

        // down_button
        const down_button = scene.add.image(177, 201, "main", "blue-button");
        this.add(down_button);

        // up_button
        const up_button = scene.add.image(177, -167, "main", "blue-button");
        this.add(up_button);

        // blue_arrow_1
        const blue_arrow_1 = scene.add.image(177, 199, "main", "blue-arrow");
        blue_arrow_1.flipY = true;
        this.add(blue_arrow_1);

        // blue_arrow
        const blue_arrow = scene.add.image(177, -169, "main", "blue-arrow");
        this.add(blue_arrow);

        // buddy_item_7
        const buddy_item_7 = new BuddyItem(scene, -26, 194);
        this.add(buddy_item_7);

        // buddy_item_6
        const buddy_item_6 = new BuddyItem(scene, -26, 142);
        this.add(buddy_item_6);

        // buddy_item_5
        const buddy_item_5 = new BuddyItem(scene, -26, 90);
        this.add(buddy_item_5);

        // buddy_item_4
        const buddy_item_4 = new BuddyItem(scene, -26, 38);
        this.add(buddy_item_4);

        // buddy_item_3
        const buddy_item_3 = new BuddyItem(scene, -26, -14);
        this.add(buddy_item_3);

        // buddy_item_2
        const buddy_item_2 = new BuddyItem(scene, -26, -66);
        this.add(buddy_item_2);

        // buddy_item_1
        const buddy_item_1 = new BuddyItem(scene, -26, -118);
        this.add(buddy_item_1);

        // buddy_item
        const buddy_item = new BuddyItem(scene, -26, -170);
        this.add(buddy_item);

        // buddy_button
        const buddy_button = scene.add.image(-60, 261, "main", "blue-button");
        this.add(buddy_button);

        // profile_button
        const profile_button = scene.add.image(0, 261, "main", "blue-button");
        this.add(profile_button);

        // igloo_button
        const igloo_button = scene.add.image(60, 261, "main", "blue-button");
        this.add(igloo_button);

        // buddies_icon_disabled
        const buddies_icon_disabled = scene.add.image(-60, 259, "main", "buddies-icon");
        this.add(buddies_icon_disabled);

        // help_icon_disabled
        const help_icon_disabled = scene.add.image(0, 259, "main", "online-icon");
        this.add(help_icon_disabled);

        // igloo_icon_disabled
        const igloo_icon_disabled = scene.add.image(60, 259, "main", "ignore-icon");
        this.add(igloo_icon_disabled);

        // total
        const total = scene.add.text(-132, 279, "", {});
        total.setOrigin(0.5, 0.5);
        total.setStyle({ "color": "#003366", "fixedWidth":100,"fixedHeight":64,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(total);

        // lists
        const items = [buddy_item, buddy_item_1, buddy_item_2, buddy_item_3, buddy_item_4, buddy_item_5, buddy_item_6, buddy_item_7];

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = friend_popup_png;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        // down_button (components)
        const down_buttonButton = new Button(down_button);
        down_buttonButton.spriteName = "blue-button";
        down_buttonButton.callback = () => this.nextPage();
        down_buttonButton.activeFrame = false;

        // up_button (components)
        const up_buttonButton = new Button(up_button);
        up_buttonButton.spriteName = "blue-button";
        up_buttonButton.callback = () => this.prevPage();
        up_buttonButton.activeFrame = false;

        // buddy_button (components)
        const buddy_buttonButton = new Button(buddy_button);
        buddy_buttonButton.spriteName = "blue-button";
        buddy_buttonButton.callback = () => this.switchList('buddies', 'Your Friends');
        const buddy_buttonShowHint = new ShowHint(buddy_button);
        buddy_buttonShowHint.text = "Show Buddies";

        // profile_button (components)
        const profile_buttonButton = new Button(profile_button);
        profile_buttonButton.spriteName = "blue-button";
        profile_buttonButton.callback = () => this.switchList('room', 'Users in Room');
        const profile_buttonShowHint = new ShowHint(profile_button);
        profile_buttonShowHint.text = "Show Online";

        // igloo_button (components)
        const igloo_buttonButton = new Button(igloo_button);
        igloo_buttonButton.spriteName = "blue-button";
        igloo_buttonButton.callback = () => this.switchList('ignores', 'Ignore List');
        const igloo_buttonShowHint = new ShowHint(igloo_button);
        igloo_buttonShowHint.text = "Show Ignored";

        this.text = text;
        this.total = total;
        this.items = items;

        /* START-USER-CTR-CODE */

        this.listType = 'buddies'
        this.page = 1
        this.pageSize = 8

        this.showPage()

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    get penguins() {
        return this[this.listType]
    }

    get maxPage() {
        return Math.ceil(this.penguins.length / this.pageSize)
    }

    /**
     * Gets the client buddies array, sorted first by online status, and then alphabetically.
     *
     * @readonly
     */
    get buddies() {
        return this.world.client.buddies.sort((a, b) => {
            return -(a.online - b.online) // Reverse: true before false
            || a.username.toLowerCase().localeCompare(b.username.toLowerCase())
        })
    }

    /**
     * Gets the users in current room, sorted alphabetically.
     *
     * @readonly
     */
    get room() {
        let penguins = Object.values(this.world.room.penguins)

        return penguins.map(penguin => {
            // Map penguin to buddy item object
            return { id: penguin.id, username: this.filterUsername(penguin)}
        }).sort((a, b) => {
            // Then sort by username
            return a.username.toLowerCase().localeCompare(b.username.toLowerCase())
        })
    }

	filterUsername(penguin) {
		if (penguin.username_approved == 1) {
            return penguin.username
        } else {
            return "P" + penguin.id
        }
	}

    /**
     * Gets the client ignores array, sorted alphabetically.
     *
     * @readonly
     */
    get ignores() {
        return this.world.client.ignores.sort((a, b) => {
            return a.username.toLowerCase().localeCompare(b.username.toLowerCase())
        })
    }

    showPage() {
        if (this.visible == false) return

        let page = this.penguins.slice((this.page - 1) * this.pageSize, this.page * this.pageSize)

        for (let [index, item] of this.items.entries()) {
            let buddy = page[index]

            if (buddy) {
                item.setItem(buddy)
            } else {
                item.setItem(null)
            }
        }

        // Update total text
        if (this.listType == 'buddies' || this.listType == 'ignores') {
            this.total.text = `${this.world.client[this.listType].length}/100`
            this.total.visible = true
        } else {
            this.total.visible = false
        }

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

    switchList(type, text) {
        this.page = 1
        this.text.text = text
        this.listType = type
        this.showPage()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
