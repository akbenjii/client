import Plugin from '../Plugin'


export default class Postcard extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'update_postcards': this.updatePostcards,
            'send_postcard': this.sendPostcard,
        }
    }

    updatePostcards(args) {
        this.world.client.postcards = args.postcards
    }
    
    sendPostcard(args) {
        this.world.client.coins = args.coins
    }

}