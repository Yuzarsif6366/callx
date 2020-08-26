const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Yeterli Yetkin yokmuş gibi görünüyor.`);
  const sayacsayisi = await db.fetch(`sayac_${message.guild.id}`);
  const sayackanali = message.mentions.channels.first()
  

        
  if(!args[0]) {
    message.channel.send('**<a:source:721696022287351899> | Ayarlamak istediğin sayı girmelisin. c!sayaç 10 #sayaç**')
    return
  }
  
  if(!sayackanali) {
    message.channel.send('**<a:source:721696022287351899> | Ayarlamak istediğin kanalı girmelisin. ``c!sayaç 10 #sayaç``**')
  }
  
  
  if(args[0] === "kapat") {
    if(!sayacsayisi) {
      message.channel.send(`**<a:evet:721696031426871316> | Ayarlanmayan şeyi sıfırlayamazsın.**`)
      return
    }
    
    db.delete(`sayac_${message.guild.id}`)
    db.delete(`sayacK_${message.guild.id}`)
    message.channel.send(`**<a:evet:721696031426871316> | Sayaç başarıyla sıfırlandı.| Tekrar açmak için: \`c!sayaç-ayarla <HedefSayı> <#YazıKanalı>**`)
    return
  }
  
  if(isNaN(args[0])) {
    message.channel.send(` Örnek kullanım: c!sayaç <HedefSayı> <#YazıKanalı>`)
    return
  }
 
        if(args[0] <= message.guild.members.size) {
                message.channel.send(`**<a:source:713850851898294322> | Sunucudaki kullanıcı sayısından yani (${message.guild.members.size}) sayısından daha yüksek bir değer girmelisin.**`)
                return
        }
  
  db.set(`sayac_${message.guild.id}`, args[0])
  db.set(`sayacK_${message.guild.id}`, sayackanali.name)
  
  message.channel.send(`**<a:evet:721696031426871316>  | Sayaç \`${args[0]}\` olarak ayarlandı! | Sayaç kanalı ${sayackanali} olarak ayarlandı.| Sayaç komudunu kapatmak için c!sayaç-ayarla kapat yazınız!**`)
}
 
exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: [],
    permLevel: 0
}
 
exports.help = {
        name: 'sayaç-ayarla',
        description: 'Sayaç Komududur.',
        usage: 'sayaç <sayı> <#kanal> / sıfırla'
}