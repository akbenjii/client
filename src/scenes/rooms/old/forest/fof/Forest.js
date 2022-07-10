import RoomScene from '@scenes/rooms/RoomScene'
import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Forest extends RoomScene {

    constructor() {
        super("Forest");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 1240, 660),
            'balloon': () => this.triggerRoom(807, 500, 800),
            'cove': () => this.triggerRoom(810, 520, 416)
        }
        this.music='nimbus'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("forest-pack", "assets/media/rooms/old/forest/forest-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_1
        this.add.image(760, 480, "fof-forest", "bg");

        // tree
        const tree = this.add.image(-17, 272, "forest", "tree");
        tree.setOrigin(0, 0);

        // fg
        const fg = this.add.image(-1, 988, "fof-forest", "bottom");
        fg.setOrigin(0, 1);

        // stairs
        const stairs = this.add.image(1129, 302, "forest", "stairs");
        stairs.setOrigin(0, 0);

        // rail
        const rail = this.add.image(1441, 831, "forest", "rail");
        rail.setOrigin(0.5, 0.5885714285714285);

        // sign
        const sign = this.add.image(1317, 681, "forest", "sign");
        sign.setOrigin(0.4794520547945205, 0.9397590361445783);

        // balloon_sign
        this.add.image(504, 159, "fof-forest", "balloon_sign");

        // ballons_right
        this.add.image(1446, 520, "fof-forest", "ballons_right");

        // balloondoor
        const balloondoor = this.add.image(993.4319312289283, 508.8403438553587, "fof-forest", "balloondoor");
        balloondoor.setOrigin(0.4590044556408053, 0.7328279557356451);

        // lists
        const sort = [sign, rail, fg, tree];

        // balloondoor (components)
        const balloondoorButton = new Button(balloondoor);
        balloondoorButton.spriteName = "balloondoor";
        balloondoorButton.activeFrame = false;
        new MoveTo(balloondoor);

        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
