import RoomScene from '../RoomScene'

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
            'village': () => this.triggerRoom(200, 940, 540)
        }
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

        // bg_lodge_2005
        const bg_lodge_2005 = this.add.image(777, 461, "bg_lodge_2005");
        bg_lodge_2005.scaleX = 1.03;
        bg_lodge_2005.scaleY = 1.03;

        // door
        const door = this.add.image(122, 474, "lodge", "door");
        door.scaleX = 1.02;
        door.scaleY = 1.02;

        // footrest
        const footrest = this.add.image(1278, 747, "lodge", "footrest");
        footrest.setOrigin(0.49295775, 0.47222222);

        // chair
        const chair = this.add.image(1365, 763, "lodge", "chair");
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
        const table3 = this.add.image(809, 672, "lodge", "table3");
        table3.setOrigin(0.5, 0.6985294117647058);

        // seat1
        const seat1 = this.add.image(736, 621, "seat104");

        // seat2
        const seat2 = this.add.image(870, 706, "seat104");

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
