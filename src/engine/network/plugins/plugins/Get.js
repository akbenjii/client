import Plugin from '../Plugin'


export default class Get extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'get_player': this.getPlayer,
            'get_rank': this.getRank,
			'get_unverified_users': this.getUnverifedUsers,
			'get_user_info': this.getUserInfo,
			'edit_player': this.editPlayer
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

}
