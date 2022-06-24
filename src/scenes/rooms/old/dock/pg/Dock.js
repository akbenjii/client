import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Dock extends RoomScene {

    constructor() {
        super("Dock");

        /** @type {Phaser.GameObjects.Sprite} */
        this.boat;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rings;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire_mountain;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 950, 430),
            'village': () => this.triggerRoom(200, 1300, 760),
            'town': () => this.triggerRoom(100, 368, 640),
            'hydro': () => this.triggerGame('HydroHopper', 924)
        }
        this.roomAnims = true
        this.music='213'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dock-pack", "assets/media/rooms/old/dock/dock-pack.json");
    }

    /** @returns {void} */
    _create() {

        // dock_bg_2005
        const dock_bg_2005 = this.add.image(-48, 0, "pg-dock", "bg_test");
        dock_bg_2005.setOrigin(0, 0);

        // shadows
        this.add.image(952, 443, "pg-dock", "shadows");

        // trail
        this.add.image(772, 527, "pg-dock", "trail");

        // right_trees
        this.add.image(1385, 487, "pg-dock", "right_trees");

        // bottom_rope
        const bottom_rope = this.add.image(774, 925.4038968254793, "pg-dock", "bottom_rope");
        bottom_rope.setOrigin(0.5, 1.165615338316542);

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

        // upper_rope
        this.add.image(799, 464, "pg-dock", "upper_rope");

        // zone
        const zone = this.add.rectangle(631, 633, 135, 160);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // break_sign
        this.add.image(562, 164, "pg-dock", "break_sign");

        // coffee_stand
        const coffee_stand = this.add.image(982, 209, "pg-dock", "coffee_stand");
        coffee_stand.setOrigin(0.5228081990685929, 0.7792487883304994);

        // resulting_spill
        this.add.image(1118, 305, "pg-dock", "resulting_spill");

        // spill_coffee
        this.add.image(1153, 292, "pg-dock", "spill_coffee");

        // chair
        const chair = this.add.image(723, 394, "pg-dock", "chair");

        // chair_1
        const chair_1 = this.add.image(872, 396, "pg-dock", "chair");
        chair_1.flipX = true;

        // left_table
        const left_table = this.add.image(813, 425, "pg-dock", "left_table");
        left_table.angle = -21;
        left_table.setOrigin(0.4541006063491494, 0.7113315097623216);
        left_table.flipX = true;

        // chair_2
        const chair_2 = this.add.image(1008, 360, "pg-dock", "chair");

        // chair_1_1
        const chair_1_1 = this.add.image(1152, 359, "pg-dock", "chair");
        chair_1_1.flipX = true;

        // left_table_1
        const left_table_1 = this.add.image(1072, 398, "pg-dock", "left_table");
        left_table_1.angle = 21;
        left_table_1.setOrigin(0.5966025246423126, 0.7975379253731029);

        // chair_3
        const chair_3 = this.add.image(936, 596, "pg-dock", "chair");

        // chair_1_2
        const chair_1_2 = this.add.image(1096, 602, "pg-dock", "chair");
        chair_1_2.setOrigin(0.47762945911386245, 0.5177765905255914);
        chair_1_2.flipX = true;

        // bottom_table
        const bottom_table = this.add.image(1009, 637, "pg-dock", "bottom_table");
        bottom_table.angle = 15;
        bottom_table.setOrigin(0.5487013705409769, 0.7006174581589748);

        // bottom_table_coffee
        const bottom_table_coffee = this.add.image(1012, 582, "pg-dock", "bottom_table_coffee");
        bottom_table_coffee.angle = 14;

        // fire_mountain
        const fire_mountain = this.add.sprite(275, 55, "pg-dock", "fire_mountain0001");
        fire_mountain.scaleX = 0.20389227085632977;
        fire_mountain.scaleY = 0.20389227085632977;

        // fire_holder
        this.add.image(274, 74, "pg-dock", "fire_holder");

        // left_rope_far
        this.add.image(17, 335, "pg-dock", "left_rope_far");

        // left_sign
        const left_sign = this.add.image(491, 389, "pg-dock", "left_sign");

        // right_sign
        const right_sign = this.add.image(1261, 326, "pg-dock", "right_sign");

        // lists
        const sort = [post_3, post_4, post_1, post_2, rings, bollard_2, bollard_1, dock, box, chair, left_table, left_table_1, chair_2, chair_1_1, chair_3, chair_1_2, bottom_table, coffee_stand, bottom_rope, chair_1, zone, left_sign, right_sign];

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

        this.boat = boat;
        this.rings = rings;
        this.fire_mountain = fire_mountain;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.fire_mountain.play('mountain_flame')

        this.up = false

        this.time.addEvent({
            delay: 1500,
            callback: () => this.floatBoat(),
            loop: true
        })
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
