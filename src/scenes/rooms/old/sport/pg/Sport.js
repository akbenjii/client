import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton, Zone } from '@components/components'

/* START OF COMPILED CODE */

export default class Sport extends RoomScene {

    constructor() {
        super("Sport");

        /** @type {Phaser.GameObjects.Sprite} */
        this.phonesport;
        /** @type {Phaser.GameObjects.Sprite} */
        this.regsports;
        /** @type {Phaser.GameObjects.Sprite} */
        this.speakersport;
        /** @type {Phaser.GameObjects.Sprite} */
        this.secret_room;
        /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 932, 560),
            'hq': () => this.triggerRoom(803, 700, 700),
            'clothes': () => this.interface.loadExternal('ClothingCatalog')
        }

        this.roomAnims = true
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("sport-pack", "assets/media/rooms/old/sport/sport-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_sport
        const bg_sport = this.add.image(760, 480, "2005_ss_bg");
        bg_sport.scaleX = 1.02;
        bg_sport.scaleY = 1.02;

        // box_png-sports
        this.add.image(42, 782, "sport", "box.png");

        // orange_thing_png
        const orange_thing_png = this.add.image(100, 667, "sport", "orange-thing.png");
        orange_thing_png.scaleX = 1.02;
        orange_thing_png.scaleY = 1.02;

        // door-sports
        const door_sports = this.add.image(1020, 134, "sport", "door-sports");
        door_sports.scaleX = 1.02;
        door_sports.scaleY = 1.02;
        door_sports.setOrigin(0, 0);

        // light_png
        const light_png = this.add.image(1422, 98, "sport", "light.png");
        light_png.scaleX = 1.02;
        light_png.scaleY = 1.02;

        // table_png
        const table_png = this.add.image(1345, 555, "sport", "table.png");
        table_png.scaleX = 1.02;
        table_png.scaleY = 1.02;

        // phonesport
        const phonesport = this.add.sprite(1417.9999999999998, 593.6782389860813, "sport", "phone0001.png");
        phonesport.scaleX = 1.02;
        phonesport.scaleY = 1.02;
        phonesport.setOrigin(0.49999999999999717, 0.9512601707596817);

        // regsports
        const regsports = this.add.sprite(1272.0518969377288, 579.2111665465218, "sport", "register-hover0001.png");
        regsports.scaleX = 1.02;
        regsports.scaleY = 1.02;
        regsports.setOrigin(0.4261133151493179, 1.3618967702581766);

        // sshop-book
        const sshop_book = this.add.image(1340, 1055, "sport-og", "sshop-book");
        sshop_book.setOrigin(0, 2);

        // tube2_png
        this.add.image(168, 757, "sport", "tube2.png");

        // tube1_png
        this.add.image(168, 808, "sport", "tube1.png");

        // speakersport
        const speakersport = this.add.sprite(-2, 170, "sport", "speaker0001.png");
        speakersport.scaleX = 1.02;
        speakersport.scaleY = 1.02;
        speakersport.setOrigin(0, 0);

        // ss-book-hover
        const ss_book_hover = this.add.image(1413, 868, "ss-book-hover");
        ss_book_hover.alpha = 0;
        ss_book_hover.alphaTopLeft = 0;
        ss_book_hover.alphaTopRight = 0;
        ss_book_hover.alphaBottomLeft = 0;
        ss_book_hover.alphaBottomRight = 0;

        // secret_room
        const secret_room = this.add.sprite(402, 420, "sport-og", "secret-room");

        // lists
        const sort = [regsports, phonesport, table_png];

        // door_sports (components)
        const door_sportsButton = new Button(door_sports);
        door_sportsButton.spriteName = "door-sports";
        door_sportsButton.activeFrame = false;
        door_sportsButton.pixelPerfect = true;
        const door_sportsMoveTo = new MoveTo(door_sports);
        door_sportsMoveTo.x = 1080;
        door_sportsMoveTo.y = 466;

        // phonesport (components)
        const phonesportSimpleButton = new SimpleButton(phonesport);
        phonesportSimpleButton.hoverCallback = () => this.onPhoneOver();

        // regsports (components)
        const regsportsSimpleButton = new SimpleButton(regsports);
        regsportsSimpleButton.hoverCallback = () => this.onRegOver();
        regsportsSimpleButton.hoverOutCallback = () => this.onRegOut();

        // sshop_book (components)
        const sshop_bookButton = new Button(sshop_book);
        sshop_bookButton.spriteName = "sshop-book";
        sshop_bookButton.callback = () => this.interface.loadExternal('ClothingCatalog');
        sshop_bookButton.activeFrame = false;

        // speakersport (components)
        const speakersportSimpleButton = new SimpleButton(speakersport);
        speakersportSimpleButton.hoverCallback = () => this.onSpeakerOver();

        // secret_room (components)
        const secret_roomButton = new Button(secret_room);
        secret_roomButton.spriteName = "secret-room";
        secret_roomButton.activeFrame = false;
        secret_roomButton.pixelPerfect = true;
        const secret_roomMoveTo = new MoveTo(secret_room);
        secret_roomMoveTo.x = 429;
        secret_roomMoveTo.y = 550;

        this.phonesport = phonesport;
        this.regsports = regsports;
        this.speakersport = speakersport;
        this.secret_room = secret_room;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onRegOver() {
        this.regsports.play('registerhover')
    }

    onRegOut() {
        this.regsports.play('registerout')
    }

    onPhoneOver() {
        this.phonesport.play('phone')
    }

    onSpeakerOver() {
        this.speakersport.play('speaker')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
