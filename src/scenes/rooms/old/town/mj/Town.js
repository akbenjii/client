import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Sprite} */
        this.canopy_lights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lights10001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.speaker10001;
        /** @type {Phaser.GameObjects.Sprite[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.triggerRoom(110, 700, 450),
            'dance': () => this.triggerRoom(120, 300, 560),
            'gift': () => this.triggerRoom(130, 1036, 520),
        }
        this.music = 'town'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-pack", "assets/media/rooms/old/town/town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky1
        this.add.image(776, 429, "townmj", "sky1");

        // grid2
        this.add.image(792, 639, "townmj", "grid2");

        // grid1
        this.add.image(771, 488, "townmj", "grid1");

        // ld2
        this.add.image(463, 82, "townmj", "ld2");

        // dance1
        this.add.image(757, 227, "townmj", "dance1");

        // coffeemj
        this.add.image(386, 352, "coffeemj");

        // bd1
        this.add.image(771, 271, "townmj", "bd1");

        // rd1
        this.add.image(994, 101, "townmj", "rd1");

        // gift1
        this.add.image(1204, 380, "townmj", "gift1");

        // bottom1
        const bottom1 = this.add.image(-52, 1040, "townmj", "bottom1");
        bottom1.setOrigin(0, 1);

        // right_sign
        const right_sign = this.add.image(1390, 404, "town", "right_sign");
        right_sign.setOrigin(0, 0);

        // left_sign
        const left_sign = this.add.image(133, 478, "town", "left_sign");
        left_sign.setOrigin(0, 0);

        // canopy_lights
        const canopy_lights = this.add.sprite(650, 584, "town", "canopy_lights0001");
        canopy_lights.setOrigin(0, 7.142857142857143);
        canopy_lights.visible = false;

        // lights10001
        const lights10001 = this.add.sprite(807, 115, "townmj", "lights10001");

        // speaker10001
        const speaker10001 = this.add.sprite(868, 412, "townmj", "speaker10001");

        // objects1
        this.add.image(1040, 247, "townmj", "objects1");

        // objects2
        this.add.image(1279, 309, "townmj", "objects2");

        // cdoor
        const cdoor = this.add.image(343, 522, "townmj", "cdoor");

        // lists
        const sort = [canopy_lights];

        // canopy_lights (components)
        const canopy_lightsAnimation = new Animation(canopy_lights);
        canopy_lightsAnimation.key = "canopy_lights";
        canopy_lightsAnimation.end = 57;
        canopy_lightsAnimation.autoPlay = false;
        canopy_lightsAnimation.showOnStart = true;
        canopy_lightsAnimation.hideOnComplete = true;

        // cdoor (components)
        const cdoorButton = new Button(cdoor);
        cdoorButton.spriteName = "cdoor";

        this.canopy_lights = canopy_lights;
        this.lights10001 = lights10001;
        this.speaker10001 = speaker10001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.lights10001.play("mjtown_lights");
        this.speaker10001.play("mjtown_speaker");
    }

    onCoffeeDoorOver() {
        this.cdoor10001.setFrame('cdoor10001')
        // this.canopy_lights.__Animation.play()
        // this.disco_lights.__Animation.play()
    }

    onCoffeeDoorOut() {
        this.cdoor10001.setFrame('cdoor10002')
        // this.canopy_lights.__Animation.stop()
        // this.disco_lights.__Animation.stop()
    }

    onCanopyOver() {
        this.disco.setFrame('disco-hover')
        this.canopy_lights.__Animation.play()
        this.disco_lights.__Animation.play()
    }

    onCanopyOut() {
        this.disco.setFrame('disco')
        this.canopy_lights.__Animation.stop()
        this.disco_lights.__Animation.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
