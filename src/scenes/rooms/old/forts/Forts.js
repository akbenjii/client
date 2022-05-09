import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Forts extends RoomScene {

    constructor() {
        super("Forts");

        /** @type {Phaser.GameObjects.Sprite} */
        this.tower;
        /** @type {Phaser.GameObjects.Sprite} */
        this.blue_flag;
        /** @type {Phaser.GameObjects.Sprite} */
        this.red_flag;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'town': () => this.triggerRoom(100, 1240, 660),
            'rink': () => this.triggerRoom(802, 780, 340),
            'plaza': () => this.triggerRoom(300, 340, 660)
        }
        this.roomAnims = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forts-pack", "assets/media/rooms/old/forts/forts-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-35, -18, "forts", "bg");
        bg.setOrigin(0, 0);

        // town_flags
        this.add.image(184, 390, "beta_forts", "town_flags");

        // image
        this.add.image(762, 90, "fortsky");

        // red_fort
        const red_fort = this.add.image(603, 655, "forts", "red_fort");
        red_fort.setOrigin(0.5, 0.65116279);

        // red_pole
        const red_pole = this.add.image(662, 657, "forts", "red_pole");
        red_pole.setOrigin(0.47058824, 1);

        // red_fort_front
        const red_fort_front = this.add.image(703, 702, "forts", "red_fort_front");
        red_fort_front.setOrigin(0.5, 0.6473684210526316);

        // blue_pole
        const blue_pole = this.add.image(993, 424, "forts", "blue_pole");
        blue_pole.setOrigin(0.5, 1);

        // blue_fort
        const blue_fort = this.add.image(1023, 477, "forts", "blue_fort");
        blue_fort.setOrigin(0.49803922, 0.81818182);

        // penguin_stadium
        this.add.image(637, 214, "beta_forts", "penguin_stadium");

        // tower
        const tower = this.add.sprite(1059, 81, "beta_forts", "beta_party_sign");
        tower.setOrigin(0, 0);

        // juice_table
        this.add.image(874, 216, "beta_forts", "juice_table");

        // snowballs
        const snowballs = this.add.image(676, 786, "forts", "snowballs");
        snowballs.setOrigin(0.49230769, 0.57777778);

        // blue_flag
        const blue_flag = this.add.sprite(966, 334, "beta_forts", "pink_flag0001");
        blue_flag.setOrigin(0.5, 1.85185185);

        // red_flag
        const red_flag = this.add.sprite(626, 524, "beta_forts", "yellow_flag0001");
        red_flag.setOrigin(0.5, 1.73913043);

        // bottom_fort_drape
        const bottom_fort_drape = this.add.image(586.2403537705574, 767.510448194952, "beta_forts", "bottom_fort_drape");
        bottom_fort_drape.setOrigin(0.4806072517527184, 1.3271832350795318);

        // top_fort_drape
        const top_fort_drape = this.add.image(1023.7596462294426, 526.9139859005254, "beta_forts", "top_fort_drape");
        top_fort_drape.setOrigin(0.526420395547902, 1.6254481137991426);

        // plaza_pink_flag
        this.add.image(1300, 835, "beta_forts", "plaza_pink_flag");

        // plaza_yellow_flag
        this.add.image(1469, 410, "beta_forts", "plaza_yellow_flag");

        // right_flag_drape
        const right_flag_drape = this.add.image(1443, 192, "beta_forts", "right_flag_drape");

        // bottom_beta_sign
        const bottom_beta_sign = this.add.image(736.8397641529618, 742.3561085238694, "beta_forts", "bottom_beta_sign");
        bottom_beta_sign.setOrigin(0.5342836085085878, 1.1272882032066271);

        // bottom_balloons
        const bottom_balloons = this.add.image(122, 640, "beta_forts", "bottom_balloons");
        bottom_balloons.setOrigin(0.5168410708463236, 0.4708224608437554);

        // lists
        const sort = [red_flag, red_pole, blue_pole, blue_flag, blue_fort, red_fort_front, red_fort, snowballs, right_flag_drape, bottom_beta_sign, top_fort_drape, bottom_fort_drape];

        this.tower = tower;
        this.blue_flag = blue_flag;
        this.red_flag = red_flag;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.blue_flag.play('pinkflag')
        this.red_flag.play('yellowflag')
    }

    onSnowballComplete(x, y) {
        if (this.bounds.contains(x, y)) {
            this.tower.__Animation.play()
        }
    }

    onTowerAnimComplete() {
        this.tower.setFrame('tower0001')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
