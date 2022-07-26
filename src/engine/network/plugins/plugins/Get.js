import Plugin from '../Plugin'


export default class Get extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_player': this.getPlayer,
            'get_rank': this.getRank,
			'get_unverified_users': this.getUnverifedUsers,
			'get_user_info': this.getUserInfo,
			'edit_player': this.editPlayer,
            'get_pin': this.getPin,
			'get_statistics': this.getStatistics,
            'get_stampbook': this.getStampbook,
            'get_mascots': this.getMascots
        }
    }

    getPlayer(args) {
        this.interface.main.playerCard._showCard(args.penguin)
    }

    getRank(args) {
        this.interface.main.playerCard.isMod(args.id)
    }
	
	getUnverifedUsers(args) {
		this.interface.main.moderator.showUsers(args.users)
	}
	
	getUserInfo(args) {
		this.interface.main.moderator.showUsers(args.users)
	}
	
	editPlayer(args) {
        this.interface.main.modActions._showCard(args.user, args.bancount, args.activeban)
    }

    getPin(args) {
        this.crumbs.pin.id = args.id
        this.crumbs.pin.room = args.room
        this.crumbs.pin.x = args.x
        this.crumbs.pin.y = args.y
    }
	
	getStatistics(args) {
		this.interface.setStatistics(args)
	}

    getStampbook(args) {
        if (!this.interface.book) return

        args.inventory = this.initInventory(args)

        this.interface.book.initStampbook(args, false)
    }

    initInventory(args) {
        let slots = ['color', 'head', 'face', 'neck', 'body', 'hand', 'feet', 'flag', 'photo', 'award']
        let inventory = Object.fromEntries(slots.map(slot => [slot, []]))

        for (let item of args.inventory) {
            if (!this.crumbs.items[item]) continue

            let type = this.crumbs.items[item].type
            let slot = slots[type - 1]

            inventory[slot].push(item)
        }
        return inventory
    }

    getMascots(args) {
        this.world.mascots = args.mascots
    }

}
