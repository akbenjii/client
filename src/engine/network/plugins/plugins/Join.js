import Plugin from '../Plugin'


export default class Join extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'w#lp': this.loadPlayer,
            'join_room': this.joinRoom,
            'join_game': this.joinGame,
            'join_igloo': this.joinIgloo,
            'add_player': this.addPlayer,
            'remove_player': this.removePlayer
        }
    }

    loadPlayer(args) {
        if (this.network.saveUsername) {
            this.savePlayer(args)
        } else {
            this.unsavePlayer(args)
        }

        this.scene.start('WorldController')
        this.world.setClient(args)

        this.network.sendJoinServer()
    }

    joinRoom(args) {
        this.world.joinRoom(args.room, args.users)
    }

    joinGame(args) {
        this.world.joinRoom(args.room)
    }

    joinIgloo(args) {
        this.world.joinIgloo(args)
    }

    addPlayer(args) {
        this.world.addPenguin(args.user)
    }

    removePlayer(args) {
        this.world.removePenguin(args.user)
    }

    // Saves a player to local storage
    savePlayer(args) {
        let argsArray = args.split('|')
        let savedPenguins = this.network.savedPenguins

        if (Object.keys(savedPenguins).length > 6 && !(argsArray[0].username in savedPenguins)) return

        let { photo, flag, x, y, frame, coins, id, ...penguin } = args.user

        // Set auth token
        if (this.network.token) {
            penguin.token = this.network.token
        }

        savedPenguins[argsArray[0].username.toLowerCase()] = penguin
        localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))
    }

    // Deletes a player from local storage
    unsavePlayer(args) {
        let argsArray = args.split('|')
        let savedPenguins = this.network.savedPenguins

        if (argsArray[0].username.toLowerCase() in savedPenguins) {
            delete savedPenguins[argsArray[0].username.toLowerCase()]
            localStorage.setItem('saved_penguins', JSON.stringify(savedPenguins))
        }
    }

}
