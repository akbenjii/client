var rooms;

if (localStorage.clientMode == "legacy") {

    rooms = {
        100: {
            key: 'Town',
            scene: require('@rooms/old/town/Town').default,
            x: 760,
            y: 660
        },
        110: {
            key: 'Coffee',
            scene: require('@rooms/old/coffee/Coffee').default,
            x: 640,
            y: 480
        },
        111: {
            key: 'Book',
            scene: require('@rooms/old/book/Book').default,
            x: 1260,
            y: 560
        },
        120: {
            key: 'Dance',
            scene: require('@rooms/old/dance/Dance').default,
            x: 360,
            y: 560
        },
        121: {
            key: 'Lounge',
            scene: require('@rooms/old/lounge/Lounge').default,
            x: 1120,
            y: 640
        },
        130: {
            key: 'Shop',
            scene: require('@rooms/old/shop/Shop').default,
            x: 1000,
            y: 560
        },
        200: {
            key: 'Village',
            scene: require('@rooms/old/village/Village').default,
            x: 800,
            y: 640
        },
        210: {
            key: 'Sport',
            scene: require('@rooms/old/sport/Sport').default,
            x: 1000,
            y: 560
        },
        220: {
            key: 'Lodge',
            scene: require('@rooms/old/lodge/Lodge').default,
            x: 760,
            y: 800
        },
        221: {
            key: 'Attic',
            scene: require('@rooms/old/attic/Attic').default,
            x: 966,
            y: 560
        },
        230: {
            key: 'Mtn',
            scene: require('@rooms/old/mtn/Mtn').default,
            x: 760,
            y: 440
        },
        300: {
            key: 'Plaza',
            scene: require('@rooms/old/plaza/Plaza').default,
            x: 760,
            y: 680
        },
        310: {
            key: 'Pet',
            scene: require('@rooms/old/pet/Pet').default,
            x: 828,
            y: 520
        },
        320: {
            key: 'Dojo',
            scene: require('@rooms/old/dojo/Dojo').default,
            x: 780,
            y: 790
        },
        330: {
            key: 'Pizza',
            scene: require('@rooms/old/pizza/Pizza').default,
            x: 780,
            y: 790
        },
        400: {
            key: 'Beach',
            scene: require('@rooms/old/beach/Beach').default,
            x: 840,
            y: 680
        },
        800: {
            key: 'Dock',
            scene: require('@rooms/old/dock/Dock').default,
            x: 800,
            y: 400
        },
        801: {
            key: 'Forts',
            scene: require('@rooms/old/forts/Forts').default,
            x: 960,
            y: 610
        },
        802: {
            key: 'Rink',
            scene: require('@rooms/old/rink/Rink').default,
            x: 770,
            y: 400
        },
        803: {
            key: 'HQ',
            scene: require('@rooms/old/hq/HQ').default,
            x: 700,
            y: 700
        },
        804: {
            key: 'Boiler',
            scene: require('@rooms/old/boiler/Boiler').default,
            x: 770,
            y: 400
        },
        805: {
            key: 'Berg',
            scene: require('@rooms/old/berg/Berg').default,
            x: 652,
            y: 448
        },
        806: {
            key: 'Cave',
            scene: require('@rooms/old/cave/Cave').default,
            x: 780,
            y: 700
        },
        807: {
            key: 'Shack',
            scene: require('@rooms/old/shack/Shack').default,
            x: 760,
            y: 680
        },
        808: {
            key: 'Mine',
            scene: require('@rooms/old/mine/Mine').default,
            x: 760,
            y: 680
        },
        809: {
            key: 'Forest',
            scene: require('@rooms/old/forest/Forest').default,
            x: 760,
            y: 430
        },
        810: {
            key: 'Cove',
            scene: require('@rooms/old/cove/Cove').default,
            x: 840,
            y: 480
        },
        916: {
            key: 'aquaGrabber',
            scene: require('@games/aquagrabber/AquaGrabber').default
        },
        900: {
            key: 'astroBarrier',
            scene: require('@games/astrobarrier/AstroBarrier').default
        },
        905: {
            key: 'cartSurfer',
            scene: require('@games/cartsurfer/CartSurfer').default
        },
        924: {
            key: 'hydroHopper',
            scene: require('@games/hydrohopper/HydroHopper').default
        },
        904: {
            key: 'iceFishing',
            scene: require('@games/icefishing/IceFishing').default
        },
        910: {
            key: 'pizzatron',
            scene: require('@games/pizzatron/Pizzatron').default
        },
        925: {
            key: 'puffleRoundup',
            scene: require('@games/puffleroundup/PuffleRoundup').default
        },
        909: {
            key: 'thinIce',
            scene: require('@games/thinice/ThinIce').default
        },
        908: {
            key: 'beanCounters',
            scene: require('@games/beanCounters/BeanCounters').default
        },
        911: {
            key: 'yumYuck',
            scene: require('@games/yumYuck/YumYuck').default
        },
        999: {
            key: 'Sled',
            scene: require('@games/sled/Sled').default
        }
    }

}

if (localStorage.clientMode == "vanilla") {

    rooms = {
        100: {
            key: 'Town',
            scene: require('@rooms/new/town/Town').default,
            x: 760,
            y: 660
        },
        110: {
            key: 'Coffee',
            scene: require('@rooms/new/coffee/Coffee').default,
            x: 640,
            y: 480
        },
        111: {
            key: 'Book',
            scene: require('@rooms/new/book/Book').default,
            x: 1260,
            y: 560
        },
        120: {
            key: 'Dance',
            scene: require('@rooms/new/dance/Dance').default,
            x: 360,
            y: 560
        },
        121: {
            key: 'Lounge',
            scene: require('@rooms/new/lounge/Lounge').default,
            x: 1120,
            y: 640
        },
		122: {
            key: 'School',
            scene: require('@rooms/new/school/School').default,
            x: 1120,
            y: 640
        },
        130: {
            key: 'Shop',
            scene: require('@rooms/new/shop/Shop').default,
            x: 1000,
            y: 560
        },
        200: {
            key: 'Village',
            scene: require('@rooms/new/village/Village').default,
            x: 800,
            y: 640
        },
        210: {
            key: 'Sport',
            scene: require('@rooms/old/sport/Sport').default,
            x: 1000,
            y: 560
        },
        220: {
            key: 'Lodge',
            scene: require('@rooms/new/lodge/Lodge').default,
            x: 760,
            y: 800
        },
        221: {
            key: 'Attic',
            scene: require('@rooms/new/attic/Attic').default,
            x: 966,
            y: 560
        },
        230: {
            key: 'Mtn',
            scene: require('@rooms/new/mtn/Mtn').default,
            x: 760,
            y: 440
        },
        300: {
            key: 'Plaza',
            scene: require('@rooms/new/plaza/Plaza').default,
            x: 760,
            y: 680
        },
        310: {
            key: 'Pet',
            scene: require('@rooms/new/pet/Pet').default,
            x: 828,
            y: 520
        },
        320: {
            key: 'Dojo',
            scene: require('@rooms/old/dojo/Dojo').default,
            x: 780,
            y: 790
        },
        330: {
            key: 'Pizza',
            scene: require('@rooms/new/pizza/Pizza').default,
            x: 780,
            y: 790
        },
        400: {
            key: 'Beach',
            scene: require('@rooms/new/beach/Beach').default,
            x: 840,
            y: 680
        },
        800: {
            key: 'Dock',
            scene: require('@rooms/new/dock/Dock').default,
            x: 800,
            y: 400
        },
        801: {
            key: 'Forts',
            scene: require('@rooms/new/forts/Forts').default,
            x: 960,
            y: 610
        },
        802: {
            key: 'Rink',
            scene: require('@rooms/new/rink/Rink').default,
            x: 770,
            y: 400
        },
        803: {
            key: 'HQ',
            scene: require('@rooms/old/hq/HQ').default,
            x: 700,
            y: 700
        },
        804: {
            key: 'Boiler',
            scene: require('@rooms/old/boiler/Boiler').default,
            x: 770,
            y: 400
        },
        805: {
            key: 'Berg',
            scene: require('@rooms/old/berg/Berg').default,
            x: 652,
            y: 448
        },
        806: {
            key: 'Cave',
            scene: require('@rooms/new/cave/Cave').default,
            x: 780,
            y: 700
        },
        807: {
            key: 'Shack',
            scene: require('@rooms/new/shack/Shack').default,
            x: 760,
            y: 680
        },
        808: {
            key: 'Mine',
            scene: require('@rooms/old/mine/Mine').default,
            x: 760,
            y: 680
        },
        809: {
            key: 'Forest',
            scene: require('@rooms/new/forest/Forest').default,
            x: 760,
            y: 430
        },
        810: {
            key: 'Cove',
            scene: require('@rooms/new/cove/Cove').default,
            x: 840,
            y: 480
        },
        916: {
            key: 'aquaGrabber',
            scene: require('@games/aquagrabber/AquaGrabber').default
        },
        900: {
            key: 'astroBarrier',
            scene: require('@games/astrobarrier/AstroBarrier').default
        },
        905: {
            key: 'cartSurfer',
            scene: require('@games/cartsurfer/CartSurfer').default
        },
        924: {
            key: 'hydroHopper',
            scene: require('@games/hydrohopper/HydroHopper').default
        },
        904: {
            key: 'iceFishing',
            scene: require('@games/icefishing/IceFishing').default
        },
        910: {
            key: 'pizzatron',
            scene: require('@games/pizzatron/Pizzatron').default
        },
        925: {
            key: 'puffleRoundup',
            scene: require('@games/puffleroundup/PuffleRoundup').default
        },
        909: {
            key: 'thinIce',
            scene: require('@games/thinice/ThinIce').default
        },
        908: {
            key: 'beanCounters',
            scene: require('@games/beanCounters/BeanCounters').default
        },
        911: {
            key: 'yumYuck',
            scene: require('@games/yumYuck/YumYuck').default
        },
        999: {
            key: 'Sled',
            scene: require('@games/sled/Sled').default
        }
    }

}

export default rooms