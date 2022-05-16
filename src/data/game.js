import fonts from './fonts'
import igloos from './igloos'
import interfaces from './interfaces'
import rooms from './rooms'
import pin from './pin'


if (!localStorage.getItem('webgl')) { localStorage.setItem('webgl', 'true')}
if (!localStorage.getItem('clientMode')) { localStorage.setItem('clientMode', 'legacy')}

const cpforever = {
    type: (localStorage.getItem('webgl') == 'true')
        ? Phaser.WEBGL
        : Phaser.CANVAS,

    width: 1520,
    height: 960,
    transparent: true,
    roundPixels: true,

    dom: {
        createContainer: true
    },

    physics: {
        default: 'matter',
        matter: {
            debug: {
                renderFill: (window.location.hostname == 'localhost') ? true : false,
                renderLine: (window.location.hostname == 'localhost') ? true : false,
                showInternalEdges: true
            },
            gravity: false
        }
    },

    plugins: {
        global: [ NineSlice.Plugin.DefaultCfg ]
    },

    scale: {
        parent: 'game',
        mode: Phaser.Scale.FIT,
        autoRound: true,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    crumbs: {
        fonts: fonts,
        pin: pin,
        scenes: {
            igloos: igloos,
            interfaces: interfaces,
            rooms: rooms
        },
        iglooIdOffset: 2000
    }
}

export default cpforever