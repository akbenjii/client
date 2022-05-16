import RoomScene from '@scenes/rooms/RoomScene'

import { Interactive } from '@components/components'


/* START OF COMPILED CODE */

export default class Card extends RoomScene {

    constructor() {
        super("Card");

        /* START-USER-CTR-CODE */
        this.music = "1"
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(0, 0, "load", "bg");
        bg.setOrigin(0, 0);

        // lists
        const sort = [];

        // bg (components)
        new Interactive(bg);

        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */
	
	preload(){
	}

    create() {
        super.create()
		
		setTimeout(() => { this.onUpdateGame }, 5000)
    }
	
	onUpdateGame() {
		
		var player1name = "Vesper"
		var player1color = 1
		var player1rank = 0
		var player2name = "VesperDev"
		var player2color = 2
		var player2rank = 1
		
		var ruffleplayer = document.getElementsByTagName("ruffle-player")[0]
		
		ruffleplayer.stateInit('onUpdateGame', `0|${player1name}|${player1color}${player1rank}%1|${player2name}|${player2color}${player2rank}` )
	}


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
