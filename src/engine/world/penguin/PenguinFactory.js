import ClientPenguin from './ClientPenguin'
import Penguin from './Penguin'
import PenguinLoader from './loader/PenguinLoader'


export default class PenguinFactory {

    constructor(world) {
        this.world = world

        this.penguinLoader = new PenguinLoader(world)
    }

    createPenguin(user, room) {
        let client = this.world.client
        if (user.stealthMode) user.username = user.username + ' (Hidden)'

        if (user.id == client.id) {
            client.penguin = new ClientPenguin(user, room, this.penguinLoader)
            return client.penguin
        } else if (user.stealthMode && client.rank < 4) {
            return
        } else {
            return new Penguin(user, room, this.penguinLoader)
        }
    }

    createPenguins(users, room) {
        let penguins = {}

        for (let user of users) {
            if (!(user.id in penguins)) {
                penguins[user.id] = this.createPenguin(user, room)
            }
        }

        return penguins
    }

}
