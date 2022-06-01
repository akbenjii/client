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
        if (user.username === '10000000') user.username = 'Rockhopper'
        if (user.username === '10000001') user.username = 'Gary'
        if (user.username === '10000002') user.username = 'Cadence'
        if (user.username === '10000003') user.username = 'Franky'
        if (user.username === '10000004') user.username = 'Aunt Arctic'
        if (user.username === '10000005') user.username = 'G Billy'
        if (user.username === '10000006') user.username = 'Petey K'
        if (user.username === '10000007') user.username = "Stompin' Bob"
        if (user.username === '10000008') user.username = 'Sensei'
        if (user.username === '10000009') user.username = 'Rookie'
        if (user.username === '10000010') user.username = 'PH'
        if (user.username === '10000011') user.username = 'Herbert'

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
