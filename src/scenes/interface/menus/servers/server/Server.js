import BaseContainer from '@scenes/base/BaseContainer'

import { Button } from '@components/components'


/* START OF COMPILED CODE */

export default class Server extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.buddy;
        /** @type {Phaser.GameObjects.Image} */
        this.safe;
        /** @type {Phaser.GameObjects.Image} */
        this.server;
        /** @type {Phaser.GameObjects.Text} */
        this.name;
        /** @type {Phaser.GameObjects.Image} */
        this.server_smiley_box_png;
        /** @type {Phaser.GameObjects.Image} */
        this.full;
        /** @type {Phaser.GameObjects.Image[]} */
        this.bars;
        /** @type {string} */
        this.name = "";
        /** @type {boolean} */
        this.safe = false;


        // buddy
        const buddy = scene.add.image(-338, 0, "servers", "offline");
        buddy.setOrigin(0.509090909090909, 0.509090909090909);
        buddy.visible = false;
        this.add(buddy);

        // safe
        const safe = scene.add.image(79, 1, "servers", "safe");
        safe.setOrigin(0.509090909090909, 0.5094339622641509);
        safe.visible = false;
        this.add(safe);

        // server
        const server = scene.add.image(-234, 0, "servers-og", "serveroutline");
        server.scaleX = 1.1923458007194458;
        this.add(server);

        // name
        const name = scene.add.text(-270, 0, "", {});
        name.setOrigin(0.5, 0.5);
        name.setStyle({ "fixedWidth":350,"fontFamily": "Arial", "fontSize": "30px", "fontStyle": "bold" });
        this.add(name);

        // server_smiley_box_png
        const server_smiley_box_png = scene.add.image(-106, 0, "servers-og", "server-smiley-box.png");
        this.add(server_smiley_box_png);

        // bar_1
        const bar_1 = scene.add.image(-179, 0, "servers-og", "smileyfull");
        bar_1.scaleX = 0.9;
        bar_1.scaleY = 0.9;
        this.add(bar_1);

        // bar_2
        const bar_2 = scene.add.image(-142, 0, "servers-og", "smiley-empty");
        this.add(bar_2);

        // bar_3
        const bar_3 = scene.add.image(-105, 0, "servers-og", "smiley-empty");
        this.add(bar_3);

        // bar_4
        const bar_4 = scene.add.image(-71, 0, "servers-og", "smiley-empty");
        this.add(bar_4);

        // bar_5
        const bar_5 = scene.add.image(-37, 0, "servers-og", "smiley-empty");
        this.add(bar_5);

        // full
        const full = scene.add.image(240, 0, "servers", "full");
        full.setOrigin(0.5, 0.5076923076923077);
        full.visible = false;
        this.add(full);

        // lists
        const bars = [bar_1, bar_5, bar_4, bar_3, bar_2];

        // server (components)
        const serverButton = new Button(server);
        serverButton.spriteName = "serveroutline";

        this.buddy = buddy;
        this.safe = safe;
        this.server = server;
        this.name = name;
        this.server_smiley_box_png = server_smiley_box_png;
        this.full = full;
        this.bars = bars;

        /* START-USER-CTR-CODE */

        this.button = serverButton

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setPopulation(population) {
        for (let [index, bar] of this.bars.entries()) {
            let frame = (index + 1 <= population) ? 'smileyfull' : 'smiley-empty'

            bar.setFrame(frame)

            this.full.visible = population >= 6
        }
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
