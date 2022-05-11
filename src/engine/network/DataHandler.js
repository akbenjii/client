import PluginManager from './plugins/PluginManager'


export default class DataHandler {

    constructor(network) {
        this.plugins = new PluginManager(network)
    }

    handle(message) {
        let messageArray = message.split('%')
        try {
            if (window.location.hostname == 'localhost') {
                console.log(`[DataHandler] Received: ${message}`)
            }

            this.fireEvent(messageArray[0], messageArray[1])

        } catch (e) {
            console.error(`[DataHandler] Error: ${e}`)
        }
    }

    fireEvent(event, args) {
        this.plugins.getEvent(event, args)
    }

}
