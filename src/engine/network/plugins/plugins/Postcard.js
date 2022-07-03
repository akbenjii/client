import Plugin from '../Plugin'


export default class Postcard extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'update_postcards': this.updatePostcards
        }
    }

    updatePostcards(args) {
        this.world.client.postcards = args.postcards
    }

}