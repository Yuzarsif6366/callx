const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
    
if(!message.member.hasPermission("ADMINISTRATOR")){ 
  const embed = new Discord.RichEmbed()
  .setTitle(`Hoşgeldin Kanal Sistemi`)
  .setDescription('Bu Komutu Kullanabilmek İçin \`\`Yönetici\`\` Yetkisine Sahip Olmalısın')
  .setColor('BLACK')
  return message.reply(embed)
}
    let kanal = message.mentions.channels.first()
    if(!kanal){ 
  const embed = new Discord.RichEmbed()
  .setTitle(`Hoşgeldin Kanal Sistemi`)
  .setDescription('Lütfen Kanal Etiketleyiniz Örnek: **o!hoşgeldin-kanal-ayarla <#kanal>**')
  .setColor('BLACK')
  return message.reply(embed)
    }
        db.set(`hoşgeldin_${message.guild.id}`, kanal.id)
     const basari = new Discord.RichEmbed()
    .setDescription(`Hoşgeldin Kanalı Başarıyla ${kanal} Olarak Ayarlandı`)
    .setColor('BLACK')
    return message.channel.send(basari)
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hgka'],
    permlevel: 4
};

exports.help = {
    name: "hoşgeldin-kanal-ayarla"
}