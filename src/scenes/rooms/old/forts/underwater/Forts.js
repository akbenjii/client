import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Sprite} */
        this.map;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blue_pole;
        /** @type {Phaser.GameObjects.Sprite} */
        this.tower_shadow;
        /** @type {Phaser.GameObjects.Sprite} */
        this.clock;
        /** @type {Phaser.GameObjects.Sprite} */
        this.secret_message;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blue_flag;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer45;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer25;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sign;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer24;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer23;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer23_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer23_1_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer19;
        /** @type {Phaser.GameObjects.Sprite} */
        this.layer21;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bridge1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.tree1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.seashell2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.seashell2_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.seashell1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.seashell1_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.seashell1_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.floatingbarrel0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.boat1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rock1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rock2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.barrel1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pole1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.pole2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.weed10001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.weed10001_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.weed10001_2;
        /** @type {Phaser.GameObjects.Text} */
        this.clockTime;
        /** @type {Phaser.GameObjects.Text} */
        this.day;
        /** @type {Phaser.GameObjects.Text} */
        this.am_pm;
        /** @type {Phaser.GameObjects.Sprite[]} */
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
        const map = this.add.sprite(-214, -70, "fortsuw", "map");
        map.setOrigin(0, 0);

        // blue_pole
        const blue_pole = this.add.sprite(1011, 424, "forts", "blue_pole");
        blue_pole.setOrigin(0.5, 1);

        // tower_shadow
        const tower_shadow = this.add.sprite(1083, 304, "forts", "tower_shadow");
        tower_shadow.setOrigin(0, 0);

        // clock
        const clock = this.add.sprite(1100, 104, "forts", "clock");
        clock.setOrigin(0, 0);

        // secret_message
        const secret_message = this.add.sprite(1270, 327, "forts", "secret_message");
        secret_message.setOrigin(0, 0);

        // blue_flag
        const blue_flag = this.add.sprite(984, 334, "forts", "blue_flag0001");
        blue_flag.setOrigin(0.5, 1.85185185);

        // hitbox
        const hitbox = this.add.rectangle(1365, 156, 70, 75);
        hitbox.visible = false;

        // layer45
        const layer45 = this.add.sprite(1064, 158, "fortsuw", "layer45");

        // layer25
        const layer25 = this.add.sprite(1456, 355, "fortsuw", "layer25");

        // sign
        const sign = this.add.sprite(1408, 291, "forts", "sign");
        sign.setOrigin(0, 0);

        // layer24
        const layer24 = this.add.sprite(1425, 387, "fortsuw", "layer24");

        // layer23
        const layer23 = this.add.sprite(1308, 412, "fortsuw", "layer23");

        // layer23_1
        const layer23_1 = this.add.sprite(746, 337, "fortsuw", "layer23");
        layer23_1.scaleX = 0.75;
        layer23_1.scaleY = 0.75;
        layer23_1.flipX = true;

        // layer23_1_1
        const layer23_1_1 = this.add.sprite(1045, 336, "fortsuw", "layer23");
        layer23_1_1.scaleX = 0.75;
        layer23_1_1.scaleY = 0.75;
        layer23_1_1.flipX = true;

        // layer19
        const layer19 = this.add.sprite(358, 884, "fortsuw", "layer19");

        // layer21
        const layer21 = this.add.sprite(314, 785, "fortsuw", "layer21");

        // bridge1
        const bridge1 = this.add.sprite(1269, 699, "fortsuw", "bridge1");

        // tree1
        const tree1 = this.add.sprite(65, 564, "fortsuw", "tree1");

        // plant1
        const plant1 = this.add.sprite(118, 791, "fortsuw", "plant1");

        // plant2
        const plant2 = this.add.sprite(5, 928, "fortsuw", "plant2");

        // seashell2
        const seashell2 = this.add.sprite(1198, 599, "fortsuw", "seashell2");

        // seashell2_1
        const seashell2_1 = this.add.sprite(844, 458, "fortsuw", "seashell2");

        // seashell1
        const seashell1 = this.add.sprite(635, 928, "fortsuw", "seashell1");

        // seashell1_1
        const seashell1_1 = this.add.sprite(455, 539, "fortsuw", "seashell1");

        // seashell1_2
        const seashell1_2 = this.add.sprite(748, 663, "fortsuw", "seashell1");

        // floatingbarrel0001
        const floatingbarrel0001 = this.add.sprite(656, 479, "fortsuw", "floatingbarrel0001");

        // boat1
        const boat1 = this.add.sprite(929, 640, "fortsuw", "boat1");

        // rock1
        const rock1 = this.add.sprite(490, 780, "fortsuw", "rock1");

        // rock2
        const rock2 = this.add.sprite(911, 822, "fortsuw", "rock2");

        // barrel1
        const barrel1 = this.add.sprite(1149, 791, "fortsuw", "barrel1");

        // pole1
        const pole1 = this.add.sprite(1067, 769, "fortsuw", "pole1");

        // pole2
        const pole2 = this.add.sprite(1240, 805, "fortsuw", "pole2");

        // weed10001
        const weed10001 = this.add.sprite(1470, 369, "fortsuw", "weed10001");
        weed10001.flipX = true;

        // weed10001_1
        const weed10001_1 = this.add.sprite(911, 251, "fortsuw", "weed10001");

        // weed10001_2
        const weed10001_2 = this.add.sprite(397, 376, "fortsuw", "weed10001");

        // rectangle
        const rectangle = this.add.rectangle(1155, 217, 120, 15);
        rectangle.angle = 3;
        rectangle.isFilled = true;
        rectangle.fillColor = 13222305;

        // clockTime
        const clockTime = this.add.text(1143, 153, "", {});
        clockTime.scaleY = 1.5;
        clockTime.angle = 1;
        clockTime.setOrigin(0.5, 0.5);
        clockTime.text = "12:58";
        clockTime.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "45px" });

        // day
        const day = this.add.text(1159, 218, "", {});
        day.angle = 2.5;
        day.setOrigin(0.5, 0.5);
        day.text = "WEDNESDAY";
        day.setStyle({ "color": "#0d0d0dff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });

        // am_pm
        const am_pm = this.add.text(1225, 136, "", {});
        am_pm.angle = 1;
        am_pm.setOrigin(0.5, 0.5);
        am_pm.text = "AM";
        am_pm.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });

        // lists
        const sort = [blue_pole, blue_flag, layer19, plant2, tree1];

        // blue_flag (components)
        const blue_flagAnimation = new Animation(blue_flag);
        blue_flagAnimation.key = "blue_flag";
        blue_flagAnimation.end = 16;

        // sign (components)
        const signButton = new Button(sign);
        signButton.spriteName = "sign";
        signButton.activeFrame = false;

        this.map = map;
        this.blue_pole = blue_pole;
        this.tower_shadow = tower_shadow;
        this.clock = clock;
        this.secret_message = secret_message;
        this.blue_flag = blue_flag;
        this.hitbox = hitbox;
        this.layer45 = layer45;
        this.layer25 = layer25;
        this.sign = sign;
        this.layer24 = layer24;
        this.layer23 = layer23;
        this.layer23_1 = layer23_1;
        this.layer23_1_1 = layer23_1_1;
        this.layer19 = layer19;
        this.layer21 = layer21;
        this.bridge1 = bridge1;
        this.tree1 = tree1;
        this.plant1 = plant1;
        this.plant2 = plant2;
        this.seashell2 = seashell2;
        this.seashell2_1 = seashell2_1;
        this.seashell1 = seashell1;
        this.seashell1_1 = seashell1_1;
        this.seashell1_2 = seashell1_2;
        this.floatingbarrel0001 = floatingbarrel0001;
        this.boat1 = boat1;
        this.rock1 = rock1;
        this.rock2 = rock2;
        this.barrel1 = barrel1;
        this.pole1 = pole1;
        this.pole2 = pole2;
        this.weed10001 = weed10001;
        this.weed10001_1 = weed10001_1;
        this.weed10001_2 = weed10001_2;
        this.clockTime = clockTime;
        this.day = day;
        this.am_pm = am_pm;
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
