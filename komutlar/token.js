const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
//Gua
exports.run = (client, message, params) => {
    if (!message.guild) {
    const guapo = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(guapo); }
    if (message.channel.type !== 'dm') {
      const guapo = new Discord.RichEmbed()
    .setAuthor(message.author.username + ' Al Hırsız Kardeşim Botun Tokeni Sende Zekisin Bravo.')
    .setColor('BLUE')
    .setTimestamp() //Guapo
    .setDescription('')
        .setImage(`https://cdn.discordapp.com/attachments/702149613221707797/710979286428942406/indir.gif`)
    return message.channel.sendEmbed(guapo);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'token',
  description: 'Botun tokenini alırsınız',
  usage: 'token'
};
