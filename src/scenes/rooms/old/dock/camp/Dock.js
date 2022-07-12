import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Dock extends RoomScene {

    constructor() {
        super("Dock");

        /** @type {Phaser.GameObjects.Image} */
        this.bgcampnightdock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.boat;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rings;
        /** @type {Phaser.GameObjects.Sprite} */
        this.grillfire;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.night;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 950, 430),
            'village': () => this.triggerRoom(200, 1300, 760),
            'town': () => this.triggerRoom(100, 368, 640),
            'hydro': () => this.triggerGame('HydroHopper', 924)
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

        this.load.pack("dock-pack", "assets/media/rooms/old/dock/dock-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bgcamp
        const bgcamp = this.add.image(-102, -4, "camp-dock", "bgcamp");
        bgcamp.setOrigin(0, 0);

        // bgcampnightdock
        const bgcampnightdock = this.add.image(-102, -4, "camp-dock", "bgcampnightdock");
        bgcampnightdock.setOrigin(0, 0);
        bgcampnightdock.visible = false;

        // post_1
        const post_1 = this.add.image(443, 592, "dock", "post_1");
        post_1.setOrigin(0.55, 0.54782609);

        // boat
        const boat = this.add.sprite(231, 639, "dock", "boat");
        boat.setOrigin(0.49477351916376305, 0.5091743119266054);

        // dock
        const dock = this.add.image(187, 593, "dock", "dock");
        dock.setOrigin(0, 0);

        // post_2
        const post_2 = this.add.image(572, 619, "dock", "post_2");
        post_2.setOrigin(0.43243243243243246, 0.49137931034482757);

        // post_3
        const post_3 = this.add.image(367, 882, "dock", "post_3");
        post_3.setOrigin(0.5384615384615384, 0.806282722513089);

        // post_4
        const post_4 = this.add.image(164, 832, "dock", "post_4");
        post_4.setOrigin(0.4943820224719101, 0.7960526315789473);

        // box
        const box = this.add.image(434, 652, "dock", "box");
        box.setOrigin(0.4915254237288136, 0.7142857142857143);

        // bollard_1
        const bollard_1 = this.add.image(353, 689, "dock", "bollard_1");
        bollard_1.setOrigin(0.5, 0.9302325581395349);

        // bollard_2
        const bollard_2 = this.add.image(279, 732, "dock", "bollard_2");
        bollard_2.setOrigin(0.5, 0.9215686274509803);

        // rings
        const rings = this.add.sprite(632, 668, "dock", "rings0001");
        rings.setOrigin(0.4975124378109453, 0.8127659574468085);

        // right_sign
        this.add.image(1366, 270, "dock", "right_sign");

        // left_sign
        this.add.image(120, 345, "dock", "left_sign");

        // zone
        const zone = this.add.rectangle(631, 633, 135, 160);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // behindgrilltrees
        this.add.image(902, 157, "camp-dock", "behindgrilltrees");

        // grill
        this.add.image(957, 203, "camp-dock", "grill");

        // grillfire
        const grillfire = this.add.sprite(876, 173, "camp-dock", "grillfire0001");

        // fishgrill
        this.add.image(1137, 212, "camp-dock", "fishgrill");

        // grilldec
        this.add.image(1029, 171, "camp-dock", "grilldec");

        // ketchmust
        const ketchmust = this.add.image(1211, 221, "camp-dock", "ketchmust");
        ketchmust.flipX = true;

        // lilyrock
        const lilyrock = this.add.image(1196.047767485781, 542.0939763708619, "camp-dock", "lilyrock");
        lilyrock.setOrigin(0.44998393874662534, 0.8264860572975797);

        // bushrock
        const bushrock = this.add.image(986, 764, "camp-dock", "bushrock");
        bushrock.setOrigin(0.4891030838335124, 0.8022709788790893);

        // leftbush
        const leftbush = this.add.image(150, 513, "camp-dock", "leftbush");

        // rightsign
        this.add.image(1437, 207, "camp-dock", "rightsign");

        // leftsign
        this.add.image(162, 324, "camp-dock", "leftsign");

        // table1
        this.add.image(494, 327, "camp-dock", "table1");

        // table1dec
        this.add.image(505, 271, "camp-dock", "table1dec");

        // table2
        this.add.image(757, 378, "camp-dock", "table2");

        // table2dec
        this.add.image(778, 337, "camp-dock", "table2dec");

        // ketchmust_1
        this.add.image(690, 338, "camp-dock", "ketchmust");

        // table3
        this.add.image(995, 423, "camp-dock", "table3");

        // table3dec
        this.add.image(1030, 379, "camp-dock", "table3dec");

        // table4
        this.add.image(861, 545, "camp-dock", "table4");

        // tablecloth
        this.add.image(861, 515, "camp-dock", "tablecloth");

        // table4dec
        this.add.image(854, 485, "camp-dock", "table4dec");

        // table5
        this.add.image(390, 467, "camp-dock", "table5");

        // tablecloth_1
        this.add.image(378, 436, "camp-dock", "tablecloth");

        // table5dec
        this.add.image(375, 403, "camp-dock", "table5dec");

        // night
        const night = this.add.rectangle(766, 1127, 128, 128);
        night.scaleX = 12.397097039253481;
        night.scaleY = 7.74841237866371;
        night.setOrigin(0.4910783059634098, 1.1518593287200432);
        night.visible = false;
        night.isFilled = true;
        night.fillColor = 0;
        night.fillAlpha = 0.4;

        // lists
        const sort = [post_3, post_4, post_1, post_2, rings, bollard_2, bollard_1, dock, box, lilyrock, bushrock, leftbush];

        // boat (components)
        const boatButton = new Button(boat);
        boatButton.spriteName = "boat";
        boatButton.activeFrame = false;
        boatButton.pixelPerfect = true;
        new MoveTo(boat);
        const boatShowHint = new ShowHint(boat);
        boatShowHint.text = "Hydro Hopper";

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

        this.bgcampnightdock = bgcampnightdock;
        this.boat = boat;
        this.rings = rings;
        this.grillfire = grillfire;
        this.night = night;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.up = false
		
		this.grillfire.play('grillfire')

        this.time.addEvent({
            delay: 1500,
            callback: () => this.floatBoat(),
            loop: true
        })
		
		var now = new Date();
        var timeInHours = now.getUTCHours();
        console.log(timeInHours)
        if (timeInHours > 1 && timeInHours < 13 ) {
            this.bgcampnightdock.visible = true
            this.night.visible = true
        }
    }

    onRingsOver() {
        this.rings.__Animation.play()
    }

    floatBoat() {
        let value = (this.up) ? -2 : 2
        this.boat.y += value
        this.up = !this.up
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
