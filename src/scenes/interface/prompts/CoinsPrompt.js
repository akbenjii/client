import BaseContainer from '@scenes/base/BaseContainer'

import { Interactive, NineSlice, Button, SimpleButton } from '@components/components'

import SingleButton from './buttons/SingleButton'
import PromptStamp from "@scenes/interface/prompts/PromptStamp";


/* START OF COMPILED CODE */

export default class CoinsPrompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 470);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.block;
        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Phaser.GameObjects.Image} */
        this.icon;
        /** @type {Phaser.GameObjects.Image} */
        this.doneBtn;
        /** @type {Phaser.GameObjects.Text} */
        this.totalCoins;
        /** @type {Phaser.GameObjects.Text} */
        this.coinsEarned;
        /** @type {Phaser.GameObjects.Image} */
        this.coins_right;
        /** @type {Phaser.GameObjects.Image} */
        this.coins_left;
        /** @type {Phaser.GameObjects.Text} */
        this.gameName;
        /** @type {Phaser.GameObjects.Text} */
        this.useCoins;
        /** @type {Phaser.GameObjects.Text} */
        this.buyClothes;
        /** @type {Phaser.GameObjects.Text} */
        this.adoptPet;
        /** @type {Phaser.GameObjects.Text} */
        this.decorateIgloo;
        /** @type {Phaser.GameObjects.Text} */
        this.done;
        /** @type {Phaser.GameObjects.Image} */
        this.divider;
        /** @type {Phaser.GameObjects.Image} */
        this.stampIcon;
        /** @type {Phaser.GameObjects.Text} */
        this.stampNumber;
        /** @type {Phaser.GameObjects.Container} */
        this.bonus;
        /** @type {Phaser.GameObjects.Text} */
        this.bonusLeft;
        /** @type {Phaser.GameObjects.Text} */
        this.bonusRight;
        /** @type {Phaser.GameObjects.Container} */
        this.stampLayer;
        /** @type {Phaser.GameObjects.Triangle} */
        this.nextPageBtn;
        /** @type {Phaser.GameObjects.Triangle} */
        this.prevPageBtn;


        this.visible = false;

        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(0, -40, "endscreens", "bg");
        this.add(bg);

        // icon
        const icon = scene.add.image(0, -336, "endscreens", "icons/aquagrabber");
        this.add(icon);

        // doneBtn
        const doneBtn = scene.add.image(0, 283, "endscreens", "close_btn");
        this.add(doneBtn);

        // totalCoins
        const totalCoins = scene.add.text(0, -160, "", {});
        totalCoins.setOrigin(0.5, 0.5);
        totalCoins.text = "Your total coins: 8888888";
        totalCoins.setStyle({ "color": "#005cc6ff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "stroke": "#ffffffff" });
        this.add(totalCoins);

        // coinsEarned
        const coinsEarned = scene.add.text(0, -195, "", {});
        coinsEarned.setOrigin(0.5, 0.5);
        coinsEarned.text = "Coins Earned: 88888";
        coinsEarned.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "45px", "fontStyle": "bold", "stroke": "#003d7cff", "strokeThickness":8});
        this.add(coinsEarned);

        // coins_right
        const coins_right = scene.add.image(320, -185, "endscreens", "coins");
        this.add(coins_right);

        // coins_left
        const coins_left = scene.add.image(-320, -185, "endscreens", "coins");
        coins_left.scaleX = -1;
        this.add(coins_left);

        // gameName
        const gameName = scene.add.text(0, -290, "", {});
        gameName.setOrigin(0.5, 0.5);
        gameName.text = "Aqua Grabber";
        gameName.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "50px", "fontStyle": "bold", "stroke": "#003d7cff", "strokeThickness":10});
        this.add(gameName);

        // useCoins
        const useCoins = scene.add.text(0, 76, "", {});
        useCoins.setOrigin(0.5, 0.5);
        useCoins.text = "Use your coins to:";
        useCoins.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "30px", "fontStyle": "bold", "stroke": "#ffffffff" });
        this.add(useCoins);

        // buyClothes
        const buyClothes = scene.add.text(-270, 216, "", {});
        buyClothes.setOrigin(0.5, 0.5);
        buyClothes.text = "Buy new clothing";
        buyClothes.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold", "stroke": "#ffffffff", "shadow.offsetX":1,"shadow.offsetY":2,"shadow.fill":true});
        this.add(buyClothes);

        // adoptPet
        const adoptPet = scene.add.text(0, 216, "", {});
        adoptPet.setOrigin(0.5, 0.5);
        adoptPet.text = "Adopt a pet";
        adoptPet.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold", "stroke": "#ffffffff", "shadow.offsetX":1,"shadow.offsetY":2,"shadow.fill":true});
        this.add(adoptPet);

        // decorateIgloo
        const decorateIgloo = scene.add.text(270, 216, "", {});
        decorateIgloo.setOrigin(0.5, 0.5);
        decorateIgloo.text = "Decorate your igloo";
        decorateIgloo.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold", "stroke": "#ffffffff", "shadow.offsetX":1,"shadow.offsetY":2,"shadow.fill":true});
        this.add(decorateIgloo);

        // done
        const done = scene.add.text(0, 283, "", {});
        done.setOrigin(0.5, 0.5);
        done.text = "Done";
        done.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "45px", "fontStyle": "bold", "stroke": "#003d7cff", "strokeThickness":8});
        this.add(done);

        // divider
        const divider = scene.add.image(0, -95, "endscreens", "divider");
        this.add(divider);

        // stampIcon
        const stampIcon = scene.add.image(-33, -95, "endscreens", "stamps");
        this.add(stampIcon);

        // stampNumber
        const stampNumber = scene.add.text(12, -95, "", {});
        stampNumber.setOrigin(0.5, 0.5);
        stampNumber.text = "22/22";
        stampNumber.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold", "stroke": "#ffffffff" });
        this.add(stampNumber);

        // bonus
        const bonus = scene.add.container(-320, -180);
        this.add(bonus);

        // bonusLeft
        const bonusLeft = scene.add.text(0, 0, "", {});
        bonusLeft.angle = -30;
        bonusLeft.setOrigin(0.5, 0.5);
        bonusLeft.text = "BONUS!";
        bonusLeft.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "45px", "fontStyle": "bold", "stroke": "#7c5900ff", "strokeThickness":8});
        bonus.add(bonusLeft);

        // bonusRight
        const bonusRight = scene.add.text(640, 0, "", {});
        bonusRight.angle = 30;
        bonusRight.setOrigin(0.5, 0.5);
        bonusRight.text = "BONUS!";
        bonusRight.setStyle({ "color": "#ffffffff", "fontFamily": "Burbank Small", "fontSize": "45px", "fontStyle": "bold", "stroke": "#7c5900ff", "strokeThickness":8});
        bonus.add(bonusRight);

        // stampLayer
        const stampLayer = scene.add.container(0, 0);
        this.add(stampLayer);

        // nextPageBtn
        const nextPageBtn = scene.add.triangle(360, -25, 0, 0, 64, 100, 128, 0);
        nextPageBtn.scaleX = 0.3683477972678916;
        nextPageBtn.scaleY = -0.2091128471890994;
        nextPageBtn.angle = 90;
        nextPageBtn.visible = false;
        nextPageBtn.isFilled = true;
        this.add(nextPageBtn);

        // prevPageBtn
        const prevPageBtn = scene.add.triangle(-360, -25, 0, 0, 64, 100, 128, 0);
        prevPageBtn.scaleX = 0.3683477972678916;
        prevPageBtn.scaleY = -0.2091128471890994;
        prevPageBtn.angle = -90;
        prevPageBtn.visible = false;
        prevPageBtn.isFilled = true;
        this.add(prevPageBtn);

        // block (components)
        new Interactive(block);

        // doneBtn (components)
        const doneBtnButton = new Button(doneBtn);
        doneBtnButton.spriteName = "close_btn";
        doneBtnButton.callback = () => { this.visible = false };

        // nextPageBtn (components)
        const nextPageBtnSimpleButton = new SimpleButton(nextPageBtn);
        nextPageBtnSimpleButton.callback = () => this.nextPage();

        // prevPageBtn (components)
        const prevPageBtnSimpleButton = new SimpleButton(prevPageBtn);
        prevPageBtnSimpleButton.callback = () => this.prevPage();

        this.block = block;
        this.bg = bg;
        this.icon = icon;
        this.doneBtn = doneBtn;
        this.totalCoins = totalCoins;
        this.coinsEarned = coinsEarned;
        this.coins_right = coins_right;
        this.coins_left = coins_left;
        this.gameName = gameName;
        this.useCoins = useCoins;
        this.buyClothes = buyClothes;
        this.adoptPet = adoptPet;
        this.decorateIgloo = decorateIgloo;
        this.done = done;
        this.divider = divider;
        this.stampIcon = stampIcon;
        this.stampNumber = stampNumber;
        this.bonus = bonus;
        this.bonusLeft = bonusLeft;
        this.bonusRight = bonusRight;
        this.stampLayer = stampLayer;
        this.nextPageBtn = nextPageBtn;
        this.prevPageBtn = prevPageBtn;

        /* START-USER-CTR-CODE */
        this.scene = scene
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    show(game, coins) {

        for (var x in this.stamps) {
            this.stamps[x].destroy();
        }

        let category;

        switch(game.toLowerCase()) {
            case "aquagrabber":
                category = 13
                break;
            case "astrobarrier":
                category = 14
                break;
            case "card":
                category = 38
                break;
            case "cjfire":
                category = 32
                break;
            case "cjsnow":
                category = 60
                break;
            case "cjwater":
                category = 34
                break;
            case "cartsurfer":
                category = 28
                break;
            case "catchinwaves":
                category = 15
                break;
            case "icefishing":
                category = 52
                break;
            case "jetpackadventure":
                category = 11
                break;
            case "pizzatron":
                category = 54
                break;
            case "pufflelaunch":
                category = 48
                break;
            case "pufflerescue":
                category = 57
                break;
            case "smoothie":
                category = 58
                break;
            case "sysdef":
                category = 46
                break;
            case "thinice":
                category = 16
                break;
            case "treasurehunt":
                category = 56
                break;
            default:
                category = 0
        }

        if (game == "Gift from a moderator!") {
            this.icon.setFrame("icons/aquagrabber")
            this.gameName.text = "Gift from a moderator!"
        }
        else {
            this.icon.setFrame(`icons/${game.toLowerCase()}`)
            this.gameName.text = this.world.getString(game)
        }
        
        this.coinsEarned.text = `Coins earned: ${coins.toString()}`
        this.totalCoins.text = `Your total coins: ${this.world.client.coins.toString()}`
        this.visible = true

        this.nextPageBtn.visible = false
        this.prevPageBtn.visible = false

        if (category === 0){
            this.stampNumber.visible = false
            this.stampIcon.visible = false
            this.divider.visible = false
            this.bonus.visible = false
            return
        }
        else {
            this.stampNumber.visible = true
            this.stampIcon.visible = true
            this.divider.visible = true
        }

        let categoryStamps = this.getCategoryStamps(category)

        if (categoryStamps[0].length > 1 && categoryStamps[1] === categoryStamps[0].length) {
            this.bonus.visible = true
        }
        else {
            this.bonus.visible = false
        }

        this.stampNumber.text = `${categoryStamps[1]}/${categoryStamps[0].length}`

        if (categoryStamps[0].length > 1) {
            this.getStamps(categoryStamps[0])
        }
    }

    getCategoryStamps(category){
        let categoryStamps = []
        let ownedCategoryStamps = []
        for (var stamp in this.crumbs.stamps){
            if (this.crumbs.stamps[stamp].groupid == category) {
                categoryStamps.push(stamp)
                if (this.world.client.stamps.includes(parseInt(stamp))) ownedCategoryStamps.push(stamp)
            }
        }
        return [categoryStamps, ownedCategoryStamps.length]
    }

    getStamps(stamps){
        let posArray = [-300, -225, -150, -75, 0, 75, 150, 225, 300]

        this.stamps = []

        for (var id in stamps) {
            let pos = this.stamps.length
            while (pos > 8) {
                pos -= 9
            }
            let stamp = new PromptStamp(this.scene, posArray[pos], -25, stamps[id]);
            if (this.stamps.length > 8) {
                stamp.visible = false
            }
            this.stampLayer.add(stamp);
            this.stamps.push(stamp)
        }

        this.page = 1
        if (this.stamps.length > 8) {
            this.nextPageBtn.visible = true
        }
    }

    nextPage(){
        this.page = this.page + 1
        for (var x in this.stamps) {
            if (x >= (this.page * 9) - 9 && x < (this.page * 9)) {
                this.stamps[x].visible = true
            }
            else {
                this.stamps[x].visible = false
            }
        }
        if (this.page === Math.ceil(this.stamps.length / 9)) {
            this.nextPageBtn.visible = false
        }
        else {
            this.nextPageBtn.visible = true
        }
        this.prevPageBtn.visible = true
    }

    prevPage(){
        this.page = this.page - 1
        for (var x in this.stamps) {
            if (x >= (this.page * 9) - 9 && x < (this.page * 9)) {
                this.stamps[x].visible = true
            }
            else {
                this.stamps[x].visible = false
            }
        }
        if (this.page === 1) {
            this.prevPageBtn.visible = false
        }
        this.nextPageBtn.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
