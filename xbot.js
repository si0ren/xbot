
const
	{
	    WAConnection: _WAConnection,
		MessageType, 
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		ChatModification,
		GroupSettingChange,
		WA_MESSAGE_STUB_TYPES,
		WA_DEAFULT_EPHEMERAL,
		waChatKey,
		mentionedJid,
		processTime,
		prepareMessageFromContent, 
		relayWAMessage
	} = require("@adiwajshing/baileys")
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const qrcode = require('qrcode-terminal')
const qrkode = require("qrcode")
const imageToBase64 = require('image-to-base64')
const moment = require("moment-timezone")
const fs = require("fs")
const { recognize } = require('./lib/ocr')
const brainly = require('brainly-scraper')
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const request = require('request')
const util = require('util')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const base64Img = require('base64-img')
const ms = require('parse-ms')
const ig = require('insta-fetcher')
const figlet = require('figlet')
const ytsd = require('ytsr')
const cheerio = require('cheerio')
const yts = require( 'yt-search')
const fromData = require('form-data')
const os = require('os')
const ggs = require('google-it')
const googleImage = require('g-i-s')
const toMs = require('ms')
const fetch = require('node-fetch')
const imgbb = require('imgbb-uploader')
const Math_js = require('mathjs')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const speed = require('performance-now')
const hx = require('hxz-api')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { fetchJson } = require('./lib/fetcher')
const { uploadimg, upload } = require('./lib/uploadimg')
const { webp2mp4File } = require('./lib/webp2mp4')
const { lirikLagu } = require('./lib/lirik.js')
const { wikiSearch } = require('./lib/wiki.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { mediafireDl } = require('./lib/mediafire.js')
const { dafontSearch, dafontDown } = require('./lib/dafont.js')
const { menunya } = require('./database/menu')
const { pinterest } = require('./lib/pinterest')
const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp')
const { yta, ytv, buffer2Stream, ytsr, baseURI, stream2Buffer, noop } = require('./lib/ytdl')
const { getBuffer, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const client = new WAConnection()

// STICKER WM
//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

// DATABASE
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const ban = JSON.parse(fs.readFileSync('./database/banned.json'))
let antiviewonce = JSON.parse(fs.readFileSync('./database/antiviewonce.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/tictactoe.json"))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user.json'))
const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./database/mute.json'))
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const kickarea = JSON.parse(fs.readFileSync('./database/kickarea.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))

ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
cmhit = []
autorespon = false
music = false
antidelete = false
baterai = {
battery: "" || "Tidak Terdeteksi",
isCharge: "" || false
}
offline = false
publik = true
waktuafk = 'Nothing'
alasanafk = 'Nothing'
blocked = []
NomorOwner = settings.NomorOwner
NamaOwner = settings.NamaOwner
NamaBot = settings.NamaBot
multi = true
nopref = false

// APIKEY
HunterApi = settings.HunterApi
ZeksApi = settings.ZeksApi
si0ren = 'OrenKeyyy'
zerkey = settings.zerkey


const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const tanggall = moment.tz('Asia/Jakarta').format('DD-MM') + '-2021'
const jamss = moment.tz('Asia/Jakarta').format('HH:mm')
 const waktuu = moment.tz('Asia/Jakarta').format('HHmmss')

function kyun(seconds) {
	function pad(s) {
		return (s < 10 ? '0' : '') + s;
	}
	var hours = Math.floor(seconds / (60 * 60));
	var minutes = Math.floor(seconds % (60 * 60) / 60);
	var seconds = Math.floor(seconds % 60);

	//return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
	return `${pad(hours)}Jam ${pad(minutes)}Menit ${pad(seconds)}Detik`
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function parseMention(text = '') {
        return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
function waktu(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDis = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDis = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDis = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDis = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDis + hDis + mDis + sDis;
}
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('10m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
		const ovo = (teks) => {
				xbot.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "📲 QRCODE OVO 📲",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/xbot.jpg'),sourceUrl:"https://bit.ly/ScanDisini"}}})
		}
		const dana = (teks) => {
				xbot.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "📲 QRCODE DANA 📲",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/xbot.jpg'),sourceUrl:"https://bit.ly/ScanDisini"}}})
		}
		const gopay = (teks) => {
				xbot.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "📲 QRCODE GOPAY 📲",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/image/xbot.jpg'),sourceUrl:"https://bit.ly/ScanDisini"}}})
		}
		const sendMess = (hehe, teks) => {
			xbot.sendMessage(hehe, teks, text, { quoted: tok, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
client.on('group-participants-update', async (anu) => {
	if (!welkom.includes(anu.jid)) return
	try {
	const mdata = await client.groupMetadata(anu.jid)
	console.log(anu)
	if (anu.action == 'add') {
	num = anu.participants[0]
	try {
	ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
	} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `Hello @${num.split('@')[0]}! Selamat datang\ndiGrup *${mdata.subject}` // [ √ ] Welcome Text
	let buff = await getBuffer(ppimg)
	client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	} else if (anu.action == 'remove') {
	num = anu.participants[0]
	try {
	ppimg = await client.getProfilePicture(`${num.split('@')[0]}@c.us`)
	} catch {
	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	teks = `Goodbye @${num.split('@')[0]}!` // [ √ ] Leave Text
	let buff = await getBuffer(ppimg)
	client.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
	}
	} catch (e) {
	console.log('ERROR : %s', color(e, 'red'))
	}
	})
module.exports = xbot = async (xbot, mek) => {
try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
	    if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
	    if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3 && bugc && !mek.key.fromMe) {
		nums = mek.participant
        longkapnye = "TANDAI TELAH DIBACA\n".repeat(200)
        tekuss = `\`\`\`TANDAI TELAH DIBACA !!!\`\`\`${longkapnye}\`\`\`@⁨${nums.split('@')[0]} Terdeteksi Telah Mengirim Bug, @⁨${nums.split('@')[0]} Akan Dikick!\`\`\`\n`
        xbot.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
        xbot.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
        }
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const typei = Object.keys(mek.message)[0]
		global.prefix
		global.blocked
		me = xbot.user
		m = simple.smsg(xbot, mek)
		const antibot = m.isBaileys
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
		xbot.on("CB:action,,battery", json => {
	    const battery = json[2][0][1].value
	    const persenbat = parseInt(battery)
	    baterai.battery = `${persenbat}%`
	    baterai.isCharge = json[2][0][1].live
	    })
	    client.on('CB:Blocklist', json => {
  if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})
	    if (multi){
		    var prefix = /^[°#$+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
        isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
	    isStc = `${isStc}`
        const isStcQ = isStc !== "" && content.includes("extendedTextMessage") ||
        isStc !== "" && content.includes("conversation")
        const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""

		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''

		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const dfrply = fs.readFileSync('./media/image/xbot.jpg')
		cmhit.push(command)
        mess = {
			wait: '*「❗」 Sabar yah Permintaan Sedang di Proses*',
			success: 'Nah Sukses nih',
			error: {
				stick: 'Cannot access videos!',
				Iv: 'Invalid link!',
                api: 'Error ada Kesalahan dalam Penginstalan Bot'
			},
			only: {
				group: '*「❗」 Error, Hanya  Bisa di Gunakan Dalam Grup*',
				ownerG: '*「❗」 Error, Hanya  Bisa di Gunakan Oleh Owner Grup*',
				ownerB: '*「❗」 Error, Hanya  Bisa di Gunakan Oleh Owner Bot*',
				admin: '*「❗」 Error, Hanya  Bisa di Gunakan Oleh Admin Grup*',
				Badmin: '*「❗」 Error, Hanya  Bisa di Gunakan Ketika Bot jadi Admin Grup*',
			}
		}
		const botNumber = xbot.user.jid
		const ownerNumberr = [`${NomorOwner}@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? xbot.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0] 
		const conts = mek.key.fromMe ? xbot.user.jid : xbot.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? xbot.user.name : conts.notify || conts.vname || conts.name || '-'
		const totalchat = await xbot.chats.all()
		const groupMetadata = isGroup ? await xbot.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const isOwner = ownerNumberr.includes(sender)
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isKickarea = isGroup ? kickarea.includes(from) : false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isAuto = isGroup ? autosticker.includes(from) : false
		const isMuted = isGroup ? mute.includes(from) : false
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isAntiVO = isGroup ? antiviewonce.includes(from) : false	
		const isUrl = (url) => {
		return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (antibot === true) return
		const katalog = (teks) => {
             res = xbot.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 321, "message": teks, "footerText": "*@panggilajaal._*", "thumbnail": ofrply, "surface": 'CATALOG' }}, {quoted:ftrol})
             xbot.relayWAMessage(res)
        }
        const grupinv = (teks) => {
        	grup = xbot.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6JhzTvlmEor8Zz23fHx', "groupName": `${NamaBot}`, "footerText": "*@panggilajaal._*", "jpegThumbnail": ofrply, "caption": teks}}, {quoted:finv})
            xbot.relayWAMessage(grup)
        }
		idttt = []
	    ers1 = []
	    ers2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    ers1.push(t.er1)
	    ers2.push(t.er2)
	    gilir.push(t.gilir)
	    }
	    const isTTT = isGroup ? idttt.includes(from) : false
	    iser1 = isGroup ? ers1.includes(sender) : false
        iser2 = isGroup ? ers2.includes(sender) : false
		try {
		pporang = await xbot.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)
		const thubb = fs.readFileSync('./media/image/xbot.jpg')
		const sekarang = new Date().getTime();
			//-

			//WAKTU
			var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Malam"; break;
                case 1: jamss = "Malam"; break;
                case 2: jamss = "Malam"; break;
                case 3: jamss = "Malam"; break;
                case 4: jamss = "Malam"; break;
                case 5: jamss = "Subuh"; break;
                case 6: jamss = "Pagi"; break;
                case 7: jamss = "Pagi"; break;
                case 8: jamss = "Pagi"; break;
                case 9: jamss = "Pagi"; break;
                case 10: jamss = "Pagi"; break;
                case 11: jamss = "Sore"; break;
                case 12: jamss = "Zuhur"; break;
                case 13: jamss = "Sore"; break;
                case 14: jamss = "Sore"; break;
                case 15: jamss = "Sore"; break;
                case 16: jamss = "Sore"; break;
                case 17: jamss = "Sore"; break;
                case 18: jamss = "Malam"; break;
                case 19: jamss = "Malam"; break;
                case 20: jamss = "Malam"; break;
                case 21: jamss = "Malam"; break;
                case 22: jamss = "Malam"; break;
                case 23: jamss = "Malam"; break;
            }
            var tampilUcapan = "" + jamss;
            const jmn = moment.tz('Asia/Jakarta').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })

 // FAKE REPLY BY YOGI PEWE
//STATUS
const sendreply = (from, teks, faketeks) => {
				xbot.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fs.readFileSync('./media/image/xbot.jpg'), surface: 200, message: `Xbot`, orderTitle: `Xbot`, sellerJid: '0@s.whatsapp.net'}}}, contextInfo: { forwardingScore: 508, isForwarded: true }})

			}
// PRODUCT
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": dfrply //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `${tampilUcapan} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${tampilUcapan} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
   participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${tampilUcapan} ${pushname}`, //Kasih namalu
                            orderTitle: `${tampilUcapan} ${pushname}`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
//Kalkulator cara makek nya awali = angka (+*-)
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `Project xbot`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}

// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "1",
                 "ptt": "true"
                        }
	                  } 
                     }
const sendBug = async (target) => {
      await xbot.relayWAMessage(
        xbot.prepareMessageFromContent(
          target,
          xbot.prepareDisappearingMessageSettingContent(0),
          {}
        ),{ waitForAck: true }) 
    }
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
xbot.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//Button ocument
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await xbot.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
xbot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xbot.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
xbot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await xbot.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
xbot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await xbot.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
xbot.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
 if (!mek.key.remoteJid.endsWith('@g.us') && offline){
			if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
			heheh = ms(Date.now() - waktuafk)
		  sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*@panggilajaal._*", [{buttonId: 'simi', buttonText: {disText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
			}
		}
		if (mek.key.remoteJid.endsWith('@g.us') && offline) {
			if (!mek.key.fromMe){
				if (mek.message.extendedTextMessage != undefined){
					if (mek.message.extendedTextMessage.contextInfo != undefined){
						if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
				for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
					if (ment === xbot.user.jid){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
						heheh = ms(Date.now() - waktuafk)
			       sendButMessage(from, `Hai ${pushname}, Maaf sepertinya saat ini ${NamaOwner} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`, "*@panggilajaal._*", [{buttonId: 'simi', buttonText: {disText: 'Oke'}, type: 1}], {quoted:ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
				}
						}
					}
				}
			}
		}
	
		const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./temp/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					xbot.sendMessage(to, media, sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker'))
					});
					});
				});
			}
        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        xbot.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
            const sendKontak = (from, nomor, nama) => {
	        const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${NamaBot}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        xbot.sendMessage(from, { disname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
            }
            const hideTagKontak = async function(from, nomor, nama){
	        let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	        let anu = await xbot.groupMetadata(from)
	        let members = anu.participants
	        let ane = []
	        for (let i of members){
		    ane.push(i.jid)
	        }
	        xbot.sendMessage(from, { disname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
            }
				const reply = (teks) => {
			xbot.sendMessage(from, teks, text, { thumbnail: dfrply, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Hai ${pushname}`,body:"",previewType:"PHOTO",thumbnail:ofrply,sourceUrl:`https://wa.me/6285158060230?text=Halo Owner Xbot`}}})
		}
		const simir = (teks) => {
			xbot.sendMessage(from, teks, text, { quoted:ftrol })
		}
		const math = (teks) => {
				return Math.floor(teks)
}
		const sendMess = (hehe, teks) => {
			xbot.sendMessage(hehe, teks, text, { quoted: ftok, contextInfo: { forwardingScore: 508, isForwarded: true}})
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? xbot.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : xbot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
		}
		const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
xbot.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
xbot.sendMessage(from, hasil, type, options).catch(e => {
xbot.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}

  const sendMediaURL = async(to, url, text="", mids=[]) =>{
				if(mids.length > 0){
					text = normalizeMention(to, text, mids)
				}
				const fn = Date.now() / 10000;
				const filename = fn.toString()
				let mime = ""
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						mime = res.headers['content-type']
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, filename, async function () {
					console.log('done');
					let media = fs.readFileSync(filename)
					let type = mime.split("/")[0]+"Message"
					if(mime === "image/gif"){
						type = MessageType.video
						mime = Mimetype.gif
					}
					if(mime.split("/")[0] === "audio"){
						mime = Mimetype.mp4Audio
					}
					xbot.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
					
					fs.unlinkSync(filename)
				});
			}
		   const sendFakeThumb = async function(from, url, title, desc){
				var anoim = {
					detectLinks: false
				}
				var qul = await xbot.generateLinkPreview(url)
				qul.title = title
				qul.description = desc
				qul.jpegThumbnail = dfrply
				xbot.sendMessage(from, qul, MessageType.extendedText, anoim)
			}
			function Json(objectPromise) {
var objectString = JSON.stringify(objectPromise, null, 2)
var parse = util.format(objectString)
if (objectString == undefined) {
parse = util.format(objectPromise)
}
return reply(parse)
}
            function speedText(speed) {
                let bits = speed * 8;
                const units = ['', 'K', 'M', 'G', 'T'];
                const places = [0, 1, 2, 3];
                let unit = 0;
                while (bits >= 2000 && unit < 4) {
                    unit++;
                    bits/= 1000;
                }
                return `${bits.toFixed(places[unit])} ${units[unit]}bps`;
            } 
           if (budy.startsWith('>')){
if (!isOwner)return reply(`Perintah ini tidak bisa Di lakukan oleh Jadibot sementara`)
console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Eval V1 brooo`))
ras = budy.slice(1)
function _(rem) {
ren = JSON.stringify(rem,null,2)
pes = util.format(ren)
reply(pes)
}
try{c
reply(require('util').format(eval(`(async () => { ${ras} })()`)))
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('x')){
if (!mek.key.fromMe && !isOwner) return
try {
return xbot.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.startsWith('=>')){
if (!isOwner && !mek.key.fromMe) return
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
			// AUTO
			for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					xbot.sendMessage(from, result, sticker, { quoted: fvid, contextInfo: { forwardingScore: 508, isForwarded: true }})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					xbot.sendMessage(from, result, image, { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					}
			}
			    //AUTO RESPON
      stod = `${sender}`
      for (let i = 0; i < commandsDB.length ; i++) {
      if (budy == commandsDB[i].pesan) {
      xbot.sendMessage(from, commandsDB[i].balasan, text, {sendEphemeral: true, quoted: fvid, contextInfo: { forwardingScore: 600, isForwarded: true, mentionedJid : [stod]}})
      
      
      }
      }
			// MUTE
        if (isMuted){
            if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }
        if (budy.includes("https://chat.whatsapp.com/")) {
        	if (!mek.key.fromMe){
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				xbot.updatePresence(from, Presence.composing)
				reply('*L I N K  T E R D E T E K S I*\nWahh Nakal sekaliii, Grup ini Sudah dipasang Antilink yak..,\n Good Bye Untukmu..👋🏻')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
			    xbot.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}

}

			if (bad.includes(messagesD)) {
kntl = `${args.join(' ')}`
nama = ("TOXIC DETEECTED")
impostor = ("Tobat Bang😔")
xbot.sendMessage(from, { degreesLatitude: 21.422487, degreesLongitude: 39.826206,
name: nama,
address: impostor,
jpegThumbnail: fs.readFileSync('./media/image/xbot.jpg')}, MessageType.liveLocation, {quoted:floc})
}
if (m.message && !m.key.fromMe && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
m.reply('Troli Detected\n\n' + require('util').format(m.key))
await xbot.modifyChat(m.chat, 'delete', {
 includeStarred: false
})
}
if (!isGroup && !isCmd && !command && !mek.key.fromMe && !autorespon) {
numd = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})
	simi = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
                     sami = simi.success
                        xbot.sendMessage(from, `AUTO RESPON\n${sami}`, text, {thumbnail: ofrply, sendEphemeral: true, quoted:mek, contextInfo : {forwardingScore: 508, isForwarded: true}})
                      }
if (!settings.autoread) {
xbot.chatRead(from)
}
if (!settings.autocomposing) {
xbot.updatePresence(from, Presence.composing)
}
if (!settings.autorecording) {
xbot.updatePresence(from, Presence.recording)
}
   const sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]

        const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
	    const isStcVideo = isStcMedia && content.includes("videoMessage")
	    const isStcImage = isStcMedia && content.includes("imageMessage")
	    const isStcSticker = isStcMedia && content.includes("stickerMessage")
        const isStcTeks = isStcMedia && content.includes("quotedMessage")
        const isStcDocs = isStcMedia && content.includes("documentMessage")
        const isStcContact = isStcMedia && content.includes("contactMessage")
        const isStcAudio = isStcMedia && content.includes("audioMessage")
        const isStcLoca = isStcMedia && content.includes("locationMessage")
        const isStcTag = isStcMedia && content.includes("mentionedJid")
        const isStcReply = isStcMedia && content.includes("Message")
        const isStcProd = isStcMedia && content.includes("productMessage")
       
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
	    if (isCmd && !isGroup) {console.log(color('|CMD|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
	    if (!command) {console.log(color('|MSG|', 'greenyellow'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
		
        switch (isStc) {
     case "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf":
        if (!isStcSticker) return reply('Reply stickernya!')
        su = mek.message.stickerMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('hex')
        reply(su)
				}
        switch (command) {
case 'welkam':
reply('Selamat datang! baca desk ya. Ketik *.menu* untuk melihat menu bot')
break
case 'malahkeluar':
reply('Dadah! jangan balik lagi ya akwowkwok:v')
break  
case 'deleteee':
reply('ANTI DELETE NYALA')
break
  case 'menu':
  case 'help':
  case 'h':
  case 'm':
  case 'ngakak':
  stod = `${sender}`
   stst = await xbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
  menu = `Hai Kak ${pushname}👋🏻!

╭─⬣ 「 User Info 」 ⬣
│🔖Status : ${isOwner ? 'Owner' : 'User'}
│🔖Nama :pushname
│🔖Bio : ${stst}
│🔖Nomor : @${stod.split('@')[0]}
└⬣

Klik Button Dibawah Untuk Melihat Menu!
*NOTE : Jika anda pengguna WHATSAPP MOD ketik .allmenu Terimakasih*`
  sendButLocation(from, `${menu}`, `@panggilajaal._`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}command`,buttonText:{displayText:'MENU 📒'},type:1},{buttonId:`${prefix}owner`,buttonText:{displayText:'OWNER 👤'},type:1},{buttonId:`${prefix}sc`,buttonText:{displayText:'SCRIPT 🌹'},type:1}], {contextInfo: { mentionedJid: [dtod,otod,stod]}})
break
  case 'allmenu':
        ptod = "6285158060230@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await xbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
tescok = `${menunya(prefix)}`
Sendbutdocument(from, tescok, "*@panggilajaal._*", fs.readFileSync('./media/pedeef.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/image/xbot.jpg'), filename:`pedeef.pdf`, pageCount: 9999999 }, [{buttonId:`${prefix}sc`,buttonText:{displayText:'SCRIPT'},type:1}], {quoted:fvid, contextInfo: { mentionedJid: [dtod,otod,stod], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`${tampilUcapan} - ${pushname}\nFollow Instagram`,mediaType:"2",thumbnail:ofrply,mediaUrl:`https://instagram.com/panggilajaal._`}}})
break
case 'command':
case 'cmd':
stod = `${sender}`
stst = await xbot.getStatus(`${sender.split('@')[0]}@c.us`)
 listMsg = {
 title : `Hai kak ${pushname}👋🏻`,
 buttonText: '⎙ MENU DISNI',
 footerText: '@panggilajaal._',
 description: `╭─⬣ 「 User Info 」 ⬣
│🔖Status : ${isOwner ? 'Owner' : 'User'}
│🔖Nama :pushname
│🔖Bio : ${stst}
│🔖Nomor : @${stod.split('@')[0]}
└⬣  
Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          {
                              "title": "ownermenu",
                              "rowId": "Klik untuk memilih menu OWNER"
                           },
                           {
                              "title": "groupmenu",
                              "rowId": "Klik untuk memilih menu GROUP"
                           },
                           {
                              "title": "downloadmenu",
                              "rowId": "Klik untuk memilih menu DOWNLOAD"
                           },
                           {
                              "title": "makermenu",
                              "rowId": "Klik untuk memilih menu MAKER"
                           },
                           {
                              "title": "imagemaker",
                              "rowId": "Klik untuk memilih menu IMAGE MAKER"
                           },
						   {
                              "title": "storagemenu",
                              "rowId": "Klik untuk memilih menu STORAGE"
                           },
						   {
                              "title": "othermenu",
                              "rowId": "Klik untuk memilih menu OTHER"
                           }
                        ]
                     }],
 listType: 1
}

xbot.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fvid})
break
case 'ownermenu':
menu = `〔 🙋‍♂️ 𝐎𝐖𝐍𝐄𝐑 🙋‍♂️〕

> ⬡ ${prefix}autorespon [ on/off ]
> ⬡ ${prefix}bc [ teks/reply gif/image/video with caption ]
> ⬡ ${prefix}tobc [ reply sticker/audio with caption ]
> ⬡ ${prefix}return [ javascript ]
> ⬡ ${prefix}clearall
> ⬡ ${prefix}delchat
> ⬡ ${prefix}mute
> ⬡ ${prefix}unmute
> ⬡ ${prefix}public
> ⬡ ${prefix}self
> ⬡ ${prefix}spam [ teks|jumlah ]
> ⬡ ${prefix}demoteall
> ⬡ ${prefix}promoteall
> ⬡ ${prefix}addcmd [ teks reply stc ]
> ⬡ ${prefix}delcmd [ reply stc ]
> ⬡ ${prefix}listcmd
> ⬡ ${prefix}spamsw [ teks|jumlah ]
> ⬡ ${prefix}upswteks [ teks ]
> ⬡ ${prefix}upswlokasi [ teks ]
> ⬡ ${prefix}upswaudio [ reply audio ]
> ⬡ ${prefix}upswvoice [ reply audio ]
> ⬡ ${prefix}upswsticker [ reply sticker ]
> ⬡ ${prefix}upswimage [ reply image with caption ]
> ⬡ ${prefix}upswgif [ reply gif with caption ]
> ⬡ ${prefix}upswvideo [ reply video with caption ]
> ⬡ ${prefix}shutdown
> ⬡ ${prefix}offline [ alasan ]
> ⬡ ${prefix}online
> ⬡ ${prefix}exif [ nama|author ]
> ⬡ ${prefix}setprofile [ reply image ]
> ⬡ ${prefix}setname [ teks ]
> ⬡ ${prefix}setprefix [ multi/nopref ]
> ⬡ ${prefix}setbio [ teks ]
> ⬡ ${prefix}leave
> ⬡ ${prefix}restart
> ⬡ ${prefix}join [ link group ]
> ⬡ ${prefix}addrespon [ tanya|jawab ]
> ⬡ ${prefix}delrespon [ nama ]
> ⬡ ${prefix}q [ reply message ]` 
katalog(menu)
break
case 'downloadmenu':
menu = `〔 📲 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 📲〕

> ⬡ ${prefix}infogempa
> ⬡ ${prefix}herolist
> ⬡ ${prefix}herodetail [ hero ]
> ⬡ ${prefix}google [ search ]
> ⬡ ${prefix}gimage [ search ]
> ⬡ ${prefix}wiki [ search ]
> ⬡ ${prefix}mediafire [ link ]
> ⬡ ${prefix}ytsearch [ judul ]
> ⬡ ${prefix}ytmp4 [ link yt ]
> ⬡ ${prefix}ytmp3 [ link yt ]
> ⬡ ${prefix}lirik [ judul lagu ]
> ⬡ ${prefix}video [ judul video ]
> ⬡ ${prefix}tinyurl [ link ]
> ⬡ ${prefix}fetch [ link ]
> ⬡ ${prefix}igdl [ link ]
> ⬡ ${prefix}tiktokdl [ link ]
> ⬡ ${prefix}pinterest [ search ]
> ⬡ ${prefix}lirik [ judul ]
> ⬡ ${prefix}tourl [ reply image/video ]
> ⬡ ${prefix}resepmasakan [ judul ]
> ⬡ ${prefix}bilangangka [ angka ]
> ⬡ ${prefix}kalkulator [ angka ]
> ⬡ ${prefix}fancytext [ teks ]
> ⬡ ${prefix}githubstalk [ username ]
> ⬡ ${prefix}translate [ kodebhs|teks ]
> ⬡ ${prefix}ss [ link ]
> ⬡ ${prefix}tiktokaudio [ link ]
> ⬡ ${prefix}igstory [ link ]
> ⬡ ${prefix}linkwa
> ⬡ ${prefix}store [ query ]
> ⬡ ${prefix}fb [ link ]
> ⬡ ${prefix}twitter [ link ]`
katalog(menu)
break
case 'makermenu':
menu = `〔 🖼 𝐌𝐀𝐊𝐄𝐑 🖼〕

> ⬡ ${prefix}foliokiri 「 text 」
> ⬡ ${prefix}foliokanan 「 text 」
> ⬡ ${prefix}nulis 「 text 」
> ⬡ ${prefix}nuliskanan 「 text 」
> ⬡ ${prefix}nuliskiri 「 text 」
> ⬡ ${prefix}tahta 「 text 」
> ⬡ ${prefix}gold 「 text 」
> ⬡ ${prefix}maker2d2 「 text 」
> ⬡ ${prefix}maker2d3 「 text 」
> ⬡ ${prefix}maker2d4 「 text 」
> ⬡ ${prefix}maker3d 「 text 」
> ⬡ ${prefix}maker3d2 「 text 」
> ⬡ ${prefix}maker3d3 「 text 」
> ⬡ ${prefix}maker3d4 「 text 」
> ⬡ ${prefix}transformer 「 text 」
> ⬡ ${prefix}googletxt 「 text 」
> ⬡ ${prefix}battlefield 「 text 」
> ⬡ ${prefix}coffeecup 「 text 」
> ⬡ ${prefix}coffeecup2 「 text 」
> ⬡ ${prefix}neon 「 text 」
> ⬡ ${prefix}glow 「 text 」
> ⬡ ${prefix}summer 「 text 」
> ⬡ ${prefix}flower 「 text 」
> ⬡ ${prefix}burn 「 text 」
> ⬡ ${prefix}quote 「 text 」
> ⬡ ${prefix}wooden 「 text 」
> ⬡ ${prefix}golden 「 text 」`
katalog(menu)
break
case 'imagemaker':
menu = `〔 🖼 𝐈𝐌𝐀𝐆𝐄 𝐌𝐀𝐊𝐄𝐑 🖼〕
> ⬡ ${prefix}rip [gambar]
> ⬡ ${prefix}3000years [gambar]
> ⬡ ${prefix}rejected [gambar]
> ⬡ ${prefix}approved [gambar]
> ⬡ ${prefix}glitch [gambar]
> ⬡ ${prefix}beautiful [gambar]
> ⬡ ${prefix}wanted [gambar]
> ⬡ ${prefix}utatoo [gambar]
> ⬡ ${prefix}wasted [gambar]
> ⬡ ${prefix}scary [gambar]
> ⬡ ${prefix}igm [gambar]
> ⬡ ${prefix}sniper [gambar]
> ⬡ ${prefix}redple [gambar]
> ⬡ ${prefix}ps4 [gambar]
> ⬡ ${prefix}missionpassed [gambar]
> ⬡ ${prefix}lwkh [gambar]
> ⬡ ${prefix}spongebob [gambar]
> ⬡ ${prefix}patrick [gambar]
> ⬡ ${prefix}stonk [gambar]
> ⬡ ${prefix}notstonk [gambar]
> ⬡ ${prefix}dictator [gambar]
> ⬡ ${prefix}deepfry [gambar]
> ⬡ ${prefix}dungeon [gambar]
> ⬡ ${prefix}sampah [gambar]`
katalog(menu)
break  
case 'groupmenu':
menu = `〔 👥 𝐆𝐑𝐎𝐔𝐏 👥〕

> ⬡ ${prefix}getpict [ @tag ]
> ⬡ ${prefix}getname [ reply target ]
> ⬡ ${prefix}getbio [ reply target ]
> ⬡ ${prefix}promote [ @tag ]
> ⬡ ${prefix}demote [ @tag ]
> ⬡ ${prefix}antilink [ 1/0 ]
> ⬡ ${prefix}creategrup [ nama|@tag ]
> ⬡ ${prefix}tictactoe [ @tag ]
> ⬡ ${prefix}delttt
> ⬡ ${prefix}getpp
> ⬡ ${prefix}kick [ @tag ]
> ⬡ ${prefix}add [ nomor ]
> ⬡ ${prefix}kik [ Reply Pesan Target ]
> ⬡ ${prefix}ad [ Reply Pesan Target ]
> ⬡ ${prefix}getdeskgc
> ⬡ ${prefix}sider [ reply pesan bot ]
> ⬡ ${prefix}hacked [ teks ]
> ⬡ ${prefix}setnamegc [ teks ]
> ⬡ ${prefix}setdeskgc [ teks ]
> ⬡ ${prefix}fitnah [ @tag|teks1|teks2 ]
> ⬡ ${prefix}kontak [ @tag|nama ]
> ⬡ ${prefix}kontag [ @tag|nama ]
> ⬡ ${prefix}opengc
> ⬡ ${prefix}closegc
> ⬡ ${prefix}resetlinkgc
> ⬡ ${prefix}linkgrup
> ⬡ ${prefix}listonline
> ⬡ ${prefix}listadmin
> ⬡ ${prefix}hidetag [ teks ]
> ⬡ ${prefix}sticktag [ nama sticker ]
> ⬡ ${prefix}totag [ reply media ]`
katalog(menu)
case 'storagemenu':
menu = `〔 🗿 𝐒𝐓𝐎𝐑𝐀𝐆𝐄 🗿〕

> ⬡ ${prefix}addsticker [ nama ]
> ⬡ ${prefix}delsticker [ nama ]
> ⬡ ${prefix}addvn [ nama ]
> ⬡ ${prefix}delvn [ nama ]
> ⬡ ${prefix}addimage [ nama ]
> ⬡ ${prefix}delimage [ nama ]
> ⬡ ${prefix}listimage
> ⬡ ${prefix}liststicker
> ⬡ ${prefix}listvn`
katalog(menu)
break
case 'othermenu':
menu = `〔 🎮 𝐆𝐀𝐌𝐄 🎮〕

> ⬡ ${prefix}caklontong
> ⬡ ${prefix}ttt [tag 1 pemain]
> ⬡ ${prefix}truth
> ⬡ ${prefix}dare
> ⬡ ${prefix}slots
> ⬡ ${prefix}suit [ gunting/batu/kertas ]

〔 🌚 𝐊𝐄𝐑𝐀𝐍𝐆 🌚〕
> ⬡ ${prefix}kapankah
> ⬡ ${prefix}bisakah
> ⬡ ${prefix}cekganteng
> ⬡ ${prefix}cekcantik
> ⬡ ${prefix}pintarcek

〔 📚 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 📚〕

> ⬡ ${prefix}sticker
> ⬡ ${prefix}stickerwm [ nama|author ]
> ⬡ ${prefix}takestick [ nama|author ]
> ⬡ ${prefix}colong [ reply sticker ]
> ⬡ ${prefix}stext [text]
> ⬡ ${prefix}stext2 [teks 1|teks 2]
> ⬡ ${prefix}semoji [ emoji ]
> ⬡ ${prefix}attp [ teks ]
> ⬡ ${prefix}ttpyellow [teks]
> ⬡ ${prefix}ttpgreen [teks]
> ⬡ ${prefix}ttpblue [teks]
> ⬡ ${prefix}ttpred [teks]
> ⬡ ${prefix}dadu


〔 ⚙ 𝐓𝐎𝐎𝐋𝐒 ⚙〕
> ⬡ ${prefix}toimg
> ⬡ ${prefix}tomp3 [ reply video ]
> ⬡ ${prefix}robot [ reply audio ]
> ⬡ ${prefix}balik [ reply audio ]
> ⬡ ${prefix}bass [ reply audio ]
> ⬡ ${prefix}gemuk [ reply audio ]
> ⬡ ${prefix}detikvn [ reply audio caption angka ]
> ⬡ ${prefix}detikvideo [ reply video caption angka ]
> ⬡ ${prefix}tts [ kodebhs teks ]

〔 😱 𝐏𝐑𝐈𝐌𝐁𝐎𝐍 😱〕
> ⬡ ${prefix}artimimpi [ teks ]
> ⬡ ${prefix}artinama [nama]
> ⬡ ${prefix}artizodiak [zodiak]

〔 🧶 𝐎𝐓𝐇𝐄𝐑 🧶〕

> ⬡ ${prefix}caripesan [ teks|jumlah ]
> ⬡ ${prefix}tag [ nomor ]
> ⬡ ${prefix}tagme
> ⬡ ${prefix}readmore [ teks1|teks2 ]
> ⬡ ${prefix}fitnahpc [ nomor|teks1|teks2 ]
> ⬡ ${prefix}chat [ nomor|teks ]
> ⬡ ${prefix}listgrup
> ⬡ ${prefix}baileys [ reply message ]
> ⬡ ${prefix}getcaption [ reply message ]
> ⬡ ${prefix}tospam [ reply audio/sticker/image|jumlah ]
> ⬡ ${prefix}sharelock [ teks1|teks2 ]`
katalog(menu)
break
case 'sc':
reply('PRIVATE🤭')
break
case 'iggw':
reply('https://instagram.com/panggilajaal._\n\n Itu kak ig ku! jangan lupa follow ya!:)')
break			   
//// PEMBATAS MENU OWNER
case 'ban':
				if (!isOwner && !mek.key.fromMe) return reply(mess.own)
				bnnd = body.slice(5)
				ban.push(`${args[0].replace('@','')}@s.whatsapp.net`)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				reply(`Berhasil membanned nomor : wa.me/${bnnd} `)
				break
case 'unban': 
					if (!isOwner && !mek.key.fromMe) return reply(mess.own)    
					delp = body.slice(7)
					ban.splice(`${delp}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Berhasil Menghapus wa.me/${delp} dari banned`)
					break
case 'listban':
		case 'banlist':
					teks = '*List Ban:*\n\n'
					for (let manikgans of ban) {
						teks += `- ${manikgans}\n`
					}
					teks += `\n*Total : ${ban.length}*`
					xbot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": ban } })
					break
case 'delchat':
   if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
reply('Sukses menghapus chat' + from)
await (4000)
xbot.modifyChat(from, ChatModification.delete)
break
case 'creategroup':
			case 'creategrup':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					xbot.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
case 'culik':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Masukin ID Groupnya!')
let awok = []
for (let i of groupMembers) {
awok.push(i.jid)
}
xbot.groupAdd(args[0], awok)
break
case 'tobc':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				xbot.updatePresence(from, Presence.composing)
					anu = await xbot.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							xbot.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							xbot.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          reply('reply sticker/audio')
							}
					break
case 'clearall':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					anu = await xbot.chats.all()
					xbot.setMaxListeners(26)
					for (let _ of anu) {
						xbot.deletechat(_.jid)
					}
					reply('Sukses membersihkan semua pesan')
					break

case 'mute':
			    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
reply(`_Restarting ${NamaBot}_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
case 'exif':
   case 'setexif':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
				break
case 'addrespon':{
          if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
          }
      break
      case 'dellrespon':
      case 'delrespon':{
          if (!isOwner && !mek.key.fromMe) return reply(mess.owner)
            if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          }
      break
        case 'listrespon':{
          let txt = `List Respon\nTotal : ${commandsDB.length}\n\n`
          for (let i = 0; i < commandsDB.length; i++){
          txt += `❏ Key : ${commandsDB[i].pesan}\n`
          }
          reply(txt)
          }
        break
case 'setbio':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					xbot.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'setname':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                xbot.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
case 'online':
            if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				offline = true
                waktuafk = Date.now()
                anuu = body.slice(9) ? body.slice(9) : '-'
                alasanafk = anuu
				reply('Fitur OFFLINE diaktifkan')
				break
case 'bc':
					xbot.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Teksnya?')
					anu = await xbot.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							xbot.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							xbot.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							xbot.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `menu`, buttonText: {displayText: '⎙ MENU DISNI'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'PEMBUAT BOT'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: 'Broadcast Xbot © 2021',
    buttons: buttons,
    headerType: 1
}
await xbot.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
case 'bcaudio':
					if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())
					anu = await xbot.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await xbot.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							xbot.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 8, ptt : true})
						}
						reply(`Sukses Bc Audio`)
					}
					break
               case 'spamsw':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					xbot.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				case 'upswteks':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    xbot.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    xbot.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NamaBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xbot.downloadMediaMessage(encmedia)
						xbot.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xbot.downloadMediaMessage(encmedia)
						xbot.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 234})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await xbot.downloadMediaMessage(encmedia)
						xbot.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 234, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await xbot.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    xbot.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 234, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xbot.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    xbot.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await xbot.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    xbot.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					case 'shutdown':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				return xbot.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
case 'setprofile':
				case 'setpp':
				xbot.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					enmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await xbot.downloadAndSaveMediaMessage(enmediau)
					await xbot.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
case 'getscmd':
duda = fs.readFileSync('sticker/menu.webp')
xbot.sendMessage(from, duda, sticker, {quoted: mek})
			  break
				case 'public':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
			publik = true
				reply('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				publik = false
				reply('Sukses mengubah mode public ke self')
			break
         case 'autorespon':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Penggunaan ${prefix}autorespon on/off`)
           if (c === 'on'){
              autorespon = false
                    reply(`Berhasil mengaktifkan autorespon`)
                } else if (c === 'off'){
                    autorespon = true
                    reply(`Berhasil menonaktifkan autorespon`)
                } else {
                    reply(mess.error.api)
                }
                break
                case 'setprefix':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = true
                    nopref = false
                    prefa = `${c}`
                    reply(`Berhasil mengubah prefix ke ${c}`)
                }
                break
                case 'addcmd': 
case 'setcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (isQuotedSticker) {
if (!c) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, c)
reply("Done Bwang")
} else {
reply('tag stickenya')
}
break
case 'delcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
reply("Done Bwang")
break
case 'listcmd':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
let teksnyee = `\`\`\`「 LIST CMD STICK 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*⬣ ID :* ${i.id}\n*⬣ Cmd :* ${i.chats}`
}
reply(teksnyee)
break
//// PEMBATAS MENU OWNER \\\
//// PEMBATAS MENU GRUP \\\
case 'welcome':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (args.length < 1) return reply('[ ! ] ```Contoh``` › *.welcome 1/0*')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('[ ! ] ```AKTIF``` › Fitur Telah Aktif')
welkom.push(from)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('[ ! ] ```AKTIF``` › Fitur Telah Aktif')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./database/welkom.json', JSON.stringify(welkom))
reply('[ ! ] ```DISABLE``` › Fitur Telah Nonaktif')
} else {
reply('[ ! ] ```Cara penggunaan:```\n\n*› !welcome 1* - Mengaktifkan\n*› !welcome 0* - Menonaktifkan')
}
break
case 'spam':
   case 'spamtext':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 5000) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					xbot.sendMessage(from, argzi[0], MessageType.text)
				}
				break
case 'setnamegc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					xbot.groupUpdateSubject(from, `${body.slice(11)}`)
					reply(`Sukses mengganti nama grup ke ${body.slice(11)}`)
					break		
case 'caripesan':
   if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
   tekse = args.join('')
   if (tekse.includes("|")) { 
   try {
   var ve = tekse.split("|")[0]
   var za = tekse.split("|")[1]
   if (za > 15) return reply('maksimal 15')
   sampai = `${za}`
   batas = parseInt(sampai) + 1
   cok = await xbot.searchMessages(`${ve}`, from, batas,1) 
   if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
   if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
   for (let i=1;i < cok.messages.length;i++) {
   if (cok.messages[i].message) {
   xbot.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
   }
   }
   } catch(e) {
   console.log(e)
   return reply(mess.error.api)
   }
   } else {
   reply(`Penggunaan ${prefix}caripesan Hi|15`)
   }
   break
case 'sticktag':
				if (!isGroup) return reply(mess.only.group)
				anu  = body.slice(10)
				wanu = anu.split('|')
				var group = await xbot.groupMetadata(wanu[0])
				var member = group['participants']
				var mem = []
				member.map( async adm => {
				mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
				})
				result = fs.readFileSync(`./media/sticker/${wanu[1]}.webp`)
				xbot.sendMessage(`${wanu[0]}`, result, sticker, { contextInfo: { "mentionedJid": mem }})
				break
case 'tag':
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					xbot.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
			case 'tagme':
                  var nomqm = mek.participant
				    tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
					xbot.sendMessage(from, tagu, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
					break
case 'kontak':
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
case 'setdeskgc':
				case 'setdescgc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					xbot.groupUpdateDescription(from, `${body.slice(10)}`)
					reply(`Sukses mengganti deskripsi grup ke ${body.slice(10)}`)
					break
				
				case 'leave':
				  case 'endgc':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
				xbot.updatePresence(from, Presence.composing)
				xbot.groupLeave(from)
						break
case 'linkgrup':
				case 'linkgroup':
				case 'linkgc':
				if (!isGroup) return reply(mess.only.group)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					linkgc = await xbot.groupInviteCode(from)
					yeh = `https://chat.whatsapp.com/${linkgc}\n\nLink grup ${groupName}`
					xbot.sendMessage(from, yeh, text, { quoted: finv })
					break
					case 'resetlinkgc':
         case 'resetlinkgroup':
         case 'revoke':
     case 'resetlink':
         if (!isGroup) return reply(mess.only.group)
         if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          json = ['action', 'inviteReset', from]
         xbot.query({json, expect200: true})
          reply('Sukses Mereset Link Group')
         break
//===BUTTON BUKA TUTUP GRUP===\
case 'grup':
  case 'gc' :
  if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
     if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const opclose = `*Halo Admin ${pushname} 👋🏻*\n
Di Pilh yah, Grupnya Mau di Tutup Atau Buka?`
gbutsan = [
{buttonId:`opengc`,buttonText:{displayText:'OPEN'},type:1},
{buttonId:`closegc`,buttonText:{displayText:'CLOSE'},type:1},
]
mhan = await xbot.prepareMessage(from, ofrply, image, {thumbnail: ofrply})
const sendBtnclose = {
imageMessage: mhan.message.imageMessage,
contentText:`${opclose}`,
footerText:'Xbot © 2021', 
buttons: gbutsan,
headerType: 4
}
xbot.sendMessage(from, sendBtnclose, MessageType.buttonsMessage, {quoted:ftrol, contextInfo: { mentionedJid: [sender]}})
        break
					case 'opengc':
					  case 'opengroup':
						    case 'opengrup':
						      case 'grupopen':
						 case 'open group':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                   reply(`Sukses membuka grup ${groupName}`)
						xbot.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						  case 'closegroup':
						    case 'closegrup':
						      case 'grupclose':
				 case 'close group':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return reply(mess.only.Badmin)
						reply(`Sukses menutup grup ${groupName}`)
						xbot.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
case 'tutuptime':
case 'closetimer':
case 'waktututup':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("[ ! ] ```Contoh:``` !closetimer 20 detik")}
reply(`[ ! ] Grup akan ditutup dalam ${c} lagi.`)
setTimeout( () => {
var nomor = mek.participant
xbot.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'bukatime':
case 'opentimer':
case 'waktubuka':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !isOwner) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("[ ! ] ```Contoh:``` !opentimer 20 detik")}
reply(`[ ! ] Grup akan dibuka dalam ${c} lagi.`)
setTimeout( () => {
var nomor = mek.participant
xbot.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break
case "antibule":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isKickarea) return reply("Sudah aktif!!");
          kickarea.push(from);
          fs.writeFileSync(
            "./database/kickarea.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mengaktifkan kickarea!");
        } else if (args[0] == "off") {
          kickarea.splice(from, 1);
          fs.writeFileSync(
            "./database/kickarea.json",
            JSON.stringify(kickarea)
          );
          reply("Sukses mematikan kickarea!");
        } else if (!c) {
          sendButMessage(from, `MODE KICKAREA`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antibule on`,
              buttonText: {
                displayText: `on`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antibule off`,
              buttonText: {
                displayText: `off`,
              },
              type: 1,
            },
          ]);
        }
        break;

case 'antibug':
       if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
          if (args[0] === '1') {
          if (bugc === true) return
          bugc = true
          reply('Berhasil menyalakan antibug')
          } else if (args[0] === '0') {
          if (bugc === false) return
          bugc = false
          reply('Berhasil mematikan antibug')
          } else {
          reply('Pilih 1 atau 0')
          }
          break

     case 'antidelete':
      if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
       if (args.length < 1) return reply(`Cara Makeknya ${prefix}antidelete on/off`)
           if (c === 'on'){
             antidelete = false
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                    antidelete = true
                    reply(`Berhasil menonaktifkan antidelete`)
                } else {
                    reply(mess.error.api)
                }
                break
      case "antihidetag":
        if (!isGroup) return reply("Khusus di grup");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
        if (args[0] == "on") {
          if (isAntihidetag) return reply("Sudah aktif!!");
          antihidetg.push(from);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mengaktifkan antihidetag!");
        } else if (args[0] == "off") {
          antihidetg.splice(from, 1);
          fs.writeFileSync(
            "./database/antihidetag.json",
            JSON.stringify(antihidetg)
          );
          reply("Sukses mematikan antihidetag!");
        } else if (!c) {
          sendButMessage(
            from,
            `MODE ANTIHIDETAG`,
            `Silahkan pilih salah satu`,
            [
              {
                buttonId: `${prefix}antihidetag on`,
                buttonText: {
                  displayText: `on`,
                },
                type: 1,
              },
              {
                buttonId: `${prefix}antihidetag off`,
                buttonText: {
                  displayText: `off`,
                },
                type: 1,
              },
            ]
          );
        }
        break
				 case 'antilink':
	        if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins) return reply(mess.only.admin)
			if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Sudah Aktif Kak')
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						xbot.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var ini = antilink.indexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break
//-------- <Add/Kick >--------\\
case 'add':
   if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
   if (args.length < 1) return reply('Yang mau di add jin ya? contoh .add 628...')
   if (args[0].startsWith('08')) return reply('Gunakan kode negara mas contoh : 628..')
   try {
      num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
      xbot.groupAdd(from, [num])
   } catch (e) {
      console.log('Error :', e)
      reply('Gagal menambahkan target, mungkin karena di private')
   }
   break
case 'kick':
   if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)

   if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang! contoh : @namatarget')
   mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
   if (mentioned.length > 1) {
      teks = 'Perintah di terima, mengeluarkan :\n'
      for (let _ of mentioned) {
         teks += `@${_.split('@')[0]}\n`
      }
      mentions(teks, mentioned, true)
      xbot.groupRemove(from, mentioned)
   } else {
      mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
      xbot.groupRemove(from, mentioned)
   }
   break
case 'ad':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Pesan Targetnya!')
add = mek.message.extendedTextMessage.contextInfo.participant
xbot.groupAdd(from, [add])
reply('Sukses menambahkan peserta')
break
case 'kik':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply Pesan targetnya!')
kick = mek.message.extendedTextMessage.contextInfo.participant
xbot.groupRemove(from, [kick])
      reply('Sukses mengeluarkan peserta')
        break

//------ <Add/Kick >---------\\
case 'sider':
if (!isGroup) return reply(mess.only.group)
infom = await xbot.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'tospam':
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  xbot.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xbot.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await xbot.downloadAndSaveMediaMessage(encmedian)
				anu = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xbot.sendMessage(from, anu, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await xbot.downloadAndSaveMediaMessage(encmediat)
				anu = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Jumlah harus berupa angka!')
	if (Number(args[0]) >= 50) return reply('Kebanyakan!')
	  for (let i = 0; i < args[0]; i++) {
	  xbot.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', duration: 234, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await xbot.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Kebanyakan!')
	if (!Number(oi2)) return reply('Jumlah harus berupa angka!')
	  for (let i = 0; i < oi2; i++) {
	  xbot.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
case 'kontag':
		
				argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				case 'getdeskgc':
				if (!isGroup) return reply(mess.only.group)
					anu = from
			   metadete = await xbot.groupMetadata(anu)
				xbot.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
  case 'infouser' :
  case 'userinfo':
    case 'getinfo':
  if (!isGroup) return reply(mess.only.group)
 var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await xbot.getStatus(`${yy}`, MessageType.text)
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const ncontact = xbot.contacts[ambl] != undefined ? xbot.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : xbot.contacts[ambl].notify || xbot.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(`› Name : ${ncontact}\n› Bio : ${p.status}`)
if (p.status == 401) {
reply('[ ! ] User private.')
}
break
				case 'getpict':
				case 'getpic':
					case 'getpp':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await xbot.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            xbot.sendMessage(from, pict, image, {quoted: mek})
            break
				case 'chattttttttt':
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            xbot.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
            case 'listadmins':
               case 'listadmin':
                 case 'admin':
                            if (!isGroup) return reply(mess.only.group)
                            teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
                            no = 0
                            for (let admon of groupAdmins) {
                               no += 1
                               teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
                            }
                            mentions(teks, groupAdmins, true)
                            break
      case 'listonline':
             if (!isGroup) return reply(`*Only group*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(xbot.chats.get(ido).presences), xbot.user.jid]
             xbot.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
             case 'joinn':
             if (isGroup && !itsMe) return reply('Fitur Hanya dapat digunakan dalam Private Chat!')
             if (args.length < 1) return reply(`Kirim perintah *${prefix}join* link grup`)
             if (!isUrl(args[0]) && !args[0].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
             let code = args[0].replace('https://chat.whatsapp.com/', '')
             xbot.acceptInvite(code)
              .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
             break
                   case 'join': 
                          if (args.length == 0) return reply(`Ex:- ${prefix}join https://chat.whatsapp.com`)
                          if (!c) return reply('*The link?*')
                          
                          if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Link Invalid')
                          link = args[0].replace('https://chat.whatsapp.com/','')
                          fak = xbot.query({ json: ['action', 'invite', link],
                          expect200: true })
                          reply('*Successfully Entered Group*')
                          break
                         case 'totag':
                      if (!isGroup) return reply(mess.only.group)
                      if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                         encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         file = await xbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                         value = args.join(" ")
                         var group = await xbot.groupMetadata(from)
                         var member = group['participants']
                         var mem = []
                         member.map(async adm => {
                         mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                         })
                         var options = {
                             contextInfo: { mentionedJid: mem },
                             quoted: mek
                         }
                         ini_buffer = fs.readFileSync(file)
                         xbot.sendMessage(from, ini_buffer, sticker, options)
                         fs.unlinkSync(file)
                         } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                         encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         file = await xbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                         value = args.join(" ")
                         var group = await xbot.groupMetadata(from)
                         var member = group['participants']
                         var mem = []
                         member.map(async adm => {
                         mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                         })
                         var options = {
                             contextInfo: { mentionedJid: mem },
                             quoted: mek
                         }
                         ini_buffer = fs.readFileSync(file)
                         xbot.sendMessage(from, ini_buffer, image, options)
                         fs.unlinkSync(file)
                     } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
                         encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         file = await xbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                         value = args.join(" ")
                         var group = await xbot.groupMetadata(from)
                         var member = group['participants']
                         var mem = []
                         member.map(async adm => {
                         mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                         })
                         var options = {
                             mimetype : 'audio/mp4', duration: 234,
                             ptt : true,
                             contextInfo: { mentionedJid: mem },
                             quoted: mek
                         }
                         ini_buffer = fs.readFileSync(file)
                         xbot.sendMessage(from, ini_buffer, audio, options)
                         fs.unlinkSync(file)
                      } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
                         encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         file = await xbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                         value = args.join(" ")
                         var group = await xbot.groupMetadata(from)
                         var member = group['participants']
                         var mem = []
                         member.map(async adm => {
                         mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                         })
                         var options = {
                             mimetype : 'video/gif',
                             contextInfo: { mentionedJid: mem },
                             quoted: mek
                         }
                         ini_buffer = fs.readFileSync(file)
                         xbot.sendMessage(from, ini_buffer, video, options)
                         fs.unlinkSync(file)
                     } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
                         encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         file = await xbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                         value = args.join(" ")
                         var group = await xbot.groupMetadata(from)
                         var member = group['participants']
                         var mem = []
                         member.map(async adm => {
                         mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                         })
                         var options = {
                             mimetype : 'text/plain',
                             contextInfo: { mentionedJid: mem },
                             quoted: mek
                         }
                         ini_buffer = fs.readFileSync(file)
                         xbot.sendMessage(from, ini_buffer, document, options)
                         fs.unlinkSync(file)
                     }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
                         encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                         file = await xbot.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
                         value = args.join(" ")
                         var group = await xbot.groupMetadata(from)
                         var member = group['participants']
                         var mem = []
                         member.map(async adm => {
                         mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                         })
                         var options = {
                             mimetype : 'video/mp4', duration: 234,
                             contextInfo: { mentionedJid: mem },
                             quoted: mek
                         }
                         ini_buffer = fs.readFileSync(file)
                         xbot.sendMessage(from, ini_buffer, video, options)
                         fs.unlinkSync(file)
                     } else{
                       reply(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
                     }
                     break
                     case 'tagall':
                       if (!isGroupAdmins) return reply(mess.only.admin)
                        members_id = []
                        teks = (args.length > 1) ? body.slice(8).trim() : '*Info :*'
                        teks += '\n\n'
                        for (let mem of groupMembers) {
                           teks += `╠➥ @${mem.jid.split('@')[0]}\n`
                           members_id.push(mem.jid)
                        }
                        reply(teks)
                        break
                     case 'hidetag':
                     if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
                     ht = body.slice(9)
                         members_id = []
                     for (let mem of groupMembers) {
                        members_id.push(mem.jid)
                     }
                         mentions(ht, members_id, false)
                         break
    case 'fitnah': 
           //if (!isRegister) return reply(mess.only.regis)               
           if (args.length < 1) return reply(`Cara Menggunakan :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
           var gh = args.join('')
           mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
           var replace = gh.split("|")[0];
           var target = gh.split("|")[1];
           var bot = gh.split("|")[2];
           xbot.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
           break
                       case 'hacked':
              if (!isGroup) return reply(mess.only.group)
                  if (!isGroupAdmins) return reply(mess.only.admin)
                  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
                       if (args.length < 1) return reply('Teksnya?')
                       reply('Otw Hack 🗿')
                         tessgc = await getBuffer(`https://i.ibb.co/cXvgg0B/NASA-II-Lines.jpg`)
                            xbot.updateProfilePicture (from, tessgc)
                            await sleep(1000)
                         xbot.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                         await sleep(1000)
                         xbot.groupUpdateDescription(from, `_telah meretas grup ini_`)             
                         await sleep(1000)
                         xbot.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
                        break
//// PEMBATAS MENU GRUP \\\
//// PEMBATAS MENU IMAGE MAKER
case 'rip':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/rip?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case '3000years':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/3000years?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'rejected':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/rejected?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'approved':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/approved?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'glitch':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/glitch?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'beautiful':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/beautiful?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'wanted':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/wanted?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'utatoo':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/utatoo?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'wasted':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/wasted?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'scary':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/scary?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'igm':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/instagram?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break	
case 'sniper':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/sniper?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'sniper':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/thanos?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'redple':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/redple?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'ps4':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/ps4?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'missionpassed':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/missionpassed?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'lwkh':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/lookwhatkarenhave?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'spongebob':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/fire?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'dictator':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/dictator?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'deepfry':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/deepfry?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'dungeon':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/ddungeon?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'dungeon':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://api-alphabot.herokuapp.com/api/image_editor/ddungeon?apikey=Alphabot&url=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'stonk':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto.xyz/api/stonk?image=${anu.display_url}&apikey=hardianto`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'notstonk':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto.xyz/api/not-stonk?image=${anu.display_url}&apikey=hardianto`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break
case 'patrick':
	var imgbb = require('imgbb-uploader')
	if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
	  reply(mess.wait)
	  owgi = await xbot.downloadAndSaveMediaMessage(ted)
	  tels = body.slice(7)
	  anu = await imgbb("520bd6f6209077d1777c2a4f20c509c2", owgi)
	  hehe = await getBuffer(`https://hardianto.xyz/api/knights/patrick?apikey=hardianto&pp=${anu.display_url}`)
	 xbot.sendMessage(from, hehe, image, {quoted:mek})
	} else {
	  reply('Foto Nya Mana Gan 🗿')
	}
	break	
// batas image maker
case 'sharelock':
if (!arg) return reply(`Contoh Penggunaan ${prefix}sharelock Text`)
woila = `${args.join(' ')}`
nama = woila.split("|")[0];
impostor = woila.split("|")[1];
xbot.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break	
case 'viewonce':
res = await xbot.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": dfrply,
"viewOnce": true
}
}
}
}, {}) 
xbot.relayWAMessage(res)
break
case 'ocr':
case 'totext':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
reply(mess.wait)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3}).then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
}).catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('[ ! ] Copy text on Image.\n_Tag foto untuk diScan!_')
}
break
case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await xbot.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await xbot.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							xbot.sendMessage(from, buffer, image, {thumbnail:fs.readFileSync('./media/image/xbot.jpg'), quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('Sabar.., 5 Tahun lagi Jadi 🗿')
anjay = `https://cililitan.herokuapp.com/api/texttopng?teks=${woy}`
(from, anjay)
break
case "ttpyellow":
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(11)
					atetepe = await getBuffer(`https://cililitan.herokuapp.com/api/ttpcolor?teks=${biji}&color=yellow`)
					xbot.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpgreen":
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(10)
					atetepe = await getBuffer(`https://cililitan.herokuapp.com/api/ttpcolor?teks=${biji}&color=green`)
					xbot.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpblue":
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(9)
					atetepe = await getBuffer(`https://cililitan.herokuapp.com/api/ttpcolor?teks=${biji}&color=blue`)
					xbot.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case "ttpred":
					if (args.length < 1) return reply('Teksnya?')
					biji = body.slice(5)
					atetepe = await getBuffer(`https://cililitan.herokuapp.com/api/ttpcolor?teks=${biji}&color=red`)
					xbot.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
case 'attp':
					if (!c) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp ${NamaBot}`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(c)}`)
					xbot.sendMessage(from, atetepe, sticker , { quoted: fvid })
					break
/////ERROR
 case 'tomp3':
    xbot.updatePresence(from, Presence.composing)
    if (!isQuotedVideo) return reply('Reply Video Nya Kak')
    reply(mess.wait)
    encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    mediad = await xbot.downloadAndSaveMediaMessage(encmediad)
    ran = getRandom('.mp4')
    exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
       fs.unlinkSync(mediad)
       if (err) return reply(mess.error.api)
       mhee = fs.readFileSync(ran)
       xbot.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 234, quoted: mek })
       fs.unlinkSync(ran)
    })
    break
case 'tts':
					if (args.length < 1) return xbot.sendMessage(from, `Kode bahasanya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
				   const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return xbot.sendMessage(from, `Teksnya mana kak? contoh : ${prefix}tts id yamate kudasai`, text, { quoted: mek })
					var bby = body.slice(8)
					ranm = getRandom('.mp3')
					rano = getRandom('.ogg')
					bby.length > 300
						? reply('Teks nya terlalu panjang kak')
						: gtts.save(ranm, bby, function () {
							exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
								fs.unlinkSync(ranm)
								buff = fs.readFileSync(rano)
								if (err) return reply(dla.stikga())
								xbot.sendMessage(from, buff, audio, {duration: 234, ptt: true, quoted: mek })
								fs.unlinkSync(rano)
							})
						})
					break
case 'tinyurl':
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
case 'qrcode':
if (!c) return reply('Textnya mana gan? contoh .qrcode xbot')
reply(mess.wait)
anu = (`https://api.qrserver.com/v1/create-qr-code/?size=512x512&data=${c}`)
img = await getBuffer(anu)
xbot.sendMessage(from, img, image, { quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
break
case 'tahta': 
if (args.length < 1) return reply('*Teks nya mana?*') 
tahta = args.join(" ")
reply(mess.wait)
tahta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=${ZeksApi}&text=${tahta}`)
xbot.sendMessage(from,tahta,image,{quoted:mek}) 
break 
case 'nuliskiri':
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = (`https://hardianto.xyz/api/nuliskiri?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
xbot.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
break
case 'nuliskanan':
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = (`https://hardianto.xyz/api/nuliskanan?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
xbot.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
break
case 'foliokanan':
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = (`https://hardianto.xyz/api/foliokanan?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
xbot.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
break
case 'foliokiri':
if (!c) return reply('Textnya mana gan?')
reply(mess.wait)
kon = (`https://hardianto.xyz/api/foliokiri?text=${c}&apikey=hardianto`)
anu = await getBuffer(kon)
xbot.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
break
case 'readmore':
			    	case 'more':
			    	const more = String.fromCharCode(8206)
			    	const readmore = more.repeat(4001)
				    if (!c.includes('|')) return  reply(mess.error.api)
                    const text1 = c.substring(0, c.indexOf('|') - 0)
                    const text2 = c.substring(c.lastIndexOf('|') + 1)
                    reply( text1 + readmore + text2)
                    break
case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/maker2?text=${makell}&apikey=${si0ren}`)
					buffer1 = await getBuffer(anu.result.results)
					xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/maker3?text=${makell}&apikey=${si0ren}`)
					buffer1 = await getBuffer(anu.result.results)
					xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/maker4?text=${makell}&apikey=${si0ren}`)
					buffer1 = await getBuffer(anu.result.results)
					xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
					makell = body.slice(8)
					reply(mess.wait)
					anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/maker3d?text=${makell}&apikey=${si0ren}`)
					buffer1 = await getBuffer(anu.result.results)
					xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${si0ren}`)
					buffer1 = await getBuffer(anu.result.results)
					xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${si0ren}`)
					buffer1 = await getBuffer(anu.result.results)
					xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
					break
			case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${si0ren}`)
					buffer1 = await getBuffer(anu.result.results)
					xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${si0ren}`)
					buffer1 = await getBuffer(anu.result.results)
					xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
					break
               case 'googletxt':
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} xbot|chan|kawai`)
             makell = args.join(" ")
             ll1 = makell.split("|")[0];
             ll2 = makell.split("|")[1];
             ll3 = makell.split("|")[0];
             reply(mess.wait)
             anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${si0ren}`)
             buffer1 = await getBuffer(anu.result.url)
             xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
             break
       case 'battlefield': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot|Whatsapp`)
             makell = args.join(" ")
             ll1 = makell.split("|")[0];
             ll2 = makell.split("|")[1];
             reply(mess.wait)
             anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${si0ren}`)
             buffer1 = await getBuffer(anu.result.url)
             xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
             break
       case 'coffeecup': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${si0ren}`)
             buffer1 = await getBuffer(anu.result.url)
             xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
             break
       case 'coffeecup2': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${si0ren}`)
             buffer1 = await getBuffer(anu.result.url)
             xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
             break
       case 'neon': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${si0ren}`)
             buffer1 = await getBuffer(anu.result.url)
             xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
             break
case 'glow': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${si0ren}`)
             buffer1 = await getBuffer(anu.result.url)
             xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
             break
       case 'summer': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${si0ren}`)
             buffer1 = await getBuffer(anu.result.url)
             xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
             break
       case 'flower': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${si0ren}`)
             buffer1 = await getBuffer(anu.result.url)
             xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
             break
       case 'burn': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${si0ren}`)
             buffer1 = await getBuffer(anu.result.url)
             xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
             break
       case 'quote': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
             makell = args.join(" ")
             reply(mess.wait)
             anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${si0ren}`)
             buffer1 = await getBuffer(anu.result.url)
             xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
             break
// filter sticker
		case 'wasted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					    reply(mess.wait)
					owgi = await  xbot.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					xbot.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break
case 'trigger':

					var imgbb = require('imgbb-uploader')

					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply('sabarr tes tes')
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  xbot.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					xbot.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'sampah':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	           		reply(mess.wait)
	                 owgi = await xbot.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					xbot.sendMessage(from, buffer, image, {quoted: mek})
                   }
              break       
		case 'gay':

					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					sticWait(from)
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  xbot.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					xbot.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
             case 'sticktext1':
               case 'stext':
             if(!c) return reply(`Example :Reply sticker dengan Caption${prefix + command} xbot` )
             if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
             ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
             reply(mess.wait)
             owgi = await xbot.downloadMediaMessage(ger)
             await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
             var imgbb = require('imgbb-uploader')
             anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", './stickmeme.jpeg')
             teks = `${anu.display_url}`
             sendStickerUrl(from, `https://cililitan.herokuapp.com/api/memegen1?teks=${c}&img_url=${teks}`, mek)
             fs.unlinkSync('./stickmeme.jpeg')
             }
             break
             case 'sticktext2':
               case 'stext2':
             if(!c)return reply(`Cara Makeknya, Pertama Reply Stikernya, Kedua ketik : ${prefix + command} Text1|Text2`)
             s11 = c.split('|')[0]
             s12 = c.split('|')[1] 
             if(!s12)return reply('Text2 nya pake bang..')
             if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
             ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
             reply(mess.wait)
             owgi = await xbot.downloadMediaMessage(ger)
             await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
             var imgbb = require('imgbb-uploader')
             anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", './stickmeme.jpeg')
             teks = `${anu.display_url}`
             sendStickerUrl(from, `https://cililitan.herokuapp.com/api/memegen2?teks1=${s11}&teks2=${s12}&img_url=${teks}`, mek)
             fs.unlinkSync('./stickmeme.jpeg')
             }
             break
case 'tikmarker':
if (!isGroup) return reply(mess.only.group)
if(!c) return reply(`Example : ${prefix}tikmarker nama|autor`)
g1 = c.split('|')[0]
g2 = c.split('|')[1]
reply(mess.wait)
tikmarker = await getBuffer(`https://zekais-api.herokuapp.com/oxy/tiktok?text=${g1}&text2=${g2}&apikey=ysBYLTIc`)
xbot.sendMessage(from,tikmarker,image,{quoted:mek})
break

			case 'wooden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/roses?text=${makell}&theme=wooden-boarch&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
					break
			case 'golden': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} Xbot`)
					makell = args.join(" ")
					reply(mess.wait)
					anu = await fetchJson(`https://si0renrestapi.herokuapp.com/api/textmaker/roses?text=${makell}&theme=golden&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.url)
					xbot.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
					break
               case 'fancytext':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://cililitan.herokuapp.com/api/fancytext?teks=${body.slice(11)}`, {method: 'get'})
teks = anu.result
reply(teks)
break
//// PEMBATAS MENU MAKER \\\
//// PEMBATAS MENU DOWNLOADER \\\
case 'dafontdl':
case 'dafontdown':
if (args.length < 1) return reply('[ ! ] Contoh : *!dafontdl <link dafont>*')
if(!isUrl(args[0]) && !args[0].includes('dafont')) return reply(mess.error.Iv)
teks = args.join(' ')
res = await dafontDown(teks) 
result = `› *Title:* ${res[0].judul}
› *Style:* ${res[0].style}
› *File name:* ${res[0].output}

${res[0].isi}`
reply(result)
sendFileFromUrl(res[0].down, document, {mimetype: 'font/ttf', filename: res[0].output, quoted: fvid})
break
case 'mediafire':
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)
if (Number(filesize) >= 30000) return reply(`*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}
*Link :* ${res[0].link}

_Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
reply(mess.wait)
teks = args.join(' ')
res = await mediafireDl(teks)
result = `*Nama :* ${res[0].nama}
*Ukuran :* ${res[0].size}

_File sedang dikirim, Silahkan tunggu bebexbot menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
break
case 'igstory': 
              if(!c) return reply('*Username?*')
              hx.igstory(c)
             .then(async result => {
              for(let i of result.medias){
              if(i.url.includes('mp4')){
              let link = await getBuffer(i.url)
              xbot.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
              } else {
              let link = await getBuffer(i.url)
              xbot.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
              }
              }
              });
              break
case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('Linknya?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
                    case 'tiktok':
                   case 'tiktokdl':
                   case 'tiktoknowm':
if (!c) return reply('Linknya?')
var { TiktokDownloader } = require('./lib/tiktokdl')
reply(mess.wait)
res = await TiktokDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
break
  case 'imagetorul':
  case 'imgtourl':
  case 'audiotourl':
  case 'videotourl':
  case 'stickertourl':
  case 'stikertourl':
  case 'tolink':
  var imgbb = require('imgbb-uploader')
  if (isQuotedAudio) {
  ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  reply(mess.wait)
  owgi = await xbot.downloadAndSaveMediaMessage(ger)
  Okelor = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *AUDIO TO URL* 」 ─

*$Url : ${Okelor.display_url}*`
  reply(teks)
 
  } else if (isQuotedImage) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  reply(mess.wait)
  owgi = await xbot.downloadAndSaveMediaMessage(ger)
  qbc = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
teks=`─ 「 *IMAGE TO URL* 」 ─

*Url : ${qbc.display_url}*`
  reply(teks)
  } else if (isQuotedVideo) {
  ger = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
  reply(mess.wait)
  owgi = await xbot.downloadAndSaveMediaMessage(ger)
  ffff = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *VIDEO TO URL* 」 ─

*$Url : ${ffff.display_url}*`
  reply(teks)
  } else if (isQuotedSticker) {
  ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
  reply(mess.wait)
  owgi = await xbot.downloadAndSaveMediaMessage(ger)
  vrr = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
  teks=`─ 「 *STICKER TO URL* 」 ─

*Url : ${vrr.display_url}*`
  reply(teks)
  }
  break
                    case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await xbot.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
     case 'ytdl':
     case 'youtube':       
     case 'youtubedl':
        case 'ytmp3' :
         case 'ytmp4':
             //if (!isRegister) return reply(mess.only.regis)      	                              
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
             reply(mess.wait)
             let yut = await yts(c)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await xbot.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}buttonmusic ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}buttonvideo ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await xbot.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break                                                        
      case 'buttonmusic':
             //if (!isRegister) return reply(mess.only.regis)      	     
             if(!c) return reply('linknya?')              
             res = await yta(`${c}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:mek})
             break         
     case 'buttonvideo':
             //if (!isRegister) return reply(mess.only.regis)      	     
             if(!c) return reply('linknya?')            
             res = await ytv(`${c}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break
            case 'play':
         
                  if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
         reply(mess.wait)
                     var srch = args.join('')
                   aramas = await yts(srch);
                   aramat = aramas.all 
                     var mulaikah = aramat[0].url							
                           try {
                             yta(mulaikah)
                             .then((res) => {
                                 const { dl_link, thumb, title, filesizeF, filesize } = res
                                 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                                    
                                 .then(async (a) => {
                                 if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `.•♫•♬• *PLAYING MUSIC* .•♫•♬•\n\n📜𝙏𝙞𝙩𝙡𝙚: ${title}\n🎁𝙏𝙮𝙥𝙚 : mp3\n𝙁𝙞𝙡𝙚 𝙎𝙞𝙯𝙚 : ${filesizeF}\n🖇𝙇𝙞𝙣𝙠 ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                                 const captions = `.•♫•♬• *PLAYING MUSIC* .•♫•♬•\n\n📜𝙏𝙞𝙩𝙡𝙚: ${title}\n🎁𝙏𝙮𝙥𝙚 : mp3\n𝙁𝙞𝙡𝙚 𝙎𝙞𝙯𝙚 : ${filesizeF}\n🖇𝙇𝙞𝙣𝙠 ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`
                                 sendMediaURL(from, thumb, captions)
                                 await sendMediaURL(from, dl_link).catch(() => reply('error'))
                                 })                
                                 })
                                 } catch (err) {
                                 reply(mess.error.api)
                                 }
                            break
                               
//// PEMBATAS MENU DOWNLOADER \\\
//// PEMBATAS MINI GAME

case "caklontong":
   anu = await fetchJson(`https://rest-api-megumin1.herokuapp.com/api/kuis/caklontong?apikey=beta`)
   cak = `*${anu.result.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.result.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   xbot.sendMessage(from, cak, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "susunkata":
   anu = await fetchJson(`https://hardianto.xyz/api/susunkata?apikey=hardianto`)
   susun = `*${anu.math.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.math.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   xbot.sendMessage(from, susun, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "tebakkalimat":
   anu = await fetchJson(`https://hardianto.xyz/api/tebakkalimat?apikey=hardianto`)
   kalimat = `*${anu.math.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.math.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   xbot.sendMessage(from, kalimat, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "tebakkata":
   anu = await fetchJson(`https://hardianto.xyz/api/tebakkata?apikey=hardianto`)
   kata = `*${anu.math.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.math.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   xbot.sendMessage(from, kata, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "tebakkimia":
   anu = await fetchJson(`https://hardianto.xyz/api/tebakkimia?apikey=hardianto`)
   kimia = `*${anu.math.lambang}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.math.unsur, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   xbot.sendMessage(from, kimia, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "tebaklirik":
   anu = await fetchJson(`https://hardianto.xyz/api/tebaklirik?apikey=hardianto`)
   lirik = `*${anu.math.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.math.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   xbot.sendMessage(from, lirik, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "tebaktebakan":
   anu = await fetchJson(`https://hardianto.xyz/api/tebaktebakan?apikey=hardianto`)
   tebakan = `*${anu.math.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.math.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   xbot.sendMessage(from, tebakan, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "tekateki":
   anu = await fetchJson(`https://hardianto.xyz/api/tekateki?apikey=hardianto`)
   teki = `*${anu.math.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.math.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   xbot.sendMessage(from, teki, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "asahotak":
   anu = await fetchJson(`https://hardianto.xyz/api/asahotak?apikey=hardianto`)
   otak = `*${anu.math.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.math.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   xbot.sendMessage(from, otak, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
case "siapaaku":
   anu = await fetchJson(`https://hardianto.xyz/api/siapaaku?apikey=hardianto`)
   aku = `*${anu.math.soal}*`
   setTimeout( () => {
   reply('*➸ Jawaban :* '+anu.math.jawaban, text, {quoted: mek}) // ur cods
   }, 30000) // 1000 = 1s,
   setTimeout( () => {
   reply('_10 Detik lagi…_', text) // ur cods
   }, 20000) // 1000 = 1s,
   setTimeout( () => {
   reply('_20 Detik lagi_…', text) // ur cods
   }, 10000) // 1000 = 1s,
   setTimeout( () => {
   reply('_30 Detik lagi_…', text) // ur cods
   }, 2500) // 1000 = 1s,
   setTimeout( () => {
   xbot.sendMessage(from, aku, text, {quoted: mek }) // ur cods
   }, 0) // 1000 = 1s,
   break
       case 'truth':
              if (!isGroup) return reply(mess.only.group)
              const trut =['Kapan terakhir kali kamu berbohong?','Kapan terakhir kali kamu menangis?','Kapan terakhir kali kamu kentut?','Apa ketakutan terbesarmu?','Apa fantasi terbesar atau terhanehmu?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','Pernahkah kamu selingkuh?','pernah jadi selingkuhan orang?','Apa hal terburuk yang pernah kamu lakukan?','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','Apa rahasia yang tidak pernah kamu ceritakan kepada siapapun?','Apakah kamu punya bakat terpendam?','Apakah kamu pernah melanggar hukum?','Apa hal paling memalukan yang pernah kamu lakukan? Kapan?','suka mabar(main bareng)sama siapa?','Apa hal yang paling membuatmu merasa insecure?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','Kesalahan terburuk apa yang pernah kamu lakukan?','Apa hal paling menjijikkan yang pernah kamu lakukan?','Hal terburuk apa yang pernah dilakukan orang terhadapmu?','Apa kebiasaan terburukmu?','Hal terburuk apa yang pernah kamu katakan/lakukan terhadap orang lain?','Apa penyesalan terburukmu?','Kalau kamu bisa jadi tidak terlihat, apa hal pertama yang akan kamu lakukan?','Apa rahasia yang kamu sembunyikan dari orangtuamu?','Siapa orang yang diam-diam kamu sukai?','Siapa orang terakhir yang kamu kepoin di media sosial?','Kalau ada jin yang memberikanmu tiga permohonan, apa yang kamu inginkan?','Siapa orang di antara kita yang menurutmu bisa lolos dari kiamat zombie dan siapa yang akan mati duluan? Beri tahu alasannya!','Apa tontonan favoritmu saat masih kecil?','Siapa orang yang paling sering kamu chat?','Apa kebohongan terbesar yang pernah kamu katakan kepada orangtuamu?','Apa mimpi paling aneh yang pernah kamu alami?','Kapan terakhir kali kamu ngompol?','Menurutmu, hewan apa yang terlihat paling mirip denganmu?','Apakah kamu pernah melakukan ghosting?','Apa aib yang kamu sembunyikan dari kami?']
              const ttrth = trut[Math.floor(Math.random() * trut.length)]
              truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              pemuda.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
              break
       case 'dare':
              if (!isGroup) return reply(mess.only.group)
              const dare =['Lakukan rap gaya bebas selama 3 menit.','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','Pesan makanan di aplikasi, dan kasih makanan yang kamu pesan ke pengantar itu.','Aku tantang kamu untuk kirim foto selfie ke crush, tunggu sampai dibuka dan kirim buktinya ke aku.','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','Rekam diri kamu sendiri saat menyanyikan sebuah lagu dan posting di YouTube atau media sosialmu','Campurkan setetes atau satu sendok dari setiap bumbu di rumah kamu dan minum/makanlah.','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','Lakukan panggilan prank ke seseorang.','Rekam video kamu sedang melakukan tarian gila dan unggah ke media sosial.','teriak "WOI" di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll','teriak "GUE ANAK LUCINTA LUNA" didepan rumah AKWOWKOK','Berjalan mengelilingi kompleks perumahan kamu dan berbicara sendiri sepanjang waktu, terutama saat lagi banyak orang di sekitar kamu.','Pejamkan mata dan raih lemari es atau dapur. Hal pertama yang kamu sentuh, harus kamu makan.','Kirimkan tangkapan layar pesanmu dengan orang terakhir selain aku.']
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              pemuda.sendMessage(from, buffer, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
              break
// MINI GAMES
// HERO \\

case 'herolist':
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
// PEMBATAS HERO \\
// PEMBATAS PRIMBON \\

case 'artimimpi':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://cililitan.herokuapp.com/api/artimimpi?mimpi=${body.slice(11)}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'artinama':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://cililitan.herokuapp.com/api/artinama?nama=${body.slice(10)}`, {method: 'get'})
teks = anu.result
reply(teks)
break
case 'artizodiak':
				if (args.length < 1) return reply('Teksnya?')
anu = await fetchJson(`https://ziyy.herokuapp.com/api/zodiak?zodiak=${body.slice(11)}&apikey=xZiyy`, {method: 'get'})
teks = anu.result
reply(teks)
break
 case 'fdefacee':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await xbot.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await xbot.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		xbot.sendMessage(from, mat, MessageType.extendedText, anu)
            break
case 'fdeface':
var nn = body.slice(9)
var urlnye = nn.split("|")[0];
var titlenye = nn.split("|")[1];
var descnye = nn.split("|")[2];
imgbbb = require('imgbb-uploader')
run = getRandom('.jpeg')
encmediad = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
mediad = await xbot.downloadAndSaveMediaMessage(encmediad)
ddatae = await imageToBase64(JSON.stringify(mediad).replace(/\"/gi, ''))
xbot.sendMessage(from, {
text: `${urlnye}`,
matchedText: `${urlnye}`,
canonicalUrl: `${urlnye}`,
description: `${descnye}`,
title: `${titlenye}`,
jpegThumbnail: ddatae
}, 'extendedTextMessage', { detectLinks: false })
break		
case 'fitnahpc':
   if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
   var gh = body.slice(10)
   var parti = gh.split("|")[0];
   var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
xbot.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
  break
case 'bilangangka':
				if (args.length < 1) return reply('Angkanya?')
				var teks = body.slice(13)
				anu = await fetchJson(`https://cililitan.herokuapp.com/api/bilangangka?angka=${teks}`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
case 'dadu':
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			xbot.sendMessage(from, damdu, sticker, {quoted: mek})
			break
case 'suit':
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
		    case 'slot':
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            xbot.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
case 'hbd': case 'zodiak': case 'zodiac':
let textus = args.join(" ")
if (!c) return reply(`Cara Pakeknya\nTahun, Bulan, Tanggal\n\n*Contoh : ${prefix + command} 2003 01 24*`)
const zodiak = [
    ["Capricorn",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pisces",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Taurus",      new Date(1970, 3, 21)],
    ["Gemini",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const date = new Date(textus)
if (date == '❎ Kesalahan, Pastikan Format sudah Benar..!!! ❎') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `*Data Kelahiranmu*\n
Kelahiran : ${birth.join('-')}
Next HBD  : ${birthday.join('-')}
Umur      : ${cekusia}
Zodiak    : ${zodiac}
`.trim()
reply(teksh)
break
    case 'jadian':
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
				case 'tictactoe':
case 'ttt':
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply('Tag Lawan Anda! ')
if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
er1 = sender
er2 = ment[0]
angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
id = from
gilir = er2
ky_ttt.push({er1,er2,id,angka,gilir})
xbot.sendMessage(from, `*🎳 Memulai Game Tictactoe 🎲*

[@${er2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ketik ${prefix}delttc , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [er2]}})
break
                case 'delttt':
                case 'delttc':
if (!isGroup) return reply(mess.only.group)
if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
reply('Sukses')
break
case 'bisakah':
  if (!isGroup) return reply(mess.only.group)
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              xbot.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
         if (!isGroup) return reply(mess.only.group)
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              xbot.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
case 'pintarcek':
       case 'cekpintar':
              if (!isGroup) return reply(mess.only.group)
              pintar = body.slice(1)
              const pin =['Lumayan','Pinter banget','Hmmm','Ulangi']
              const tar = pin[Math.floor(Math.random() * pin.length)]
              xbot.sendMessage(from, '*Pertanyaan :* '+pintar+'\n*Jawaban :* '+ tar+'', text, { quoted: mek })
              break
case 'gantengcek':
       case 'cekganteng':
              if (!isGroup) return reply(mess.only.group)
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              xbot.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
case 'cantikcek':
       case 'cekcantik':
              if (!isGroup) return reply(mess.only.group)
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              xbot.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
case 'cekmati':
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag yang mau di Cek Kematian nya.! ')
              predea = await axios.get(`https://api.agify.io/?name=${c}`)
              reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
//// PEMBATAS MENU FUN \\\
//// PEMBATAS MENU STICKER \\\
case 'colong':
if (!isQuotedSticker) return reply(`Reply Stikernya`)
	const colonge = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			const mediee = await xbot.downloadAndSaveMediaMessage(colonge, `./sticker/${sender}`)
	anee = args.join(" ").split("|");
	pempa = anee[0] !== "" ? anee[0] : `@panggilajaal._`;
	autpa = typeof anee[1] !== "undefined" ? anee[1] : `@panggilajaal._`;
	exif.create(pempa, autpa, `takestick_${sender}`)
	exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
	if (error) return reply(mess.error.api)
	xbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fvid})
		fs.unlinkSync(mediee)
	fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
		})
	break
case 'sticker':
					case 'stiker':
					case 's':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await xbot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											xbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await xbot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											xbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break

					case 'stickerwm':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await xbot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											xbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await xbot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							reply(mess.wait)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											xbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
					case 'takestick':
					case 'take':
						if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await xbot.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							xbot.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
//// PEMBATAS MENU STICKER \\\
//// PEMBATAS MENU SEARCH \\\
case 'ppcouple':
case 'ppcp': 
			anu = await fetchJson(`https://ziyy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo = await getBuffer(anu.result.cowo_image)
			xbot.sendMessage(from, cowo, image, {caption: 'Ini Untuk »  *𝗖𝗼𝘄𝗼𝗸𝗻𝘆𝗮'})
       cewe = await getBuffer(anu.result.cewe_image)
		    pll = `Ini Untuk » *𝗖𝗲𝘄𝗲𝗸𝗻𝘆𝗮*`
   sendButImage(from, pll, `Project xbot © 2021`, cewe, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
case 'dafontsearch':
case 'dafonts':
case 'dafont':
if (args.length < 1) return reply('[ ! ] ```Contoh``` › *!dafonts <nama font>*')
teks = args.join(' ')
reply(mess.wait)
res = await dafontSearch(teks)
a = res[0]
result = `› *Title:* ${a.judul}
› *Style:* ${a.style}
› *Link:* ${a.link}
`
reply(result)
break
    case 'igstalk':
        case 'stalkig':
            if (!c) return ftrol('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break 
					
					case 'infogempa':
					anu = await fetchJson(`https://cililitan.herokuapp.com/api/bilangangka?angka=999999`, {method: 'get'})
					gempa = `⬣ *INFO GEMPA*\n\n⬣ Waktu : ${anu.result.Waktu}\n⬣ Lintang : ${anu.result.Lintang}\n⬣ Bujur : ${anu.result.Bujur}\n⬣ Magnitudo : ${anu.result.Magnitudo}\n⬣ Kedalaman : ${anu.result.Kedalaman}\n⬣ Wilayah : ${anu.result.Wilayah}`
					reply(mess.wait)
					buff = await getBuffer(anu.result.Map)
					xbot.sendMessage(from, buff, image, {quoted: ftok, caption: gempa})
					break 
case 'brainly':
brainly(args.join(" ")).then(res => {
hmm = '\n❉──────────────────❉\n'
for (let Y of res.data) {
hmm += `\n\n*› Pertanyaan:* ${Y.pertanyaan}\n*› Jawaban:* ${Y.jawaban[0].text}\n\n`
}
reply(hmm)
console.log(res)
})
case 'pinterest':
if (!c) return reply('yg mau di cari apa?')
reply(mess.wait)
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'resepmasakan':
				if (args.length < 1) return reply('Judulnya?')
				var teks = body.slice(14)
				anu = await fetchJson(`https://cililitan.herokuapp.com/api/resepmakanan?makanan=${teks}`, {method: 'get'})
					hasilresep = `⬣ *${anu.results.title}*\n\n⬣ Porsi : ${anu.results.servings}\n⬣ Waktu : ${anu.results.times}\n⬣ Kesulitan : ${anu.results.dificulty}\n⬣ Pengguna : ${anu.results.author.user}\n⬣ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n⬣ Deskripsi : ${anu.results.desc}\n\n────────────────────\n⬣ *Tutorial*\n\n⬣ Bahan : ${anu.results.ingredient}\n⬣ Langkah : ${anu.results.step}`
					reply(mess.wait)
					buff = await getBuffer(anu.results.thumb)
					xbot.sendMessage(from, buff, image, {quoted: ftok, caption: hasilresep})
					break 
case 'gimage':
case 'googleimage':
if (args.length < 1) return reply('Apa Yang Mau Dicari?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${teks}`})
}
}
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('Yang mau di cari apaan?')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'wiki':
if (args.length < 1) return reply(' Yang Mau Di Cari Apa? ')
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
break
case 'playstore':
            if(!c) return reply('*Mau Cari Aplikasi Apa?!?!? Bangsat kau..!!🤬*')
            let play = await hx.playstore(c)
            let store = '\n❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉\n\n`
            }
            reply(store)
            break
case 'ytsearch':
                     if (!args.length) return reply('Judulnya apa kak?')
                     try {
                        reply(mess.wait)
                         const input = args.join(" ")
                         const filter1 = await ytsd.getFilters(input)
                         const filters1 = filter1.get('Type').get('Video')
                         const { items } = await ytsd(filters1.url, { limit: 10 })
                         let hehe = `┌ ◪ *YOUTUBE SEARCH*
         └ *Search Query:* ${input}\n\n`
                         for (let i = 0; i < items.length; i++) {
                             hehe += `───────────────\n
         ┌ ⬣ *Judul:* ${items[i].title}
         ├ ⬣ *Id:* ${items[i].id}
         ├ ⬣ *Ditonton:* ${items[i].views}
         ├ ⬣ *Durasi:* ${items[i].duration}
         └ ⬣ *Link:* ${items[i].url}\n\n`
                         }
                         thumb = await getBuffer(items[0].bestThumbnail.url)
                         await xbot.sendMessage(from, thumb, image, {quoted: mek, caption: `${hehe}───────────────\n\n┌ ◪ *DOWNLOAD*
         ├ ${prefix}ytmp3 [link yt] = Audio
         └ ${prefix}ytmp4 [link yt] = Video`})
                     } catch(e) {
                         reply('Didn\'t find anything or there is any error!')
                         reply(`Error: ${e.message}`)
                     }
                     break

//// PEMBATAS MENU SEARCH \\\
//// PEMBATAS MENU STORAGE\\\
case 'addsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(12)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xbot.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					xbot.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(12)
					 wanu = setik.indexOf(nmm)
					 setik.splice(wanu, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply(`Sukses menghapus sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					xbot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					case 'addvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Nama vn nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xbot.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					xbot.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listvn*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(7)
					 wanu = vien.indexOf(nmm)
					 vien.splice(wanu, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Sukses menghapus vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
case 'listvn' :
				case 'vnlisygt':
				case 'listyyyvn':
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn_`
					xbot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
				case 'addimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Nama image nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await xbot.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					xbot.sendMessage(from, `Sukses, silahkan cek dengan *${prefix}listimage*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
					try {
					 nmm = body.slice(10)
					 wanu = imagi.indexOf(nmm)
					 imagi.splice(wanu, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 reply(`Sukses menghapus image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*Image List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_Untuk mengambil image silahkan reply pesan ini dengan caption nama image_`
					xbot.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
 //// PEMBATAS MENU STORAGE\\\
 //// PEMBATAS MENU ASUPAN \\\
 //======= LIST ASUPANNYA=====/\\\
 
 case 'asupan':
 listMsg = {
 buttonText: 'LIST ASUPAN',
 footerText: '*@panggilajaal._*',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih menu asupannya disini, Gunakan Dengan Bijak :v`,
 sections: [
                     {
                      "title": `${jmn} - ${week} ${weton} - ${calender}`,
 rows: [
                          {
                              "title": "random",
                              "rowId": ""
                           },
                           {
                             "title": "cecanrandom",
                              "rowId": ""
                          },
                          {
                              "title": "cecanvietnam",
                              "rowId": ""
                           },
                           {
                              "title": "cecanmalaysia",
                              "rowId": ""
                           },
                           {
                              "title": "cecankorea",
                              "rowId": ""
                           },
                           {
                              "title": "cecanindonesia",
                              "rowId": ""
                           },
                           {
                              "title": "cecanjepang",
                              "rowId": ""
                           },
                           {
                             "title": "cecanthailand",
                              "rowId": ""
                          },
                          {
                              "title": "hijaber",
                              "rowId": ""
                           },
                           {
                              "title": "santuy",
                              "rowId": ""
                           },
                           {
                              "title": "ukhti",
                              "rowId": ""
                           },
                           {
                              "title": "bocil",
                              "rowId": ""
                           },
                           {
                              "title": "ghea",
                              "rowId": ""
                           },
                           {
                              "title": "rika",
                              "rowId": ""
                           },
                        ]
                     }],
 listType: 1
}
xbot.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fvid})
break
 //━━━━━━━━━━━━━━━[ BAHAN ASUPAN ]━━━━━━━━━━━━━━━━━//
 case 'cecanvietnam':
 reply(mess.wait)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
xbot.sendMessage(from, goo, image, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
case 'cecanrandom':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
buffer = await getBuffer(ini.result.url)
xbot.sendMessage(from, buffer, image, {quoted: fvid, caption: ''})
break
case 'hijaber':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
xbot.sendMessage(from, buffer, image, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
case 'santuy':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
xbot.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
case 'ukhti':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
xbot.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
case 'bocil':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
xbot.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
case 'ghea':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
xbot.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
case 'rika':
reply(mess.wait)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
xbot.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
//━━━━━━━━━━━━━━━[ FITUR CECAN ]━━━━━━━━━━━━━━━━━//
case 'cecanmalaysia':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
xbot.sendMessage(from, goo, image, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
case 'cecankorea':
reply(mess.wait)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
xbot.sendMessage(from, goo, image, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
case 'cecanindonesia':
reply(mess.wait)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
xbot.sendMessage(from, goo, image, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
case 'cecanjapan':
reply(mess.wait)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
xbot.sendMessage(from, goo, image, {quoted: fvid, caption: 'Asupannya Kakak!'})
break
case 'cecanthailand':
reply(mess.wait)
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=${zerkey}`)
reply(mess.wait)
goo = await getBuffer(huft.result.url)
xbot.sendMessage(from, goo, image, {quoted: fvid, caption: 'Asupannya Kakak!'})
break

//Hunte

case 'waifu':
reply(mess.wait)
anu = await getBuffer(`https://ziy.herokuapp.com/api/randomimage/waifu`)
xbot.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
case 'loli':
reply(mess.wait)
anu = await getBuffer(`https://ziy.herokuapp.com/api/randomimage/loli`)
xbot.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
break
case 'neko':
reply(mess.wait)
anu = await getBuffer(`https://ziy.herokuapp.com/api/randomimage/neko`)
xbot.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
break
case 'husbu':
reply(mess.wait)
anu = await getBuffer(`https://ziy.herokuapp.com/api/randomimage/husbu`)
xbot.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
break
case 'megumi':
reply(mess.wait)
anu = await getBuffer(`https://ziy.herokuapp.com/api/randomimage/megumi`)
xbot.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./media/image/xbot.jpg')})
break
//// PEMBATAS MENU ASUPAN \\\
//// PEMBATAS MENU TOLLS \\\
case 'get':
   case 'fetch':
               if(!c) return reply('Linknya Websitenya?')
               fetch(`${args[0]}`).then(res => res.text())  
               .then(bu =>{
               reply(bu)
               })   
               break			
//// PEMBATAS MENU TOLLS \\\
//// PEMBATAS MENU TENTANG BOT \\\ 
case 'sendfile':
           if(!isOwner && !mek.key.fromMe) return freply(mess.only.owner)      
           if (!c) return reply(`Example : ${prefix+command} ./lib/simple.js|simple.js`)
           namaf = c.split('|')[0]
           fnama = c.split('|')[1]
           anud = fs.readFileSync(namaf)
           xbot.sendMessage(from, anud, document, {mimetype:'jpg/application', filename:`${fnama}`})
           break                   
        case 'infobot':
        case 'info' :
        case 'botinfo':
        ptod = "6285158060230@s.whatsapp.net"
        stod = `${sender}`
        uwu = '```'
       stst = await xbot.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
			
       menu = `*Halo ${pushname} 👋🏻*
╲╲╭━━━━╮
╭╮┃▆┈┈▆┃╭╮
┃╰┫▽▽▽┣╯┃
╰━┫△△△┣━╯
╲╲┃┈┈┈┈┃
╲╲┃┈┏┓┈┃
▔▔╰━╯╰━╯
BOT-INFO
- Owner : @${otod.split('@')[0]}
- Battery : ${baterai.battery}
- Mode : ${publik ? 'Public' : 'Self'}
- Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
- Total Hit : ${cmhit.length}

TIME-INFO
- ${tampilUcapan} ${pushname}
- Wib : ${timeWib}
- Wita : ${timeWita}
- Wit : ${timeWit}  
- Hari : ${week} ${weton}
- Tanggal : ${calender}`
sendButLocation(from,  `${menu}`, `${uwu}© Xbot ${uwu}`, {jpegThumbnail:ofrply}, [{buttonId:`${prefix}script`,buttonText:{displayText:'SCRIPT🔥'},type:1}, {buttonId:`${prefix}ofc`,buttonText:{displayText:'GRUP OFFICIAL👥'},type:1}], {contextInfo: { mentionedJid: [ptod,dtod,otod,stod]}})
break
case "report":
  case "reportbug":
    case "bugreport":
      case "error":
  if (args.length < 1) return reply('[ ! ] Pesannya mana? Contoh › *!bugreport Kak, Menu error.*') 
const kontil = body.slice(8)
                      if (kontil.length > 300) return xbot.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var tonmor = mek.participant
                       const buseh = `*[BUG REPORT]*\nNomor : @${tonmor.split("@s.whatsapp.net")[0]}\nPesan : ${kontil}`

                      var options = {
                         text: buseh,
                         contextInfo: {mentionedJid: [tonmor]},
                     }
                    xbot.sendMessage('6285158060230@s.whatsapp.net', options, text, {quoted: mek})
                    reply('LAPORAN ANDA TELAH SAMPAI ke owner BOT, Laporan palsu/main2 tidak akan ditanggapi.')
                    break
case 'isbaileys': 
case 'bail': 
case 'baileys':
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'q': 
    if (!m.quoted) return reply('reply pesan!')
    let qse = xbot.serializeM(await m.getQuotedObj())
    if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
    await qse.quoted.copyNForward(m.chat, true)
break
case 'listgc':
case 'gclist':
case 'listgroup':
                case 'listgrup':
                case 'listgrop':
                case 'gruplist':
                case 'groplist':
                case 'grouplist':
  const txs = xbot.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`- ${xbot.getName(v.jid)}\n${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`\n\n`
  reply(txs)
  break
case 'tes':
case 'cek':
 case 'bot':
 if (!isGroup) return reply('Oke kak, Bot Sedang Online nih 👋🏻')
 runtime = process.uptime()
 const buttons = [
  {buttonId: `!000`, buttonText: {displayText: 'Oke‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n\nJadi gini, Aku mau jujur ke Kalian Semua, Kalau aku itu Gay dan Anak Haram, Aku sedang mencari Pria Gay untuk jadi pasanganku di Jerman, Kalau kalian mau atau ada kenalan Gay, Pc aja yah, Masih Anget kok  ( ◜‿◝ )♡'}, type: 1},
  ]
const buttonMessage = {
  headerType: "IMAGE",
  contentText: `Hai ${pushname}\n\n⏲️ Bot Telah Aktif Dalam Waktu :\n*${waktu(runtime)}*`,
  footerText: `Klik Oke untuk melanjutkan\n*@panggilajaal._*`,
  buttons: buttons,
  headerType: 1
  }  
 var group = await xbot.groupMetadata(from)
 var member = group['participants']
 var mem = []
 member.map(async adm => {
 mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
 })
 var options = {contextInfo: { mentionedJid: mem },quoted: fvid}
  xbot.sendMessage(from, buttonMessage, MessageType.buttonsMessage, options)
  break
case 'runtime':
if (!isGroup) return reply(`${waktu(runtime)}`)
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)

members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(alpa, members_id, false)
break
case 'd':
case 'd':
				case 'del':
				case 'delete':
					xbot.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
case 'blocklist':
  case 'listblock':
  let blockede = xbot.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != xbot.user.jid)
           xbot.reply(m.chat, `┌「 *List Nomor Yang diblock Bot* 」` + `\n` + blockede.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n└────`, m, { contextInfo: { mentionedJid: blocked } })
           break
case 'owner':
	case 'creator':
case 'developer':
		case 'author':
let ini_list = []
for (let i of ownerNumberr) {
const vname = xbot.contacts[i] != undefined ? xbot.contacts[i].vname || xbot.contacts[i].notify : undefined
ini_list.push({
"disName": `Developer ${NamaBot}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;XBOT;;;\nFN:${vname ? `${vname}` : `${xbot.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
xbot.sendMessage(from, {
"disName": `mekeloper ${NamaBot}`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
		anu =`Hai kak ${pushname}, Itu nomor Pembuat Bot ini, Mau tau Apalagi nih?`
 buttonown = [
{buttonId: `iggw`, buttonText: {displayText: 'Instagram'}, type: 1},
{buttonId:`sc`,buttonText:{displayText:'Script'},type:1},
]
const btnskuy = {
    contentText: `${anu}`,
    footerText: '@panggilajaal._',
    buttons: buttonown,
    headerType: 1
}
await xbot.sendMessage(from, btnskuy, MessageType.buttonsMessage, {quoted: ftrol})
		break
break
case 'speed':
               case 'ping':
                     const timestampi = speed();
                     const latensyi = speed() - timestampi
                     reply(`Speed: ${latensyi.toFixed(4)} Second`)
                     break
                  case 'return':
                  if (!isOwner) return reply(mess.only.ownerB)
                     return xbot.sendMessage(from, JSON.stringify(eval(body.slice(8))), text, {quoted: mek})
                     if (err) return xbot.sendMessage(from, `root @dcode-denpa:~ ${err}`, text, { quoted: mek })
                       break
case 'status':
case 'stats':
				var groups = xbot.chats.array.filter(v => v.jid.endsWith('g.us'))
				var privat = xbot.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
				var ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
					uptime = process.uptime();
					const timestampu = speed();
					const totalChat = await xbot.chats.all()
					const latensi = speed() - timestampu
					var total = math(`${groups.length} ${privat.length}`)
					const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = xbot.user.phone
					stamtus = `⍟ ────────────────── ⍟

Private Chat : ${privat.length}
Group Chat : ${groups.length}
Total Chat : ${totalChat.length}

Runtime : ${kyun(uptime)}
Baterai : ${baterai.battery}
Charged : ${baterai.isCharge}
Mode : ${publik ? 'public' : 'self'}
Prefix : ${multi ? 'Multi Prefix' : 'No Prefix'}
Penggunaan Ram : ${ram2}
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Uptime : ${kyun(os.uptime())}
MNC : ${mnc}
MCC : ${mcc}
Device Model: ${xbot.user.phone.device_model}
Device Manufactur : ${device_manufacturer}
Wa Version: ${xbot.user.phone.wa_version}
Os Version: ${xbot.user.phone.os_version}

⍟ ────────────────── ⍟`
reply(stamtus)
break
//// PEMBATAS MENU TENTANG BOT \\\
//// PEMBATAS MENU CONVERT \\\
case 'robot':
   encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
   medial = await xbot.downloadAndSaveMediaMessage(encmedial)
   ran = getRandom('.mp3')
   exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(medial)
   if (err) return reply(mess.error.api)
   hah = fs.readFileSync(ran)
   xbot.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 234, ptt:true, quoted: mek})
   fs.unlinkSync(ran)
   })
   break
   case 'gemuk':
                  encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  mediaz = await xbot.downloadAndSaveMediaMessage(encmediaz)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(mediaz)
                     if (err) return ephe('Error!')
                     hah = fs.readFileSync(ran)
                  xbot.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 234, quoted:mek})
                     fs.unlinkSync(ran)
                  })
                  break
   case 'balik':
      encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
      mediau = await xbot.downloadAndSaveMediaMessage(encmediau)
      ran = getRandom('.mp3')
      exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
   fs.unlinkSync(mediau)
   if (err) return reply('Error!')
   hah = fs.readFileSync(ran)
   xbot.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 234, quoted:mek})
   fs.unlinkSync(ran)
      })
   break
   case 'bass':                 
                  encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                  mediao = await xbot.downloadAndSaveMediaMessage(encmediao)
                  ran = getRandom('.mp3')
                  exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
                     fs.unlinkSync(mediao)
                     if (err) return reply('Error!')
                     hah = fs.readFileSync(ran)
                     xbot.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 234, quoted:mek})
                     fs.unlinkSync(ran)
                  })
               break
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await xbot.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						xbot.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'detikvideo':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await xbot.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						xbot.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
//// PEMBATAS MENU CONVERT
default:
 	if (isCmd) {
				tidakada = `[ ! ] Hai *${pushname}* \nCommand *!${command}* tidak tersedia, Silahkan cek fitur  di Menu`

tidakk = [{buttonId: `.menu`, buttonText: {displayText: 'MENU BOT'}, type: 1}]
const tidakbutton = {
    contentText: `${tidakada}`,
    footerText: 'Command Tidak Ditemukan',
    buttons: tidakk,
    headerType: 1
}
xbot.sendMessage(from, tidakbutton, MessageType.buttonsMessage, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
}
break
		}
		if (isTTT && iser2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.er1.split('@')[0]}=❌
Player2 @${tty.er2.split('@')[0]}=⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran = @${tty.er1.split('@')[0]}`
  xbot.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
xbot.sendMessage(from, `Yahh @${tty.er2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.er2]}})
}
}

if (isTTT && iser1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran...')
s = '❌'
main[0].angka[nuber] = s
main[0].gilir = main[0].er1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳Result Game Tictactoe 🎲

*Yeyyy Permainan Di Menangkan Oleh *@${tty.er1.split('@')[0]}*\n`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
xbot.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri 🗿👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

er2 @${tty.er2.split('@')[0]}=⭕
er1 @${tty.er1.split('@')[0]}=❌

${ttt}

Giliran = @${tty.er2.split('@')[0]}`
 xbot.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
}
if (isTTT && iser2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].er2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*?? Result Game Tictactoe 🎲*

Yeyyy Permainan Di Menangkan Oleh *@${tty.er2.split('@')[0]}*\n`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
xbot.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.er2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

er1 @${tty.er1.split('@')[0]}=⭕
er2 @${tty.er2.split('@')[0]}=❌

${ttt}
 
Giliran = @${tty.er1.split('@')[0]}`
 xbot.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.er1,tty.er2]}})
 }
 
 
 
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
	}
    }
    }
    }
    }
    }
    }
