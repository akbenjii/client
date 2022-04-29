import { Button, Interactive, SimpleButton } from '@components/components'

import Book from '@scenes/interface/books/Book'
import ColorButton from './buttons/ColorButton'
import FlagButton from './buttons/FlagButton'
import PhotoButton from './buttons/PhotoButton'
import Tag1 from './buttons/Tag1'
import Tag2 from './buttons/Tag2'


/* START OF COMPILED CODE */

export default class ClothingCatalog extends Book {

    constructor() {
        super("ClothingCatalog");

        /** @type {Phaser.GameObjects.Image} */
        this.blue0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.green0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.pink0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.black0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.red0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.orange0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.yellow0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.purple0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.brown0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.darkgreen0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.lightblue0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.darkpink0001_png;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_sweat;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_duffle;
        /** @type {Phaser.GameObjects.Image} */
        this.small_night;
        /** @type {Phaser.GameObjects.Image} */
        this.small_bowtie;
        /** @type {Phaser.GameObjects.Image} */
        this.small_sunglasses;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_hockey;
        /** @type {Phaser.GameObjects.Image} */
        this.small_3d;
        /** @type {Phaser.GameObjects.Image} */
        this.small_snork;
        /** @type {Phaser.GameObjects.Image} */
        this.small_flowerhat;
        /** @type {Phaser.GameObjects.Image} */
        this.small_grass;
        /** @type {Phaser.GameObjects.Image} */
        this.small_headphones;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_poloshirt;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_hardhat;
        /** @type {Phaser.GameObjects.Image} */
        this.buy_hardhat_1;
        /** @type {Phaser.GameObjects.Image} */
        this.small_cowboyhat;
        /** @type {Phaser.GameObjects.Image} */
        this.small_cowboyhat_1;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.vikinghelmet_rec;
        /** @type {Phaser.GameObjects.Container} */
        this.buttons;
        /** @type {Phaser.GameObjects.Text} */
        this.coins;
        /** @type {Phaser.GameObjects.Container[]} */
        this.pages;


        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    preload() {

        this.load.pack("sep05-pack", "assets/media/interface/catalogs/clothing/sep05-pack.json");
    }

    /** @returns {void} */
    _create() {

        // block
        const block = this.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;

        // page6
        const page6 = this.add.container(0, 0);
        page6.visible = false;

        // pAGE_6_png
        const pAGE_6_png = this.add.image(765, 432, "Sep2005", "PAGE 6.png");
        page6.add(pAGE_6_png);

        // exit0001_png_2
        const exit0001_png_2 = this.add.image(1090, 88, "Sep2005", "exit0001.png");
        page6.add(exit0001_png_2);

        // last_page0001_png_1_1_1_1
        const last_page0001_png_1_1_1_1 = this.add.image(552, 700, "Sep2005", "last-page0001.png");
        page6.add(last_page0001_png_1_1_1_1);

        // sec-pinkhoodie
        const sec_pinkhoodie = this.add.ellipse(950, 160, 128, 128);
        sec_pinkhoodie.scaleX = 0.6015478759037696;
        sec_pinkhoodie.scaleY = 0.6076696363018034;
        sec_pinkhoodie.isFilled = true;
        sec_pinkhoodie.fillAlpha = 0;
        page6.add(sec_pinkhoodie);

        // sec-blackguitar
        const sec_blackguitar = this.add.ellipse(928, 285, 128, 128);
        sec_blackguitar.scaleX = 0.32044521325286934;
        sec_blackguitar.scaleY = 0.22640347288105034;
        sec_blackguitar.isFilled = true;
        sec_blackguitar.fillAlpha = 0;
        page6.add(sec_blackguitar);

        // sec-princess
        const sec_princess = this.add.ellipse(566, 501, 128, 128);
        sec_princess.scaleX = 0.1622754245157175;
        sec_princess.scaleY = 0.1622754245157175;
        sec_princess.isFilled = true;
        sec_princess.fillAlpha = 0;
        page6.add(sec_princess);

        // sec-sneaks
        const sec_sneaks = this.add.ellipse(764, 731, 128, 128);
        sec_sneaks.scaleX = 0.17290545073937777;
        sec_sneaks.scaleY = 0.4243124042033608;
        sec_sneaks.isFilled = true;
        sec_sneaks.fillAlpha = 0;
        page6.add(sec_sneaks);

        // sec-baller
        const sec_baller = this.add.ellipse(859, 494, 128, 128);
        sec_baller.scaleX = 0.17290545073937777;
        sec_baller.scaleY = 0.4243124042033608;
        sec_baller.isFilled = true;
        sec_baller.fillAlpha = 0;
        page6.add(sec_baller);

        // page5
        const page5 = this.add.container(0, 0);
        page5.visible = false;

        // pAGE_5_png
        const pAGE_5_png = this.add.image(768, 431, "Sep2005", "PAGE 5.png");
        page5.add(pAGE_5_png);

        // exit0001_png_1_1_1_1
        const exit0001_png_1_1_1_1 = this.add.image(1299, 93, "Sep2005", "exit0001.png");
        page5.add(exit0001_png_1_1_1_1);

        // next_page0001_png_1_1_1_1
        const next_page0001_png_1_1_1_1 = this.add.image(1276, 700, "Sep2005", "next-page0001.png");
        page5.add(next_page0001_png_1_1_1_1);

        // last_page0001_png_1_1_1
        const last_page0001_png_1_1_1 = this.add.image(260, 700, "Sep2005", "last-page0001.png");
        page5.add(last_page0001_png_1_1_1);

        // blue0001_png
        const blue0001_png = this.add.image(909, 236, "Sep2005", "blue0001.png");
        page5.add(blue0001_png);

        // green0001_png
        const green0001_png = this.add.image(1054, 237, "Sep2005", "green0001.png");
        page5.add(green0001_png);

        // pink0001_png
        const pink0001_png = this.add.image(1198, 237, "Sep2005", "pink0001.png");
        page5.add(pink0001_png);

        // black0001_png
        const black0001_png = this.add.image(909, 372, "Sep2005", "black0001.png");
        page5.add(black0001_png);

        // red0001_png
        const red0001_png = this.add.image(1054, 372, "Sep2005", "red0001.png");
        page5.add(red0001_png);

        // orange0001_png
        const orange0001_png = this.add.image(1198, 372, "Sep2005", "orange0001.png");
        page5.add(orange0001_png);

        // yellow0001_png
        const yellow0001_png = this.add.image(909, 507, "Sep2005", "yellow0001.png");
        page5.add(yellow0001_png);

        // purple0001_png
        const purple0001_png = this.add.image(1054, 507, "Sep2005", "purple0001.png");
        page5.add(purple0001_png);

        // brown0001_png
        const brown0001_png = this.add.image(1198, 507, "Sep2005", "brown0001.png");
        page5.add(brown0001_png);

        // darkgreen0001_png
        const darkgreen0001_png = this.add.image(1054, 642, "Sep2005", "darkgreen0001.png");
        page5.add(darkgreen0001_png);

        // lightblue0001_png
        const lightblue0001_png = this.add.image(1198, 642, "Sep2005", "lightblue0001.png");
        page5.add(lightblue0001_png);

        // darkpink0001_png
        const darkpink0001_png = this.add.image(909, 642, "Sep2005", "darkpink0001.png");
        page5.add(darkpink0001_png);

        // ellipse
        const ellipse = this.add.ellipse(326, 436, 128, 128);
        ellipse.scaleX = 0.6015478759037696;
        ellipse.scaleY = 0.6076696363018034;
        ellipse.isFilled = true;
        ellipse.fillAlpha = 0;
        page5.add(ellipse);

        // page4
        const page4 = this.add.container(0, 0);
        page4.visible = false;

        // pAGE_4_png
        const pAGE_4_png = this.add.image(768, 431, "Sep2005", "PAGE 4.png");
        page4.add(pAGE_4_png);

        // buy-sweat
        const buy_sweat = this.add.image(332, 599, "Sep2005", "big-buy0001.png");
        page4.add(buy_sweat);

        // exit0001_png_1_1_1
        const exit0001_png_1_1_1 = this.add.image(1297, 92, "Sep2005", "exit0001.png");
        page4.add(exit0001_png_1_1_1);

        // last_page0001_png_1_1
        const last_page0001_png_1_1 = this.add.image(258, 700, "Sep2005", "last-page0001.png");
        page4.add(last_page0001_png_1_1);

        // next_page0001_png_1_1_1
        const next_page0001_png_1_1_1 = this.add.image(1274, 699, "Sep2005", "next-page0001.png");
        page4.add(next_page0001_png_1_1_1);

        // buy-duffle
        const buy_duffle = this.add.image(632, 273, "Sep2005", "big-buy0001.png");
        page4.add(buy_duffle);

        // small-night
        const small_night = this.add.image(912, 353, "Sep2005", "small-buy0001.png");
        page4.add(small_night);

        // small-bowtie
        const small_bowtie = this.add.image(1169, 525, "Sep2005", "small-buy0001.png");
        page4.add(small_bowtie);

        // small-sunglasses
        const small_sunglasses = this.add.image(946, 739, "Sep2005", "small-buy0001.png");
        page4.add(small_sunglasses);

        // sec-roman
        const sec_roman = this.add.ellipse(1282, 327, 128, 128);
        sec_roman.scaleX = 0.3205912312918101;
        sec_roman.scaleY = 0.3004642695097448;
        sec_roman.isFilled = true;
        sec_roman.fillAlpha = 0;
        page4.add(sec_roman);

        // page3
        const page3 = this.add.container(0, 0);
        page3.visible = false;

        // pAGE_3_png
        const pAGE_3_png = this.add.image(768, 431, "Sep2005", "PAGE 3.png");
        page3.add(pAGE_3_png);

        // buy-hockey
        const buy_hockey = this.add.image(349, 671, "Sep2005", "big-buy0001.png");
        page3.add(buy_hockey);

        // next_page0001_png_1_1
        const next_page0001_png_1_1 = this.add.image(1284, 698, "Sep2005", "next-page0001.png");
        page3.add(next_page0001_png_1_1);

        // last_page0001_png_1
        const last_page0001_png_1 = this.add.image(269, 699, "Sep2005", "last-page0001.png");
        page3.add(last_page0001_png_1);

        // exit0001_png_1_1
        const exit0001_png_1_1 = this.add.image(1302, 103, "Sep2005", "exit0001.png");
        page3.add(exit0001_png_1_1);

        // small-3d
        const small_3d = this.add.image(622, 739, "Sep2005", "small-buy0001.png");
        page3.add(small_3d);

        // small-snork
        const small_snork = this.add.image(622, 364, "Sep2005", "small-buy0001.png");
        page3.add(small_snork);

        // small-flowerhat
        const small_flowerhat = this.add.image(1141, 208, "Sep2005", "small-buy0001.png");
        page3.add(small_flowerhat);

        // small-grass
        const small_grass = this.add.image(1228, 420, "Sep2005", "small-buy0001.png");
        page3.add(small_grass);

        // small-headphones
        const small_headphones = this.add.image(1214, 727, "Sep2005", "small-buy0001.png");
        page3.add(small_headphones);

        // sec-tiara
        const sec_tiara = this.add.ellipse(959, 166, 128, 128);
        sec_tiara.scaleX = 0.3205912312918101;
        sec_tiara.scaleY = 0.3004642695097448;
        sec_tiara.isFilled = true;
        sec_tiara.fillAlpha = 0;
        page3.add(sec_tiara);

        // sec-snork
        const sec_snork = this.add.ellipse(616, 209, 128, 128);
        sec_snork.scaleX = 0.3205912312918101;
        sec_snork.scaleY = 0.3004642695097448;
        sec_snork.isFilled = true;
        sec_snork.fillAlpha = 0;
        page3.add(sec_snork);

        // sec-ballshoes
        const sec_ballshoes = this.add.ellipse(1114, 314, 128, 128);
        sec_ballshoes.scaleX = 0.3205912312918101;
        sec_ballshoes.scaleY = 0.3004642695097448;
        sec_ballshoes.isFilled = true;
        sec_ballshoes.fillAlpha = 0;
        page3.add(sec_ballshoes);

        // page2
        const page2 = this.add.container(0, 0);
        page2.visible = false;

        // pAGE_2_png
        const pAGE_2_png = this.add.image(768, 431, "Sep2005", "PAGE 2.png");
        page2.add(pAGE_2_png);

        // buy-poloshirt
        const buy_poloshirt = this.add.image(608, 662, "Sep2005", "big-buy0001.png");
        page2.add(buy_poloshirt);

        // next_page0001_png_1
        const next_page0001_png_1 = this.add.image(1277, 699, "Sep2005", "next-page0001.png");
        page2.add(next_page0001_png_1);

        // last_page0001_png
        const last_page0001_png = this.add.image(259, 699, "Sep2005", "last-page0001.png");
        page2.add(last_page0001_png);

        // buy-hardhat
        const buy_hardhat = this.add.image(608, 300, "Sep2005", "big-buy0001.png");
        page2.add(buy_hardhat);

        // buy-hardhat_1
        const buy_hardhat_1 = this.add.image(907, 728, "Sep2005", "big-buy0001.png");
        page2.add(buy_hardhat_1);

        // small-cowboyhat
        const small_cowboyhat = this.add.image(901, 522, "Sep2005", "small-buy0001.png");
        page2.add(small_cowboyhat);

        // small-cowboyhat_1
        const small_cowboyhat_1 = this.add.image(1248, 352, "Sep2005", "small-buy0001.png");
        page2.add(small_cowboyhat_1);

        // exit0001_png_1
        const exit0001_png_1 = this.add.image(1294, 99, "Sep2005", "exit0001.png");
        page2.add(exit0001_png_1);

        // vikinghelmet-rec
        const vikinghelmet_rec = this.add.rectangle(877, 144, 128, 128);
        vikinghelmet_rec.scaleX = 1.1244893036950843;
        vikinghelmet_rec.scaleY = 0.39346023211918507;
        vikinghelmet_rec.isFilled = true;
        vikinghelmet_rec.fillAlpha = 0;
        page2.add(vikinghelmet_rec);

        // sec-toque
        const sec_toque = this.add.ellipse(368, 347, 128, 128);
        sec_toque.scaleX = 0.19270091046363402;
        sec_toque.scaleY = 0.18425493561131656;
        sec_toque.isFilled = true;
        sec_toque.fillAlpha = 0;
        page2.add(sec_toque);

        // page1
        const page1 = this.add.container(-1, 1);
        page1.visible = false;

        // pAGE_1_png
        const pAGE_1_png = this.add.image(765, 432, "Sep2005", "PAGE 1.png");
        page1.add(pAGE_1_png);

        // exit0001_png
        const exit0001_png = this.add.image(1090, 88, "Sep2005", "exit0001.png");
        page1.add(exit0001_png);

        // next_page0001_png
        const next_page0001_png = this.add.image(984, 697, "Sep2005", "next-page0001.png");
        page1.add(next_page0001_png);

        // sec-yscarf
        const sec_yscarf = this.add.ellipse(647, 215, 128, 128);
        sec_yscarf.scaleX = 0.19270091046363402;
        sec_yscarf.scaleY = 0.18425493561131656;
        sec_yscarf.isFilled = true;
        sec_yscarf.fillAlpha = 0;
        page1.add(sec_yscarf);

        // sec-pscarf
        const sec_pscarf = this.add.ellipse(886, 293, 128, 128);
        sec_pscarf.scaleX = 0.19270091046363402;
        sec_pscarf.scaleY = 0.18425493561131656;
        sec_pscarf.isFilled = true;
        sec_pscarf.fillAlpha = 0;
        page1.add(sec_pscarf);

        // sec-pduff
        const sec_pduff = this.add.ellipse(603, 115, 128, 128);
        sec_pduff.scaleX = 0.14043680007744766;
        sec_pduff.scaleY = -0.3687249726285998;
        sec_pduff.isFilled = true;
        sec_pduff.fillAlpha = 0;
        page1.add(sec_pduff);

        // buttons
        const buttons = this.add.container(189, 41);
        buttons.visible = false;

        // coins
        const coins = this.add.text(1130, 790, "", {});
        coins.setOrigin(1, 0);
        coins.text = "YOUR COINS:";
        coins.setStyle({ "align": "right", "fixedWidth":600,"fontFamily": "CCComiccrazy", "fontSize": "32px", "stroke": "#000", "strokeThickness":9});
        buttons.add(coins);

        // lists
        const pages = [page1, page2, page3, page4, page5, page6];

        // block (components)
        new Interactive(block);

        // exit0001_png_2 (components)
        const exit0001_png_2Button = new Button(exit0001_png_2);
        exit0001_png_2Button.spriteName = "exit0001.png";
        exit0001_png_2Button.callback = () => this.close();
        exit0001_png_2Button.pixelPerfect = true;

        // last_page0001_png_1_1_1_1 (components)
        const last_page0001_png_1_1_1_1Button = new Button(last_page0001_png_1_1_1_1);
        last_page0001_png_1_1_1_1Button.spriteName = "last-page0001.png";
        last_page0001_png_1_1_1_1Button.callback = () => this.prevPage();
        last_page0001_png_1_1_1_1Button.pixelPerfect = true;

        // sec_pinkhoodie (components)
        const sec_pinkhoodieSimpleButton = new SimpleButton(sec_pinkhoodie);
        sec_pinkhoodieSimpleButton.callback = () => this.interface.prompt.showItem(222);

        // sec_blackguitar (components)
        const sec_blackguitarSimpleButton = new SimpleButton(sec_blackguitar);
        sec_blackguitarSimpleButton.callback = () => this.interface.prompt.showItem(338);

        // sec_princess (components)
        const sec_princessSimpleButton = new SimpleButton(sec_princess);
        sec_princessSimpleButton.callback = () => this.interface.prompt.showItem(228);

        // sec_sneaks (components)
        const sec_sneaksSimpleButton = new SimpleButton(sec_sneaks);
        sec_sneaksSimpleButton.callback = () => this.interface.prompt.showItem(352);

        // sec_baller (components)
        const sec_ballerSimpleButton = new SimpleButton(sec_baller);
        sec_ballerSimpleButton.callback = () => this.interface.prompt.showItem(256);

        // exit0001_png_1_1_1_1 (components)
        const exit0001_png_1_1_1_1Button = new Button(exit0001_png_1_1_1_1);
        exit0001_png_1_1_1_1Button.spriteName = "exit0001.png";
        exit0001_png_1_1_1_1Button.callback = () => this.close();
        exit0001_png_1_1_1_1Button.pixelPerfect = true;

        // next_page0001_png_1_1_1_1 (components)
        const next_page0001_png_1_1_1_1Button = new Button(next_page0001_png_1_1_1_1);
        next_page0001_png_1_1_1_1Button.spriteName = "next-page0001.png";
        next_page0001_png_1_1_1_1Button.callback = () => this.nextPage();
        next_page0001_png_1_1_1_1Button.pixelPerfect = true;

        // last_page0001_png_1_1_1 (components)
        const last_page0001_png_1_1_1Button = new Button(last_page0001_png_1_1_1);
        last_page0001_png_1_1_1Button.spriteName = "last-page0001.png";
        last_page0001_png_1_1_1Button.callback = () => this.prevPage();
        last_page0001_png_1_1_1Button.pixelPerfect = true;

        // blue0001_png (components)
        const blue0001_pngButton = new Button(blue0001_png);
        blue0001_pngButton.spriteName = "blue0001.png";
        blue0001_pngButton.callback = () => this.interface.prompt.showItem(1);
        blue0001_pngButton.activeFrame = false;

        // green0001_png (components)
        const green0001_pngButton = new Button(green0001_png);
        green0001_pngButton.spriteName = "green0001.png";
        green0001_pngButton.callback = () => this.interface.prompt.showItem(2);
        green0001_pngButton.activeFrame = false;

        // pink0001_png (components)
        const pink0001_pngButton = new Button(pink0001_png);
        pink0001_pngButton.spriteName = "pink0001.png";
        pink0001_pngButton.callback = () => this.interface.prompt.showItem(3);
        pink0001_pngButton.activeFrame = false;

        // black0001_png (components)
        const black0001_pngButton = new Button(black0001_png);
        black0001_pngButton.spriteName = "black0001.png";
        black0001_pngButton.callback = () => this.interface.prompt.showItem(4);
        black0001_pngButton.activeFrame = false;

        // red0001_png (components)
        const red0001_pngButton = new Button(red0001_png);
        red0001_pngButton.spriteName = "red0001.png";
        red0001_pngButton.callback = () => this.interface.prompt.showItem(5);
        red0001_pngButton.activeFrame = false;

        // orange0001_png (components)
        const orange0001_pngButton = new Button(orange0001_png);
        orange0001_pngButton.spriteName = "orange0001.png";
        orange0001_pngButton.callback = () => this.interface.prompt.showItem(6);
        orange0001_pngButton.activeFrame = false;

        // yellow0001_png (components)
        const yellow0001_pngButton = new Button(yellow0001_png);
        yellow0001_pngButton.spriteName = "yellow0001.png";
        yellow0001_pngButton.callback = () => this.interface.prompt.showItem(7);
        yellow0001_pngButton.activeFrame = false;

        // purple0001_png (components)
        const purple0001_pngButton = new Button(purple0001_png);
        purple0001_pngButton.spriteName = "purple0001.png";
        purple0001_pngButton.callback = () => this.interface.prompt.showItem(8);
        purple0001_pngButton.activeFrame = false;

        // brown0001_png (components)
        const brown0001_pngButton = new Button(brown0001_png);
        brown0001_pngButton.spriteName = "brown0001.png";
        brown0001_pngButton.callback = () => this.interface.prompt.showItem(9);
        brown0001_pngButton.activeFrame = false;

        // darkgreen0001_png (components)
        const darkgreen0001_pngButton = new Button(darkgreen0001_png);
        darkgreen0001_pngButton.spriteName = "darkgreen0001.png";
        darkgreen0001_pngButton.callback = () => this.interface.prompt.showItem(11);
        darkgreen0001_pngButton.activeFrame = false;

        // lightblue0001_png (components)
        const lightblue0001_pngButton = new Button(lightblue0001_png);
        lightblue0001_pngButton.spriteName = "lightblue0001.png";
        lightblue0001_pngButton.callback = () => this.interface.prompt.showItem(12);
        lightblue0001_pngButton.activeFrame = false;

        // darkpink0001_png (components)
        const darkpink0001_pngButton = new Button(darkpink0001_png);
        darkpink0001_pngButton.spriteName = "darkpink0001.png";
        darkpink0001_pngButton.callback = () => this.interface.prompt.showItem(10);
        darkpink0001_pngButton.activeFrame = false;

        // ellipse (components)
        const ellipseSimpleButton = new SimpleButton(ellipse);
        ellipseSimpleButton.callback = () => this.interface.prompt.showItem(13);

        // buy_sweat (components)
        const buy_sweatButton = new Button(buy_sweat);
        buy_sweatButton.spriteName = "big-buy0001.png";
        buy_sweatButton.callback = () => this.interface.prompt.showItem(221);

        // exit0001_png_1_1_1 (components)
        const exit0001_png_1_1_1Button = new Button(exit0001_png_1_1_1);
        exit0001_png_1_1_1Button.spriteName = "exit0001.png";
        exit0001_png_1_1_1Button.callback = () => this.close();
        exit0001_png_1_1_1Button.pixelPerfect = true;

        // last_page0001_png_1_1 (components)
        const last_page0001_png_1_1Button = new Button(last_page0001_png_1_1);
        last_page0001_png_1_1Button.spriteName = "last-page0001.png";
        last_page0001_png_1_1Button.callback = () => this.prevPage();
        last_page0001_png_1_1Button.pixelPerfect = true;

        // next_page0001_png_1_1_1 (components)
        const next_page0001_png_1_1_1Button = new Button(next_page0001_png_1_1_1);
        next_page0001_png_1_1_1Button.spriteName = "next-page0001.png";
        next_page0001_png_1_1_1Button.callback = () => this.nextPage();
        next_page0001_png_1_1_1Button.pixelPerfect = true;

        // buy_duffle (components)
        const buy_duffleButton = new Button(buy_duffle);
        buy_duffleButton.spriteName = "big-buy0001.png";
        buy_duffleButton.callback = () => this.interface.prompt.showItem(219);

        // small_night (components)
        const small_nightButton = new Button(small_night);
        small_nightButton.spriteName = "small-buy0001.png";
        small_nightButton.callback = () => this.interface.prompt.showItem(102);

        // small_bowtie (components)
        const small_bowtieButton = new Button(small_bowtie);
        small_bowtieButton.spriteName = "small-buy0001.png";
        small_bowtieButton.callback = () => this.interface.prompt.showItem(214);

        // small_sunglasses (components)
        const small_sunglassesButton = new Button(small_sunglasses);
        small_sunglassesButton.spriteName = "small-buy0001.png";
        small_sunglassesButton.callback = () => this.interface.prompt.showItem(101);

        // sec_roman (components)
        const sec_romanSimpleButton = new SimpleButton(sec_roman);
        sec_romanSimpleButton.callback = () => this.interface.prompt.showItem(451);

        // buy_hockey (components)
        const buy_hockeyButton = new Button(buy_hockey);
        buy_hockeyButton.spriteName = "big-buy0001.png";
        buy_hockeyButton.callback = () => this.interface.prompt.showItem(220);

        // next_page0001_png_1_1 (components)
        const next_page0001_png_1_1Button = new Button(next_page0001_png_1_1);
        next_page0001_png_1_1Button.spriteName = "next-page0001.png";
        next_page0001_png_1_1Button.callback = () => this.nextPage();
        next_page0001_png_1_1Button.pixelPerfect = true;

        // last_page0001_png_1 (components)
        const last_page0001_png_1Button = new Button(last_page0001_png_1);
        last_page0001_png_1Button.spriteName = "last-page0001.png";
        last_page0001_png_1Button.callback = () => this.prevPage();
        last_page0001_png_1Button.pixelPerfect = true;

        // exit0001_png_1_1 (components)
        const exit0001_png_1_1Button = new Button(exit0001_png_1_1);
        exit0001_png_1_1Button.spriteName = "exit0001.png";
        exit0001_png_1_1Button.callback = () => this.close();
        exit0001_png_1_1Button.pixelPerfect = true;

        // small_3d (components)
        const small_3dButton = new Button(small_3d);
        small_3dButton.spriteName = "small-buy0001.png";
        small_3dButton.callback = () => this.interface.prompt.showItem(103);

        // small_snork (components)
        const small_snorkButton = new Button(small_snork);
        small_snorkButton.spriteName = "small-buy0001.png";
        small_snorkButton.callback = () => this.interface.prompt.showItem(131);

        // small_flowerhat (components)
        const small_flowerhatButton = new Button(small_flowerhat);
        small_flowerhatButton.spriteName = "small-buy0001.png";
        small_flowerhatButton.callback = () => this.interface.prompt.showItem(408);

        // small_grass (components)
        const small_grassButton = new Button(small_grass);
        small_grassButton.spriteName = "small-buy0001.png";
        small_grassButton.callback = () => this.interface.prompt.showItem(212);

        // small_headphones (components)
        const small_headphonesButton = new Button(small_headphones);
        small_headphonesButton.spriteName = "small-buy0001.png";
        small_headphonesButton.callback = () => this.interface.prompt.showItem(481);

        // sec_tiara (components)
        const sec_tiaraSimpleButton = new SimpleButton(sec_tiara);
        sec_tiaraSimpleButton.callback = () => this.interface.prompt.showItem(412);

        // sec_snork (components)
        const sec_snorkSimpleButton = new SimpleButton(sec_snork);
        sec_snorkSimpleButton.callback = () => this.interface.prompt.showItem(139);

        // sec_ballshoes (components)
        const sec_ballshoesSimpleButton = new SimpleButton(sec_ballshoes);
        sec_ballshoesSimpleButton.callback = () => this.interface.prompt.showItem(353);

        // buy_poloshirt (components)
        const buy_poloshirtButton = new Button(buy_poloshirt);
        buy_poloshirtButton.spriteName = "big-buy0001.png";
        buy_poloshirtButton.callback = () => this.interface.prompt.showItem(201);

        // next_page0001_png_1 (components)
        const next_page0001_png_1Button = new Button(next_page0001_png_1);
        next_page0001_png_1Button.spriteName = "next-page0001.png";
        next_page0001_png_1Button.callback = () => this.nextPage();
        next_page0001_png_1Button.pixelPerfect = true;

        // last_page0001_png (components)
        const last_page0001_pngButton = new Button(last_page0001_png);
        last_page0001_pngButton.spriteName = "last-page0001.png";
        last_page0001_pngButton.callback = () => this.prevPage();
        last_page0001_pngButton.pixelPerfect = true;

        // buy_hardhat (components)
        const buy_hardhatButton = new Button(buy_hardhat);
        buy_hardhatButton.spriteName = "big-buy0001.png";
        buy_hardhatButton.callback = () => this.interface.prompt.showItem(403);

        // buy_hardhat_1 (components)
        const buy_hardhat_1Button = new Button(buy_hardhat_1);
        buy_hardhat_1Button.spriteName = "big-buy0001.png";
        buy_hardhat_1Button.callback = () => this.interface.prompt.showItem(401);

        // small_cowboyhat (components)
        const small_cowboyhatButton = new Button(small_cowboyhat);
        small_cowboyhatButton.spriteName = "small-buy0001.png";
        small_cowboyhatButton.callback = () => this.interface.prompt.showItem(404);

        // small_cowboyhat_1 (components)
        const small_cowboyhat_1Button = new Button(small_cowboyhat_1);
        small_cowboyhat_1Button.spriteName = "small-buy0001.png";
        small_cowboyhat_1Button.callback = () => this.interface.prompt.showItem(405);

        // exit0001_png_1 (components)
        const exit0001_png_1Button = new Button(exit0001_png_1);
        exit0001_png_1Button.spriteName = "exit0001.png";
        exit0001_png_1Button.callback = () => this.close();
        exit0001_png_1Button.pixelPerfect = true;

        // vikinghelmet_rec (components)
        const vikinghelmet_recSimpleButton = new SimpleButton(vikinghelmet_rec);
        vikinghelmet_recSimpleButton.callback = () => this.interface.prompt.showItem(452);

        // sec_toque (components)
        const sec_toqueSimpleButton = new SimpleButton(sec_toque);
        sec_toqueSimpleButton.callback = () => this.interface.prompt.showItem(420);

        // exit0001_png (components)
        const exit0001_pngButton = new Button(exit0001_png);
        exit0001_pngButton.spriteName = "exit0001.png";
        exit0001_pngButton.callback = () => this.close();
        exit0001_pngButton.pixelPerfect = true;

        // next_page0001_png (components)
        const next_page0001_pngButton = new Button(next_page0001_png);
        next_page0001_pngButton.spriteName = "next-page0001.png";
        next_page0001_pngButton.callback = () => this.nextPage();
        next_page0001_pngButton.pixelPerfect = true;

        // sec_yscarf (components)
        const sec_yscarfSimpleButton = new SimpleButton(sec_yscarf);
        sec_yscarfSimpleButton.callback = () => this.interface.prompt.showItem(172);

        // sec_pscarf (components)
        const sec_pscarfSimpleButton = new SimpleButton(sec_pscarf);
        sec_pscarfSimpleButton.callback = () => this.interface.prompt.showItem(175);

        // sec_pduff (components)
        const sec_pduffSimpleButton = new SimpleButton(sec_pduff);
        sec_pduffSimpleButton.callback = () => this.interface.prompt.showItem(283);

        this.blue0001_png = blue0001_png;
        this.green0001_png = green0001_png;
        this.pink0001_png = pink0001_png;
        this.black0001_png = black0001_png;
        this.red0001_png = red0001_png;
        this.orange0001_png = orange0001_png;
        this.yellow0001_png = yellow0001_png;
        this.purple0001_png = purple0001_png;
        this.brown0001_png = brown0001_png;
        this.darkgreen0001_png = darkgreen0001_png;
        this.lightblue0001_png = lightblue0001_png;
        this.darkpink0001_png = darkpink0001_png;
        this.buy_sweat = buy_sweat;
        this.buy_duffle = buy_duffle;
        this.small_night = small_night;
        this.small_bowtie = small_bowtie;
        this.small_sunglasses = small_sunglasses;
        this.buy_hockey = buy_hockey;
        this.small_3d = small_3d;
        this.small_snork = small_snork;
        this.small_flowerhat = small_flowerhat;
        this.small_grass = small_grass;
        this.small_headphones = small_headphones;
        this.buy_poloshirt = buy_poloshirt;
        this.buy_hardhat = buy_hardhat;
        this.buy_hardhat_1 = buy_hardhat_1;
        this.small_cowboyhat = small_cowboyhat;
        this.small_cowboyhat_1 = small_cowboyhat_1;
        this.vikinghelmet_rec = vikinghelmet_rec;
        this.buttons = buttons;
        this.coins = coins;
        this.pages = pages;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()

        this.setCoins(this.world.client.coins)
    }

    setCoins(coins) {
        this.coins.text = `YOUR COINS: ${coins}`
    }

    buy(item) {
        this.interface.prompt.showItem(item)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
