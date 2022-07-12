import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Phaser.GameObjects.Image} */
        this.bgcampnight;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.night;
        /** @type {Phaser.GameObjects.Image} */
        this.campfireholderplaza;
        /** @type {Phaser.GameObjects.Sprite} */
        this.campfireplaza;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Rectangle>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'forts': () => this.triggerRoom(801, 1284, 720),
            'pet': () => this.triggerRoom(310, 818, 520),
            'cave': () => { this.triggerRoom(806, 1180, 614); this.world.client.stampEarned(10); },
            'stage1': () => this.triggerRoom(340, 240, 660),
            'stage2': () => this.triggerRoom(340, 240, 660),
            'pizza': () => this.triggerRoom(330, 1200, 400),
            'forest': () => this.triggerRoom(809, 270, 430)
        }
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

        this.load.pack("plaza-pack", "assets/media/rooms/old/plaza/plaza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-18, -2, "camp-plaza", "bgcamp");
        bg.setOrigin(0, 0);

        // bgcampnight
        const bgcampnight = this.add.image(-18, -2, "camp-plaza", "bgcampnight");
        bgcampnight.setOrigin(0, 0);
        bgcampnight.visible = false;

        // ground
        this.add.image(775, 631, "camp-plaza", "ground");

        // image
        this.add.image(765, 225, "plazasky");

        // pet_door
        const pet_door = this.add.image(333, 489, "plaza", "pet_door");
        pet_door.setOrigin(0.473118, 0.678218);

        // cave_door
        const cave_door = this.add.image(564, 510, "plaza", "cave_door");
        cave_door.setOrigin(0.473684, 0.781513);

        // messhalldoor
        const messhalldoor = this.add.image(1221, 395, "camp-plaza", "messhalldoor");
        messhalldoor.setOrigin(0.5311, 0.442211);

        // stage_lights_back
        const stage_lights_back = this.add.sprite(848.215338861374, 1287.8644554504242, "plaza", "stage_lights_back0001");
        stage_lights_back.setOrigin(0.4946243267326448, 11.865963831126777);

        // stage_screen
        this.add.image(847, 221, "plaza", "stage_screen");

        // stage_lights_front
        const stage_lights_front = this.add.sprite(853, 166, "plaza", "stage_lights_front0001");

        // lamp
        const lamp = this.add.image(129, 827, "plaza", "lamp");
        lamp.setOrigin(0.5099009900990099, 0.9323076923076923);

        // stage_door_1
        const stage_door_1 = this.add.image(733, 385, "plaza", "stage_door_1");
        stage_door_1.setOrigin(0.5045871559633027, 0.4567901234567901);

        // stage_door_2
        const stage_door_2 = this.add.image(958, 385, "plaza", "stage_door_2");
        stage_door_2.setOrigin(0.5045871559633027, 0.4567901234567901);

        // tickets
        const tickets = this.add.image(846, 457, "plaza", "tickets");
        tickets.setOrigin(0.49612403100775193, 0.9247311827956989);

        // text
        const text = this.add.image(851, 248, "plaza", "text");
        text.setOrigin(0.5, 0.49333333333333335);

        // text_1
        const text_1 = this.add.text(751, 197, "", {});
        text_1.text = "TEAM BLUE'S\nRALLY DEBUT";
        text_1.setStyle({ "align": "center", "color": "#352b2bff", "fontFamily": "Burbank Small", "fontSize": "32px" });

        // leftsign
        this.add.image(91, 364, "camp-plaza", "leftsign");

        // rightsign
        this.add.image(1386, 497, "camp-plaza", "rightsign");

        // lilyrock
        const lilyrock = this.add.image(915, 721.6326378648469, "camp-plaza", "lilyrock");
        lilyrock.setOrigin(0.5, 0.7236274078161824);

        // lilybush
        const lilybush = this.add.image(438.01165638030244, 820.0466255212098, "camp-plaza", "lilybush");
        lilybush.setOrigin(0.5780351210105616, 0.7539053191089916);

        // night
        const night = this.add.rectangle(759.0223020891484, 1034.49910149708, 128, 128);
        night.scaleX = 12.397097039253481;
        night.scaleY = 7.74841237866371;
        night.setOrigin(0.49676405135629975, 1.0495189127459725);
        night.visible = false;
        night.isFilled = true;
        night.fillColor = 0;
        night.fillAlpha = 0.4;

        // campfireholderplaza
        const campfireholderplaza = this.add.image(632, 646, "camp-plaza", "campfireholdertown");
        campfireholderplaza.visible = false;

        // campfireplaza
        const campfireplaza = this.add.sprite(629, 1098.284865020247, "camp-plaza", "campfiretown0001");
        campfireplaza.setOrigin(0.5, 4.0890207610162825);
        campfireplaza.visible = false;

        // lists
        const sort = [lamp, tickets, lilyrock, lilybush, campfireplaza, night, stage_lights_back];

        // pet_door (components)
        const pet_doorButton = new Button(pet_door);
        pet_doorButton.spriteName = "pet_door";
        pet_doorButton.activeFrame = false;
        pet_doorButton.pixelPerfect = true;
        const pet_doorMoveTo = new MoveTo(pet_door);
        pet_doorMoveTo.x = 340;
        pet_doorMoveTo.y = 540;

        // cave_door (components)
        const cave_doorButton = new Button(cave_door);
        cave_doorButton.spriteName = "cave_door";
        cave_doorButton.activeFrame = false;
        cave_doorButton.pixelPerfect = true;
        const cave_doorMoveTo = new MoveTo(cave_door);
        cave_doorMoveTo.x = 560;
        cave_doorMoveTo.y = 500;

        // messhalldoor (components)
        const messhalldoorButton = new Button(messhalldoor);
        messhalldoorButton.spriteName = "messhalldoor";
        messhalldoorButton.activeFrame = false;
        messhalldoorButton.pixelPerfect = true;
        const messhalldoorMoveTo = new MoveTo(messhalldoor);
        messhalldoorMoveTo.x = 1152;
        messhalldoorMoveTo.y = 500;

        // stage_lights_back (components)
        const stage_lights_backAnimation = new Animation(stage_lights_back);
        stage_lights_backAnimation.key = "stage_lights_back";
        stage_lights_backAnimation.end = 16;

        // stage_lights_front (components)
        const stage_lights_frontAnimation = new Animation(stage_lights_front);
        stage_lights_frontAnimation.key = "stage_lights_front";
        stage_lights_frontAnimation.end = 16;

        // stage_door_1 (components)
        const stage_door_1Button = new Button(stage_door_1);
        stage_door_1Button.spriteName = "stage_door_1";
        stage_door_1Button.activeFrame = false;
        const stage_door_1MoveTo = new MoveTo(stage_door_1);
        stage_door_1MoveTo.x = 730;
        stage_door_1MoveTo.y = 460;

        // stage_door_2 (components)
        const stage_door_2Button = new Button(stage_door_2);
        stage_door_2Button.spriteName = "stage_door_2";
        stage_door_2Button.activeFrame = false;
        const stage_door_2MoveTo = new MoveTo(stage_door_2);
        stage_door_2MoveTo.x = 960;
        stage_door_2MoveTo.y = 460;

        // tickets (components)
        new SimpleButton(tickets);
        const ticketsMoveTo = new MoveTo(tickets);
        ticketsMoveTo.x = 846;
        ticketsMoveTo.y = 426;

        this.bg = bg;
        this.bgcampnight = bgcampnight;
        this.night = night;
        this.campfireholderplaza = campfireholderplaza;
        this.campfireplaza = campfireplaza;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        var now = new Date();
        var timeInHours = now.getUTCHours();
        console.log(timeInHours)
        if (timeInHours > 1 && timeInHours < 16 ) {
            this.bgcampnight.visible = true
            this.night.visible = true
            this.campfireplaza.visible = true
            this.campfireholderplaza.visible = true
            this.campfireplaza.play('campfireplaza')
        }
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
