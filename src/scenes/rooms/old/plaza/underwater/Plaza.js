import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /** @type {Phaser.GameObjects.Sprite} */
        this.fishmask;
        /** @type {Phaser.GameObjects.Sprite} */
        this.jellyfish;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish1;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fish4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.snorkbubbles;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cavebubbles;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 1284, 720),
            'pet': () => this.triggerRoom(310, 818, 520),
            'cave': () => { this.triggerRoom(806, 1180, 614); this.world.client.stampEarned(10); },
            'stage1': () => this.unimplementedPrompt(),
            'stage2': () => this.unimplementedPrompt(),
            'pizza': () => this.triggerRoom(330, 1200, 400),
            'forest': () => this.triggerRoom(809, 270, 430)
        }
        this.roomAnims = true

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("plaza-pack", "assets/media/rooms/old/plaza/plaza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-18, -2, "plaza_underwater", "plaza");
        bg.setOrigin(0, 0);

        // pet_door
        const pet_door = this.add.image(322, 488, "plaza", "pet_door");
        pet_door.setOrigin(0.473118, 0.678218);

        // pizza_door
        const pizza_door = this.add.image(1185, 411, "plaza", "pizza_door");
        pizza_door.setOrigin(0.5311, 0.442211);

        // fishmask
        const fishmask = this.add.sprite(1387, 191, "plaza_underwater", "fish_mask0001");

        // jellyfish
        const jellyfish = this.add.sprite(-25, 245, "plaza_underwater", "jellyfish0001");
        jellyfish.angle = 70;

        // fish1
        const fish1 = this.add.sprite(746, 223, "plaza_underwater", "fish0001");

        // fish2
        const fish2 = this.add.sprite(725, 219, "plaza_underwater", "fish0001");

        // fish3
        const fish3 = this.add.sprite(751, 208, "plaza_underwater", "fish0001");

        // fish4
        const fish4 = this.add.sprite(729, 202, "plaza_underwater", "fish0001");

        // snorkbubbles
        const snorkbubbles = this.add.sprite(288, 60, "plaza_underwater", "bubbles0084");

        // cavebubbles
        const cavebubbles = this.add.sprite(558, 448, "plaza_underwater", "snork_bubbles0084");

        // oct_eye
        this.add.image(988, 499, "plaza_underwater", "oct_eye");

        // water_base
        const water_base = this.add.image(715.2447296925702, 991.9037571357842, "plaza_underwater", "water_base");
        water_base.setOrigin(0.47762917205877675, 0.9495248886520194);

        // water
        const water = this.add.image(748, 221, "plaza_underwater", "water");

        // water_top
        const water_top = this.add.image(749, 178, "plaza_underwater", "water_top");

        // lists
        const sort = [water_base, water_top, water];

        // pet_door (components)
        const pet_doorButton = new Button(pet_door);
        pet_doorButton.spriteName = "pet_door";
        pet_doorButton.activeFrame = false;
        pet_doorButton.pixelPerfect = true;
        const pet_doorMoveTo = new MoveTo(pet_door);
        pet_doorMoveTo.x = 340;
        pet_doorMoveTo.y = 540;

        // pizza_door (components)
        const pizza_doorButton = new Button(pizza_door);
        pizza_doorButton.spriteName = "pizza_door";
        pizza_doorButton.activeFrame = false;
        pizza_doorButton.pixelPerfect = true;
        const pizza_doorMoveTo = new MoveTo(pizza_door);
        pizza_doorMoveTo.x = 1152;
        pizza_doorMoveTo.y = 500;

        this.fishmask = fishmask;
        this.jellyfish = jellyfish;
        this.fish1 = fish1;
        this.fish2 = fish2;
        this.fish3 = fish3;
        this.fish4 = fish4;
        this.snorkbubbles = snorkbubbles;
        this.cavebubbles = cavebubbles;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.jellyfish.play("jellylegs")
        this.fish1.play('fish')
        this.fish2.play('fish')
        this.fish3.play('fish')
        this.fish4.play('fish')
        this.fishmask.play('fishmask')
        this.snorkbubbles.play('snorkbubbles')
        this.cavebubbles.play('cavebubbles')
        this.jfTween()
    }

    jfTween() {
        let tween = this.tweens.add({
            targets: this.jellyfish,
            y: 240,
            delay: 100,
            duration: 300,
            onComplete: () => this.onjfTweenComplete()
        });

        let tween2 = this.tweens.add({
            targets: this.jellyfish,
            x: 1600,
            duration: 10000
        });
    }

    onjfTweenComplete() {
        let tween = this.tweens.add({
            targets: this.jellyfish,
            y: 250,
            delay: 100,
            duration: 300,
            onComplete: () => this.jfTween()
        });
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
