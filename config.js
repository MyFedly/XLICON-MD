const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "33757131565"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://ahil1:787191784abhi@ahil1.kzr1tt3.mongodb.net/?retrywrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFTcHJlOEhGWXNZSFJDTG83Ym96UHRqTkgrNjNRWW41eG9JS0ZLZFhsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1hXOGFWWFRreSs3VTVvVE00UW9xZFdxYzVaSWMwM3A3OHRvM294M3FBdz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSzFWbyswZUlndXJPTTlzWmxxRzF4NWpQdnp4VGdjUmhzT1BKUy9PMkcwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrTTVyYWtBRnlrNWx1VnAzWi9rZ2txWm5nNXZKM0szMHdMdElVVVlYNUVRPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9MZlN2Wk94TmM2REtxall0NVhSN0JlenJiclBmbUwvMW5BZnNkNDNkMEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5kNnpQWCtjT1BDdlFQdzZnYkwxd3JZT1FBaXkxWnJreGNuazN3OTlKbUE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjeFFYaXhBU2ZiOGViVHlNQ3JtL2E0UWN4MmZOeUVRYTJzVm1oV3Bmb2lRNTI0cnE5K2Vnb3RzaVV3aGJFSmZmN1d0Y1B0WnYrK0EyNWdRZXVRekFndz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjQ4LCJhZHZTZWNyZXRLZXkiOiJiUGY4Z1VVN2I0Mm9YR0w2Rkt1S2pPQUlQbGl2ZFZSQS9NbzlXWU9ZWFRNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIOHRwaFp5dlNmLW8xT3lrSHNlZmR3IiwicGhvbmVJZCI6IjAxNzFiMGI4LTRmMmYtNDNjOS04MGI0LTU3NWMyMjZmN2Q2MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUkxBNjJiMmNzYVdtYU9KeTZrTnhPNDhiVTg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlObkdiU0pIYVo1N0VXZExEODUrNGtOeStPOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0ltcXU3QUZFSnlSa0tvR0dBRT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTTNMempIenBxU0R3NlJVMzNKZkVrYVdRU3hyYVprQU1ON1pIbVR5UXVuMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVC9IUHJnYmh3MVU2VWp1TG42VVVBZkpuRkp6V2kzMDRBMWZiNzNCbkgxNjVNQ1VndFJ1Ymh6cVJ2TVRnWXpycEhmazhBTE9TVjZiVEFRaTdEdDljQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IlZRc1JOS2F6anI4TDJNZk9nclZHMjRiYnh1WExUcE5YcXIvNU84RkZDbXJiTCs4dW9vWWdnWnhVeHN2d2x2VDRSMDJ4RlIzN3c0V0U4bnVyVjRXNGlBPT0ifSwibWUiOnsiaWQiOiIzMzc1NzEzMTU2NTo3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkJPVOKBtOKBtOKBtCA94oGgX+KBoD0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMzM3NTcxMzE1NjU6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUTnk4NHg4NmFrZzhPa1ZOOXlYeEpHbGtFc2EybVpBRERlMlI1azhrTHA5In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjk4OTU3NDcwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVmZSJ9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Bot444',
  packname:  process.env.PACK_NAME || 'BOT⁴⁴⁴',
   
  botname:   process.env.BOT_NAME === undefined ? "BOT-⁴⁴⁴" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Fedlytech' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '!' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? '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' : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
