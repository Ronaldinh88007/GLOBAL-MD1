

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: Cyberpunk" //ur yt chanel name
global.socialm = "GitHub: Hubdarkweb" //ur github or insta name
global.location = "Kenya, Nairobi, Nairobi" //ur location

//new
global.botname = '© GLOBAL-𝐌𝐃' //ur bot name
global.ownernumber = ['+88001820414108'] //ur owner number, dont add more than one
global.ownername = '© Cyberpunk 📱🥷🐼TOpPLUG' //ur owner name
global.websitex = "https://www.youtube.com/@Cyberpunk"
global.wagc = "https://t.me/Hub7s"
global.themeemoji = '🪀'
global.wm = "Xeon Bot Inc."
global.botscript = 'https://github.com/Hubdarkweb/GLOBAL-MD' //script link
global.packname = "Sticker By"
global.author = "Cyberpunk\n\n+TopPLUG"
global.creator = "254112386921@s.whatsapp.net"
global.xprefix = '-'
global.premium = ["+88001820414108"] // Premium User

//channel id
global.xchannel = {
	jid: '120363319098372999@newsletter'
	}

//bot sett
global.typemenu = 'v12' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '91' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code

global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'

global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
