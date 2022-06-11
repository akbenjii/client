import { Button, Interactive, SimpleButton } from '@components/components'
import News from '@scenes/interface/books/News'

/* START OF COMPILED CODE */

export default class Waves extends News {

    constructor() {
        super("Hydro");

        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("catalogs-master-pack", "assets/media/interface/catalogs/catalogs-master-pack.json");
        this.load.pack("waves-pack", "assets/media/interface/catalogs/waves-pack.json");
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
        const musiccatalog = this.add.image(760, 481, "waves");
        page1.add(musiccatalog);

        // close_btn
        const close_btn = this.add.image(1070, 45, "catalogs-master", "closebtn");
        page1.add(close_btn);

        // buy_wake1
        const buy_wake1 = this.add.image(784, 532, "catalogs-master", "buybtn");
        page1.add(buy_wake1);

        // txt_wake1
        const txt_wake1 = this.add.text(743, 513, "", {});
        txt_wake1.text = "300";
        txt_wake1.setStyle({ "align": "center", "color": "#6f4100ff", "fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        page1.add(txt_wake1);

        // buy_wake2
        const buy_wake2 = this.add.image(946, 532, "catalogs-master", "buybtn");
        page1.add(buy_wake2);

        // txt_wake2
        const txt_wake2 = this.add.text(904, 513, "", {});
        txt_wake2.text = "300";
        txt_wake2.setStyle({ "align": "center", "color": "#6f4100ff", "fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        page1.add(txt_wake2);

        // title
        const title = this.add.text(449, 72, "", {});
        title.text = "CATCHIN' WAVES";
        title.setStyle({ "align": "center", "color": "#bb9b54ff", "fontFamily": "Burbank Small", "fontSize": "55px", "fontStyle": "bold italic", "stroke": "#2f2204ff", "strokeThickness":10});
        page1.add(title);

        // upgrades
        const upgrades = this.add.text(889, 73, "", {});
        upgrades.text = "GAME\nUPGRADES";
        upgrades.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#000000ff", "strokeThickness":1});
        upgrades.setLineSpacing(-10);
        page1.add(upgrades);

        // bodyheader
        const bodyheader = this.add.text(494, 218, "", {});
        bodyheader.text = "How these surfboards work:";
        bodyheader.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold", "shadow.color": "#000000ff" });
        bodyheader.setWordWrapWidth(240);
        page1.add(bodyheader);

        // bodytext
        const bodytext = this.add.text(494, 285, "", {});
        bodytext.text = "Enter Catchin' Waves whilst holding a surfboard. You'll get to surf with it in the game!";
        bodytext.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "20px", "shadow.color": "#000000ff" });
        bodytext.setWordWrapWidth(250);
        page1.add(bodytext);

        // hidden_btn
        const hidden_btn = this.add.rectangle(791, 107, 180, 70);
        page1.add(hidden_btn);

        // txt_rodheader
        const txt_rodheader = this.add.text(709, 482, "", {});
        txt_rodheader.text = "Daisy Surfboard";
        txt_rodheader.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold", "shadow.color": "#042635ff" });
        page1.add(txt_rodheader);

        // txt_rodheader_1
        const txt_rodheader_1 = this.add.text(867, 482, "", {});
        txt_rodheader_1.text = "Flame Surfboard";
        txt_rodheader_1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold", "shadow.color": "#042635ff" });
        page1.add(txt_rodheader_1);

        // lists
        const pages = [page1];

        // block (components)
        new Interactive(block);

        // close_btn (components)
        const close_btnSimpleButton = new SimpleButton(close_btn);
        close_btnSimpleButton.callback = () => { this.close() };

        // buy_wake1 (components)
        const buy_wake1Button = new Button(buy_wake1);
        buy_wake1Button.spriteName = "buybtn";
        buy_wake1Button.callback = () => this.interface.prompt.showItem(702);
        buy_wake1Button.activeFrame = false;

        // buy_wake2 (components)
        const buy_wake2Button = new Button(buy_wake2);
        buy_wake2Button.spriteName = "buybtn";
        buy_wake2Button.callback = () => this.interface.prompt.showItem(701);
        buy_wake2Button.activeFrame = false;

        // hidden_btn (components)
        const hidden_btnSimpleButton = new SimpleButton(hidden_btn);
        hidden_btnSimpleButton.callback = () => this.interface.prompt.showItem(703);

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
