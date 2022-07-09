import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Cove extends RoomScene {

    constructor() {
        super("Cove");

        /** @type {Phaser.GameObjects.Sprite} */
        this.smallcloud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.mediumcloud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proprod_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.propbot_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.prop_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proptop_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proprod;
        /** @type {Phaser.GameObjects.Sprite} */
        this.propbot;
        /** @type {Phaser.GameObjects.Sprite} */
        this.prop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proptop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.hugecloud;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers =  {
            'forest': () => this.triggerRoom(809, 1190, 750)
        }
        this.music = '277'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cove-pack", "assets/media/rooms/old/cove/cove-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-2, -15, "fof-cove", "bgfof");
        bg.setOrigin(0, 0);

        // smallcloud
        const smallcloud = this.add.sprite(834, 916, "fof-cove", "smallcloud0001");

        // mediumcloud
        const mediumcloud = this.add.sprite(889, 836, "fof-cove", "mediumcloud0001");

        // cliff
        this.add.image(1040, 802, "fof-cove", "cliff");

        // cliffy
        this.add.image(796, 624, "fof-cove", "cliffy");

        // cliff_1
        const cliff_1 = this.add.image(-5, 5, "cove", "cliff_1");
        cliff_1.setOrigin(0, 0);

        // proprod_1
        const proprod_1 = this.add.sprite(1066, 212, "fof-cove", "proprod0001");
        proprod_1.scaleX = 0.35;
        proprod_1.scaleY = 0.35;

        // propbot_1
        const propbot_1 = this.add.sprite(1067, 293, "fof-cove", "propbot");
        propbot_1.scaleX = 0.35;
        propbot_1.scaleY = 0.35;

        // prop_1
        const prop_1 = this.add.sprite(1065, 151, "fof-cove", "prop");
        prop_1.scaleX = 0.35;
        prop_1.scaleY = 0.35;

        // proptop_1
        const proptop_1 = this.add.sprite(1066, 151, "fof-cove", "proptop0001");
        proptop_1.scaleX = 0.35;
        proptop_1.scaleY = 0.35;

        // backrock
        this.add.image(947, 280, "fof-cove", "backrock");

        // hut
        const hut = this.add.image(1326, 423, "cove", "hut");
        hut.setOrigin(0.5537459283387622, 0.43842364532019706);

        // left_wood_fence
        const left_wood_fence = this.add.image(400, 830, "fof-cove", "left_wood_fence");
        left_wood_fence.setOrigin(0.5578747058411934, 0.7977730440360166);

        // hut_wall
        const hut_wall = this.add.image(1440, 545, "cove", "hut_wall");
        hut_wall.setOrigin(0.5210526315789473, 0.8577777777777778);

        // boards
        const boards = this.add.image(1101, 485, "cove", "boards");
        boards.setOrigin(0.502262443438914, 0.8586956521739131);

        // rock_1
        const rock_1 = this.add.image(461, 884, "cove", "rock_1");
        rock_1.setOrigin(0.456, 0.6329113924050633);

        // fg
        const fg = this.add.image(-12, 963, "fof-cove", "fgfpf");
        fg.setOrigin(0, 1);

        // log_1
        const log_1 = this.add.image(108, 285, "cove", "log_1");
        log_1.setOrigin(0, 0);

        // fire
        const fire = this.add.sprite(435, 600, "cove", "fire0001");
        fire.setOrigin(0.5029239766081871, 0.7318840579710145);

        // chair_arm
        const chair_arm = this.add.image(633, 283, "cove", "chair_arm");
        chair_arm.setOrigin(0.40298507462686567, 0.7115384615384616);

        // binoculars
        const binoculars = this.add.image(651, 300, "cove", "binoculars0001");
        binoculars.setOrigin(1.0597014925373134, 1.1666666666666667);

        // silver_board
        const silver_board = this.add.image(1463, 557, "cove", "silver_board");
        silver_board.setOrigin(0.5167785234899329, 0.8613445378151261);

        // rock_4
        const rock_4 = this.add.image(1497, 583, "cove", "rock_4");
        rock_4.setOrigin(0.5094339622641509, 0.5423728813559322);

        // brickwall
        const brickwall = this.add.image(1415, 601, "fof-cove", "brickwall");

        // rock_2
        const rock_2 = this.add.image(1292, 697, "cove", "rock_2");
        rock_2.setOrigin(0.4935064935064935, 0.6458333333333334);

        // rock_3
        const rock_3 = this.add.image(1447, 690, "cove", "rock_3");
        rock_3.setOrigin(0.5588235294117647, 0.5949367088607594);

        // hut_stool
        const hut_stool = this.add.image(1310, 493, "cove", "hut_stool");
        hut_stool.setOrigin(0.5, 0.5185185185185185);

        // firework
        const firework = this.add.image(259, 340, "firework");
        firework.scaleX = 0.13976192905485785;
        firework.scaleY = 0.13976192905485785;
        firework.alpha = 0.5;
        firework.alphaTopLeft = 0.5;
        firework.alphaTopRight = 0.5;
        firework.alphaBottomLeft = 0.5;
        firework.alphaBottomRight = 0.5;

        // surftop
        this.add.image(1306, 293, "fof-cove", "surftop");

        // warning
        const warning = this.add.image(785, 631.0793933494389, "fof-cove", "warning");
        warning.setOrigin(0.5, 0.8147057301606518);

        // caution
        const caution = this.add.image(1063, 624, "fof-cove", "caution");
        caution.setOrigin(0.5231861538559602, 0.929466842286905);

        // cloudposters
        this.add.image(1054, 74, "fof-cove", "cloudposters");

        // right_wood_fence
        const right_wood_fence = this.add.image(592, 715.4828734942204, "fof-cove", "right_wood_fence");
        right_wood_fence.setOrigin(0.5, 0.7179862268467858);

        // mainballoons
        const mainballoons = this.add.image(910, 315, "fof-cove", "mainballoons");
        mainballoons.scaleX = 0.8;
        mainballoons.scaleY = 0.8;
        mainballoons.setOrigin(0.48167300981695493, 0.9008739118519121);

        // balloons
        const balloons = this.add.image(88.70806946976947, 1048.8879134636802, "fof-cove", "balloons");
        balloons.setOrigin(0.5364568992922254, 1.4261958663325496);

        // proprod
        const proprod = this.add.sprite(132, 88, "fof-cove", "proprod0001");
        proprod.scaleX = 0.23580050587960655;
        proprod.scaleY = 0.23580050587960655;

        // propbot
        const propbot = this.add.sprite(133, 151, "fof-cove", "propbot");
        propbot.scaleX = 0.23580050587960655;
        propbot.scaleY = 0.23580050587960655;

        // prop
        const prop = this.add.sprite(132, 44, "fof-cove", "prop");
        prop.scaleX = 0.23580050587960655;
        prop.scaleY = 0.23580050587960655;

        // proptop
        const proptop = this.add.sprite(132, 45, "fof-cove", "proptop0001");
        proptop.scaleX = 0.23580050587960655;
        proptop.scaleY = 0.23580050587960655;

        // hugecloud
        const hugecloud = this.add.sprite(1321, 879, "fof-cove", "hugecloud0001");

        // lists
        const sort = [hut_wall, boards, rock_1, fire, chair_arm, binoculars, silver_board, rock_3, rock_2, rock_4, fg, warning, caution, brickwall, right_wood_fence, mainballoons, balloons];

        // hut (components)
        const hutButton = new Button(hut);
        hutButton.spriteName = "hut";
        hutButton.activeFrame = false;
        const hutMoveTo = new MoveTo(hut);
        hutMoveTo.x = 1250;
        hutMoveTo.y = 500;

        // fire (components)
        const fireAnimation = new Animation(fire);
        fireAnimation.key = "fire";
        fireAnimation.end = 10;

        // firework (components)
        const fireworkSimpleButton = new SimpleButton(firework);
        fireworkSimpleButton.callback = () => this.interface.prompt.showItem(614);

        this.smallcloud = smallcloud;
        this.mediumcloud = mediumcloud;
        this.proprod_1 = proprod_1;
        this.propbot_1 = propbot_1;
        this.prop_1 = prop_1;
        this.proptop_1 = proptop_1;
        this.proprod = proprod;
        this.propbot = propbot;
        this.prop = prop;
        this.proptop = proptop;
        this.hugecloud = hugecloud;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.prop.play('propcove')
        this.proprod.play('proprodcove')
        this.proptop.play('proptopcove')
        this.prop_1.play('propcove')
        this.proprod_1.play('proprodcove')
        this.proptop_1.play('proptopcove')
        this.mediumcloud.play('medcloudcove')
        this.cloudTween()
        this.onCloudTweenComplete()
        this.smallcloud.play('smallcloudcove')
        this.smallCloudTween()
        this.onSmallCloudTweenComplete()
        this.hugecloud.play('hugeclouds')
    }

    cloudTween() {
        let tween = this.tweens.add({
            targets: this.mediumcloud,
            y: 836,
            delay: 0,
            duration: 10800,
            onComplete: () => this.onCloudTweenComplete()
        });
    }

    onCloudTweenComplete() {
        let tween = this.tweens.add({
            targets: this.mediumcloud,
            y: 910,
            delay: 0,
            duration: 10800,
            onComplete: () => this.cloudTween()
        });
    }

    smallCloudTween() {
        let tween = this.tweens.add({
            targets: this.smallcloud,
            y: 916,
            delay: 0,
            duration: 4200,
            onComplete: () => this.onSmallCloudTweenComplete()
        });
    }

    onSmallCloudTweenComplete() {
        let tween = this.tweens.add({
            targets: this.smallcloud,
            y: 850,
            delay: 0,
            duration: 4200,
            onComplete: () => this.smallCloudTween()
        });
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
