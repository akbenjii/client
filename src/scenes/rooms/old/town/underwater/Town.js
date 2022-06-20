import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Town extends RoomScene {

    constructor() {
        super("Town");

        /** @type {Phaser.GameObjects.Container} */
        this.school;
        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'dock': () => this.triggerRoom(800, 1200, 400),
            'forts': () => this.triggerRoom(801, 360, 520),
            'coffee': () => this.triggerRoom(110, 700, 450),
            'dance': () => this.triggerRoom(120, 300, 560),
            'gift': () => this.triggerRoom(130, 1036, 520),
        }
        this.music='bubble_boogie'

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("town-pack", "assets/media/rooms/old/town/town-pack.json");
    }

    /** @returns {void} */
    _create() {

        // bg
        this.add.image(760, 480, "town-underwater", "bg");

        // outline
        const outline = this.add.image(1407, 700, "town-underwater", "outline");
        outline.scaleX = 0.5714877839302157;
        outline.scaleY = 0.5714877839302157;

        // left_sign
        const left_sign = this.add.image(179, 450, "town", "left_sign");
        left_sign.setOrigin(0, 0);

        // right_sign
        const right_sign = this.add.image(1286, 465, "town", "right_sign");
        right_sign.setOrigin(0, 0);

        // box_3
        const box_3 = this.add.image(1148, 581, "town", "box_3");
        box_3.setOrigin(0.4943820224719101, 0.5569620253164557);

        // chair_2
        const chair_2 = this.add.image(372, 496, "town", "chair_2");
        chair_2.setOrigin(0.49382716049382713, 0.27358490566037735);

        // table_2
        const table_2 = this.add.image(440, 561, "town", "table_2");
        table_2.setOrigin(0.5, 0.7864077669902912);

        // chair_1
        const chair_1 = this.add.image(338, 545, "town", "chair_1");
        chair_1.setOrigin(0.49411764705882355, 0.2857142857142857);

        // table_1
        const table_1 = this.add.image(410, 613, "town", "table_1");
        table_1.setOrigin(0.49572649572649574, 0.7830188679245284);

        // clothesdoor
        const clothesdoor = this.add.image(1033, 438, "town-underwater", "clothesdoor");

        // coffeedoor
        const coffeedoor = this.add.image(535, 432, "town-underwater", "coffeedoor");

        // nightclubdoor
        const nightclubdoor = this.add.image(690, 447, "town-underwater", "nightclubdoor");

        // reeds
        const reeds = this.add.image(131, 660, "town-underwater", "reeds");
        reeds.scaleX = 0.5714877839302157;
        reeds.scaleY = 0.5714877839302157;

        // snail
        const snail = this.add.image(588, 792, "town-underwater", "snail");

        // stickoutplant
        const stickoutplant = this.add.image(1453, 735, "town-underwater", "stickoutplant");
        stickoutplant.scaleX = 0.5712834770332192;
        stickoutplant.scaleY = 0.5712834770332192;

        // minecoral
        const minecoral = this.add.image(1314, 802, "town-underwater", "minecoral");
        minecoral.scaleX = 0.5714877839302157;
        minecoral.scaleY = 0.5714877839302157;

        // coral
        const coral = this.add.image(1496, 625, "town-underwater", "coral");
        coral.scaleX = 0.5714877839302157;
        coral.scaleY = 0.5714877839302157;

        // school
        const school = this.add.container(1600, 282);

        // fish_1
        const fish_1 = this.add.image(20, 50, "town-underwater", "fish");
        fish_1.scaleX = 0.4;
        fish_1.scaleY = 0.4;
        school.add(fish_1);

        // fish_2
        const fish_2 = this.add.image(83, 10, "town-underwater", "fish");
        fish_2.scaleX = 0.4;
        fish_2.scaleY = 0.4;
        school.add(fish_2);

        // fish_3
        const fish_3 = this.add.image(102, 60, "town-underwater", "fish");
        fish_3.scaleX = 0.4;
        fish_3.scaleY = 0.4;
        school.add(fish_3);

        // fish
        const fish = this.add.image(0, 0, "town-underwater", "fish");
        fish.scaleX = 0.4;
        fish.scaleY = 0.4;
        school.add(fish);

        // water
        const water = this.add.image(745, 1029, "town-underwater", "water");
        water.setOrigin(0.47662551505534595, 1.005400025272565);

        // lists
        const sort = [box_3, chair_2, chair_1, table_1, table_2, water, coral, minecoral, stickoutplant, snail, reeds];

        // clothesdoor (components)
        const clothesdoorButton = new Button(clothesdoor);
        clothesdoorButton.spriteName = "clothesdoor";
        clothesdoorButton.activeFrame = false;
        new MoveTo(clothesdoor);

        // coffeedoor (components)
        const coffeedoorButton = new Button(coffeedoor);
        coffeedoorButton.spriteName = "coffeedoor";
        coffeedoorButton.activeFrame = false;
        new MoveTo(coffeedoor);

        // nightclubdoor (components)
        const nightclubdoorButton = new Button(nightclubdoor);
        nightclubdoorButton.spriteName = "nightclubdoor";
        nightclubdoorButton.activeFrame = false;
        new MoveTo(nightclubdoor);

        this.school = school;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    create(){
        super.create()
        this.fishTween()
        this.fishTween2()
    }

    fishTween() {
        let tween = this.tweens.add({
            targets: this.school,
            y: 280,
            delay: 100,
            duration: 300,
            onComplete: () => this.onFishTweenComplete()
        });
    }

    onFishTweenComplete() {
        let tween = this.tweens.add({
            targets: this.school,
            y: 285,
            delay: 100,
            duration: 300,
            onComplete: () => this.fishTween()
        });
    }

    fishTween2() {
        let tween2 = this.tweens.add({
            targets: this.school,
            x: -200,
            duration: 25000,
            onComplete: () => this.onFishTween2Complete()
        });
    }

    onFishTween2Complete(){
        this.school.x = 1600
        this.fishTween2()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
