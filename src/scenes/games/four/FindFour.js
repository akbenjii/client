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

        /** @type {Phaser.GameObjects.Image} */
        this.hover;
        /** @type {Phaser.GameObjects.Image[]} */
        this.placers;
        /** @type {FindFourPlayer[]} */
        this.items;


        // window
        const window = scene.add.image(0, 0, "four", "window");
        this.add(window);

        // shadow
        const shadow = scene.add.image(0, -44, "four", "shadow");
        this.add(shadow);

        // placer6
        const placer6 = scene.add.image(-146, 77, "four", "counter_1");
        placer6.visible = false;
        this.add(placer6);

        // placer5
        const placer5 = scene.add.image(-146, 29, "four", "counter_1");
        placer5.visible = false;
        this.add(placer5);

        // placer4
        const placer4 = scene.add.image(-146, -20, "four", "counter_1");
        placer4.visible = false;
        this.add(placer4);

        // placer3
        const placer3 = scene.add.image(-146, -68, "four", "counter_1");
        placer3.visible = false;
        this.add(placer3);

        // placer2
        const placer2 = scene.add.image(-146, -117, "four", "counter_1");
        placer2.visible = false;
        this.add(placer2);

        // placer1
        const placer1 = scene.add.image(-146, -165, "four", "counter_1");
        placer1.visible = false;
        this.add(placer1);

        // placer0
        const placer0 = scene.add.image(-146, -205, "four", "counter_1");
        placer0.visible = false;
        this.add(placer0);

        // board
        const board = scene.add.image(0, -44, "four", "board");
        this.add(board);

        // player2
        const player2 = new FindFourPlayer(scene, -126, 232);
        this.add(player2);

        // player1
        const player1 = new FindFourPlayer(scene, -126, 172);
        this.add(player1);

        // hover
        const hover = scene.add.image(-145, -194, "four", "button/counter_1");
        hover.setOrigin(0.5, 0.7);
        hover.visible = false;
        this.add(hover);

        // x_button
        const x_button = scene.add.image(181, -243, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(181, -245, "main", "blue-x");
        this.add(blue_x);

        // lists
        const placers = [placer0, placer1, placer2, placer3, placer4, placer5, placer6];
        const items = [player1, player2];

        // this (components)
        const thisDraggableContainer = new DraggableContainer(this);
        thisDraggableContainer.handle = window;

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => this.onClose();

        this.hover = hover;
        this.placers = placers;
        this.items = items;

        /* START-USER-CTR-CODE */

        this.activeWaddleId
        this.activeSeat

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    handleStartGame() {

        this.scene = scene

        this.map = [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0]]
        this.buttons = []

        this.shadowIndex = this.getIndex(shadow)

        // Create buttons
        let x = -146

        for (let column = 0; column < 7; column++) {
            let button = this.scene.add.image(x, -194, 'four', 'button/button')

            button.setOrigin(0.5, 0.078125)
            this.add(button)
            this.buttons.push(button)

            let component = new SimpleButton(button)

            component.callback = () => this.onButtonClick(column)
            component.hoverCallback = () => this.onButtonOver(button)
            component.hoverOutCallback = () => this.onButtonOut()

            x += 48.6
        }
    }

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

    addCounter(x, y, drop = true) {
        y++

        // Get x from column button position
        let counterX = this.buttons[x].x
        // Get y from placer position
        let counterY = this.placers[0].y

        let counter = this.scene.add.image(counterX, counterY, 'four', 'counter_1')

        if (!drop) {
            counter.y = this.placers[y].y
        } else {
            this.playDrop(counter, y)
        }

        this.addAt(counter, this.shadowIndex + 1)
    }

    playDrop(counter, y) {
        let i = 0

        let timer = this.scene.time.addEvent({
            delay: 38,
            callback: () => {
                counter.y = this.placers[i].y

                if (i == y) {
                    this.scene.sound.play('drop', { volume: 0.5 })
                    this.scene.time.removeEvent(timer)
                }

                i++
            },
            repeat: y
        })
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
		console.log(users, turn)
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

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
