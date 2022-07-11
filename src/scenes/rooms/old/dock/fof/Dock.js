import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, Zone, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Dock extends RoomScene {

    constructor() {
        super("Dock");

        /** @type {Phaser.GameObjects.Sprite} */
        this.ocean;
        /** @type {Phaser.GameObjects.Sprite} */
        this.island;
        /** @type {Phaser.GameObjects.Sprite} */
        this.clouddock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proproddock_1_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proptopdock_1_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.propdock_1_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rings;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bluebutton;
        /** @type {Phaser.GameObjects.Sprite} */
        this.yellowbutton;
        /** @type {Phaser.GameObjects.Sprite} */
        this.purpbutton;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hydrofloat;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proproddock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.propdock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proptopdock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proproddock_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proptopdock_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.propdock_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flyleftkite;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flymidkite;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flyrightkite;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 950, 430),
            'village': () => this.triggerRoom(200, 1300, 760),
            'town': () => this.triggerRoom(100, 368, 640),
            'hydro': () => this.triggerGame('HydroHopper', 924),
            'bluekite': () => this.onBlueZone(),
            'yellowkite': () => this.onYellowZone(),
            'rightkite': () => this.onPurpleZone()
        }

        this.music = 'nimbus'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dock-pack", "assets/media/rooms/old/dock/dock-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(766, 490, "fof-dock", "sky");

        // ocean
        const ocean = this.add.sprite(761, 961, "fof-dock", "ocean0001");

        // island
        const island = this.add.sprite(754, 634, "fof-dock", "island0001");

        // clouddock
        const clouddock = this.add.sprite(729, 58, "fof-dock", "clouddock0001");

        // testbg
        this.add.image(768, 547, "fof-dock", "testbg");

        // lefttrees
        const lefttrees = this.add.image(126, 274, "fof-dock", "lefttrees");

        // proproddock_1_1
        const proproddock_1_1 = this.add.sprite(126.99999999999999, 326.2634021715275, "fof-dock", "proproddock0001");
        proproddock_1_1.scaleX = 0.35;
        proproddock_1_1.scaleY = 0.35;
        proproddock_1_1.setOrigin(0.49999999999999845, 0.7559427155459687);

        // proptopdock_1_1
        const proptopdock_1_1 = this.add.sprite(126.99999999999999, 326.7902065145827, "fof-dock", "proptopdock0001");
        proptopdock_1_1.scaleX = 0.35;
        proptopdock_1_1.scaleY = 0.35;
        proptopdock_1_1.setOrigin(0.4999999999999991, 5.75435339562019);

        // propdock_1_1
        const propdock_1_1 = this.add.sprite(126.99999999999999, 302.342654885937, "fof-dock", "propdock0001");
        propdock_1_1.scaleX = 0.35;
        propdock_1_1.scaleY = 0.35;
        propdock_1_1.setOrigin(0.49999999999999994, 2.1078321390597785);

        // propbotdock_1_1
        const propbotdock_1_1 = this.add.image(128, 388, "fof-dock", "propbotdock");
        propbotdock_1_1.scaleX = 0.35;
        propbotdock_1_1.scaleY = 0.35;

        // left_sign
        this.add.image(183, 334, "dock", "left_sign");

        // leftfence
        const leftfence = this.add.image(175, 515, "fof-dock", "leftfence");

        // post_2
        const post_2 = this.add.image(563, 648, "dock", "post_2");
        post_2.setOrigin(0.43243243243243246, 0.49137931034482757);

        // rings
        const rings = this.add.sprite(620, 699, "dock", "rings0001");
        rings.setOrigin(0.4975124378109453, 0.8127659574468085);

        // hydrosign0001
        const hydrosign0001 = this.add.image(293.734613970653, 602.8307843130348, "fof-dock", "hydrosign0001");
        hydrosign0001.setOrigin(0.5077909229933134, 0.4203026893798764);

        // post_1
        const post_1 = this.add.image(439, 615, "dock", "post_1");
        post_1.setOrigin(0.55, 0.5478260869565217);

        // hydrotube
        const hydrotube = this.add.image(356.14229779457094, 611.7193054908862, "fof-dock", "hydrotube");
        hydrotube.setOrigin(0.5818046914297903, 0.18561919680449235);

        // hydrobridge
        const hydrobridge = this.add.image(497.47148928476963, 622.7540754705883, "fof-dock", "hydrobridge");
        hydrobridge.setOrigin(0.8344559055364524, 0.02394087364016534);

        // snow
        this.add.image(1346, 295, "fof-dock", "snow");

        // right_sign
        this.add.image(1366, 270, "dock", "right_sign");

        // zone
        const zone = this.add.rectangle(619, 659, 135, 160);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // righttrees
        const righttrees = this.add.image(1389, 492, "fof-dock", "righttrees");

        // stomps
        this.add.image(777, 491, "fof-dock", "stomps");

        // hydrofence
        const hydrofence = this.add.image(400, 807, "fof-dock", "hydrofence");
        hydrofence.setOrigin(0.15399881592115458, 0.7912636963218147);

        // breezemaker0001
        const breezemaker0001 = this.add.image(1225.3551328261913, 610.9817647761444, "fof-dock", "breezemaker0001");
        breezemaker0001.setOrigin(0.495518073095889, 0.911216793452195);

        // bluebutton
        const bluebutton = this.add.sprite(575.737692037453, 479.4753840749061, "fof-dock", "bluebutton");
        bluebutton.setOrigin(0.5519308190433089, 0.6595400420093415);

        // yellowbutton
        const yellowbutton = this.add.sprite(758.3442300936326, 465.2786531029959, "fof-dock", "yellowbutton");
        yellowbutton.setOrigin(0.6080683245454337, 0.7171291132958767);

        // purpbutton
        const purpbutton = this.add.sprite(959.1148088408245, 479.9507681498123, "fof-dock", "purpbutton");
        purpbutton.setOrigin(0.3355740442041224, 0.730975881715017);

        // boards
        const boards = this.add.image(691, 707, "fof-dock", "boards");

        // hydrofloat
        const hydrofloat = this.add.sprite(323, 801, "fof-dock", "hydrofloat0001");

        // warning
        const warning = this.add.image(898, 798.9579604709267, "fof-dock", "warning");
        warning.setOrigin(0.5, 0.7833897905739479);

        // caution
        const caution = this.add.image(1421, 731, "fof-dock", "caution");
        caution.setOrigin(0.5174108760221905, 0.901789446665929);

        // rightfence
        const rightfence = this.add.image(1221, 793, "fof-dock", "rightfence");
        rightfence.setOrigin(0.5189553892177075, 0.7969012542731386);

        // proproddock
        const proproddock = this.add.sprite(922, 736, "fof-dock", "proproddock0001");
        proproddock.scaleX = 0.35;
        proproddock.scaleY = 0.35;

        // propbotdock
        const propbotdock = this.add.image(923, 829, "fof-dock", "propbotdock");
        propbotdock.scaleX = 0.35;
        propbotdock.scaleY = 0.35;

        // propdock
        const propdock = this.add.sprite(922, 673, "fof-dock", "propdock0001");
        propdock.scaleX = 0.35;
        propdock.scaleY = 0.35;

        // proptopdock
        const proptopdock = this.add.sprite(922, 674, "fof-dock", "proptopdock0001");
        proptopdock.scaleX = 0.35;
        proptopdock.scaleY = 0.35;

        // proproddock_1
        const proproddock_1 = this.add.sprite(1244, 181, "fof-dock", "proproddock0001");
        proproddock_1.scaleX = 0.35;
        proproddock_1.scaleY = 0.35;

        // proptopdock_1
        const proptopdock_1 = this.add.sprite(1244, 119, "fof-dock", "proptopdock0001");
        proptopdock_1.scaleX = 0.35;
        proptopdock_1.scaleY = 0.35;

        // propdock_1
        const propdock_1 = this.add.sprite(1244, 118, "fof-dock", "propdock0001");
        propdock_1.scaleX = 0.35;
        propdock_1.scaleY = 0.35;

        // propbotdock_1
        const propbotdock_1 = this.add.image(1245, 274, "fof-dock", "propbotdock");
        propbotdock_1.scaleX = 0.35;
        propbotdock_1.scaleY = 0.35;

        // flyleftkite
        const flyleftkite = this.add.sprite(539, 290, "fof-dock", "flyleftkite0001");

        // flymidkite
        const flymidkite = this.add.sprite(770, 187, "fof-dock", "flymidkite0001");

        // flyrightkite
        const flyrightkite = this.add.sprite(1079, 274, "fof-dock", "flyrightkite0001");
        flyrightkite.flipX = true;

        // lists
        const sort = [post_2, rings, lefttrees, righttrees, breezemaker0001, boards, warning, caution, rightfence, hydrosign0001, leftfence, hydrotube, post_1, propbotdock_1_1, propdock_1_1, proptopdock_1_1, proproddock_1_1, hydrobridge, hydrofence];

        // rings (components)
        const ringsAnimation = new Animation(rings);
        ringsAnimation.key = "rings";
        ringsAnimation.end = 34;
        ringsAnimation.repeat = 0;
        ringsAnimation.autoPlay = false;
        ringsAnimation.stopOnOut = false;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onRingsOver();

        // bluebutton (components)
        const bluebuttonButton = new Button(bluebutton);
        bluebuttonButton.spriteName = "bluebutton";
        bluebuttonButton.activeFrame = false;
        new MoveTo(bluebutton);

        // yellowbutton (components)
        const yellowbuttonButton = new Button(yellowbutton);
        yellowbuttonButton.spriteName = "yellowbutton";
        yellowbuttonButton.activeFrame = false;
        new MoveTo(yellowbutton);

        // purpbutton (components)
        const purpbuttonButton = new Button(purpbutton);
        purpbuttonButton.spriteName = "purpbutton";
        purpbuttonButton.activeFrame = false;
        new MoveTo(purpbutton);

        // hydrofloat (components)
        const hydrofloatSimpleButton = new SimpleButton(hydrofloat);
        hydrofloatSimpleButton.hoverCallback = () =>{ this.onHydroFloatOver()};
        hydrofloatSimpleButton.hoverOutCallback = () => {this.onHydroFloatOut()};
        new MoveTo(hydrofloat);

        this.ocean = ocean;
        this.island = island;
        this.clouddock = clouddock;
        this.proproddock_1_1 = proproddock_1_1;
        this.proptopdock_1_1 = proptopdock_1_1;
        this.propdock_1_1 = propdock_1_1;
        this.rings = rings;
        this.bluebutton = bluebutton;
        this.yellowbutton = yellowbutton;
        this.purpbutton = purpbutton;
        this.hydrofloat = hydrofloat;
        this.proproddock = proproddock;
        this.propdock = propdock;
        this.proptopdock = proptopdock;
        this.proproddock_1 = proproddock_1;
        this.proptopdock_1 = proptopdock_1;
        this.propdock_1 = propdock_1;
        this.flyleftkite = flyleftkite;
        this.flymidkite = flymidkite;
        this.flyrightkite = flyrightkite;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()

        this.up = false

        this.clouddock.play('dockcloud')
        this.propdock.play('propdock')
        this.proproddock.play('proproddock')
        this.proptopdock.play('proptopdock')
        this.propdock_1.play('propdock')
        this.proproddock_1.play('proproddock')
        this.proptopdock_1.play('proptopdock')
        this.propdock_1_1.play('propdock')
        this.proproddock_1_1.play('proproddock')
        this.proptopdock_1_1.play('proptopdock')
        this.cloudTween()
        this.onCloudTweenComplete()
		this.ocean.play('ocean')
		this.island.play('island')
    }

    cloudTween() {
        let tween = this.tweens.add({
            targets: this.clouddock,
            y: 58,
            delay: 0,
            duration: 5400,
            onComplete: () => this.onCloudTweenComplete()
        });
    }

    onCloudTweenComplete() {
        let tween = this.tweens.add({
            targets: this.clouddock,
            y: 100,
            delay: 0,
            duration: 5400,
            onComplete: () => this.cloudTween()
        });
    }

    onRingsOver() {
        this.rings.__Animation.play()
    }

    onBlueZone() {
        this.flyleftkite.play('flykiteleft')
    }

    onYellowZone() {
        this.flymidkite.play('flymidkite')
    }

    onPurpleZone() {
        this.flyrightkite.play('flyrightkite')
    }

    onHydroFloatOver() {
        this.hydrofloat.play('hydroover')
    }

    onHydroFloatOut() {
        this.hydrofloat.play('hydroout')
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
