import RoomScene from '@scenes/rooms/RoomScene'


export default class GameScene extends RoomScene {

    constructor(key) {
        super(key)

        this.key = key
    }

    get client() {
        return this.world.client
    }

    getColor(color) {
        return this.world.getColor(color)
    }

    init(data) {
        this.id = data.id
    }

    create() {
        this._create()

        this.sound.pauseOnBlur = false
        if (!this.music) this.music = 0
        this.addMusic()

        this.interface.hideLoading()
    }

}
