import { Button, Interactive, SimpleButton } from '@components/components'
import News from '@scenes/interface/books/News'

/* START OF COMPILED CODE */

export default class Newspaper extends News {

    constructor() {
        super("Newspaper");

        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("news-pack", "assets/media/interface/catalogs/newspaper/news-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.1;

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // pAPER_png_1_1_1_1_1
        const pAPER_png_1_1_1_1_1 = this.add.image(760, 480, "newspaper", "PAPER.png");
        page6.add(pAPER_png_1_1_1_1_1);

        // content6_png
        const content6_png = this.add.image(760, 436, "newspaper", "content6.png");
        content6_png.angle = -2.2000000000000455;
        page6.add(content6_png);

        // exit_1_1_1_1_1
        const exit_1_1_1_1_1 = this.add.image(1276, 117, "newspaper", "exit");
        page6.add(exit_1_1_1_1_1);

        // back_button_1_1_1_1
        const back_button_1_1_1_1 = this.add.image(218, 165, "newspaper", "back-button");
        page6.add(back_button_1_1_1_1);

        // next_2_1
        const next_2_1 = this.add.image(1309, 434, "newspaper", "next");
        next_2_1.angle = -2.2000000000000455;
        page6.add(next_2_1);

        // biglines_2_1
        const biglines_2_1 = this.add.image(752, 138, "biglines");
        biglines_2_1.angle = -2.2000000000000455;
        page6.add(biglines_2_1);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // pAPER_png_1_1_1_1
        const pAPER_png_1_1_1_1 = this.add.image(760, 480, "newspaper", "PAPER.png");
        page5.add(pAPER_png_1_1_1_1);

        // content5_png
        const content5_png = this.add.image(760, 495, "newspaper", "content5.png");
        content5_png.angle = -2.2000000000000455;
        page5.add(content5_png);

        // back_button_1_1_1
        const back_button_1_1_1 = this.add.image(218, 165, "newspaper", "back-button");
        page5.add(back_button_1_1_1);

        // exit_1_1_1_1
        const exit_1_1_1_1 = this.add.image(1276, 117, "newspaper", "exit");
        page5.add(exit_1_1_1_1);

        // next_2
        const next_2 = this.add.image(1309, 434, "newspaper", "next");
        next_2.angle = -2.2000000000000455;
        page5.add(next_2);

        // biglines_2
        const biglines_2 = this.add.image(752, 138, "biglines");
        biglines_2.angle = -2.2000000000000455;
        page5.add(biglines_2);

        // page4
        const page4 = this.add.container(-1, 0);
        page4.visible = false;

        // pAPER_png_1_1_1
        const pAPER_png_1_1_1 = this.add.image(760, 480, "newspaper", "PAPER.png");
        page4.add(pAPER_png_1_1_1);

        // content4_png
        const content4_png = this.add.image(760, 500, "newspaper", "content4.png");
        content4_png.angle = -2.2000000000000455;
        page4.add(content4_png);

        // exit_1_1_1
        const exit_1_1_1 = this.add.image(1276, 117, "newspaper", "exit");
        page4.add(exit_1_1_1);

        // back_button_1_1
        const back_button_1_1 = this.add.image(218, 165, "newspaper", "back-button");
        page4.add(back_button_1_1);

        // next
        const next = this.add.image(1309, 434, "newspaper", "next");
        next.angle = -2.2000000000000455;
        page4.add(next);

        // biglines_1
        const biglines_1 = this.add.image(752, 138, "biglines");
        biglines_1.angle = -2.2000000000000455;
        page4.add(biglines_1);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // pAPER_png_1_1
        const pAPER_png_1_1 = this.add.image(760, 480, "newspaper", "PAPER.png");
        page3.add(pAPER_png_1_1);

        // content3_png
        const content3_png = this.add.image(761, 456, "newspaper", "content3.png");
        content3_png.angle = -2.2000000000000455;
        page3.add(content3_png);

        // exit_1_1
        const exit_1_1 = this.add.image(1276, 117, "newspaper", "exit");
        page3.add(exit_1_1);

        // back_button_1
        const back_button_1 = this.add.image(218, 165, "newspaper", "back-button");
        page3.add(back_button_1);

        // next_1
        const next_1 = this.add.image(1309, 434, "newspaper", "next");
        next_1.angle = -2.2000000000000455;
        page3.add(next_1);

        // biglines
        const biglines = this.add.image(752, 138, "biglines");
        biglines.angle = -2.2000000000000455;
        page3.add(biglines);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // pAPER_png_1
        const pAPER_png_1 = this.add.image(760, 480, "newspaper", "PAPER.png");
        page2.add(pAPER_png_1);

        // content2_png
        const content2_png = this.add.image(761, 426, "newspaper", "content2.png");
        content2_png.angle = -2.5;
        page2.add(content2_png);

        // exit_1
        const exit_1 = this.add.image(1276, 117, "newspaper", "exit");
        page2.add(exit_1);

        // back_button
        const back_button = this.add.image(218, 165, "newspaper", "back-button");
        page2.add(back_button);

        // next_1_1
        const next_1_1 = this.add.image(1309, 434, "newspaper", "next");
        next_1_1.angle = -2.2000000000000455;
        page2.add(next_1_1);

        // page1
        const page1 = this.add.container(0, 0);
        page1.visible = false;

        // pAPER_png
        const pAPER_png = this.add.image(760, 480, "newspaper", "PAPER.png");
        page1.add(pAPER_png);

        // content1_png
        const content1_png = this.add.image(745, 458, "newspaper", "content1.png");
        content1_png.angle = -2.5;
        page1.add(content1_png);

        // exit
        const exit = this.add.image(1276, 117, "newspaper", "exit");
        page1.add(exit);

        // events
        const events = this.add.image(1191, 454, "newspaper", "events");
        events.angle = -2.2000000000000455;
        page1.add(events);

        // line
        const line = this.add.image(1191, 428, "line");
        line.angle = -2.2000000000000455;
        page1.add(line);

        // line_1
        const line_1 = this.add.image(1193, 487, "line");
        line_1.angle = -2.2000000000000455;
        page1.add(line_1);

        // featured
        const featured = this.add.image(1198, 519, "newspaper", "featured");
        featured.angle = -2.2000000000000455;
        page1.add(featured);

        // line_1_1
        const line_1_1 = this.add.image(1195, 551, "line");
        line_1_1.angle = -2.2000000000000455;
        page1.add(line_1_1);

        // jokes
        const jokes = this.add.image(1198, 584, "newspaper", "jokes");
        jokes.angle = -2.2000000000000455;
        page1.add(jokes);

        // line_1_1_1
        const line_1_1_1 = this.add.image(1198, 617, "line");
        line_1_1_1.angle = -2.2000000000000455;
        page1.add(line_1_1_1);

        // comics
        const comics = this.add.image(1199, 648, "newspaper", "comics");
        comics.angle = -2.2000000000000455;
        page1.add(comics);

        // need
        const need = this.add.image(1204, 710, "newspaper", "need");
        need.angle = -2.2000000000000455;
        page1.add(need);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6];

        // block (components)
        new Interactive(block);

        // exit_1_1_1_1_1 (components)
        const exit_1_1_1_1_1Button = new Button(exit_1_1_1_1_1);
        exit_1_1_1_1_1Button.spriteName = "exit";
        exit_1_1_1_1_1Button.callback = () => this.close();

        // back_button_1_1_1_1 (components)
        const back_button_1_1_1_1Button = new Button(back_button_1_1_1_1);
        back_button_1_1_1_1Button.spriteName = "back-button";
        back_button_1_1_1_1Button.callback = () => this.firstPage();

        // next_2_1 (components)
        const next_2_1Button = new Button(next_2_1);
        next_2_1Button.spriteName = "next";
        next_2_1Button.callback = () => this.firstPage();
        next_2_1Button.activeFrame = false;

        // back_button_1_1_1 (components)
        const back_button_1_1_1Button = new Button(back_button_1_1_1);
        back_button_1_1_1Button.spriteName = "back-button";
        back_button_1_1_1Button.callback = () => this.firstPage();

        // exit_1_1_1_1 (components)
        const exit_1_1_1_1Button = new Button(exit_1_1_1_1);
        exit_1_1_1_1Button.spriteName = "exit";
        exit_1_1_1_1Button.callback = () => this.close();

        // next_2 (components)
        const next_2Button = new Button(next_2);
        next_2Button.spriteName = "next";
        next_2Button.callback = () => this.nextPage();
        next_2Button.activeFrame = false;

        // exit_1_1_1 (components)
        const exit_1_1_1Button = new Button(exit_1_1_1);
        exit_1_1_1Button.spriteName = "exit";
        exit_1_1_1Button.callback = () => this.close();

        // back_button_1_1 (components)
        const back_button_1_1Button = new Button(back_button_1_1);
        back_button_1_1Button.spriteName = "back-button";
        back_button_1_1Button.callback = () => this.firstPage();

        // next (components)
        const nextButton = new Button(next);
        nextButton.spriteName = "next";
        nextButton.callback = () => this.nextPage();
        nextButton.activeFrame = false;

        // exit_1_1 (components)
        const exit_1_1Button = new Button(exit_1_1);
        exit_1_1Button.spriteName = "exit";
        exit_1_1Button.callback = () => this.close();

        // back_button_1 (components)
        const back_button_1Button = new Button(back_button_1);
        back_button_1Button.spriteName = "back-button";
        back_button_1Button.callback = () => this.firstPage();

        // next_1 (components)
        const next_1Button = new Button(next_1);
        next_1Button.spriteName = "next";
        next_1Button.callback = () => this.nextPage();
        next_1Button.activeFrame = false;

        // exit_1 (components)
        const exit_1Button = new Button(exit_1);
        exit_1Button.spriteName = "exit";
        exit_1Button.callback = () => this.close();

        // back_button (components)
        const back_buttonButton = new Button(back_button);
        back_buttonButton.spriteName = "back-button";
        back_buttonButton.callback = () => this.prevPage();

        // next_1_1 (components)
        const next_1_1Button = new Button(next_1_1);
        next_1_1Button.spriteName = "next";
        next_1_1Button.callback = () => this.nextPage();
        next_1_1Button.activeFrame = false;

        // exit (components)
        const exitButton = new Button(exit);
        exitButton.spriteName = "exit";
        exitButton.callback = () => this.close();

        // events (components)
        const eventsButton = new Button(events);
        eventsButton.spriteName = "events";
        eventsButton.callback = () => this.eventPage();
        eventsButton.activeFrame = false;

        // featured (components)
        const featuredButton = new Button(featured);
        featuredButton.spriteName = "featured";
        featuredButton.callback = () => this.featuredPage();
        featuredButton.activeFrame = false;

        // jokes (components)
        const jokesButton = new Button(jokes);
        jokesButton.spriteName = "jokes";
        jokesButton.callback = () => this.jokesPage();
        jokesButton.activeFrame = false;

        // comics (components)
        const comicsButton = new Button(comics);
        comicsButton.spriteName = "comics";
        comicsButton.callback = () => this.comicsPage();
        comicsButton.activeFrame = false;

        // need (components)
        const needButton = new Button(need);
        needButton.spriteName = "need";
        needButton.callback = () => this.needPage();
        needButton.activeFrame = false;

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
