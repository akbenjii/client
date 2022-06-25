import BaseContainer from "@scenes/base/BaseContainer";
import { Button } from "@scenes/components/components"

/* START OF COMPILED CODE */

export default class PuffleCare extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 540, y ?? 611.180446264649);

        // puffle_care_bg
        const puffle_care_bg = scene.add.image(0, -257.180449803358, "main", "puffle_care/bg");
        this.add(puffle_care_bg);

        // care_btn
        const care_btn = scene.add.sprite(0, -103.18044980335799, "main", "puffle_care/care_btn");
        this.add(care_btn);

        // walk_btn
        const walk_btn = scene.add.sprite(-75, -47.18044980335799, "main", "puffle_care/walk_btn");
        this.add(walk_btn);

        // swap_btn
        const swap_btn = scene.add.sprite(75, -47.18044980335799, "main", "puffle_care/swap_btn");
        this.add(swap_btn);

        // rest
        const rest = scene.add.container(0, -177.180449803358);
        this.add(rest);

        // rest_bg
        const rest_bg = scene.add.image(0, 0, "main", "puffle_care/bar_back");
        rest.add(rest_bg);

        // rest_bar
        const rest_bar = scene.add.image(13, 0, "main", "puffle_care/bar");
        rest.add(rest_bar);

        // rest_icon
        const rest_icon = scene.add.image(-45, 0, "main", "puffle_care/rest_icon");
        rest.add(rest_icon);

        // clean
        const clean = scene.add.container(0, -222.180449803358);
        this.add(clean);

        // clean_bg
        const clean_bg = scene.add.image(0, 0, "main", "puffle_care/bar_back");
        clean.add(clean_bg);

        // clean_bar
        const clean_bar = scene.add.image(13, 0, "main", "puffle_care/bar");
        clean.add(clean_bar);

        // clean_icon
        const clean_icon = scene.add.image(-45, 0, "main", "puffle_care/clean_icon");
        clean.add(clean_icon);

        // play
        const play = scene.add.container(0, -267.180449803358);
        this.add(play);

        // play_bg
        const play_bg = scene.add.image(0, 0, "main", "puffle_care/bar_back");
        play.add(play_bg);

        // play_bar
        const play_bar = scene.add.image(13, 0, "main", "puffle_care/bar");
        play.add(play_bar);

        // play_icon
        const play_icon = scene.add.image(-45, 0, "main", "puffle_care/play_icon");
        play.add(play_icon);

        // food
        const food = scene.add.container(0, -312.180449803358);
        this.add(food);

        // food_bg
        const food_bg = scene.add.image(0, 0, "main", "puffle_care/bar_back");
        food.add(food_bg);

        // food_bar
        const food_bar = scene.add.image(13, 0, "main", "puffle_care/bar");
        food.add(food_bar);

        // food_icon
        const food_icon = scene.add.image(-45, 0, "main", "puffle_care/food_icon");
        food.add(food_icon);

        // name_txt
        const name_txt = scene.add.text(0, -352.180449803358, "", {});
        name_txt.setOrigin(0.5, 0.5);
        name_txt.text = "Puffle Name";
        name_txt.setStyle({ "color": "#000000ff", "fontFamily": "Burbank Small", "fontSize": "18px", "fontStyle": "bold" });
        this.add(name_txt);

        // care_btn (components)
        const care_btnButton = new Button(care_btn);
        care_btnButton.spriteName = "puffle_care/care_btn";
        care_btnButton.callback = () => this.onCare();

        // walk_btn (components)
        const walk_btnButton = new Button(walk_btn);
        walk_btnButton.spriteName = "puffle_care/walk_btn";
        walk_btnButton.callback = () => this.onWalk();

        // swap_btn (components)
        const swap_btnButton = new Button(swap_btn);
        swap_btnButton.spriteName = "puffle_care/swap_btn";
        swap_btnButton.callback = () => this.onSwap();

        this.puffle_care_bg = puffle_care_bg;
        this.care_btn = care_btn;
        this.walk_btn = walk_btn;
        this.swap_btn = swap_btn;
        this.rest = rest;
        this.rest_bg = rest_bg;
        this.rest_bar = rest_bar;
        this.rest_icon = rest_icon;
        this.clean = clean;
        this.clean_bg = clean_bg;
        this.clean_bar = clean_bar;
        this.clean_icon = clean_icon;
        this.play = play;
        this.play_bg = play_bg;
        this.play_bar = play_bar;
        this.play_icon = play_icon;
        this.food = food;
        this.food_bg = food_bg;
        this.food_bar = food_bar;
        this.food_icon = food_icon;
        this.name_txt = name_txt;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Image} */
    puffle_care_bg;
    /** @type {Phaser.GameObjects.Sprite} */
    care_btn;
    /** @type {Phaser.GameObjects.Sprite} */
    walk_btn;
    /** @type {Phaser.GameObjects.Sprite} */
    swap_btn;
    /** @type {Phaser.GameObjects.Container} */
    rest;
    /** @type {Phaser.GameObjects.Image} */
    rest_bg;
    /** @type {Phaser.GameObjects.Image} */
    rest_bar;
    /** @type {Phaser.GameObjects.Image} */
    rest_icon;
    /** @type {Phaser.GameObjects.Container} */
    clean;
    /** @type {Phaser.GameObjects.Image} */
    clean_bg;
    /** @type {Phaser.GameObjects.Image} */
    clean_bar;
    /** @type {Phaser.GameObjects.Image} */
    clean_icon;
    /** @type {Phaser.GameObjects.Container} */
    play;
    /** @type {Phaser.GameObjects.Image} */
    play_bg;
    /** @type {Phaser.GameObjects.Image} */
    play_bar;
    /** @type {Phaser.GameObjects.Image} */
    play_icon;
    /** @type {Phaser.GameObjects.Container} */
    food;
    /** @type {Phaser.GameObjects.Image} */
    food_bg;
    /** @type {Phaser.GameObjects.Image} */
    food_bar;
    /** @type {Phaser.GameObjects.Image} */
    food_icon;
    /** @type {Phaser.GameObjects.Text} */
    name_txt;

    /* START-USER-CODE */

    showPuffle(args){
        this.visible = true

        let restpos = Math.floor((100 - args.rest) * -0.67)
        if (restpos < -30) {
            this.rest_bar.setFrame("puffle_care/bar_shorter")
            restpos = restpos + 27
        }
        else if (restpos < -17) {
            this.rest_bar.setFrame("puffle_care/bar_short")
            restpos = restpos + 14
        }
        else{
            this.rest_bar.setFrame("puffle_care/bar")
        }
        this.rest_bar.x = restpos;

        let cleanpos = Math.floor((100 - args.clean) * -0.67)
        if (cleanpos < -30) {
            this.clean_bar.setFrame("puffle_care/bar_shorter")
            cleanpos = cleanpos + 27
        }
        else if (cleanpos < -17) {
            this.clean_bar.setFrame("puffle_care/bar_short")
            cleanpos = cleanpos + 14
        }
        else{
            this.clean_bar.setFrame("puffle_care/bar")
        }
        this.clean_bar.x = cleanpos;

        let playpos = Math.floor((100 - args.play) * -0.67)
        if (playpos < -30) {
            this.play_bar.setFrame("puffle_care/bar_shorter")
            playpos = playpos + 27
        }
        else if (playpos < -17) {
            this.play_bar.setFrame("puffle_care/bar_short")
            playpos = playpos + 14
        }
        else{
            this.play_bar.setFrame("puffle_care/bar")
        }
        this.play_bar.x = playpos;

        let foodpos = Math.floor((100 - args.food) * -0.67)
        if (foodpos < -30) {
            this.food_bar.setFrame("puffle_care/bar_shorter")
            foodpos = foodpos + 27
        }
        else if (foodpos < -17) {
            this.food_bar.setFrame("puffle_care/bar_short")
            foodpos = foodpos + 14
        }
        else{
            this.food_bar.setFrame("puffle_care/bar")
        }
        this.food_bar.x = foodpos;

        this.name_txt.text = this.world.room.puffles[args.puffleId].name

        if (args.puffleId !== this.world.client.penguin.puffle){
            this.swap_btn.visible = false
            this.walk_btn.visible = true
        }
        else{
            this.swap_btn.visible = true
            this.walk_btn.visible = false
        }

        this.args = args

    }

    onWalk(){
        this.world.network.send("walk_puffle", {puffle: this.args.puffleId})
        this.visible = false
    }

    onCare(){
        this.visible = false
    }

    onSwap(){
        this.world.network.send("stop_walking")
        this.visible = false
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
