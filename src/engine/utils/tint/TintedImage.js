import CanvasTint from './CanvasTint'


export default class TintedImage extends Phaser.GameObjects.Image {

    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)

        this.cachedTint
        this.tintedCanvas
    }

    renderCanvas(renderer, src, camera, parentMatrix) {
        camera.addToRenderList(src)

        CanvasTint.batchSprite(renderer, src, src.frame, camera, parentMatrix)
    }

}
