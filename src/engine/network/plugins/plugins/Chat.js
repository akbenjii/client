import Plugin from '../Plugin'


export default class Chat extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_message': this.sendMessage,
            'send_safe': this.sendSafe,
            'send_emote': this.sendEmote
        }
    }

    sendMessage(args) {
        if (this.world.room.isReady) {
            this.interface.showTextBalloon(args.id, args.message)
        }
    }

    sendSafe(args) {
        if (this.world.room.isReady) {
            let message = this.interface.main.safe.safeMessagesMap[args.safe]

            this.interface.showTextBalloon(args.id, message)
        }
    }

    sendEmote(args) {
        if (this.world.room.isReady) {
            this.interface.showEmoteBalloon(args.id, args.emote)
        }
    }

}
