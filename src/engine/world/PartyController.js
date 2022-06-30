export default class PartyController {

    constructor(world) {
        this.world = world
        this.party = "PenguinGames0722"
        this.partyCompletion = {}
    }

    getPartyCompletion() {
        if (this.party) this.world.network.send('get_party_completion', { party: this.party })
    }

    pickTeam(team) {
        this.world.network.send('pick_team', { team: team })
    }

    setPartyCompletion(partyCompletion) {
        if (partyCompletion) this.partyCompletion = partyCompletion
        if (!this.partyCompletion || !this.partyCompletion.team) {
            this.world.interface.main.prompt.showPgFirstLogin()
        }
    }
}
