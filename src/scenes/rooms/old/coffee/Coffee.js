import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Coffee extends RoomScene {

    constructor() {
        super("Coffee");

        /** @type {Phaser.GameObjects.Sprite} */
        this.board;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cake;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 580, 520),
            'beans': () => this.triggerGame('beancounters', 908),
            'book': () => this.triggerRoom(111, 1200, 580)
        }
        this.roomAnims = true
        this.music = 'coffee'

        this.boardToggle = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("coffee-pack", "assets/media/rooms/old/coffee/coffee-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_1
        const bg_1 = this.add.image(-51, -113, "beta-coffee", "bg");
        bg_1.setOrigin(0, 0);

        // lamp
        const lamp = this.add.image(172, -11, "coffee", "lamp");
        lamp.setOrigin(0, 0);

        // smoke
        const smoke = this.add.sprite(903, 180, "coffee", "smoke0001");
        smoke.setOrigin(0, 0);

        // board
        const board = this.add.sprite(947, 146, "beta-coffee", "board0001");
        board.setOrigin(0, 0);

        // coffee_machine
        const coffee_machine = this.add.image(878, 401, "beta-coffee", "coffee_machine");

        // counter_front
        const counter_front = this.add.image(808, 621, "beta-coffee", "coffee_bar");
        counter_front.setOrigin(0.2864583333333333, 0.8710801393728222);

        // coffee_sign_back
        const coffee_sign_back = this.add.image(900, 635, "beta-coffee", "coffee_sign_back");

        // coffee_sign
        const coffee_sign = this.add.image(875, 639, "beta-coffee", "coffee_sign");

        // gift
        const gift = this.add.image(621, 787, "beta-coffee", "gift");
        gift.scaleX = 0.3327761386580186;
        gift.scaleY = 0.3327761386580186;

        // machine_1
        const machine_1 = this.add.image(952, 468, "coffee", "machine_1");
        machine_1.setOrigin(0, 0);

        // machine_2
        const machine_2 = this.add.image(960, 314, "coffee", "machine_2");
        machine_2.setOrigin(0, 0);

        // machine_3
        const machine_3 = this.add.image(1017, 406, "coffee", "machine_3");
        machine_3.setOrigin(0, 0);

        // bag
        const bag = this.add.image(1073, 646, "coffee", "bag");
        bag.setOrigin(0.4430379746835443, 0.5060240963855421);

        // beans
        const beans = this.add.image(1012, 643, "coffee", "beans");
        beans.setOrigin(0.3411764705882353, 0.5528455284552846);

        // lamp_2
        const lamp_2 = this.add.image(988, 151, "coffee", "lamp_2");
        lamp_2.setOrigin(0, 0);

        // stairs
        const stairs = this.add.image(1203, 328, "coffee", "stairs");
        stairs.setOrigin(0, 0);

        // door
        const door = this.add.image(721, 128, "beta-coffee", "door");
        door.setOrigin(0, 0);

        // table
        const table = this.add.image(472, 493, "beta-coffee", "coffee_table");
        table.setOrigin(0.5217391304347826, 0.5368421052631579);

        // cake
        const cake = this.add.sprite(342, 613, "beta-coffee", "cake");

        // streamers
        this.add.image(763, 94, "beta-coffee", "streamers");

        // fire_extinguisher
        const fire_extinguisher = this.add.image(100, 617, "beta-coffee", "fire_extinguisher");

        // lists
        const sort = [beans, bag, table, cake, fire_extinguisher, gift, coffee_sign, coffee_sign_back, coffee_machine, counter_front];

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // board (components)
        const boardSimpleButton = new SimpleButton(board);
        boardSimpleButton.callback = () => this.onBoardClick();
        boardSimpleButton.pixelPerfect = true;

        // beans (components)
        const beansButton = new Button(beans);
        beansButton.spriteName = "beans";
        beansButton.activeFrame = false;
        beansButton.pixelPerfect = true;
        new MoveTo(beans);
        const beansShowHint = new ShowHint(beans);
        beansShowHint.text = "Play Beans";

        // stairs (components)
        const stairsButton = new Button(stairs);
        stairsButton.spriteName = "stairs";
        stairsButton.activeFrame = false;
        const stairsMoveTo = new MoveTo(stairs);
        stairsMoveTo.x = 1255;
        stairsMoveTo.y = 820;

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        doorButton.pixelPerfect = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 750;
        doorMoveTo.y = 392;

        this.board = board;
        this.cake = cake;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onBoardClick() {
        let animation = (this.boardToggle) ? 'beta_board1' : 'beta_board2'

        this.board.play(animation)
        this.boardToggle = !this.boardToggle
    }

    onCakeHover() {
        this.candle_cake.play('candle_lit')
    }

    onCakeOut() {
        this.candle_cake.play('candle_unlit')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
