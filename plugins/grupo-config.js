let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v

}[(args[0] || '')]
if (isClose === undefined)
throw `
${mg}*╭━[ ${wm} ]━⬣*
*┃➥ ${usedPrefix + command} abrir*
*┃➥ ${usedPrefix + command} cerrar*
*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*
`.trim()

  

}
  


handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(g|g)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler
