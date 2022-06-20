import RoomScene from '@scenes/rooms/RoomScene'


/* START OF COMPILED CODE */

export default class Rink extends RoomScene {

    constructor() {
        super("Rink");

        /** @type {Phaser.GameObjects.Sprite} */
        this.plant40001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant30001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant100001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant120001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant80001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.plant90001;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 560, 400)
        }
        this.music='bubble_boogie'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("rink-pack", "assets/media/rooms/old/rink/rink-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rinkuw
        this.add.image(827, 405, "rinkuw", "rinkuw");

        // plant15
        this.add.image(829, 594, "rinkuw", "plant15");

        // rock2
        this.add.image(161, 622, "rinkuw", "rock2");

        // rock3
        this.add.image(1401, 634, "rinkuw", "rock3");

        // ball
        const ball = this.add.image(765, 537, "rink", "ball");
        ball.setOrigin(0.5, 0.7037037);
        ball.visible = false;

        // bottomuw
        const bottomuw = this.add.image(-27, 965, "rinkuw", "bottomuw");
        bottomuw.setOrigin(0, 0.9998385876423137);

        // planks
        this.add.image(775, 329, "rinkuw", "planks");

        // door
        this.add.image(773, 270, "rinkuw", "door");

        // goal1
        this.add.image(1352, 472, "rinkuw", "goal1");

        // goal2
        this.add.image(252, 475, "rinkuw", "goal2");

        // plant2_1
        const plant2_1 = this.add.image(95, 809, "rinkuw", "plant2");
        plant2_1.flipX = true;

        // plant2
        this.add.image(1392, 797, "rinkuw", "plant2");

        // plant16
        this.add.image(222, 904, "rinkuw", "plant16");

        // plant17
        this.add.image(1412, 880, "rinkuw", "plant17");

        // plant40001
        const plant40001 = this.add.sprite(1290, 816, "rinkuw", "plant40001");

        // plant30001
        const plant30001 = this.add.sprite(176, 827, "rinkuw", "plant30001");

        // rock1
        this.add.image(1022, 310, "rinkuw", "rock1");

        // rock5
        const rock5 = this.add.image(780, 548, "rinkuw", "rock5");
        rock5.scaleX = 0.3;
        rock5.scaleY = 0.3;

        // jersey1
        this.add.image(582, 503, "rinkuw", "jersey1");

        // jersey2
        this.add.image(1070, 593, "rinkuw", "jersey2");

        // plant100001
        const plant100001 = this.add.sprite(992, 645, "rinkuw", "plant100001");

        // plant120001
        const plant120001 = this.add.sprite(508, 645, "rinkuw", "plant120001");

        // plant80001
        const plant80001 = this.add.sprite(1070, 280, "rinkuw", "plant80001");

        // plant90001
        const plant90001 = this.add.sprite(664, 314, "rinkuw", "plant90001");

        // water
        this.add.image(821, 553, "water");

        // lists
        const sort = [ball, plant120001, plant100001];

        this.plant40001 = plant40001;
        this.plant30001 = plant30001;
        this.plant100001 = plant100001;
        this.plant120001 = plant120001;
        this.plant80001 = plant80001;
        this.plant90001 = plant90001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create();
        this.plant40001.play('underwaterrink_plant3');
        this.plant30001.play('underwaterrink_plant2')
        this.plant100001.play('underwaterrink_plant')
        this.plant120001.play('underwaterrink_plant1')
        this.plant80001.play('underwaterrink_plant4')
        this.plant90001.play('underwaterrink_plant5')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
