import Plugin from '../Plugin'


export default class MiniGame extends Plugin {

    constructor(users, rooms) {
        super(users, rooms)
        this.events = {
            'mining_error': this.miningError,
            'reset_mining': this.resetMiningError,
        }
    }

    get client() {
        return this.world.client
    }

    miningError(args) {
        this.client.miningError = args.miningError
    }

    resetMiningError(args) {
        this.client.miningError = 0;
    }
}