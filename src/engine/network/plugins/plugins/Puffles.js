import Plugin from '../Plugin'


export default class Puffles extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_puffles': this.getPuffles,
            'get_wellbeing': this.getWellbeing,
            'get_puffle_color': this.getPuffleColor,
            'stop_walking': this.stopWalking,
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

    getPuffleColor(args) {
        if (!this.world.room) return

        let penguin = this.world.room.penguins[args.penguinId]
        let playercard = this.world.interface.main.playerCard
        penguin.penguinLoader.addPuffle(penguin, args.color)
        if (playercard.visible && (playercard.id === args.penguinId)) {
            playercard.paperDoll.paperDollPuffleLoader.loadPuffle(this.world.crumbs.puffles[args.color].name)
        }
    }

    stopWalking(args) {
        if (!this.world.room) return

        let penguin = this.world.room.penguins[args.user]
        if (penguin.pufflesprite) {
            penguin.pufflesprite.visible = false
            penguin.pufflesprite.destroy()
        }
        let playercard = this.world.interface.main.playerCard
        if (playercard.visible && (playercard.id === args.user)) {
            penguin.pufflesprite.visible = false
            playercard.paperDoll.puffle.destroy()
        }
    }
}
