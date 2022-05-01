/* START OF COMPILED CODE */

export default class FindFourPlayer extends Phaser.GameObjects.Container {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /** @type {Phaser.GameObjects.Image} */
        this.spinner;
        /** @type {Phaser.GameObjects.Text} */
        this.waiting;


        // spinner
        const spinner = scene.add.image(0, 0, "four", "spinner");
        this.add(spinner);

        // waiting
        const waiting = scene.add.text(55, 0, "", {});
        waiting.setOrigin(0, 0.5);
        waiting.text = "Waiting for Player";
        waiting.setStyle({ "fixedWidth":260,"fontFamily": "Burbank Small", "fontSize": "24px" });
        this.add(waiting);

        this.spinner = spinner;
        this.waiting = waiting;

        /* START-USER-CTR-CODE */

        // Spinner
        this.spinnerTween = scene.tweens.add({
            targets: spinner,
            angle: { from: 0, to: 180 },
            duration: 900,
            repeat: -1,
            ease: 'Cubic'
        })

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    setItem(username, seat) {
        this.visible = true
		this.seat = (seat) ? seat + 1 : 1
		
		

        this.waiting.text = (username) ? username : 'Waiting for Player'

        if (username) {
            this.stopSpinner()
            console.log(this.seat)
        	this.spinner.setTexture('four', 'counter_' + this.seat.toString())
			

        } else {
            this.startSpinner()
        }
    }

    hideItem() {
        this.visible = false
        this.stopSpinner()
    }

    startSpinner() {
        this.spinnerTween.seek(0)
        this.spinnerTween.resume()
    }

    stopSpinner() {
        this.spinnerTween.pause()
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
