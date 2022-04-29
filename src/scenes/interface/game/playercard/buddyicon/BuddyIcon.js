
// You can write more code here

/* START OF COMPILED CODE */

export default class BuddyIcon extends BaseContainer {

    constructor(scene, x, y) {
        super(scene, x ?? 0, y ?? 0);

        /* START-USER-CTR-CODE */
        this.buttonNames = ['buddy', 'moderator', 'player']
        this.buttons = this.initButtons()
        /* END-USER-CTR-CODE */
    }

    /* START-USER-CODE */

     initButtons() {
        let buttons = {}

        for (let name of this.buttonNames) {
            let button = this[`${name}_button`]
            let icon = this[`${name}_icon`]
            let iconTexture = icon.frame.name.replace('-disabled', '')

            buttons[name] = { button: button, icon: icon, buttonTexture: 'blue-button', iconTexture: iconTexture }
        }

        return buttons
    }

    updateButtons(relationship) {
        this.resetButtons()

        switch (relationship) {
            case 'online':
                this.enableButton('buddy', 'buddies-remove-icon', 'Remove Buddy')
                this.enableButtons(['profile', 'igloo', 'mail', 'report'])
                break

            case 'offline':
                this.enableButton('buddy', 'buddies-remove-icon', 'Remove Buddy')
                this.enableButtons(['igloo', 'mail', 'report'])
                break

            case 'ignore':
                this.enableButton('ignore', 'ignore-remove-icon', 'Remove Ignore')
                this.enableButton('report')
                break

            default:
                this.enableButtons(['buddy', 'mail', 'ignore', 'report'])
                break
        }

        if (this.world.client.isModerator) {
            //this.enableButton('profile', 'mute-icon', 'Mute Player')
            this.enableButton('ignore', 'ignore-icon', 'Kick Player')
            this.enableButton('report', 'mod-icon', 'Ban Player')
        }
    }

    resetButtons() {
        for (let name of this.buttonNames) {
            this.disableButton(name)
        }
    }

    enableButtons(names) {
        for (let name of names) {
            this.enableButton(name)
        }
    }

    enableButton(name, icon = this.buttons[name].iconTexture, hint = this.buttons[name].hint) {
        let button = this.buttons[name]

        button.button.setInteractive()
        button.button.setTexture('main', button.buttonTexture)
        button.icon.setTexture('main', icon)
        button.button.__ShowHint.text = hint
    }

    disableButton(name) {
        let button = this.buttons[name]

        button.button.disableInteractive()
        button.button.setTexture('main', `${button.buttonTexture}-disabled`)
        button.icon.setTexture('main', `${button.iconTexture}-disabled`)
    }


    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
