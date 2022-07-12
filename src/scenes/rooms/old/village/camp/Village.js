import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Image} */
        this.bgcampnight;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.night;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Rectangle>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'phone': null
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

        this.load.pack("village-pack", "assets/media/rooms/old/village/village-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-25, -15, "village", "bg");
        bg.setOrigin(0, 0);

        // bgcampnight
        const bgcampnight = this.add.image(762, 504, "camp-village", "bgcampnight");
        bgcampnight.visible = false;

        // lodge_door
        const lodge_door = this.add.image(1075, 318, "village", "lodge_door");
        lodge_door.setOrigin(0.27807486631016043, 0.5560538116591929);

        // lodge_stairs
        this.add.image(972, 444, "village", "lodge_stairs");

        // lodge_front
        const lodge_front = this.add.image(1087, 389, "village", "lodge_front");
        lodge_front.setOrigin(0.4807692307692308, 0.5352112676056338);

        // lodge_snow
        const lodge_snow = this.add.image(1104, 429, "village", "lodge_snow");
        lodge_snow.setOrigin(0.5368217054263565, 0.4838709677419355);

        // phone
        this.add.image(1373, 316, "village", "phone");

        // phone_door
        const phone_door = this.add.image(1350, 387, "village", "phone_door");
        phone_door.setOrigin(0.22797927461139897, 0.6206896551724138);

        // phone_snow
        const phone_snow = this.add.image(1361, 595, "village", "phone_snow");
        phone_snow.setOrigin(0.509090909090909, 0.5272727272727272);

        // lift
        this.add.image(348, 200, "village", "lift");

        // smoke
        const smoke = this.add.sprite(1110, 32, "village", "smoke0001");

        // left_sign
        const left_sign = this.add.image(133, 677, "village", "left_sign");
        left_sign.setOrigin(0.4444444444444444, 0.5217391304347826);

        // right_sign
        const right_sign = this.add.image(1471, 668, "village", "right_sign");
        right_sign.setOrigin(0.4861111111111111, 0.7831325301204819);

        // tours
        const tours = this.add.image(792, 483, "village", "tours");
        tours.setOrigin(0.5, 0.8846153846153846);

        // tours_text
        const tours_text = this.add.image(794, 505.2201404552512, "village", "tours_text");
        tours_text.setOrigin(0.5, 3.9212529261510674);

        // chair
        const chair = this.add.sprite(292, 150, "village", "chair0001");

        // ground
        this.add.image(797, 618, "camp-village", "ground");

        // leftfence
        this.add.image(329, 658, "camp-village", "leftfence");

        // shadows
        this.add.image(773, 755, "camp-village", "shadows");

        // lilies
        const lilies = this.add.image(548.6593890237888, 646.3897350656368, "camp-village", "lilies");
        lilies.setOrigin(0.4618750572399542, 0.8028859207767232);

        // bush
        const bush = this.add.image(988, 805, "camp-village", "bush");

        // midsign
        const midsign = this.add.image(921, 694, "camp-village", "midsign");
        midsign.setOrigin(0.25205907157740526, 0.888095808166522);

        // night
        const night = this.add.rectangle(738, 1133, 128, 128);
        night.scaleX = 12.397097039253481;
        night.scaleY = 7.74841237866371;
        night.setOrigin(0.4910783059634098, 1.1518593287200432);
        night.visible = false;
        night.isFilled = true;
        night.fillColor = 0;
        night.fillAlpha = 0.3;

        // lists
        const sort = [tours, tours_text, bush, lilies, midsign, night];

        // lodge_door (components)
        const lodge_doorButton = new Button(lodge_door);
        lodge_doorButton.spriteName = "lodge_door";
        lodge_doorButton.activeFrame = false;
        const lodge_doorMoveTo = new MoveTo(lodge_door);
        lodge_doorMoveTo.x = 1000;
        lodge_doorMoveTo.y = 400;

        // phone_door (components)
        const phone_doorButton = new Button(phone_door);
        phone_doorButton.spriteName = "phone_door";
        phone_doorButton.activeFrame = false;
        const phone_doorMoveTo = new MoveTo(phone_door);
        phone_doorMoveTo.x = 1340;
        phone_doorMoveTo.y = 480;

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // tours (components)
        const toursSimpleButton = new SimpleButton(tours);
        toursSimpleButton.callback = () => this.interface.prompt.showItem(428);

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair";
        chairAnimation.end = 179;
        chairAnimation.repeatDelay = 1500;

        this.bgcampnight = bgcampnight;
        this.night = night;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        var now = new Date();
        var timeInHours = now.getUTCHours();
        console.log(timeInHours)
        if (timeInHours > 1 && timeInHours < 13 ) {
            this.bgcampnight.visible = true
            this.night.visible = true
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
