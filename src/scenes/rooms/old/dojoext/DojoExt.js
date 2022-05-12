import RoomScene from '@scenes/rooms/RoomScene'

import { Button, MoveTo } from '@components/components'


/* START OF COMPILED CODE */

export default class DojoExt extends RoomScene {

    constructor() {
        super("DojoExt");

        /** @type {Phaser.GameObjects.Ellipse} */
        this.dragonZone;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.feetZone;
        /** @type {Phaser.GameObjects.Ellipse} */
        this.dojoZone;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'map': () => this.interface.main.map.visible = true,
            'dojohide': null,
			'dojo': () => this.triggerRoom(320, 384, 616)
        }
        this.music = 'dojo'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("dojoext-pack", "assets/media/rooms/old/dojoext/dojoext-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        const bg = this.add.image(-15, -6, "dojoext", "bg");
        bg.setOrigin(0, 0);

        // image
        this.add.image(760, 124, "dojosky");

        // trees
        const trees = this.add.image(1364, 915, "dojoext", "trees");
        trees.setOrigin(0.518840579710145, 0.8611111111111112);

        // fence
        const fence = this.add.image(170, 920, "dojoext", "fence");
        fence.setOrigin(0.4491315136476427, 0.773109243697479);

        // puffles
        const puffles = this.add.image(786, 823, "dojoext", "puffles");
        puffles.setOrigin(0.49942196531791905, 0.47202797202797203);

        // dojo_door
        const dojo_door = this.add.image(682, 425, "dojoext", "dojo_door");
        dojo_door.setOrigin(0, 0);

        // ninja_door_locked
        const ninja_door_locked = this.add.image(221, 562, "dojoext", "ninja_door_locked0001");
        ninja_door_locked.setOrigin(0, 0);

        // door_top
        const door_top = this.add.image(689, 430, "dojoext", "door_top");
        door_top.setOrigin(0, 0);

        // tree
        const tree = this.add.image(311, 577, "dojoext", "tree");
        tree.setOrigin(0, 0);

        // dragonZone
        const dragonZone = this.add.ellipse(140, 743, 128, 128);
        dragonZone.scaleX = 0.3494562002773523;
        dragonZone.scaleY = 0.4042581942734419;

        // feetZone
        const feetZone = this.add.ellipse(1092, 668, 128, 128);
        feetZone.scaleX = 0.2699765262251914;
        feetZone.scaleY = 0.20674984183994782;

        // dojoZone
        const dojoZone = this.add.ellipse(1744.5278048455955, 62.13393065040111, 128, 128);
        dojoZone.scaleX = 1.6283185066940922;
        dojoZone.scaleY = 0.5836864266673072;
        dojoZone.setOrigin(5.156489655372523, -6.364587025960294);

        // lists
        const sort = [puffles, fence, trees];

        // dojo_door (components)
        const dojo_doorButton = new Button(dojo_door);
        dojo_doorButton.spriteName = "dojo_door";
        dojo_doorButton.activeFrame = false;
        const dojo_doorMoveTo = new MoveTo(dojo_door);
        dojo_doorMoveTo.x = 780;
        dojo_doorMoveTo.y = 610;

        this.dragonZone = dragonZone;
        this.feetZone = feetZone;
        this.dojoZone = dojoZone;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */
    create(){
        super.create()

        this.roomZones = {
            'dragonZone': { 
                key: this.dragonZone,
                callback: () => this.interface.prompt.showItem(35010)
            },
            'feetZone': { 
                key: this.feetZone,
                callback: () => this.interface.prompt.showItem(35009)
            }
        }

        super.addZones()
    }
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
