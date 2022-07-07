import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bucket;
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
        this.music = '583'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("beach-pack", "assets/media/rooms/old/beach/beach-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-25, -20, "beach", "bg");
        bg.setOrigin(0, 0);

        // lighthouse_door
        const lighthouse_door = this.add.image(383, 214, "beach", "lighthouse_door");
        lighthouse_door.setOrigin(0, 0);

        // cage
        const cage = this.add.image(232, 352, "beach", "cage");
        cage.setOrigin(0.4935064935064935, 0.5);

        // buoy
        const buoy = this.add.image(194, 428, "beach", "buoy");
        buoy.setOrigin(0.5185185185185185, 0.4965034965034965);

        // fish
        const fish = this.add.image(297, 392, "beach", "fish");
        fish.setOrigin(0.4782608695652174, 0.4956521739130435);

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

        // chair_1_front
        const chair_1_front = this.add.image(943, 542, "beach", "chair_1_front");
        chair_1_front.setOrigin(0.4, 0.67054264);

        // bucket
        const bucket = this.add.sprite(1078, 612, "beach", "bucket/bucket0001");
        bucket.setOrigin(0.8863109, 0.94611727);

        // shadows
        const shadows = this.add.image(767, 653, "ffc-beach", "shadows");
        shadows.alpha = 0.8;
        shadows.alphaTopLeft = 0.8;
        shadows.alphaTopRight = 0.8;
        shadows.alphaBottomLeft = 0.8;
        shadows.alphaBottomRight = 0.8;

        // wood
        this.add.image(567, 557, "ffc-beach", "wood");

        // brick_wall
        const brick_wall = this.add.image(816.3549707305233, 711.2251463473838, "ffc-beach", "brick_wall");
        brick_wall.setOrigin(0.4862984726469012, 0.6282961197608353);

        // box
        const box = this.add.image(398.8888888888889, 521.7777777777778, "ffc-beach", "box");
        box.setOrigin(0.4938271604938273, 0.7541371158392438);

        // cone
        const cone = this.add.image(814.7777777777778, 510.44444444444446, "ffc-beach", "cone");
        cone.setOrigin(0.47635933806146624, 0.7182539682539684);

        // cone_1
        const cone_1 = this.add.image(1183, 527.2222222222222, "ffc-beach", "cone");
        cone_1.setOrigin(0.5, 0.6984126984126979);
        cone_1.flipX = true;

        // lists
        const sort = [bucket, chair_1_front, chair_1, chair_2_front, chair_2, net, fish, buoy, cage, brick_wall, box, cone, cone_1];

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

        this.bucket = bucket;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

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
