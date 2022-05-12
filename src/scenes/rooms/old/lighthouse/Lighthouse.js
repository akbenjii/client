import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Lighthouse extends RoomScene {

    constructor() {
        super("Lighthouse");

        /** @type {Phaser.GameObjects.Sprite} */
        this.to_top0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.speaker_bottom_stage;
        /** @type {Phaser.GameObjects.Sprite} */
        this.top_left_speaker0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.top_right_speaker0001;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'beach': () => this.triggerRoom(400, 840, 680),
            'beacon': () => this.triggerRoom(411, 272, 680)
        }
        this.roomAnims = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("lighthouse-pack", "assets/media/rooms/old/lighthouse/lighthouse-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-31, -15, "lighthouse", "bg");
        bg.setOrigin(0, 0);

        // front_rail
        const front_rail = this.add.image(661.7113914490475, 677.1565561350517, "lighthouse", "front_rail");
        front_rail.setOrigin(0.4858666240154337, 1.0510685807616964);

        // front_steps
        this.add.image(247, 850, "lighthouse", "front_steps");

        // back_steps
        this.add.image(494, 563, "lighthouse", "back_steps");

        // piano
        this.add.image(419, 687, "lighthouse", "piano");

        // stool
        this.add.image(381, 790, "lighthouse", "stool");

        // net_wheel
        this.add.image(882, 439, "lighthouse", "net_wheel");

        // buoy
        this.add.image(1099, 498, "lighthouse", "buoy");

        // instruments
        const instruments = this.add.image(1182, 559, "lighthouse", "instruments");

        // lighthouse_door
        const lighthouse_door = this.add.image(482, 402, "lighthouse", "lighthouse_door");

        // drums
        const drums = this.add.image(185, 493, "lighthouse", "drums");

        // chair_top_right
        const chair_top_right = this.add.image(956, 673, "lighthouse", "chair_top_right");

        // chair_top_left
        this.add.image(763, 659, "lighthouse", "chair_top_left");

        // chair_mid_right
        this.add.image(982, 756, "lighthouse", "chair_mid_right");

        // chair_mid_left
        this.add.image(743, 762, "lighthouse", "chair_mid_left");

        // chair_bottom_right
        this.add.image(936, 856, "lighthouse", "chair_bottom_right");

        // chair_bottom_left
        this.add.image(640, 844, "lighthouse", "chair_bottom_left");

        // to_top0001
        const to_top0001 = this.add.sprite(327, 63, "lighthouse", "to_top0001");

        // speaker_bottom_stage
        const speaker_bottom_stage = this.add.sprite(28, 862, "lighthouse", "speaker_bottom_stage0001");

        // lighthouse_cat
        const lighthouse_cat = this.add.image(1436, 861, "lighthouse", "lighthouse_cat");

        // mic
        this.add.image(331, 636, "lighthouse", "mic");

        // top_left_speaker0001
        const top_left_speaker0001 = this.add.sprite(134, 301, "lighthouse", "top_left_speaker0001");

        // top_right_speaker0001
        const top_right_speaker0001 = this.add.sprite(359, 337, "lighthouse", "top_right_speaker0001");

        // lists
        const sort = [drums, chair_top_right, front_rail];

        // instruments (components)
        const instrumentsSimpleButton = new SimpleButton(instruments);
        instrumentsSimpleButton.callback = () => this.interface.loadExternal('Music');
        instrumentsSimpleButton.pixelPerfect = true;

        // lighthouse_door (components)
        const lighthouse_doorButton = new Button(lighthouse_door);
        lighthouse_doorButton.spriteName = "lighthouse_door";
        lighthouse_doorButton.activeFrame = false;
        lighthouse_doorButton.pixelPerfect = true;
        new MoveTo(lighthouse_door);

        // to_top0001 (components)
        const to_top0001SimpleButton = new SimpleButton(to_top0001);
        to_top0001SimpleButton.hoverCallback = () => this.onTopOver();
        to_top0001SimpleButton.callback = () => this.triggerRoom(411, 272, 680);

        // lighthouse_cat (components)
        const lighthouse_catButton = new Button(lighthouse_cat);
        lighthouse_catButton.spriteName = "lighthouse_cat";
        lighthouse_catButton.callback = () => this.interface.loadExternal('Music');
        lighthouse_catButton.activeFrame = false;
        lighthouse_catButton.pixelPerfect = true;

        this.to_top0001 = to_top0001;
        this.speaker_bottom_stage = speaker_bottom_stage;
        this.top_left_speaker0001 = top_left_speaker0001;
        this.top_right_speaker0001 = top_right_speaker0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.speaker_bottom_stage.play('bottom_speaker')
        this.top_left_speaker0001.play('top_left_speaker')
        this.top_right_speaker0001.play('top_right_speaker')
    }

    onTopOver() {
        this.to_top0001.play('top_top')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
