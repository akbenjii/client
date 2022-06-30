import Plugin from '../Plugin'


export default class Party extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'pick_team': this.pickTeam,
            'get_party_completion': this.getPartyCompletion,
            'get_leaderboard_data': this.getLeaderboardData,
            'get_team_scores': this.getTeamScores,
        }
    }

    pickTeam(args) {
        this.world.party.partyCompletion.team = args.team
    }

    getPartyCompletion(args) {
        this.world.party.setPartyCompletion(args)
    }

    getLeaderboardData(args) {
        this.world.interface.main.penguingames.getLeaderboardData(args)
    }

    getTeamScores(args) {
        this.world.interface.main.penguingames.getTeamScores(args)
    }
}
