import RoomScene from '@scenes/rooms/RoomScene'

import { Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class AstroBarrier extends RoomScene {

    constructor() {
        super("astroBarrier");

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

        // loading
        const loading = this.add.sprite(760, 410, "loading_assets", "shovelling0001.png");

        // lists
        const sort = [];

        // bg (components)
        new Interactive(bg);

        this.loading = loading;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    loading;
    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
