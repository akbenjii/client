import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {Phaser.GameObjects.Image} */
        this.onepin;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blimp;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }
        this.roomAnims = true
        this.music = 'stadium'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("rink-pack", "assets/media/rooms/old/rink/rink-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-33, -7, "beta_stadium", "bg");
        bg.setOrigin(0, 0);

        // onepin
        const onepin = this.add.image(159, 658, "onepin");
        onepin.scaleX = 0.5060377412314088;
        onepin.scaleY = 0.5060377412314088;

        // rink_border
        const rink_border = this.add.image(464, 288, "rink", "rink_border");
        rink_border.setOrigin(0.30707692, 0.42490372);

        // blimp
        const blimp = this.add.sprite(788, 46, "beta_stadium", "beta_blimp0001");

        // fg
        const fg = this.add.image(-64, 993, "beta_stadium", "fg");
        fg.setOrigin(0, 0.9998385876423137);

        // ball
        const ball = this.add.image(780, 490, "beta_stadium", "ball");
        ball.setOrigin(0.5, 0.7037037);

        // goal_back
        const goal_back = this.add.image(1271, 412, "rink", "goal_back");
        goal_back.setOrigin(0.97183099, 0.48863636);

        // goal
        const goal = this.add.image(1286, 549, "rink", "goal");
        goal.setOrigin(0.58571429, 0.91902834);

        // goal_back_1
        const goal_back_1 = this.add.image(275, 412, "rink", "goal_back");
        goal_back_1.setOrigin(0.97183099, 0.48863636);
        goal_back_1.flipX = true;

        // goal_1
        const goal_1 = this.add.image(260, 549, "rink", "goal");
        goal_1.setOrigin(0.58571429, 0.91902834);
        goal_1.flipX = true;

        // lists
        const sort = [fg, ball, goal_back, goal, goal_back_1, goal_1, rink_border];

        // onepin (components)
        const onepinSimpleButton = new SimpleButton(onepin);
        onepinSimpleButton.callback = () => this.interface.prompt.showItem(35005);;

        this.onepin = onepin;
        this.blimp = blimp;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
        create() {
        super.create()
        this.blimp.play('beta_blimp')
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
