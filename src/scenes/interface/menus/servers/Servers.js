import BaseScene from '@scenes/base/BaseScene'

import Server from './server/Server'


/* START OF COMPILED CODE */

export default class Servers extends BaseScene {

    constructor() {
        super("Servers");

        /* START-USER-CTR-CODE */
        /* END-USER-CTR-CODE */
    }

    /** @returns {void} */
    _create() {

        // og_start_bg_png
        this.add.image(760, 480, "startscreen", "og-start-bg.png");

        // more
        const more = this.add.image(1300, 630, "servers", "more");
        more.setOrigin(0.5, 0.5027322404371585);
        more.visible = false;

        // uS0001_png
        const uS0001_png = this.add.image(130, 139, "servers-og", "US0001.png");
        uS0001_png.scaleX = 0.7936874912862225;
        uS0001_png.scaleY = 0.7936874912862225;

        // select_server_png
        this.add.image(1090, 93, "servers-og", "select server.png");

        // smileyfull
        const smileyfull = this.add.image(79, 898, "servers-og", "smileyfull");
        smileyfull.scaleX = 1.0915949077138825;
        smileyfull.scaleY = 1.0915949077138825;

        // text
        const text = this.add.text(105, 889, "", {});
        text.alpha = 0.5;
        text.alphaTopLeft = 0.5;
        text.alphaTopRight = 0.5;
        text.alphaBottomLeft = 0.5;
        text.alphaBottomRight = 0.5;
        text.text = "Amount of penguins in each server";
        text.setStyle({ "fontSize": "20px" });

        this.events.emit("scene-awake");
    }

    /* START-USER-CODE */

    create(data) {
        this._create()

        this.createServers(data)
    }

    createServers(data) {
        let y = 122
        let worlds = Object.entries(this.crumbs.worlds).slice(0, 5).filter(world => !world[1].login)

        for (let [world, config] of worlds) {
            y += 102

            let server = new Server(this, 760, y)

            server.name.text = world
            server.safe.visible = config.safe

            let population = data.populations[world] || 1

            server.setPopulation(population)

            server.button.callback = () => this.onServerClick(world, data.username, data.key, population >= 6)

            this.add.existing(server)
        }
    }

    onServerClick(world, username, key, isFull) {
        if (isFull) {
            return this.interface.prompt.showError('Sorry this server is full. Please select another server.')
        }

        this.interface.showLoading(`${this.getString('joining')} ${world}`)
        this.scene.stop()
        this.network.connectGame(world, username, key)
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */
