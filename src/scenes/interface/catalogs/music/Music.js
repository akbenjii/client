import { Button, Interactive, SimpleButton } from '@components/components'
import News from '@scenes/interface/books/News'

/* START OF COMPILED CODE */

export default class Music extends News {

    constructor() {
        super("Music");

        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("music-pack", "assets/media/interface/catalogs/music/music-pack.json");
        this.load.pack("catalogs-master-pack", "assets/media/interface/catalogs/catalogs-master-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.1;

        // page1
        const page1 = this.add.container(0, 0);

        // musiccatalog
        const musiccatalog = this.add.image(760, 460, "musiccatalog");
        page1.add(musiccatalog);

        // close_btn
        const close_btn = this.add.image(1167, 142, "catalogs-master", "closebtn");
        page1.add(close_btn);

        // buy_bass
        const buy_bass = this.add.image(583, 351, "catalogs-master", "buybtn");
        page1.add(buy_bass);

        // buy_acoustic
        const buy_acoustic = this.add.image(1070, 351, "catalogs-master", "buybtn");
        page1.add(buy_acoustic);

        // buy_tuba
        const buy_tuba = this.add.image(422, 534, "catalogs-master", "buybtn");
        page1.add(buy_tuba);

        // buy_drumsticks
        const buy_drumsticks = this.add.image(1085, 534, "catalogs-master", "buybtn");
        page1.add(buy_drumsticks);

        // buy_red_elec
        const buy_red_elec = this.add.image(394, 702, "catalogs-master", "buybtn");
        page1.add(buy_red_elec);

        // buy_snare
        const buy_snare = this.add.image(878, 702, "catalogs-master", "buybtn");
        page1.add(buy_snare);

        // text_2_3
        const text_2_3 = this.add.text(844, 683, "", {});
        text_2_3.text = "380";
        text_2_3.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page1.add(text_2_3);

        // text_2_3_1
        const text_2_3_1 = this.add.text(355, 683, "", {});
        text_2_3_1.text = "350";
        text_2_3_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page1.add(text_2_3_1);

        // text_2_3_1_1
        const text_2_3_1_1 = this.add.text(1054, 517, "", {});
        text_2_3_1_1.text = "120";
        text_2_3_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page1.add(text_2_3_1_1);

        // text_2_3_1_1_1
        const text_2_3_1_1_1 = this.add.text(387, 517, "", {});
        text_2_3_1_1_1.text = "350";
        text_2_3_1_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page1.add(text_2_3_1_1_1);

        // text_2_3_1_1_1_1
        const text_2_3_1_1_1_1 = this.add.text(550, 333, "", {});
        text_2_3_1_1_1_1.text = "300";
        text_2_3_1_1_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page1.add(text_2_3_1_1_1_1);

        // text_2_3_1_1_1_1_1
        const text_2_3_1_1_1_1_1 = this.add.text(1039, 333, "", {});
        text_2_3_1_1_1_1_1.text = "300";
        text_2_3_1_1_1_1_1.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px" });
        page1.add(text_2_3_1_1_1_1_1);

        // lists
        const pages = [page1];

        // block (components)
        new Interactive(block);

        // close_btn (components)
        const close_btnSimpleButton = new SimpleButton(close_btn);
        close_btnSimpleButton.callback = () => { this.close() };

        // buy_bass (components)
        const buy_bassButton = new Button(buy_bass);
        buy_bassButton.spriteName = "buybtn";
        buy_bassButton.callback = () => this.interface.prompt.showItem(729);
        buy_bassButton.activeFrame = false;

        // buy_acoustic (components)
        const buy_acousticButton = new Button(buy_acoustic);
        buy_acousticButton.spriteName = "buybtn";
        buy_acousticButton.callback = () => this.interface.prompt.showItem(234);
        buy_acousticButton.activeFrame = false;

        // buy_tuba (components)
        const buy_tubaButton = new Button(buy_tuba);
        buy_tubaButton.spriteName = "buybtn";
        buy_tubaButton.callback = () => this.interface.prompt.showItem(293);
        buy_tubaButton.activeFrame = false;

        // buy_drumsticks (components)
        const buy_drumsticksButton = new Button(buy_drumsticks);
        buy_drumsticksButton.spriteName = "buybtn";
        buy_drumsticksButton.callback = () => this.interface.prompt.showItem(340);
        buy_drumsticksButton.activeFrame = false;

        // buy_red_elec (components)
        const buy_red_elecButton = new Button(buy_red_elec);
        buy_red_elecButton.spriteName = "buybtn";
        buy_red_elecButton.callback = () => this.interface.prompt.showItem(233);
        buy_red_elecButton.activeFrame = false;

        // buy_snare (components)
        const buy_snareButton = new Button(buy_snare);
        buy_snareButton.spriteName = "buybtn";
        buy_snareButton.callback = () => this.interface.prompt.showItem(180);
        buy_snareButton.activeFrame = false;

        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
