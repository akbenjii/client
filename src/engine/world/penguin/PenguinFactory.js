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

        for (var x in this.world.mascots) {
            if (this.world.mascots[x].id == user.id) user.username = this.world.mascots[x].name
        }

        if (user.stealthMode) user.username = user.username + ' (Hidden)'

        if (user.puffle && user.puffle !== 0){
            this.world.network.send('get_puffle_color', {puffle: user.puffle, penguinId: user.id})
        }

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

        if (!room.roomPhysics) return

        for (let user of users) {
            if (!(user.id in penguins)) {
                penguins[user.id] = this.createPenguin(user, room)
            }
        }

        return penguins
    }

}
