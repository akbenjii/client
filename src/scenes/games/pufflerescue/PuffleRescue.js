import RoomScene from '@scenes/rooms/RoomScene'

import { Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class PuffleRescue extends RoomScene {

    constructor() {
        super("puffleRescue");

        /* START-USER-CTR-CODE */
        this.music = "Puffle_Rescue_Ice"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("preload-pack", "assets/media/preload/preload-pack.json");
    }

    /** @returns {void} */
    _create() {

        // lists
        const sort = [];

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
