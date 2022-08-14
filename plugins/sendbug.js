let handler = function (m) {
let key = {}
 try {
 	key.remoteJid = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
	key.fromMe = m.quoted ? m.quoted.fakeObj.key.fromMe : m.key.fromMe
	key.id = m.quoted ? m.quoted.fakeObj.key.id : m.key.id
 	key.participant = m.quoted ? m.quoted.fakeObj.key.remoteJid : m.key.remoteJid
 } catch (e) {
 	console.error(e)
 }
 conn.sendMessage(m.chat, { delete: key })}
}
handler.tags = ['owner']
handler.command = /^(bugdel(ete)?)$/i
handler.limit = false
handler.rowner = true
handler.group = true
module.exports = handler
