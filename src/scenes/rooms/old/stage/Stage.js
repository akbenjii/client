import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'

/* START OF COMPILED CODE */

export default class Stage extends RoomScene {

    constructor() {
        super("Stage");

        /** @type {Phaser.GameObjects.Sprite} */
        this.net;
        /** @type {Phaser.GameObjects.Sprite} */
        this.yb;
        /** @type {Phaser.GameObjects.Sprite} */
        this.bb;
        /** @type {Phaser.GameObjects.Sprite} */
        this.ob;
        /** @type {Phaser.GameObjects.Sprite} */
        this.trunk;
        /** @type {Phaser.GameObjects.Sprite} */
        this.vending;
        /** @type {Phaser.GameObjects.Sprite} */
        this.left_sb_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.left_sb_button_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sb_orange_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sb_brown_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.sb_yellow_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.right_sb_button;
        /** @type {Phaser.GameObjects.Sprite} */
        this.right_sb_button_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.yellow_pully;
        /** @type {Phaser.GameObjects.Sprite} */
        this.locker_4;
        /** @type {Phaser.GameObjects.Sprite} */
        this.locker_3;
        /** @type {Phaser.GameObjects.Sprite} */
        this.locker_2;
        /** @type {Phaser.GameObjects.Sprite} */
        this.locker_1;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'plaza': () => this.triggerRoom(300, 710, 530),
            'costume': () => this.interface.loadExternal('CostumeCatalog')
        }
        this.roomAnims = true
        this.music = '33'
        this.boardToggle = true
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("stage-pack", "assets/media/rooms/old/stage/stage-pack.json");
    }

    /** @returns {void} */
    _create() {

        // stage_bg
        this.add.image(765, 521, "stage", "stage_bg");

        // net
        const net = this.add.sprite(547, 237, "stage", "basketball_net0001");

        // yb
        const yb = this.add.sprite(694, 61, "stage", "sb_yellow_anim0001");

        // bb
        const bb = this.add.sprite(547, 58, "stage", "sb_brown_anim0001");

        // ob
        const ob = this.add.sprite(414, 78, "stage", "sb_orange_anim0001");

        // stage_above
        this.add.image(760, 251, "stage", "stage_above");

        // middle_light
        this.add.image(763, 274, "stage", "middle_light");

        // lights
        this.add.image(765, 304, "stage", "lights");

        // left_side_back
        this.add.image(79, 242, "stage", "left_side_back");

        // behind_right_booth
        const behind_right_booth = this.add.image(1447, 252, "stage", "behind_right_booth");
        behind_right_booth.flipX = true;

        // left_right_chair
        this.add.image(134, 214, "stage", "left_right_chair");

        // right_left_chair
        this.add.image(1389, 217, "stage", "right_left_chair");

        // right_side
        this.add.image(1330, 400, "stage", "right_side");

        // left_side
        this.add.image(190, 400, "stage", "left_side");

        // door
        const door = this.add.image(121, 582, "stage", "door");

        // left_left_chair
        this.add.image(85, 308, "stage", "left_left_chair");

        // left_front_arm
        const left_front_arm = this.add.image(67, 342, "stage", "left_front_arm");

        // right_right_chair
        this.add.image(1438, 310, "stage", "right_right_chair");

        // left_door_front
        this.add.image(75, 590, "stage", "left_door_front");

        // left_hold
        const left_hold = this.add.image(108.30923502947462, 385.65593861825465, "stage", "left_hold");
        left_hold.setOrigin(0.5203265803277105, 0.8279995166791705);

        // right_front_arm
        const right_front_arm = this.add.image(1459, 343, "stage", "right_front_arm");

        // right_hold
        const right_hold = this.add.image(1414, 383.1729969759188, "stage", "right_hold");
        right_hold.setOrigin(0.5, 0.7769527320938489);

        // left_side_fg
        this.add.image(134, 469, "stage", "left_side_fg");

        // right_side_fg
        const right_side_fg = this.add.image(1384, 469, "stage", "right_side_fg");
        right_side_fg.flipX = true;

        // trunk
        const trunk = this.add.sprite(1369, 626, "stage", "trunk0001");

        // vending
        const vending = this.add.sprite(1189, 422, "stage", "vending");

        // left_top_chair
        const left_top_chair = this.add.image(195, 743, "stage", "left_top_chair");

        // left_top_chair_2
        const left_top_chair_2 = this.add.image(288, 761, "stage", "left_top_chair_2");

        // left_top_chair_3
        const left_top_chair_3 = this.add.image(387, 774, "stage", "left_top_chair_3");

        // left_top_chair_4
        const left_top_chair_4 = this.add.image(492, 799, "stage", "left_top_chair_4");

        // left_top_chair_5
        const left_top_chair_5 = this.add.image(601, 818, "stage", "left_top_chair_5");

        // left_bottom_chair_1
        const left_bottom_chair_1 = this.add.image(147, 841, "stage", "left_bottom_chair_1");

        // left_bottom_chair_2
        const left_bottom_chair_2 = this.add.image(240, 859, "stage", "left_bottom_chair_2");

        // left_bottom_chair_3
        const left_bottom_chair_3 = this.add.image(350, 873, "stage", "left_bottom_chair_3");

        // right_top_chair
        const right_top_chair = this.add.image(1347, 741, "stage", "right_top_chair");

        // right_top_chair_1
        const right_top_chair_1 = this.add.image(1253, 762, "stage", "right_top_chair_1");

        // right_top_chair_2
        const right_top_chair_2 = this.add.image(1152, 786, "stage", "right_top_chair_2");

        // right_top_chair_3
        const right_top_chair_3 = this.add.image(1046, 807, "stage", "right_top_chair_3");

        // right_top_chair_4
        const right_top_chair_4 = this.add.image(928, 822, "stage", "right_top_chair_4");

        // left_bottom_chair_4
        const left_bottom_chair_4 = this.add.image(460, 882, "stage", "left_bottom_chair_4");

        // left_bottom_chair_5
        const left_bottom_chair_5 = this.add.image(578, 894, "stage", "left_bottom_chair_5");

        // right_bottom_chair_1
        const right_bottom_chair_1 = this.add.image(1378, 832, "stage", "right_bottom_chair_1");

        // right_bottom_chair_2
        const right_bottom_chair_2 = this.add.image(1287, 854, "stage", "right_bottom_chair_2");

        // right_bottom_chair_3
        const right_bottom_chair_3 = this.add.image(1179, 872, "stage", "right_bottom_chair_3");

        // right_bottom_chair_4
        const right_bottom_chair_4 = this.add.image(1072, 890, "stage", "right_bottom_chair_4");

        // right_bottom_chair_5
        const right_bottom_chair_5 = this.add.image(958, 902, "stage", "right_bottom_chair_5");

        // costume_cat
        const costume_cat = this.add.image(1426, 886, "stage", "costume_cat");

        // table
        const table = this.add.image(545, 645, "stage", "table");

        // left_table_chair
        this.add.image(449, 661, "stage", "left_table_chair");

        // middle_table_chair
        this.add.image(520, 675, "stage", "middle_table_chair");

        // right_table_chair
        this.add.image(597, 686, "stage", "right_table_chair");

        // switchbox
        this.add.image(771, 887, "stage", "switchbox");

        // left_sb_button
        const left_sb_button = this.add.sprite(677, 815, "stage", "left_sb_button0001");

        // left_sb_button_2
        const left_sb_button_2 = this.add.sprite(702, 815, "stage", "left_sb_button_20001");

        // sb_orange_button
        const sb_orange_button = this.add.sprite(731, 804, "stage", "sb_orange_button0001");

        // sb_brown_button
        const sb_brown_button = this.add.sprite(750, 822, "stage", "sb_brown_button0001");

        // sb_yellow_button
        const sb_yellow_button = this.add.sprite(775, 804, "stage", "sb_yellow_button0001");

        // right_sb_button
        const right_sb_button = this.add.sprite(806, 815, "stage", "right_sb_button0001");

        // right_sb_button_2
        const right_sb_button_2 = this.add.sprite(826, 815, "stage", "right_sb_button_20001");

        // yellow_pully
        const yellow_pully = this.add.sprite(858, 803, "stage", "yellow_pully0001");

        // locker_4
        const locker_4 = this.add.sprite(1114, 273, "stage", "locker_40001");

        // locker_3
        const locker_3 = this.add.sprite(1071, 274, "stage", "locker_30001");

        // locker_2
        const locker_2 = this.add.sprite(1027, 274, "stage", "locker_20001");

        // locker_1
        const locker_1 = this.add.sprite(983, 274, "stage", "locker_10001");

        // yellow_door
        const yellow_door = this.add.image(873, 369, "stage", "yellow_door");

        // right_table_chair_back
        const right_table_chair_back = this.add.image(607, 678, "stage", "right_table_chair_back");
        right_table_chair_back.setOrigin(0.5, 0.7218970307091754);

        // middle_table_chair_back
        const middle_table_chair_back = this.add.image(505, 660, "stage", "middle_table_chair_back");
        middle_table_chair_back.setOrigin(0.43960199164128877, 0.6365520188979551);

        // left_table_chair_back
        const left_table_chair_back = this.add.image(438, 651.7776116299486, "stage", "left_table_chair_back");
        left_table_chair_back.setOrigin(0.5, 0.756035035433666);

        // lists
        const sort = [left_front_arm, left_hold, right_front_arm, right_hold, left_bottom_chair_5, left_bottom_chair_4, left_bottom_chair_3, left_bottom_chair_2, left_bottom_chair_1, left_top_chair_5, left_top_chair_4, left_top_chair_3, left_top_chair_2, left_top_chair, right_bottom_chair_5, right_bottom_chair_4, right_bottom_chair_3, right_bottom_chair_2, right_bottom_chair_1, right_top_chair, right_top_chair_4, right_top_chair_3, right_top_chair_2, right_top_chair_1, table, costume_cat, right_table_chair_back, middle_table_chair_back, left_table_chair_back];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 152;
        doorMoveTo.y = 660;

        // trunk (components)
        const trunkSimpleButton = new SimpleButton(trunk);
        trunkSimpleButton.hoverCallback = () => this.onTrunkOver();
        trunkSimpleButton.hoverOutCallback = () => this.onTrunkOut();
        new MoveTo(trunk);

        // vending (components)
        const vendingSimpleButton = new SimpleButton(vending);
        vendingSimpleButton.hoverCallback = () => this.onVendingOver();

        // costume_cat (components)
        const costume_catButton = new Button(costume_cat);
        costume_catButton.spriteName = "costume_cat";
        costume_catButton.callback = () => this.interface.loadExternal('CostumeCatalog');
        costume_catButton.activeFrame = false;

        // left_sb_button (components)
        const left_sb_buttonSimpleButton = new SimpleButton(left_sb_button);
        left_sb_buttonSimpleButton.callback = () => this.onLeftSbButton();

        // left_sb_button_2 (components)
        const left_sb_button_2SimpleButton = new SimpleButton(left_sb_button_2);
        left_sb_button_2SimpleButton.callback = () => this.onLeftSbButton2();

        // sb_orange_button (components)
        const sb_orange_buttonSimpleButton = new SimpleButton(sb_orange_button);
        sb_orange_buttonSimpleButton.callback = () => this.onObClick();

        // sb_brown_button (components)
        const sb_brown_buttonSimpleButton = new SimpleButton(sb_brown_button);
        sb_brown_buttonSimpleButton.callback = () => this.onBbClick();

        // sb_yellow_button (components)
        const sb_yellow_buttonSimpleButton = new SimpleButton(sb_yellow_button);
        sb_yellow_buttonSimpleButton.callback = () => this.onYbClick();

        // right_sb_button (components)
        const right_sb_buttonSimpleButton = new SimpleButton(right_sb_button);
        right_sb_buttonSimpleButton.callback = () => this.onRightSbButton();

        // right_sb_button_2 (components)
        const right_sb_button_2SimpleButton = new SimpleButton(right_sb_button_2);
        right_sb_button_2SimpleButton.callback = () => this.onRightSbButton2();

        // yellow_pully (components)
        const yellow_pullySimpleButton = new SimpleButton(yellow_pully);
        yellow_pullySimpleButton.callback = () => this.onPulleyClick();

        // yellow_door (components)
        const yellow_doorButton = new Button(yellow_door);
        yellow_doorButton.spriteName = "yellow_door";

        this.net = net;
        this.yb = yb;
        this.bb = bb;
        this.ob = ob;
        this.trunk = trunk;
        this.vending = vending;
        this.left_sb_button = left_sb_button;
        this.left_sb_button_2 = left_sb_button_2;
        this.sb_orange_button = sb_orange_button;
        this.sb_brown_button = sb_brown_button;
        this.sb_yellow_button = sb_yellow_button;
        this.right_sb_button = right_sb_button;
        this.right_sb_button_2 = right_sb_button_2;
        this.yellow_pully = yellow_pully;
        this.locker_4 = locker_4;
        this.locker_3 = locker_3;
        this.locker_2 = locker_2;
        this.locker_1 = locker_1;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onTrunkOver() {
        this.trunk.play('trunkover')
    }

    onTrunkOut() {
        this.trunk.play('trunkout')
    }

    onVendingOver() {
        this.vending.play('vending')
    }

    onPulleyClick() {
        this.yellow_pully.play('yelpulley')
        this.net.play('yellowpuffle')
    }

    onRightSbButton2() {
        this.right_sb_button_2.play('rightsb2')
        let animation = (this.boardToggle) ? 'locker4_start' : 'locker4_end'

        this.locker_4.play(animation)
        this.boardToggle = !this.boardToggle
    }

    onRightSbButton() {
        this.right_sb_button.play('rightsb')
        let rbanimation = (this.boardToggle) ? 'locker3_start' : 'locker3_end'

        this.locker_3.play(rbanimation)
        this.boardToggle = !this.boardToggle
    }

    onLeftSbButton() {
        this.left_sb_button.play('leftsb')
        let lbanimation = (this.boardToggle) ? 'locker1_start' : 'locker1_end'

        this.locker_1.play(lbanimation)
        this.boardToggle = !this.boardToggle
    }

    onLeftSbButton2() {
        this.left_sb_button_2.play('leftsb2')
        let lbtanimation = (this.boardToggle) ? 'locker2_start' : 'locker2_end'

        this.locker_2.play(lbtanimation)
        this.boardToggle = !this.boardToggle
    }

    onYbClick() {
        this.sb_yellow_button.play('ybutton')
        this.yb.play('yb')
    }

    onBbClick() {
        this.sb_brown_button.play('bbutton')
        this.bb.play('bb')
    }

    onObClick() {
        this.sb_orange_button.play('obutton')
        this.ob.play('ob')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
