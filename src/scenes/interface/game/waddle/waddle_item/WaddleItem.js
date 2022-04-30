import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class WaddleItem extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.icon;
        /** @type {Phaser.GameObjects.Text} */
        this.username;


        // waddle_item
        const waddle_item = scene.add.image(0, 0, "friends", "friend name.png");
        this.add(waddle_item);

        // icon
        const icon = scene.add.image(-137, 0, "main", "buddy/icon-load");
        this.add(icon);

        // username
        const username = scene.add.text(25, 0, "", {});
        username.setOrigin(0.5, 0.5);
        username.text = "Empty";
        username.setStyle({ "fixedWidth":270,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(username);

        this.icon = icon;
        this.username = username;

        /* START-USER-CTR-CODE */

        this.id = null

        this.spinnerTween = scene.tweens.add({
            targets: this.icon,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setItem(username) {
        this.visible = true

        this.username.text = (username) ? username : 'Empty'

        if (username) {
            this.stopSpinner()

            let texture = (username.toLowerCase() == this.world.client.penguin.username.toLowerCase())
                ? 'player'
                : 'none'

            this.icon.setTexture('main', `buddy/icon-${texture}`)

        } else {
            this.startSpinner()

            this.icon.setTexture('main', 'buddy/icon-load')
        }
    }

    hideItem() {
        this.visible = false
        this.stopSpinner()
    }

    startSpinner() {
        this.spinnerTween.seek(0)
        this.spinnerTween.resume()
    }

    stopSpinner() {
        this.spinnerTween.pause()
        this.icon.angle = 0
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
