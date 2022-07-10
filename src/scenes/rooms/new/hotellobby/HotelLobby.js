import RoomScene from '@scenes/rooms/RoomScene'

import { MoveTo, SimpleButton, Button } from '@components/components'


/* START OF COMPILED CODE */

export default class HotelLobby extends RoomScene {

    constructor() {
        super("HotelLobby");

        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 680, 500),
            'pet': () => this.triggerRoom(310, 160, 760),
        }

        this.music = "362"

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("hotellobby-pack", "assets/media/rooms/new/hotellobby/hotellobby-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.sprite(801, 460, "hotellobby", "bg");

        // plaza_door
        const plaza_door = this.add.sprite(792, 179, "hotellobby", "plaza_door");

        // siaswingsfromthese
        const siaswingsfromthese = this.add.sprite(793.7252416029147, 1027.8686968776956, "hotellobby", "siaswingsfromthese");
        siaswingsfromthese.setOrigin(0.525065037637278, 4.470773396609027);

        // rightwall
        const rightwall = this.add.sprite(1195, 150, "hotellobby", "rightwall");

        // rightplant
        const rightplant = this.add.sprite(905, 223, "hotellobby", "rightplant");

        // rightside
        const rightside = this.add.sprite(1196.2276737601248, 321.8838806152344, "hotellobby", "rightside");
        rightside.setOrigin(0.33268774429199555, 0.5630493702986623);

        // rightpillar
        const rightpillar = this.add.sprite(954.6144395180386, 340.13791061636306, "hotellobby", "rightpillar");
        rightpillar.setOrigin(0.4396722720699601, 0.864839116529291);

        // petdoor
        const petdoor = this.add.sprite(1446, 347, "hotellobby", "petdoor");

        // petdoor_top
        const petdoor_top = this.add.sprite(1442.218573194217, 463.0863193865558, "hotellobby", "petdoor_top");
        petdoor_top.setOrigin(0.46641300060503743, 0.8365736033023212);

        // plantpot
        const plantpot = this.add.sprite(1526, 500, "hotellobby", "plantpot");

        // pufflebed
        const pufflebed = this.add.sprite(1395.0312613965439, 642.1724847150986, "hotellobby", "pufflebed");
        pufflebed.setOrigin(0.4946772604205707, 0.09509753683670752);

        // pufflebed2
        const pufflebed2 = this.add.sprite(1240.7344604740792, 753.4538372839936, "hotellobby", "pufflebed2");
        pufflebed2.setOrigin(0.46348975112602636, 0.08812134206798372);

        // table
        const table = this.add.sprite(1534, 847, "hotellobby", "table");

        // railingright_high
        const railingright_high = this.add.sprite(1212, 622, "hotellobby", "railingright_high");

        // railingright_midhigh
        const railingright_midhigh = this.add.sprite(1172, 666, "hotellobby", "railingright_midhigh");

        // railingright_mid
        const railingright_mid = this.add.sprite(1121, 706, "hotellobby", "railingright_mid");

        // railingright_midlow
        const railingright_midlow = this.add.sprite(1069, 752, "hotellobby", "railingright_midlow");

        // railingright_low
        const railingright_low = this.add.sprite(1041, 793, "hotellobby", "railingright_low");

        // sofa
        const sofa = this.add.sprite(784, 846, "hotellobby", "sofa");

        // leftplant
        const leftplant = this.add.sprite(669, 226, "hotellobby", "leftplant");

        // leftwall
        const leftwall = this.add.sprite(560, 217, "hotellobby", "leftwall");

        // checkinchair
        const checkinchair = this.add.sprite(409, 300, "hotellobby", "checkinchair");

        // checkindesk
        const checkindesk = this.add.sprite(430.2930045305314, 371.3375152938125, "hotellobby", "checkindesk");
        checkindesk.setOrigin(0.4693416355987188, 0.7296752946613536);

        // leftside
        const leftside = this.add.sprite(238, 223, "hotellobby", "leftside");

        // leftpillar
        const leftpillar = this.add.sprite(619.9896850585938, 344.7317181516938, "hotellobby", "leftpillar");
        leftpillar.setOrigin(0.5430912342357433, 0.8734573633764396);

        // elevator
        const elevator = this.add.sprite(52, 348, "hotellobby", "elevator");

        // countersign
        const countersign = this.add.sprite(192.18900686036332, 527.6931058060434, "hotellobby", "countersign");
        countersign.setOrigin(0.440825809548207, 0.1756125381976538);

        // counter
        const counter = this.add.sprite(88.07858138123586, 572.9136703872864, "hotellobby", "counter");
        counter.setOrigin(0.6189955986116528, 0.22728860159027062);

        // fruitbasket
        const fruitbasket = this.add.sprite(77, 814, "hotellobby", "fruitbasket");

        // loosefruit
        const loosefruit = this.add.sprite(43, 895, "hotellobby", "loosefruit");

        // fg_left
        const fg_left = this.add.sprite(89.2541285142728, 1012.1954297684733, "hotellobby", "fg_left");
        fg_left.setOrigin(0.5060270815889647, 1.020358296137574);

        // railingmid
        const railingmid = this.add.sprite(795.738296641923, 537.4298310605903, "hotellobby", "railingmid");
        railingmid.setOrigin(0.49041585489596434, 0.382200843385472);

        // fountain
        const fountain = this.add.sprite(794.6915216894221, 631.4956089044273, "hotellobby", "fountain0001");
        fountain.setOrigin(0.3921783675795987, 0.9623247234494865);

        // questboard
        const questboard = this.add.sprite(801, 651, "hotellobby", "questboard");

        // railingleft_high
        const railingleft_high = this.add.sprite(373, 637, "hotellobby", "railingleft_high");

        // railingleft_mid
        const railingleft_mid = this.add.sprite(452, 685, "hotellobby", "railingleft_mid");

        // seat
        const seat = this.add.sprite(316, 647, "hotellobby", "seat");

        // eattable
        const eattable = this.add.sprite(327, 724, "hotellobby", "eattable");

        // seat2
        const seat2 = this.add.sprite(406, 754, "hotellobby", "seat2");

        // eattable2
        const eattable2 = this.add.sprite(406, 848, "hotellobby", "eattable2");

        // fg
        const fg = this.add.sprite(784, 1037.0886665440528, "hotellobby", "fg");
        fg.setOrigin(0.5, 1.258729020714004);

        // railingleft_low
        const railingleft_low = this.add.sprite(534, 791, "hotellobby", "railingleft_low");

        // railingleft_midlow
        const railingleft_midlow = this.add.sprite(508, 718, "hotellobby", "railingleft_midlow");

        // quest_hitbox
        const quest_hitbox = this.add.image(801, 578, "hotellobby", "quest_hitbox");
        quest_hitbox.alpha = 0.01;
        quest_hitbox.alphaTopLeft = 0.01;
        quest_hitbox.alphaTopRight = 0.01;
        quest_hitbox.alphaBottomLeft = 0.01;
        quest_hitbox.alphaBottomRight = 0.01;

        // eattablebtn2
        const eattablebtn2 = this.add.ellipse(405, 817, 128, 128);
        eattablebtn2.scaleX = 1.6181997944916466;
        eattablebtn2.scaleY = 1.0900520059204997;
        eattablebtn2.isFilled = true;
        eattablebtn2.fillColor = 2743514;
        eattablebtn2.fillAlpha = 0.01;
        eattablebtn2.smoothness = 20;

        // eattablebtn
        const eattablebtn = this.add.ellipse(325, 698, 128, 128);
        eattablebtn.scaleX = 1.330615400395316;
        eattablebtn.scaleY = 0.8890345800420394;
        eattablebtn.isFilled = true;
        eattablebtn.fillColor = 2743514;
        eattablebtn.fillAlpha = 0.01;
        eattablebtn.smoothness = 20;

        // lists
        const sort = [plaza_door, siaswingsfromthese, rightwall, rightplant, rightside, rightpillar, petdoor, petdoor_top, plantpot, pufflebed, pufflebed2, table, railingright_high, railingright_midhigh, railingright_mid, railingright_midlow, railingright_low, sofa, leftplant, leftwall, checkinchair, checkindesk, leftside, leftpillar, elevator, countersign, counter, fruitbasket, loosefruit, fg_left, railingmid, fountain, questboard, railingleft_high, railingleft_mid, seat, eattable, seat2, eattable2, fg, railingleft_low, railingleft_midlow];

        // plaza_door (components)
        const plaza_doorButton = new Button(plaza_door);
        plaza_doorButton.spriteName = "plaza_door";
        plaza_doorButton.hoverCallback = () => this.sound.play("hl_PlazaDoorOpen");
        plaza_doorButton.hoverOutCallback = () => this.sound.play("hl_PlazaDoorClose");
        plaza_doorButton.activeFrame = false;
        const plaza_doorMoveTo = new MoveTo(plaza_door);
        plaza_doorMoveTo.x = 796;
        plaza_doorMoveTo.y = 292;

        // petdoor (components)
        const petdoorButton = new Button(petdoor);
        petdoorButton.spriteName = "petdoor";
        petdoorButton.hoverCallback = () => this.sound.play("hl_PetDoorOpen");
        petdoorButton.hoverOutCallback = () => this.sound.play("hl_PetDoorClose");
        petdoorButton.activeFrame = false;
        const petdoorMoveTo = new MoveTo(petdoor);
        petdoorMoveTo.x = 1448;
        petdoorMoveTo.y = 460;

        // pufflebed (components)
        const pufflebedButton = new Button(pufflebed);
        pufflebedButton.spriteName = "pufflebed";
        pufflebedButton.activeFrame = false;
        const pufflebedMoveTo = new MoveTo(pufflebed);
        pufflebedMoveTo.x = 1364;
        pufflebedMoveTo.y = 672;

        // pufflebed2 (components)
        const pufflebed2Button = new Button(pufflebed2);
        pufflebed2Button.spriteName = "pufflebed2";
        pufflebed2Button.activeFrame = false;
        const pufflebed2MoveTo = new MoveTo(pufflebed2);
        pufflebed2MoveTo.x = 1212;
        pufflebed2MoveTo.y = 796;

        // elevator (components)
        const elevatorSimpleButton = new SimpleButton(elevator);
        elevatorSimpleButton.hoverCallback = () => {this.elevator.play("hotellobby_elevatoropen"); this.sound.play("hl_liftOpen")};
        elevatorSimpleButton.hoverOutCallback = () => {this.elevator.play("hotellobby_elevatorclose"); this.sound.play('hl_liftClose')};
        const elevatorMoveTo = new MoveTo(elevator);
        elevatorMoveTo.x = 72;
        elevatorMoveTo.y = 520;

        // quest_hitbox (components)
        const quest_hitboxSimpleButton = new SimpleButton(quest_hitbox);
        quest_hitboxSimpleButton.hoverCallback = () => {this.questboard.play("hotellobby_tasks"); this.sound.play('hl_paperRuffle')};
        quest_hitboxSimpleButton.hoverOutCallback = () => {this.questboard.stop("hotellobby_tasks"); this.questboard.setFrame("questboard")};

        // eattablebtn2 (components)
        const eattablebtn2SimpleButton = new SimpleButton(eattablebtn2);
        eattablebtn2SimpleButton.hoverCallback = () => {this.seat2.setFrame("seat2-hover"); this.eattable2.setFrame("eattable2-hover")};
        eattablebtn2SimpleButton.hoverOutCallback = () => {this.seat2.setFrame("seat2"); this.eattable2.setFrame("eattable2")};
        const eattablebtn2MoveTo = new MoveTo(eattablebtn2);
        eattablebtn2MoveTo.x = 380;
        eattablebtn2MoveTo.y = 764;

        // eattablebtn (components)
        const eattablebtnSimpleButton = new SimpleButton(eattablebtn);
        eattablebtnSimpleButton.hoverCallback = () => {this.seat.setFrame("seat-hover"); this.eattable.setFrame("eattable-hover")};
        eattablebtnSimpleButton.hoverOutCallback = () => {this.seat.setFrame("seat"); this.eattable.setFrame("eattable")};
        const eattablebtnMoveTo = new MoveTo(eattablebtn);
        eattablebtnMoveTo.x = 288;
        eattablebtnMoveTo.y = 656;

        this.bg = bg;
        this.plaza_door = plaza_door;
        this.siaswingsfromthese = siaswingsfromthese;
        this.rightwall = rightwall;
        this.rightplant = rightplant;
        this.rightside = rightside;
        this.rightpillar = rightpillar;
        this.petdoor = petdoor;
        this.petdoor_top = petdoor_top;
        this.plantpot = plantpot;
        this.pufflebed = pufflebed;
        this.pufflebed2 = pufflebed2;
        this.table = table;
        this.railingright_high = railingright_high;
        this.railingright_midhigh = railingright_midhigh;
        this.railingright_mid = railingright_mid;
        this.railingright_midlow = railingright_midlow;
        this.railingright_low = railingright_low;
        this.sofa = sofa;
        this.leftplant = leftplant;
        this.leftwall = leftwall;
        this.checkinchair = checkinchair;
        this.checkindesk = checkindesk;
        this.leftside = leftside;
        this.leftpillar = leftpillar;
        this.elevator = elevator;
        this.countersign = countersign;
        this.counter = counter;
        this.fruitbasket = fruitbasket;
        this.loosefruit = loosefruit;
        this.fg_left = fg_left;
        this.railingmid = railingmid;
        this.fountain = fountain;
        this.questboard = questboard;
        this.railingleft_high = railingleft_high;
        this.railingleft_mid = railingleft_mid;
        this.seat = seat;
        this.eattable = eattable;
        this.seat2 = seat2;
        this.eattable2 = eattable2;
        this.fg = fg;
        this.railingleft_low = railingleft_low;
        this.railingleft_midlow = railingleft_midlow;
        this.eattablebtn2 = eattablebtn2;
        this.eattablebtn = eattablebtn;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    plaza_door;
    /** @type {Phaser.GameObjects.Sprite} */
    siaswingsfromthese;
    /** @type {Phaser.GameObjects.Sprite} */
    rightwall;
    /** @type {Phaser.GameObjects.Sprite} */
    rightplant;
    /** @type {Phaser.GameObjects.Sprite} */
    rightside;
    /** @type {Phaser.GameObjects.Sprite} */
    rightpillar;
    /** @type {Phaser.GameObjects.Sprite} */
    petdoor;
    /** @type {Phaser.GameObjects.Sprite} */
    petdoor_top;
    /** @type {Phaser.GameObjects.Sprite} */
    plantpot;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflebed;
    /** @type {Phaser.GameObjects.Sprite} */
    pufflebed2;
    /** @type {Phaser.GameObjects.Sprite} */
    table;
    /** @type {Phaser.GameObjects.Sprite} */
    railingright_high;
    /** @type {Phaser.GameObjects.Sprite} */
    railingright_midhigh;
    /** @type {Phaser.GameObjects.Sprite} */
    railingright_mid;
    /** @type {Phaser.GameObjects.Sprite} */
    railingright_midlow;
    /** @type {Phaser.GameObjects.Sprite} */
    railingright_low;
    /** @type {Phaser.GameObjects.Sprite} */
    sofa;
    /** @type {Phaser.GameObjects.Sprite} */
    leftplant;
    /** @type {Phaser.GameObjects.Sprite} */
    leftwall;
    /** @type {Phaser.GameObjects.Sprite} */
    checkinchair;
    /** @type {Phaser.GameObjects.Sprite} */
    checkindesk;
    /** @type {Phaser.GameObjects.Sprite} */
    leftside;
    /** @type {Phaser.GameObjects.Sprite} */
    leftpillar;
    /** @type {Phaser.GameObjects.Sprite} */
    elevator;
    /** @type {Phaser.GameObjects.Sprite} */
    countersign;
    /** @type {Phaser.GameObjects.Sprite} */
    counter;
    /** @type {Phaser.GameObjects.Sprite} */
    fruitbasket;
    /** @type {Phaser.GameObjects.Sprite} */
    loosefruit;
    /** @type {Phaser.GameObjects.Sprite} */
    fg_left;
    /** @type {Phaser.GameObjects.Sprite} */
    railingmid;
    /** @type {Phaser.GameObjects.Sprite} */
    fountain;
    /** @type {Phaser.GameObjects.Sprite} */
    questboard;
    /** @type {Phaser.GameObjects.Sprite} */
    railingleft_high;
    /** @type {Phaser.GameObjects.Sprite} */
    railingleft_mid;
    /** @type {Phaser.GameObjects.Sprite} */
    seat;
    /** @type {Phaser.GameObjects.Sprite} */
    eattable;
    /** @type {Phaser.GameObjects.Sprite} */
    seat2;
    /** @type {Phaser.GameObjects.Sprite} */
    eattable2;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Phaser.GameObjects.Sprite} */
    railingleft_low;
    /** @type {Phaser.GameObjects.Sprite} */
    railingleft_midlow;
    /** @type {Phaser.GameObjects.Ellipse} */
    eattablebtn2;
    /** @type {Phaser.GameObjects.Ellipse} */
    eattablebtn;
    /** @type {Phaser.GameObjects.Sprite[]} */
    sort;

    /* START-USER-CODE */

    create() {
        super.create()
        this.fountain.play("hotellobby_fountain");
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
