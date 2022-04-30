import RoomScene from '@scenes/rooms/RoomScene'

import { Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class CartSurfer extends RoomScene {

    constructor() {
        super("cartSurfer");

        /* START-USER-CTR-CODE */
        this.music = "cartsurfer"
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

        // loading
        const loading = this.add.sprite(760, 410, "cpv_logo");
        loading.scaleX = 0.2;
        loading.scaleY = 0.2;

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
