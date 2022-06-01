import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Text>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'lodge': () => this.triggerRoom(220, 320, 640),
            'dock': () => this.triggerRoom(800, 436, 280),
            'beach': () => this.triggerRoom(400, 920, 360),
            'mtn': () => this.triggerRoom(230, 840, 320),
            'phone': null
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("village-pack", "assets/media/rooms/old/village/village-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-58, -3, "village-underwater", "bg");
        bg.setOrigin(0, 0);

        // lodge_door
        const lodge_door = this.add.image(1075, 318, "village", "lodge_door");
        lodge_door.setOrigin(0.27807486631016043, 0.5560538116591929);

        // lodge_stairs
        this.add.image(972, 444, "village", "lodge_stairs");

        // lodge_front
        const lodge_front = this.add.image(1087, 389, "village", "lodge_front");
        lodge_front.setOrigin(0.4807692307692308, 0.5352112676056338);

        // lodge_snow
        const lodge_snow = this.add.image(1104, 429, "village", "lodge_snow");
        lodge_snow.setOrigin(0.5368217054263565, 0.4838709677419355);

        // phone
        this.add.image(1373, 316, "village", "phone");

        // phone_door
        const phone_door = this.add.image(1350, 387, "village", "phone_door");
        phone_door.setOrigin(0.22797927461139897, 0.6206896551724138);

        // phone_snow
        const phone_snow = this.add.image(1361, 595, "village", "phone_snow");
        phone_snow.setOrigin(0.509090909090909, 0.5272727272727272);

        // lift
        this.add.image(348, 200, "village", "lift");

        // smoke
        const smoke = this.add.sprite(1110, 32, "village", "smoke0001");

        // left_sign
        const left_sign = this.add.image(133, 677, "village", "left_sign");
        left_sign.setOrigin(0.4444444444444444, 0.5217391304347826);

        // right_sign
        const right_sign = this.add.image(1471, 668, "village", "right_sign");
        right_sign.setOrigin(0.4861111111111111, 0.7831325301204819);

        // chair
        const chair = this.add.sprite(292, 150, "village", "chair0001");

        // tour
        const tour = this.add.image(805, 225, "village-underwater", "tour");
        tour.scaleX = 0.8;
        tour.scaleY = 0.8;

        // corral_stuff
        const corral_stuff = this.add.image(1243, 840, "village-underwater", "corral_stuff");

        // other_seaweed
        const other_seaweed = this.add.image(75, 861, "village-underwater", "other_seaweed");

        // epf_seaweed
        this.add.image(1416, 236, "village-underwater", "epf_seaweed");

        // pink_hanging_thing
        this.add.image(1111, 268, "village-underwater", "pink_hanging_thing");

        // green_ground_thing
        this.add.image(1122, 370, "village-underwater", "green_ground_thing");

        // tour_hat
        const tour_hat = this.add.image(979, 242, "village-underwater", "tour_hat");
        tour_hat.scaleX = 0.8;
        tour_hat.scaleY = 0.8;

        // bell
        const bell = this.add.image(935, 238, "village-underwater", "bell");
        bell.scaleX = 0.8;
        bell.scaleY = 0.8;

        // pencil_right
        this.add.image(663, 226, "village-underwater", "pencil_right");

        // pencil_left
        this.add.image(644, 232, "village-underwater", "pencil_left");

        // pink_rocks
        const pink_rocks = this.add.image(358, 733, "village-underwater", "pink_rocks");
        pink_rocks.scaleX = 0.8;
        pink_rocks.scaleY = 0.8;

        // book
        const book = this.add.image(1055, 225, "village-underwater", "book");
        book.scaleX = 0.8;
        book.scaleY = 0.8;

        // water
        const water = this.add.image(760.8552377619857, 1089.8457622740705, "village-underwater", "water");
        water.setOrigin(0.49815013985999157, 1.0247343711171153);

        // top_water_2
        this.add.image(742, 243, "village-underwater", "top_water_2");

        // top_water
        this.add.image(735, 208, "village-underwater", "top_water");

        // container_1
        const container_1 = this.add.container(317.2416173750365, 641.6861895899656);

        // sign
        const sign = this.add.image(38.758382624963474, 17.31381041003442, "village-underwater", "sign");
        sign.scaleX = 0.8;
        sign.scaleY = 0.8;
        container_1.add(sign);

        // text
        const text = this.add.text(5.194143123010349, 56.66573912097192, "", {});
        text.angle = -5;
        text.setOrigin(0.10682196235794411, 1.0621405897369747);
        text.text = "CPF Island\nflooded\nbe careful!";
        text.setStyle({ "color": "#a4ecfdff", "fontFamily": "Burbank Small", "fontSize": "24px" });
        container_1.add(text);

        // lists
        const sort = [water, sign, corral_stuff, other_seaweed, text];

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

        // chair (components)
        const chairAnimation = new Animation(chair);
        chairAnimation.key = "chair";
        chairAnimation.end = 179;
        chairAnimation.repeatDelay = 1500;

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
