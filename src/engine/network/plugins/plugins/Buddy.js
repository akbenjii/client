import Plugin from '../Plugin'


export default class Buddy extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'buddy_request': this.buddyRequest,
            'buddy_accept': this.buddyAccept,
            'buddy_remove': this.buddyRemove,
            'buddy_find': this.buddyFind,
            'buddy_online': this.buddyOnline,
            'buddy_offline': this.buddyOffline
        }
    }

    buddyRequest(args) {
        this.interface.main.addRequest(args)
    }

    buddyAccept(args) {
        if (args.requester) this.interface.main.addRequest(args)

        let { requester, ...buddy } = args

        this.world.client.buddies.push(buddy)
        this.interface.updateBuddies()
        this.interface.main.showOnlinePopup(this.filterUsername(buddy))
    }

    buddyRemove(args) {
        // Filter buddy out of list
        this.world.client.buddies = this.world.client.buddies.filter(obj => obj.id != args.id)
        this.interface.updateBuddies()
    }

    buddyFind(args) {
        let username = this.interface.main.playerCard.username.text
        let id = this.interface.main.playerCard.id

        let name = this.crumbs.scenes.rooms[args.find]

        if (name === undefined || name === null) {
            this.interface.prompt.showWindow(`${username} is in an igloo.`)
        } else if (name.key ==  'hydroHopper') {
            this.interface.prompt.showWindow(`${username} is playing Ballistic Biscuit.`, 'single')
        } else if (name.key == 'Book') {
            this.interface.prompt.showWindow(`${username} is at the Book Room.`, 'single')
        } else if (name.key == 'Coffee') {
            this.interface.prompt.showWindow(`${username} is at the Coffee Shop.`, 'single')
        } else if (name.key == 'Dance') {
            this.interface.prompt.showWindow(`${username} is at the Dance Club.`, 'single')
        } else if (name.key == 'Lounge') {
            this.interface.prompt.showWindow(`${username} is at the Dance Lounge.`, 'single')
        } else if (name.key == 'Shop') {
            this.interface.prompt.showWindow(`${username} is at the Gift Shop.`, 'single')
        } else if (name.key == 'Forts') {
            this.interface.prompt.showWindow(`${username} is at the Snow Forts.`, 'single')
        } else if (name.key == 'Village') {
            this.interface.prompt.showWindow(`${username} is at the Ski Village.`, 'single')
        } else if (name.key == 'Book') {
            this.interface.prompt.showWindow(`${username} is at the Book Room.`, 'single')
        } else if (name.key == 'Sport') {
            this.interface.prompt.showWindow(`${username} is at the Sport Shop.`, 'single')
        } else if (name.key == 'Mtn') {
            this.interface.prompt.showWindow(`${username} is at the Mountain.`, 'single')
        } else if (name.key == 'Pet') {
            this.interface.prompt.showWindow(`${username} is at the Pet Shop.`, 'single')
        } else if (name.key == 'Pizza') {
            this.interface.prompt.showWindow(`${username} is at the Pizza Parlor.`, 'single')
        } else if (name.key == 'Book') {
            this.interface.prompt.showWindow(`${username} is at the Book Room.`, 'single')
        } else if (name.key == 'Rink') {
            this.interface.prompt.showWindow(`${username} is at the Ice Rink.`, 'single')
        } else if (name.key == 'Boiler') {
            this.interface.prompt.showWindow(`${username} is at the Boiler Room.`, 'single')
        } else if (name.key == 'Berg') {
            this.interface.prompt.showWindow(`${username} is at the Iceberg.`, 'single')
        } else if (name.key == 'Shack') {
            this.interface.prompt.showWindow(`${username} is at the Mine Shack.`, 'single')
        } else if (name.key == 'astroBarrier') {
            this.interface.prompt.showWindow(`${username} is playing Astro Barrier.`, 'single')
        } else if (name.key == 'iceFishing') {
            this.interface.prompt.showWindow(`${username} is playing Ice Fishing.`, 'single')
        } else if (name.key == 'cartSurfer') {
            this.interface.prompt.showWindow(`${username} is playing Cart Surfer.`, 'single')
        } else if (name.key == 'beanCounters') {
            this.interface.prompt.showWindow(`${username} is playing Bean Counters.`, 'single')
        } else if (name.key == 'pizzatron') {
            this.interface.prompt.showWindow(`${username} is playing Pizzatron.`, 'single')
        } else if (name.key == 'puffleRoundup') {
            this.interface.prompt.showWindow(`${username} is playing Puffle Roundup.`, 'single')
        } else if (name.kay =='yumYuck') {
            this.interface.prompt.showWindow(`${username} is playing Yum Yuck.`, 'single')
        } else if (name.kay =='HQ') {
            this.interface.prompt.showWindow(`${username} is at the HQ.`, 'single')
        } else {
            this.interface.prompt.showWindow(`${username} is at the ${name.key}.`, 'single')
        }
    }

    buddyOnline(args) {
        let buddy = this.world.client.buddies.find(obj => obj.id == args.id)
        if (!buddy) return

        buddy.online = true

        if (this.interface.main.scene.isActive()) {
            this.interface.updateBuddies()
            this.interface.main.showOnlinePopup(this.filterUsername(buddy))
        }
    }

    buddyOffline(args) {
        let buddy = this.world.client.buddies.find(obj => obj.id == args.id)

        if (buddy) {
            buddy.online = false
            this.interface.updateBuddies()
        }
    }

    filterUsername(penguin) {
		if (penguin.username_approved == 1) {
            return penguin.username
        } else {
            return "P" + penguin.id
        }
	}

}
