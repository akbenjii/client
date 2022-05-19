import BaseContainer from '@scenes/base/BaseContainer'

import { Button, Interactive, NineSlice, SimpleButton } from '@components/components'


/* START OF COMPILED CODE */

export default class Settings extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 760, y ?? 480);

        /** @type {Phaser.GameObjects.Image} */
        this.checkbox;
        /** @type {Phaser.GameObjects.Container} */
        this.stealth;


        // block
        const block = scene.add.rectangle(0, 0, 1520, 960);
        block.isFilled = true;
        block.fillColor = 0;
        block.fillAlpha = 0.2;
        this.add(block);

        // rectangle
        const rectangle = scene.add.rectangle(0, -22, 708, 600);
        rectangle.isFilled = true;
        rectangle.fillColor = 164045;
        this.add(rectangle);

        // buddies
        const buddies = scene.add.text(69, 173, "", {});
        buddies.setOrigin(0.5, 0.5);
        buddies.text = "88/100 Buddies";
        buddies.setStyle({ "color": "#000000ff", "fixedWidth":300,"fontFamily": "Burbank Small", "fontSize": "32px" });
        this.add(buddies);

        // icon
        const icon = scene.add.image(-132, 171, "main", "buddy/icon-online");
        this.add(icon);

        // button
        const button = scene.add.image(0, 67, "main", "help-button");
        this.add(button);

        // account
        const account = scene.add.text(0, 66, "", {});
        account.setOrigin(0.5, 0.5);
        account.text = "Manage Account";
        account.setStyle({ "align": "center", "color": "#ffffffff", "fixedWidth":562,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold" });
        this.add(account);

        // music
        const music = scene.add.text(131, -37, "", {});
        music.setOrigin(0.5, 0.5);
        music.text = "Mute Music";
        music.setStyle({ "color": "#000000ff", "fixedWidth":348,"fontFamily": "Burbank Small", "fontSize": "32px" });
        this.add(music);

        // age
        const age = scene.add.text(0, -108, "", {});
        age.setOrigin(0.5, 0.5);
        age.text = "Your penguin is 0 days old";
        age.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "32px" });
        this.add(age);

        // server
        const server = scene.add.text(0, -156, "", {});
        server.setOrigin(0.5, 0.5);
        server.text = "You're on Server Name";
        server.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "30px" });
        this.add(server);

        // settings
        const settings = scene.add.text(0, -238, "", {});
        settings.setOrigin(0.5, 0.5);
        settings.text = "SETTINGS";
        settings.setStyle({ "align": "center", "fixedWidth":600,"fontFamily": "Burbank Small", "fontSize": "40px", "fontStyle": "bold italic", "stroke": "#003366", "strokeThickness":10});
        this.add(settings);

        // checkbox
        const checkbox = scene.add.image(-76, -39, "login", "checkbox");
        checkbox.setOrigin(0.41509, 0.5849);
        this.add(checkbox);

        // x_button
        const x_button = scene.add.image(300, -268, "main", "blue-button");
        this.add(x_button);

        // blue_x
        const blue_x = scene.add.image(300, -270, "main", "blue-x");
        this.add(blue_x);

        // stealth
        const stealth = scene.add.container(-312, -291);
        stealth.visible = false;
        this.add(stealth);

        // stealth_button
        const stealth_button = scene.add.image(13, 23, "main", "blue-button");
        stealth.add(stealth_button);

        // stealth_icon
        const stealth_icon = scene.add.text(0, 0, "", {});
        stealth_icon.text = "S";
        stealth_icon.setStyle({ "fontFamily": "Burbank Small", "fontSize": "30px", "stroke": "#003366", "strokeThickness":7,"shadow.fill":true});
        stealth.add(stealth_icon);

        // stealth_text
        const stealth_text = scene.add.text(46, -8, "", {});
        stealth_text.text = "Toggle\nStealth Mode";
        stealth_text.setStyle({ "align": "center", "fontFamily": "Burbank Small", "fontSize": "25px", "stroke": "#ffffffff", "shadow.fill":true});
        stealth.add(stealth_text);

        // block (components)
        new Interactive(block);

        // rectangle (components)
        const rectangleNineSlice = new NineSlice(rectangle);
        rectangleNineSlice.corner = 50;

        // button (components)
        const buttonButton = new Button(button);
        buttonButton.spriteName = "help-button";
        buttonButton.callback = () => this.onManagePress();

        // checkbox (components)
        const checkboxSimpleButton = new SimpleButton(checkbox);
        checkboxSimpleButton.callback = () => this.onMuteClick();

        // x_button (components)
        const x_buttonButton = new Button(x_button);
        x_buttonButton.spriteName = "blue-button";
        x_buttonButton.callback = () => { this.visible = false };

        // stealth_button (components)
        const stealth_buttonButton = new Button(stealth_button);
        stealth_buttonButton.spriteName = "blue-button";
        stealth_buttonButton.callback = () => this.toggleStealth();

        this.checkbox = checkbox;
        this.stealth = stealth;

        /* START-USER-CTR-CODE */

        this.checkbox.checked = this.world.muteMusic

        if (this.checkbox.checked) {
            this.checkbox.setTexture('login', 'checkbox-active')
        }

        if (this.world.client.rank > 3) this.stealth.visible = true

        let oneDay = 1000 * 60 * 60 * 24
        let timeDiff = Date.now() - Date.parse(this.world.client.joinTime)
        let daysDiff = Math.round(timeDiff / oneDay)

        server.text = `You're on ${this.network.worldName}`
        age.text = `Your penguin is ${daysDiff} days old`
        buddies.text = `${this.world.client.buddies.length}/100 Buddies`

        /* END-USER-CTR-CODE */
    }


    /* START-USER-CODE */

    onMuteClick() {
        this.toggle(this.checkbox)

        this.world.muteMusic = (localStorage.muteMusic == 'true') ? true : false

        if (!this.world.room.music) {
            return
        }

        if (this.world.muteMusic) {
            this.world.room.sound.stopByKey(this.world.room.music)
        } else {
            this.world.room.addMusic()
        }
    }

    toggle(checkbox) {
        let texture = (localStorage.muteMusic == 'true') ? 'checkbox' : 'checkbox-active'

        localStorage.muteMusic = (localStorage.muteMusic == 'true') ? 'false' : 'true'
        checkbox.setTexture('login', texture)
    }

    onManagePress() {
        this.interface.main.manage.show()
        this.visible = false
    }

    toggleStealth() {
        this.network.send('stealth_mode', { stealthMode: this.world.room.penguins[this.world.client.id].stealthMode })
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
