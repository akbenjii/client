import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class Pizza extends RoomScene {

    constructor() {
        super("Pizza");

        /** @type {Phaser.GameObjects.Sprite} */
        this.candle_fire10001_png;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle_fire2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.register0001_png;
        /** @type {Phaser.GameObjects.Sprite} */
        this.candle_fire3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.book_hover0001_png;
        /** @type {Phaser.GameObjects.Sprite} */
        this.steam;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 870, 330),
            'pizzatron': () => this.triggerGame("Pizzatron", 910)
        }
        this.roomAnims = true
        this.music = 'pizzaparlor'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pizza-pack", "assets/media/rooms/old/pizza/pizza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        const bg_png = this.add.image(760, 483, "pizza", "bg.png");
        bg_png.scaleX = 1.02;
        bg_png.scaleY = 1.02;

        // bead_door_hover0001_png
        const bead_door_hover0001_png = this.add.image(385, 241, "pizza", "bead-door.png");
        bead_door_hover0001_png.scaleX = 1.02;
        bead_door_hover0001_png.scaleY = 1.02;

        // piano_png
        const piano_png = this.add.image(1265.6137794715412, 446.7720125239132, "pizza", "piano.png");
        piano_png.setOrigin(0.1497106693675879, 0.6223623642170768);

        // door_png
        const door_png = this.add.image(837, 265, "pizza", "door.png");
        door_png.scaleX = 1.02;
        door_png.scaleY = 1.02;

        // pizza_pan_png
        const pizza_pan_png = this.add.image(187, 515, "pizza", "pizza-pan.png");
        pizza_pan_png.scaleX = 1.02;
        pizza_pan_png.scaleY = 1.02;

        // oven_png
        const oven_png = this.add.image(110, 457, "pizza", "oven.png");
        oven_png.scaleX = 1.02;
        oven_png.scaleY = 1.02;

        // foreground_png
        const foreground_png = this.add.image(112, 874, "pizza", "foreground.png");
        foreground_png.scaleX = 1.02;
        foreground_png.scaleY = 1.02;

        // chair1_png
        const chair1_png = this.add.image(414, 609, "pizza", "chair1.png");
        chair1_png.scaleX = 1.02;
        chair1_png.scaleY = 1.02;

        // chair2_png
        const chair2_png = this.add.image(577, 609, "pizza", "chair2.png");
        chair2_png.scaleX = 1.02;
        chair2_png.scaleY = 1.02;

        // chair3_png
        const chair3_png = this.add.image(677, 719, "pizza", "chair3.png");
        chair3_png.scaleX = 1.02;
        chair3_png.scaleY = 1.02;

        // chair4_png
        const chair4_png = this.add.image(840, 719, "pizza", "chair4.png");

        // chair5_png
        const chair5_png = this.add.image(987, 687, "pizza", "chair5.png");
        chair5_png.scaleX = 1.02;
        chair5_png.scaleY = 1.02;

        // chair6_png
        const chair6_png = this.add.image(1159, 687, "pizza", "chair6.png");
        chair6_png.scaleX = 1.02;
        chair6_png.scaleY = 1.02;

        // table1_png
        const table1_png = this.add.image(494, 664, "pizza", "table1.png");
        table1_png.scaleX = 1.02;
        table1_png.scaleY = 1.02;

        // table2_png
        const table2_png = this.add.image(763, 775, "pizza", "table2.png");
        table2_png.scaleX = 1.02;
        table2_png.scaleY = 1.02;

        // table3_png
        const table3_png = this.add.image(1071, 735, "pizza", "table3.png");
        table3_png.scaleX = 1.02;
        table3_png.scaleY = 1.02;

        // candle_fire10001_png
        const candle_fire10001_png = this.add.sprite(497.5719885381547, 720.801146184529, "pizza", "candle-fire10001.png");
        candle_fire10001_png.scaleX = 0.5;
        candle_fire10001_png.scaleY = 0.5;
        candle_fire10001_png.setOrigin(0.3095984717539598, 6.846717608201288);

        // big_table_png
        const big_table_png = this.add.image(528, 433, "pizza", "big-table.png");
        big_table_png.scaleX = 1.02;
        big_table_png.scaleY = 1.02;

        // candle_fire2
        const candle_fire2 = this.add.sprite(760.4280114618452, 782.8207450199438, "pizza", "candle-fire10001.png");
        candle_fire2.scaleX = 0.5;
        candle_fire2.scaleY = 0.5;
        candle_fire2.setOrigin(0.6904015282460326, 4.625366445330838);

        // register0001_png
        const register0001_png = this.add.sprite(463, 458.6180623621998, "pizza", "register0001.png");
        register0001_png.scaleX = 1.02;
        register0001_png.scaleY = 1.02;
        register0001_png.setOrigin(0.5, 1.526408462818685);

        // candle_fire3
        const candle_fire3 = this.add.sprite(1069.4280114618452, 749.9608023291703, "pizza", "candle-fire10001.png");
        candle_fire3.scaleX = 0.5;
        candle_fire3.scaleY = 0.5;
        candle_fire3.setOrigin(0.6904015282460326, 4.9427023257409015);

        // book_hover0001_png
        const book_hover0001_png = this.add.sprite(587.5714581291339, 461.1420886425158, "pizza", "book-hover0001.png");
        book_hover0001_png.scaleX = 1.02;
        book_hover0001_png.scaleY = 1.02;
        book_hover0001_png.setOrigin(0.46759919553938006, 2.263818792824983);

        // steam
        const steam = this.add.sprite(43, 165, "pizza", "smoke0001.png");

        // fire
        const fire = this.add.sprite(110, 770, "pizza", "fire0001.png");
        fire.scaleX = 1.02;
        fire.scaleY = 1.02;

        // backdrop
        const backdrop = this.add.image(749, 487, "pizzauw", "backdrop");
        backdrop.scaleX = 21.98878391955197;
        backdrop.scaleY = 43.349570771910145;

        // pmain
        const pmain = this.add.image(764, 496, "pizzauw", "pmain");
        pmain.scaleX = 1.8227368840109925;
        pmain.scaleY = 1.8122661126190478;

        // door
        const door = this.add.image(842, 319, "pizzauw", "door");
        door.scaleX = 1.478404627790882;
        door.scaleY = 1.6157851011891888;

        // paddocks
        const paddocks = this.add.image(133, 211, "pizzauw", "paddocks");
        paddocks.scaleX = 1.6009818104365838;
        paddocks.scaleY = 1.7356805634010546;

        // d1
        const d1 = this.add.image(373, 252, "pizzauw", "d1");
        d1.scaleX = 2.355500813353176;
        d1.scaleY = 2.0583451870508047;

        // ropes
        const ropes = this.add.image(1234, 564, "pizzauw", "ropes");
        ropes.scaleX = 1.7926217082912745;
        ropes.scaleY = 2.031241006793441;

        // kitchen
        const kitchen = this.add.image(372, 83, "pizzauw", "kitchen");
        kitchen.scaleX = 2.240581153227635;
        kitchen.scaleY = 3.078304423922189;

        // pole
        const pole = this.add.image(568, 196, "pizzauw", "pole");
        pole.scaleX = 1.5971149616356306;
        pole.scaleY = 2.0553071066108166;

        // stick
        const stick = this.add.image(116, 483, "pizzauw", "stick");
        stick.scaleX = 1.9190118749746492;
        stick.scaleY = 1.4771927202468975;

        // chair
        const chair = this.add.image(352, 620, "pizzauw", "chair");
        chair.scaleX = 2.303830201481547;
        chair.scaleY = 2.027573331958285;

        // burner
        const burner = this.add.image(170, 590, "pizzauw", "burner");
        burner.scaleX = 1.8471598599601966;
        burner.scaleY = 1.5581707519376238;

        // counter
        const counter = this.add.image(530, 372, "pizzauw", "counter");
        counter.scaleX = 1.9607857627969505;
        counter.scaleY = 2.139943137468814;

        // piano
        const piano = this.add.image(1383, 411, "pizzauw", "piano");
        piano.scaleX = 1.865591326282137;
        piano.scaleY = 1.8302133359391617;

        // tright
        const tright = this.add.image(1436, 133, "pizzauw", "tright");
        tright.scaleX = 2.3008586179500483;
        tright.scaleY = 2.2433434825384237;

        // picture
        const picture = this.add.image(1209, 193, "pizzauw", "picture");
        picture.scaleX = 1.5693787274944104;
        picture.scaleY = 1.640340489214777;

        // fpole
        const fpole = this.add.image(594, 189, "pizzauw", "fpole");
        fpole.scaleX = 2.0117596267568625;
        fpole.scaleY = 1.9262108783426846;

        // fmenu
        const fmenu = this.add.image(1022, 147, "pizzauw", "fmenu");
        fmenu.scaleX = 1.996117500623934;
        fmenu.scaleY = 1.671158508063399;

        // s1
        const s1 = this.add.image(133, 130, "pizzauw", "s1");
        s1.scaleX = 2.986869430428275;
        s1.scaleY = 2.696810049781589;

        // chair2
        const chair2 = this.add.image(622, 622, "pizzauw", "chair2");
        chair2.scaleX = 2.0541713218881643;
        chair2.scaleY = 2.14224625186069;

        // chair_2
        const chair_2 = this.add.image(933, 646, "pizzauw", "chair");
        chair_2.scaleX = 2.0862954087316266;
        chair_2.scaleY = 1.8249269415787195;

        // chair2_1
        const chair2_1 = this.add.image(878, 730, "pizzauw", "chair2");
        chair2_1.scaleX = 2.262843721476803;
        chair2_1.scaleY = 2.11391239515755;

        // table1
        const table1 = this.add.image(507, 653, "pizzauw", "table1");
        table1.scaleX = 2.430568796349566;
        table1.scaleY = 2.0934499676275857;

        // chair_1
        const chair_1 = this.add.image(617, 709, "pizzauw", "chair");
        chair_1.scaleX = 2.1671039372153653;
        chair_1.scaleY = 2.131593570155252;

        // table2
        const table2 = this.add.image(768, 752, "pizzauw", "table2");
        table2.scaleX = 2.5689493890348336;
        table2.scaleY = 2.3679202839282407;

        // chair3
        const chair3 = this.add.image(1213, 664, "pizzauw", "chair3");
        chair3.scaleX = 2.4312664956501386;
        chair3.scaleY = 2.1884051933742255;

        // table2_1
        const table2_1 = this.add.image(1071, 709, "pizzauw", "table2");
        table2_1.scaleX = 2.5703793307654097;
        table2_1.scaleY = 2.2259766514258628;

        // lists
        const sort = [piano_png, chair1_png, chair2_png, chair3_png, chair4_png, chair5_png, chair6_png, candle_fire10001_png, table1_png, candle_fire2, table2_png, candle_fire3, table3_png, big_table_png, register0001_png, book_hover0001_png];

        // bead_door_hover0001_png (components)
        const bead_door_hover0001_pngButton = new Button(bead_door_hover0001_png);
        bead_door_hover0001_pngButton.spriteName = "bead-door.png";
        bead_door_hover0001_pngButton.activeFrame = false;
        bead_door_hover0001_pngButton.pixelPerfect = true;
        const bead_door_hover0001_pngShowHint = new ShowHint(bead_door_hover0001_png);
        bead_door_hover0001_pngShowHint.text = "Pizzatron 3000";
        const bead_door_hover0001_pngMoveTo = new MoveTo(bead_door_hover0001_png);
        bead_door_hover0001_pngMoveTo.x = 384;
        bead_door_hover0001_pngMoveTo.y = 405;

        // door_png (components)
        const door_pngButton = new Button(door_png);
        door_pngButton.spriteName = "door.png";
        door_pngButton.activeFrame = false;
        door_pngButton.pixelPerfect = true;
        const door_pngMoveTo = new MoveTo(door_png);
        door_pngMoveTo.x = 837;
        door_pngMoveTo.y = 260;

        // register0001_png (components)
        const register0001_pngSimpleButton = new SimpleButton(register0001_png);
        register0001_pngSimpleButton.hoverCallback = () => this.onRegOver();
        register0001_pngSimpleButton.hoverOutCallback;

        // book_hover0001_png (components)
        const book_hover0001_pngSimpleButton = new SimpleButton(book_hover0001_png);
        book_hover0001_pngSimpleButton.hoverCallback = () => this.onBookOver();

        this.candle_fire10001_png = candle_fire10001_png;
        this.candle_fire2 = candle_fire2;
        this.register0001_png = register0001_png;
        this.candle_fire3 = candle_fire3;
        this.book_hover0001_png = book_hover0001_png;
        this.steam = steam;
        this.fire = fire;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.fire.play("pizza-fire")
        this.steam.play("pizza-steam")
        this.candle_fire10001_png.play("candles")
        this.candle_fire2.play("candles")
        this.candle_fire3.play("candles")
    }

    onRegOver() {
        let animation = (this.boardToggle) ? 'cashregover' : 'cashregout'

        this.register0001_png.play(animation)
        this.boardToggle = !this.boardToggle
    }

    onBookOver() {
        this.book_hover0001_png.play('bookover')
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
