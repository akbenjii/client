import { Button, Interactive, SimpleButton } from '@components/components'
import News from '@scenes/interface/books/News'

/* START OF COMPILED CODE */

export default class Sled extends News {

    constructor() {
        super("Sled");

        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("catalogs-master-pack", "assets/media/interface/catalogs/catalogs-master-pack.json");
        this.load.pack("sled-pack", "assets/media/interface/catalogs/sled-pack.json");
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
        const musiccatalog = this.add.image(760, 481, "sledcat");
        page1.add(musiccatalog);

        // close_btn
        const close_btn = this.add.image(1070, 45, "catalogs-master", "closebtn");
        page1.add(close_btn);

        // buy_wake1
        const buy_wake1 = this.add.image(623, 650, "catalogs-master", "buybtn");
        page1.add(buy_wake1);

        // txt_wake1
        const txt_wake1 = this.add.text(582, 631, "", {});
        txt_wake1.text = "300";
        txt_wake1.setStyle({ "align": "center", "color": "#6f4100ff", "fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        page1.add(txt_wake1);

        // buy_wake2
        const buy_wake2 = this.add.image(941, 582, "catalogs-master", "buybtn");
        page1.add(buy_wake2);

        // txt_wake2
        const txt_wake2 = this.add.text(899, 563, "", {});
        txt_wake2.text = "200";
        txt_wake2.setStyle({ "align": "center", "color": "#6f4100ff", "fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        page1.add(txt_wake2);

        // title
        const title = this.add.text(532, 65, "", {});
        title.text = "Sled Racing";
        title.setStyle({ "align": "center", "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "60px", "fontStyle": "bold italic", "stroke": "#000000ff", "strokeThickness":10});
        page1.add(title);

        // upgrades
        const upgrades = this.add.text(889, 73, "", {});
        upgrades.text = "GAME\nUPGRADES";
        upgrades.setStyle({ "align": "center", "color": "6f4100", "fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold italic", "stroke": "#000000ff", "strokeThickness":1});
        upgrades.setLineSpacing(-10);
        page1.add(upgrades);

        // bodyheader
        const bodyheader = this.add.text(486, 247, "", {});
        bodyheader.text = "How the sleds work:";
        bodyheader.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold", "shadow.offsetX":1,"shadow.offsetY":1,"shadow.color": "#042635ff", "shadow.blur":3,"shadow.fill":true});
        page1.add(bodyheader);

        // bodytext
        const bodytext = this.add.text(488, 290, "", {});
        bodytext.text = "Enter sled racing whilst holding the toboggan or one of the sleds. You'll get to use it in the game!";
        bodytext.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "22px", "shadow.offsetX":1,"shadow.offsetY":1,"shadow.color": "#042635ff", "shadow.blur":3,"shadow.fill":true});
        bodytext.setWordWrapWidth(350);
        page1.add(bodytext);

        // buy_wake1_1
        const buy_wake1_1 = this.add.image(804, 820, "catalogs-master", "buybtn");
        page1.add(buy_wake1_1);

        // txt_wake1_1
        const txt_wake1_1 = this.add.text(763, 801, "", {});
        txt_wake1_1.text = "300";
        txt_wake1_1.setStyle({ "align": "center", "color": "#6f4100ff", "fontFamily": "Burbank Small", "fontSize": "32px", "fontStyle": "bold" });
        page1.add(txt_wake1_1);

        // txt_rodheader
        const txt_rodheader = this.add.text(886, 528, "", {});
        txt_rodheader.text = "Toboggan";
        txt_rodheader.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold", "shadow.color": "#042635ff" });
        txt_rodheader.setWordWrapWidth(200);
        page1.add(txt_rodheader);

        // txt_rodheader_1
        const txt_rodheader_1 = this.add.text(539, 597, "", {});
        txt_rodheader_1.text = "Pink Racing Sled";
        txt_rodheader_1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold", "shadow.color": "#042635ff" });
        txt_rodheader_1.setWordWrapWidth(200);
        page1.add(txt_rodheader_1);

        // txt_rodheader_1_1
        const txt_rodheader_1_1 = this.add.text(708, 768, "", {});
        txt_rodheader_1_1.text = "Green Racing Sled";
        txt_rodheader_1_1.setStyle({ "align": "center", "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "23px", "fontStyle": "bold", "shadow.color": "#042635ff" });
        txt_rodheader_1_1.setWordWrapWidth(200);
        page1.add(txt_rodheader_1_1);

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
        buy_wake1Button.callback = () => this.interface.prompt.showItem(5047);
        buy_wake1Button.activeFrame = false;

        // buy_wake2 (components)
        const buy_wake2Button = new Button(buy_wake2);
        buy_wake2Button.spriteName = "buybtn";
        buy_wake2Button.callback = () => this.interface.prompt.showItem(5021);
        buy_wake2Button.activeFrame = false;

        // buy_wake1_1 (components)
        const buy_wake1_1Button = new Button(buy_wake1_1);
        buy_wake1_1Button.spriteName = "buybtn";
        buy_wake1_1Button.callback = () => this.interface.prompt.showItem(5046);
        buy_wake1_1Button.activeFrame = false;

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
