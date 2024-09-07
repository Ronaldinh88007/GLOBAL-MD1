//base by 🗽🌊🐼🥷🥸🧑‍💻📱
//re-upload? recode? copy code? give credit ya :)
//YouTube: @cyberpunk
//Instagram: lenin.l.k
//Telegram: t.me/Hub7s
//GitHub: @Hubdarkweb
//WhatsApp: +254112386921
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@cyberpunk

const { join } = require('path');
const gtts = require('node-gtts');
const { readFileSync, unlinkSync } = require('fs');

function tts(text, lang = 'id') {
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath = join(__dirname, '..XeonMedia/trash', (1 * new Date) + '.wav')
      tts.save(filePath, text, () => {
        resolve(readFileSync(filePath))
        unlinkSync(filePath)
      })
    } catch (e) { reject(e) }
  })
}

module.exports = { tts }