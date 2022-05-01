import Plugin from '../Plugin'


export default class Error extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'error': this.error
        }

        // Todo: use error ids instead
        this.customHandlers = {
            'Sorry this room is currently full': () => this.fullRoom(),
			'Stealth mode enabled\nPlease relogin.': () => this.stealthEnabled(),
			'Stealth mode disabled\nPlease relogin.': () => this.stealthDisabled()
        }
    }

    error(args) {
        if (args.error in this.customHandlers) {
            return this.customHandlers[args.error]()
        }

        this.interface.prompt.showError(args.error)
    }

    fullRoom() {
        this.interface.prompt.showError('Sorry this room is currently full', 'Okay', () => {
            this.interface.showInterface()

            this.interface.prompt.error.visible = false
            this.interface.main.map.visible = true
        })
    }
	
	stealthEnabled() {
		this.interface.prompt.showError('Stealth mode enabled\nPlease relogin.', 'Reload', () => window.location.reload())
	}
	
	stealthDisabled() {
		this.interface.prompt.showError('Stealth mode disabled\nPlease relogin.', 'Reload', () => window.location.reload())
	}

}
