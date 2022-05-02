import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class HQ extends RoomScene {

    constructor() {
        super("HQ");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'hq': () => this.triggerRoom(210, 760, 600),
        }
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hq-pack", "assets/media/rooms/old/hq/hq-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        this.add.image(760, 480, "hq", "bg.png");

        // light_png
        this.add.image(744, 415, "hq", "light.png");

        // wire_png
        this.add.image(738, -26, "hq", "wire.png");

        // board_png
        this.add.image(1073, 413, "hq", "board.png");

        // tv_png
        this.add.image(382, 281, "hq", "tv.png");

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
