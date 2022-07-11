import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Beacon extends RoomScene {

    constructor() {
        super("Beacon");

        /** @type {Phaser.GameObjects.Sprite} */
        this.sbeaconcloud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lbeaconcloud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jetpack;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proprodbeacon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.propbeacon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proptopbeacon;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lighthouse': () => this.triggerRoom(410, 1320, 700),
            'jetpack': () => this.triggerGame("JetpackAdventure", 926),
        }
		this.roomAnims = true
        this.music = 'nimbus'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beacon-pack", "assets/media/rooms/old/beacon/beacon-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-14, -130, "fof-beacon", "bgfof");
        bg.setOrigin(0, 0);

        // sbeaconcloud
        const sbeaconcloud = this.add.sprite(727, 190, "fof-beacon", "sbeaconcloud0001");

        // lbeaconcloud
        const lbeaconcloud = this.add.sprite(765, 94, "fof-beacon", "lbeaconcloud0001");

        // jp_holder
        this.add.image(1203, 443, "beacon", "jp_holder");

        // jetpack
        const jetpack = this.add.sprite(1326, 538, "beacon", "jetpack");

        // front_rail
        const front_rail = this.add.image(707, 1029, "fof-beacon", "frontrail");
        front_rail.setOrigin(0.5044360693840665, 1.0296666844575377);

        // crate
        this.add.image(331, 445, "beacon", "crate");

        // telescope
        this.add.image(248, 298, "beacon", "telescope");

        // proprodbeacon
        const proprodbeacon = this.add.sprite(716, 266, "fof-beacon", "proprodbeacon0001");

        // propbasebeacon
        this.add.image(709, 549, "fof-beacon", "propbasebeacon");

        // holder
        this.add.image(716, 376, "fof-beacon", "holder");

        // propbeacon
        const propbeacon = this.add.sprite(718, 144, "fof-beacon", "propbeacon0001");

        // proptopbeacon
        const proptopbeacon = this.add.sprite(714, 148, "fof-beacon", "proptopbeacon0001");

        // lists
        const sort = [front_rail];

        // jetpack (components)
        const jetpackButton = new Button(jetpack);
        jetpackButton.spriteName = "jetpack";
        jetpackButton.activeFrame = false;
        const jetpackMoveTo = new MoveTo(jetpack);
        jetpackMoveTo.x = 1270;
        jetpackMoveTo.y = 575;
        const jetpackShowHint = new ShowHint(jetpack);
        jetpackShowHint.text = "Jetpack Adventure";

        this.sbeaconcloud = sbeaconcloud;
        this.lbeaconcloud = lbeaconcloud;
        this.jetpack = jetpack;
        this.proprodbeacon = proprodbeacon;
        this.propbeacon = propbeacon;
        this.proptopbeacon = proptopbeacon;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
	
    create() {
        super.create()
        this.propbeacon.play('propbeacon')
        this.proptopbeacon.play('proptopbeacon')
        this.sbeaconcloud.play('sbeaconcloud')
        this.cloudTween()
        this.onCloudTweenComplete()
        this.lbeaconcloud.play('lbeaconcloud')
        this.bigCloudTween()
        this.onBigCloudTweenComplete()
    }
	
    cloudTween() {
        let tween = this.tweens.add({
            targets: this.sbeaconcloud,
            y: 190,
            delay: 0,
            duration: 5400,
            onComplete: () => this.onCloudTweenComplete()
        });
    }

    onCloudTweenComplete() {
        let tween = this.tweens.add({
            targets: this.sbeaconcloud,
            y: 70,
            delay: 0,
            duration: 5400,
            onComplete: () => this.cloudTween()
        });
    }

    bigCloudTween() {
        let tween = this.tweens.add({
            targets: this.lbeaconcloud,
            y: 94,
            delay: 0,
            duration: 4800,
            onComplete: () => this.onBigCloudTweenComplete()
        });
    }

    onBigCloudTweenComplete() {
        let tween = this.tweens.add({
            targets: this.lbeaconcloud,
            y: 102,
            delay: 0,
            duration: 4800,
            onComplete: () => this.bigCloudTween()
        });
    }

    onJetPackOver() {
        this.jetpack.play('jetpack')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
