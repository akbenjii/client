import Boot from '@engine/boot/Boot'
import Network from '@engine/network/Network'

import cpvanilla from './data/game'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        this.crumbs = config.crumbs
        this.network = new Network(this)

        this.scene.add('Boot', Boot, true)
    }

}

window.onload = () => {
    new Game(cpvanilla)
}
