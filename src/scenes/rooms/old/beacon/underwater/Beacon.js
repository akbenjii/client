import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton, ShowHint } from '@components/components'


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
            'jetpack': () => this.triggerGame("JetpackAdventure", 926),
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

        // crate
        this.add.image(331, 445, "beacon", "crate");

        // main_beacon
        const main_beacon = this.add.image(702, -87, "beaconuw", "main beacon");
        main_beacon.setOrigin(0.485192994157257, 0.027770241243949233);

        // binocular
        this.add.image(248, 267, "beaconuw", "binocular");

        // bottomrail
        const bottomrail = this.add.image(712.179443359375, 961.9216962032965, "beaconuw", "bottomrail");
        bottomrail.setOrigin(0.5044360693840665, 1.0296666844575377);

        // lists
        const sort = [main_beacon, bottomrail];

        // jetpack (components)
        const jetpackButton = new Button(jetpack);
        jetpackButton.spriteName = "jetpack";
        jetpackButton.activeFrame = false;
        const jetpackMoveTo = new MoveTo(jetpack);
        jetpackMoveTo.x = 1270;
        jetpackMoveTo.y = 575;
        const jetpackShowHint = new ShowHint(jetpack);
        jetpackShowHint.text = "Jetpack Adventure";

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
