
// You can write more code here

/* START OF COMPILED CODE */

export default class Prompt extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 228, y ?? 775);

        // text_bg
        const text_bg = scene.add.sprite(716, 37, "party-prompt", "text-bg");
        this.add(text_bg);

        // mascot
        const mascot = scene.add.sprite(27, 25, "party-prompt", "aunt-artic-headphones");
        this.add(mascot);

        // ok
        const ok = scene.add.container(1100, 80);
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

        // ok_btn (components)
        const ok_btnButton = new Button(ok_btn);
        ok_btnButton.spriteName = "ok-btn";
        ok_btnButton.callback = () => {this.visible = false};

        this.text_bg = text_bg;
        this.mascot = mascot;
        this.ok = ok;

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

    /* START-USER-CODE */

    // Write your code here.

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
