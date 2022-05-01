import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Lodge extends RoomScene {

    constructor() {
        super("Lodge");

        /** @type {Phaser.GameObjects.Sprite} */
        this.flame;
        /** @type {Phaser.GameObjects.Sprite} */
        this.flame_out;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bird_clock0001;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;
        /** @type {Phaser.GameObjects.Image[]} */
        this.seats104;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'attic': () => this.triggerRoom(221, 966, 560),
            'village': () => this.triggerRoom(200, 940, 540),
            'fish': () => this.triggerGame("iceFishing", 904)
        }
        this.music = '589'
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
        const bg = this.add.image(766, 501, "lodge", "bg");
        bg.scaleX = 1.03;
        bg.scaleY = 1.03;

        // door
        const door = this.add.image(122, 474, "lodge", "door");
        door.scaleX = 1.02;
        door.scaleY = 1.02;

        // footrest
        const footrest = this.add.image(1322, 791, "lodge", "footrest");
        footrest.setOrigin(0.49295775, 0.47222222);

        // chair
        const chair = this.add.image(1409, 807, "lodge", "chair");
        chair.setOrigin(0.5017064846416383, 0.5018450184501845);

        // fire
        const fire = this.add.sprite(1351, 488, "lodge", "fire0001");
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

        // bird_clock0001
        const bird_clock0001 = this.add.sprite(392, 347, "bird-clock0001");

        // table3
        const table3 = this.add.image(1011, 577, "lodge", "table3");
        table3.scaleX = -1;
        table3.setOrigin(0.5, 0.6985294117647058);

        // seat1
        const seat1 = this.add.image(736, 621, "seat104");

        // seat2
        const seat2 = this.add.image(870, 706, "seat104");

        // table3_1
        const table3_1 = this.add.image(889, 711, "lodge", "table3");
        table3_1.scaleX = -1;
        table3_1.setOrigin(0.5, 0.6985294117647058);

        // table3_1_1
        const table3_1_1 = this.add.image(1117, 703, "lodge", "table3");
        table3_1_1.setOrigin(0.5, 0.6985294117647058);

        // fishing_door
        const fishing_door = this.add.image(959, 274, "lodge", "fishing_door");
        fishing_door.setOrigin(0.2916666666666667, 0.3961218836565097);

        // fish0001
        const fish0001 = this.add.image(1021, 390, "lodge", "fish0001");
        fish0001.setOrigin(0, 0);
        fish0001.visible = false;

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

        // lists
        const sort = [door, footrest, chair, table3];
        const seats104 = [seat1, seat2];

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

        // bird_clock0001 (components)
        const bird_clock0001SimpleButton = new SimpleButton(bird_clock0001);
        bird_clock0001SimpleButton.hoverCallback = () => this.onClockOver();

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
        const fishing_doorShowHint = new ShowHint(fishing_door);
        fishing_doorShowHint.text = "Ice Fishing";

        // bait (components)
        const baitButton = new Button(bait);
        baitButton.spriteName = "bait";

        this.flame = flame;
        this.flame_out = flame_out;
        this.bird_clock0001 = bird_clock0001;
        this.sort = sort;
        this.seats104 = seats104;

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

    onClockOver() {
        this.bird_clock0001.play('clockbird')
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
