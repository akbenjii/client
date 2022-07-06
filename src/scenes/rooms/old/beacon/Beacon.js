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
		this.music = '583'

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
        const light = this.add.image(685.0591748129182, 577.2994823523711, "beacon", "light");
        light.setOrigin(0.4636877094550476, 0.8057764213716073);

        // crate
        this.add.image(331, 445, "beacon", "crate");

        // telescope
        this.add.image(248, 298, "beacon", "telescope");

        // lists
        const sort = [front_rail, light];

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
