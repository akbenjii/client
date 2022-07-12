import RoomScene from '@scenes/rooms/RoomScene'

import { MoveTo, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Berg extends RoomScene {

    constructor() {
        super("Berg");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bergbgfof;
        /** @type {Phaser.GameObjects.Sprite} */
        this.aqua;


        /* START-USER-CTR-CODE */

        this.roomAnims = true

        this.roomTriggers = {
            'aqua': () => this.triggerGame("AquaGrabber", 916)
        }
        this.music = '277'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("berg-pack", "assets/media/rooms/old/berg/berg-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bergbgfof
        const bergbgfof = this.add.sprite(-16, 1, "fof-berg", "bergbgfof0001");
        bergbgfof.setOrigin(0, 0);

        // aqua
        const aqua = this.add.sprite(1255, 325, "berg", "aqua0001");
        aqua.setOrigin(0.5, 0.4014336917562724);

        // aqua (components)
        const aquaSimpleButton = new SimpleButton(aqua);
        aquaSimpleButton.hoverCallback = () => this.onAquaOver();
        aquaSimpleButton.callback = () => this.onAquaClick();
        aquaSimpleButton.pixelPerfect = true;
        new MoveTo(aqua);
        const aquaShowHint = new ShowHint(aqua);
        aquaShowHint.text = "Aqua Grabber";

        this.bergbgfof = bergbgfof;
        this.aqua = aqua;

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
		this.bergbgfof.play('fofbg')
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
