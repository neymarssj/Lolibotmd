let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': '',
'close': '',
'abierto': '',
'cerrado': '',
'abrir': '',
'cerrar': '',
}[(args[0] || '')]
if (isClose === undefined)
throw `
${mg}*╭━[ ${wm} ]━⬣*
*┃➥ ${usedPrefix + command} abrir*
*┃➥ ${usedPrefix + command} cerrar*
*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  


}
  



}}
handler.help = ['group open / close', 'g abrir / cerrar']
handler.tags = ['group']
handler.command = /^(g|g)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler
