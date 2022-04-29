import BaseScene from '@scenes/base/BaseScene'


export default class News extends BaseScene {

    constructor(key) {
        super(key)

        // Current page number
        this.page
        // Array of pages defined in derived class
        this.pages
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

    firstPage() {
            let page = this.pages.length - this.pages.length

            this.showPage(page)
    }

    eventPage() {
        let page = this.page +1

        this.showPage(page)
    }

    featuredPage() {
        let page = this.page + 2

        this.showPage(page)
    }

    jokesPage() {
        let page = this.page + 3

        this.showPage(page)
    }

    comicsPage() {
        let page = this.page + 4

        this.showPage(page)
    }

    needPage() {
        let page = this.page + 5

        this.showPage(page)
    }

    setPageVisible(visible = true) {
        this.pages[this.page].visible = visible
    }

    close() {
        this.scene.stop()
    }

}
