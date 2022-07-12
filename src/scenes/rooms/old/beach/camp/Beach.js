import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Beach extends RoomScene {

    constructor() {
        super("Beach");

        /** @type {Phaser.GameObjects.Image} */
        this.bgcampnight;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bucket;
        /** @type {Phaser.GameObjects.Image} */
        this.ground;
        /** @type {Phaser.GameObjects.Sprite} */
        this.campfirebeach;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.night;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image|Phaser.GameObjects.Rectangle>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 450, 750),
            'dock': () => this.triggerRoom(800, 240, 420),
            'lighthouse': () => this.triggerRoom(410, 530, 530),
            'ship': null
        }
        this.roomAnims = true
       var now = new Date();
        var timeInHours = now.getUTCHours();
        if (timeInHours > 1 && timeInHours < 13 ) {
            this.music = 'crickets'
        } else {
            this.music='campy'
        }

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

        // bgcampnight
        const bgcampnight = this.add.image(778, 473, "camp-beach", "bgcampnight");
        bgcampnight.visible = false;

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

        // bucket
        const bucket = this.add.sprite(1078, 612, "beach", "bucket/bucket0001");
        bucket.setOrigin(0.8863109, 0.94611727);

        // ground
        const ground = this.add.image(825, 475, "camp-beach", "ground");

        // rocks
        this.add.image(785, 518, "camp-beach", "rocks");

        // logs
        this.add.image(783, 495, "camp-beach", "logs");

        // campfirebeach
        const campfirebeach = this.add.sprite(747.22240650798, 1024.5089079844242, "camp-beach", "campfirebeach0001");
        campfirebeach.setOrigin(0.30735544250345365, 4.976448094365545);

        // bench
        const bench = this.add.image(620.0598148840015, 627.4187041880108, "camp-beach", "bench");
        bench.setOrigin(0.5076007929298949, 0.5974236769460188);

        // rightfence
        this.add.image(1041, 334, "camp-beach", "rightfence");

        // lilfence
        this.add.image(745, 303, "camp-beach", "lilfence");

        // bushrock
        const bushrock = this.add.image(1168, 513, "camp-beach", "bushrock");

        // night
        const night = this.add.rectangle(737.492962698051, 1024.2255452239863, 128, 128);
        night.scaleX = 12.397097039253481;
        night.scaleY = 7.74841237866371;
        night.setOrigin(0.4894984014502917, 1.0532761780188962);
        night.visible = false;
        night.isFilled = true;
        night.fillColor = 0;
        night.fillAlpha = 0.3;

        // lists
        const sort = [bucket, net, fish, buoy, cage, bench, campfirebeach, bushrock, night];

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

        this.bgcampnight = bgcampnight;
        this.bucket = bucket;
        this.ground = ground;
        this.campfirebeach = campfirebeach;
        this.night = night;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
		this.campfirebeach.play('campfirebeach')
        var now = new Date();
        var timeInHours = now.getUTCHours();
        console.log(timeInHours)
        if (timeInHours > 1 && timeInHours < 13 ) {
            this.bgcampnight.visible = true
            this.ground.visible = false
            this.night.visible = true
        }
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
