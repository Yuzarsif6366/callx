const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async (client, message, args) => {
  
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanmak için `Yönetici` iznine sahip olmanız gerekir.')                                                                            
if(args[0] === "kapat") {
db.delete(`kayıtsızrol_${message.guild.id}`)
  message.channel.send(new Discord.RichEmbed()
                      .setColor('#2ecc71')
                      .setDescription(`Kayıtsız Rolü Başarıyla Kapatıldı!`))

} else {
  let kayıtsızrol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
let ilkRole;
  let ikirole;
  if (!kayıtsızrol) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('#e74c3c')
                                              .setDescription(`Kayıtsız Rolünü Belirlemelisiniz.`))
  else ilkRole = message.mentions.roles.first().id
  let kayıtszrol = await db.set(`kayıtsızrol_${message.guild.id}`, ilkRole)
  if (!message.guild.roles.get(ilkRole)) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('#e74c3c')
                                              .setDescription(`Etiketlediğiniz Rol Bulunamadı.\nEtiketlediğiniz Rolün Etiketlenebilirliğinin Aktif Olduğundan Emin Olunuz..`))

 message.channel.send(new Discord.RichEmbed()
                      .setColor('#2ecc71')
                      .addField('Durum', `<a:evt2:720569423626371083> Başarılı!`)
                      .addField(`Ayarlanan Kayıtsız Rolü`, `${kayıtsızrol}`)
                      .addField(`Rolü Ayarlayan`, `<@${message.author.id}>`)
                      .setTimestamp())
}}

exports.conf = {
    enabled: true,
    guildOnly: false,
   kategori: "kayıt",
    aliases: ['kayitsiz-rol', 'kayıtsızrol', 'kayıtsız-rol'],
    permLevel: 0
}

exports.help = {
    name: 'kayıtsız-rol',
    description: 'Sunucuya Yeni Gelen Üyeye Verilecek Rolü Belirler.',
    usage: 'kayıtsız-rol'
}
