import BaseContainer from '@scenes/base/BaseContainer'
import StampLoader from '@engine/loaders/StampLoader'

export default class BookStamp extends BaseContainer {

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
        shadow.alpha = 0.5;
        shadow.tintFill = true;
        shadow.tintTopLeft = 0;
        shadow.tintTopRight = 0;
        shadow.tintBottomLeft = 0;
        shadow.tintBottomRight = 0;
        this.add(shadow);

        // stamp
        const stamp = this.scene.add.image(0, 0, `stamps/${this.id}`);
        this.add(stamp);

        // locked
        const locked = this.scene.add.image(0, 0, `stamps/${this.id}`);
        locked.alpha = 0.8;
        locked.tintFill = true;
        locked.tintTopLeft = 0;
        locked.tintTopRight = 0;
        locked.tintBottomLeft = 0;
        locked.tintBottomRight = 0;
        this.add(locked);
		
		this.shadow = shadow
		this.stamp = stamp
		this.locked = locked
	}
}
