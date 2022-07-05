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
        const bg = this.add.image(-14, -11, "ffc-beacon", "bg");
        bg.setOrigin(0, 0);

        // jp_holder
        this.add.image(1203, 443, "beacon", "jp_holder");

        // jetpack
        const jetpack = this.add.sprite(1326, 538, "beacon", "jetpack");

        // warning
        const warning = this.add.image(233, 716, "ffc-beacon", "warning");

        // front_rail
        const front_rail = this.add.image(712.179443359375, 961.9216962032965, "beacon", "front_rail");
        front_rail.setOrigin(0.5044360693840665, 1.0296666844575377);

        // crate
        this.add.image(331, 445, "beacon", "crate");

        // tele
        this.add.image(250, 295, "ffc-beacon", "tele");

        // wires
        this.add.image(705, 584, "ffc-beacon", "wires");

        // metal
        this.add.image(651, 590, "ffc-beacon", "metal");

        // rod
        const rod = this.add.image(796, 644, "ffc-beacon", "rod");

        // beacon
        const beacon = this.add.image(712.4922644078002, 674.2536338428522, "ffc-beacon", "beacon");
        beacon.setOrigin(0.491526560627385, 0.9330732761835777);

        // left_box
        const left_box = this.add.image(391, 674.882325417265, "ffc-beacon", "left_box");
        left_box.setOrigin(0.5, 0.6970752848433048);

        // right_box
        const right_box = this.add.image(1001.1795593203329, 686.3900610094647, "ffc-beacon", "right_box");
        right_box.setOrigin(0.5624459817709724, 0.7639873268592465);

        // cone
        const cone = this.add.image(873, 802, "ffc-beacon", "cone");

        // cone_1
        const cone_1 = this.add.image(1135, 724, "ffc-beacon", "cone");
        cone_1.flipX = true;

        // lists
        const sort = [front_rail, left_box, rod, beacon, warning, right_box, cone];

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
