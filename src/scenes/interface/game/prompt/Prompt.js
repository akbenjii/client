import BaseContainer from '@scenes/base/BaseContainer'
import { Button, Interactive, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Prompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        // block
        const block = scene.add.rectangle(760, 480, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // text_bg
        const text_bg = scene.add.sprite(943.8114427689433, 812.9086006697796, "party-prompt", "text-bg");
        this.add(text_bg);

        // mascot
        const mascot = scene.add.sprite(254.81144276894324, 800.9086006697796, "party-prompt", "aunt-artic-headphones");
        this.add(mascot);

        // ok
        const ok = scene.add.container(1327.8114427689434, 859.9086006697796);
        this.add(ok);

        // ok_btn
        const ok_btn = scene.add.image(0, 0, "party-prompt", "ok-btn");
        ok.add(ok_btn);

        // ok-text
        const ok_text = scene.add.text(0, 1, "", {});
        ok_text.setOrigin(0.5, 0.5);
        ok_text.text = "OK";
        ok_text.setStyle({ "color": "#3c3c3cff", "fontFamily": "Burbank Small", "fontSize": "20px", "fontStyle": "bold" });
        ok.add(ok_text);

        // text
        const text = scene.add.text(528.8114427689433, 744.9086006697796, "", {});
        text.text = "This is a text field. This should be defined in the prompt function. If you are seeing this message, there has been an error, please report it!\nThis is a text field. This should be defined in the prompt function. If you are seeing this message, there has been an error, please report it!";
        text.setStyle({ "color": "#434343ff", "fontFamily": "Burbank Small", "fontSize": "25px" });
        text.setWordWrapWidth(900);
        this.add(text);

        // pg_teampicker
        const pg_teampicker = scene.add.container(732.8114427689433, 484.9086006697796);
        pg_teampicker.visible = false;
        this.add(pg_teampicker);

        // blueteam_btn
        const blueteam_btn = scene.add.sprite(0, 0, "party-prompt", "pg-blueteam-btn");
        pg_teampicker.add(blueteam_btn);

        // redteam_btn
        const redteam_btn = scene.add.sprite(470, 0, "party-prompt", "pg-redteam-btn");
        pg_teampicker.add(redteam_btn);

        // block (components)
        new Interactive(block);

        // ok_btn (components)
        const ok_btnButton = new Button(ok_btn);
        ok_btnButton.spriteName = "ok-btn";
        ok_btnButton.callback = () => {this.visible = false};

        // blueteam_btn (components)
        const blueteam_btnButton = new Button(blueteam_btn);
        blueteam_btnButton.spriteName = "pg-blueteam-btn";
        blueteam_btnButton.callback = () => {this.world.party.pickTeam("blue");this.visible=false};
        blueteam_btnButton.activeFrame = false;

        // redteam_btn (components)
        const redteam_btnButton = new Button(redteam_btn);
        redteam_btnButton.spriteName = "pg-redteam-btn";
        redteam_btnButton.callback = () => {this.world.party.pickTeam("red");this.visible=false};
        redteam_btnButton.activeFrame = false;

        this.text_bg = text_bg;
        this.mascot = mascot;
        this.ok = ok;
        this.text = text;
        this.pg_teampicker = pg_teampicker;
        this.blueteam_btn = blueteam_btn;
        this.redteam_btn = redteam_btn;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    /** @type {Phaser.GameObjects.Sprite} */
    text_bg;
    /** @type {Phaser.GameObjects.Sprite} */
    mascot;
    /** @type {Phaser.GameObjects.Container} */
    ok;
    /** @type {Phaser.GameObjects.Text} */
    text;
    /** @type {Phaser.GameObjects.Container} */
    pg_teampicker;
    /** @type {Phaser.GameObjects.Sprite} */
    blueteam_btn;
    /** @type {Phaser.GameObjects.Sprite} */
    redteam_btn;

    /* START-USER-CODE */

    showPrompt(text, mascot, okVisible = true, okCallback = () => {this.visible = false})
    {
        this.visible = true
        if (text) {
            this.text.text = text
            this.text.visible = true
        }
        if (mascot) {
            this.mascot.setFrame(mascot)
            this.mascot.visible = true
        }
        if (okVisible){
            this.ok.visible = true
            this.ok_btnButton.callback = okCallback
        }

    }

    showPgFirstLogin(){
        this.visible = true
        this.mascot.setFrame("aunt-artic-headphones")
        this.text.text = "Welcome to the 2022 Penguin Games on Club Penguin Forever! Pick a team, and compete for them in minigames across the island. Click the party icon in the top right for more info, and enjoy the games!"
        this.ok.visible = false
        this.pg_teampicker.visible = true
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
