import RoomScene from '@scenes/rooms/RoomScene'

import { Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class HydroHopper extends RoomScene {

    constructor() {
        super("HydroHopper");

        /* START-USER-CTR-CODE */
        this.music = "hydro"
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
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
