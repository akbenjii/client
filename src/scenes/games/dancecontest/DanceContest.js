import RoomScene from '@scenes/rooms/RoomScene'

import { Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class DanceContest extends RoomScene {

    constructor() {
        super("DanceContest");

        /* START-USER-CTR-CODE */

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("load-pack", "assets/media/interface/menus/load/load-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // lists
        const sort = [];

        // bg (components)
        new Interactive(bg);

        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()

        var sprite = Phaser.Math.RND.between(0, 15)
        if (sprite < 6) {
            this.loading.setPosition(760, 410)
            this.loading.play("shovelling")
        } else if (sprite < 11) {
            this.loading.setPosition(760, 300)
            this.loading.play("pizzatron")
        } else {
            this.loading.setPosition(760, 370)
            this.loading.play("cartSurfer")
        }
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
