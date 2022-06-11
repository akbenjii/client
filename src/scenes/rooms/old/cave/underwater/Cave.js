import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, Zone } from '@components/components'


/* START OF COMPILED CODE */

export default class Cave extends RoomScene {

    constructor() {
        super("Cave");

        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfall10001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.waterfall20001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cone10001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cone20001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.boarduw0001;
        /** @type {Phaser.GameObjects.Sprite} */
        this.floatieuw0001;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */

        this.roomTriggers = {
            'boiler': () => this.triggerRoom(804, 590, 560),
            'plaza': () => this.triggerRoom(300, 582, 588),
            'mine': () => this.triggerRoom(808, 256, 512)
        }

        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("cave-pack", "assets/media/rooms/old/cave/cave-pack.json");
    }

    /** @returns {void} */
    _create() {

        // caveuw
        const caveuw = this.add.image(0, -14, "caveuw", "caveuw");
        caveuw.setOrigin(0, 0);

        // ceiling
        const ceiling = this.add.image(1360, 743, "cave", "ceiling");
        ceiling.setOrigin(0.8945998698763825, 0.9345911949685535);

        // fg_1
        const fg_1 = this.add.image(-15, 880, "cave", "fg_1");
        fg_1.setOrigin(0, 1);

        // fg_2
        const fg_2 = this.add.image(1381, 830, "cave", "fg_2");
        fg_2.setOrigin(0.06493506493506493, 0.46387832699619774);

        // fg_3
        const fg_3 = this.add.image(0, 960, "cave", "fg_3");
        fg_3.setOrigin(0, 1);

        // door
        const door = this.add.image(104, 291, "cave", "door");
        door.setOrigin(0, 0);

        // ladder_back
        const ladder_back = this.add.image(349, 756, "cave", "ladder_back");
        ladder_back.setOrigin(0.5068493150684932, 0.5);

        // ladder_front
        const ladder_front = this.add.image(317, 778, "cave", "ladder_front");

        // water_water_1
        const water_water_1 = this.add.image(813, 639, "cave", "water/water_1");
        water_water_1.setOrigin(0.5, 2.8333333333333335);

        // water_water_2
        const water_water_2 = this.add.image(811, 656, "cave", "water/water_2");
        water_water_2.setOrigin(0.5, 1.8571428571428572);

        // water_water_3
        const water_water_3 = this.add.image(809, 677, "cave", "water/water_3");
        water_water_3.setOrigin(0.5, 1.8571428571428572);

        // water_water_4
        const water_water_4 = this.add.image(807, 698, "cave", "water/water_4");
        water_water_4.setOrigin(0.5006675567423231, 1.8571428571428572);

        // water_water_5
        const water_water_5 = this.add.image(805, 719, "cave", "water/water_5");
        water_water_5.setOrigin(0.5006385696040868, 1.8571428571428572);

        // water_water_6
        const water_water_6 = this.add.image(803, 740, "cave", "water/water_6");
        water_water_6.setOrigin(0.5, 1.8571428571428572);

        // water_water_7
        const water_water_7 = this.add.image(801, 761, "cave", "water/water_7");
        water_water_7.setOrigin(0.5, 1.8571428571428572);

        // water_water_8
        const water_water_8 = this.add.image(799, 782, "cave", "water/water_8");
        water_water_8.setOrigin(0.5, 1.8571428571428572);

        // water_water_9
        const water_water_9 = this.add.image(798, 803, "cave", "water/water_9");
        water_water_9.setOrigin(0.5, 1.8571428571428572);

        // water_water_10
        const water_water_10 = this.add.image(797, 824, "cave", "water/water_10");
        water_water_10.setOrigin(0.5005313496280552, 1.8571428571428572);

        // water_water_11
        const water_water_11 = this.add.image(796, 845, "cave", "water/water_11");
        water_water_11.setOrigin(0.5, 1.8571428571428572);

        // line
        const line = this.add.image(807, 724, "cave", "line");
        line.setOrigin(0.5006337135614702, 2.0555555555555554);

        // black_layout_for_floor_
        const black_layout_for_floor_ = this.add.image(745, 488, "underwaterpoolcave", "black layout for floor ");
        black_layout_for_floor_.scaleX = 1.9538420432414052;
        black_layout_for_floor_.scaleY = 1.8257194207933256;

        // pool_main_body_
        const pool_main_body_ = this.add.image(752, 470, "underwaterpoolcave", "pool main body ");
        pool_main_body_.scaleX = 1.8013325122941026;
        pool_main_body_.scaleY = 1.8035498414924918;

        // zone
        const zone = this.add.rectangle(1315, 363, 115, 400);
        zone.alpha = 0.5;
        zone.isFilled = true;
        zone.fillColor = 65280;

        // weird_things_with_pool_bottom_mid_
        const weird_things_with_pool_bottom_mid_ = this.add.image(801, 828, "underwaterpoolcave", "weird things with pool bottom mid ");
        weird_things_with_pool_bottom_mid_.scaleX = 2.182407853611281;
        weird_things_with_pool_bottom_mid_.scaleY = 5.177691102820992;

        // waterfall_animations_bro
        const waterfall_animations_bro = this.add.image(820, 459, "underwaterpoolcave", "waterfall animations bro");
        waterfall_animations_bro.scaleX = 1.9140798411732685;
        waterfall_animations_bro.scaleY = 2.196290056110742;

        // another_glass_thing_
        const another_glass_thing_ = this.add.image(388, 504, "underwaterpoolcave", "another glass thing ");
        another_glass_thing_.scaleX = 1.216977949788577;
        another_glass_thing_.scaleY = 1.3294753844906357;

        // animations__for_floaty_things_
        const animations__for_floaty_things_ = this.add.image(836, 600, "underwaterpoolcave", "animations  for floaty things ");
        animations__for_floaty_things_.scaleX = 1.832285820797198;
        animations__for_floaty_things_.scaleY = 1.7091558907527222;

        // boiler_room_door_0001
        const boiler_room_door_0001 = this.add.image(163, 486, "underwaterpoolcave", "boiler room door 0001");
        boiler_room_door_0001.scaleX = 1.8960472887057391;
        boiler_room_door_0001.scaleY = 1.9519918075269178;

        // green_thingies_
        const green_thingies_ = this.add.image(785, 770, "underwaterpoolcave", "green thingies ");
        green_thingies_.scaleX = 1.8078235507460483;
        green_thingies_.scaleY = 4.054306973401748;

        // pool_rails_
        const pool_rails_ = this.add.image(327, 776, "underwaterpoolcave", "pool rails ");
        pool_rails_.scaleX = 2.1717366408054577;
        pool_rails_.scaleY = 1.668034271348114;

        // main_body_of_pool_
        const main_body_of_pool_ = this.add.image(741, 486, "underwaterpoolcave", "main body of pool ");
        main_body_of_pool_.scaleX = 1.8509497030171218;
        main_body_of_pool_.scaleY = 2.252259027242101;

        // light_and_left_pillar_
        const light_and_left_pillar_ = this.add.image(863, 441, "underwaterpoolcave", "light and left pillar ");
        light_and_left_pillar_.scaleX = 2.0123223667558965;
        light_and_left_pillar_.scaleY = 1.8141337558654265;

        // flood_layer
        const flood_layer = this.add.image(746, 674, "underwaterpoolcave", "flood layer");
        flood_layer.scaleX = 1.4158373171144927;
        flood_layer.scaleY = 1.08530653074996;

        // waterfall10001
        const waterfall10001 = this.add.sprite(581, 454, "caveuw", "waterfall10001");

        // waterfall20001
        const waterfall20001 = this.add.sprite(1065, 446, "caveuw", "waterfall20001");

        // glass2
        this.add.image(449, 478, "caveuw", "glass2");

        // glass1
        const glass1 = this.add.image(451, 488, "caveuw", "glass1");
        glass1.scaleX = 0.8;
        glass1.scaleY = 0.8;

        // cone10001
        const cone10001 = this.add.sprite(506, 380, "caveuw", "cone10001");

        // cone20001
        const cone20001 = this.add.sprite(673, 380, "caveuw", "cone20001");

        // boarduw0001
        const boarduw0001 = this.add.sprite(1181, 409, "caveuw", "boarduw0001");

        // floatieuw0001
        const floatieuw0001 = this.add.sprite(1147, 754, "caveuw", "floatieuw0001");

        // wateruw
        this.add.image(813, 852, "caveuw", "wateruw");

        // lists
        const sort = [line, water_water_11, water_water_10, water_water_9, water_water_8, water_water_7, water_water_6, water_water_5, water_water_4, water_water_3, water_water_2, water_water_1, ladder_front, ladder_back, fg_2, ceiling, fg_3, fg_1, floatieuw0001];

        // door (components)
        const doorButton = new Button(door);
        doorButton.spriteName = "door";
        doorButton.activeFrame = false;
        const doorMoveTo = new MoveTo(door);
        doorMoveTo.x = 190;
        doorMoveTo.y = 600;

        // zone (components)
        const zoneZone = new Zone(zone);
        zoneZone.callback = () => this.onZoneClick();

        this.waterfall10001 = waterfall10001;
        this.waterfall20001 = waterfall20001;
        this.cone10001 = cone10001;
        this.cone20001 = cone20001;
        this.boarduw0001 = boarduw0001;
        this.floatieuw0001 = floatieuw0001;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    onZoneClick() {
        this.world.client.penguin.move(1266, 572)
    }

    create() {
        super.create()
        this.waterfall10001.play('underwatercavewaterfall1')
        this.waterfall20001.play('{underwatercavewaterfall2')
        this.cone10001.play('underwatercavecone')
        this.cone20001.play('underwatercavecone1')
        this.boarduw0001.play('underwatercaveboarduw')
        this.floatieuw0001.play('underwatercavefloatieuw')
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
