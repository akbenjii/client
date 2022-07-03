export default class PartyController {

    constructor(world) {
        this.world = world
        this.party = null
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
    }
}
