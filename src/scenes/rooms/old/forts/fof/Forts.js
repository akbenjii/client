import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tower;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.hitbox;
        /** @type {Phaser.GameObjects.Text} */
        this.day;
        /** @type {Phaser.GameObjects.Text} */
        this.am_pm;
        /** @type {Phaser.GameObjects.Text} */
        this.clockTime;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blue_fort_cannon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blue_flag0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.red_flag0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.red_fort_cannon;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.bluecan;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.redcan;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Ellipse|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 1240, 660),
            'rink': () => this.triggerRoom(802, 780, 340),
            'plaza': () => this.triggerRoom(300, 340, 660)
        }
		this.music='277'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forts-pack", "assets/media/rooms/old/forts/forts-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(762, 143, "fof-forts", "sky");

        // fg
        this.add.image(748, 631, "fof-forts", "fg");

        // lights
        this.add.image(430, 127, "fof-forts", "lights");

        // stad
        this.add.image(430, 241, "fof-forts", "stad");

        // backsnow
        this.add.image(778, 316, "fof-forts", "backsnow");

        // leftsnow
        this.add.image(128, 601, "fof-forts", "leftsnow");

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

        // stadsign0001
        this.add.image(658, 243, "fof-forts", "stadsign0001");

        // red_fort_top
        const red_fort_top = this.add.image(908.6861539441469, 516.8276889269317, "fof-forts", "red_fort_top");
        red_fort_top.setOrigin(0.49066267087477683, 0.8603576003073408);

        // blue_fort_base
        this.add.image(475, 698, "fof-forts", "blue_fort_base");

        // blue_fort_bottom
        const blue_fort_bottom = this.add.image(420, 824, "fof-forts", "blue_fort_bottom");
        blue_fort_bottom.setOrigin(0.584531601169503, 0.6265098793012969);

        // blue_fort_top
        const blue_fort_top = this.add.image(448, 619.8773543689791, "fof-forts", "blue_fort_top");
        blue_fort_top.setOrigin(0.5, 0.9651807418663325);

        // blue_fort_ropes
        const blue_fort_ropes = this.add.image(452.450920885345, 695.8773543689791, "fof-forts", "blue_fort_ropes");
        blue_fort_ropes.setOrigin(0.5036639416296591, 0.8671004649668046);

        // blue_fort_net
        const blue_fort_net = this.add.image(607.90185546875, 718.2300944778048, "fof-forts", "blue_fort_net");
        blue_fort_net.setOrigin(0.5223218597745385, 0.8163662080827419);

        // blue_fort_cannon
        const blue_fort_cannon = this.add.sprite(764.3510473748972, 947.7637661334594, "fof-forts", "blue_fort_cannon0001");
        blue_fort_cannon.setOrigin(0.49550825833323403, 1.575179118352414);

        // blue_flag0001
        const blue_flag0001 = this.add.sprite(260, 616, "fof-forts", "blue_flag0001");

        // red_fort_bottom
        const red_fort_bottom = this.add.image(1000, 614, "fof-forts", "red_fort_bottom");

        // red_flag0001
        const red_flag0001 = this.add.sprite(723, 399, "fof-forts", "red_flag0001");

        // red_fort_cannon
        const red_fort_cannon = this.add.sprite(698.4755612523973, 932.9231925075344, "fof-forts", "blue_fort_cannon0001");
        red_fort_cannon.angle = -28;
        red_fort_cannon.setOrigin(0.43789805047194263, 1.4886053624999525);
        red_fort_cannon.flipX = true;

        // bluecan
        const bluecan = this.add.ellipse(295.35802987421226, 951.3413470057537, 128, 128);
        bluecan.scaleX = 0.8969713757016249;
        bluecan.scaleY = 0.9534090041272888;
        bluecan.setOrigin(0.18956324561243987, 2.6333097747841077);
        bluecan.isFilled = true;
        bluecan.fillAlpha = 0;

        // redcan
        const redcan = this.add.ellipse(1030.9006982499316, 925.3525941345554, 128, 128);
        redcan.scaleX = 0.8969713757016249;
        redcan.scaleY = 0.9534090041272888;
        redcan.setOrigin(0.4730054996184734, 4.042818018837893);
        redcan.isFilled = true;
        redcan.fillAlpha = 0;

        // lists
        const sort = [blue_fort_bottom, blue_fort_top, blue_fort_net, blue_fort_ropes, red_fort_top, red_fort_bottom, bluecan, blue_fort_cannon, red_fort_cannon, redcan];

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

        // bluecan (components)
        const bluecanSimpleButton = new SimpleButton(bluecan);
        bluecanSimpleButton.hoverCallback = () => {this.onBlueCannon()};

        // redcan (components)
        const redcanSimpleButton = new SimpleButton(redcan);
        redcanSimpleButton.hoverCallback = () => {this.onRedCannon()};

        this.tower = tower;
        this.hitbox = hitbox;
        this.day = day;
        this.am_pm = am_pm;
        this.clockTime = clockTime;
        this.blue_fort_cannon = blue_fort_cannon;
        this.blue_flag0001 = blue_flag0001;
        this.red_flag0001 = red_flag0001;
        this.red_fort_cannon = red_fort_cannon;
        this.bluecan = bluecan;
        this.redcan = redcan;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {

        this.stampCompletion = 0

        super.create();

        this.blue_flag0001.play('fofblue')
        this.red_flag0001.play('fofred')

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

    onBlueCannon() {
        this.blue_fort_cannon.play('bluecannon')
    }

    onRedCannon() {
        this.red_fort_cannon.play('bluecannon')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
