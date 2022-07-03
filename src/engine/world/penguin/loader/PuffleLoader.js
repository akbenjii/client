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
            if (this.textureExists(mainKey) && this.textureExists(mainKey + "_adopt") && this.textureExists(mainKey + "_dig") && this.textureExists(mainKey + "_dive") && this.textureExists(mainKey + "_eat") && this.textureExists(mainKey + "_hydrant") && this.textureExists(mainKey + "_maxed") && this.textureExists(mainKey + "_scratchpost") && this.textureExists(mainKey + "_splash") && this.textureExists(mainKey + "_tireswing") && this.textureExists(mainKey + "_tricks") && this.textureExists(mainKey + "_weightlifting")) {
                this.onFileComplete(mainKey, puffle)
                clearInterval(interval)
            }
        },100)

        this.multiatlas(mainKey, `sprites/${puffle}.json`)
        this.multiatlas(mainKey + '_adopt', `adopt/${puffle}.json`)
        this.multiatlas(mainKey + '_dig', `dig/${puffle}.json`)
        this.multiatlas(mainKey + '_dive', `dive/${puffle}.json`)
        this.multiatlas(mainKey + '_eat', `eat/${puffle}.json`)
        this.multiatlas(mainKey + '_hydrant', `hydrant/${puffle}.json`)
        this.multiatlas(mainKey + '_maxed', `maxed/${puffle}.json`)
        this.multiatlas(mainKey + '_scratchpost', `scratchpost/${puffle}.json`)
        this.multiatlas(mainKey + '_splash', `splash/${puffle}.json`)
        this.multiatlas(mainKey + '_tireswing', `tireswing/${puffle}.json`)
        this.multiatlas(mainKey + '_tricks', `tricks/${puffle}.json`)
        this.multiatlas(mainKey + '_weightlifting', `weightlifting/${puffle}.json`)
        this.start()
    }

    onFileComplete(key, puffle) {
        if (!this.textureExists(key)) {
            return
        }

        this.createAnim(`puffle_${puffle}_adopt`, 'Sprite')
        this.createAnim(`puffle_${puffle}_dig`, 'Sprite')
        this.createAnim(`puffle_${puffle}_dive`, 'Sprite')
        this.createAnim(`puffle_${puffle}_eat`, 'Sprite')
        this.createAnim(`puffle_${puffle}_hydrant`, 'Sprite')
        this.createAnim(`puffle_${puffle}_maxed`, 'Sprite')
        this.createAnim(`puffle_${puffle}_scratchpost`, 'Sprite')
        this.createAnim(`puffle_${puffle}_splash`, 'Sprite')
        this.createAnim(`puffle_${puffle}_tireswing`, 'Sprite')
        this.createAnim(`puffle_${puffle}_tricks`, 'Sprite')
        this.createAnim(`puffle_${puffle}_weightlifting`, 'Sprite')

       this.penguin.penguinLoader.loadPuffle(this.penguin, puffle)
    }

    createAnim(key, frame) {
        let frames = this.generateFrames(key, frame)

        this.world.anims.create({
            key: `${key}`,
            frames: frames,
            frameRate: 24,
            repeat: 0
        })
    }

    generateFrames(key, frame) {
        let textureFrames = this.world.textures.get(key).getFrameNames(false)
        textureFrames.sort(function (a, b) { return parseInt(a.substring(6)) - parseInt(b.substring(6)) });
        let config = {
            frames: textureFrames
        }

        return this.world.anims.generateFrameNames(key, config)
    }

}