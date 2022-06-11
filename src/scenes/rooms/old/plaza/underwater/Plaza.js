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
        /** @type {Phaser.GameObjects.Sprite} */
        this.far_back_seaweed;
        /** @type {Phaser.GameObjects.Sprite} */
        this.left_pet_seaweed;
        /** @type {Phaser.GameObjects.Sprite} */
        this.middle_seaweed;
        /** @type {Phaser.GameObjects.Sprite} */
        this.leftist_puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lefter_puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.righter_puffle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.rightist_puffle;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
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

        // far_back_seaweed
        const far_back_seaweed = this.add.sprite(23, 278, "plaza_underwater", "far_back_seaweed0001");

        // left_pet_seaweed
        const left_pet_seaweed = this.add.sprite(126, 391, "plaza_underwater", "left_pet_seaweed0001");

        // middle_seaweed
        const middle_seaweed = this.add.sprite(952, 431, "plaza_underwater", "middle_seaweed0001");

        // leftist_puffle
        const leftist_puffle = this.add.sprite(433, 388, "plaza_underwater", "leftist_puffle0001");

        // oct_eye
        this.add.image(988, 499, "plaza_underwater", "oct_eye");

        // lefter_puffle
        const lefter_puffle = this.add.sprite(466, 384, "plaza_underwater", "lefter_puffle0001");

        // righter_puffle
        const righter_puffle = this.add.sprite(507, 368, "plaza_underwater", "righter_puffle0001");

        // rightist_puffle
        const rightist_puffle = this.add.sprite(538, 354, "plaza_underwater", "rightist_puffle0001");

        // water_base
        const water_base = this.add.image(715, 990, "plaza_underwater", "water_base");
        water_base.setOrigin(0.47762917205877675, 0.9495248886520194);

        // water
        const water = this.add.image(748, 221, "plaza_underwater", "water");

        // water_top
        const water_top = this.add.image(749, 178, "plaza_underwater", "water_top");

        // lists
        const sort = [water_base, water_top, water, middle_seaweed, left_pet_seaweed, far_back_seaweed];

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
        this.far_back_seaweed = far_back_seaweed;
        this.left_pet_seaweed = left_pet_seaweed;
        this.middle_seaweed = middle_seaweed;
        this.leftist_puffle = leftist_puffle;
        this.lefter_puffle = lefter_puffle;
        this.righter_puffle = righter_puffle;
        this.rightist_puffle = rightist_puffle;
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
        this.jfTween2()
        this.far_back_seaweed.play('far_back_seaweed')
        this.left_pet_seaweed.play('left_pet_seaweed')
        this.middle_seaweed.play('middle_seaweed')
        this.leftist_puffle.play('lefist_puffle')
        this.lefter_puffle.play('lefter_puffle')
        this.righter_puffle.play('righter_puffle')
        this.rightist_puffle.play('rightist_puffle')
    }

    jfTween() {
        let tween = this.tweens.add({
            targets: this.jellyfish,
            y: 240,
            delay: 100,
            duration: 300,
            onComplete: () => this.onjfTweenComplete()
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

    jfTween2(){
        let tween2 = this.tweens.add({
            targets: this.jellyfish,
            x: 1600,
            duration: 20000,
            onComplete: () => this.onjfTween2Complete()
        });
    }

    onjfTween2Complete(){
        this.jellyfish.x = -200
        this.jfTween2()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
