import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class Cove extends RoomScene {

    constructor() {
        super("Cove");

        /** @type {Phaser.GameObjects.Sprite} */
        this.umbrella_cove;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers =  {
            'forest': () => this.triggerRoom(809, 1190, 750)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cove-pack", "assets/media/rooms/old/cove/cove-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-2, -14, "cove", "bg");
        bg.setOrigin(0, 0);

        // cliff_1
        const cliff_1 = this.add.image(-5, 5, "cove", "cliff_1");
        cliff_1.setOrigin(0, 0);

        // hut
        const hut = this.add.image(1326, 423, "cove", "hut");
        hut.setOrigin(0.5537459283387622, 0.43842364532019706);

        // hut_wall
        const hut_wall = this.add.image(1440, 545, "cove", "hut_wall");
        hut_wall.setOrigin(0.5210526315789473, 0.8577777777777778);

        // boards
        const boards = this.add.image(1101, 485, "cove", "boards");
        boards.setOrigin(0.502262443438914, 0.8586956521739131);

        // rock_1
        const rock_1 = this.add.image(461, 884, "cove", "rock_1");
        rock_1.setOrigin(0.456, 0.6329113924050633);

        // fg
        const fg = this.add.image(-5, 985, "cove", "fg");
        fg.setOrigin(0, 1);

        // log_1
        const log_1 = this.add.image(137, 294, "cove", "log_1");
        log_1.setOrigin(0, 0);

        // chair_arm
        const chair_arm = this.add.image(633, 283, "cove", "chair_arm");
        chair_arm.setOrigin(0.40298507462686567, 0.7115384615384616);

        // binoculars
        const binoculars = this.add.image(651, 300, "cove", "binoculars0001");
        binoculars.setOrigin(1.0597014925373134, 1.1666666666666667);

        // silver_board
        const silver_board = this.add.image(1463, 557, "cove", "silver_board");
        silver_board.setOrigin(0.5167785234899329, 0.8613445378151261);

        // rock_4
        const rock_4 = this.add.image(1497, 583, "cove", "rock_4");
        rock_4.setOrigin(0.5094339622641509, 0.5423728813559322);

        // rock_2
        const rock_2 = this.add.image(1292, 697, "cove", "rock_2");
        rock_2.setOrigin(0.4935064935064935, 0.6458333333333334);

        // rock_3
        const rock_3 = this.add.image(1447, 690, "cove", "rock_3");
        rock_3.setOrigin(0.5588235294117647, 0.5949367088607594);

        // hut_stool
        const hut_stool = this.add.image(1310, 493, "cove", "hut_stool");
        hut_stool.setOrigin(0.5, 0.5185185185185185);

        // symbol_3
        this.add.image(758, 484, "underwater_cove", "Symbol 3");

        // umbrella_cove
        const umbrella_cove = this.add.sprite(896, 276, "underwater_cove", "umbrella cove0001");

        // water_layer
        const water_layer = this.add.image(784.7673008265967, 973.0952507751316, "underwater_cove", "water layer");
        water_layer.setOrigin(0.47702150991939946, 0.6753167441354395);

        // lists
        const sort = [hut_wall, boards, rock_1, chair_arm, binoculars, silver_board, rock_3, rock_2, rock_4, fg, water_layer];

        // hut (components)
        const hutButton = new Button(hut);
        hutButton.spriteName = "hut";
        hutButton.activeFrame = false;
        const hutMoveTo = new MoveTo(hut);
        hutMoveTo.x = 1250;
        hutMoveTo.y = 500;

        this.umbrella_cove = umbrella_cove;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {

        super.create()

        this.umbrella_cove.play("umbrella-cove")
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
