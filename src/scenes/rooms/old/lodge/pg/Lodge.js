import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Lodge extends RoomScene {

    constructor() {
        super("Lodge");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flame;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flame_out;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.seats104;
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.seats105;
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.seats106;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'attic': () => this.triggerRoom(221, 966, 560),
            'village': () => this.triggerRoom(200, 940, 540),
            'fish': () => this.triggerGame("IceFishing", 904)
        }
        this.music = '248'
        this.roomAnims = true

        this.waddles = {}

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lodge-pack", "assets/media/rooms/old/lodge/lodge-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(766.729415226033, 491.21569204338834, "lodge", "bg");
        bg.setOrigin(0.5043248169833117, 0.5115150842334583);

        // door
        const door = this.add.image(135, 456, "lodge", "door");

        // footrest
        const footrest = this.add.image(1322, 791, "lodge", "footrest");
        footrest.setOrigin(0.49295775, 0.47222222);

        // chair
        const chair = this.add.image(1409, 807, "lodge", "chair");
        chair.setOrigin(0.5017064846416383, 0.5018450184501845);

        // fire
        const fire = this.add.sprite(1334, 468, "lodge", "fire0001");
        fire.scaleX = 1.02;
        fire.scaleY = 1.02;
        fire.setOrigin(0.5061728395061729, 0.5);

        // candle
        const candle = this.add.image(450, 259, "lodge", "candle");
        candle.setOrigin(0, 0);

        // flame
        const flame = this.add.sprite(518, 230, "lodge", "flame0001");
        flame.setOrigin(0, 0);

        // flame_out
        const flame_out = this.add.sprite(518, 198, "lodge", "flame_out0001");
        flame_out.setOrigin(0, 0);
        flame_out.visible = false;

        // table3
        const table3 = this.add.image(1011, 577, "lodge", "table3");
        table3.scaleX = -1;
        table3.setOrigin(0.5, 0.6985294117647058);

        // table3_1
        const table3_1 = this.add.image(889, 711, "lodge", "table3");
        table3_1.scaleX = -1;
        table3_1.setOrigin(0.5, 0.6985294117647058);

        // table3_1_1
        const table3_1_1 = this.add.image(1117, 703, "lodge", "table3");
        table3_1_1.setOrigin(0.5, 0.6985294117647058);

        // fishing_door
        const fishing_door = this.add.image(951, 254, "lodge", "fishing_door");
        fishing_door.setOrigin(0.2916666666666667, 0.3961218836565097);

        // fish
        const fish = this.add.sprite(1015, 370, "lodge", "fish0001");
        fish.setOrigin(0, 0);

        // rods
        this.add.image(828, 351, "lodge", "rods");

        // catalog_small0001
        const catalog_small0001 = this.add.image(838, 263, "lodge", "catalog_small0001");
        catalog_small0001.setOrigin(0, 0);

        // catalog_small_tape
        const catalog_small_tape = this.add.image(855, 261, "lodge", "catalog_small_tape");
        catalog_small_tape.setOrigin(0, 0);

        // bait
        const bait = this.add.image(842, 439, "lodge", "bait");
        bait.setOrigin(0.5060240963855421, 0.5);

        // ellipse
        const ellipse = this.add.ellipse(928, 592, 50, 50);
        ellipse.visible = false;

        // ellipse_1
        const ellipse_1 = this.add.ellipse(1084, 510, 50, 50);
        ellipse_1.visible = false;

        // ellipse_2
        const ellipse_2 = this.add.ellipse(821, 750, 50, 50);
        ellipse_2.visible = false;

        // ellipse_3
        const ellipse_3 = this.add.ellipse(967, 665, 50, 50);
        ellipse_3.visible = false;

        // ellipse_4
        const ellipse_4 = this.add.ellipse(1053, 632, 50, 50);
        ellipse_4.visible = false;

        // ellipse_5
        const ellipse_5 = this.add.ellipse(1172, 724, 50, 50);
        ellipse_5.visible = false;

        // mullet
        this.add.image(665, 184, "pg-lodge", "mullet");

        // moose
        this.add.image(161, 127, "pg-lodge", "moose");

        // red_balloons
        this.add.image(69, 892, "pg-lodge", "red_balloons");

        // blue_balloons
        this.add.image(1442, 459, "pg-lodge", "blue_balloons");

        // go_blue
        this.add.image(1095, 191, "pg-lodge", "go_blue");

        // go_red
        this.add.image(539, 133, "pg-lodge", "go_red");

        // banners
        this.add.image(761, 0, "pg-lodge", "banners");

        // lists
        const sort = [door, footrest, chair, table3];
        const seats104 = [ellipse_1, ellipse];
        const seats105 = [ellipse_3, ellipse_2];
        const seats106 = [ellipse_4, ellipse_5];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 184;
        doorMoveTo.y = 626;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 10;

        // candle (components)
        const candleSimpleButton = new SimpleButton(candle);
        candleSimpleButton.hoverCallback = () => this.onCandleOver();
        candleSimpleButton.pixelPerfect = true;

        // flame (components)
        const flameAnimation = new Animation(flame);
        flameAnimation.key = "flame";
        flameAnimation.end = 14;

        // flame_out (components)
        const flame_outAnimation = new Animation(flame_out);
        flame_outAnimation.key = "flame_out";
        flame_outAnimation.end = 30;
        flame_outAnimation.repeat = 0;
        flame_outAnimation.autoPlay = false;
        flame_outAnimation.showOnStart = true;
        flame_outAnimation.hideOnComplete = true;

        // table3 (components)
        const table3Button = new Button(table3);
        table3Button.spriteName = "table3";
        table3Button.callback = () => this.triggerWaddle(104);
        table3Button.activeFrame = false;

        // table3_1 (components)
        const table3_1Button = new Button(table3_1);
        table3_1Button.spriteName = "table3";
        table3_1Button.callback = () => this.triggerWaddle(105);
        table3_1Button.activeFrame = false;

        // table3_1_1 (components)
        const table3_1_1Button = new Button(table3_1_1);
        table3_1_1Button.spriteName = "table3";
        table3_1_1Button.callback = () => this.triggerWaddle(106);
        table3_1_1Button.activeFrame = false;

        // fishing_door (components)
        const fishing_doorButton = new Button(fishing_door);
        fishing_doorButton.spriteName = "fishing_door";
        fishing_doorButton.hoverCallback = () => this.onDoorOver();
        fishing_doorButton.hoverOutCallback = () =>this.onDoorOut();
        fishing_doorButton.activeFrame = false;
        const fishing_doorShowHint = new ShowHint(fishing_door);
        fishing_doorShowHint.text = "Ice Fishing";
        const fishing_doorMoveTo = new MoveTo(fishing_door);
        fishing_doorMoveTo.x = 960;
        fishing_doorMoveTo.y = 460;

        // bait (components)
        const baitButton = new Button(bait);
        baitButton.spriteName = "bait";
        baitButton.activeFrame = false;

        this.bg = bg;
        this.flame = flame;
        this.flame_out = flame_out;
        this.fish = fish;
        this.sort = sort;
        this.seats104 = seats104;
        this.seats105 = seats105;
        this.seats106 = seats106;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.flame_out.on('animationcomplete', () => this.onFlameOutComplete())
    }

    onCandleOver() {
        if (!this.flame.visible) return
        this.flame.visible = false
        this.flame_out.__Animation.play()
    }

    onFlameOutComplete() {
        this.flame.visible = true
    }

    onZoneClick() {
        this.world.client.penguin.move(1210, 460)
    }

    onDoorOver() {
        this.fish.visible = true
        this.fish.play("fish")
    }

    onDoorOut() {
        this.fish.visible = false
    }

    triggerWaddle(id) {
        if (this.world.client.activeSeat) {
            return
        }

        let text = 'Would you like to join this\nFind Four Game?'

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('join_waddle', { id: id })

            this.interface.prompt.window.visible = false
        })

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
