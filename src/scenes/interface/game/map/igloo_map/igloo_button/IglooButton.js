import { SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class IglooButton extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 457);

        // igloo
        const igloo = scene.add.image(0, 20, "map-for-igloo", "igloo/igloo");
        igloo.setOrigin(0.5054945054945055, 0.5058823529411764);
        this.add(igloo);

        // this (components)
        new ShowHint(this);

        // igloo (components)
        const iglooSimpleButton = new SimpleButton(igloo);
        iglooSimpleButton.callback = () => this.onClick();
        new ShowHint(igloo);

        /* START-USER-CTR-CODE */

        this.scene = scene
        this.id

        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onClick() {
        if (this.id) {
            this.scene.world.client.sendJoinIgloo(this.id)
        }
    }

    reset() {
        this.id = null
        this.__ShowHint.text = null

        this.visible = false
    }

    show(igloo) {
        this.id = igloo.id
        this.__ShowHint.text = igloo.username

        this.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */