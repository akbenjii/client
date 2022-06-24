import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tower;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blue_flag;
        /** @type {Phaser.GameObjects.Sprite} */
        this.red_flag;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox;
        /** @type {Phaser.GameObjects.Text} */
        this.day;
        /** @type {Phaser.GameObjects.Text} */
        this.am_pm;
        /** @type {Phaser.GameObjects.Text} */
        this.clockTime;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 1240, 660),
            'rink': () => this.triggerRoom(802, 780, 340),
            'plaza': () => this.triggerRoom(300, 340, 660),
            'gamesrink': () => this.triggerRoom(935, 780, 460)
        }
        this.music='213'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forts-pack", "assets/media/rooms/old/forts/forts-pack.json");
        this.load.pack("pgforts-pack", "assets/media/rooms/old/forts/pg/pgforts-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-35, -18, "forts", "bg");
        bg.setOrigin(0, 0);

        // trail
        const trail = this.add.image(815.5336856276047, 896.6538976740572, "pg-forts", "trail");
        trail.setOrigin(0.5072947961410005, 1.0157917840767468);

        // hockey_trig
        this.add.image(907, 224, "pg-forts", "hockey_trig");

        // snow_left
        this.add.image(241, 391, "pg-forts", "snow_left");

        // left_inner_upper_rope
        const left_inner_upper_rope = this.add.image(539.8771991416851, 781.1710942063739, "pg-forts", "left_inner_upper_rope");
        left_inner_upper_rope.setOrigin(0.4770873556075875, 0.975473317839883);

        // red_fort
        const red_fort = this.add.image(603, 655, "forts", "red_fort");
        red_fort.setOrigin(0.5, 0.65116279);

        // red_pole
        const red_pole = this.add.image(662, 657, "forts", "red_pole");
        red_pole.setOrigin(0.47058824, 1);

        // red_fort_front
        const red_fort_front = this.add.image(703, 702, "forts", "red_fort_front");
        red_fort_front.setOrigin(0.5, 0.6473684210526316);

        // blue_pole
        const blue_pole = this.add.image(993, 424, "forts", "blue_pole");
        blue_pole.setOrigin(0.5, 1);

        // right_lower_rope
        const right_lower_rope = this.add.image(1272.122800858315, 867.0789935626377, "pg-forts", "right_lower_rope");
        right_lower_rope.setOrigin(0.5059623341221562, 0.941744256465911);

        // blue_fort
        const blue_fort = this.add.image(1023, 477, "forts", "blue_fort");
        blue_fort.setOrigin(0.49803922, 0.81818182);

        // tower_shadow
        const tower_shadow = this.add.image(1065, 304, "forts", "tower_shadow");
        tower_shadow.setOrigin(0, 0);

        // tower
        const tower = this.add.sprite(1046, -13, "forts", "tower0001");
        tower.setOrigin(0, 0);

        // clock
        const clock = this.add.image(1082, 104, "forts", "clock");
        clock.setOrigin(0, 0);

        // secret_message
        const secret_message = this.add.image(1252, 327, "forts", "secret_message");
        secret_message.setOrigin(0, 0);

        // sign
        const sign = this.add.image(1390, 291, "forts", "sign");
        sign.setOrigin(0, 0);

        // snowballs
        const snowballs = this.add.image(676, 786, "forts", "snowballs");
        snowballs.setOrigin(0.49230769, 0.57777778);

        // blue_flag
        const blue_flag = this.add.sprite(966, 334, "forts", "blue_flag0001");
        blue_flag.setOrigin(0.5, 1.85185185);

        // red_flag
        const red_flag = this.add.sprite(626, 524, "pg-forts", "red_flag0001");
        red_flag.setOrigin(0.5, 1.73913043);

        // hitbox
        const hitbox = this.add.rectangle(1347, 156, 70, 75);
        hitbox.visible = false;

        // day
        const day = this.add.text(1156, 221, "", {});
        day.angle = 2.5;
        day.setOrigin(0.5, 0.5);
        day.text = "WEDNESDAY";
        day.setStyle({ "color": "#0d0d0dff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });

        // am_pm
        const am_pm = this.add.text(1218, 140, "", {});
        am_pm.angle = 1;
        am_pm.setOrigin(0.5, 0.5);
        am_pm.text = "AM";
        am_pm.setStyle({ "fontFamily": "Burbank Small", "fontSize": "20px" });

        // clockTime
        const clockTime = this.add.text(1143, 154, "", {});
        clockTime.scaleY = 1.5;
        clockTime.angle = 1;
        clockTime.setOrigin(0.5, 0.5);
        clockTime.text = "12:58";
        clockTime.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "45px" });

        // bottom_flags
        this.add.image(449, 279, "pg-forts", "bottom_flags");

        // peng_stad
        this.add.image(646, 245, "pg-forts", "peng_stad");

        // peng_stad_text
        const peng_stad_text = this.add.image(647, 226, "pg-forts", "peng_stad_text");
        peng_stad_text.scaleX = 0.7954759345831319;
        peng_stad_text.scaleY = 0.7954759345831319;

        // red_seats
        this.add.image(265, 242, "pg-forts", "red_seats");

        // red_fort_flags
        this.add.image(584, 632, "pg-forts", "red_fort_flags");

        // left_trees
        this.add.image(127, 626, "pg-forts", "left_trees");

        // left_inner_rope
        this.add.image(208, 466, "pg-forts", "left_inner_rope");

        // right_sign
        const right_sign = this.add.image(1397, 693, "pg-forts", "right_sign");
        right_sign.setOrigin(0.5, 0.4307715835939066);

        // left_sign
        const left_sign = this.add.image(448, 726, "pg-forts", "left_sign");

        // blue_fort_flags
        this.add.image(952, 427, "pg-forts", "blue_fort_flags");

        // blue_fort_sign
        this.add.image(1086, 441, "pg-forts", "blue_fort_sign");

        // red_fort_sign
        this.add.image(733, 680, "pg-forts", "red_fort_sign");

        // right_upper_rope
        const right_upper_rope = this.add.image(1324.0261117905147, 728.1270845756127, "pg-forts", "right_upper_rope");
        right_upper_rope.setOrigin(0.6230365021144391, 0.9383648612746027);

        // mid_inner_rope
        const mid_inner_rope = this.add.image(598.1535010728937, 658.1842012874724, "pg-forts", "mid_inner_rope");
        mid_inner_rope.setOrigin(0.5119312586050455, 0.5241750025545088);

        // lists
        const sort = [red_flag, red_pole, blue_pole, blue_flag, blue_fort, red_fort_front, red_fort, snowballs, right_upper_rope, right_lower_rope, left_inner_upper_rope, left_sign, right_sign];

        // tower (components)
        const towerAnimation = new Animation(tower);
        towerAnimation.key = "tower";
        towerAnimation.end = 24;
        towerAnimation.repeat = 0;
        towerAnimation.autoPlay = false;

        // sign (components)
        const signButton = new Button(sign);
        signButton.spriteName = "sign";
        signButton.activeFrame = false;

        // blue_flag (components)
        const blue_flagAnimation = new Animation(blue_flag);
        blue_flagAnimation.key = "blue_flag";
        blue_flagAnimation.end = 16;

        // red_flag (components)
        const red_flagAnimation = new Animation(red_flag);
        red_flagAnimation.key = "red_flag";
        red_flagAnimation.end = 16;

        this.tower = tower;
        this.blue_flag = blue_flag;
        this.red_flag = red_flag;
        this.hitbox = hitbox;
        this.day = day;
        this.am_pm = am_pm;
        this.clockTime = clockTime;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {

        this.stampCompletion = 0

        super.create();

        this.blue_flag.play('blueflag')
        this.red_flag.play('partyred')

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
