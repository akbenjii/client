import { Button } from '@components/components'
// You can write more code here

/* START OF COMPILED CODE */

export default class beta_hats extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "town", frame ?? "hats");

        /** @type {number} */
        this.item = 413;


        this.setOrigin(0, 0);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "hats";
        thisButton.callback = () => this.scene.buy(this.item);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
