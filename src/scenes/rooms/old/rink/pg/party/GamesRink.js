import { Button, Interactive, SimpleButton } from '@components/components'

import RoomScene from '@scenes/rooms/RoomScene'


/* START OF COMPILED CODE */

export default class GamesRink extends RoomScene {

    constructor() {
        super("GamesRink");

        /** @type {Phaser.GameObjects.Ellipse} */
        this.hockey_stick;
        /** @type {Array<any>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }
        this.music='240'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("gamesrink-pack", "assets/media/rooms/old/rink/pg/gamesrink-pack.json");
        this.load.pack("sport-pack", "assets/media/rooms/old/sport/sport-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(772, 113, "pg-partyroom", "sky");

        // bg_trees
        this.add.image(764, 114, "pg-partyroom", "bg_trees");

        // fence_flags
        this.add.image(766, 108, "pg-partyroom", "fence_flags");

        // bg_1
        this.add.image(764, 572, "pg-partyroom", "bg");

        // rock_bottom
        this.add.image(1058, 806, "pg-partyroom", "rock_bottom");

        // fg
        const fg = this.add.image(763, 715, "pg-partyroom", "fg");
        fg.scaleX = 1.0180669338742292;
        fg.scaleY = 1.0180669338742292;

        // right_trees
        this.add.image(1330, 191, "pg-partyroom", "right_trees");

        // left_trees
        this.add.image(230, 236, "pg-partyroom", "left_trees");

        // red_sign
        this.add.image(142, 322, "pg-partyroom", "red_sign");

        // blue_sign
        this.add.image(1419, 320, "pg-partyroom", "blue_sign");

        // outer_trees
        const outer_trees = this.add.image(763, 420, "pg-partyroom", "outer_trees");
        outer_trees.scaleX = 1.0151951293913304;
        outer_trees.scaleY = 1.0151951293913304;

        // rock_top
        this.add.image(478, 223, "pg-partyroom", "rock_top");

        // left_net_back
        this.add.image(318, 418, "pg-partyroom", "left_net_back");

        // left_net_front
        this.add.image(276, 460, "pg-partyroom", "left_net_front");

        // left_net_back_1
        const left_net_back_1 = this.add.image(1248, 418, "pg-partyroom", "left_net_back");
        left_net_back_1.flipX = true;

        // left_net_front_1
        const left_net_front_1 = this.add.image(1291, 460, "pg-partyroom", "left_net_front");
        left_net_front_1.flipX = true;

        // stick_1
        const stick_1 = this.add.image(515, 176, "stick");
        stick_1.scaleX = 0.4429601120842577;
        stick_1.scaleY = 0.4429601120842577;
        stick_1.angle = -38;
        stick_1.flipX = true;

        // stick_2
        const stick_2 = this.add.image(552, 176, "stick");
        stick_2.scaleX = 0.4429601120842577;
        stick_2.scaleY = 0.4429601120842577;
        stick_2.angle = 25;

        // stick
        const stick = this.add.image(541, 172, "stick");
        stick.scaleX = 0.4429601120842577;
        stick.scaleY = 0.4429601120842577;
        stick.angle = 50;

        // hockey_stick
        const hockey_stick = this.add.ellipse(542, 237, 128, 128);
        hockey_stick.scaleX = 0.9533734349476273;
        hockey_stick.scaleY = 0.30372556000761564;
        hockey_stick.isFilled = true;
        hockey_stick.fillAlpha = 0;

        // book_sports
        const book_sports = this.add.image(1414, 1111.244075129439, "sport", "book-sports");
        book_sports.setOrigin(0.5, 2.552033959411991);

        // lists
        const sort = [];

        // book_sports (components)
        const book_sportsButton = new Button(book_sports);
        book_sportsButton.spriteName = "book-sports";
        book_sportsButton.callback = () => this.interface.loadExternal('SportsCatalog');
        book_sportsButton.activeFrame = false;

        this.hockey_stick = hockey_stick;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create(){
        super.create()

        this.roomZones = {
            'redfp': { 
                key: this.hockey_stick,
                callback: () => this.interface.prompt.showItem(220)
            }
        }

        super.addZones()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
