import Plugin from '../Plugin'


export default class Puffles extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_puffles': this.getPuffles,
            'get_wellbeing': this.getWellbeing,
            'get_puffle_color': this.getPuffleColor,
            'stop_walking': this.stopWalking,
            'walk_puffle': this.walkPuffle
        }
    }

    getPuffles(args) {
        if (!this.world.room.isIgloo) return

        let pufflesArray = args.puffles

        this.world.room.spawnPuffles(pufflesArray)
    }

    getWellbeing(args) {
        if (!this.world.room.isIgloo) return

        
        if (args.puffleId == this.world.client.penguin.puffle) {
            this.interface.main.puffleCare.showPuffle(args, true)
            this.interface.main.puffleCare.x = this.world.client.penguin.x + 60
            this.interface.main.puffleCare.y = this.world.client.penguin.y
        }
        else {
            this.interface.main.puffleCare.showPuffle(args)
            this.interface.main.puffleCare.x = this.world.room.puffles[args.puffleId].x
            this.interface.main.puffleCare.y = this.world.room.puffles[args.puffleId].y
        }
    }

    getPuffleColor(args) {
        if (!this.world.room) return

        let penguin = this.world.room.penguins[args.penguinId]
        let playercard = this.world.interface.main.playerCard
        penguin.penguinLoader.addPuffle(penguin, args.color)
        if (playercard.visible && (playercard.id === args.penguinId)) {
            playercard.paperDoll.paperDollPuffleLoader.loadPuffle(this.world.crumbs.puffles[args.color].name)
        }

        if (args.penguinId == this.world.client.penguin.id) {
            this.interface.showPuffle(this.world.crumbs.puffles[args.color].name)
        }
    }

    stopWalking(args) {
        if (!this.world.room) return

        let penguin = this.world.room.penguins[args.user]
        let puffle = this.world.room.penguins[args.user].pufflesprite
        if (puffle) {
            puffle.destroy()
            penguin.hasPuffle = false
        }
        let playercard = this.world.interface.main.playerCard
        if (playercard.visible && (playercard.id === args.user)) {
            playercard.paperDoll.puffle.destroy()
        }
        if (penguin.puffle !== 0) {
            penguin.puffle = 0
        }

        if (this.world.room.isIgloo) {
            this.world.room.spawnPuffles(this.world.room.puffleArray)
        }

        if (args.user == this.world.client.penguin.id) {
            this.interface.showPuffle(0)
        }
    }

    walkPuffle(args) {
        if (!this.world.room) return

        let penguin = this.world.room.penguins[args.user]
        let puffle = this.world.room.penguins[args.user].pufflesprite
        if (puffle) {
            puffle.destroy()
            penguin.hasPuffle = false
        }
        let playercard = this.world.interface.main.playerCard
        if (playercard.visible && (playercard.id === args.user)) {
            playercard.paperDoll.puffle.destroy()
        }

        if (this.world.room.isIgloo) {

            puffle = this.world.room.puffles[args.puffle]

            if (puffle) {
                puffle.destroy()
            }

        }

        penguin.puffle = args.puffle
        this.network.send('get_puffle_color', {puffle: args.puffle, penguinId: args.user})
        
    }
}
