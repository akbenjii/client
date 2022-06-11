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

        // backdrop_kitchen_sign_
        const backdrop_kitchen_sign_ = this.add.image(760, 576, "underwater pizza bro ", "backdrop kitchen sign ");
        backdrop_kitchen_sign_.scaleX = 22.71711898666748;
        backdrop_kitchen_sign_.scaleY = 35.556484727609686;

        // fire
        const fire = this.add.sprite(110, 770, "pizza", "fire0001.png");
        fire.scaleX = 1.02;
        fire.scaleY = 1.02;

        // pizza_main_body_
        const pizza_main_body_ = this.add.image(748, 494, "underwater pizza bro ", "pizza main body ");
        pizza_main_body_.scaleX = 1.796505474979063;
        pizza_main_body_.scaleY = 1.8886548009513673;

        // thing_next_to_pizza
        const thing_next_to_pizza = this.add.image(91, 555, "underwater pizza bro ", "thing next to pizza");
        thing_next_to_pizza.scaleX = 1.8657198006207159;
        thing_next_to_pizza.scaleY = 1.5266911241299899;

        // paddocks_on_left_wall_
        const paddocks_on_left_wall_ = this.add.image(116, 204, "underwater pizza bro ", "paddocks on left wall ");
        paddocks_on_left_wall_.scaleX = 1.558113491117481;
        paddocks_on_left_wall_.scaleY = 1.6443767126506375;

        // umm_a_fishing_pole_
        const umm_a_fishing_pole_ = this.add.image(562, 160, "underwater pizza bro ", "umm a fishing pole ");
        umm_a_fishing_pole_.scaleX = 1.4155277479793775;
        umm_a_fishing_pole_.scaleY = 1.4404021568711496;

        // pizza_left_drapes_0002
        const pizza_left_drapes_0002 = this.add.image(386, 244, "underwater pizza bro ", "pizza left drapes 0002");
        pizza_left_drapes_0002.scaleX = 4.334616065094522;
        pizza_left_drapes_0002.scaleY = 2.2239337633555043;

        // pizza_door_0001
        const pizza_door_0001 = this.add.image(801, 260, "underwater pizza bro ", "pizza door 0001");
        pizza_door_0001.scaleX = 1.8035093724592606;
        pizza_door_0001.scaleY = 1.8349590462294025;

        // piano_top_right_
        const piano_top_right_ = this.add.image(1393, 412, "underwater pizza bro ", "piano top right ");
        piano_top_right_.scaleX = 1.7791049266942758;
        piano_top_right_.scaleY = 1.7167877688491053;

        // pirate_picture_on_right_
        const pirate_picture_on_right_ = this.add.image(1242, 172, "underwater pizza bro ", "pirate picture on right ");
        pirate_picture_on_right_.scaleX = 1.6987259166828446;
        pirate_picture_on_right_.scaleY = 1.8043432597598223;

        // bottom_right_table_right_
        const bottom_right_table_right_ = this.add.image(600, 599, "underwater pizza bro ", "bottom right table right ");
        bottom_right_table_right_.scaleX = 2.2362550658530855;
        bottom_right_table_right_.scaleY = 1.90273946420956;

        // bottom_left_pizza_
        const bottom_left_pizza_ = this.add.image(137, 635, "underwater pizza bro ", "bottom left pizza ");
        bottom_left_pizza_.scaleX = 1.3964534001333302;
        bottom_left_pizza_.scaleY = 1.2718565877244006;

        // bottom_right_right_chair_
        const bottom_right_right_chair_ = this.add.image(344, 603, "underwater pizza bro ", "bottom right right chair ");
        bottom_right_right_chair_.scaleX = 2.4756951756522976;
        bottom_right_right_chair_.scaleY = 1.6206839303569662;

        // bottom_right_table_bro_
        const bottom_right_table_bro_ = this.add.image(469, 644, "underwater pizza bro ", "bottom right table bro ");
        bottom_right_table_bro_.scaleX = 2.5316217231689224;
        bottom_right_table_bro_.scaleY = 2.3965010275120475;

        // bottom_right_right_chair__1
        const bottom_right_right_chair__1 = this.add.image(634, 749, "underwater pizza bro ", "bottom right right chair ");
        bottom_right_right_chair__1.scaleX = 2.3474149174237997;
        bottom_right_right_chair__1.scaleY = 1.9112831864892352;

        // bottom_right_table_right__2
        const bottom_right_table_right__2 = this.add.image(1219, 705, "underwater pizza bro ", "bottom right table right ");
        bottom_right_table_right__2.scaleX = 2.6375716712981356;
        bottom_right_table_right__2.scaleY = 2.0485193822286125;

        // bottom_right_right_chair__2
        const bottom_right_right_chair__2 = this.add.image(932, 666, "underwater pizza bro ", "bottom right right chair ");
        bottom_right_right_chair__2.scaleX = 2.5699248347577113;
        bottom_right_right_chair__2.scaleY = 1.7237661607726262;

        // bottom_right_table_right__1
        const bottom_right_table_right__1 = this.add.image(890, 759, "underwater pizza bro ", "bottom right table right ");
        bottom_right_table_right__1.scaleX = 2.55083887787556;
        bottom_right_table_right__1.scaleY = 1.7806758467169552;

        // bottom_right_table_bro__1
        const bottom_right_table_bro__1 = this.add.image(763, 789, "underwater pizza bro ", "bottom right table bro ");
        bottom_right_table_bro__1.scaleX = 2.696088853723264;
        bottom_right_table_bro__1.scaleY = 2.5411294330351883;

        // bottom_right_table_bro__2
        const bottom_right_table_bro__2 = this.add.image(1076, 718, "underwater pizza bro ", "bottom right table bro ");
        bottom_right_table_bro__2.scaleX = 2.6772306252007603;
        bottom_right_table_bro__2.scaleY = 2.3328409235349;

        // main_counter_pizza_
        const main_counter_pizza_ = this.add.image(561, 382, "underwater pizza bro ", "main counter pizza ");
        main_counter_pizza_.scaleX = 1.6114699369089558;
        main_counter_pizza_.scaleY = 2.025492911069078;

        // top_right_light_
        const top_right_light_ = this.add.image(1374, 96, "underwater pizza bro ", "top right light ");
        top_right_light_.scaleX = 1.885970318623694;
        top_right_light_.scaleY = 1.5847190709835934;

        // ropes_bottom_right_
        const ropes_bottom_right_ = this.add.image(1219, 566, "underwater pizza bro ", "ropes bottom right ");
        ropes_bottom_right_.scaleX = 1.8275988648205295;
        ropes_bottom_right_.scaleY = 2.323781856138505;

        // fish_menu_on_wall_
        const fish_menu_on_wall_ = this.add.image(1024, 143, "underwater pizza bro ", "fish menu on wall ");
        fish_menu_on_wall_.scaleX = 1.5304131741969895;
        fish_menu_on_wall_.scaleY = 1.5664719043254882;

        // anotha_one_fishing_pole_
        const anotha_one_fishing_pole_ = this.add.image(601, 200, "underwater pizza bro ", "anotha one fishing pole ");
        anotha_one_fishing_pole_.scaleX = 1.4414993257707496;
        anotha_one_fishing_pole_.scaleY = 1.6614041541685667;

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
