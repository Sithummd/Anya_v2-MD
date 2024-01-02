const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "Bot sithuwa", 
  author: process.env.Author || "@PikaBotz",
  packname: process.env.PackName || "Queen Anya v2 MD",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "© Queen Anya Bot",
  prefa: process.env.Prefix || ['-'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "Bot sithuwa",
  ownernumber: process.env.Owner_Number || "94755975860",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "YOUR_MONGODB_URL",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "eyJub2lzZUtleSI_AN_YA_6eyJwcml2YXRlI_AN_YA_jp7I_AN_YA_nR5cGUiOiJCdWZmZXI_AN_YA_iLCJkYXRhI_AN_YA_joiTUt0MmJSRFQyc1FiQVpxdjBPVnBrZk1EUHlKbk9yQUVXcXRCQXFQbEpVND0ifSwicHVibGljI_AN_YA_jp7I_AN_YA_nR5cGUiOiJCdWZmZXI_AN_YA_iLCJkYXRhI_AN_YA_joiN29EcGJJVlZzcnovVW4rTWYxQ05qY0hnY0oxVzBBTDYrQno1N0dJczJSRT0ifX0sI_AN_YA_nBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyI_AN_YA_jp7I_AN_YA_nByaXZhdGUiOnsidHlwZSI_AN_YA_6I_AN_YA_kJ1ZmZlciI_AN_YA_sI_AN_YA_mRhdGEiOiJlRmFYWTFpU1l5N2tPZU0zcWQzOWROR2w2UzdtSkZjK0FWcmZQSCtZWjEwPSJ9LCJwdWJsaWMiOnsidHlwZSI_AN_YA_6I_AN_YA_kJ1ZmZlciI_AN_YA_sI_AN_YA_mRhdGEiOiI_AN_YA_5d3FkMWEyRENneUVqTVh2SENDWXcrUHoyUUV2TTFRNGQ5MFJiWW9FK1VZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI_AN_YA_6eyJ0eXBlI_AN_YA_joiQnVmZmVyI_AN_YA_iwiZGF0YSI_AN_YA_6I_AN_YA_k9GeG56UEM1TjZjNFpoN2kyTm02VEYwOTRFekRxa3cvbWpQeVpGYWJuRVU9I_AN_YA_n0sI_AN_YA_nB1YmxpYyI_AN_YA_6eyJ0eXBlI_AN_YA_joiQnVmZmVyI_AN_YA_iwiZGF0YSI_AN_YA_6I_AN_YA_jdSMWlWSDJUUWtHelJ2dmtJOW1NWEFpL3hRWmk0QTZGbU8wMmZRUzNYWFk9I_AN_YA_n19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI_AN_YA_6eyJwcml2YXRlI_AN_YA_jp7I_AN_YA_nR5cGUiOiJCdWZmZXI_AN_YA_iLCJkYXRhI_AN_YA_joiT0d4TUV6cjZ2N0ZSeS9sTFlwR28zSVI_AN_YA_vSFlBeHhwWFYrblkrUTBKWDdWND0ifSwicHVibGljI_AN_YA_jp7I_AN_YA_nR5cGUiOiJCdWZmZXI_AN_YA_iLCJkYXRhI_AN_YA_joieTN5YnBvWHpSSU4xeFdDcHZNQkRPSUl5b0hwODBtdWJ6TEduNnFkaGVUND0ifX0sI_AN_YA_nNpZ25hdHVyZSI_AN_YA_6eyJ0eXBlI_AN_YA_joiQnVmZmVyI_AN_YA_iwiZGF0YSI_AN_YA_6I_AN_YA_lZTcFpFNXFtcS9KN0gyZit0dUlDOHFvZjJSczVlUzdDTTF0Qm1hTndJNmtFNjY2THhGUmFwM2RuT3RxK2VVdnBzVmd0OE0rUlAyMkhZeXdYalVUa0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI_AN_YA_6MjMyLCJhZHZTZWNyZXRLZXkiOiJ0OXFKTW5abWI_AN_YA_xa2FWR0hQZDBVOCtldkduRDdCQjBxMFhNSGtrWVNScXpNPSI_AN_YA_sI_AN_YA_nByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI_AN_YA_6W10sI_AN_YA_m5leHRQcmVLZXlJZCI_AN_YA_6MzEsI_AN_YA_mZpcnN0VW51cGxvYWRlZFByZUtleUlkI_AN_YA_jozMSwiYWNjb3VudFN5bmNDb3VudGVyI_AN_YA_jowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5TzBjMzE0U1Q4S0xXSk4yUzB2ZWtnI_AN_YA_iwicGhvbmVJZCI_AN_YA_6I_AN_YA_jk1ODJkOGY0LWU4M2MtNDUzNi04MjM1LTI_AN_YA_2NGE2N2JlYjNhMyI_AN_YA_sI_AN_YA_mlkZW50aXR5SWQiOnsidHlwZSI_AN_YA_6I_AN_YA_kJ1ZmZlciI_AN_YA_sI_AN_YA_mRhdGEiOiJobjJvcjhodiszU0hhbzRBazJETVdKeTdJaDQ9I_AN_YA_n0sI_AN_YA_nJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI_AN_YA_6eyJ0eXBlI_AN_YA_joiQnVmZmVyI_AN_YA_iwiZGF0YSI_AN_YA_6I_AN_YA_jVzeHFhM2pOdjAzS2tMZHRtRUJMSk1jMVdpUT0ifSwicmVnaXN0cmF0aW9uI_AN_YA_jp7fSwiYWNjb3VudCI_AN_YA_6eyJkZXRhaWxzI_AN_YA_joiQ01peXNlY0ZFS2VrMEt3R0dBSWdBQ2dBI_AN_YA_iwiYWNjb3VudFNpZ25hdHVyZUtleSI_AN_YA_6I_AN_YA_ldTclFEY0tFTUp2SC9YeklBWWp5S1VHdURTRUxsWmJ0bXRXTkJLSHN3Z2s9I_AN_YA_iwiYWNjb3VudFNpZ25hdHVyZSI_AN_YA_6I_AN_YA_mR1NjU2ZVNodG9nRGN1Qk1ra0dpQ0U0d1VOVXBHY1lUcXNjNG01ZVQ1ekNzcjltVExUblZVVHJSbTUzWUROWGRrMTlPWXNQdjdERnkxblZLYWNmZEJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlRW8vNkQwUkJEc29GS014WEdhdEx0ZEYwd2djNGtqbjQrbWczNzJLSDVJS3NwcExNSmRLZGdrU0VNN2h6d0ZBd1MrYVhkMXZBR2ptaGpyZzdKZk1DZz09I_AN_YA_n0sI_AN_YA_m1lI_AN_YA_jp7I_AN_YA_mlkI_AN_YA_joiOTQ3NTU5NzU4NjA6M0BzLndoYXRzYXBwLm5ldCI_AN_YA_sI_AN_YA_m5hbWUiOiJTaXRodW0ifSwic2lnbmFsSWRlbnRpdGllcyI_AN_YA_6W3siaWRlbnRpZmllciI_AN_YA_6eyJuYW1lI_AN_YA_joiOTQ3NTU5NzU4NjA6M0BzLndoYXRzYXBwLm5ldCI_AN_YA_sI_AN_YA_mRldmljZUlkI_AN_YA_jowfSwiaWRlbnRpZmllcktleSI_AN_YA_6eyJ0eXBlI_AN_YA_joiQnVmZmVyI_AN_YA_iwiZGF0YSI_AN_YA_6I_AN_YA_kJWa3EwQTNDaERDYngvMTh5QUdJOGlsQnJnMGhDNVdXN1pyVmpRU2g3TUlKI_AN_YA_n19XSwicGxhdGZvcm0iOiJzbWJhI_AN_YA_iwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wI_AN_YA_joxNzA0MjAyNzk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUQzOSJ9", 
  image_1: readFileSync('./lib/Assets/image_1.jpg'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("./lib/Assets/image_3.jpg"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Bot sithuwa" 
global.author = process.env.Author || "bot sithu" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Bot sithu" 
global.ownernumber = process.env.Owner_Number || "94755975860" 
global.adress = process.env.Continent || "Asia, Sri lanka, kandy" 
global.timezone = process.env.TimeZone || "Asia/colombo" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('./lib/Assets/image_1.jpg') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

