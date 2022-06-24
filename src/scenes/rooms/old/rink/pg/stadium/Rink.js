import RoomScene from '@scenes/rooms/RoomScene'


/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {Phaser.GameObjects.Sprite} */
        this.pg_blimp;
        /** @type {Phaser.GameObjects.Image[]} */
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

        this.load.pack("rink-pack", "assets/media/rooms/old/rink/rink-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-33, -7, "pg-stadium", "bg");
        bg.setOrigin(0, 0);

        // rink_border
        const rink_border = this.add.image(465, 291, "rink", "rink_border");
        rink_border.setOrigin(0.30707692, 0.42490372);

        // sports_door0001
        const sports_door0001 = this.add.image(1327, 280, "rink", "sports_door0001");
        sports_door0001.setOrigin(0.5125, 0.62962963);

        // ball
        const ball = this.add.image(781, 487, "rink", "ball");
        ball.setOrigin(0.5, 0.7037037);
        ball.visible = false;

        // fg
        const fg = this.add.image(-60, 985, "pg-stadium", "fg");
        fg.setOrigin(0, 0.9998385876423137);

        // goal_back
        const goal_back = this.add.image(1284, 422, "rink", "goal_back");
        goal_back.setOrigin(0.97183099, 0.48863636);

        // goal
        const goal = this.add.image(1300, 554, "rink", "goal");
        goal.setOrigin(0.58571429, 0.91902834);

        // goal_back_1
        const goal_back_1 = this.add.image(264, 422, "rink", "goal_back");
        goal_back_1.setOrigin(0.97183099, 0.48863636);
        goal_back_1.flipX = true;

        // goal_1
        const goal_1 = this.add.image(250, 554, "rink", "goal");
        goal_1.setOrigin(0.58571429, 0.91902834);
        goal_1.flipX = true;

        // pg_blimp
        const pg_blimp = this.add.sprite(752, 76, "pg-stadium", "blimp0001");

        // lists
        const sort = [fg, ball, goal_back, goal, goal_back_1, goal_1, sports_door0001, rink_border];

        this.pg_blimp = pg_blimp;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.pg_blimp.play('pg_blimp')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
