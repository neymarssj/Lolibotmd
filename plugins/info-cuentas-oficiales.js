let media = 'https://qu.ax/dcAc.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `\`『 ＣＵＥＮＴＡＳ ＯＦＩＣＩＡＬＥＳ 』\`

\`𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘 (𝙇𝙤𝙡𝙞𝘽𝙤𝙩)\`
> *${bot}*

\`𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘 (𝙉𝙤𝙫𝙖𝘽𝙤𝙩)\`
> *https://wa.me/message/52LYVVT7DB6AH1*

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
\`『 ᴳᶦᵗᴴᵘᵇ ᵒᶠᶦᶜᶦᵃˡ 』\`   
* *${md}* 

\`『 ᴳʳᵘᵖᵒ ᵒᶠᶦᶜᶦᵃˡ ¹ 』\`   
* *${nn}* 

\`『  ᴳʳᵘᵖᵒ ᵒᶠᶦᶜᶦᵃˡ ²  』\`   
* *${nnn}* 

\`『  ᶜᵃⁿᵃˡ ᵈᵉ ᵂʰᵃᵗˢᴬᵖᵖ / ᵘᵖᵈᵃᵗᵉ  』\`   
* *${nna}* 

\`『  ᵃˢᶦˢᵗᵉⁿᶜᶦᵃ ᵖᵃʳᵃ ᵘˢᵘᵃʳᶦᵒˢ ᶠᵃᶜᵉᵇᵒᵒᵏ 』\`   
* *${fb}* 

\`『  ᵍʳᵘᵖᵒ ᵀᵉˡᵉᵍʳᵃᵐ 』\`   
* *https://t.me/+EcdN9fktnQQwY2Ex* 

\`『  ᵀᶦᵏᵀᵒᵏ 』\`   
* *${tiktok}* 

\`『  ʸᵒᵘᵀᵘᵇᵉ 』\`   
* *${yt}* 

\`『  ᴳʳᵘᵖᵒ ᶠᵃᶜᵉᵇᵒᵒᵏ 』\`   
* *${face}* 

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
\`『 ⱽᶦˢᶦᵗᵃ ᵗᵒᵈᵒˢ ˡᵒˢ ᵉⁿˡᵃᶜᵉˢ ᵒᶠᶦᶜᶦᵃˡᵉˢ ᵉⁿ ᵘⁿ ᵘⁿᶦᶜᵒ ˡᵘᵍᵃʳ 』\`   
• https://atom.bio/lolibot

${wm}`
await conn.sendFile(m.chat, media, 'loli.mp4', str, fkontak)}
handler.command = /^tutumen|cuentaskakakakakakak|cuentaofcisisisiisiss$/i
handler.register = true
export default handler
