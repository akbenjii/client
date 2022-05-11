import Plugin from '../Plugin'


export default class Login extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'w#l': this.login,
            'w#ga': this.gameAuth,
            'p#at': this.authToken
        }
    }

    get loginScene() {
        return this.scene.getScene('Login')
    }

    login(args) {
        let argsArray = args.split('|')
        this.interface.hideLoading()

        if (argsArray[0]) return this.scene.start('Servers', args)
        if (!this.network.lastLoginScene) return this.scene.start('Login')

        let scene = this.scene.getScene(this.network.lastLoginScene)

        scene.events.once('create', () => this.onLoginError(args.message))
        this.scene.start(this.network.lastLoginScene)
    }

    onLoginError(message) {
        this.loginScene.events.emit('hideinput')

        this.interface.prompt.showError(message, 'Okay', () => {
            this.loginScene.events.emit('showinput')

            this.interface.prompt.error.visible = false
        })
    }

    gameAuth(args) {
        if (args) this.network.sendLoadPlayer()
    }

    authToken(args) {
        if (args) this.network.token = args
    }

}
