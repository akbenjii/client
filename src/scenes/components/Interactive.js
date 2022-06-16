/* START OF COMPILED CODE */

export default class Interactive {

    constructor(gameObject) {

        /** @type {Phaser.GameObjects.Image} */
        this.gameObject;

        this.gameObject = gameObject;
        gameObject["__Interactive"] = this;

        /* START-USER-CTR-CODE */

        this.gameObject.setInteractive({
            cursor: 'default',
            pixelPerfect: false
        })

        /* END-USER-CTR-CODE */
    }

    /** @returns {Interactive} */
    static getComponent(gameObject) {
        return gameObject["__Interactive"];
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
