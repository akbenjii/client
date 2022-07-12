import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone, ShowHint } from '@components/components'

/* START OF COMPILED CODE */

export default class Pizza extends RoomScene {

    constructor() {
        super("Pizza");

        /** @type {Phaser.GameObjects.Sprite} */
        this.steam;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire;
        /** @type {Phaser.GameObjects.Image} */
        this.outsidenight;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 870, 330),
            'pizzatron': () => this.triggerGame("Pizzatron", 910)
        }
        this.roomAnims = true
        this.music = 'campfire'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("pizza-pack", "assets/media/rooms/old/pizza/pizza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        const bg_png = this.add.image(760, 483, "camp-pizza", "messbg");
        bg_png.scaleX = 1.02;
        bg_png.scaleY = 1.02;

        // bead_door_hover0001_png
        const bead_door_hover0001_png = this.add.image(385, 241, "pizza", "bead-door.png");
        bead_door_hover0001_png.scaleX = 1.02;
        bead_door_hover0001_png.scaleY = 1.02;

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

        // steam
        const steam = this.add.sprite(43, 165, "pizza", "smoke0001.png");

        // fire
        const fire = this.add.sprite(110, 770, "pizza", "fire0001.png");
        fire.scaleX = 1.02;
        fire.scaleY = 1.02;

        // outside
        this.add.image(844, 265, "camp-pizza", "outside");

        // outsidenight
        const outsidenight = this.add.image(844, 265, "camp-pizza", "outsidenight");
        outsidenight.visible = false;

        // doorholder
        this.add.image(834, 281, "camp-pizza", "doorholder");

        // messdoor
        const messdoor = this.add.image(830.7639579732339, 426.5719554874926, "camp-pizza", "messdoor");
        messdoor.setOrigin(0.47703490339137683, 0.904463363948344);

        // windowright
        this.add.image(1064, 215, "camp-pizza", "windowright");

        // leftwindow
        this.add.image(592, 197, "camp-pizza", "leftwindow");

        // cleanplates
        this.add.image(502, 377, "camp-pizza", "cleanplates");

        // righttable
        this.add.image(1305, 524, "camp-pizza", "righttable");

        // midrightbench
        this.add.image(1102, 653, "camp-pizza", "midrightbench");

        // midtable
        this.add.image(1004, 659, "camp-pizza", "midtable");

        // leftleftbench
        this.add.image(444, 716, "camp-pizza", "leftleftbench");

        // leftrightbench
        this.add.image(691, 747, "camp-pizza", "leftrightbench");

        // lefttable
        this.add.image(564, 699, "camp-pizza", "lefttable");

        // midleftbench
        this.add.image(887, 694, "camp-pizza", "midleftbench");

        // rightbench
        this.add.image(1411, 520, "camp-pizza", "rightbench");

        // tablebottoms
        this.add.image(924, 655, "camp-pizza", "tablebottoms");

        // messyplates
        this.add.image(610, 353, "camp-pizza", "messyplates");

        // mess
        this.add.image(795, 478, "camp-pizza", "mess");

        // signwash
        this.add.image(956, 287, "camp-pizza", "signwash");

        // signholder
        this.add.image(1497, 211, "camp-pizza", "signholder");

        // leftbench
        this.add.image(1206, 582, "camp-pizza", "leftbench");

        // lists
        const sort = [];

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

        // messdoor (components)
        const messdoorButton = new Button(messdoor);
        messdoorButton.spriteName = "messdoor";
        new MoveTo(messdoor);

        this.steam = steam;
        this.fire = fire;
        this.outsidenight = outsidenight;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.fire.play("pizza-fire")
        this.steam.play("pizza-steam")
		var now = new Date();
        var timeInHours = now.getUTCHours();
        if (timeInHours > 1 && timeInHours < 13 ) {
            this.outsidenight.visible=true
        }
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