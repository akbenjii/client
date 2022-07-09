import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, Zone } from '@components/components'
import { setInterval, setTimeout } from 'core-js';


/* START OF COMPILED CODE */

export default class Cavemine extends RoomScene {

    constructor() {
        super("Cavemine");

        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
         'minehat': () => this.interface.prompt.showItem(429),
         'lake': () => this.unimplementedPrompt(),
         'mine': () => this.triggerRoom(808, 1200, 400),
         'minearea' : () => this.triggerMining()
        }

        // this.constantTriggers = {
        //     'minearea' : () => this.turnOnMining(),
        // }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cavemine-pack", "assets/media/rooms/old/cavemine/cavemine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(754, 494, "cavemine", "bg");

        // waterfall0001
        this.add.image(1220, 325, "cavemine", "waterfall0001");

        // snowball_sign
        this.add.image(782, 201, "cavemine", "snowball_sign");

        // slime
        this.add.image(1305, 325, "cavemine", "slime");

        // wirebehindmachine
        this.add.image(1000, 197, "cavemine", "wirebehindmachine");

        // snowball_tube0001
        this.add.image(922, 208, "cavemine", "snowball_tube0001");

        // microwave
        this.add.image(1075, 279, "cavemine", "microwave");

        // rocks
        this.add.image(724, 439, "cavemine", "rocks");

        // platform
        this.add.image(435, 211, "cavemine", "platform");

        // bottom_stair
        this.add.image(586, 382, "cavemine", "bottom_stair");

        // cavedoor
        this.add.image(105, 266, "cavemine", "cavedoor");

        // mine_notice
        this.add.image(361, 552, "cavemine", "mine_notice");

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
        this.add.image(261, 124, "cavemine", "coffee0001");

        // lists
        const sort = [];

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        console.log(this.network)
    }

    onZoneClick() {
        this.world.client.penguin.move(1266, 572)
    }

    getPenguinFrame() {
        return this.world.client.penguin.frame
    }

    addMiningCoins(id, coins) {
        this.network.send('add_coins', {id: id, coins: coins})
    }

    triggerMining() {
        let penguin = this.world.client.penguin;
        console.log(penguin)
        const allEqual = arr => arr.every( v => v === arr[0] )
        if ([429].includes(penguin.head) && allEqual([penguin.body, penguin.feet, penguin.hand, penguin.neck, penguin.face]))  {
            var keyObj = this.input.keyboard.addKey('D'); 
            let coinValues = ['5', '10', '25', '50', '100'];
            keyObj.once('down', function(event) {setTimeout(() => {
                    let sampled_coins = coinValues[Math.floor(Math.random()*coinValues.length)]
                    console.log(sampled_coins)
                    this.addMiningCoins(penguin.id, sampled_coins)
            }, 3000);});
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
