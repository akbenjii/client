import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Cove extends RoomScene {

    constructor() {
        super("Cove");

        /** @type {Phaser.GameObjects.Sprite} */
        this.sky;
        /** @type {Phaser.GameObjects.Sprite} */
        this.nightsky;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.night;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mainfall;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fall;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fall_pit;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.mallowzone;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers =  {
            'forest': () => this.triggerRoom(809, 1190, 750)
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

        this.load.pack("cove-pack", "assets/media/rooms/old/cove/cove-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        const sky = this.add.sprite(761, 154, "camp-cove", "sky");

        // nightsky
        const nightsky = this.add.sprite(761, 149, "camp-cove", "nightsky");
        nightsky.visible = false;

        // bg
        const bg = this.add.image(-2, -15, "camp-cove", "bgcamp");
        bg.setOrigin(0, 0);

        // cliff_1
        const cliff_1 = this.add.image(-5, 5, "cove", "cliff_1");
        cliff_1.setOrigin(0, 0);

        // water_water_15
        const water_water_15 = this.add.image(1109, 673, "cove", "water/water_15");
        water_water_15.setOrigin(0.5011135857461024, 2.909090909090909);

        // water_water_14
        const water_water_14 = this.add.image(1034, 695, "cove", "water/water_14");
        water_water_14.setOrigin(0.5, 1.9545454545454546);

        // water_water_13
        const water_water_13 = this.add.image(1002, 717, "cove", "water/water_13");
        water_water_13.setOrigin(0.5006993006993007, 1.9545454545454546);

        // water_water_12
        const water_water_12 = this.add.image(995, 739, "cove", "water/water_12");
        water_water_12.setOrigin(0.5, 1.9545454545454546);

        // water_water_11
        const water_water_11 = this.add.image(1011, 761, "cove", "water/water_11");
        water_water_11.setOrigin(0.5005662514156285, 1.9545454545454546);

        // water_water_10
        const water_water_10 = this.add.image(1031, 783, "cove", "water/water_10");
        water_water_10.setOrigin(0.5005045408678103, 1.9545454545454546);

        // water_water_9
        const water_water_9 = this.add.image(1024, 805, "cove", "water/water_9");
        water_water_9.setOrigin(0.5, 1.9545454545454546);

        // water_water_8
        const water_water_8 = this.add.image(1014, 827, "cove", "water/water_8");
        water_water_8.setOrigin(0.5, 1.65625);

        // water_water_7
        const water_water_7 = this.add.image(1008, 849, "cove", "water/water_7");
        water_water_7.setOrigin(0.5004821600771456, 1.9545454545454546);

        // water_water_6
        const water_water_6 = this.add.image(1008, 871, "cove", "water/water_6");
        water_water_6.setOrigin(0.5004812319538018, 1.9545454545454546);

        // water_water_5
        const water_water_5 = this.add.image(1018, 893, "cove", "water/water_5");
        water_water_5.setOrigin(0.5, 1.9545454545454546);

        // water_water_4
        const water_water_4 = this.add.image(1026, 915, "cove", "water/water_4");
        water_water_4.setOrigin(0.5005015045135406, 1.9545454545454546);

        // water_water_3
        const water_water_3 = this.add.image(1005, 937, "cove", "water/water_3");
        water_water_3.setOrigin(0.5, 1.9545454545454546);

        // water_water_2
        const water_water_2 = this.add.image(1005, 959, "cove", "water/water_2");
        water_water_2.setOrigin(0.5, 1.9545454545454546);

        // water_water_1
        const water_water_1 = this.add.image(1005, 981, "cove", "water/water_1");
        water_water_1.setOrigin(0.5, 1.9545454545454546);

        // hut
        const hut = this.add.image(1326, 423, "cove", "hut");
        hut.setOrigin(0.5537459283387622, 0.43842364532019706);

        // hut_wall
        const hut_wall = this.add.image(1440, 545, "cove", "hut_wall");
        hut_wall.setOrigin(0.5210526315789473, 0.8577777777777778);

        // boards
        const boards = this.add.image(1101, 485, "cove", "boards");
        boards.setOrigin(0.502262443438914, 0.8586956521739131);

        // rock_1
        const rock_1 = this.add.image(461, 884, "cove", "rock_1");
        rock_1.setOrigin(0.456, 0.6329113924050633);

        // fg
        const fg = this.add.image(-12, 963, "cove", "fg");
        fg.setOrigin(0, 1);

        // chair_arm
        const chair_arm = this.add.image(633, 283, "cove", "chair_arm");
        chair_arm.setOrigin(0.40298507462686567, 0.7115384615384616);

        // binoculars
        const binoculars = this.add.image(651, 300, "cove", "binoculars0001");
        binoculars.setOrigin(1.0597014925373134, 1.1666666666666667);

        // silver_board
        const silver_board = this.add.image(1463, 557, "cove", "silver_board");
        silver_board.setOrigin(0.5167785234899329, 0.8613445378151261);

        // rock_4
        const rock_4 = this.add.image(1497, 583, "cove", "rock_4");
        rock_4.setOrigin(0.5094339622641509, 0.5423728813559322);

        // rock_2
        const rock_2 = this.add.image(1292, 697, "cove", "rock_2");
        rock_2.setOrigin(0.4935064935064935, 0.6458333333333334);

        // rock_3
        const rock_3 = this.add.image(1447, 690, "cove", "rock_3");
        rock_3.setOrigin(0.5588235294117647, 0.5949367088607594);

        // hut_stool
        const hut_stool = this.add.image(1310, 493, "cove", "hut_stool");
        hut_stool.setOrigin(0.5, 0.5185185185185185);

        // night
        const night = this.add.rectangle(734.8428028019459, 1130.5120053778005, 128, 128);
        night.scaleX = 12.397097039253481;
        night.scaleY = 7.74841237866371;
        night.setOrigin(0.4910783059634098, 1.1518593287200432);
        night.visible = false;
        night.isFilled = true;
        night.fillColor = 0;
        night.fillAlpha = 0.4;

        // fire
        const fire = this.add.sprite(435, 600, "cove", "fire0001");
        fire.setOrigin(0.5029239766081871, 0.7318840579710145);

        // mainfall
        const mainfall = this.add.sprite(888, 637, "camp-cove", "mainfall0001");
        mainfall.setOrigin(0.4841123073268039, 0.9067894509827457);

        // backbridge
        const backbridge = this.add.image(882, 513, "camp-cove", "backbridge");

        // frontbridge
        const frontbridge = this.add.image(881, 530, "camp-cove", "frontbridge");

        // left_camp
        this.add.image(256, 696, "camp-cove", "left_camp");

        // smalltent
        this.add.image(263, 484, "camp-cove", "smalltent");

        // signs
        const signs = this.add.image(817.1644247572001, 531.3707075226015, "camp-cove", "signs");
        signs.setOrigin(0.5085498262929267, 1.009559304526619);

        // bush
        const bush = this.add.image(429.3766774783625, 560.5694913668067, "camp-cove", "bush");
        bush.setOrigin(0.4737311445005678, 2.089265757715643);

        // mallows
        const mallows = this.add.image(624, 628, "camp-cove", "mallows");

        // fall
        const fall = this.add.sprite(1033, 172, "camp-cove", "fall0001");

        // fall_pit
        const fall_pit = this.add.sprite(958, 286, "camp-cove", "fall_pit0001");

        // mallowzone
        const mallowzone = this.add.ellipse(632, 638, 128, 128);
        mallowzone.scaleX = 1.513603229179594;
        mallowzone.angle = -31;
        mallowzone.isFilled = true;
        mallowzone.fillAlpha = 0;

        // lists
        const sort = [water_water_15, water_water_1, water_water_2, water_water_3, water_water_4, water_water_5, water_water_6, water_water_7, water_water_8, water_water_9, water_water_10, water_water_11, water_water_12, water_water_13, water_water_14, hut_wall, boards, rock_1, fire, chair_arm, binoculars, silver_board, rock_3, rock_2, rock_4, fg, night, backbridge, frontbridge, bush, signs, mallows];

        // hut (components)
        const hutButton = new Button(hut);
        hutButton.spriteName = "hut";
        hutButton.activeFrame = false;
        const hutMoveTo = new MoveTo(hut);
        hutMoveTo.x = 1250;
        hutMoveTo.y = 500;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 10;

        this.sky = sky;
        this.nightsky = nightsky;
        this.night = night;
        this.mainfall = mainfall;
        this.fall = fall;
        this.fall_pit = fall_pit;
        this.mallowzone = mallowzone;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.mainfall.play('campmainfall')
        this.fall.play('campfall')
        this.fall_pit.play('campfallpit')
		
		this.roomZones = {
            'mallowzone': { 
                key: this.mallowzone,
                callback: () => this.interface.prompt.showItem(348)
            }
        }

        super.addZones()

        var now = new Date();
        var timeInHours = now.getUTCHours();
        console.log(timeInHours)
        if (timeInHours > 1 && timeInHours < 13 ) {
            this.nightsky.visible = true
            this.sky.visible = false
            this.night.visible = true
        }
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
