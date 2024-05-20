let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
${mg}*╭━[ ${wm} ]━⬣*
*┃➥ ${usedPrefix + command} abrir*
*┃➥ ${usedPrefix + command} cerrar*
*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  

m.reply(`*Grupo abierto*`)
//conn.sendButton(m.chat, `${eg}Podes hablar!`, `Grupo abierto\n${wm}`, pp, ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m)
}
  

m.reply(`*Grupo cerrado*`)
//conn.sendButton(m.chat, `${eg}Solo admins`, `Grupo cerrado\n${wm}`, pp, [['Solo admins', '.s'], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m)
}}
handler.help = ['group open / close', 'gp abrir / cerrar']
handler.tags = ['group']
handler.command = /^(gp|gp)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler
