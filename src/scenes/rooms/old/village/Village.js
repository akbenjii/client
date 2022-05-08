import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Sprite} */
        this.skiLift;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bouncingtubes;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'phone': () => this.triggerRoom(210, 1036, 520)
        }
        this.roomAnims = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("village-pack", "assets/media/rooms/old/village/village-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-9, -19, "village", "bg");
        bg.setOrigin(0, 0);

        // image
        this.add.image(772, 182, "vilsky");

        // lodge_door
        const lodge_door = this.add.image(1094, 308, "village", "lodge_door");
        lodge_door.scaleX = 1.05;
        lodge_door.scaleY = 1.05;
        lodge_door.setOrigin(0.27807486631016043, 0.5560538116591929);

        // lodge_stairs
        this.add.image(989, 443, "village", "lodge_stairs");

        // lodge_front
        const lodge_front = this.add.image(1105, 383, "village", "lodge_front");
        lodge_front.setOrigin(0.4807692307692308, 0.5352112676056338);

        // lodge_snow
        const lodge_snow = this.add.image(1131, 425, "village", "lodge_snow");
        lodge_snow.setOrigin(0.5368217054263565, 0.4838709677419355);

        // sports
        this.add.image(1361, 380, "sports");

        // phone_door
        const phone_door = this.add.image(1395, 382, "village", "phone_door");
        phone_door.setOrigin(0.22797927461139897, 0.6206896551724138);

        // skiLift
        const skiLift = this.add.sprite(311, 147, "ski-lift", "sprite 390001.png");

        // smoke
        const smoke = this.add.sprite(1135, 32, "village", "smoke0001");

        // greentube
        this.add.image(1449, 396, "greentube");

        // tube
        const tube = this.add.image(1498, 444, "tube");
        tube.setOrigin(0.5, -0.06198347107438017);

        // bouncingtubes
        const bouncingtubes = this.add.sprite(1400, 474, "bouncingtubes0001");

        // lists
        const sort = [bouncingtubes, tube];

        // lodge_door (components)
        const lodge_doorButton = new Button(lodge_door);
        lodge_doorButton.spriteName = "lodge_door";
        lodge_doorButton.activeFrame = false;
        const lodge_doorMoveTo = new MoveTo(lodge_door);
        lodge_doorMoveTo.x = 1000;
        lodge_doorMoveTo.y = 400;

        // phone_door (components)
        const phone_doorButton = new Button(phone_door);
        phone_doorButton.spriteName = "phone_door";
        phone_doorButton.activeFrame = false;
        const phone_doorMoveTo = new MoveTo(phone_door);
        phone_doorMoveTo.x = 1340;
        phone_doorMoveTo.y = 480;

        // smoke (components)
        const smokeAnimation = new Animation(smoke);
        smokeAnimation.key = "smoke";
        smokeAnimation.end = 5;

        // bouncingtubes (components)
        const bouncingtubesSimpleButton = new SimpleButton(bouncingtubes);
        bouncingtubesSimpleButton.hoverCallback = () => this.onTubesOver();
        bouncingtubesSimpleButton.hoverOutCallback = () => this.onTubesOut();
        bouncingtubesSimpleButton.pixelPerfect = true;

        this.skiLift = skiLift;
        this.bouncingtubes = bouncingtubes;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    onTubesOver() {
        this.bouncingtubes.play('bouncingtubes')
    }

    onTubesOut() {
        this.bouncingtubes.stopAfterRepeat()
    }

    create() {
        super.create()

        this.skiLift.play("ski-lift")
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
