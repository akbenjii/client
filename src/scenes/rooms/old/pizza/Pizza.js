import RoomScene from '../RoomScene'

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
        this.smoke0001_png;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire0001_png;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 870, 330),
            'pizzatron': () => this.triggerGame("pizzatron", 910)
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

        // smoke0001_png
        const smoke0001_png = this.add.sprite(43, 165, "pizza", "smoke0001.png");

        // fire0001_png
        const fire0001_png = this.add.sprite(110, 770, "pizza", "fire0001.png");
        fire0001_png.scaleX = 1.02;
        fire0001_png.scaleY = 1.02;

        // music_Note_Pin_PNG
        const music_Note_Pin_PNG = this.add.image(1157, 326, "Music_Note_Pin.PNG");
        music_Note_Pin_PNG.scaleX = 0.02400738653053537;
        music_Note_Pin_PNG.scaleY = 0.02400738653053537;

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

        // music_Note_Pin_PNG (components)
        const music_Note_Pin_PNGMoveTo = new MoveTo(music_Note_Pin_PNG);
        music_Note_Pin_PNGMoveTo.y = 380;
        const music_Note_Pin_PNGSimpleButton = new SimpleButton(music_Note_Pin_PNG);
        music_Note_Pin_PNGSimpleButton.callback = () => setTimeout(() => {this.interface.prompt.showItem(551); }, 1000);;

        this.candle_fire10001_png = candle_fire10001_png;
        this.candle_fire2 = candle_fire2;
        this.register0001_png = register0001_png;
        this.candle_fire3 = candle_fire3;
        this.book_hover0001_png = book_hover0001_png;
        this.smoke0001_png = smoke0001_png;
        this.fire0001_png = fire0001_png;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

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
