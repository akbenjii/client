import BaseContainer from '@scenes/base/BaseContainer'
import DualButtons from '@scenes/interface/prompts/buttons/DualButtons';

import { Button, Interactive, NineSlice, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Snitch extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {DualButtons} */
        this.step2_buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.step2_text;
        /** @type {Phaser.GameObjects.Container} */
        this.step1;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // rectangle
        const rectangle = scene.add.rectangle(0, -22, 708, 600);
        rectangle.isFilled = true;
        rectangle.fillColor = 164045;
        this.add(rectangle);

        // header
        const header = scene.add.text(0, -254, "", {});
        header.setOrigin(0.5, 0.5);
        header.text = "Report Player";
        header.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(header);

        // x_button
        const x_button = scene.add.image(300, -268, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -270, "main", "blue-x");
        this.add(blue_x);

        // step2_buttons
        const step2_buttons = new DualButtons(scene, 0, 133);
        step2_buttons.visible = false;
        this.add(step2_buttons);

        // step2_text
        const step2_text = scene.add.text(0, -208, "", {});
        step2_text.setOrigin(0.5, 0);
        step2_text.visible = false;
        step2_text.text = "Error. Please try again.";
        step2_text.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "30px" });
        step2_text.setWordWrapWidth(600);
        this.add(step2_text);

        // step1
        const step1 = scene.add.container(0, -193);
        this.add(step1);

        // igloo_btn
        const igloo_btn = scene.add.image(0, 371, "main", "help-button");
        step1.add(igloo_btn);

        // igloo_text
        const igloo_text = scene.add.text(0, 370, "", {});
        igloo_text.setOrigin(0.5, 0.5);
        igloo_text.text = "Inappropriate Igloo";
        igloo_text.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":562,"fontFamily": "Burbank Small", "fontSize": "38px", "fontStyle": "bold" });
        step1.add(igloo_text);

        // name_btn
        const name_btn = scene.add.image(0, 239, "main", "help-button");
        step1.add(name_btn);

        // name_text
        const name_text = scene.add.text(0, 238, "", {});
        name_text.setOrigin(0.5, 0.5);
        name_text.text = "Inappropriate Penguin Name";
        name_text.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":562,"fontFamily": "Burbank Small", "fontSize": "38px", "fontStyle": "bold" });
        step1.add(name_text);

        // lang_btn
        const lang_btn = scene.add.image(0, 107, "main", "help-button");
        step1.add(lang_btn);

        // lang_text
        const lang_text = scene.add.text(0, 106, "", {});
        lang_text.setOrigin(0.5, 0.5);
        lang_text.text = "Inappropriate Language";
        lang_text.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":562,"fontFamily": "Burbank Small", "fontSize": "38px", "fontStyle": "bold" });
        step1.add(lang_text);

        // subheading
        const subheading = scene.add.text(0, 0, "", {});
        subheading.setOrigin(0.5, 0.5);
        subheading.text = "Why do you want to report this player?";
        subheading.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "30px" });
        step1.add(subheading);

        // block (components)
        new Interactive(block);

        // rectangle (components)
        const rectangleNineSlice = new NineSlice(rectangle);
        rectangleNineSlice.corner = 50;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        // igloo_btn (components)
        const igloo_btnButton = new Button(igloo_btn);
        igloo_btnButton.spriteName = "help-button";
        igloo_btnButton.callback = () => this.enterStep2('igloo');

        // name_btn (components)
        const name_btnButton = new Button(name_btn);
        name_btnButton.spriteName = "help-button";
        name_btnButton.callback = () => this.enterStep2('name');

        // lang_btn (components)
        const lang_btnButton = new Button(lang_btn);
        lang_btnButton.spriteName = "help-button";
        lang_btnButton.callback = () => this.enterStep2('lang');

        this.step2_buttons = step2_buttons;
        this.step2_text = step2_text;
        this.step1 = step1;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    enterStep2(reason) {
        this.reason = reason;

        this.step1.visible = false;
        this.step2_buttons.visible = true;
        this.step2_text.visible = true;

        if (reason === 'name') {
            this.step2_text.text = "Whilst we do audit every penguin name before verifying it, no-one is perfect, and our staff can't speak every language! This means some inappropriate names can slip through the cracks. If you click yes, we will look into this penguin's username in more detail. If you changed your mind, click no.";
        }
        else if (reason === 'igloo') {
            this.step2_text.text = "Staff are not able to check that every penguin's igloo is appropriate, so your report helps us a lot. If you click yes, one of our staff will visit the penguin's igloo and audit the suitability of it. If instead you want to report a chat message in an igloo, click 'Inappropriate Language'.";
        }
        else if (reason === 'lang') {
            this.step2_text.text = "We have a filter to try and minimise the inappropriate language in CPF, but people can always find a way around filtered messages. If you click yes, a chat log will be sent to one of our staff members who will audit the messages sent for inappropriate content.";
        }
        else {
            this.step2_text.text = "Error. Please try again.";
        }

        
    }

    callback() {
        this.network.send('report_player', {
            id: this.id, reason: this.reason
        })
    };

    returnToStep1(id = this.id) {
        this.id = id
        this.step1.visible = true;
        this.step2_buttons.visible = false;
        this.step2_text.visible = false;
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
