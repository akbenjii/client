import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, NineSlice, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class PenguinGames extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.block;
        /** @type {Phaser.GameObjects.Image} */
        this.claim;
        /** @type {Phaser.GameObjects.Image} */
        this.check_mar;
        /** @type {Phaser.GameObjects.Image} */
        this.check_berg;
        /** @type {Phaser.GameObjects.Image} */
        this.check_swim;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // board
        const board = scene.add.image(11, -48, "pg-interface", "board");
        board.scaleX = 1.4547045565854764;
        board.scaleY = 1.4547045565854764;
        this.add(board);

        // claim
        const claim = scene.add.image(-7, 148, "pg-interface", "claim");
        claim.scaleX = 1.4547045565854764;
        claim.scaleY = 1.4547045565854764;
        claim.visible = false;
        this.add(claim);

        // check_mar
        const check_mar = scene.add.image(-71, -67, "pg-interface", "check");
        check_mar.scaleX = 1.4547045565854764;
        check_mar.scaleY = 1.4547045565854764;
        check_mar.visible = false;
        this.add(check_mar);

        // check_berg
        const check_berg = scene.add.image(-69, -29, "pg-interface", "check");
        check_berg.scaleX = 1.4547045565854764;
        check_berg.scaleY = 1.4547045565854764;
        check_berg.visible = false;
        this.add(check_berg);

        // check_swim
        const check_swim = scene.add.image(-69, 8, "pg-interface", "check");
        check_swim.scaleX = 1.4547045565854764;
        check_swim.scaleY = 1.4547045565854764;
        check_swim.visible = false;
        this.add(check_swim);

        // grey_button
        const grey_button = scene.add.image(310, -403, "main", "grey-button");
        grey_button.scaleX = 0.892380938710045;
        grey_button.scaleY = 0.892380938710045;
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(310, -403, "main", "grey-x");
        grey_x.scaleX = 1.091114033141114;
        grey_x.scaleY = 1.091114033141114;
        this.add(grey_x);

        // block (components)
        new Interactive(block);

        // claim (components)
        const claimButton = new Button(claim);
        claimButton.spriteName = "claim";
        claimButton.callback = () => this.interface.prompt.showItem(3003);
        claimButton.activeFrame = false;

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => { this.visible = false };

        this.block = block;
        this.claim = claim;
        this.check_mar = check_mar;
        this.check_berg = check_berg;
        this.check_swim = check_swim;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
