import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class DualButtons extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // no_button
        const no_button = scene.add.image(110, 0, "prompt", "window-button-small");
        no_button.setOrigin(0.5, 0.49523809523809526);
        this.add(no_button);

        // yesNo_1
        const yesNo_1 = scene.add.image(110, 0, "message", "YesNo");
        yesNo_1.scaleX = 0.3962191358024689;
        yesNo_1.scaleY = 0.3962191358024689;
        this.add(yesNo_1);

        // text_2
        const text_2 = scene.add.text(110, 0, "", {});
        text_2.setOrigin(0.5, 0.5);
        text_2.text = "No";
        text_2.setStyle({ "align": "center", "fixedWidth":150,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(text_2);

        // yesNo
        const yesNo = scene.add.image(-110, 0, "message", "YesNo");
        yesNo.scaleX = 0.3962191358024689;
        yesNo.scaleY = 0.3962191358024689;
        this.add(yesNo);

        // text_1
        const text_1 = scene.add.text(-110, 0, "", {});
        text_1.setOrigin(0.5, 0.5);
        text_1.text = "Yes";
        text_1.setStyle({ "align": "center", "fixedWidth":150,"fontFamily": "Arial Narrow", "fontSize": "40px", "fontStyle": "bold" });
        this.add(text_1);

        // no_button (components)
        const no_buttonButton = new Button(no_button);
        no_buttonButton.spriteName = "window-button-small";
        no_buttonButton.callback = () => this.onNoClick();
        no_buttonButton.activeFrame = false;

        // yesNo_1 (components)
        const yesNo_1Button = new Button(yesNo_1);
        yesNo_1Button.spriteName = "YesNo";
        yesNo_1Button.callback = () => this.onNoClick();

        // yesNo (components)
        const yesNoButton = new Button(yesNo);
        yesNoButton.spriteName = "YesNo";
        yesNoButton.callback = () => this.onYesClick();

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

    onYesClick() {
        this.parentContainer.callback()
        this.parentContainer.visible = false
    }

    onNoClick() {
        this.parentContainer.noCallback()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
