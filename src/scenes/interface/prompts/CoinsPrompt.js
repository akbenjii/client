import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class CoinsPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 470);

        /** @type {Phaser.GameObjects.Text} */
        this.coins;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // popup_png
        const popup_png = scene.add.image(0, 0, "coins", "popup.png");
        popup_png.scaleX = 0.41532636092319475;
        popup_png.scaleY = 0.41532636092319475;
        this.add(popup_png);

        // coins
        const coins = scene.add.text(-30, -200, "", {});
        coins.setOrigin(0.5, 0.5);
        coins.text = "69 coins.";
        coins.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":628,"fontFamily": "Burbank Small", "fontSize": "26px", "shadow.offsetX":3,"shadow.offsetY":2,"shadow.color": "#012855ff" });
        coins.setPadding({"left":175});
        this.add(coins);

        // coins_png
        const coins_png = scene.add.image(0, -35, "playercard", "coins.png");
        coins_png.scaleX = 1.870324564247692;
        coins_png.scaleY = 1.870324564247692;
        this.add(coins_png);

        // button_active_png
        const button_active_png = scene.add.image(0, 128, "coins", "game-button");
        button_active_png.scaleX = 0.37138841256607324;
        button_active_png.scaleY = 0.37138841256607324;
        this.add(button_active_png);

        // block (components)
        new Interactive(block);

        // button_active_png (components)
        const button_active_pngButton = new Button(button_active_png);
        button_active_pngButton.spriteName = "game-button";
        button_active_pngButton.callback = () => this.visible = false;

        this.coins = coins;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(game, coins) {
        this.coins.text = "You have earned " + coins.toString() + " coins.\n You now have " + this.world.client.coins.toString() + " coins."

        this.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
