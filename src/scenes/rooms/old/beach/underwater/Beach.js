import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'
// You can write more code here

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
        this.music='bubble_boogie'

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

        // pin
        const pin = this.add.image(606, 783, "582");
        pin.scaleX = 1.2166666666666668;
        pin.scaleY = 1.2166666666666668;

        // chair_1_front
        const chair_1_front = this.add.image(943, 542, "beach", "chair_1_front");
        chair_1_front.setOrigin(0.4, 0.67054264);

        // bucket
        const bucket = this.add.sprite(1078, 612, "beach", "bucket/bucket0001");
        bucket.setOrigin(0.8863109, 0.94611727);

        // water
        const water = this.add.image(800.0907295597038, 982.2410649057183, "beachuw", "water");
        water.setOrigin(0.5010656226204321, 0.9786344736205302);

        // lists
        const sort = [bucket, chair_1_front, chair_1, chair_2_front, chair_2, net, fish, buoy, cage, water];

        // lighthouse_door (components)
        const lighthouse_doorButton = new Button(lighthouse_door);
        lighthouse_doorButton.spriteName = "lighthouse_door";
        lighthouse_doorButton.activeFrame = false;
        const lighthouse_doorMoveTo = new MoveTo(lighthouse_door);
        lighthouse_doorMoveTo.x = 480;
        lighthouse_doorMoveTo.y = 400;

        // pin (components)
        const pinSimpleButton = new SimpleButton(pin);
        pinSimpleButton.callback = () => this.interface.prompt.showItem(582);;

        // bucket (components)
        const bucketSimpleButton = new SimpleButton(bucket);
        bucketSimpleButton.hoverCallback = () => this.onBucketOver();
        bucketSimpleButton.pixelPerfect = true;

        this.bucket = bucket;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {

        super.create();
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
