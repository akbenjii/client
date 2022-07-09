import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Sprite} */
        this.cloud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bigcloud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftproprod;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftprop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftproptop;
        /** @type {Phaser.GameObjects.Sprite} */
        this.canopy_lights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.disco_lights;
        /** @type {Phaser.GameObjects.Image} */
        this.disco;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftproptop_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftprop_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftproprod_1;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.triggerRoom(110, 700, 450),
            'dance': () => this.triggerRoom(120, 300, 560),
            'gift': () => this.triggerRoom(130, 1036, 520),
        }
        this.music = '277'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-pack", "assets/media/rooms/old/town/town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-10, 0, "town", "bg");
        bg.setOrigin(0, 0);

        // cloud
        const cloud = this.add.sprite(531, 172, "fof-town", "cloud0001");

        // bigcloud
        const bigcloud = this.add.sprite(623, 94, "fof-town", "bigcloud0001");

        // background_banner
        this.add.image(791, 143, "fof-town", "background_banner");

        // build
        this.add.image(763, 294, "fof-town", "build");

        // fg
        const fg = this.add.image(-63, 976, "town", "fg");
        fg.setOrigin(0, 1);

        // leftproprod
        const leftproprod = this.add.sprite(254.99999999999997, 980.9054996196071, "fof-town", "leftproprod0001");
        leftproprod.scaleX = 0.35833351746872844;
        leftproprod.scaleY = 0.35833351746872844;
        leftproprod.setOrigin(0.49999999999999684, 3.0180675298888864);

        // leftpropbot
        const leftpropbot = this.add.image(253.48075600304313, 990.7704477200308, "fof-town", "leftpropbot");
        leftpropbot.scaleX = 0.35833351746872844;
        leftpropbot.scaleY = 0.35833351746872844;
        leftpropbot.setOrigin(0.4780983036029602, 3.2523442467973567);

        // leftprop
        const leftprop = this.add.sprite(249.96151733398438, 1000.0790511831398, "fof-town", "leftprop0001");
        leftprop.scaleX = 0.35833351746872844;
        leftprop.scaleY = 0.35833351746872844;
        leftprop.setOrigin(0.4826836341294339, 9.498969015615701);

        // leftproptop
        const leftproptop = this.add.sprite(242.40377807617185, 1011.1559985924331, "fof-town", "leftproptop0001");
        leftproptop.scaleX = 0.35833351746872844;
        leftproptop.scaleY = 0.35833351746872844;
        leftproptop.setOrigin(-0.032609435109834245, 23.10770402207377);

        // left_sign
        const left_sign = this.add.image(179, 450, "town", "left_sign");
        left_sign.setOrigin(0, 0);

        // right_sign
        const right_sign = this.add.image(1286, 465, "town", "right_sign");
        right_sign.setOrigin(0, 0);

        // coffee_door
        const coffee_door = this.add.image(449, 305, "town", "coffee_door");
        coffee_door.setOrigin(0, 0);

        // gift_door
        const gift_door = this.add.image(995, 294, "town", "gift_door");
        gift_door.setOrigin(0, 0);

        // canopy
        const canopy = this.add.image(692, 464, "town", "canopy");
        canopy.setOrigin(0.49606299212598426, 0.9403669724770642);

        // canopy_lights
        const canopy_lights = this.add.sprite(648, 548, "town", "canopy_lights0001");
        canopy_lights.setOrigin(0, 7.142857142857143);
        canopy_lights.visible = false;

        // canopy_stars
        const canopy_stars = this.add.image(647, 548, "town", "canopy_stars");
        canopy_stars.setOrigin(0, 7.142857142857143);

        // disco_lights
        const disco_lights = this.add.sprite(766, 332, "town", "disco_lights0007");
        disco_lights.setOrigin(0, 0);
        disco_lights.visible = false;

        // disco
        const disco = this.add.image(648, 229, "town", "disco");
        disco.setOrigin(0, 0);

        // lights
        const lights = this.add.sprite(518, -75, "town", "lights0001");
        lights.setOrigin(0, 0);

        // box_1
        const box_1 = this.add.image(973, 432, "town", "box_1");
        box_1.setOrigin(0.49382716049382713, 0.6268656716417911);

        // box_2
        const box_2 = this.add.image(954, 483, "town", "box_2");
        box_2.setOrigin(0.49504950495049505, 0.6736842105263158);

        // box_3
        const box_3 = this.add.image(1148, 581, "town", "box_3");
        box_3.setOrigin(0.4943820224719101, 0.5569620253164557);

        // chair_2
        const chair_2 = this.add.image(436, 462, "town", "chair_2");
        chair_2.setOrigin(0.49382716049382713, 0.27358490566037735);

        // table_2
        const table_2 = this.add.image(485, 523, "town", "table_2");
        table_2.setOrigin(0.5, 0.7864077669902912);

        // chair_1
        const chair_1 = this.add.image(402, 511, "town", "chair_1");
        chair_1.setOrigin(0.49411764705882355, 0.2857142857142857);

        // table_1
        const table_1 = this.add.image(455, 575, "town", "table_1");
        table_1.setOrigin(0.49572649572649574, 0.7830188679245284);

        // banners
        this.add.image(803, 215, "fof-town", "banners");

        // front_barrier
        const front_barrier = this.add.image(774, 1074.6549837382897, "fof-town", "front_barrier");
        front_barrier.setOrigin(0.5, 1.8051505044475284);

        // leftproptop_1
        const leftproptop_1 = this.add.sprite(1423, 608, "fof-town", "leftproptop0001");
        leftproptop_1.scaleX = 0.22;
        leftproptop_1.scaleY = 0.22;
        leftproptop_1.setOrigin(-0.032609435109834245, 23.10770402207377);

        // leftprop_1
        const leftprop_1 = this.add.sprite(1431, 596, "fof-town", "leftprop0001");
        leftprop_1.scaleX = 0.22;
        leftprop_1.scaleY = 0.22;
        leftprop_1.setOrigin(0.4826836341294339, 9.498969015615701);

        // leftpropbot_1
        const leftpropbot_1 = this.add.image(1434, 587, "fof-town", "leftpropbot");
        leftpropbot_1.scaleX = 0.22;
        leftpropbot_1.scaleY = 0.22;
        leftpropbot_1.setOrigin(0.4780983036029602, 3.2523442467973567);

        // leftproprod_1
        const leftproprod_1 = this.add.sprite(1436, 577, "fof-town", "leftproprod0001");
        leftproprod_1.scaleX = 0.22;
        leftproprod_1.scaleY = 0.22;
        leftproprod_1.setOrigin(0.49999999999999684, 3.0180675298888864);

        // lists
        const sort = [fg, box_2, box_1, box_3, chair_2, chair_1, table_1, table_2, canopy, canopy_stars, canopy_lights, leftproptop, leftprop, leftpropbot, leftproprod, front_barrier];

        // coffee_door (components)
        const coffee_doorButton = new Button(coffee_door);
        coffee_doorButton.spriteName = "coffee_door";
        coffee_doorButton.activeFrame = false;
        coffee_doorButton.pixelPerfect = true;
        const coffee_doorMoveTo = new MoveTo(coffee_door);
        coffee_doorMoveTo.x = 550;
        coffee_doorMoveTo.y = 450;

        // gift_door (components)
        const gift_doorButton = new Button(gift_door);
        gift_doorButton.spriteName = "gift_door";
        gift_doorButton.activeFrame = false;
        gift_doorButton.pixelPerfect = true;
        const gift_doorMoveTo = new MoveTo(gift_door);
        gift_doorMoveTo.x = 1010;
        gift_doorMoveTo.y = 466;

        // canopy (components)
        const canopySimpleButton = new SimpleButton(canopy);
        canopySimpleButton.hoverCallback = () => this.onCanopyOver();
        canopySimpleButton.hoverOutCallback = () => this.onCanopyOut();
        const canopyMoveTo = new MoveTo(canopy);
        canopyMoveTo.x = 684;
        canopyMoveTo.y = 410;

        // canopy_lights (components)
        const canopy_lightsAnimation = new Animation(canopy_lights);
        canopy_lightsAnimation.key = "canopy_lights";
        canopy_lightsAnimation.end = 57;
        canopy_lightsAnimation.autoPlay = false;
        canopy_lightsAnimation.showOnStart = true;
        canopy_lightsAnimation.hideOnComplete = true;

        // disco_lights (components)
        const disco_lightsAnimation = new Animation(disco_lights);
        disco_lightsAnimation.key = "disco_lights";
        disco_lightsAnimation.end = 57;
        disco_lightsAnimation.autoPlay = false;
        disco_lightsAnimation.showOnStart = true;
        disco_lightsAnimation.hideOnComplete = true;

        // lights (components)
        const lightsAnimation = new Animation(lights);
        lightsAnimation.key = "lights";
        lightsAnimation.end = 69;
        lightsAnimation.repeatDelay = 1;

        this.cloud = cloud;
        this.bigcloud = bigcloud;
        this.leftproprod = leftproprod;
        this.leftprop = leftprop;
        this.leftproptop = leftproptop;
        this.canopy_lights = canopy_lights;
        this.disco_lights = disco_lights;
        this.disco = disco;
        this.leftproptop_1 = leftproptop_1;
        this.leftprop_1 = leftprop_1;
        this.leftproprod_1 = leftproprod_1;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.leftprop.play('leftprop')
        this.leftproprod.play('leftproprod')
        this.leftproptop.play('leftproptop')
        this.leftprop_1.play('leftprop')
        this.leftproprod_1.play('leftproprod')
        this.leftproptop_1.play('leftproptop')
        this.cloud.play('cloud')
        this.cloudTween()
        this.onCloudTweenComplete()
        this.bigcloud.play('bigcloud')
        this.bigCloudTween()
        this.onBigCloudTweenComplete()
    }

    cloudTween() {
        let tween = this.tweens.add({
            targets: this.cloud,
            y: 172,
            delay: 0,
            duration: 5400,
            onComplete: () => this.onCloudTweenComplete()
        });
    }

    onCloudTweenComplete() {
        let tween = this.tweens.add({
            targets: this.cloud,
            y: 70,
            delay: 0,
            duration: 5400,
            onComplete: () => this.cloudTween()
        });
    }

    bigCloudTween() {
        let tween = this.tweens.add({
            targets: this.bigcloud,
            y: 94,
            delay: 0,
            duration: 4800,
            onComplete: () => this.onBigCloudTweenComplete()
        });
    }

    onBigCloudTweenComplete() {
        let tween = this.tweens.add({
            targets: this.bigcloud,
            y: 60,
            delay: 0,
            duration: 4800,
            onComplete: () => this.bigCloudTween()
        });
    }

    onCanopyOver() {
        this.disco.setFrame('disco-hover')
        this.canopy_lights.__Animation.play()
        this.disco_lights.__Animation.play()
    }

    onCanopyOut() {
        this.disco.setFrame('disco')
        this.canopy_lights.__Animation.stop()
        this.disco_lights.__Animation.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
