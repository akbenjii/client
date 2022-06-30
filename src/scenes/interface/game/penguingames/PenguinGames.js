import BaseContainer from '@scenes/base/BaseContainer'

import {
    Button,
    Interactive,
    ShowHint,
    SimpleButton
} from '@components/components'


/* START OF COMPILED CODE */

export default class PenguinGames extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Rectangle} */
        this.block;
        /** @type {Phaser.GameObjects.Image} */
        this.bg;
        /** @type {Phaser.GameObjects.Text} */
        this.games_text;
        /** @type {Phaser.GameObjects.Text} */
        this.penguin_text;
        /** @type {Phaser.GameObjects.Container} */
        this.blue;
        /** @type {Phaser.GameObjects.Text} */
        this.blue_team;
        /** @type {Phaser.GameObjects.Text} */
        this.you_are_on_blue;
        /** @type {Phaser.GameObjects.Container} */
        this.red;
        /** @type {Phaser.GameObjects.Text} */
        this.red_team;
        /** @type {Phaser.GameObjects.Text} */
        this.you_are_on_red;
        /** @type {Phaser.GameObjects.Text} */
        this.red_overall_score;
        /** @type {Phaser.GameObjects.Text} */
        this.blue_overall_score;
        /** @type {Phaser.GameObjects.Container} */
        this.overall;
        /** @type {Phaser.GameObjects.Text} */
        this.overall_blue_leaderboard;
        /** @type {Phaser.GameObjects.Text} */
        this.top_blue_players;
        /** @type {Phaser.GameObjects.Text} */
        this.overall_red_leaderboard;
        /** @type {Phaser.GameObjects.Text} */
        this.top_red_players;
        /** @type {Phaser.GameObjects.Text} */
        this.your_overall_score;
        /** @type {Phaser.GameObjects.Text} */
        this.pick_game_text;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.pick_game_button;
        /** @type {Phaser.GameObjects.Text} */
        this.overall_leaderboard;
        /** @type {Phaser.GameObjects.Container} */
        this.game;
        /** @type {Phaser.GameObjects.Text} */
        this.blue_game_leaderboard;
        /** @type {Phaser.GameObjects.Text} */
        this.blue_game_score;
        /** @type {Phaser.GameObjects.Text} */
        this.red_game_leaderboard;
        /** @type {Phaser.GameObjects.Text} */
        this.red_game_score;
        /** @type {Phaser.GameObjects.Text} */
        this.your_game_score;
        /** @type {Phaser.GameObjects.Image} */
        this.game_icon;
        /** @type {Phaser.GameObjects.Text} */
        this.game_name;
        /** @type {Phaser.GameObjects.Image} */
        this.fg;
        /** @type {Phaser.GameObjects.Image} */
        this.grey_button;
        /** @type {Phaser.GameObjects.Image} */
        this.grey_x;
        /** @type {Phaser.GameObjects.Container} */
        this.gamepicker;
        /** @type {Phaser.GameObjects.Text} */
        this.return_overall_text;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.return_overall_button;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_thinice;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_sled;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_roundup;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_four;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_pizzatron;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_jpa;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_fishing;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_hydro;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_cart;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_bean;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_astro;
        /** @type {Phaser.GameObjects.Image} */
        this.pick_aqua;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // bg
        const bg = scene.add.image(18, 9, "pg-interface", "bg");
        this.add(bg);

        // games_text
        const games_text = scene.add.text(143, -364, "", {});
        games_text.setOrigin(0.5, 0.5);
        games_text.text = "GAMES";
        games_text.setStyle({
            "color": "#b52121ff",
            "fontFamily": "Burbank Small",
            "fontSize": "70px",
            "fontStyle": "bold",
            "stroke": "#341111ff",
            "strokeThickness": 10
        });
        this.add(games_text);

        // penguin_text
        const penguin_text = scene.add.text(-143, -364, "", {});
        penguin_text.setOrigin(0.5, 0.5);
        penguin_text.text = "PENGUIN";
        penguin_text.setStyle({
            "color": "#164887ff",
            "fontFamily": "Burbank Small",
            "fontSize": "70px",
            "fontStyle": "bold",
            "stroke": "#0b2341ff",
            "strokeThickness": 10
        });
        this.add(penguin_text);

        // blue
        const blue = scene.add.container(-295, -301);
        blue.visible = false;
        this.add(blue);

        // blue_team
        const blue_team = scene.add.text(452, 0, "", {});
        blue_team.setOrigin(0.5, 0.5);
        blue_team.text = "blue team";
        blue_team.setStyle({
            "color": "#164887ff",
            "fontFamily": "Burbank Small",
            "fontSize": "50px",
            "stroke": "#ffffffff"
        });
        blue.add(blue_team);

        // you_are_on_blue
        const you_are_on_blue = scene.add.text(161, 0, "", {});
        you_are_on_blue.setOrigin(0.5, 0.5);
        you_are_on_blue.text = "You are on the";
        you_are_on_blue.setStyle({
            "color": "#3a2c12ff",
            "fontFamily": "Burbank Small",
            "fontSize": "50px",
            "stroke": "#ffffffff"
        });
        blue.add(you_are_on_blue);

        // red
        const red = scene.add.container(-287, -301);
        red.visible = false;
        this.add(red);

        // red_team
        const red_team = scene.add.text(443, 0, "", {});
        red_team.setOrigin(0.5, 0.5);
        red_team.text = "red team";
        red_team.setStyle({
            "color": "#b52121ff",
            "fontFamily": "Burbank Small",
            "fontSize": "50px",
            "stroke": "#ffffffff"
        });
        red.add(red_team);

        // you_are_on_red
        const you_are_on_red = scene.add.text(166, 0, "", {});
        you_are_on_red.setOrigin(0.5, 0.5);
        you_are_on_red.text = "You are on the";
        you_are_on_red.setStyle({
            "color": "#3a2c12ff",
            "fontFamily": "Burbank Small",
            "fontSize": "50px",
            "stroke": "#ffffffff"
        });
        red.add(you_are_on_red);

        // red_overall_score
        const red_overall_score = scene.add.text(-620, 0, "", {});
        red_overall_score.angle = -90;
        red_overall_score.setOrigin(0.5, 0.5);
        red_overall_score.text = "RED SCORE: 0000000000";
        red_overall_score.setStyle({
            "align": "center",
            "color": "#b52121ff",
            "fontFamily": "Burbank Small",
            "fontSize": "60px",
            "fontStyle": "bold",
            "stroke": "#341111ff",
            "strokeThickness": 10
        });
        this.add(red_overall_score);

        // blue_overall_score
        const blue_overall_score = scene.add.text(629, 1, "", {});
        blue_overall_score.angle = 90;
        blue_overall_score.setOrigin(0.5, 0.5);
        blue_overall_score.text = "BLUE SCORE: 0000000000";
        blue_overall_score.setStyle({
            "color": "#164887ff",
            "fontFamily": "Burbank Small",
            "fontSize": "60px",
            "fontStyle": "bold",
            "stroke": "#0b2341ff",
            "strokeThickness": 10
        });
        this.add(blue_overall_score);

        // overall
        const overall = scene.add.container(-757.89596285841, -482.590802352304);
        overall.visible = false;
        this.add(overall);

        // overall_blue_leaderboard
        const overall_blue_leaderboard = scene.add.text(1027.8959304183136, 616.5908186858155, "", {});
        overall_blue_leaderboard.setOrigin(0.5, 0);
        overall_blue_leaderboard.text = "1: Username - 00000000\n2: Username - 00000000\n3: Username - 00000000\n4: Username - 00000000\n5: Username - 00000000";
        overall_blue_leaderboard.setStyle({
            "align": "center",
            "color": "#164887ff",
            "fontFamily": "Burbank Small",
            "fontSize": "40px",
            "stroke": "#000000ff"
        });
        overall.add(overall_blue_leaderboard);

        // top_blue_players
        const top_blue_players = scene.add.text(1027.8959304183136, 570.5908186858155, "", {});
        top_blue_players.setOrigin(0.5, 0.5);
        top_blue_players.text = "Top Blue Players";
        top_blue_players.setStyle({
            "color": "#164887ff",
            "fontFamily": "Burbank Small",
            "fontSize": "40px",
            "fontStyle": "bold",
            "stroke": "#0b2341ff",
            "strokeThickness": 10
        });
        overall.add(top_blue_players);

        // overall_red_leaderboard
        const overall_red_leaderboard = scene.add.text(487.8959304183135, 616.5908186858155, "", {});
        overall_red_leaderboard.setOrigin(0.5, 0);
        overall_red_leaderboard.text = "1: Username - 00000000\n2: Username - 00000000\n3: Username - 00000000\n4: Username - 00000000\n5: Username - 00000000";
        overall_red_leaderboard.setStyle({
            "align": "center",
            "color": "#b52121ff",
            "fontFamily": "Burbank Small",
            "fontSize": "40px",
            "stroke": "#000000ff"
        });
        overall.add(overall_red_leaderboard);

        // top_red_players
        const top_red_players = scene.add.text(487.8959304183135, 572.5908186858155, "", {});
        top_red_players.setOrigin(0.5, 0.5);
        top_red_players.text = "Top Red Players";
        top_red_players.setStyle({
            "align": "center",
            "color": "#b52121ff",
            "fontFamily": "Burbank Small",
            "fontSize": "40px",
            "fontStyle": "bold",
            "stroke": "#341111ff",
            "strokeThickness": 10
        });
        overall.add(top_red_players);

        // your_overall_score
        const your_overall_score = scene.add.text(757.8959304183136, 472.59081868581546, "", {});
        your_overall_score.setOrigin(0.5, 0.5);
        your_overall_score.text = "Your Score: 00000000";
        your_overall_score.setStyle({
            "align": "center",
            "color": "#816530ff",
            "fontFamily": "Burbank Small",
            "fontSize": "50px",
            "fontStyle": "bold",
            "stroke": "#1a150cff",
            "strokeThickness": 10
        });
        overall.add(your_overall_score);

        // pick_game_text
        const pick_game_text = scene.add.text(757.8959304183136, 351.59081868581546, "", {});
        pick_game_text.setOrigin(0.5, 0.5);
        pick_game_text.text = "Pick Game";
        pick_game_text.setStyle({
            "color": "#3a2c12ff",
            "fontFamily": "Burbank Small",
            "fontSize": "50px",
            "stroke": "#ffffffff"
        });
        overall.add(pick_game_text);

        // pick_game_button
        const pick_game_button = scene.add.rectangle(757.8959304183136, 355, 250, 85);
        overall.add(pick_game_button);

        // overall_leaderboard
        const overall_leaderboard = scene.add.text(757.8959304183136, 290.59081868581546, "", {});
        overall_leaderboard.setOrigin(0.5, 0.5);
        overall_leaderboard.text = "OVERALL LEADERBOARD";
        overall_leaderboard.setStyle({
            "align": "center",
            "color": "#816530ff",
            "fontFamily": "Burbank Small",
            "fontSize": "50px",
            "fontStyle": "bold",
            "stroke": "#1a150cff",
            "strokeThickness": 10
        });
        overall.add(overall_leaderboard);

        // game
        const game = scene.add.container(-760, -480);
        game.visible = false;
        this.add(game);

        // blue_game_leaderboard
        const blue_game_leaderboard = scene.add.text(1029.9886136603106, 612.9322254090836, "", {});
        blue_game_leaderboard.setOrigin(0.5, 0);
        blue_game_leaderboard.text = "1: Username - 00000000\n2: Username - 00000000\n3: Username - 00000000\n4: Username - 00000000\n5: Username - 00000000";
        blue_game_leaderboard.setStyle({
            "align": "center",
            "color": "#164887ff",
            "fontFamily": "Burbank Small",
            "fontSize": "40px",
            "stroke": "#000000ff"
        });
        game.add(blue_game_leaderboard);

        // blue_game_score
        const blue_game_score = scene.add.text(1029.9886136603106, 566.9322254090836, "", {});
        blue_game_score.setOrigin(0.5, 0.5);
        blue_game_score.text = "Blue Score: 000000000";
        blue_game_score.setStyle({
            "color": "#164887ff",
            "fontFamily": "Burbank Small",
            "fontSize": "40px",
            "fontStyle": "bold",
            "stroke": "#0b2341ff",
            "strokeThickness": 10
        });
        game.add(blue_game_score);

        // red_game_leaderboard
        const red_game_leaderboard = scene.add.text(489.98861366031065, 612.9322254090836, "", {});
        red_game_leaderboard.setOrigin(0.5, 0);
        red_game_leaderboard.text = "1: Username - 00000000\n2: Username - 00000000\n3: Username - 00000000\n4: Username - 00000000\n5: Username - 00000000";
        red_game_leaderboard.setStyle({
            "align": "center",
            "color": "#b52121ff",
            "fontFamily": "Burbank Small",
            "fontSize": "40px",
            "stroke": "#000000ff"
        });
        game.add(red_game_leaderboard);

        // red_game_score
        const red_game_score = scene.add.text(489.98861366031065, 568.9322254090836, "", {});
        red_game_score.setOrigin(0.5, 0.5);
        red_game_score.text = "Red Score: 00000000";
        red_game_score.setStyle({
            "align": "center",
            "color": "#b52121ff",
            "fontFamily": "Burbank Small",
            "fontSize": "40px",
            "fontStyle": "bold",
            "stroke": "#341111ff",
            "strokeThickness": 10
        });
        game.add(red_game_score);

        // your_game_score
        const your_game_score = scene.add.text(759.9886136603106, 468.93222540908357, "", {});
        your_game_score.setOrigin(0.5, 0.5);
        your_game_score.text = "Your Score: 00000000";
        your_game_score.setStyle({
            "align": "center",
            "color": "#816530ff",
            "fontFamily": "Burbank Small",
            "fontSize": "50px",
            "fontStyle": "bold",
            "stroke": "#1a150cff",
            "strokeThickness": 10
        });
        game.add(your_game_score);

        // game_icon
        const game_icon = scene.add.image(760, 311, "endscreens", "icons/aquagrabber");
        game.add(game_icon);

        // game_name
        const game_name = scene.add.text(760, 318, "", {});
        game_name.setOrigin(0.5, 0.5);
        game_name.text = "Aqua Grabber";
        game_name.setStyle({
            "align": "center",
            "color": "#2fbccaff",
            "fontFamily": "Burbank Small",
            "fontSize": "50px",
            "fontStyle": "bold",
            "stroke": "#0f1e40ff",
            "strokeThickness": 10
        });
        game.add(game_name);

        // fg
        const fg = scene.add.image(0, 0, "pg-interface", "fg");
        this.add(fg);

        // grey_button
        const grey_button = scene.add.image(729, -447, "main", "grey-button");
        this.add(grey_button);

        // grey_x
        const grey_x = scene.add.image(729, -447, "main", "grey-x");
        this.add(grey_x);

        // gamepicker
        const gamepicker = scene.add.container(-760, -480);
        gamepicker.visible = false;
        this.add(gamepicker);

        // return_overall_text
        const return_overall_text = scene.add.text(760, 843, "", {});
        return_overall_text.setOrigin(0.5, 0.5);
        return_overall_text.text = "Return to the overall leaderboard";
        return_overall_text.setStyle({
            "color": "#3a2c12ff",
            "fontFamily": "Burbank Small",
            "fontSize": "50px",
            "stroke": "#ffffffff"
        });
        gamepicker.add(return_overall_text);

        // return_overall_button
        const return_overall_button = scene.add.rectangle(760, 847, 800, 85);
        gamepicker.add(return_overall_button);

        // pick_thinice
        const pick_thinice = scene.add.image(1105, 700, "endscreens", "icons/thinice");
        gamepicker.add(pick_thinice);

        // pick_sled
        const pick_sled = scene.add.image(875, 700, "endscreens", "icons/sled");
        gamepicker.add(pick_sled);

        // pick_roundup
        const pick_roundup = scene.add.image(645, 700, "endscreens", "icons/puffleroundup");
        gamepicker.add(pick_roundup);

        // pick_four
        const pick_four = scene.add.image(415, 700, "endscreens", "icons/four");
        gamepicker.add(pick_four);

        // pick_pizzatron
        const pick_pizzatron = scene.add.image(1105, 500, "endscreens", "icons/pizzatron");
        gamepicker.add(pick_pizzatron);

        // pick_jpa
        const pick_jpa = scene.add.image(875, 500, "endscreens", "icons/jetpackadventure");
        gamepicker.add(pick_jpa);

        // pick_fishing
        const pick_fishing = scene.add.image(645, 500, "endscreens", "icons/icefishing");
        gamepicker.add(pick_fishing);

        // pick_hydro
        const pick_hydro = scene.add.image(415, 500, "endscreens", "icons/hydrohopper");
        gamepicker.add(pick_hydro);

        // pick_cart
        const pick_cart = scene.add.image(1105, 300, "endscreens", "icons/cartsurfer");
        gamepicker.add(pick_cart);

        // pick_bean
        const pick_bean = scene.add.image(875, 300, "endscreens", "icons/beancounters");
        gamepicker.add(pick_bean);

        // pick_astro
        const pick_astro = scene.add.image(645, 300, "endscreens", "icons/astrobarrier");
        gamepicker.add(pick_astro);

        // pick_aqua
        const pick_aqua = scene.add.image(415, 300, "endscreens", "icons/aquagrabber");
        gamepicker.add(pick_aqua);

        // block (components)
        new Interactive(block);

        // pick_game_button (components)
        const pick_game_buttonSimpleButton = new SimpleButton(pick_game_button);
        pick_game_buttonSimpleButton.callback = () => this.pickGame();

        // game_icon (components)
        const game_iconSimpleButton = new SimpleButton(game_icon);
        game_iconSimpleButton.callback = () => this.pickGame();

        // grey_button (components)
        const grey_buttonButton = new Button(grey_button);
        grey_buttonButton.spriteName = "grey-button";
        grey_buttonButton.callback = () => {
            this.visible = false
        };

        // return_overall_button (components)
        const return_overall_buttonSimpleButton = new SimpleButton(return_overall_button);
        return_overall_buttonSimpleButton.callback = () => this.returnOverall();

        // pick_thinice (components)
        const pick_thiniceShowHint = new ShowHint(pick_thinice);
        pick_thiniceShowHint.text = "Thin Ice";
        const pick_thiniceSimpleButton = new SimpleButton(pick_thinice);
        pick_thiniceSimpleButton.callback = () => this.showLeaderboard("thinice");

        // pick_sled (components)
        const pick_sledShowHint = new ShowHint(pick_sled);
        pick_sledShowHint.text = "Sled Racing";
        const pick_sledSimpleButton = new SimpleButton(pick_sled);
        pick_sledSimpleButton.callback = () => this.showLeaderboard("sled");

        // pick_roundup (components)
        const pick_roundupShowHint = new ShowHint(pick_roundup);
        pick_roundupShowHint.text = "Puffle Roundup";
        const pick_roundupSimpleButton = new SimpleButton(pick_roundup);
        pick_roundupSimpleButton.callback = () => this.showLeaderboard("puffleroundup");

        // pick_four (components)
        const pick_fourShowHint = new ShowHint(pick_four);
        pick_fourShowHint.text = "Find Four";
        const pick_fourSimpleButton = new SimpleButton(pick_four);
        pick_fourSimpleButton.callback = () => this.showLeaderboard("four");

        // pick_pizzatron (components)
        const pick_pizzatronShowHint = new ShowHint(pick_pizzatron);
        pick_pizzatronShowHint.text = "Pizzatron 3000";
        const pick_pizzatronSimpleButton = new SimpleButton(pick_pizzatron);
        pick_pizzatronSimpleButton.callback = () => this.showLeaderboard("pizzatron");

        // pick_jpa (components)
        const pick_jpaShowHint = new ShowHint(pick_jpa);
        pick_jpaShowHint.text = "Jet Pack Adventure";
        const pick_jpaSimpleButton = new SimpleButton(pick_jpa);
        pick_jpaSimpleButton.callback = () => this.showLeaderboard("jetpackadventure");

        // pick_fishing (components)
        const pick_fishingShowHint = new ShowHint(pick_fishing);
        pick_fishingShowHint.text = "Ice Fishing";
        const pick_fishingSimpleButton = new SimpleButton(pick_fishing);
        pick_fishingSimpleButton.callback = () => this.showLeaderboard("icefishing");

        // pick_hydro (components)
        const pick_hydroShowHint = new ShowHint(pick_hydro);
        pick_hydroShowHint.text = "Hydro Hopper";
        const pick_hydroSimpleButton = new SimpleButton(pick_hydro);
        pick_hydroSimpleButton.callback = () => this.showLeaderboard("hydrohopper");

        // pick_cart (components)
        const pick_cartShowHint = new ShowHint(pick_cart);
        pick_cartShowHint.text = "Cart Surfer";
        const pick_cartSimpleButton = new SimpleButton(pick_cart);
        pick_cartSimpleButton.callback = () => this.showLeaderboard("cartsurfer");

        // pick_bean (components)
        const pick_beanShowHint = new ShowHint(pick_bean);
        pick_beanShowHint.text = "Bean Counters";
        const pick_beanSimpleButton = new SimpleButton(pick_bean);
        pick_beanSimpleButton.callback = () => this.showLeaderboard("beancounters");

        // pick_astro (components)
        const pick_astroShowHint = new ShowHint(pick_astro);
        pick_astroShowHint.text = "Astro Barrier";
        const pick_astroSimpleButton = new SimpleButton(pick_astro);
        pick_astroSimpleButton.callback = () => this.showLeaderboard("astrobarrier");

        // pick_aqua (components)
        const pick_aquaShowHint = new ShowHint(pick_aqua);
        pick_aquaShowHint.text = "Aqua Grabber";
        const pick_aquaSimpleButton = new SimpleButton(pick_aqua);
        pick_aquaSimpleButton.callback = () => this.showLeaderboard("aquagrabber");

        this.block = block;
        this.bg = bg;
        this.games_text = games_text;
        this.penguin_text = penguin_text;
        this.blue = blue;
        this.blue_team = blue_team;
        this.you_are_on_blue = you_are_on_blue;
        this.red = red;
        this.red_team = red_team;
        this.you_are_on_red = you_are_on_red;
        this.red_overall_score = red_overall_score;
        this.blue_overall_score = blue_overall_score;
        this.overall = overall;
        this.overall_blue_leaderboard = overall_blue_leaderboard;
        this.top_blue_players = top_blue_players;
        this.overall_red_leaderboard = overall_red_leaderboard;
        this.top_red_players = top_red_players;
        this.your_overall_score = your_overall_score;
        this.pick_game_text = pick_game_text;
        this.pick_game_button = pick_game_button;
        this.overall_leaderboard = overall_leaderboard;
        this.game = game;
        this.blue_game_leaderboard = blue_game_leaderboard;
        this.blue_game_score = blue_game_score;
        this.red_game_leaderboard = red_game_leaderboard;
        this.red_game_score = red_game_score;
        this.your_game_score = your_game_score;
        this.game_icon = game_icon;
        this.game_name = game_name;
        this.fg = fg;
        this.grey_button = grey_button;
        this.grey_x = grey_x;
        this.gamepicker = gamepicker;
        this.return_overall_text = return_overall_text;
        this.return_overall_button = return_overall_button;
        this.pick_thinice = pick_thinice;
        this.pick_sled = pick_sled;
        this.pick_roundup = pick_roundup;
        this.pick_four = pick_four;
        this.pick_pizzatron = pick_pizzatron;
        this.pick_jpa = pick_jpa;
        this.pick_fishing = pick_fishing;
        this.pick_hydro = pick_hydro;
        this.pick_cart = pick_cart;
        this.pick_bean = pick_bean;
        this.pick_astro = pick_astro;
        this.pick_aqua = pick_aqua;

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    create() {
        this.returnOverall()
        this.visible = true
        if (this.world.party.partyCompletion.team == "blue") {
            this.red.visible = false
            this.blue.visible = true
        } else {
            this.red.visible = true
            this.blue.visible = false
        }
        this.red_overall_score.text = "Loading red score..."
        this.blue_overall_score.text = "Loading blue score..."
        this.overall_blue_leaderboard.text = "Loading blue leaderboard..."
        this.overall_red_leaderboard.text = "Loading red leaderboard..."
        this.games = ["aquagrabber", "astrobarrier", "beancounters", "cartsurfer", "hydrohopper", "icefishing", "jetpackadventure", "pizzatron", "four", "puffleroundup", "sled", "thinice"]
        this.your_overall_score.text = "Loading your score..."

        this.world.network.send('get_team_scores')
    }

    pickGame() {
        this.tab = "picker"

        this.gamepicker.visible = true
        this.game.visible = false
        this.overall.visible = false
    }

    returnOverall() {
        this.tab = "overall"

        this.gamepicker.visible = false
        this.game.visible = false
        this.overall.visible = true
    }

    showLeaderboard(leaderboard) {
        this.tab = leaderboard

        this.gamepicker.visible = false
        this.game.visible = true
        this.overall.visible = false

        this.game_name.text = this.world.getString(leaderboard)
        this.game_icon.setFrame(`icons/${leaderboard.toLowerCase()}`)

        this.red_game_leaderboard.text = "Loading leaderboard..."
        this.blue_game_leaderboard.text = "Loading leaderboard..."
        this.red_game_score.text = "Loading score..."
        this.blue_game_score.text = "Loading score..."

        if (this.world.party.partyCompletion[leaderboard]) {
            this.your_game_score.text = `Your Score: ${this.world.party.partyCompletion[leaderboard]}`
        } else {
            this.your_game_score.text = "Your Score: 0"
        }

        this.world.network.send('get_leaderboard_data', {
            game: leaderboard
        })
    }

    getLeaderboardData(data) {
        if (data.leaderboard == this.tab) {
            for (let x in data.blueLeaderboard) {
                data.blueLeaderboard[x] = data.blueLeaderboard[x].join(': ')
            }
            for (let x in data.redLeaderboard) {
                data.redLeaderboard[x] = data.redLeaderboard[x].join(': ')
            }
            this.blue_game_leaderboard.text = data.blueLeaderboard.join("\n")
            this.red_game_leaderboard.text = data.redLeaderboard.join("\n")
            this.red_game_score.text = `Red Score: ${data.redTotal}`
            this.blue_game_score.text = `Blue Score: ${data.blueTotal}`
        }
    }

    getTeamScores(data) {
        if (this.tab == "overall") {
            for (let x in data.blueLeaderboard) {
                data.blueLeaderboard[x] = data.blueLeaderboard[x].join(': ')
            }
            for (let x in data.redLeaderboard) {
                data.redLeaderboard[x] = data.redLeaderboard[x].join(': ')
            }
            this.overall_blue_leaderboard.text = data.blueLeaderboard.join("\n")
            this.overall_red_leaderboard.text = data.redLeaderboard.join("\n")
            this.red_overall_score.text = `RED SCORE: ${data.red}`
            this.blue_overall_score.text = `BLUE SCORE: ${data.blue}`

            let yourTotal = 0
            for (var game of this.games) {
                if (this.world.party.partyCompletion[game]) {
                    yourTotal = parseInt(yourTotal) + parseInt(this.world.party.partyCompletion[game])
                }
            }
            this.your_overall_score.text = `Your Score: ${yourTotal}`
        }

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */