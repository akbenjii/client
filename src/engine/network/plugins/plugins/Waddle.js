import Plugin from '../Plugin'


export default class Waddle extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_waddles': this.getWaddles,
            'join_waddle': this.joinWaddle,
            'update_waddle': this.updateWaddle
        }
    }

    getWaddles(args) {
        this.world.room.setWaddles(args.waddles)
    }

    joinWaddle(args) {
        if (args.game == 'four'){ this.interface.main.findFour.showWaddle(args.waddle, args.seat) }
        else { this.interface.main.waddle.showWaddle(args.waddle, args.seat) }
    }

    updateWaddle(args) {
        if (this.world.room.isReady) {
            if (args.game == 'four'){ this.interface.main.findFour.updateWaddle(args.waddle, args.seat, args.username)}
            else { this.interface.main.waddle.updateWaddle(args.waddle, args.seat, args.username) }
        }
    }

}
