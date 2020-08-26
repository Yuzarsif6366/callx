const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")){
      const embed = new Discord.RichEmbed()
      .setTitle(`Hoşgeldin Kanal Sistemi`)
      .setColor('BLACK')
      .setDescription('Bu Komutu Kullanabilmek İçin \`\`Yönetici\`\` Yetkisine Sahip Olmalısın')
      return message.reply(embed)
    }
    const emoji = (client.emojis.find("name", "hata").toString())
    if(!message.guild) {
        const hataemba = new Discord.RichEmbed()
        .setTitle(`${emoji} Bu komut özel mesajlarda kullanıma kapalıdır.`)
        return message.channel.send(hataemba)
    }

    db.delete(`hoşgeldin_${message.guild.id}`)
    const embed = new Discord.RichEmbed()
    .setTitle(`Hoşgeldin Kanal Sistemi`)
    .setColor('BLACK')
    .setDescription('Hoşgeldin Kanalı Başarıyla Sıfırlandı.')
    return message.reply(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hgks'],
    permlevel: 0,
};

exports.help = {
    name: "hoşgeldin-kanal-sıfırla"
}