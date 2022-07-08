import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Cavemine extends RoomScene {

    constructor() {
        super("Cavemine");

        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'boiler': () => this.triggerRoom(804, 590, 560),
            'plaza': () => this.triggerRoom(300, 582, 588),
            'mine': () => this.triggerRoom(808, 256, 512)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cave-pack", "assets/media/rooms/old/cave/cave-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(754, 494, "cavemine", "bg");

        // snowball_sign
        this.add.image(782, 201, "cavemine", "snowball_sign");

        // slime
        this.add.image(1305, 325, "cavemine", "slime");

        // snowball_tube0001
        this.add.image(922, 208, "cavemine", "snowball_tube0001");

        // rocks
        this.add.image(818, 397, "cavemine", "rocks");

        // microwave
        this.add.image(1067, 275, "cavemine", "microwave");

        // cavedoor
        this.add.image(105, 266, "cavemine", "cavedoor");

        // mine_notice0001
        this.add.image(361, 552, "cavemine", "mine_notice0001");

        // bottom_stair
        this.add.image(541, 352, "cavemine", "bottom_stair");

        // platform
        this.add.image(435, 211, "cavemine", "platform");

        // computer_front_right
        this.add.image(1330, 812, "cavemine", "computer_front_right");

        // shovel
        this.add.image(1010, 552, "cavemine", "shovel");

        // birdhousething
        this.add.image(198, 37, "cavemine", "birdhousething");

        // chairs
        this.add.image(472, 100, "cavemine", "chairs");

        // bulbs0003
        this.add.image(784, 41, "cavemine", "bulbs0003");

        // coffee_table
        this.add.image(275, 150, "cavemine", "coffee_table");

        // coffee_mugs_behind_table
        this.add.image(238, 141, "cavemine", "coffee_mugs_behind_table");

        // minehat
        this.add.image(386, 325, "cavemine", "minehat");

        // coffee0001
        this.add.image(261, 123, "cavemine", "coffee0001");

        // lists
        const sort = [];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onZoneClick() {
        this.world.client.penguin.move(1266, 572)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
