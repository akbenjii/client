import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class SingleButton extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        // prompt_button
        const prompt_button = scene.add.image(0, 0, "message", "prompt-button");
        prompt_button.scaleX = 0.44247050877704736;
        prompt_button.scaleY = 0.44247050877704736;
        this.add(prompt_button);

        // prompt_button (components)
        const prompt_buttonButton = new Button(prompt_button);
        prompt_buttonButton.spriteName = "prompt-button";
        prompt_buttonButton.callback = () => this.parentContainer.visible = false;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
