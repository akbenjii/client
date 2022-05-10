import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Dance extends RoomScene {

    constructor() {
        super("Dance");

        /** @type {Phaser.GameObjects.Sprite} */
        this.dancefloor;
        /** @type {Phaser.GameObjects.Sprite} */
        this.puffle;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.mpZone;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Container>} */
        this.sort;
        /** @type {Array<any>} */
        this.animate;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 680, 520),
            'boiler': () => this.triggerRoom(804, 1040, 580),
            'lounge': () => this.triggerRoom(121, 1200, 760),
            'mix': null
        }
        this.roomAnims = true
        this.music = '5'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dance-pack", "assets/media/rooms/old/dance/dance-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 467, "beta_dance", "bg");

        // wire
        const wire = this.add.image(1284, 726, "dance", "wire");
        wire.setOrigin(0.5, 0.5070422535211268);

        // dancefloor
        const dancefloor = this.add.sprite(646, 693, "beta_dance", "dancefloor0001");

        // speaker_system
        this.add.image(435, 202, "beta_dance", "speaker_system");

        // fg_wire
        const fg_wire = this.add.image(217, 32, "dance", "fg/fg_wire");
        fg_wire.setOrigin(0.5106382978723404, 0.5063291139240507);

        // balloons_left_speaker
        this.add.image(390, 262, "beta_dance", "balloons_left_speaker");

        // fg_speaker_1
        const fg_speaker_1 = this.add.sprite(268, 151, "dance", "fg/fg_speaker_10001");

        // exit_sign
        this.add.image(161, 338, "beta_dance", "exit_sign");

        // fg_speaker_2
        const fg_speaker_2 = this.add.sprite(170, 131, "dance", "fg/fg_speaker_20001");
        fg_speaker_2.setOrigin(0.503448275862069, 0.5026455026455027);

        // fg_wire_1
        const fg_wire_1 = this.add.image(1130, 32, "dance", "fg/fg_wire");
        fg_wire_1.setOrigin(0.5106382978723404, 0.5063291139240507);
        fg_wire_1.flipX = true;

        // right_balloons
        this.add.image(946, 259, "beta_dance", "right_balloons");

        // fg_speaker_1_1
        const fg_speaker_1_1 = this.add.sprite(1080, 151, "dance", "fg/fg_speaker_10001");
        fg_speaker_1_1.flipX = true;

        // speaker_3
        const speaker_3 = this.add.image(119, 827, "dance", "speaker_3");
        speaker_3.setOrigin(0.5297297297297298, 0.8456140350877193);

        // fg_speaker_2_1
        const fg_speaker_2_1 = this.add.sprite(1178, 131, "dance", "fg/fg_speaker_20001");
        fg_speaker_2_1.setOrigin(0.503448275862069, 0.5026455026455027);
        fg_speaker_2_1.flipX = true;

        // speaker_1
        const speaker_1 = this.add.sprite(350, 424, "dance", "speaker_10001");
        speaker_1.setOrigin(0.5655737704918032, 0.770949720670391);

        // lamp
        const lamp = this.add.image(1457, 227, "dance", "lamp");
        lamp.setOrigin(0.5045045045045045, 0.5);

        // door_behind
        this.add.image(154, 434, "dance", "door/behind");

        // door
        const door = this.add.sprite(154, 440, "dance", "door/door0001");
        door.setOrigin(0.5, 0.5016722408026756);

        // door_frame
        const door_frame = this.add.image(152, 437, "dance", "door/frame");
        door_frame.setOrigin(0.5031446540880503, 0.5);

        // fg
        this.add.image(731, 566, "beta_dance", "fg");

        // stairs
        const stairs = this.add.image(1361, 433, "dance", "stairs");
        stairs.setOrigin(0.5026455026455027, 0.5010141987829615);

        // beta_banner
        this.add.image(677, 106, "beta_dance", "beta_banner");

        // boiler
        const boiler = this.add.container(979.3584381110322, 418.96573398979467);

        // speaker_1_1
        const speaker_1_1 = this.add.sprite(0.6415522983123765, -0.9657361633013579, "dance", "speaker_10001");
        speaker_1_1.setOrigin(0.5655737704918032, 0.770949720670391);
        speaker_1_1.flipX = true;
        boiler.add(speaker_1_1);

        // boiler_door
        const boiler_door = this.add.image(25.641552298312376, -51.96573616330136, "dance", "boiler");
        boiler_door.setOrigin(0.5, 0.4236453201970443);
        boiler_door.flipX = true;
        boiler.add(boiler_door);

        // drinks
        const drinks = this.add.image(1072, 477, "beta_dance", "drinks");

        // puffle_speaker
        const puffle_speaker = this.add.container(1164, 735.5295257801258);

        // speaker_4
        const speaker_4 = this.add.image(2, 1.4705234832657652, "dance", "speaker_4");
        speaker_4.setOrigin(0.45918367346938777, 0.8421052631578947);
        puffle_speaker.add(speaker_4);

        // puffle
        const puffle = this.add.sprite(0, -199.52947651673423, "dance", "puffle/puffle0001");
        puffle.setOrigin(0.5, 0.7933884297520661);
        puffle_speaker.add(puffle);

        // zone
        const zone = this.add.rectangle(1164, 537, 60, 50);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // ropes
        this.add.image(1487, 850, "beta_dance", "ropes");

        // mp3k_box
        const mp3k_box = this.add.image(464, 433, "mp3k_box");
        mp3k_box.scaleX = 0.25164770818876825;
        mp3k_box.scaleY = 0.25164770818876825;

        // mpZone
        const mpZone = this.add.ellipse(464, 432, 128, 128);
        mpZone.scaleX = 0.9240894734109351;
        mpZone.scaleY = 0.8593799950586576;

        // lists
        const sort = [speaker_3, speaker_1, boiler, puffle_speaker, drinks];
        const animate = [];

        // fg_speaker_1 (components)
        const fg_speaker_1Animation = new Animation(fg_speaker_1);
        fg_speaker_1Animation.key = "fg/fg_speaker_1";
        fg_speaker_1Animation.end = 10;

        // fg_speaker_2 (components)
        const fg_speaker_2Animation = new Animation(fg_speaker_2);
        fg_speaker_2Animation.key = "fg/fg_speaker_2";
        fg_speaker_2Animation.end = 10;

        // fg_speaker_1_1 (components)
        const fg_speaker_1_1Animation = new Animation(fg_speaker_1_1);
        fg_speaker_1_1Animation.key = "fg/fg_speaker_1";
        fg_speaker_1_1Animation.end = 10;

        // fg_speaker_2_1 (components)
        const fg_speaker_2_1Animation = new Animation(fg_speaker_2_1);
        fg_speaker_2_1Animation.key = "fg/fg_speaker_2";
        fg_speaker_2_1Animation.end = 10;

        // speaker_1 (components)
        const speaker_1Animation = new Animation(speaker_1);
        speaker_1Animation.key = "speaker_1";
        speaker_1Animation.end = 10;

        // door (components)
        new SimpleButton(door);
        const doorAnimation = new Animation(door);
        doorAnimation.key = "door/door";
        doorAnimation.end = 5;
        doorAnimation.repeat = 0;
        doorAnimation.autoPlay = false;
        doorAnimation.onHover = true;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 220;
        doorMoveTo.y = 540;

        // stairs (components)
        const stairsButton = new Button(stairs);
        stairsButton.spriteName = "stairs";
        stairsButton.activeFrame = false;
        const stairsMoveTo = new MoveTo(stairs);
        stairsMoveTo.x = 1324;
        stairsMoveTo.y = 769;

        // speaker_1_1 (components)
        const speaker_1_1Animation = new Animation(speaker_1_1);
        speaker_1_1Animation.key = "speaker_1";
        speaker_1_1Animation.end = 10;

        // boiler_door (components)
        const boiler_doorButton = new Button(boiler_door);
        boiler_doorButton.spriteName = "boiler";
        boiler_doorButton.activeFrame = false;
        const boiler_doorMoveTo = new MoveTo(boiler_door);
        boiler_doorMoveTo.x = 960;
        boiler_doorMoveTo.y = 420;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.hoverCallback = () => this.onPuffleOver();

        this.dancefloor = dancefloor;
        this.puffle = puffle;
        this.mpZone = mpZone;
        this.sort = sort;
        this.animate = animate;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.puffle.on('animationcomplete', () => this.onPuffleAnimComplete())

        this.puffle.play('dj_puffle_idle')
        this.dancefloor.play('beta_floor')
		
		this.roomZones = {
            'mpZone': { 
                key: this.mpZone,
                callback: () => this.interface.prompt.showItem(35008)
            }
        }

        super.addZones()
    }

    onPuffleAnimComplete() {
        this.puffle.play('dj_puffle_idle')
    }

    onSlidersAnimComplete() {
        this.dj_box_sliders.play('dj_sliders_move')
    }

    onWaveAnimComplete() {
        this.dj_mixer_wave.play('dj_wave_move')
    }

    onPuffleOver() {
        this.puffle.play('dj_puffle_jump')
    }

    onBoxOver() {
        for (let sprite of this.animate) {
            sprite.__Animation.play()
        }

        this.dj_box_sliders.play('dj_sliders_on')
        this.dj_mixer_wave.play('dj_wave_on')
    }

    onBoxOut() {
        for (let sprite of this.animate) {
            sprite.__Animation.stop()
        }

        this.dj_box_sliders.stop()
        this.dj_mixer_wave.stop()

        this.dj_box_sliders.setFrame('dj/box/sliders/sliders0001')
        this.dj_mixer_wave.setFrame('dj/mixer/wave/wave0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */