
// You can write more code here

/* START OF COMPILED CODE */

export default class Snowglobe extends IglooScene {

    constructor() {
        super("Snowglobe");

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("snow-pack", "assets/media/igloos/buildings/sprites/snow/snow-pack.json");
    }

    /** @returns {void} */
    _create() {

        // snowglobe
        this.add.image(765, 453, "snowglobe");

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    // Write your code here

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
