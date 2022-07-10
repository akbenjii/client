import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Plaza extends RoomScene {

    constructor() {
        super("Plaza");

        /** @type {Phaser.GameObjects.Sprite} */
        this.stage10001;
        /** @type {Phaser.GameObjects.Image[]} */
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
        this.music = '677'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("plaza-pack", "assets/media/rooms/old/plaza/plaza-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-18, -1, "plaza", "bg");
        bg.setOrigin(0, 0);

        // bg1
        const bg1 = this.add.image(0, 0, "mjplaza", "bg1");
        bg1.setOrigin(0, 0);

        // snowmj
        const snowmj = this.add.image(0, 235, "snowmj");
        snowmj.setOrigin(0, 0);

        // pizza10001
        this.add.image(1258, 277, "mjplaza", "pizza10001");

        // puffleshop10001
        this.add.image(450, 295, "mjplaza", "puffleshop10001");

        // stage10001
        const stage10001 = this.add.sprite(822, 220, "mjplaza", "stage10001");

        // image
        this.add.image(765, 225, "plazasky");

        // pet_door
        const pet_door = this.add.image(333, 489, "plaza", "pet_door");
        pet_door.setOrigin(0.473118, 0.678218);

        // cave_door
        const cave_door = this.add.image(564, 510, "plaza", "cave_door");
        cave_door.setOrigin(0.473684, 0.781513);

        // pizza_door
        const pizza_door = this.add.image(1194, 410, "plaza", "pizza_door");
        pizza_door.setOrigin(0.5311, 0.442211);

        // stage_screen
        this.add.image(847, 221, "plaza", "stage_screen");

        // stage_lights_front
        const stage_lights_front = this.add.sprite(853, 166, "plaza", "stage_lights_front0001");

        // stage_door_1
        const stage_door_1 = this.add.image(733, 385, "plaza", "stage_door_1");
        stage_door_1.setOrigin(0.5045871559633027, 0.4567901234567901);

        // stage_door_2
        const stage_door_2 = this.add.image(958, 385, "plaza", "stage_door_2");
        stage_door_2.setOrigin(0.5045871559633027, 0.4567901234567901);

        // tickets
        const tickets = this.add.image(846, 456, "plaza", "tickets");
        tickets.setOrigin(0.49612403100775193, 0.9247311827956989);

        // text
        const text = this.add.image(851, 248, "plaza", "text");
        text.setOrigin(0.5, 0.49333333333333335);

        // text_1
        const text_1 = this.add.text(751, 197, "", {});
        text_1.text = "TEAM BLUE'S\nRALLY DEBUT";
        text_1.setStyle({ "align": "center", "color": "#352b2bff", "fontFamily": "Burbank Small", "fontSize": "32px" });

        // pufflehead1
        this.add.image(236, 211, "mjplaza", "pufflehead1");

        // boombox1
        const boombox1 = this.add.image(1156, 838, "mjplaza", "boombox1");

        // table1
        const table1 = this.add.image(792, 804, "mjplaza", "table1");

        // tree3
        this.add.image(1441, 662, "mjplaza", "tree3");

        // tree1
        this.add.image(151, 679, "mjplaza", "tree1");

        // logo1
        this.add.image(182, 776, "mjplaza", "logo1");

        // head2
        this.add.image(1224, 116, "mjplaza", "head2");

        // guitar1
        this.add.image(1412, 202, "mjplaza", "guitar1");

        // table10001
        const table10001 = this.add.image(414, 771, "mjplaza", "table10001");

        // lists
        const sort = [tickets, table1, table10001];

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

        // pizza_door (components)
        const pizza_doorButton = new Button(pizza_door);
        pizza_doorButton.spriteName = "pizza_door";
        pizza_doorButton.activeFrame = false;
        pizza_doorButton.pixelPerfect = true;
        const pizza_doorMoveTo = new MoveTo(pizza_door);
        pizza_doorMoveTo.x = 1152;
        pizza_doorMoveTo.y = 500;

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

        // boombox1 (components)
        const boombox1SimpleButton = new SimpleButton(boombox1);
        boombox1SimpleButton.callback = () => this.interface.prompt.showItem(5016);

        this.stage10001 = stage10001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create() {
        super.create()
        this.stage10001.play("mjplaza_stage");
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
