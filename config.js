const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "50948134767"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
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
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0ZjalE2UEdJejE3WWhGdWFWY3p0UG5SQUlzMVB3Rmk2ZDE4WFQwMklVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0JXV0NZUS9sWlJPaC9OcStmb2MvdDY3RzZMTVUrZEVzYTZiN2ZtNmdsZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUC9aS1grYzliVmdkM0RROFpTVUp4eDFhV1dlbjhFYkw4Q29vSkVTdUh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyU21sNEpDYXBMWlZWNkxRcVdhbHFGYitkWDhZUzBDZ2pzRWZwYXUvMXhNPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitJN1FjQVNDQ3I5V05RYmFTTmxTcHhVMS9rbGNjOC9DeXhDbkdJTytCMzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZvTlZsdHc2OFlMT1VmZ3pudFBvTU82b0Z0azJPb0U4Y0U0RVJsc2cveTA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBVXhPZ0ZKZzlhNVZLL0JweG9TbUYrZ2M4MExscDA0MVZqU2UyTEowUTVHdHpnNVMyZWZiSzljSDJhOTZWVDZOLzZKTXg5V1YwSjhXei9rWjVPWVdoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjg1LCJhZHZTZWNyZXRLZXkiOiJ2Vi9icGtmaXp2N3VsYmRwdi9nOWdFRHB0ZFdQWXBkazI0R0x6cFpHUTlvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaT2lwUmcwdVI5MnhhR2xJZHJfQWdBIiwicGhvbmVJZCI6ImY1NGViZGFmLWY1MDMtNGVjNi1iN2U4LTBlODkzYTI3MTIxOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1SWhrUlRLazZOL2xOekcyS3F3Ky9UZi9HMzg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpEeEZHV2dMR1plNlpXbVpTbG5QOWxDOTYyQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BMTDJkRUVFSXV5aHFvR0dBST0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieEZhdkw0OWtMVy8xRTNkSmtIcXJjb2xCeklYUC8rTGNOYXlRcFJJUXdBTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWHZ5bkhpNHJRdlp4RnowSFhESXR3T2M1S21QdU9TLzRzV2VLTTV2OWpiZWt3czA2dDN3dXFTc3htR0ZjM0VTSEx0UFRpMGpEUWxDSTAydFFxbDdFQXc9PSIsImRldmljZVNpZ25hdHVyZSI6Inp1eVRDLzZhbCt4NDVzcCswWGlaVXg4aFJWeFhuY3MzTm5OcFRpMlJYZUMyY0pRc3JEeFp6OFRXeEpUbTNoakxFb2ErUlo1Zm13N081Z2syQkdsc2pRPT0ifSwibWUiOnsiaWQiOiI1MDk0ODEzNDc2Nzo0N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJZb3V0dWJlciDihpLigaDihpIgRkVETFkgVEVDSCDwn5OaIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ4MTM0NzY3OjQ3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNSV3J5K1BaQzF2OVJOM1NaQjZxM0tKUWN5RnovL2kzRFdza0tVU0VNQUQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTg3OTc4MzZ9 ",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Fedly Bot',
  packname:  process.env.PACK_NAME || 'MADE BY SALMAN AHMAD',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Fedlytech' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '-' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? '' : process.env.OPENAI_API_KEY,
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
