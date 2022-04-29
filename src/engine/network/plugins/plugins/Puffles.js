import Plugin from '../Plugin'


export default class Puffles extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_puffles': this.getPuffles,
            'get_wellbeing': this.getWellbeing
        }
    }

    getPuffles(args) {
        if (!this.world.room.isIgloo) return

        let pufflesArray = args.puffles

        this.world.room.spawnPuffles(pufflesArray)
    }

    getWellbeing(args) {
        if (!this.world.room.isIgloo) return

        args.name = this.world.room.puffles[args.puffleId].name

        this.interface.main.puffleCare._showCard(args)
    }
}
