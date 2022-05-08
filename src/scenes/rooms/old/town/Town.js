import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Sprite} */
        this.canopy_lights;
        /** @type {Phaser.GameObjects.Sprite} */
        this.disco_lights;
        /** @type {Phaser.GameObjects.Image} */
        this.disco;
        /** @type {Phaser.GameObjects.Sprite} */
        this.lights;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.hatZone;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.shadesZone;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.triggerRoom(110, 700, 450),
            'dance': () => this.triggerRoom(120, 300, 560),
            'gift': () => this.triggerRoom(130, 1036, 520),
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-pack", "assets/media/rooms/old/town/town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-11, 1, "town", "bg");
        bg.setOrigin(0, 0);

        // image_5
        this.add.image(756, 247, "betatown", "bg");

        // image
        this.add.image(760, 172, "betatown", "sky");

        // fg
        const fg = this.add.image(-64, 975, "town", "fg");
        fg.setOrigin(0, 1);

        // coffee_door
        const coffee_door = this.add.image(447, 304, "town", "coffee_door");
        coffee_door.setOrigin(0, 0);

        // gift_door
        const gift_door = this.add.image(995, 293, "town", "gift_door");
        gift_door.setOrigin(0, 0);

        // canopy
        const canopy = this.add.image(692, 463, "betatown", "canopy");
        canopy.setOrigin(0.49606299212598426, 0.9403669724770642);

        // canopy_lights
        const canopy_lights = this.add.sprite(648, 547, "town", "canopy_lights0001");
        canopy_lights.setOrigin(0, 7.142857142857143);
        canopy_lights.visible = false;

        // canopy_stars
        const canopy_stars = this.add.image(647, 547, "town", "canopy_stars");
        canopy_stars.setOrigin(0, 7.142857142857143);

        // disco_lights
        const disco_lights = this.add.sprite(766, 331, "town", "disco_lights0007");
        disco_lights.setOrigin(0, 0);
        disco_lights.visible = false;

        // disco
        const disco = this.add.image(755, 230, "betatown", "disco");
        disco.setOrigin(0, 0);

        // lights
        const lights = this.add.sprite(518, -76, "betatown", "lights0001");
        lights.setOrigin(0, 0);

        // box_1
        const box_1 = this.add.image(973, 431, "town", "box_1");
        box_1.setOrigin(0.49382716049382713, 0.6268656716417911);

        // box_2
        const box_2 = this.add.image(954, 482, "town", "box_2");
        box_2.setOrigin(0.49504950495049505, 0.6736842105263158);

        // box_3
        const box_3 = this.add.image(1148, 580, "town", "box_3");
        box_3.setOrigin(0.4943820224719101, 0.5569620253164557);

        // chair_2
        const chair_2 = this.add.image(436, 461, "town", "chair_2");
        chair_2.setOrigin(0.49382716049382713, 0.27358490566037735);

        // table_2
        const table_2 = this.add.image(485, 522, "town", "table_2");
        table_2.setOrigin(0.5, 0.7864077669902912);

        // chair_1
        const chair_1 = this.add.image(402, 510, "town", "chair_1");
        chair_1.setOrigin(0.49411764705882355, 0.2857142857142857);

        // table_1
        const table_1 = this.add.image(455, 574, "town", "table_1");
        table_1.setOrigin(0.49572649572649574, 0.7830188679245284);

        // image_1
        const image_1 = this.add.image(772.7497414706952, 836.0031023516576, "betatown", "cake");
        image_1.setOrigin(0.48845558252227883, 0.7346987529582685);

        // image_2
        const image_2 = this.add.image(518.7497414706952, 817.5860048028163, "betatown", "hatbox");
        image_2.setOrigin(0.44985109219915337, 0.64471146786646);

        // image_3
        const image_3 = this.add.image(1025.333678039073, 831.8362633321211, "betatown", "shades_right");
        image_3.setOrigin(0.5645173182130411, 0.682822800362221);

        // image_4
        this.add.image(391, 194, "betatown", "banner");

        // hatZone
        const hatZone = this.add.ellipse(527, 793, 128, 128);

        // shadesZone
        const shadesZone = this.add.ellipse(1021, 793, 128, 128);

        // image_6
        const image_6 = this.add.image(803.5231173313728, 993.3405305450697, "betatown", "streamers");
        image_6.setOrigin(0.5262638171044299, 1.2533863482462706);

        // lists
        const sort = [fg, box_2, box_1, box_3, chair_2, chair_1, table_1, table_2, canopy, canopy_stars, canopy_lights, image_1, image_3, image_2, image_6];

        // coffee_door (components)
        const coffee_doorButton = new Button(coffee_door);
        coffee_doorButton.spriteName = "coffee_door";
        coffee_doorButton.activeFrame = false;
        coffee_doorButton.pixelPerfect = true;
        const coffee_doorMoveTo = new MoveTo(coffee_door);
        coffee_doorMoveTo.x = 550;
        coffee_doorMoveTo.y = 450;

        // gift_door (components)
        const gift_doorButton = new Button(gift_door);
        gift_doorButton.spriteName = "gift_door";
        gift_doorButton.activeFrame = false;
        gift_doorButton.pixelPerfect = true;
        const gift_doorMoveTo = new MoveTo(gift_door);
        gift_doorMoveTo.x = 1010;
        gift_doorMoveTo.y = 466;

        // canopy (components)
        const canopySimpleButton = new SimpleButton(canopy);
        canopySimpleButton.hoverCallback = () => this.onCanopyOver();
        canopySimpleButton.hoverOutCallback = () => this.onCanopyOut();
        const canopyMoveTo = new MoveTo(canopy);
        canopyMoveTo.x = 684;
        canopyMoveTo.y = 410;

        // canopy_lights (components)
        const canopy_lightsAnimation = new Animation(canopy_lights);
        canopy_lightsAnimation.key = "canopy_lights";
        canopy_lightsAnimation.end = 57;
        canopy_lightsAnimation.autoPlay = false;
        canopy_lightsAnimation.showOnStart = true;
        canopy_lightsAnimation.hideOnComplete = true;

        // disco_lights (components)
        const disco_lightsAnimation = new Animation(disco_lights);
        disco_lightsAnimation.key = "disco_lights";
        disco_lightsAnimation.end = 57;
        disco_lightsAnimation.autoPlay = false;
        disco_lightsAnimation.showOnStart = true;
        disco_lightsAnimation.hideOnComplete = true;

        this.canopy_lights = canopy_lights;
        this.disco_lights = disco_lights;
        this.disco = disco;
        this.lights = lights;
        this.hatZone = hatZone;
        this.shadesZone = shadesZone;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        super.create()
        this.lights.play("betalights")

        this.roomZones = {
            'shadesZone': { 
                key: this.shadesZone,
                callback: () => this.interface.prompt.showItem(35001)
            },
            'hatZone': { 
                key: this.hatZone, 
                callback: () => this.interface.prompt.showItem(413)
            }
        }

        super.addZones()
    }

    onCanopyOver() {
        //this.disco.setFrame('disco-hover')
        this.canopy_lights.__Animation.play()
        this.disco_lights.__Animation.play()
    }

    onCanopyOut() {
        //this.disco.setFrame('disco')
        this.canopy_lights.__Animation.stop()
        this.disco_lights.__Animation.stop()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */