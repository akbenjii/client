import RoomScene from '@scenes/rooms/RoomScene'

import { Animation, Button, MoveTo, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Fofparty extends RoomScene {

    constructor() {
        super("Fofparty");

        /** @type {Phaser.GameObjects.Sprite} */
        this.bigcloud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.cloud;
        /** @type {Phaser.GameObjects.Sprite} */
        this.balloon;
        /** @type {Phaser.GameObjects.Sprite} */
        this.fire;
        /** @type {Array<Phaser.GameObjects.Image|Phaser.GameObjects.Sprite>} */
        this.sort;


        /* START-USER-CTR-CODE */
        this.roomTriggers = {
            'party': () => this.triggerRoom(809, 700, 600),
            'forest': () => this.triggerRoom(809, 700, 600),
            'jetpack': () => this.interface.prompt.showItem(3028)
        }
        this.music = 'nimbus'
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _preload() {

        this.load.pack("fofparty-pack", "assets/media/rooms/old/fofparty/fofparty-pack.json");
    }

    /** @returns {void} */
    _create() {

        // sky
        this.add.image(762, 294, "fof-party", "sky");

        // bigcloud
        const bigcloud = this.add.sprite(623, 94, "fof-party", "otherpartycloud0001");

        // cloud
        const cloud = this.add.sprite(531, 172, "fof-party", "partycloud0001");

        // bgtrees
        this.add.image(221, 239, "fof-party", "bgtrees");

        // morebgtrees
        this.add.image(768, 542, "fof-party", "morebgtrees");

        // finishbalholder
        this.add.image(272, 303, "fof-party", "finishbalholder");

        // finishballoon
        this.add.image(261, 174, "fof-party", "finishballoon");

        // leftsigns
        this.add.image(244, 345, "fof-party", "leftsigns");

        // leftsign
        const leftsign = this.add.image(128.27748252622806, 632.6648951573684, "fof-party", "leftsign");
        leftsign.setOrigin(0.5753219786885156, 0.7790336937779105);

        // gas
        const gas = this.add.image(45, 695.921454568193, "fof-party", "gas");
        gas.setOrigin(0.5, 0.8469723322629672);

        // exit
        this.add.image(1388, 261, "fof-party", "exit");

        // righttree
        this.add.image(1530, 416, "fof-party", "righttree");

        // jetpacks
        const jetpacks = this.add.image(400, 814, "fof-party", "jetpacks");
        jetpacks.setOrigin(0.5334146646441124, 0.6832417093386804);

        // barrels
        const barrels = this.add.image(1474, 692, "fof-party", "barrels");
        barrels.setOrigin(0.5296889877499954, 0.8054028488978009);

        // gas_1
        const gas_1 = this.add.image(1337, 691, "fof-party", "gas");
        gas_1.setOrigin(0.5, 0.8469723322629672);
        gas_1.flipX = true;

        // table
        const table = this.add.image(1283, 792, "fof-party", "table");

        // soda
        this.add.image(1459, 988, "fof-party", "soda");

        // holdas
        this.add.image(792, 667, "fof-party", "holdas");

        // leftfire
        const leftfire = this.add.image(534.8733285649168, 508.6900071526248, "fof-party", "leftfire");
        leftfire.setOrigin(0.36805066831847033, 0.7310239151966716);

        // right
        const right = this.add.image(989.9746657129833, 519.2533428701664, "fof-party", "right");
        right.setOrigin(0.47732328068588775, 0.8018506450507238);

        // balloon
        const balloon = this.add.sprite(782.651110822588, 715.3111601600417, "fof-party", "balloon0001");
        balloon.setOrigin(0.498340007648472, 1.1152714332204032);

        // backfireholder
        const backfireholder = this.add.image(786, 547.3066909026088, "fof-party", "backfireholder");
        backfireholder.setOrigin(0.5, 5.4326672725652205);

        // fire
        const fire = this.add.sprite(783.4873046875, 554.1722168486423, "fof-party", "fire0001");
        fire.setOrigin(0.47050544350648144, 2.207716256074019);

        // frontfireholder
        const frontfireholder = this.add.image(788.2563335717541, 580.2026742961331, "fof-party", "frontfireholder");
        frontfireholder.setOrigin(0.5088483669480554, 0.7464255095431163);

        // hotsauce
        this.add.image(216, 527, "fof-party", "hotsauce");

        // lists
        const sort = [leftsign, gas, table, barrels, leftfire, frontfireholder, right, fire, backfireholder, balloon];

        this.bigcloud = bigcloud;
        this.cloud = cloud;
        this.balloon = balloon;
        this.fire = fire;
        this.sort = sort;

        this.events.emit("scene-awake");
    }


    /* START-USER-CODE */

    // Write your code here

    create() {
        super.create()
        this.balloon.play('partyballoon')
        this.fire.play('partyfire')
        this.cloud.play('cloudparty')
        this.cloudTween()
        this.onCloudTweenComplete()
        this.bigcloud.play('bigcloudparty')
        this.bigCloudTween()
        this.onBigCloudTweenComplete()
    }

    cloudTween() {
        let tween = this.tweens.add({
            targets: this.cloud,
            y: 172,
            delay: 0,
            duration: 5400,
            onComplete: () => this.onCloudTweenComplete()
        });
    }

    onCloudTweenComplete() {
        let tween = this.tweens.add({
            targets: this.cloud,
            y: 70,
            delay: 0,
            duration: 5400,
            onComplete: () => this.cloudTween()
        });
    }

    bigCloudTween() {
        let tween = this.tweens.add({
            targets: this.bigcloud,
            y: 94,
            delay: 0,
            duration: 4800,
            onComplete: () => this.onBigCloudTweenComplete()
        });
    }

    onBigCloudTweenComplete() {
        let tween = this.tweens.add({
            targets: this.bigcloud,
            y: 60,
            delay: 0,
            duration: 4800,
            onComplete: () => this.bigCloudTween()
        });
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
