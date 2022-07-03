import MusicLoader from './MusicLoader'

export default class MusicController extends Phaser.Scene {

    create() {
        this.MusicLoader = new MusicLoader(this)
    }

    addMusic(track, fileExtension = 'mp3') {
        if (track === 0) {
            this.sound.stopAll()
            this.music = null
            this.musicPlaying = null
            return
        }
        if (track === this.music || 'music/' + track === this.musicPlaying) { return }
        this.sound.stopAll()
        this.music = track
        if (!this.cache.audio.exists('music/' + track)) {
            this.MusicLoader.loadFile(track, fileExtension)
        }
        else {
            this.play('music/' + track)
        }
    }

    play(key) {
        if (key !== 'music/' + this.music || key === this.musicPlaying) {
            return
        }
        this.sound.play(key)
        this.musicPlaying = key
    }

}