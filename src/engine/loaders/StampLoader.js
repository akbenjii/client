import BaseLoader from './BaseLoader'


export default class StampLoader extends BaseLoader {

    constructor(scene, stamp) {
        super(scene)
		this.scene = scene
		this.stamp = stamp
		this.baseURL = '/assets/media/interface/game/stampbook/stamps/'
		this.keyPrefix = 'stamps/'
    }

    loadStamp(stamp) {

        let key = this.getKey(stamp)

        if (this.checkComplete('image', key, () => {
            this.onFileComplete(key, stamp)
        })) {
            return
        }

        this.image(key, `${stamp}.png`)
        this.start()
    }

    onFileComplete(key, stamp) {
        if (!this.textureExists(key)) {
            return
        }

        this.stamp.addStamp()
    }

}