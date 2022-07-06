import BaseScene from '@scenes/base/BaseScene'


export default class Book extends BaseScene {

    constructor(key) {
        super(key)

        // Current page number
        this.page
        // Array of pages defined in derived class
        this.pages
        // Buttons container defined in derived class
        this.buttons
    }

    init() {
        this.load.on('start', this.showLoading, this)
        this.events.on('showloading', this.showLoading, this)
    }

    showLoading() {
        this.interface.prompt.showLoading(this, this.load.progress)
    }

    create() {
        this._create()
		
		this.interface.book = this

        // Reset page
        this.page = 0
        this.setPageVisible()
    }

    showPage(page) {
        // Hide current page
        this.setPageVisible(false)

        // Show new page
        this.page = page
        this.setPageVisible()

        // Update button visibility
        this.setButtonsVisible()
		
		if (this.addPageStamps) this.addPageStamps()
    }

    prevPage() {
        let page = this.page - 1
        if (page < 0) return

        this.showPage(page)
    }

    nextPage() {
        let page = this.page + 1
        if (page > this.pages.length - 1) return

        this.showPage(page)
    }

    setPageVisible(visible = true) {
        this.pages[this.page].visible = visible
    }

    setButtonsVisible() {
		let visible
        // Not visible on first and last page
		if (this.key == "Stampbook") { visible = this.page > 0 }
		else { visible = this.page > 0 && this.page < this.pages.length - 1 } 
        
        this.buttons.visible = visible
    }

    close() {
        this.scene.stop()
    }

    unimplementedPrompt(){
        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('This feature is not yet implemented!\nCPForever is in development, and is being\nactively updated. Check back soon!',)
    }

}
