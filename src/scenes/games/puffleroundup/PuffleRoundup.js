import RoomScene from '@scenes/rooms/RoomScene'

import { Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class PuffleRoundup extends RoomScene {

    constructor() {
        super("puffleRoundup");

        /* START-USER-CTR-CODE */
        this.music = "roundup"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

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

        //window.hide()
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
