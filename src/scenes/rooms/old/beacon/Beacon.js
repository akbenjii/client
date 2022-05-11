import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Beacon extends RoomScene {

    constructor() {
        super("Beacon");

        /** @type {Phaser.GameObjects.Sprite} */
        this.jetpack;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lighthouse': () => this.triggerRoom(410, 1320, 700),
            'jetpack': () => null
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beacon-pack", "assets/media/rooms/old/beacon/beacon-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-14, -11, "beacon", "bg");
        bg.setOrigin(0, 0);

        // jp_holder
        this.add.image(1203, 443, "beacon", "jp_holder");

        // jetpack
        const jetpack = this.add.sprite(1326, 538, "beacon", "jetpack");

        // front_rail
        const front_rail = this.add.image(712.179443359375, 961.9216962032965, "beacon", "front_rail");
        front_rail.setOrigin(0.5044360693840665, 1.0296666844575377);

        // light
        const light = this.add.image(708.8609374171064, 737.8601624255746, "beacon", "light");
        light.setOrigin(0.4935519917404095, 1.026630209663789);

        // crate
        this.add.image(331, 445, "beacon", "crate");

        // telescope
        this.add.image(246, 294, "beacon", "telescope");

        // lists
        const sort = [front_rail, light];

        // jetpack (components)
        const jetpackButton = new Button(jetpack);
        jetpackButton.spriteName = "jetpack";
        jetpackButton.activeFrame = false;
        jetpackButton.pixelPerfect = true;

        this.jetpack = jetpack;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onJetPackOver() {
        this.jetpack.play('jetpack')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
