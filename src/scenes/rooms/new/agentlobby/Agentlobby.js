import RoomScene from '../RoomScene'

import { MoveTo, SimpleButton } from '@components/components'


var notEpf = true;


/* START OF COMPILED CODE */

export default class Agentlobby extends RoomScene {

    constructor() {
        super("Agentlobby");

        /* START-USER-CTR-CODE */

        if (notEpf){
            this.roomTriggers = {
                'village': () => this.triggerRoom(800, 1200, 400),
                'callbox': () => this.unimplementedPrompt()
            }
        }
        else{
            this.roomTriggers = {
                'village': () => this.triggerRoom(800, 1200, 400),
                'hq': () => this.triggerRoom(800, 1200, 400)
            }
        }

        this.music = 1167

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    editorPreload() {

        this.load.pack("everydayPhoningFacility-pack-new", "assets/media/rooms/new/everydayPhoningFacility/everydayPhoningFacility-pack-new.json");
    }

    /** @returns {void} */
    _create() {

        // waterfall
        const waterfall = this.add.sprite(763, 68, "everydayPhoningFacility-new", "waterfall0001.png");

        // bg
        const bg = this.add.sprite(758, 486, "everydayPhoningFacility-new", "bg.png");

        // phonebox
        const phonebox = this.add.sprite(1081, 277, "everydayPhoningFacility-new", "phonebox0001.png");

        // phonecall
        const phonecall = this.add.sprite(1126, 271, "everydayPhoningFacility-new", "phonecall0001.png");

        // phoneboxHover
        const phoneboxHover = this.add.sprite(1081, 277, "everydayPhoningFacility-new", "phoneboxHover.png");

        // door
        const door = this.add.sprite(110, 337, "everydayPhoningFacility-new", "door0001.png");

        // doorExterior
        const doorExterior = this.add.sprite(267, 370, "everydayPhoningFacility-new", "doorExterior.png");

        // railing
        const railing = this.add.sprite(148, 521, "everydayPhoningFacility-new", "railing.png");

        // plantPot
        const plantPot = this.add.sprite(161, 560, "everydayPhoningFacility-new", "plantPot.png");

        // coffeeMachine
        const coffeeMachine = this.add.sprite(12, 583, "everydayPhoningFacility-new", "coffeeMachine.png");

        // coffeeTable
        const coffeeTable = this.add.sprite(268, 700, "everydayPhoningFacility-new", "coffeeTable.png");

        // rightDeskChair
        const rightDeskChair = this.add.sprite(1349, 441, "everydayPhoningFacility-new", "rightDeskChair.png");

        // rightDeskChairArm
        const rightDeskChairArm = this.add.sprite(1404, 455, "everydayPhoningFacility-new", "rightDeskChairArm.png");

        // rightDeskTop
        const rightDeskTop = this.add.sprite(1174, 474, "everydayPhoningFacility-new", "rightDeskTop.png");

        // rightDeskBottom
        const rightDeskBottom = this.add.sprite(1348, 562, "everydayPhoningFacility-new", "rightDeskBottom.png");

        // rightDeskChairVisitor
        const rightDeskChairVisitor = this.add.sprite(1162, 616, "everydayPhoningFacility-new", "rightDeskChairVisitor.png");

        // rightDeskChairVisitorTop
        const rightDeskChairVisitorTop = this.add.sprite(1127, 604, "everydayPhoningFacility-new", "rightDeskChairVisitorTop.png");

        // waterCooler
        const waterCooler = this.add.sprite(495, 693, "everydayPhoningFacility-new", "waterCooler.png");

        // desks
        const desks = this.add.sprite(909, 750, "everydayPhoningFacility-new", "desks.png");

        // clockAnim
        const clockAnim = this.add.sprite(1409, 726, "everydayPhoningFacility-new", "clockAnim0001.png");

        // chairBottomOne
        const chairBottomOne = this.add.sprite(684, 713, "everydayPhoningFacility-new", "chairBottomOne.png");

        // chairBottomTwo
        const chairBottomTwo = this.add.sprite(755, 775, "everydayPhoningFacility-new", "chairBottomTwo.png");

        // chairBottomThree
        const chairBottomThree = this.add.sprite(856, 718, "everydayPhoningFacility-new", "chairBottomThree.png");

        // chairBottomFour
        const chairBottomFour = this.add.sprite(1122, 746, "everydayPhoningFacility-new", "chairBottomFour.png");

        // chairBottomFive
        const chairBottomFive = this.add.sprite(1200, 725, "everydayPhoningFacility-new", "chairBottomFive.png");

        // topDeskShadow
        const topDeskShadow = this.add.sprite(691, 448, "everydayPhoningFacility-new", "topDeskShadow.png");

        // topDeskLeftChair
        const topDeskLeftChair = this.add.sprite(623, 367, "everydayPhoningFacility-new", "topDeskLeftChair.png");

        // topDeskRightChair
        const topDeskRightChair = this.add.sprite(787, 381, "everydayPhoningFacility-new", "topDeskRightChair.png");

        // topDeskLeft
        const topDeskLeft = this.add.sprite(518, 382, "everydayPhoningFacility-new", "topDeskLeft.png");

        // topDeskRight
        const topDeskRight = this.add.sprite(745, 443, "everydayPhoningFacility-new", "topDeskRight.png");

        // fg
        const fg = this.add.sprite(741, 1016, "everydayPhoningFacility-new", "fg.png");
        fg.setOrigin(0.5, 1);

        // phonebox_btn
        const phonebox_btn = this.add.rectangle(1082, 287, 180, 300);
        phonebox_btn.fillColor = 1570301;
        phonebox_btn.fillAlpha = 0.5;

        // text
        const text = this.add.text(1058, 171, "", {});
        text.text = "PHONE";
        text.setStyle({ "align": "center", "color": "#575949ff", "fontFamily": "Burbank Small", "fontSize": "22px", "fontStyle": "bold" });

        // lists
        const sort = [];

        // door (components)
        const doorSimpleButton = new SimpleButton(door);
        doorSimpleButton.hoverCallback = () => this.onDoorOver();
        doorSimpleButton.hoverOutCallback = () => this.onDoorOut();
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 110;
        doorMoveTo.y = 350;

        this.waterfall = waterfall;
        this.bg = bg;
        this.phonebox = phonebox;
        this.phonecall = phonecall;
        this.phoneboxHover = phoneboxHover;
        this.door = door;
        this.doorExterior = doorExterior;
        this.railing = railing;
        this.plantPot = plantPot;
        this.coffeeMachine = coffeeMachine;
        this.coffeeTable = coffeeTable;
        this.rightDeskChair = rightDeskChair;
        this.rightDeskChairArm = rightDeskChairArm;
        this.rightDeskTop = rightDeskTop;
        this.rightDeskBottom = rightDeskBottom;
        this.rightDeskChairVisitor = rightDeskChairVisitor;
        this.rightDeskChairVisitorTop = rightDeskChairVisitorTop;
        this.waterCooler = waterCooler;
        this.desks = desks;
        this.clockAnim = clockAnim;
        this.chairBottomOne = chairBottomOne;
        this.chairBottomTwo = chairBottomTwo;
        this.chairBottomThree = chairBottomThree;
        this.chairBottomFour = chairBottomFour;
        this.chairBottomFive = chairBottomFive;
        this.topDeskShadow = topDeskShadow;
        this.topDeskLeftChair = topDeskLeftChair;
        this.topDeskRightChair = topDeskRightChair;
        this.topDeskLeft = topDeskLeft;
        this.topDeskRight = topDeskRight;
        this.fg = fg;
        this.phonebox_btn = phonebox_btn;
        this.sort = sort;

        this.events.emit("scene-awake");
    }

    /** @type {Phaser.GameObjects.Sprite} */
    waterfall;
    /** @type {Phaser.GameObjects.Sprite} */
    bg;
    /** @type {Phaser.GameObjects.Sprite} */
    phonebox;
    /** @type {Phaser.GameObjects.Sprite} */
    phonecall;
    /** @type {Phaser.GameObjects.Sprite} */
    phoneboxHover;
    /** @type {Phaser.GameObjects.Sprite} */
    door;
    /** @type {Phaser.GameObjects.Sprite} */
    doorExterior;
    /** @type {Phaser.GameObjects.Sprite} */
    railing;
    /** @type {Phaser.GameObjects.Sprite} */
    plantPot;
    /** @type {Phaser.GameObjects.Sprite} */
    coffeeMachine;
    /** @type {Phaser.GameObjects.Sprite} */
    coffeeTable;
    /** @type {Phaser.GameObjects.Sprite} */
    rightDeskChair;
    /** @type {Phaser.GameObjects.Sprite} */
    rightDeskChairArm;
    /** @type {Phaser.GameObjects.Sprite} */
    rightDeskTop;
    /** @type {Phaser.GameObjects.Sprite} */
    rightDeskBottom;
    /** @type {Phaser.GameObjects.Sprite} */
    rightDeskChairVisitor;
    /** @type {Phaser.GameObjects.Sprite} */
    rightDeskChairVisitorTop;
    /** @type {Phaser.GameObjects.Sprite} */
    waterCooler;
    /** @type {Phaser.GameObjects.Sprite} */
    desks;
    /** @type {Phaser.GameObjects.Sprite} */
    clockAnim;
    /** @type {Phaser.GameObjects.Sprite} */
    chairBottomOne;
    /** @type {Phaser.GameObjects.Sprite} */
    chairBottomTwo;
    /** @type {Phaser.GameObjects.Sprite} */
    chairBottomThree;
    /** @type {Phaser.GameObjects.Sprite} */
    chairBottomFour;
    /** @type {Phaser.GameObjects.Sprite} */
    chairBottomFive;
    /** @type {Phaser.GameObjects.Sprite} */
    topDeskShadow;
    /** @type {Phaser.GameObjects.Sprite} */
    topDeskLeftChair;
    /** @type {Phaser.GameObjects.Sprite} */
    topDeskRightChair;
    /** @type {Phaser.GameObjects.Sprite} */
    topDeskLeft;
    /** @type {Phaser.GameObjects.Sprite} */
    topDeskRight;
    /** @type {Phaser.GameObjects.Sprite} */
    fg;
    /** @type {Phaser.GameObjects.Rectangle} */
    phonebox_btn;
    /** @type {Array<any>} */
    sort;

    /* START-USER-CODE */


    create() {

        super.create()

        this.clockAnim.play("clockAnim")

        if (notEpf = true){
            this.phonebox.play("phonebox");

            const phoneboxSimpleButton = new SimpleButton(this.phonebox_btn);
            phoneboxSimpleButton.hoverCallback = () => this.onPhoneboxOver();
            phoneboxSimpleButton.hoverOutCallback = () => this.onPhoneboxOut();
            this.sound.add("epf-ring").play({
                loop: true
            })
        }
        else if (notEpf = false){
            const waterfallSimpleButton = new SimpleButton(this.waterfall);
            waterfallSimpleButton.hoverCallback = () => this.onEpfOver();
            waterfallSimpleButton.hoverOutCallback = () => this.onEpfOut();
        }
    }

    onPhoneboxOver(){
        this.phonecall.play("phonecall1");
        this.phoneboxHover.alpha = 1
        this.phonebox.stop()
        this.sound.get("epf-ring").stop();
    }

    onPhoneboxOut(){
        this.phonecall.play("phonecall2");
        this.phonebox.play("phonebox")
        this.phoneboxHover.alpha = 0.01
        this.sound.get("epf-ring").play();
    }

    onDoorOver(){
        this.door.setFrame("door0002.png")
        this.sound.add("epf-SideDoorOpen").play()
    }

    onDoorOut(){
        this.door.setFrame("door0001.png")
        this.sound.add("epf-SideDoorClose").play()
    }

    onEpfOver(){
        this.waterfall.play("waterfall1")
    }

    onEpfOut(){
        this.waterfall.play("waterfall2")
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// export default template
