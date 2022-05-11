import DataHandler from './DataHandler'

import io from 'socket.io-client'


export default class Network {

    constructor(game) {
        this.game = game
        this.crumbs = game.crumbs

        this.handler = new DataHandler(this)
        this.client = null

        this.saveUsername = false
        this.savePassword = false
        this.token = null

        // Used to switch back to correct login scene on an error
        this.lastLoginScene = null

        this.worldName
    }

    connectLogin(saveUsername, savePassword, onConnect) {
        this.saveUsername = saveUsername
        this.savePassword = savePassword

        this.connect('Login', () => {
            onConnect()
        }, () => {
            this.disconnect()
        })
    }

    connectGame(world, username, key) {
        // Only create token if save password is checked and space is available
        let createToken = this.savePassword && Object.keys(this.savedPenguins).length <= 6
        let response = { username: username, key: key, createToken: createToken }

        // If a token exists for the user add the token selector to response,
        // so that the token can be deleted/refreshed by the server
        let token = this.getToken(username)

        if (token) {
            response.token = token.split(':')[0]
        }

        this.connect(world, () => {
            this.sendGameAuth(username, key, createToken)
            this.worldName = world

        }, () => {
            this.onConnectionLost()
        })
    }

    connect(world, onConnect, onDisconnect) {
        this.disconnect()

        let config = this.crumbs.worlds[world]

        this.client = io.connect(config.host, { path: config.path })

        this.client.once('connect', onConnect)
        this.client.once('disconnect', onDisconnect)
        this.client.on('connect_error', () => this.onConnectionLost())
        this.client.on('message', (message) => this.onMessage(message))
    }

    disconnect() {
        if (this.client) {
            this.client.disconnect()
        }
    }

    sendRaw(packet) {
        this.client.emit('message', packet)
    }

    // formatting messages for sending to the server
    // 'l' is for login, 'g' is for game,
    // 'j' is for join, 'r' is for room, 'm' is for minigame, 'p' is for penguin, 'e' is for puffle, 'w' is for world, 'o' is for moderation

    sendLogin(username, password) {
        this.client.emit('message', `l%w#l%${username}|${password}`)
        // login % world # login % username | password
    }

    sendTokenLogin(username, token) {
        this.client.emit('message', `l%w#tl%${username}|${token}`)
        // login % world # tokenlogin % username | token
    }

    sendJoinServer() {
        // ('join_server')
        this.client.emit('message', 'l%j#s')
        // login % join # server
    }

    sendGameAuth(username, key, createToken) {
        this.client.emit('message', `l%w#ga%${username}|${key}|${createToken}`)
        // login % world # gameauth % username | key | createToken
    }

    sendLoadPlayer() {
        // ('load_player')
        this.client.emit('message', 'l%p#lp')
        // login % penguin # loadplayer
    }

    sendRemoveItem(slot) {
        // ('remove_item', { type: slot })
        this.client.emit('message', `g%p#ri%${slot}`)
        // game % penguin # removeitem % slot
    }

    sendEndRuffleGame(coins, game, stamps) {
        // ('end_ruffle_mingame', { coins: coins, game: game, stamps: stamps })
        this.client.emit('message', `g%m#er%${coins}|${game}|${stamps}`)
        // game % minigame # endminigame % coins | game | stampsarray
    }

    sendFrame(set, frame) {
        // ('send_frame', { set: set, frame: frame })
        this.client.emit('message', `g%r#f%${set}|${frame}`)
        // game % room # sendframe % set | frame
    }

    sendSnowball(x, y) {
        // ('snowball', { x: x, y: y })
        this.client.emit('message', `g%r#s%${x}|${y}`)
        // game % room # snowball % xpos | ypos
    }

    sendEmote(emote) {
        // ('send_emote', { emote: emote })
        this.client.emit('message', `g%r#e%${emote}`)
        // game % room # emote % emoteid
    }

    sendSafe(safe) {
        // ('send_safe', { safe: safe })
        this.client.emit('message', `g%r#cs%${safe}`)
        // game % room # chatsafe % safemessage
    }
    
    sendJoinRoom(room, x, y) {
        // ('join_room', { room: room, x: x, y: y })
        this.client.emit('message', `g%j#r%${room}|${x}|${y}`)
        // game % join # room % roomid | xpos | ypos
    }

    sendJoinIgloo(igloo, x, y) {
        // ('join_igloo', { igloo: igloo, x: x, y: y })
        this.client.emit('message', `g%j#i%${igloo}|${x}|${y}`)
        // game % join # igloo % iglooid | xpos | ypos
    }

    sendPosition(x, y) {
        // ('send_position', { x: x, y: y })
        this.client.emit('message', `g%r#sp%${x}|${y}`)
        // game % room # sendposition % xpos | ypos
    }

    sendGetWellbeing(puffle) {
        // ('get_wellbeing', { puffle: puffle })
        this.client.emit('message', `g%e#gw${puffle}`)
        // game % puffle # getwellbeing % puffleid
    }

    sendGetPin() {
        // ('get_pin')
        this.client.emit('message', `g%w#gp`)
        // game % world # getpin
    }

    sendLeaveWaddle() {
        // ('leave_waddle')
        this.client.emit('message', `g%r#lw`)
        // game % room # leavewaddle
    }

    sendPlaceCounter(column, row) {
        // ('place_counter', { column: column, row: row})
        this.client.emit('message', `g%m#pc%${column}|${row}`)
        // game % minigame # placecounter % column | row
    }

    sendGetWaddles() {
        // ('get_waddles')
        this.client.emit('message', `g%r#gw`)
        // game % room # getwaddles
    }

    sendStartGame(){
        // ('start_game')
        this.client.emit('message', `g%m#sg`)
        // game % minigame # startgame
    }

    sendMove(id, x, y, time) {
        // ('send_move', { id: id, x: x, y: y, time: time })
        this.client.emit('message', `g%m#m%${id}|${x}|${y}|${time}`)
        // game % minigame # move
    }

    sendGameOver(score) {
        // ('game_over', { score: score })
        this.client.emit('message', `g%m#go%${score}`)
        // game % minigame # gameover % score
    }

    sendGetPuffles(id) {
        // ('get_puffles', { userId: id })
        this.client.emit('message', `g%r#gp%${id}`)
        // game % room # getpuffles % userid
    }

    sendUpdateIgloo(type) {
        // ('update_igloo', { type: type })
        this.client.emit('message', `g%r#ui%${type}`)
        // game % room # updateigloo % type
    }

    sendUpdateFlooring(flooring) {
        // ('update_flooring', { flooring: flooring })
        this.client.emit('message', `g%r#uf%${flooring}`)
        // game % room # updateflooring % flooring
    }

    sendAddIgloo(igloo) {
        // ('add_igloo', { igloo: igloo })
        this.client.emit('message', `g%r#ai%${igloo}`)
        // game % room # addigloo % igloo
    }

    sendCloseIgloo() {
        // ('close_igloo')
        this.client.emit('message', `g%r#ci`)
        // game % room # closeigloo
    }

    sendOpenIgloo() {
        // ('open_igloo')
        this.client.emit('message', `g%r#oi`)
        // game % room # openigloo
    }

    sendUpdateFurniture(furniture) {
        // ('update_furniture', { furniture: furniture })
        this.client.emit('message', `g%r#uf%${furniture}`)
        // game % room # updatefurniture % furniture
    }

    sendUpdateMusic(args) {
        this.client.emit('message', `g%r#um%${args.music}`)
        // game % room # updatemusic % music
    }

    sendMessage(args) {
        this.client.emit('message', `g%r#sm%${args.message}`)
        // game % room # sendmessage % message
    }

    sendGetUserInfo(args) {
        this.client.emit('message', `g%p#gi%${args.username}`)
        // game % player # getuserinfo % username
    }

    sendBuddyAccept(args) {
        this.client.emit('message', `g%p#ba%${args.id}`)
        // game % player # buddyaccept % userid
    }

    sendBuddyReject(args) {
        this.client.emit('message', `g%p#br%${args.id}`)
        // game % player # buddyreject % userid
    }

    sendDeleteAccount() {
        this.client.emit('message', `g%p#da`)
        // game % player # deleteaccount
    }

    sendChangeUsername(args) {
        this.client.emit('message', `g%p#cu%${args.username}`)
        // game % player # changeusername % username
    }

    sendChangePassword(args) {
        this.client.emit('message', `g%p#cp%${args.newPassword}`)
        // game % player # changepassword % password
    }

    sendGetIgloos() {
        this.client.emit('message', `g%w#gi`)
        // game % world # getigloos
    }

    sendGetPlayer(args) {
        this.client.emit('message', `g%o#gp%${args.id}`)
        // game % moderation # getplayer % userid
    }

    sendAddUserCoins(args) {
        this.client.emit('message', `g%o#ac%${args.id}|${args.coins}`)
        // game % moderation # addusercoins % userid | coins
    }

    sendAddUserItem(args) {
        this.client.emit('message', `g%o#ai%${args.id}|${args.item}|${args.itemName}`)
        // game % moderation # adduseritem % userid | item | itemname
    }

    sendBanUser(args) {
        this.client.emit('message', `g%o#bu%${args.id}|${args.banDuration}|${args.durationText}`)
        // game % moderation # banuser % userid | duration | durationText
    }

    sendModChangeUsername(args) {
        this.client.emit('message', `g%o#cu%${args.id}|${args.newUsername}`)
        // game % moderation # changeusername % userid | newusername
    }

    sendGetUnverifiedUsers() {
        this.client.emit('message', `g%o#gu`)
        // game % moderation # getunverifiedusers
    }

    sendVerifyUser(args) {
        this.client.emit('message', `g%o#vu%${args.id}`)
        // game % moderation # verifyuser % userid
    }

    sendRejectUser(args) {
        this.client.emit('message', `g%o#ru%${args.id}`)
        // game % moderation # rejectuser % userid
    }

    sendGetIglooOpen(args) {
        this.client.emit('message', `g%p#go%${args.igloo}`)
        // game % player # getiglooopen % igloo
    }

    sendBuddyFind(args) {
        this.client.emit('message', `g%p#bf%${args.id}`)
        // game % player # buddyfind % userid
    }

    sendBuddyRequest(args) {
        this.client.emit('message', `g%p#br%${args.id}`)
        // game % player # buddyrequest % userid
    }

    sendBuddyRemove(args) {
        this.client.emit('message', `g%p#bq%${args.id}`)
        // game % player # buddyremove % userid
    }

    sendIgnoreAdd(args) {
        this.client.emit('message', `g%p#ia%${args.id}`)
        // game % player # ignoreadd % userid
    }

    sendIgnoreRemove(args) {
        this.client.emit('message', `g%p#ir%${args.id}`)
        // game % player # ignoreremove % userid
    }

    sendMutePlayer(args) {
        this.client.emit('message', `g%p#mp%${args.id}`)
        // game % player # muteplayer % userid
    }

    sendWarnPlayer(args) {
        this.client.emit('message', `g%p#wp%${args.id}`)
        // game % player # warnplayer % userid
    }

    sendKickPlayer(args) {
        this.client.emit('message', `g%p#kp%${args.id}`)
        // game % player # kickplayer % userid
    }

    sendUpdatePlayer(args) {
        this.client.emit('message', `g%p#up%${args.item}`)
        // game % player # updateplayer % item
    }

    sendEditPlayer(args) {
        this.client.emit('message', `g%p#ep%${args.id}`)
        // game % player # editplayer % userid
    }

    sendToggleStealthMode(args) {
        this.client.emit('message', `g%p#ts%${args.stealthMode}`)
        // game % player # togglestealthmode % stealthmode
    }

    sendAddItem(args) {
        this.client.emit('message', `g%p#ai%${args.item}`)
        // game % player # additem % item
    }

    sendAddFurniture(args) {
        this.client.emit('message', `g%p#af%${args.furniture}`)
        // game % player # addfurniture % furniture
    }


    // Handlers

    onMessage(message) {
        this.handler.handle(message)
    }

    onConnectionLost() {
        this.disconnect()

        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('Connection was lost.\nPlease click to reload', 'Reload', () => window.location.reload())
    }

    // Saved penguins

    get isSavedPenguins() {
        if (localStorage.getItem('saved_penguins')) {
            return true
        } else {
            return false
        }
    }

    get savedPenguins() {
        let savedPenguins = localStorage.getItem('saved_penguins')

        if (!savedPenguins) {
            return {}
        }

        try {
            return JSON.parse(savedPenguins)
        } catch (error) {
            return {}
        }
    }

    getToken(username) {
        let save = this.savedPenguins[username.toLowerCase()]

        if (save && save.token) {
            return save.token
        } else {
            return null
        }
    }

}
