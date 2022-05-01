import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice, Button } from '@components/components'

import SingleButton from './buttons/SingleButton'


/* START OF COMPILED CODE */

export default class CoinsPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 470);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.bg;
        /** @type {SingleButton} */
        this.single;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;


        this.visible = false;

        // block_1
        const block_1 = scene.add.rectangle(0, 0, 1520, 960);
        block_1.isFilled = true;
        block_1.fillColor = 0;
        block_1.fillAlpha = 0.2;
        this.add(block_1);

        // bg
        const bg = scene.add.rectangle(0, 0, 708, 324);
        bg.isFilled = true;
        bg.fillColor = 164045;
        this.add(bg);

        // single
        const single = new SingleButton(scene, 0, 50);
        this.add(single);

        // coins
        const coins = scene.add.text(0, -75, "", {});
        coins.setOrigin(0.5, 0.5);
        coins.text = "You have earned 69 coins.\nYou now have 420 coins.";
        coins.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":628,"fontFamily": "Burbank Small", "fontSize": "26px", "shadow.offsetX":3,"shadow.offsetY":2,"shadow.color": "#012855ff" });
        this.add(coins);

        // block_1 (components)
        new Interactive(block_1);

        // bg (components)
        const bgNineSlice = new NineSlice(bg);
        bgNineSlice.corner = 50;

        this.bg = bg;
        this.single = single;
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
