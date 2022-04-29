import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class UpgradeButton extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x ?? 0, y ?? 0, texture || "iglooupgrade", frame ?? "upgradebutton");

        /** @type {number} */
        this.igloo = 0;


        this.setOrigin(0, 0);

        // this (components)
        const thisButton = new Button(this);
        thisButton.spriteName = "upgradebutton";
        thisButton.callback = () => this.scene.buyIgloo(this.igloo);

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
