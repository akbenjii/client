import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, ShowHint, Zone, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Mine extends RoomScene {

    constructor() {
        super("Mine");

        /** @type {Phaser.GameObjects.Sprite} */
        this.cart;
        /** @type {Phaser.GameObjects.Rectangle} */
        this.rectangle;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'cave': () => this.triggerRoom(806, 1280, 520),
            'cart': () => this.triggerGame('cartsurfer', 905),
            'underground': () => this.unimplementedPrompt(),
            'rescue': () => this.triggerGame('puffleRescue', 927),
        }

        this.roomAnims = true
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("mine-pack", "assets/media/rooms/old/mine/mine-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg_png
        const bg_png = this.add.image(760, 480, "mine", "bg.png");
        bg_png.scaleX = 1.01;
        bg_png.scaleY = 1.01;

        // mine_door
        this.add.image(766, 163, "new-mine", "mine_door");

        // puffle_rescue
        const puffle_rescue = this.add.image(498, 181, "new-mine", "puffle_rescue");

        // lamp_png
        this.add.image(677, 234, "mine", "lamp.png");

        // wall1_png
        const wall1_png = this.add.image(301, 344, "mine", "wall1.png");
        wall1_png.scaleX = 1.01;
        wall1_png.scaleY = 1.01;

        // wood_png
        this.add.image(1126, 236, "mine", "wood.png");

        // cart
        const cart = this.add.sprite(1367, 312, "mine", "hover-game-cart0001.png");

        // wall2_png
        this.add.image(1207, 289, "mine", "wall2.png");

        // shovel_png
        const shovel_png = this.add.image(917, 406, "mine", "shovel.png");

        // cart2_png
        const cart2_png = this.add.image(1138, 398, "mine", "cart2.png");

        // cart1_png
        const cart1_png = this.add.image(1015, 436, "mine", "cart1.png");

        // foreground_png
        const foreground_png = this.add.image(757, 838, "mine", "foreground.png");
        foreground_png.scaleX = 1.01;
        foreground_png.scaleY = 1.01;

        // rectangle
        const rectangle = this.add.rectangle(1278, 339, 128, 128);
        rectangle.scaleX = 1.077792846929269;
        rectangle.scaleY = 1.7030288165217038;
        rectangle.isFilled = true;
        rectangle.fillColor = 65280;
        rectangle.fillAlpha = 0;

        // fire
        const fire = this.add.sprite(309, 191, "mine", "fire0001.png");

        // mine_rocks
        this.add.image(804, 305, "new-mine", "mine_rocks");

        // pr_chair
        this.add.image(564, 290, "new-mine", "pr_chair");

        // puffle_rescue_table
        const puffle_rescue_table = this.add.image(568, 361, "new-mine", "puffle_rescue_table");
        puffle_rescue_table.scaleX = 1.0773812040986706;
        puffle_rescue_table.scaleY = 1.0773812040986706;

        // lists
        const sort = [cart1_png, shovel_png, cart2_png];

        // puffle_rescue (components)
        const puffle_rescueMoveTo = new MoveTo(puffle_rescue);
        puffle_rescueMoveTo.x = 590;
        puffle_rescueMoveTo.y = 380;
        new SimpleButton(puffle_rescue);
        const puffle_rescueShowHint = new ShowHint(puffle_rescue);
        puffle_rescueShowHint.text = "Puffle Rescue";

        // rectangle (components)
        const rectangleSimpleButton = new SimpleButton(rectangle);
        rectangleSimpleButton.hoverCallback = () => this.onCartHover();
        rectangleSimpleButton.hoverOutCallback = () => this.onCartOut();
        new MoveTo(rectangle);
        const rectangleShowHint = new ShowHint(rectangle);
        rectangleShowHint.text = "Cart Surfer";

        // puffle_rescue_table (components)
        const puffle_rescue_tableMoveTo = new MoveTo(puffle_rescue_table);
        puffle_rescue_tableMoveTo.x = 590;
        puffle_rescue_tableMoveTo.y = 380;
        new SimpleButton(puffle_rescue_table);

        this.cart = cart;
        this.rectangle = rectangle;
        this.fire = fire;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create() {
        super.create()
        this.fire.play('lampflame')
    }

    onCartHover() {
        this.cart.play('cartsurfer')
    }

    onCartOut() {
        this.cart.play('cartout')
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
