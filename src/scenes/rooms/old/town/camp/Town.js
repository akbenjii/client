import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Image} */
        this.nightbg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.canopy_lights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.disco_lights;
        /** @type {Phaser.GameObjects.Image} */
        this.disco;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.night;
        /** @type {Phaser.GameObjects.Image} */
        this.campfireholdertown;
        /** @type {Phaser.GameObjects.Sprite} */
        this.campfiretown;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.triggerRoom(110, 700, 450),
            'dance': () => this.triggerRoom(120, 300, 560),
            'gift': () => this.triggerRoom(130, 1036, 520),
        }
        var now = new Date();
        var timeInHours = now.getUTCHours();
        if (timeInHours > 1 && timeInHours < 13 ) {
            this.music = 'crickets'
        } else {
            this.music='campy'
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-pack", "assets/media/rooms/old/town/town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-10, 0, "town", "bg");
        bg.setOrigin(0, 0);

        // nightbg
        const nightbg = this.add.image(774, 494, "camp-town", "nightbg");
        nightbg.visible = false;

        // ground
        this.add.image(758, 661, "camp-town", "ground");

        // build
        this.add.image(763, 293, "fof-town", "build");

        // fg
        const fg = this.add.image(-63, 976, "town", "fg");
        fg.setOrigin(0, 1);

        // lily_1
        const lily_1 = this.add.image(363, 698, "camp-town", "lily");
        lily_1.flipX = true;

        // fgbush
        const fgbush = this.add.image(404, 789, "camp-town", "fgbush");

        // camppenguin
        const camppenguin = this.add.image(198.62672890935013, 1001.8248616288461, "camp-town", "camppenguin");
        camppenguin.setOrigin(0.4839058810842175, 1.2798517368305742);

        // left_sign
        const left_sign = this.add.image(179, 450, "town", "left_sign");
        left_sign.setOrigin(0, 0);

        // right_sign
        const right_sign = this.add.image(1286, 465, "town", "right_sign");
        right_sign.setOrigin(0, 0);

        // coffee_door
        const coffee_door = this.add.image(449, 305, "town", "coffee_door");
        coffee_door.setOrigin(0, 0);

        // gift_door
        const gift_door = this.add.image(995, 294, "town", "gift_door");
        gift_door.setOrigin(0, 0);

        // canopy
        const canopy = this.add.image(692, 464, "town", "canopy");
        canopy.setOrigin(0.49606299212598426, 0.9403669724770642);

        // canopy_lights
        const canopy_lights = this.add.sprite(648, 548, "town", "canopy_lights0001");
        canopy_lights.setOrigin(0, 7.142857142857143);
        canopy_lights.visible = false;

        // canopy_stars
        const canopy_stars = this.add.image(647, 548, "town", "canopy_stars");
        canopy_stars.setOrigin(0, 7.142857142857143);

        // disco_lights
        const disco_lights = this.add.sprite(766, 332, "town", "disco_lights0007");
        disco_lights.setOrigin(0, 0);
        disco_lights.visible = false;

        // disco
        const disco = this.add.image(648, 229, "town", "disco");
        disco.setOrigin(0, 0);

        // lights
        const lights = this.add.sprite(518, -75, "town", "lights0001");
        lights.setOrigin(0, 0);

        // box_1
        const box_1 = this.add.image(973, 432, "town", "box_1");
        box_1.setOrigin(0.49382716049382713, 0.6268656716417911);

        // box_2
        const box_2 = this.add.image(954, 483, "town", "box_2");
        box_2.setOrigin(0.49504950495049505, 0.6736842105263158);

        // box_3
        const box_3 = this.add.image(1148, 581, "town", "box_3");
        box_3.setOrigin(0.4943820224719101, 0.5569620253164557);

        // chair_2
        const chair_2 = this.add.image(436, 462, "town", "chair_2");
        chair_2.setOrigin(0.49382716049382713, 0.27358490566037735);

        // table_2
        const table_2 = this.add.image(485, 523, "town", "table_2");
        table_2.setOrigin(0.5, 0.7864077669902912);

        // chair_1
        const chair_1 = this.add.image(402, 511, "town", "chair_1");
        chair_1.setOrigin(0.49411764705882355, 0.2857142857142857);

        // table_1
        const table_1 = this.add.image(455, 575, "town", "table_1");
        table_1.setOrigin(0.49572649572649574, 0.7830188679245284);

        // bushpost
        this.add.image(942, 569, "camp-town", "bushpost");

        // post
        const post = this.add.image(885, 476, "camp-town", "post");

        // lily
        this.add.image(1011, 793, "camp-town", "lily");

        // rightbush
        const rightbush = this.add.image(1197, 732, "camp-town", "rightbush");

        // night
        const night = this.add.rectangle(739, 1132, 128, 128);
        night.scaleX = 12.397097039253481;
        night.scaleY = 7.74841237866371;
        night.setOrigin(0.4910783059634098, 1.1518593287200432);
        night.visible = false;
        night.isFilled = true;
        night.fillColor = 0;
        night.fillAlpha = 0.3;

        // campfireholdertown
        const campfireholdertown = this.add.image(677, 680, "camp-town", "campfireholdertown");
        campfireholdertown.visible = false;

        // campfiretown
        const campfiretown = this.add.sprite(688.0998786584661, 1222.8493438083085, "camp-town", "campfiretown0001");
        campfiretown.setOrigin(0.5707595243185151, 4.7597774816089045);
        campfiretown.visible = false;

        // lists
        const sort = [fg, box_2, box_1, box_3, chair_2, chair_1, table_1, table_2, canopy, canopy_stars, canopy_lights, post, camppenguin, rightbush, fgbush, lily_1, night, campfiretown];

        // coffee_door (components)
        const coffee_doorButton = new Button(coffee_door);
        coffee_doorButton.spriteName = "coffee_door";
        coffee_doorButton.activeFrame = false;
        coffee_doorButton.pixelPerfect = true;
        const coffee_doorMoveTo = new MoveTo(coffee_door);
        coffee_doorMoveTo.x = 550;
        coffee_doorMoveTo.y = 450;

        // gift_door (components)
        const gift_doorButton = new Button(gift_door);
        gift_doorButton.spriteName = "gift_door";
        gift_doorButton.activeFrame = false;
        gift_doorButton.pixelPerfect = true;
        const gift_doorMoveTo = new MoveTo(gift_door);
        gift_doorMoveTo.x = 1010;
        gift_doorMoveTo.y = 466;

        // canopy (components)
        const canopySimpleButton = new SimpleButton(canopy);
        canopySimpleButton.hoverCallback = () => this.onCanopyOver();
        canopySimpleButton.hoverOutCallback = () => this.onCanopyOut();
        const canopyMoveTo = new MoveTo(canopy);
        canopyMoveTo.x = 684;
        canopyMoveTo.y = 410;

        // canopy_lights (components)
        const canopy_lightsAnimation = new Animation(canopy_lights);
        canopy_lightsAnimation.key = "canopy_lights";
        canopy_lightsAnimation.end = 57;
        canopy_lightsAnimation.autoPlay = false;
        canopy_lightsAnimation.showOnStart = true;
        canopy_lightsAnimation.hideOnComplete = true;

        // disco_lights (components)
        const disco_lightsAnimation = new Animation(disco_lights);
        disco_lightsAnimation.key = "disco_lights";
        disco_lightsAnimation.end = 57;
        disco_lightsAnimation.autoPlay = false;
        disco_lightsAnimation.showOnStart = true;
        disco_lightsAnimation.hideOnComplete = true;

        // lights (components)
        const lightsAnimation = new Animation(lights);
        lightsAnimation.key = "lights";
        lightsAnimation.end = 69;
        lightsAnimation.repeatDelay = 1;

        this.nightbg = nightbg;
        this.canopy_lights = canopy_lights;
        this.disco_lights = disco_lights;
        this.disco = disco;
        this.night = night;
        this.campfireholdertown = campfireholdertown;
        this.campfiretown = campfiretown;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        var now = new Date();
        var timeInHours = now.getUTCHours();
        console.log(timeInHours)
        if (timeInHours > 1 && timeInHours < 16 ) {
            this.nightbg.visible = true
            this.night.visible = true
            this.campfiretown.visible = true
            this.campfireholdertown.visible = true
            this.campfiretown.play('campfiretown')
        }
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
