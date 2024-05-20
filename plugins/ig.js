import fetch from 'node-fetch'
let handler = async (m, { conn, text, command }) => {
if (!text) return conn.reply(m.chat, '⚠️Debes poner tu usuario de Instagram Y SIN "@".\n\n*Ejemplo:\n👉.ig usuario*', m);
if (m.mentionedJid && m.mentionedJid[0]) return conn.reply(m.chat, '⚠️No puedes mencionar a alguien.', m);
if (text.startsWith('@')) return conn.reply(m.chat, '⚠️Debes ponerlo sin el "@"', m);
m.react("🤳")
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/10a4b0387eb3ece8b4413.jpg')
let media = await(await fetch(pp)).buffer()
let link = await uploadImage(media)
let name = await conn.getName(who)
let instagramUrl = https://www.instagram.com/${text};
let str = ☝️ \`𝙏𝙊𝘾𝘼 𝙇𝘼 𝙁𝙊𝙏𝙊\ ☝️

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
👤𝙄𝙂 𝙙𝙚: @${m.sender.split("@")[0]}

✨𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${text}

👇 \𝘛𝘢𝘮𝘣𝘪𝘦́𝘯 𝘦𝘭 𝘭𝘪𝘯𝘬 𝘢𝘣𝘢𝘫𝘰\📌

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔
${instagramUrl} 

▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔`

await conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": await(await fetch(link)).buffer(), 
"title": 🙂 ${text} 🙂, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": link, 
"sourceUrl": ${instagramUrl},
}
}
}, { quoted: fkontakz })
}
handler.command = /^ig$/i
handler.group = true
handler.botAdmin = true
//handler.rowner = true
export default handler
