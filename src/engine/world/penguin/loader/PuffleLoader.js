import BaseLoader from '@engine/loaders/BaseLoader'


export default class PuffleLoader extends BaseLoader {

    constructor(penguin) {
        super(penguin.room)
		this.penguin = penguin
		this.baseURL = '/assets/media/puffles/'
		this.keyPrefix = 'puffle_'
    }

    loadPuffle(puffle) {

        let mainKey = this.getKey(puffle)

        let interval = setInterval(() => {
            if (this.textureExists(mainKey)) {
                this.onFileComplete(mainKey, puffle)
                clearInterval(interval)
            }
        },100)

        this.multiatlas(mainKey, `sprites/${puffle}.json`)
        this.start()
    }

    onFileComplete(key, puffle) {
        if (!this.textureExists(key)) {
            return
        }

       this.penguin.penguinLoader.loadPuffle(this.penguin, puffle)
    }

}