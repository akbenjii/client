import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Sprite} */
        this.scloudbeach;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bucket;
        /** @type {Phaser.GameObjects.Sprite} */
        this.propbeach;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proptopbeach0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.proptopbeach0001_1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.propbeach_1;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 450, 750),
            'dock': () => this.triggerRoom(800, 240, 420),
            'lighthouse': () => this.triggerRoom(410, 530, 530),
            'ship': null
        }
        this.roomAnims = true
        this.music = 'nimbus'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beach-pack", "assets/media/rooms/old/beach/beach-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(773, 484, "fof-beach", "bg");

        // otherbg
        this.add.image(773, 484, "fof-beach", "otherbg");

        // scloudbeach
        const scloudbeach = this.add.sprite(742, 91, "fof-beach", "clouddock0001");

        // leftlightsnow
        this.add.image(197, 339, "fof-beach", "leftlightsnow");

        // islandsnow
        this.add.image(831, 544, "fof-beach", "islandsnow");

        // villagetrees
        this.add.image(889, 203, "fof-beach", "villagetrees");

        // village
        this.add.image(1104, 201, "fof-beach", "village");

        // rightsnowmound
        this.add.image(1312, 278, "fof-beach", "rightsnowmound");

        // rightsnow
        this.add.image(1289, 309, "fof-beach", "rightsnow");

        // leftsnow
        this.add.image(586, 309, "fof-beach", "leftsnow");

        // lighthouse
        this.add.image(383, 199, "fof-beach", "lighthouse");

        // lighthouse_door
        const lighthouse_door = this.add.image(383, 214, "beach", "lighthouse_door");
        lighthouse_door.setOrigin(0, 0);

        // ladder
        this.add.image(322, 187, "fof-beach", "ladder");

        // cage
        const cage = this.add.image(232, 352, "beach", "cage");
        cage.setOrigin(0.4935064935064935, 0.5);

        // fish
        const fish = this.add.image(198, 400, "beach", "fish");
        fish.setOrigin(0.4782608695652174, 0.4956521739130435);

        // buoy
        const buoy = this.add.image(194, 428, "beach", "buoy");
        buoy.setOrigin(0.5185185185185185, 0.4965034965034965);

        // net
        const net = this.add.image(290, 465, "beach", "net");
        net.setOrigin(0.49767441860465117, 0.5);

        // fg
        const fg = this.add.image(1217, 293, "beach", "fg");
        fg.setOrigin(0, 0);

        // sign
        const sign = this.add.image(1146, 323, "beach", "sign");
        sign.setOrigin(0, 0);

        // chair_ground
        const chair_ground = this.add.image(906, 524, "beach", "chair_ground");
        chair_ground.setOrigin(0, 0);

        // chair_2
        const chair_2 = this.add.image(1060, 501, "beach", "chair_2");
        chair_2.setOrigin(0.5185185185185185, 0.6060606060606061);

        // chair_2_front
        const chair_2_front = this.add.image(1053, 522, "beach", "chair_2_front");
        chair_2_front.setOrigin(0.5, 0.6764705882352942);

        // chair_1
        const chair_1 = this.add.image(961, 526, "beach", "chair_1");
        chair_1.setOrigin(0.5, 0.58778626);

        // leftfence
        const leftfence = this.add.image(418, 619, "fof-beach", "leftfence");
        leftfence.setOrigin(0.49319753403886046, 0.7017417047903672);

        // chair_1_front
        const chair_1_front = this.add.image(943, 542, "beach", "chair_1_front");
        chair_1_front.setOrigin(0.4, 0.67054264);

        // bucket
        const bucket = this.add.sprite(1078, 612, "beach", "bucket/bucket0001");
        bucket.setOrigin(0.8863109, 0.94611727);

        // proprodbeach0001
        const proprodbeach0001 = this.add.image(764, 210, "fof-beach", "proprodbeach0001");
        proprodbeach0001.scaleX = 0.3;
        proprodbeach0001.scaleY = 0.3;

        // propbasebeach
        this.add.image(773, 288, "fof-beach", "propbasebeach");

        // propbeach
        const propbeach = this.add.sprite(768, 154, "fof-beach", "propbeach");
        propbeach.scaleX = 0.3;
        propbeach.scaleY = 0.3;

        // proptopbeach0001
        const proptopbeach0001 = this.add.sprite(764, 150, "fof-beach", "proptopbeach0001");
        proptopbeach0001.scaleX = 0.3;
        proptopbeach0001.scaleY = 0.3;

        // proptopbeach0001_1
        const proptopbeach0001_1 = this.add.sprite(1295, 176, "fof-beach", "proptopbeach0001");
        proptopbeach0001_1.scaleX = 0.3;
        proptopbeach0001_1.scaleY = 0.3;

        // propbeach_1
        const propbeach_1 = this.add.sprite(1299, 180, "fof-beach", "propbeach");
        propbeach_1.scaleX = 0.3;
        propbeach_1.scaleY = 0.3;

        // propbasebeach_1
        this.add.image(1304, 314, "fof-beach", "propbasebeach");

        // proprodbeach0001_1
        const proprodbeach0001_1 = this.add.image(1295, 236, "fof-beach", "proprodbeach0001");
        proprodbeach0001_1.scaleX = 0.3;
        proprodbeach0001_1.scaleY = 0.3;

        // backfrence
        this.add.image(777, 300, "fof-beach", "backfrence");

        // leftpost
        this.add.image(600, 285, "fof-beach", "leftpost");

        // rightpost
        this.add.image(1086, 327, "fof-beach", "rightpost");

        // ground
        this.add.image(709, 630, "fof-beach", "ground");

        // warning
        const warning = this.add.image(1286, 595, "fof-beach", "warning");

        // leftrocks
        const leftrocks = this.add.image(307, 676, "fof-beach", "leftrocks");

        // rightrock
        const rightrock = this.add.image(1298, 651, "fof-beach", "rightrock");

        // leftcloud
        this.add.image(600, 253, "fof-beach", "leftcloud");

        // rightcloud
        this.add.image(1094, 289, "fof-beach", "rightcloud");

        // balloons
        this.add.image(110, 313, "fof-beach", "balloons");

        // fence
        const fence = this.add.image(1083, 690, "fof-beach", "fence");

        // sign_1
        const sign_1 = this.add.image(592, 674, "fof-beach", "sign");

        // brick_wall
        const brick_wall = this.add.image(803.9566677922525, 824.5599594789122, "ffc-beach", "brick_wall");
        brick_wall.setOrigin(0.495040455806438, 0.8343634521768737);

        // rightballoons
        this.add.image(1441, 397, "fof-beach", "rightballoons");

        // lists
        const sort = [bucket, chair_1_front, chair_1, chair_2_front, chair_2, net, fish, buoy, cage, brick_wall, sign_1, fence, warning, rightrock, leftrocks, leftfence];

        // lighthouse_door (components)
        const lighthouse_doorButton = new Button(lighthouse_door);
        lighthouse_doorButton.spriteName = "lighthouse_door";
        lighthouse_doorButton.activeFrame = false;
        const lighthouse_doorMoveTo = new MoveTo(lighthouse_door);
        lighthouse_doorMoveTo.x = 480;
        lighthouse_doorMoveTo.y = 400;

        // bucket (components)
        const bucketSimpleButton = new SimpleButton(bucket);
        bucketSimpleButton.hoverCallback = () => this.onBucketOver();
        bucketSimpleButton.pixelPerfect = true;

        this.scloudbeach = scloudbeach;
        this.bucket = bucket;
        this.propbeach = propbeach;
        this.proptopbeach0001 = proptopbeach0001;
        this.proptopbeach0001_1 = proptopbeach0001_1;
        this.propbeach_1 = propbeach_1;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.propbeach.play('propbeach')
        this.proptopbeach0001.play('proptopbeach')
        this.propbeach_1.play('propbeach')
        this.proptopbeach0001_1.play('proptopbeach')
        this.scloudbeach.play('scloudbeach')
        this.cloudTween()
        this.onCloudTweenComplete()
    }

    cloudTween() {
        let tween = this.tweens.add({
            targets: this.scloudbeach,
            y: 121,
            delay: 0,
            duration: 5400,
            onComplete: () => this.onCloudTweenComplete()
        });
    }

    onCloudTweenComplete() {
        let tween = this.tweens.add({
            targets: this.scloudbeach,
            y: 93,
            delay: 0,
            duration: 5400,
            onComplete: () => this.cloudTween()
        });
    }
	
    onBucketOver() {
        let frame = this.bucket.frame.name
        frame = frame.substr(frame.length - 4)

        switch (frame) {
            case '0001':
            case '0346':
                this.bucket.play('bucket1')
                break
            case '0070':
                this.bucket.play('bucket2')
                break
            case '0137':
                this.bucket.play('bucket3')
                break
            case '0210':
                this.bucket.play('bucket4')
                break
            case '0269':
                this.bucket.play('bucket5')
                break
            default:
                break
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
