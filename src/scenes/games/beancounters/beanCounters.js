import RoomScene from '@scenes/rooms/RoomScene'

import { Interactive } from '@components/components'

/* START OF COMPILED CODE */

export default class beanCounters extends RoomScene {

    constructor() {
        super("beanCounters");

        /* START-USER-CTR-CODE */
        this.music = "beancounters"
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
        const loading = this.add.sprite(769, 413, "cpv_logo");
        loading.scaleX = 0.2;
        loading.scaleY = 0.2;

        // bg (components)
        new Interactive(bg);

        this.loading = loading;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    loading;

    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
