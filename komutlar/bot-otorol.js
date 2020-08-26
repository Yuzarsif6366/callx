const Discord = require('discord.js')
const fs = require('fs');


exports.run = async (client, message, args) => {

  const db = require('quick.db');
  

  let role = message.mentions.roles.first() || message.guild.roles.find(r => r.name === args.slice(0).join(' '));
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.önek;
  
  
  

    if(args[0] === 'kapat') {
   if (db.has(`botR_${message.guild.id}`) === true) {
     message.channel.send(`Bot Otorol başarıyla kaldırıldı`)
     db.delete(`botR_${message.guild.id}`)
     return
}
  message.channel.send(`Bot Otorol ayarlanmamış.`)
    return
  
  }

  
  
    if (!role) {
        return message.reply(`Lütfen bir rol etiketleyin veya rol adını yazın örnek: **${prefix}bototo-rol-ayarla @rol** veya **${prefix}bototo-rol-ayarla rol-adı** `)
    }

  
     db.set(`botR_${message.guild.id}`, role.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(` Bot Otorol başarıyla ayarlandı: **${role.name}**\nBotOtorRol kapatmak isterseniz **${prefix}bototorol kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bototo-rol', 'bototo-rol-belirle', 'bototorol'],
    permLevel: 4,
    kategori: "ayarlar",
}

exports.help = {
    name: 'bototo-rol-ayarla',
    description: 'Sunucuya birisi katıldıgında verilecek rolü ayarlar.',
    usage: 'oto-rol-ayarla <@rol>',
}