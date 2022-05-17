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
		
		this.locked = (!this.world.client.stamps.includes(id))

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
        this.add(shadow);

        // stamp
        const stamp = this.scene.add.image(0, 0, `stamps/${this.id}`);
        this.add(stamp);

		if (this.locked) {
			
        	// locked
        	const locked = this.scene.add.image(0, 0, `stamps/${this.id}`);
        	locked.alpha = 0.5;
        	locked.tintFill = true;
        	this.add(locked);
		
			this.locked = locked
		}
		
		this.shadow = shadow
		this.stamp = stamp
	}
}
