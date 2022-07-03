import BaseLoader from '@engine/loaders/BaseLoader'


export default class MusicLoader extends BaseLoader {

    constructor(MusicController) {
        super(MusicController)
		this.MusicController = MusicController
		this.baseURL = '/assets/media/music/'
		this.keyPrefix = 'music/'
    }

    loadFile(track, fileExtension = 'mp3') {

        let key = this.getKey(track)

        let interval = setInterval(() => {
            if (this.MusicController.cache.audio.exists(key)) {
                this.onFileComplete(key)
                clearInterval(interval)
            }
        },100)

        this.audio(key, `${track}.${fileExtension}`)
        this.start()
    }

    onFileComplete(key) {
        if (!this.MusicController.cache.audio.exists(key)) {
            return
        }

        this.MusicController.play(key)
    }

}