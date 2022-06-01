import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Lodge extends RoomScene {

    constructor() {
        super("Lodge");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bg;
        /** @type {Phaser.GameObjects.Sprite} */
        this.maindoor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fishingdoor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bottomrailing;
        /** @type {Phaser.GameObjects.Sprite} */
        this.railing2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.railing3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bluechair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bluechairarm;
        /** @type {Phaser.GameObjects.Sprite} */
        this.railing4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fireplace_lower;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fireplace_upper;
        /** @type {Phaser.GameObjects.Sprite} */
        this.greenchair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.redchair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.stool;
        /** @type {Phaser.GameObjects.Sprite} */
        this.findfour_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.stool_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.findfour_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.findfour_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.desk;
        /** @type {Phaser.GameObjects.Sprite} */
        this.deskchair;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bait;
        /** @type {Phaser.GameObjects.Sprite} */
        this.safe;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fg;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.seats106;
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.seats105;
        /** @type {Phaser.GameObjects.Ellipse[]} */
        this.seats104;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'attic': () => this.unimplementedPrompt(),
            'village': () => this.triggerRoom(200, 940, 540),
            'fishing': () => this.triggerGame("IceFishing", 904)
        }
        this.music = '589'
		this.waddles = {}

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lodge-pack-new", "assets/media/rooms/new/lodge/lodge-pack-new.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(760, 285, "lodge-new", "bg");

        // maindoor
        const maindoor = this.add.sprite(115, 410, "lodge-new", "maindoor");

        // fishingdoor
        const fishingdoor = this.add.sprite(1012, 176, "lodge-new", "fishingdoor");

        // bottomrailing
        const bottomrailing = this.add.sprite(553, 758, "lodge-new", "bottomrailing");

        // railing2
        const railing2 = this.add.sprite(608.8665100325047, 474.78866293912046, "lodge-new", "railing2");
        railing2.setOrigin(0.39408475832665096, 0.21025083989237348);

        // railing3
        const railing3 = this.add.sprite(883.6084060118849, 424.9719799603836, "lodge-new", "railing3");
        railing3.setOrigin(0.524448870259249, 0.19497123771793884);

        // bluechair
        const bluechair = this.add.sprite(682.7797146531126, 477.3705865327877, "lodge-new", "bluechair");
        bluechair.setOrigin(0.4003419977308072, 0.3886443011867641);

        // bluechairarm
        const bluechairarm = this.add.sprite(672, 587, "lodge-new", "bluechairarm");

        // railing4
        const railing4 = this.add.sprite(1397, 438, "lodge-new", "railing4");

        // fireplace
        const fireplace = this.add.container(1434, 392);

        // fireplace_lower
        const fireplace_lower = this.add.sprite(-0.6740658385836014, 198.66703726374038, "lodge-new", "fireplace_lower");
        fireplace.add(fireplace_lower);

        // fire
        const fire = this.add.sprite(-1.6740658385836014, 165.66703726374038, "lodge-new", "fireanim0001");
        fireplace.add(fire);

        // fireplace_upper
        const fireplace_upper = this.add.sprite(40.3259341614164, -75.33296273625962, "lodge-new", "fireplace_upper");
        fireplace.add(fireplace_upper);

        // greenchair
        const greenchair = this.add.sprite(754.3481316771671, 773.7114322952416, "lodge-new", "greenchair");
        greenchair.setOrigin(0.5221730574646827, 0.16518683228329023);

        // redchair
        const redchair = this.add.sprite(1356.3037366456658, 776.3854981338252, "lodge-new", "redchair");
        redchair.setOrigin(0.45076276945342514, 0.1669397808053675);

        // stool
        const stool = this.add.sprite(1076.5653971553033, 498.2739923371362, "lodge-new", "stool");
        stool.setOrigin(0.4957805549058577, 0.15515209062104543);

        // findfour_1
        const findfour_1 = this.add.sprite(1008, 537, "lodge-new", "findfour");
        findfour_1.scaleX = -1;

        // stool_1
        const stool_1 = this.add.sprite(928.4346028446968, 574.058758200775, "lodge-new", "stool");
        stool_1.setOrigin(0.5042194450941434, 0.09846476305190159);

        // findfour_2
        const findfour_2 = this.add.sprite(886, 671, "lodge-new", "findfour");
        findfour_2.scaleX = -1;

        // findfour_3
        const findfour_3 = this.add.sprite(1114, 663, "lodge-new", "findfour");

        // desk
        const desk = this.add.sprite(153, 689, "lodge-new", "desk");

        // deskchair
        const deskchair = this.add.sprite(118, 623, "lodge-new", "deskchair");

        // bait
        const bait = this.add.sprite(877, 297, "lodge-new", "bait");

        // safe
        const safe = this.add.sprite(-34, 684, "lodge-new", "safe");

        // rectangle
        const rectangle = this.add.rectangle(102, 47, 30, 250);
        rectangle.angle = 65;
        rectangle.isFilled = true;
        rectangle.fillColor = 6507055;

        // fg
        const fg = this.add.sprite(821, 1015.5, "lodge-new", "fg");
        fg.setOrigin(0.5, 1);

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

        // lists
        const sort = [bottomrailing, fg, safe, bait, deskchair, desk, findfour_3, findfour_2, stool_1, findfour_1, stool, redchair, greenchair, railing4, bluechairarm, bluechair, railing3, railing2, fireplace];
        const seats106 = [ellipse_4, ellipse_5];
        const seats105 = [ellipse_3, ellipse_2];
        const seats104 = [ellipse_1, ellipse];

        // maindoor (components)
        const maindoorButton = new Button(maindoor);
        maindoorButton.spriteName = "maindoor";
        maindoorButton.activeFrame = false;
        const maindoorMoveTo = new MoveTo(maindoor);
        maindoorMoveTo.x = 140;
        maindoorMoveTo.y = 490;

        // fishingdoor (components)
        const fishingdoorButton = new Button(fishingdoor);
        fishingdoorButton.spriteName = "fishingdoor";
        fishingdoorButton.activeFrame = false;
        const fishingdoorMoveTo = new MoveTo(fishingdoor);
        fishingdoorMoveTo.x = 1000;
        fishingdoorMoveTo.y = 310;
        const fishingdoorShowHint = new ShowHint(fishingdoor);
        fishingdoorShowHint.text = "Ice Fishing";

        // findfour_1 (components)
        const findfour_1Button = new Button(findfour_1);
        findfour_1Button.spriteName = "findfour";
        findfour_1Button.callback = () => this.triggerWaddle(104);
        findfour_1Button.activeFrame = false;
        findfour_1Button.pixelPerfect = true;

        // findfour_2 (components)
        const findfour_2Button = new Button(findfour_2);
        findfour_2Button.spriteName = "findfour";
        findfour_2Button.callback = () => this.triggerWaddle(105);
        findfour_2Button.activeFrame = false;
        findfour_2Button.pixelPerfect = true;

        // findfour_3 (components)
        const findfour_3Button = new Button(findfour_3);
        findfour_3Button.spriteName = "findfour";
        findfour_3Button.callback = () => this.triggerWaddle(106);
        findfour_3Button.activeFrame = false;
        findfour_3Button.pixelPerfect = true;

        this.bg = bg;
        this.maindoor = maindoor;
        this.fishingdoor = fishingdoor;
        this.bottomrailing = bottomrailing;
        this.railing2 = railing2;
        this.railing3 = railing3;
        this.bluechair = bluechair;
        this.bluechairarm = bluechairarm;
        this.railing4 = railing4;
        this.fireplace_lower = fireplace_lower;
        this.fire = fire;
        this.fireplace_upper = fireplace_upper;
        this.greenchair = greenchair;
        this.redchair = redchair;
        this.stool = stool;
        this.findfour_1 = findfour_1;
        this.stool_1 = stool_1;
        this.findfour_2 = findfour_2;
        this.findfour_3 = findfour_3;
        this.desk = desk;
        this.deskchair = deskchair;
        this.bait = bait;
        this.safe = safe;
        this.fg = fg;
        this.sort = sort;
        this.seats106 = seats106;
        this.seats105 = seats105;
        this.seats104 = seats104;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.fire.play("fireanim")
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
