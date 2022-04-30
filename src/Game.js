import Boot from '@engine/boot/Boot'
import Network from '@engine/network/Network'

import cpforever from './data/game'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)
        
        this.crumbs = config.crumbs
        this.network = new Network(this)

        this.scene.add('Boot', Boot, true)
		
		this.logBanner()
    }
	
	logBanner() {
        // Please leave this line here for credit purposes
        console.log('CPF is based on the Yukon client - https://github.com/wizguin/yukon')

        // Edit this line if you want to display a custom name
		console.log(`%cCPForever ${VERSION}`, 'color: white; background: black; border-left: 8px solid #0280cd; padding: 0px 8px 0px 8px;')
    }

}

window.onload = () => {
    new Game(cpforever)
}
