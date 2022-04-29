import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton, ShowHint, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /* START-USER-CTR-CODE */
         this.roomTriggers = {
            'yumyuck': () => this.triggerGame("yumyuck", 911)
         }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("berg-pack", "assets/media/rooms/old/berg/berg-pack.json");
    }

    /** @returns {void} */
    _create() {

        // berg_bg
        const berg_bg = this.add.image(-6, 2, "berg", "bg.png");
        berg_bg.setOrigin(0, 0);

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
