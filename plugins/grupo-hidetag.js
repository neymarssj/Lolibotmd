let generateWAMessageFromContent = (await import(global.baileys)).default
let handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
if (!text && !m.quoted) return conn.reply(m.chat, [❗] ᴘᴏɴɢᴀ ᴜɴ ᴛᴇxᴛᴏ ᴏ ʀᴇꜱᴘᴏɴᴅᴀ ᴀ ᴜɴ ᴍᴇɴꜱᴀᴊᴇ ᴅᴇ ᴛᴇxᴛᴏ/ɪᴍᴀɢᴇɴ/ᴠɪᴅᴇᴏ/ᴀᴜᴅɪᴏ/ꜱᴛɪᴄᴋᴇʀ, m)
try { 
conn.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(u => conn.decodeJid(u.id)) })
} catch {  
conn.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(u => conn.decodeJid(u.id))}, { ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
}
}

handler.customPrefix = /^h/i
handler.command = /^t$/i
handler.group = true
handler.botAdmin = true
handler.admin = true
//handler.rowner = true
export default handler
