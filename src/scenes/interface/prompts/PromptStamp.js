import BaseContainer from '@scenes/base/BaseContainer'
import StampLoader from '@engine/loaders/StampLoader'

export default class PromptStamp extends BaseContainer {

    constructor(scene, x, y, id) {
        super(scene, x ?? 100, y ?? 100);
        this.id = id
        this.scene = scene

        this.loader = new StampLoader(this.scene, this)

        if (!this.scene.textures.exists(`stamps/${id}`)) {
            this.loader.loadStamp(id)
        }
        else {
            this.addStamp()
        }

    }

    addStamp() {
        // shadow
        const shadow = this.scene.add.image(4, 5, `stamps/${this.id}`);
        shadow.alpha = 0.3;
        shadow.tintFill = true;
        shadow.tintTopLeft = 0;
        shadow.tintTopRight = 0;
        shadow.tintBottomLeft = 0;
        shadow.tintBottomRight = 0;
        shadow.scaleX = 0.5;
        shadow.scaleY = 0.5;
        this.add(shadow);

        // stamp
        const stamp = this.scene.add.image(0, 0, `stamps/${this.id}`);
        stamp.scaleX = 0.5;
        stamp.scaleY = 0.5;
        this.add(stamp);

        if (!this.scene.world.client.stamps.includes(parseInt(this.id))) {
            // locked
            const locked = this.scene.add.image(0, 0, `stamps/${this.id}`);
            locked.alpha = 0.5;
            locked.tintFill = true;
            locked.scaleX = 0.5;
            locked.scaleY = 0.5;
            this.add(locked);

            this.locked = locked
        }

        this.shadow = shadow
        this.stamp = stamp
    }
}
