import RoomScene from '@scenes/rooms/RoomScene'

import { MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /** @type {Phaser.GameObjects.Sprite} */
        this.aqua;
        /** @type {Phaser.GameObjects.Sprite} */
        this.winner_berg;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomAnims = true

        this.roomTriggers = {
            'aqua': () => this.triggerGame("AquaGrabber", 916)
        }
        this.music='249'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("berg-pack", "assets/media/rooms/old/berg/berg-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-18, -18, "berg", "bg");
        bg.setOrigin(0, 0);

        // aqua
        const aqua = this.add.sprite(1255, 325, "berg", "aqua0001");
        aqua.setOrigin(0.5, 0.4014336917562724);

        // flags
        this.add.image(802, 160, "pg-berg", "flags");

        // poles
        this.add.image(703, 196, "pg-berg", "poles");

        // winner_berg
        const winner_berg = this.add.sprite(899, 199, "pg-berg", "winner0003");

        // podium
        this.add.image(502, 254, "pg-berg", "podium");

        // lights_sign
        this.add.image(139, 238, "pg-berg", "lights_sign");

        // track
        this.add.image(679, 536, "pg-berg", "track");

        // left_sign
        const left_sign = this.add.image(280, 327, "pg-berg", "left_sign");

        // right_sign
        const right_sign = this.add.image(450, 588, "pg-berg", "right_sign");

        // rightest_sign
        const rightest_sign = this.add.image(1007, 541, "pg-berg", "rightest_sign");

        // top_right_sign
        this.add.image(1094, 340, "pg-berg", "top_right_sign");

        // mid_sign
        const mid_sign = this.add.image(480.8026440673506, 441.4079322020519, "pg-berg", "mid_sign");
        mid_sign.setOrigin(0.5185494832553689, 0.5735995625938831);

        // lists
        const sort = [left_sign, right_sign, rightest_sign, mid_sign];

        // aqua (components)
        const aquaSimpleButton = new SimpleButton(aqua);
        aquaSimpleButton.hoverCallback = () => this.onAquaOver();
        aquaSimpleButton.callback = () => this.onAquaClick();
        aquaSimpleButton.pixelPerfect = true;
        new MoveTo(aqua);
        const aquaShowHint = new ShowHint(aqua);
        aquaShowHint.text = "Aqua Grabber";

        this.aqua = aqua;
        this.winner_berg = winner_berg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    get aquaFrame() {
        let frame = this.aqua.frame.name
        return parseInt(frame.substr(frame.length - 4))
    }

    create() {
        super.create()

        this.aqua.on('animationcomplete', (animation) => this.onAquaAnimComplete(animation))
        this.aqua.play('aqua_float')
        this.winner_berg.play('pgwinner-berg')
    }

    onAquaAnimComplete(animation) {
        switch (animation.key) {
            case 'aqua_lights_on':
                this.aqua.play('aqua_lights_float')
                break
            case 'aqua_open':
                this.aqua.play('aqua_float')
                break
            default:
                break
        }
    }

    onAquaOver() {
        let frame = this.aquaFrame
        if (frame <= 81 || frame >= 400) {
            this.aqua.play('aqua_lights_on')
        }
    }

    onAquaClick() {
        let frame = this.aquaFrame
        if (frame <= 180 || frame >= 348) {
            this.aqua.play('aqua_open')
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
