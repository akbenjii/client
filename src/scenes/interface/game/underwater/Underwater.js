import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, NineSlice, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Underwater extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.block;
        /** @type {Phaser.GameObjects.Sprite} */
        this.uwbg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.x_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.item_35012;
        /** @type {Phaser.GameObjects.Sprite} */
        this.item_35013;
        /** @type {Phaser.GameObjects.Sprite} */
        this.item_4518;
        /** @type {Phaser.GameObjects.Text} */
        this.claim_35017;
        /** @type {Phaser.GameObjects.Sprite} */
        this.item_35016;
        /** @type {Phaser.GameObjects.Sprite} */
        this.item_35017;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blocker_35013;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blocker_35017;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blocker_35016;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blocker_4518;
        /** @type {Phaser.GameObjects.Text} */
        this.claim_35016;
        /** @type {Phaser.GameObjects.Text} */
        this.later_35016;
        /** @type {Phaser.GameObjects.Text} */
        this.later_35013;
        /** @type {Phaser.GameObjects.Text} */
        this.later_4518;
        /** @type {Phaser.GameObjects.Text} */
        this.later_35017;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // uwbg
        const uwbg = scene.add.sprite(0, -16, "partyinterface_uw", "uwbg");
        this.add(uwbg);

        // x_button
        const x_button = scene.add.sprite(515, -396, "partyinterface_uw", "uwclose");
        this.add(x_button);

        // claim_35012
        const claim_35012 = scene.add.text(-295, -31, "", {});
        claim_35012.setOrigin(0.5, 0.5);
        claim_35012.text = "CLAIM!";
        claim_35012.setStyle({ "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        this.add(claim_35012);

        // item_35012
        const item_35012 = scene.add.sprite(-295, -176, "partyinterface_uw", "35012");
        item_35012.scaleX = 0.8;
        item_35012.scaleY = 0.8;
        this.add(item_35012);

        // claim_35013
        const claim_35013 = scene.add.text(0, -31, "", {});
        claim_35013.setOrigin(0.5, 0.5);
        claim_35013.visible = false;
        claim_35013.text = "CLAIM!";
        claim_35013.setStyle({ "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        this.add(claim_35013);

        // item_35013
        const item_35013 = scene.add.sprite(0, -176, "partyinterface_uw", "35013");
        item_35013.scaleX = 0.8;
        item_35013.scaleY = 0.8;
        this.add(item_35013);

        // claim_4518
        const claim_4518 = scene.add.text(0, 299, "", {});
        claim_4518.setOrigin(0.5, 0.5);
        claim_4518.visible = false;
        claim_4518.text = "CLAIM!";
        claim_4518.setStyle({ "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        this.add(claim_4518);

        // item_4518
        const item_4518 = scene.add.sprite(0, 154, "partyinterface_uw", "4518");
        item_4518.scaleX = 0.8;
        item_4518.scaleY = 0.8;
        this.add(item_4518);

        // claim_35017
        const claim_35017 = scene.add.text(-281, 299, "", {});
        claim_35017.setOrigin(0.5, 0.5);
        claim_35017.visible = false;
        claim_35017.text = "CLAIM!";
        claim_35017.setStyle({ "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        this.add(claim_35017);

        // item_35016
        const item_35016 = scene.add.sprite(257, -2, "partyinterface_uw", "35016");
        this.add(item_35016);

        // item_35017
        const item_35017 = scene.add.sprite(-295, 170, "partyinterface_uw", "35017");
        item_35017.scaleX = 0.8;
        item_35017.scaleY = 0.8;
        this.add(item_35017);

        // blocker_35013
        const blocker_35013 = scene.add.sprite(0, -176, "partyinterface_uw", "35013");
        blocker_35013.scaleX = 0.8;
        blocker_35013.scaleY = 0.8;
        blocker_35013.alpha = 0.9;
        blocker_35013.alphaTopLeft = 0.9;
        blocker_35013.alphaTopRight = 0.9;
        blocker_35013.alphaBottomLeft = 0.9;
        blocker_35013.alphaBottomRight = 0.9;
        blocker_35013.tintFill = true;
        blocker_35013.tintTopLeft = 0;
        blocker_35013.tintTopRight = 0;
        blocker_35013.tintBottomLeft = 0;
        blocker_35013.tintBottomRight = 0;
        this.add(blocker_35013);

        // blocker_35017
        const blocker_35017 = scene.add.sprite(-295, 170, "partyinterface_uw", "35017");
        blocker_35017.scaleX = 0.8;
        blocker_35017.scaleY = 0.8;
        blocker_35017.alpha = 0.9;
        blocker_35017.alphaTopLeft = 0.9;
        blocker_35017.alphaTopRight = 0.9;
        blocker_35017.alphaBottomLeft = 0.9;
        blocker_35017.alphaBottomRight = 0.9;
        blocker_35017.tintFill = true;
        blocker_35017.tintTopLeft = 0;
        blocker_35017.tintTopRight = 0;
        blocker_35017.tintBottomLeft = 0;
        blocker_35017.tintBottomRight = 0;
        this.add(blocker_35017);

        // blocker_35016
        const blocker_35016 = scene.add.sprite(256, -2, "partyinterface_uw", "35016");
        blocker_35016.alpha = 0.9;
        blocker_35016.alphaTopLeft = 0.9;
        blocker_35016.alphaTopRight = 0.9;
        blocker_35016.alphaBottomLeft = 0.9;
        blocker_35016.alphaBottomRight = 0.9;
        blocker_35016.tintFill = true;
        blocker_35016.tintTopLeft = 0;
        blocker_35016.tintTopRight = 0;
        blocker_35016.tintBottomLeft = 0;
        blocker_35016.tintBottomRight = 0;
        this.add(blocker_35016);

        // blocker_4518
        const blocker_4518 = scene.add.sprite(0, 154, "partyinterface_uw", "4518");
        blocker_4518.scaleX = 0.8;
        blocker_4518.scaleY = 0.8;
        blocker_4518.alpha = 0.9;
        blocker_4518.alphaTopLeft = 0.9;
        blocker_4518.alphaTopRight = 0.9;
        blocker_4518.alphaBottomLeft = 0.9;
        blocker_4518.alphaBottomRight = 0.9;
        blocker_4518.tintFill = true;
        blocker_4518.tintTopLeft = 0;
        blocker_4518.tintTopRight = 0;
        blocker_4518.tintBottomLeft = 0;
        blocker_4518.tintBottomRight = 0;
        this.add(blocker_4518);

        // claim_35016
        const claim_35016 = scene.add.text(256, 122, "", {});
        claim_35016.setOrigin(0.5, 0.5);
        claim_35016.visible = false;
        claim_35016.text = "CLAIM PET!";
        claim_35016.setStyle({ "fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        this.add(claim_35016);

        // later_35016
        const later_35016 = scene.add.text(257, 122, "", {});
        later_35016.setOrigin(0.5, 0.5);
        later_35016.text = "Come back on the 22nd\n to unlock this awesome pet!";
        later_35016.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
        later_35016.setWordWrapWidth(300);
        this.add(later_35016);

        // later_35013
        const later_35013 = scene.add.text(1, -31, "", {});
        later_35013.setOrigin(0.5, 0.5);
        later_35013.text = "Come back on the 16th\n to unlock this reward!";
        later_35013.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
        later_35013.setWordWrapWidth(300);
        this.add(later_35013);

        // later_4518
        const later_4518 = scene.add.text(1, 299, "", {});
        later_4518.setOrigin(0.5, 0.5);
        later_4518.text = "Come back on the 20th\n to unlock this reward!";
        later_4518.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
        later_4518.setWordWrapWidth(300);
        this.add(later_4518);

        // later_35017
        const later_35017 = scene.add.text(-280, 299, "", {});
        later_35017.setOrigin(0.5, 0.5);
        later_35017.text = "Come back on the 18th\n to unlock this reward!";
        later_35017.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "20px" });
        later_35017.setWordWrapWidth(300);
        this.add(later_35017);

        // block (components)
        new Interactive(block);

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "uwclose";
        x_buttonButton.callback = () => { this.visible = false };

        // item_35012 (components)
        const item_35012SimpleButton = new SimpleButton(item_35012);
        item_35012SimpleButton.callback = () => this.interface.prompt.showItem(35012);

        // item_35013 (components)
        const item_35013SimpleButton = new SimpleButton(item_35013);
        item_35013SimpleButton.callback = () => this.interface.prompt.showItem(35013);

        // item_4518 (components)
        const item_4518SimpleButton = new SimpleButton(item_4518);
        item_4518SimpleButton.callback = () => this.interface.prompt.showItem(4518);

        // item_35016 (components)
        const item_35016SimpleButton = new SimpleButton(item_35016);
        item_35016SimpleButton.callback = () => this.interface.prompt.showItem(35016);

        // item_35017 (components)
        const item_35017SimpleButton = new SimpleButton(item_35017);
        item_35017SimpleButton.callback = () => this.interface.prompt.showItem(35017);

        // blocker_35013 (components)
        new Interactive(blocker_35013);

        // blocker_35017 (components)
        new Interactive(blocker_35017);

        // blocker_35016 (components)
        new Interactive(blocker_35016);

        // blocker_4518 (components)
        new Interactive(blocker_4518);

        this.block = block;
        this.uwbg = uwbg;
        this.x_button = x_button;
        this.item_35012 = item_35012;
        this.item_35013 = item_35013;
        this.item_4518 = item_4518;
        this.claim_35017 = claim_35017;
        this.item_35016 = item_35016;
        this.item_35017 = item_35017;
        this.blocker_35013 = blocker_35013;
        this.blocker_35017 = blocker_35017;
        this.blocker_35016 = blocker_35016;
        this.blocker_4518 = blocker_4518;
        this.claim_35016 = claim_35016;
        this.later_35016 = later_35016;
        this.later_35013 = later_35013;
        this.later_4518 = later_4518;
        this.later_35017 = later_35017;

        /* START-USER-CTR-CODE */

        let currentdate = new Date()

        if (currentdate.getDate() >= 22) {
            this.claim_35016.visible = true;
            this.later_35016.visible = false;
            this.blocker_35016.visible = false;
        }

        if (currentdate.getDate() >= 20) {
            this.claim_4518.visible = true;
            this.later_4518.visible = false;
            this.blocker_4518.visible = false;
        }

        if (currentdate.getDate() >= 16) {
            this.claim_35013.visible = true;
            this.later_35013.visible = false;
            this.blocker_35013.visible = false;
        }

        if (currentdate.getDate() >= 18) {
            this.claim_35017.visible = true;
            this.later_35017.visible = false;
            this.blocker_35017.visible = false;
        }

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
