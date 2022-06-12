import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Sprite} */
        this.blue_flag;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox;
        /** @type {Phaser.GameObjects.Text} */
        this.day;
        /** @type {Phaser.GameObjects.Text} */
        this.am_pm;
        /** @type {Phaser.GameObjects.Text} */
        this.clockTime;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer24;
        /** @type {Phaser.GameObjects.Sprite} */
        this.floatingbarrel0001;
        /** @type {Phaser.GameObjects.Image} */
        this.weed10001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.weed10001_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.weed10001_2;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 1240, 660),
            'rink': () => this.triggerRoom(802, 780, 340),
            'plaza': () => this.triggerRoom(300, 340, 660)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forts-pack", "assets/media/rooms/old/forts/forts-pack.json");
    }

    /** @returns {void} */
    _create() {

        // map
        const map = this.add.image(-214, -70, "fortsuw", "map");
        map.setOrigin(0, 0);

        // blue_pole
        const blue_pole = this.add.image(1011, 424, "forts", "blue_pole");
        blue_pole.setOrigin(0.5, 1);

        // tower_shadow
        const tower_shadow = this.add.image(1083, 304, "forts", "tower_shadow");
        tower_shadow.setOrigin(0, 0);

        // clock
        const clock = this.add.image(1100, 104, "forts", "clock");
        clock.setOrigin(0, 0);

        // secret_message
        const secret_message = this.add.image(1270, 327, "forts", "secret_message");
        secret_message.setOrigin(0, 0);

        // blue_flag
        const blue_flag = this.add.sprite(984, 334, "forts", "blue_flag0001");
        blue_flag.setOrigin(0.5, 1.85185185);

        // hitbox
        const hitbox = this.add.rectangle(1365, 156, 70, 75);
        hitbox.visible = false;

        // day
        const day = this.add.text(1174, 221, "", {});
        day.angle = 2.5;
        day.setOrigin(0.5, 0.5);
        day.text = "WEDNESDAY";
        day.setStyle({ "color": "#0d0d0dff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });

        // am_pm
        const am_pm = this.add.text(1236, 140, "", {});
        am_pm.angle = 1;
        am_pm.setOrigin(0.5, 0.5);
        am_pm.text = "AM";
        am_pm.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });

        // clockTime
        const clockTime = this.add.text(1161, 154, "", {});
        clockTime.scaleY = 1.5;
        clockTime.angle = 1;
        clockTime.setOrigin(0.5, 0.5);
        clockTime.text = "12:58";
        clockTime.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "45px" });

        // layer45
        this.add.image(1064, 158, "fortsuw", "layer45");

        // layer25
        this.add.image(1456, 355, "fortsuw", "layer25");

        // sign
        const sign = this.add.image(1408, 291, "forts", "sign");
        sign.setOrigin(0, 0);

        // layer24
        const layer24 = this.add.sprite(1425, 387, "fortsuw", "layer24");

        // layer23
        this.add.image(1308, 412, "fortsuw", "layer23");

        // layer23_1
        const layer23_1 = this.add.image(746, 337, "fortsuw", "layer23");
        layer23_1.scaleX = 0.75;
        layer23_1.scaleY = 0.75;
        layer23_1.flipX = true;

        // layer23_1_1
        const layer23_1_1 = this.add.image(1045, 336, "fortsuw", "layer23");
        layer23_1_1.scaleX = 0.75;
        layer23_1_1.scaleY = 0.75;
        layer23_1_1.flipX = true;

        // layer19
        const layer19 = this.add.image(336, 880, "fortsuw", "layer19");

        // layer21
        this.add.image(289, 780, "fortsuw", "layer21");

        // bridge1
        this.add.image(1269, 699, "fortsuw", "bridge1");

        // tree1
        const tree1 = this.add.image(65, 564, "fortsuw", "tree1");

        // plant1
        const plant1 = this.add.image(118, 791, "fortsuw", "plant1");

        // plant2
        const plant2 = this.add.image(5, 928, "fortsuw", "plant2");

        // seashell2
        this.add.image(1198, 599, "fortsuw", "seashell2");

        // seashell2_1
        this.add.image(844, 458, "fortsuw", "seashell2");

        // seashell1
        this.add.image(635, 928, "fortsuw", "seashell1");

        // seashell1_1
        this.add.image(455, 539, "fortsuw", "seashell1");

        // seashell1_2
        this.add.image(748, 663, "fortsuw", "seashell1");

        // floatingbarrel0001
        const floatingbarrel0001 = this.add.sprite(656, 479, "fortsuw", "floatingbarrel0001");

        // boat1
        this.add.image(929, 640, "fortsuw", "boat1");

        // rock1
        this.add.image(490, 780, "fortsuw", "rock1");

        // rock2
        this.add.image(911, 822, "fortsuw", "rock2");

        // barrel1
        this.add.image(1149, 791, "fortsuw", "barrel1");

        // pole1
        this.add.image(1067, 769, "fortsuw", "pole1");

        // pole2
        this.add.image(1240, 805, "fortsuw", "pole2");

        // weed10001
        const weed10001 = this.add.image(1470, 369, "fortsuw", "weed10001");
        weed10001.flipX = true;

        // weed10001_1
        const weed10001_1 = this.add.sprite(911, 251, "fortsuw", "weed10001");

        // weed10001_2
        const weed10001_2 = this.add.sprite(397, 376, "fortsuw", "weed10001");

        // lists
        const sort = [blue_pole, blue_flag, layer19, plant1, plant2, tree1];

        // blue_flag (components)
        const blue_flagAnimation = new Animation(blue_flag);
        blue_flagAnimation.key = "blue_flag";
        blue_flagAnimation.end = 16;

        // sign (components)
        const signButton = new Button(sign);
        signButton.spriteName = "sign";
        signButton.activeFrame = false;

        this.blue_flag = blue_flag;
        this.hitbox = hitbox;
        this.day = day;
        this.am_pm = am_pm;
        this.clockTime = clockTime;
        this.layer24 = layer24;
        this.floatingbarrel0001 = floatingbarrel0001;
        this.weed10001 = weed10001;
        this.weed10001_1 = weed10001_1;
        this.weed10001_2 = weed10001_2;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {

        this.stampCompletion = 0

        super.create();
        this.floatingbarrel0001.play("underwaterforts_floatingbarrel")
        this.weed10001.play("underwaterforts_weed")
        this.weed10001_1.play("underwaterforts_weed")
        this.weed10001_2.play("underwaterforts_weed")
        this.blue_flag.play('blueflag')
        this.red_flag.play('redflag')

        var now = new Date();
        var timeInHours = now.getUTCHours();
        if (timeInHours > 12) {
            timeInHours = timeInHours - 12
            this.am_pm.text = "PM"
        }
        var timeInMinutes = now.getUTCMinutes();
        if (timeInMinutes < 10) {
            this.clockTime.text = timeInHours + ":0" + timeInMinutes;
        } else {
            this.clockTime.text = timeInHours + ":" + timeInMinutes;
        }
        var day = now.getUTCDay()

        if (day == 1) {
            this.day.text = "MONDAY"
        } else if (day == 2) {
            this.day.text = "TUESDAY"
        } else if (day == 3) {
            this.day.text = "WEDNESDAY"
        } else if (day == 4) {
            this.day.text = "THURSDAY"
        } else if (day == 5) {
            this.day.text = "FRIDAY"
        } else if (day = 6) {
            this.day.text = "SATURDAY"
        } else {
            this.day.text = "SUNDAY"
        }
    }

    onSnowballComplete(x, y) {
        if (!this.bounds) return
        if (this.bounds.contains(x, y)) {
            this.stampCompletion += 1
            if (this.stampCompletion >= 10) {
                this.world.client.stampEarned(13)
            }
            this.tower.__Animation.play()
        }
    }

    onTowerAnimComplete() {
        this.tower.setFrame('tower0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
