import RoomScene from '@scenes/rooms/RoomScene'
import { Button, SimpleButton } from '@components/components'
import MtnSeat from './MtnSeat'

/* START OF COMPILED CODE */

export default class Mtn extends RoomScene {

    constructor() {
        super("Mtn");

        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'village': () => this.triggerRoom(200, 1200, 400),
            'village2': () => this.triggerRoom(200, 360, 520)
        }

        this.music = 1174

        this.waddles = {}

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("skiHill-pack-new", "assets/media/rooms/new/skiHill/skiHill-pack-new.json");
        this.load.pack("mtn-pack", "assets/media/rooms/old/mtn/mtn-pack.json");
    }

    /** @returns {void} */
    _create() {

        // rectangle_1
        const rectangle_1 = this.add.rectangle(41, 731, 128, 128);
        rectangle_1.isFilled = true;
        rectangle_1.fillColor = 3563328;

        // rectangle
        const rectangle = this.add.rectangle(122, 731, 128, 128);
        rectangle.isFilled = true;
        rectangle.fillColor = 12899029;

        // bg
        const bg = this.add.sprite(729, 452, "skiHill-new", "bg.png");

        // liftBack
        const liftBack = this.add.sprite(444, 135, "skiHill-new", "lift_back0001.png");

        // skiTrack
        this.add.image(1174, 357, "skiHill-new", "skiTrack.png");

        // bg2
        const bg2 = this.add.sprite(744, 485, "skiHill-new", "bg_2.png");

        // liftFront
        const liftFront = this.add.sprite(479, 145, "skiHill-new", "lift_front0001.png");

        // hutBack
        const hutBack = this.add.image(1012, 260.9999858471424, "skiHill-new", "hut_back.png");

        // hut
        const hut = this.add.sprite(1062.3900808090457, 287.36862624622466, "skiHill-new", "hut.png");
        hut.setOrigin(0.48382484494401995, 0.7612287541540822);

        // rightSign
        const rightSign = this.add.sprite(1191, 539, "skiHill-new", "rightSign.png");

        // trees
        const trees = this.add.sprite(456, 860, "skiHill-new", "trees.png");

        // mtnSeat9
        const mtnSeat9 = new MtnSeat(this, 914, 639);
        this.add.existing(mtnSeat9);
        mtnSeat9.scaleX = 0.8;
        mtnSeat9.scaleY = 0.8;
        mtnSeat9.visible = false;

        // note
        const note = this.add.sprite(463, 175, "skiHill-new", "note0001.png");

        // mtnSeat7
        const mtnSeat7 = new MtnSeat(this, 709, 657);
        this.add.existing(mtnSeat7);
        mtnSeat7.scaleX = 0.8;
        mtnSeat7.scaleY = 0.8;
        mtnSeat7.visible = false;

        // leftSign
        const leftSign = this.add.sprite(459, 595, "skiHill-new", "leftSign.png");

        // mtnSeat6
        const mtnSeat6 = new MtnSeat(this, 527, 637);
        this.add.existing(mtnSeat6);
        mtnSeat6.scaleX = 0.8;
        mtnSeat6.scaleY = 0.8;
        mtnSeat6.visible = false;

        // forwardTracks
        const forwardTracks = this.add.sprite(717, 652, "skiHill-new", "forwardTracks.png");

        // mtnSeat5
        const mtnSeat5 = new MtnSeat(this, 616, 653);
        this.add.existing(mtnSeat5);
        mtnSeat5.scaleX = 0.8;
        mtnSeat5.scaleY = 0.8;
        mtnSeat5.visible = false;

        // mtnSeat11
        const mtnSeat11 = new MtnSeat(this, 1109, 596);
        this.add.existing(mtnSeat11);
        mtnSeat11.scaleX = 0.8;
        mtnSeat11.scaleY = 0.8;
        mtnSeat11.visible = false;

        // mtnSeat4
        const mtnSeat4 = new MtnSeat(this, 180, 499);
        this.add.existing(mtnSeat4);
        mtnSeat4.scaleX = 0.8;
        mtnSeat4.scaleY = 0.8;
        mtnSeat4.visible = false;

        // rightTracks
        const rightTracks = this.add.sprite(1086, 624, "skiHill-new", "rightTracks.png");

        // mtnSeat10
        const mtnSeat10 = new MtnSeat(this, 1029, 625);
        this.add.existing(mtnSeat10);
        mtnSeat10.scaleX = 0.8;
        mtnSeat10.scaleY = 0.8;
        mtnSeat10.visible = false;

        // middleSign
        const middleSign = this.add.sprite(994, 666, "skiHill-new", "middleSign.png");

        // catalog
        const catalog = this.add.image(1435.2681413085138, 883.2681413085137, "mtn", "catalog");
        catalog.setOrigin(0.4781451304681104, 0.4747050121158675);

        // leftTracks
        const leftTracks = this.add.sprite(252, 575, "skiHill-new", "leftTracks.png");

        // mtnSeat1
        const mtnSeat1 = new MtnSeat(this, 375, 615);
        this.add.existing(mtnSeat1);
        mtnSeat1.scaleX = 0.8;
        mtnSeat1.scaleY = 0.8;
        mtnSeat1.visible = false;

        // mtnSeat2
        const mtnSeat2 = new MtnSeat(this, 301, 573);
        this.add.existing(mtnSeat2);
        mtnSeat2.scaleX = 0.8;
        mtnSeat2.scaleY = 0.8;
        mtnSeat2.visible = false;

        // mtnSeat3
        const mtnSeat3 = new MtnSeat(this, 240, 530);
        this.add.existing(mtnSeat3);
        mtnSeat3.scaleX = 0.8;
        mtnSeat3.scaleY = 0.8;
        mtnSeat3.visible = false;

        // mtnSeat8
        const mtnSeat8 = new MtnSeat(this, 819, 646);
        this.add.existing(mtnSeat8);
        mtnSeat8.scaleX = 0.8;
        mtnSeat8.scaleY = 0.8;
        mtnSeat8.visible = false;

        // rectangle_2
        const rectangle_2 = this.add.rectangle(1069, 612, 200, 100);
        rectangle_2.angle = -20;

        // rectangle_2_1
        const rectangle_2_1 = this.add.rectangle(862, 655, 200, 100);
        rectangle_2_1.angle = -5;

        // rectangle_2_1_1
        const rectangle_2_1_1 = this.add.rectangle(616, 653, 250, 100);
        rectangle_2_1_1.angle = 5;

        // rectangle_2_1_1_1
        const rectangle_2_1_1_1 = this.add.rectangle(279, 546, 350, 100);
        rectangle_2_1_1_1.angle = 35;

        // lists
        const sort = [hut, hutBack];
        const seats103 = [mtnSeat11, mtnSeat10];
        const seats102 = [mtnSeat9, mtnSeat8];
        const seats101 = [mtnSeat7, mtnSeat5, mtnSeat6];
        const seats100 = [mtnSeat1, mtnSeat2, mtnSeat3, mtnSeat4];

        // mtnSeat9 (prefab fields)
        mtnSeat9.sitFrame = 17;
        mtnSeat9.offsetX = -10;
        mtnSeat9.offsetY = -90;

        // note (components)
        const noteSimpleButton = new SimpleButton(note);
        noteSimpleButton.hoverCallback = () => this.onShopOver();
        noteSimpleButton.hoverOutCallback = () => this.onShopOut();
        noteSimpleButton.callback = () => {this.interface.loadExternal('Sled')};

        // mtnSeat7 (prefab fields)
        mtnSeat7.sitFrame = 18;
        mtnSeat7.offsetX = 10;
        mtnSeat7.offsetY = -70;

        // mtnSeat6 (prefab fields)
        mtnSeat6.sitFrame = 18;
        mtnSeat6.offsetX = 10;
        mtnSeat6.offsetY = -70;

        // mtnSeat5 (prefab fields)
        mtnSeat5.sitFrame = 18;
        mtnSeat5.offsetX = 10;
        mtnSeat5.offsetY = -110;

        // mtnSeat11 (prefab fields)
        mtnSeat11.sitFrame = 24;
        mtnSeat11.offsetX = -100;
        mtnSeat11.offsetY = -70;

        // mtnSeat4 (prefab fields)
        mtnSeat4.sitFrame = 18;
        mtnSeat4.offsetX = 90;
        mtnSeat4.offsetY = -70;

        // mtnSeat10 (prefab fields)
        mtnSeat10.sitFrame = 24;
        mtnSeat10.offsetX = -100;
        mtnSeat10.offsetY = -70;

        // catalog (components)
        const catalogButton = new Button(catalog);
        catalogButton.spriteName = "catalog";
        catalogButton.callback = () => {this.interface.loadExternal('Sled')};
        catalogButton.activeFrame = false;

        // mtnSeat1 (prefab fields)
        mtnSeat1.sitFrame = 18;
        mtnSeat1.offsetX = 90;
        mtnSeat1.offsetY = -70;

        // mtnSeat2 (prefab fields)
        mtnSeat2.sitFrame = 18;
        mtnSeat2.offsetX = 90;
        mtnSeat2.offsetY = -70;

        // mtnSeat3 (prefab fields)
        mtnSeat3.sitFrame = 18;
        mtnSeat3.offsetX = 90;
        mtnSeat3.offsetY = -70;

        // mtnSeat8 (prefab fields)
        mtnSeat8.sitFrame = 17;
        mtnSeat8.offsetX = -10;
        mtnSeat8.offsetY = -90;

        // rectangle_2 (components)
        const rectangle_2SimpleButton = new SimpleButton(rectangle_2);
        rectangle_2SimpleButton.callback = () => this.triggerWaddle(103);

        // rectangle_2_1 (components)
        const rectangle_2_1SimpleButton = new SimpleButton(rectangle_2_1);
        rectangle_2_1SimpleButton.callback = () => this.triggerWaddle(102);

        // rectangle_2_1_1 (components)
        const rectangle_2_1_1SimpleButton = new SimpleButton(rectangle_2_1_1);
        rectangle_2_1_1SimpleButton.callback = () => this.triggerWaddle(101);

        // rectangle_2_1_1_1 (components)
        const rectangle_2_1_1_1SimpleButton = new SimpleButton(rectangle_2_1_1_1);
        rectangle_2_1_1_1SimpleButton.callback = () => this.triggerWaddle(100);

        this.bg = bg;
        this.liftBack = liftBack;
        this.bg2 = bg2;
        this.liftFront = liftFront;
        this.hut = hut;
        this.rightSign = rightSign;
        this.trees = trees;
        this.note = note;
        this.leftSign = leftSign;
        this.forwardTracks = forwardTracks;
        this.rightTracks = rightTracks;
        this.middleSign = middleSign;
        this.leftTracks = leftTracks;
        this.sort = sort;
        this.seats103 = seats103;
        this.seats102 = seats102;
        this.seats101 = seats101;
        this.seats100 = seats100;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    liftBack;
    /** @type {Phaser.GameObjects.Sprite} */
    bg2;
    /** @type {Phaser.GameObjects.Sprite} */
    liftFront;
    /** @type {Phaser.GameObjects.Sprite} */
    hut;
    /** @type {Phaser.GameObjects.Sprite} */
    rightSign;
    /** @type {Phaser.GameObjects.Sprite} */
    trees;
    /** @type {Phaser.GameObjects.Sprite} */
    note;
    /** @type {Phaser.GameObjects.Sprite} */
    leftSign;
    /** @type {Phaser.GameObjects.Sprite} */
    forwardTracks;
    /** @type {Phaser.GameObjects.Sprite} */
    rightTracks;
    /** @type {Phaser.GameObjects.Sprite} */
    middleSign;
    /** @type {Phaser.GameObjects.Sprite} */
    leftTracks;
    /** @type {Array<Phaser.GameObjects.Sprite|Phaser.GameObjects.Image>} */
    sort;
    /** @type {MtnSeat[]} */
    seats103;
    /** @type {MtnSeat[]} */
    seats102;
    /** @type {MtnSeat[]} */
    seats101;
    /** @type {MtnSeat[]} */
    seats100;

    /* START-USER-CODE */

    // Write your code here

    create() {

        super.create();
        this.liftBack.play("lift_back");
        this.liftFront.play("lift_front");
    }

    onShopOver() {
        this.note.play("rollout")
    }

    onShopOut() {
        this.note.stop("rollout")
        this.note.setFrame("note0001.png")
    }

    triggerWaddle(id) {
        if (this.world.client.activeSeat) {
            return
        }

        let text = 'Would you like to join this\nSled Race?'

        this.interface.prompt.showWindow(text, 'dual', () => {
            this.network.send('join_waddle', { id: id })

            this.interface.prompt.window.visible = false
        })

    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
