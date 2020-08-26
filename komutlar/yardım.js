const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» <a:kural:721711129977683988> **__Callx! Bot Komutları Yardım Listesi__** <a:kural:721711129977683988> ')
.setTimestamp()
.addField('» <a:tmr:721696009104916563> **Yetkili Komutları** <a:tmr:721696009104916563>', '**c!yetkili**')

.addField('» <a:dc:721696032177520640> **Genel Komutlar** <a:dc:721696032177520640>', '**c!genel**')

.addField('» <a:anka2:721696014116978708> **Kayıt Komutları** <a:anka2:721696014116978708> ', '**c!kayıt-yardım**')

.addField('»  **Eğlence Komutları** ', '**c!eğlence**')



.addField(`<a:tmr:721696009104916563> Botu Ekle! <a:tmr:721696009104916563>`, `[Tıkla!](https://discord.com/oauth2/authorize?client_id=738761360699162634&scope=bot&permissions=805314622)`, true)


.setFooter('© Callx! Bot 2020' , client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};
