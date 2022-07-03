import BaseScene from '@scenes/base/BaseScene'

import { Button, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Start extends BaseScene {

    constructor() {
        super("Start");

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // pgames
        this.add.image(760, 375, "logosplash");

        // bottom
        this.add.image(760, 766, "start", "bottom");

        // blog-text
        const blog_text = this.add.text(363, 885, "", {});
        blog_text.setOrigin(0.5, 0.5);
        blog_text.text = "JOIN OUR DISCORD";
        blog_text.setStyle({ "align": "center", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "italic", "stroke": "#ffffffff" });

        // blogButton
        const blogButton = this.add.image(364, 812, "start", "blog");

        // createButton
        const createButton = this.add.image(1101, 828, "start", "create-button");
        createButton.scaleX = 1.2;
        createButton.scaleY = 1.2;

        // penguin_1
        const penguin_1 = this.add.image(1296, 820, "start", "penguin-1");
        penguin_1.scaleX = 1.3;
        penguin_1.scaleY = 1.3;

        // startButton
        const startButton = this.add.sprite(760, 826, "start", "start-button");

        // startText
        const startText = this.add.text(760, 828, "", {});
        startText.setOrigin(0.5, 0.5);
        startText.text = "START";
        startText.setStyle({ "align": "center", "fixedWidth":250,"fontFamily": "CCFaceFront", "fontSize": "40px", "fontStyle": "italic", "stroke": "#000000ff", "strokeThickness":10});

        // logo
        this.add.image(760, 680, "cpf_logo");

        // blogButton (components)
        const blogButtonSimpleButton = new SimpleButton(blogButton);
        blogButtonSimpleButton.callback = () => window.open('https:/discord.gg/cpf', '_blank').focus();;

        // createButton (components)
        const createButtonButton = new Button(createButton);
        createButtonButton.spriteName = "create-button";
        createButtonButton.callback = () => this.onCreateClick();
        createButtonButton.activeFrame = false;

        // startButton (components)
        const startButtonButton = new Button(startButton);
        startButtonButton.spriteName = "start-button";
        startButtonButton.callback = () => this.onStartClick();

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    onBlogClick() {

    }

    onStartClick() {
        if (this.network.isSavedPenguins) return this.scene.start('PenguinSelect')

        this.scene.start('Login')
    }

    onCreateClick() {
        window.location.href = '/create'
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
