const handler = async (m, {conn, isOwner}) => {
let q = m.quoted ? m.quoted : null
if (!q) return conn.reply(m.chat, '[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 "𝚅𝙴𝚁 𝚄𝙽𝙰 𝚅𝙴𝚉" 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝚁𝙴𝙲𝚄𝙿𝙴𝚁𝙰𝚁', m)
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image|video/.test(mime)) {
let result = await q.download?.()
await conn.sendFile(m.chat, result, null, null, m)
} else if (/audio/.test(mime)) { 
let result = await q.download?.()
await conn.sendMessage(m.chat, { audio: result, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
} else return conn.reply(m.chat, '[❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 "𝚅𝙴𝚁 𝚄𝙽𝙰 𝚅𝙴𝚉" 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝚁𝙴𝙲𝚄𝙿𝙴𝚁𝙰𝚁', m)
};
handler.command = /^r$/i;
handler.group = true
handler.botAdmin = true
//handler.rowner = true
export default handler
