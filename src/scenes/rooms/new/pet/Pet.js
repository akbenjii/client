import RoomScene from '@scenes/rooms/RoomScene'

import { MoveTo, Button, SimpleButton, ShowHint } from '@components/components'


/* START OF COMPILED CODE */

export default class Pet extends RoomScene {

    constructor() {
        super("Pet");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            //'adoption': () => this.unimplementedPrompt(),
            'adoption': () => null,
            'cannon': () => this.triggerGame("PuffleLaunch", 925),
            'hotel': () => this.unimplementedPrompt(),
            'park': () => this.triggerGame("PuffleRoundup", 925),
            'plaza': () => this.triggerRoom(300, 1200, 400),
            'pufflescape': () => this.unimplementedPrompt()
            //                                    id   xpos  ypos
        }

        this.music = "659"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("petShop-pack-new", "assets/media/rooms/new/petShop/petShop-pack-new.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(938, 325, "pet-new", "bg");

        // pufflescapebg
        const pufflescapebg = this.add.sprite(1001, 200, "pet-new", "pufflescapebg");

        // pufflescape
        const pufflescape = this.add.sprite(1013, 234, "pet-new", "pufflescape0001");

        // pufflescapefg
        const pufflescapefg = this.add.sprite(1020, 136, "pet-new", "pufflescapefg");

        // cannon_layer1
        const cannon_layer1 = this.add.sprite(1215, 236, "pet-new", "cannon_layer1");

        // cannon_layer2
        const cannon_layer2 = this.add.sprite(1208, 182, "pet-new", "cannon_layer20001");

        // cannonlayer3
        const cannonlayer3 = this.add.sprite(1231, 302, "pet-new", "cannonlayer3");
        cannonlayer3.scaleX = 1.02;

        // cannonlayer4
        const cannonlayer4 = this.add.sprite(1259, 249, "pet-new", "cannonlayer40001");

        // cannon_layer5
        const cannon_layer5 = this.add.sprite(1230, 211, "pet-new", "cannon_layer5");

        // plazadoor
        const plazadoor = this.add.sprite(776, 211, "pet-new", "plazadoor");

        // main
        const main = this.add.sprite(784, 497, "pet-new", "main");

        // parkdoor
        const parkdoor = this.add.sprite(1479, 362, "pet-new", "parkdoor");

        // mainbuthigher
        const mainbuthigher = this.add.sprite(790, 496, "pet-new", "mainbuthigher");

        // oberry_fall
        const oberry_fall = this.add.sprite(583, 181, "pet-new", "oberry_fall0001");

        // sometubes
        const sometubes = this.add.sprite(855, 217, "pet-new", "sometubes");

        // oberry_machine
        const oberry_machine = this.add.sprite(567, 394, "pet-new", "oberry_machine");

        // oberry_pad
        const oberry_pad = this.add.sprite(610, 442, "pet-new", "oberry_pad");

        // oberry_shoot
        const oberry_shoot = this.add.sprite(507, 312, "pet-new", "oberry_shoot");

        // pufflearea
        const pufflearea = this.add.sprite(318, 360, "pet-new", "pufflearea");

        // purple_body
        const purple_body = this.add.sprite(291, 293, "pet-new", "purple_body");

        // purple_eyes
        const purple_eyes = this.add.sprite(292, 294, "pet-new", "purple_eyes0001");

        // purple_jump
        const purple_jump = this.add.sprite(291, 268, "pet-new", "purple_jump0001");
        purple_jump.visible = false;

        // white_lookaround
        const white_lookaround = this.add.sprite(387, 296, "pet-new", "white_lookaround0001");

        // green_body
        const green_body = this.add.sprite(239, 361, "pet-new", "green_body");

        // green_eyes
        const green_eyes = this.add.sprite(241, 362, "pet-new", "green_eyes0001");

        // green_jump
        const green_jump = this.add.sprite(240, 336, "pet-new", "green_jump0001");
        green_jump.visible = false;

        // brown_body
        const brown_body = this.add.sprite(295, 354, "pet-new", "brown_body");

        // brown_eyes
        const brown_eyes = this.add.sprite(301, 356, "pet-new", "brown_eyes0001");

        // brown_jump
        const brown_jump = this.add.sprite(300, 329, "pet-new", "brown_jump0001");
        brown_jump.visible = false;

        // yellow_body
        const yellow_body = this.add.sprite(357, 355, "pet-new", "yellow_body");

        // yellow_eyes
        const yellow_eyes = this.add.sprite(364, 357, "pet-new", "yellow_eyes0001");

        // yellow_jump
        const yellow_jump = this.add.sprite(363, 330, "pet-new", "yellow_jump0001");
        yellow_jump.visible = false;

        // border_idle
        const border_idle = this.add.sprite(280, 402, "pet-new", "border_idle0001");

        // border_jump
        const border_jump = this.add.sprite(280, 371, "pet-new", "border_jump0001");
        border_jump.visible = false;

        // tabby_idle
        const tabby_idle = this.add.sprite(337, 404, "pet-new", "tabby_idle0001");

        // tabby_jump
        const tabby_jump = this.add.sprite(338, 371, "pet-new", "tabby_jump0001");
        tabby_jump.visible = false;

        // red_body
        const red_body = this.add.sprite(389, 390, "pet-new", "red_body");

        // red_eyes
        const red_eyes = this.add.sprite(390, 391, "pet-new", "red_eyes0001");

        // red_jump
        const red_jump = this.add.sprite(389, 365, "pet-new", "red_jump0001");
        red_jump.visible = false;

        // blue_body
        const blue_body = this.add.sprite(237, 431, "pet-new", "blue_body");

        // blue_eyes
        const blue_eyes = this.add.sprite(245, 433, "pet-new", "blue_eyes0001");

        // blue_jump
        const blue_jump = this.add.sprite(243, 406, "pet-new", "blue_jump0001");
        blue_jump.visible = false;

        // pufflearea_front
        const pufflearea_front = this.add.sprite(413, 270, "pet-new", "pufflearea_front");

        // light
        const light = this.add.sprite(106, 334, "pet-new", "light");

        // main_fg
        const main_fg = this.add.sprite(781, 411, "pet-new", "main_fg");

        // pufflearea_floor
        const pufflearea_floor = this.add.sprite(332, 470, "pet-new", "pufflearea_floor");

        // orange_idle
        const orange_idle = this.add.sprite(400, 182, "pet-new", "orange_idle0001");

        // orange_jump
        const orange_jump = this.add.sprite(400, 157, "pet-new", "orange_jump0001");
        orange_jump.visible = false;

        // pink_body
        const pink_body = this.add.sprite(278, 204, "pet-new", "pink_body");

        // pink_eyes
        const pink_eyes = this.add.sprite(284, 206, "pet-new", "pink_eyes0001");

        // pink_jump
        const pink_jump = this.add.sprite(279, 179, "pet-new", "pink_jump0001");
        pink_jump.visible = false;

        // black_idle
        const black_idle = this.add.sprite(456, 170, "pet-new", "black_idle");

        // apollo_idle
        const apollo_idle = this.add.sprite(343, 196, "pet-new", "apollo_idle0001");

        // rug
        const rug = this.add.sprite(775, 702, "pet-new", "rug");

        // rug_puffle_blue
        const rug_puffle_blue = this.add.sprite(790, 692, "pet-new", "rug_puffle_blue");

        // cart_back
        const cart_back = this.add.sprite(1235, 462, "pet-new", "cart_back");

        // cart_front
        const cart_front = this.add.sprite(1224, 532, "pet-new", "cart_front");

        // railing_left
        const railing_left = this.add.sprite(1336, 499, "pet-new", "railing_left");

        // railing_right
        const railing_right = this.add.sprite(1446, 582, "pet-new", "railing_right");

        // surfboard
        const surfboard = this.add.sprite(1470, 610, "pet-new", "surfboard");

        // highbedback
        const highbedback = this.add.sprite(1346, 699, "pet-new", "highbedback");

        // highbedfront
        const highbedfront = this.add.sprite(1342, 854, "pet-new", "highbedfront");

        // carealtar
        const carealtar = this.add.sprite(272, 529, "pet-new", "carealtar");

        // dualfood
        const dualfood = this.add.sprite(1040, 883, "pet-new", "dualfood");

        // skateboard
        const skateboard = this.add.sprite(979, 798, "pet-new", "skateboard");

        // ball
        const ball = this.add.sprite(490, 431, "pet-new", "ball");

        // stackedbowls
        const stackedbowls = this.add.sprite(918, 417, "pet-new", "stackedbowls");

        // yellowbowl
        const yellowbowl = this.add.sprite(953, 453, "pet-new", "yellowbowl");

        // hotel_door
        const hotel_door = this.add.sprite(79, 554, "pet-new", "hotel_door");

        // hotel_arch
        const hotel_arch = this.add.sprite(34, 571, "pet-new", "hotel_arch");

        // stuff
        const stuff = this.add.sprite(296, 601, "pet-new", "stuff");

        // skate
        const skate = this.add.sprite(240, 673, "pet-new", "skate");

        // bed
        const bed = this.add.sprite(326, 871, "pet-new", "bed");

        // clawything
        const clawything = this.add.sprite(557, 870, "pet-new", "clawything");

        // clawyfront
        const clawyfront = this.add.sprite(580, 822, "pet-new", "clawyfront");

        // fg
        const fg = this.add.sprite(698, 868, "pet-new", "fg");

        // cannon_btn
        const cannon_btn = this.add.rectangle(1251, 320, 150, 230);
        cannon_btn.fillColor = 61161;
        cannon_btn.fillAlpha = 0.5;

        // puffle_btn
        const puffle_btn = this.add.rectangle(321, 347, 250, 250);
        puffle_btn.angle = -5;
        puffle_btn.fillColor = 61161;
        puffle_btn.fillAlpha = 0.5;

        // pufflescape_btn
        const pufflescape_btn = this.add.rectangle(1009, 194, 150, 180);
        pufflescape_btn.fillColor = 61161;
        pufflescape_btn.fillAlpha = 0.5;

        // lists
        const sort = [];

        // plazadoor (components)
        const plazadoorButton = new Button(plazadoor);
        plazadoorButton.spriteName = "plazadoor";
        plazadoorButton.hoverCallback = () => this.sound.add("petShop-DoorPetOpen").play();
        plazadoorButton.hoverOutCallback = () => this.sound.add("petShop-DoorPetClose").play();
        plazadoorButton.activeFrame = false;
        const plazadoorMoveTo = new MoveTo(plazadoor);
        plazadoorMoveTo.x = 775;
        plazadoorMoveTo.y = 300;

        // parkdoor (components)
        const parkdoorButton = new Button(parkdoor);
        parkdoorButton.spriteName = "parkdoor";
        parkdoorButton.hoverCallback = () => this.sound.add("petShop-DoorRightOpen").play();
        parkdoorButton.hoverOutCallback = () => this.sound.add("petShop-DoorRightClose").play();
        parkdoorButton.activeFrame = false;
        const parkdoorShowHint = new ShowHint(parkdoor);
        parkdoorShowHint.text = "Puffle Roundup\n";
        const parkdoorMoveTo = new MoveTo(parkdoor);
        parkdoorMoveTo.x = 1440;
        parkdoorMoveTo.y = 496;

        // carealtar (components)
        const carealtarButton = new Button(carealtar);
        carealtarButton.spriteName = "carealtar";
        carealtarButton.activeFrame = false;

        // hotel_door (components)
        const hotel_doorButton = new Button(hotel_door);
        hotel_doorButton.spriteName = "hotel_door";
        hotel_doorButton.hoverCallback = () => this.sound.add("petShop-DoorMiddleOpen").play();
        hotel_doorButton.hoverOutCallback = () => this.sound.add("petShop-DoorMiddleClose").play();
        hotel_doorButton.activeFrame = false;
        const hotel_doorMoveTo = new MoveTo(hotel_door);
        hotel_doorMoveTo.x = 120;
        hotel_doorMoveTo.y = 704;

        // cannon_btn (components)
        const cannon_btnSimpleButton = new SimpleButton(cannon_btn);
        cannon_btnSimpleButton.hoverCallback = () => this.onCannonOver();
        cannon_btnSimpleButton.hoverOutCallback = () => this.onCannonOut();
        const cannon_btnMoveTo = new MoveTo(cannon_btn);
        cannon_btnMoveTo.x = 1150;
        cannon_btnMoveTo.y = 420;
        const cannon_btnShowHint = new ShowHint(cannon_btn);
        cannon_btnShowHint.text = "Puffle Launch";

        // puffle_btn (components)
        const puffle_btnSimpleButton = new SimpleButton(puffle_btn);
        puffle_btnSimpleButton.hoverCallback = () => this.onPufflesOver();
        puffle_btnSimpleButton.hoverOutCallback = () => this.onPufflesOut();
        const puffle_btnMoveTo = new MoveTo(puffle_btn);
        puffle_btnMoveTo.x = 350;
        puffle_btnMoveTo.y = 450;

        // pufflescape_btn (components)
        const pufflescape_btnSimpleButton = new SimpleButton(pufflescape_btn);
        pufflescape_btnSimpleButton.hoverCallback = () => this.onPufflescapeOver();
        pufflescape_btnSimpleButton.hoverOutCallback = () => this.onPufflescapeOut();
        const pufflescape_btnMoveTo = new MoveTo(pufflescape_btn);
        pufflescape_btnMoveTo.x = 1000;
        pufflescape_btnMoveTo.y = 300;

        this.bg = bg;
        this.pufflescapebg = pufflescapebg;
        this.pufflescape = pufflescape;
        this.pufflescapefg = pufflescapefg;
        this.cannon_layer1 = cannon_layer1;
        this.cannon_layer2 = cannon_layer2;
        this.cannonlayer3 = cannonlayer3;
        this.cannonlayer4 = cannonlayer4;
        this.cannon_layer5 = cannon_layer5;
        this.plazadoor = plazadoor;
        this.main = main;
        this.parkdoor = parkdoor;
        this.mainbuthigher = mainbuthigher;
        this.oberry_fall = oberry_fall;
        this.sometubes = sometubes;
        this.oberry_machine = oberry_machine;
        this.oberry_pad = oberry_pad;
        this.oberry_shoot = oberry_shoot;
        this.pufflearea = pufflearea;
        this.purple_body = purple_body;
        this.purple_eyes = purple_eyes;
        this.purple_jump = purple_jump;
        this.white_lookaround = white_lookaround;
        this.green_body = green_body;
        this.green_eyes = green_eyes;
        this.green_jump = green_jump;
        this.brown_body = brown_body;
        this.brown_eyes = brown_eyes;
        this.brown_jump = brown_jump;
        this.yellow_body = yellow_body;
        this.yellow_eyes = yellow_eyes;
        this.yellow_jump = yellow_jump;
        this.border_idle = border_idle;
        this.border_jump = border_jump;
        this.tabby_idle = tabby_idle;
        this.tabby_jump = tabby_jump;
        this.red_body = red_body;
        this.red_eyes = red_eyes;
        this.red_jump = red_jump;
        this.blue_body = blue_body;
        this.blue_eyes = blue_eyes;
        this.blue_jump = blue_jump;
        this.pufflearea_front = pufflearea_front;
        this.light = light;
        this.main_fg = main_fg;
        this.pufflearea_floor = pufflearea_floor;
        this.orange_idle = orange_idle;
        this.orange_jump = orange_jump;
        this.pink_body = pink_body;
        this.pink_eyes = pink_eyes;
        this.pink_jump = pink_jump;
        this.black_idle = black_idle;
        this.apollo_idle = apollo_idle;
        this.rug = rug;
        this.rug_puffle_blue = rug_puffle_blue;
        this.cart_back = cart_back;
        this.cart_front = cart_front;
        this.railing_left = railing_left;
        this.railing_right = railing_right;
        this.surfboard = surfboard;
        this.highbedback = highbedback;
        this.highbedfront = highbedfront;
        this.carealtar = carealtar;
        this.dualfood = dualfood;
        this.skateboard = skateboard;
        this.ball = ball;
        this.stackedbowls = stackedbowls;
        this.yellowbowl = yellowbowl;
        this.hotel_door = hotel_door;
        this.hotel_arch = hotel_arch;
        this.stuff = stuff;
        this.skate = skate;
        this.bed = bed;
        this.clawything = clawything;
        this.clawyfront = clawyfront;
        this.fg = fg;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflescapebg;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflescape;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflescapefg;
    /** @type {Phaser.GameObjects.Sprite} */
    cannon_layer1;
    /** @type {Phaser.GameObjects.Sprite} */
    cannon_layer2;
    /** @type {Phaser.GameObjects.Sprite} */
    cannonlayer3;
    /** @type {Phaser.GameObjects.Sprite} */
    cannonlayer4;
    /** @type {Phaser.GameObjects.Sprite} */
    cannon_layer5;
    /** @type {Phaser.GameObjects.Sprite} */
    plazadoor;
    /** @type {Phaser.GameObjects.Sprite} */
    main;
    /** @type {Phaser.GameObjects.Sprite} */
    parkdoor;
    /** @type {Phaser.GameObjects.Sprite} */
    mainbuthigher;
    /** @type {Phaser.GameObjects.Sprite} */
    oberry_fall;
    /** @type {Phaser.GameObjects.Sprite} */
    sometubes;
    /** @type {Phaser.GameObjects.Sprite} */
    oberry_machine;
    /** @type {Phaser.GameObjects.Sprite} */
    oberry_pad;
    /** @type {Phaser.GameObjects.Sprite} */
    oberry_shoot;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflearea;
    /** @type {Phaser.GameObjects.Sprite} */
    purple_body;
    /** @type {Phaser.GameObjects.Sprite} */
    purple_eyes;
    /** @type {Phaser.GameObjects.Sprite} */
    purple_jump;
    /** @type {Phaser.GameObjects.Sprite} */
    white_lookaround;
    /** @type {Phaser.GameObjects.Sprite} */
    green_body;
    /** @type {Phaser.GameObjects.Sprite} */
    green_eyes;
    /** @type {Phaser.GameObjects.Sprite} */
    green_jump;
    /** @type {Phaser.GameObjects.Sprite} */
    brown_body;
    /** @type {Phaser.GameObjects.Sprite} */
    brown_eyes;
    /** @type {Phaser.GameObjects.Sprite} */
    brown_jump;
    /** @type {Phaser.GameObjects.Sprite} */
    yellow_body;
    /** @type {Phaser.GameObjects.Sprite} */
    yellow_eyes;
    /** @type {Phaser.GameObjects.Sprite} */
    yellow_jump;
    /** @type {Phaser.GameObjects.Sprite} */
    border_idle;
    /** @type {Phaser.GameObjects.Sprite} */
    border_jump;
    /** @type {Phaser.GameObjects.Sprite} */
    tabby_idle;
    /** @type {Phaser.GameObjects.Sprite} */
    tabby_jump;
    /** @type {Phaser.GameObjects.Sprite} */
    red_body;
    /** @type {Phaser.GameObjects.Sprite} */
    red_eyes;
    /** @type {Phaser.GameObjects.Sprite} */
    red_jump;
    /** @type {Phaser.GameObjects.Sprite} */
    blue_body;
    /** @type {Phaser.GameObjects.Sprite} */
    blue_eyes;
    /** @type {Phaser.GameObjects.Sprite} */
    blue_jump;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflearea_front;
    /** @type {Phaser.GameObjects.Sprite} */
    light;
    /** @type {Phaser.GameObjects.Sprite} */
    main_fg;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflearea_floor;
    /** @type {Phaser.GameObjects.Sprite} */
    orange_idle;
    /** @type {Phaser.GameObjects.Sprite} */
    orange_jump;
    /** @type {Phaser.GameObjects.Sprite} */
    pink_body;
    /** @type {Phaser.GameObjects.Sprite} */
    pink_eyes;
    /** @type {Phaser.GameObjects.Sprite} */
    pink_jump;
    /** @type {Phaser.GameObjects.Sprite} */
    black_idle;
    /** @type {Phaser.GameObjects.Sprite} */
    apollo_idle;
    /** @type {Phaser.GameObjects.Sprite} */
    rug;
    /** @type {Phaser.GameObjects.Sprite} */
    rug_puffle_blue;
    /** @type {Phaser.GameObjects.Sprite} */
    cart_back;
    /** @type {Phaser.GameObjects.Sprite} */
    cart_front;
    /** @type {Phaser.GameObjects.Sprite} */
    railing_left;
    /** @type {Phaser.GameObjects.Sprite} */
    railing_right;
    /** @type {Phaser.GameObjects.Sprite} */
    surfboard;
    /** @type {Phaser.GameObjects.Sprite} */
    highbedback;
    /** @type {Phaser.GameObjects.Sprite} */
    highbedfront;
    /** @type {Phaser.GameObjects.Sprite} */
    carealtar;
    /** @type {Phaser.GameObjects.Sprite} */
    dualfood;
    /** @type {Phaser.GameObjects.Sprite} */
    skateboard;
    /** @type {Phaser.GameObjects.Sprite} */
    ball;
    /** @type {Phaser.GameObjects.Sprite} */
    stackedbowls;
    /** @type {Phaser.GameObjects.Sprite} */
    yellowbowl;
    /** @type {Phaser.GameObjects.Sprite} */
    hotel_door;
    /** @type {Phaser.GameObjects.Sprite} */
    hotel_arch;
    /** @type {Phaser.GameObjects.Sprite} */
    stuff;
    /** @type {Phaser.GameObjects.Sprite} */
    skate;
    /** @type {Phaser.GameObjects.Sprite} */
    bed;
    /** @type {Phaser.GameObjects.Sprite} */
    clawything;
    /** @type {Phaser.GameObjects.Sprite} */
    clawyfront;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()

        this.apollo_idle.play("newpetapollo_idle")
        this.pink_eyes.play("newpetpink_eyes")
        this.orange_idle.play("newpetorange_idle")
        this.blue_eyes.play("newpetblue_eyes")
        this.red_eyes.play("newpetred_eyes")
        this.tabby_idle.play("newpettabby_idle")
        this.border_idle.play("newpetborder_idle")
        this.yellow_eyes.play("newpetyellow_eyes")
        this.brown_eyes.play("newpetbrown_eyes")
        this.green_eyes.play("newpetgreen_eyes")
        this.purple_eyes.play("newpetpurple_eyes")
        this.white_lookaround.play("newpetwhite_lookaround")
    }

    onPufflesOver(){
        this.light.setFrame("light-hover")

        this.pink_jump.visible = true
        this.pink_eyes.visible = false
        this.pink_body.visible = false
        this.pink_jump.play("newpetpink_jump")

        this.orange_jump.visible = true
        this.orange_idle.visible = false
        this.orange_jump.play("newpetorange_jump")

        this.blue_jump.visible = true
        this.blue_eyes.visible = false
        this.blue_body.visible = false
        this.blue_jump.play("newpetblue_jump")

        this.red_jump.visible = true
        this.red_eyes.visible = false
        this.red_body.visible = false
        this.red_jump.play("newpetred_jump")

        this.tabby_jump.visible = true
        this.tabby_idle.visible = false
        this.tabby_jump.play("newpettabby_jump")

        this.border_jump.visible = true
        this.border_idle.visible = false
        this.border_jump.play("newpetborder_jump")

        this.yellow_jump.visible = true
        this.yellow_eyes.visible = false
        this.yellow_body.visible = false
        this.yellow_jump.play("newpetyellow_jump")

        this.brown_jump.visible = true
        this.brown_eyes.visible = false
        this.brown_body.visible = false
        this.brown_jump.play("newpetbrown_jump")

        this.green_jump.visible = true
        this.green_eyes.visible = false
        this.green_body.visible = false
        this.green_jump.play("newpetgreen_jump")

        this.purple_jump.visible = true
        this.purple_eyes.visible = false
        this.purple_body.visible = false
        this.purple_jump.play("newpetpurple_jump")
    }

    onPufflesOut(){
        this.light.setFrame("light")

        this.pink_jump.visible = false
        this.pink_eyes.visible = true
        this.pink_body.visible = true
        this.pink_jump.stop("newpetpink_jump")
        this.pink_jump.setFrame("pink_jump0001")

        this.orange_jump.visible = false
        this.orange_idle.visible = true
        this.orange_jump.stop("newpetorange_jump")
        this.orange_jump.setFrame("orange_jump0001")

        this.blue_jump.visible = false
        this.blue_eyes.visible = true
        this.blue_body.visible = true
        this.blue_jump.stop("newpetblue_jump")
        this.blue_jump.setFrame("blue_jump0001")

        this.red_jump.visible = false
        this.red_eyes.visible = true
        this.red_body.visible = true
        this.red_jump.stop("newpetred_jump")
        this.red_jump.setFrame("red_jump0001")

        this.tabby_jump.visible = false
        this.tabby_idle.visible = true
        this.tabby_jump.stop("newpettabby_jump")
        this.tabby_jump.setFrame("tabby_jump0001")

        this.border_jump.visible = false
        this.border_idle.visible = true
        this.border_jump.stop("newpetborder_jump")
        this.border_jump.setFrame("border_jump0001")

        this.yellow_jump.visible = false
        this.yellow_eyes.visible = true
        this.yellow_body.visible = true
        this.yellow_jump.stop("newpetyellow_jump")
        this.yellow_jump.setFrame("yellow_jump0001")

        this.brown_jump.visible = false
        this.brown_eyes.visible = true
        this.brown_body.visible = true
        this.brown_jump.stop("newpetbrown_jump")
        this.brown_jump.setFrame("brown_jump0001")

        this.green_jump.visible = false
        this.green_eyes.visible = true
        this.green_body.visible = true
        this.green_jump.stop("newpetgreen_jump")
        this.green_jump.setFrame("green_jump0001")

        this.purple_jump.visible = false
        this.purple_eyes.visible = true
        this.purple_body.visible = true
        this.purple_jump.stop("newpetpurple_jump")
        this.purple_jump.setFrame("purple_jump0001")
    }

    onPufflescapeOver(){
        this.pufflescape.play("newpetpufflescape")
    }

    onPufflescapeOut(){
        this.pufflescape.stop("newpetpufflescape")
        this.pufflescape.setFrame("pufflescape0001")
    }

    onCannonOver(){
        this.cannon_layer2.play("newpetcannonlayer2")
        this.cannonlayer4.play("newpetcannonlayer4")
    }

    onCannonOut(){
        this.cannon_layer2.stop("newpetcannonlayer2")
        this.cannonlayer4.stop("newpetcannonlayer4")
        this.cannonlayer4.setFrame("cannonlayer40001")
        this.cannon_layer2.setFrame("cannon_layer20001")
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
