import BaseContainer from '@scenes/base/BaseContainer'

import Button from '@scenes/components/Button'
import DraggableContainer from '@scenes/components/DraggableContainer'
import Interactive from '@scenes/components/Interactive'
import SimpleButton from '@scenes/components/SimpleButton'

import FindFourPlayer from './FindFourPlayer'


/* START OF COMPILED CODE */

export default class FindFour extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Container} */
        this.counterContainer;
        /** @type {Phaser.GameObjects.Image} */
        this.board;
        /** @type {Phaser.GameObjects.Image} */
        this.hover;
        /** @type {Phaser.GameObjects.Container} */
        this.hitbox;
        /** @type {Array<any>} */
        this.placers;
        /** @type {FindFourPlayer[]} */
        this.items;


        // window
        const window = scene.add.image(0, 0, "four", "window");
        this.add(window);

        // shadow
        const shadow = scene.add.image(0, -44, "four", "shadow");
        this.add(shadow);

        // counterContainer
        const counterContainer = scene.add.container(0, 0);
        this.add(counterContainer);

        // board
        const board = scene.add.image(0, -44, "four", "board");
        this.add(board);

        // player2
        const player2 = new FindFourPlayer(scene, -126, 232);
        this.add(player2);

        // player1
        const player1 = new FindFourPlayer(scene, -126, 172);
        this.add(player1);

        // x_button
        const x_button = scene.add.image(181, -243, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(181, -245, "main", "blue-x");
        this.add(blue_x);

        // hover
        const hover = scene.add.image(-145, -194, "four", "counter_1");
        hover.setOrigin(0.5, 0.7);
        hover.visible = false;
        this.add(hover);

        // hitbox
        const hitbox = scene.add.container(-152, -44);
        hitbox.visible = false;
        this.add(hitbox);

        // column1
        const column1 = scene.add.rectangle(0, 0, 60, 304);
        column1.fillColor = 14876672;
        column1.fillAlpha = 0.5;
        hitbox.add(column1);

        // column2
        const column2 = scene.add.rectangle(55, 0, 49, 304);
        column2.fillColor = 12247808;
        column2.fillAlpha = 0.5;
        hitbox.add(column2);

        // column3
        const column3 = scene.add.rectangle(103, 0, 49, 304);
        column3.fillColor = 58115;
        column3.fillAlpha = 0.5;
        hitbox.add(column3);

        // column4
        const column4 = scene.add.rectangle(152, 0, 49, 304);
        column4.fillColor = 58299;
        column4.fillAlpha = 0.5;
        hitbox.add(column4);

        // column5
        const column5 = scene.add.rectangle(201, 0, 49, 304);
        column5.fillColor = 27619;
        column5.fillAlpha = 0.5;
        hitbox.add(column5);

        // column6
        const column6 = scene.add.rectangle(250, 0, 49, 304);
        column6.fillColor = 5767395;
        column6.fillAlpha = 0.5;
        hitbox.add(column6);

        // column7
        const column7 = scene.add.rectangle(304, 0, 60, 304);
        column7.fillColor = 14907392;
        column7.fillAlpha = 0.5;
        hitbox.add(column7);

        // lists
        const placers = [];
        const items = [player1, player2];

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = window;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.onClose();

        // column1 (components)
        const column1SimpleButton = new SimpleButton(column1);
        column1SimpleButton.hoverCallback = () => this.onHover(-145);
        column1SimpleButton.callback = () => this.onCounterPlace(0);

        // column2 (components)
        const column2SimpleButton = new SimpleButton(column2);
        column2SimpleButton.hoverCallback = () => this.onHover(-97);
        column2SimpleButton.callback = () => this.onCounterPlace(1);

        // column3 (components)
        const column3SimpleButton = new SimpleButton(column3);
        column3SimpleButton.hoverCallback = () => this.onHover(-49);
        column3SimpleButton.callback = () => this.onCounterPlace(2);

        // column4 (components)
        const column4SimpleButton = new SimpleButton(column4);
        column4SimpleButton.hoverCallback = () => this.onHover(0);
        column4SimpleButton.callback = () => this.onCounterPlace(3);

        // column5 (components)
        const column5SimpleButton = new SimpleButton(column5);
        column5SimpleButton.hoverCallback = () => this.onHover(49);
        column5SimpleButton.callback = () => this.onCounterPlace(4);

        // column6 (components)
        const column6SimpleButton = new SimpleButton(column6);
        column6SimpleButton.hoverCallback = () => this.onHover(98);
        column6SimpleButton.callback = () => this.onCounterPlace(5);

        // column7 (components)
        const column7SimpleButton = new SimpleButton(column7);
        column7SimpleButton.hoverCallback = () => this.onHover(145);
        column7SimpleButton.callback = () => this.onCounterPlace(6);

        this.counterContainer = counterContainer;
        this.board = board;
        this.hover = hover;
        this.hitbox = hitbox;
        this.placers = placers;
        this.items = items;

        /* START-USER-CTR-CODE */

        this.activeWaddleId
        this.activeSeat

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onButtonClick(column) {
        this.addCounter(column, 5)
    }

    onButtonOver(button) {
        this.hover.visible = true

        this.hover.x = button.x
        this.hover.y = button.y
    }

    onButtonOut() {
        this.hover.visible = false
    }

    get activeWaddle() {
        return this.world.room.waddles[this.activeWaddleId]
    }

    getSeat(waddle, seat) {
        return this.world.room[`seats${waddle}`][seat]
    }

    onClose() {
        this.network.send('leave_waddle')

        this.leaveSeat()

        this.activeWaddleId = null
        this.visible = false
    }

    showWaddle(waddle, seat) {
        this.activeWaddleId = waddle

        this.seat = seat

        this.enterSeat(waddle, seat)

        this.items.map(item => item.hideItem())

        for (let [index, username] of this.activeWaddle.entries()) {
            this.items[index].setItem(username, this.seat)
        }

        this.visible = true
    }

    updateWaddle(waddle, seat, username) {
        let sprite = this.getSeat(waddle, seat)
        sprite.visible = username != null

        this.world.room.waddles[waddle][seat] = username

        if (waddle == this.activeWaddleId) {
            this.items[seat].setItem(username)
        }
    }

    init(users, turn) {
        for (var x in users) {
            let username = this.world.room.penguins[users[x]].username
            this.items[x].setItem(username, x)
        }
        this.map = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
        this.xcoords = [-145, -97, -49, 0, 49, 97, 145]
        this.ycoords = [121, 73, 24, -24, -73, -121]
        let counters = this.scene.add.container(0, -44);
        this.counterContainer.add(counters);
        this.counters = counters



        if (this.world.client.id == turn) {
            this.hover.visible = true
            this.hitbox.visible = true
        }
        else {
            this.hover.setTexture('four', 'counter_2')
        }
    }

    enterSeat(waddle, seat) {
        this.activeSeat = this.getSeat(waddle, seat)

        this.world.client.penguin.move(this.activeSeat.x, this.activeSeat.y, this.activeSeat.sitFrame)
    }

    leaveSeat() {
        let x = this.activeSeat.x + this.activeSeat.offsetX
        let y = this.activeSeat.y + this.activeSeat.offsetY

        this.activeSeat = null

        this.world.client.penguin.move(x, y)
    }

    onHover(x) {
        this.hover.x = x
    }

    onCounterPlace(column) {
        for (let row = 0; row < 6; row++) {
            if (this.map[column][row] == 0) { 
                this.placeCounter(row, column, (this.seat + 1))
                this.hitbox.visible = false
                this.hover.visible = false
                this.network.send('place_counter', {column: column, row: row} )
                return
            }
        }
    }

    placeCounter(row, column, player) {
        if (this.map[column][row] !== 0) return
        this.map[column][row] = this.scene.add.image(this.xcoords[column], this.ycoords[row], "four", "counter_" + player.toString());
        this.counters.add(this.map[column][row])
    }

    changeTurn(turn) {
        if (this.world.client.id == turn) {
            this.hover.visible = true
            this.hitbox.visible = true
        }
    }

    reset() {
        this.counters.destroy()
        this.visible = false
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
