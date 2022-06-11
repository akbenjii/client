import { Button, Interactive, SimpleButton } from '@components/components'
import News from '@scenes/interface/books/News'

/* START OF COMPILED CODE */

export default class Fishing extends News {

    constructor() {
        super("Fishing");

        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("catalogs-master-pack", "assets/media/interface/catalogs/catalogs-master-pack.json");
        this.load.pack("fishing-pack", "assets/media/interface/catalogs/fishing-pack.json");
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
        const musiccatalog = this.add.image(760, 481, "fishing");
        page1.add(musiccatalog);

        // close_btn
        const close_btn = this.add.image(1070, 45, "catalogs-master", "closebtn");
        page1.add(close_btn);

        // buy_rod
        const buy_rod = this.add.image(669, 525, "catalogs-master", "buybtn");
        page1.add(buy_rod);

        // txt_rod
        const txt_rod = this.add.text(628, 506, "", {});
        txt_rod.text = "200";
        txt_rod.setStyle({ "align": "center", "color": "#6f4100ff", "fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        page1.add(txt_rod);

        // title
        const title = this.add.text(495, 58, "", {});
        title.text = "Ice Fishing";
        title.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "70px", "fontStyle": "bold italic", "stroke": "#1b4787ff", "strokeThickness":10});
        page1.add(title);

        // upgrades
        const upgrades = this.add.text(889, 73, "", {});
        upgrades.text = "GAME\nUPGRADES";
        upgrades.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#000000ff", "strokeThickness":1});
        upgrades.setLineSpacing(-10);
        page1.add(upgrades);

        // bodyheader
        const bodyheader = this.add.text(486, 223, "", {});
        bodyheader.text = "How the fishing rod works:";
        bodyheader.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold", "shadow.color": "#042635ff" });
        page1.add(bodyheader);

        // bodytext
        const bodytext = this.add.text(488, 268, "", {});
        bodytext.text = "Enter Ice Fishing whilst holding the fishing rod.\nYou'll get to fish\nwith it in the game!";
        bodytext.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "20px", "shadow.color": "#042635ff" });
        bodytext.setWordWrapWidth(220);
        page1.add(bodytext);

        // txt_rodheader
        const txt_rodheader = this.add.text(594, 446, "", {});
        txt_rodheader.text = "Flashing Lure Fishing Rod";
        txt_rodheader.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold", "shadow.color": "#042635ff" });
        txt_rodheader.setWordWrapWidth(200);
        page1.add(txt_rodheader);

        // lists
        const pages = [page1];

        // block (components)
        new Interactive(block);

        // close_btn (components)
        const close_btnSimpleButton = new SimpleButton(close_btn);
        close_btnSimpleButton.callback = () => { this.close() };

        // buy_rod (components)
        const buy_rodButton = new Button(buy_rod);
        buy_rodButton.spriteName = "buybtn";
        buy_rodButton.callback = () => this.interface.prompt.showItem(321);
        buy_rodButton.activeFrame = false;

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
