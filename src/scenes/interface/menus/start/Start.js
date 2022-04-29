import BaseScene from '@scenes/base/BaseScene'

import { Button, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Start extends BaseScene {

    constructor() {
        super("Start");

        /** @type {Phaser.GameObjects.Image} */
        this.crebutton;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    create() {

        // bg_png
        this.add.image(761, 480, "startscreen", "og-start-bg.png");

        // crebutton
        const crebutton = this.add.image(753, 755, "startscreen", "create");
        crebutton.visible = false;

        // rectangle
        const rectangle = this.add.rectangle(752, 753, 128, 128);
        rectangle.scaleX = 4.711306974412683;
        rectangle.scaleY = 1.088834620938614;

        // startscreen1_png
        this.add.image(760, 480, "startscreen", "startscreen1.png");

        // start
        const start = this.add.sprite(760, 553, "startscreen", "start");

        // crebutton (components)
        new SimpleButton(crebutton);

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.hoverCallback = () => this.onCreateHover();
        rectangleSimpleButton.hoverOutCallback = () => this.onCreateOut();
        rectangleSimpleButton.callback = () => this.onCreateClick();

        // start (components)
        const startButton = new Button(start);
        startButton.spriteName = "start";
        startButton.callback = () => this.onStartClick();

        this.crebutton = crebutton;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onBlogClick() {
        window.location.href = 'https://cpvanilla.net'
    }

    onStartClick() {
        if (this.network.isSavedPenguins) return this.scene.start('PenguinSelect')

        this.scene.start('Login')
    }

    onCreateClick() {
        window.location.href = '/create'
    }

    onCreateHover() {
        this.crebutton.visible = true
    }

    onCreateOut() {
        this.crebutton.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
