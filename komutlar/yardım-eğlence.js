const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('» <a:kural:721711129977683988> **__Callx!-Bot | Eğlence Komutları __** <a:kural:721711129977683988> ')
.setTimestamp()
.addField('**» <a:salateris:721696028201582673> Cs-Go da Kasa Açmanızı Sağlar** ', '**c!csgo-kasa-açma**')

.addField('**» <a:salateris:721696028201582673> Fbi Gifi Atar**','**c!fbi**')

.addField('**» <a:salateris:721696028201582673> Profilinize Hapishane Efekti Ekler**','**c!hapishane**')

.addField('**» <a:salateris:721696028201582673> Bot sizi Alkışlar** ', '**c!Alkış**')

.addField('**» <a:salateris:721696028201582673> Aşkınızı gösterir**','**c!aşk**')

.addField('**» <a:salateris:721696028201582673> Balık Tutar**','**c!balıktut**')
  
.addField('**» <a:salateris:721696028201582673> Espiri Yaparsınız** ', '**c!espiri**')
  
  .addField('**» <a:salateris:721696028201582673> Kedi yakalar** ', '**c!kediyakala**')

.addField('**» <a:salateris:721696028201582673> Kral olursunuz**','**c!kralol**')

.addField('**» <a:salateris:721696028201582673> Racon Kesersiniz**','**c!racon**')

.addField('**» <a:salateris:721696028201582673> Yumruk atar**','**c!yumrukat**')

.addField('**» <a:salateris:721696028201582673> Zar atar**','**c!zarat**')

.addField('**» <a:salateris:721696028201582673> Ambulansı arar**','**c!ara112**')

.addField('**» <a:salateris:721696028201582673> Polisi arar**','**c!ara155**')

.addField('**» <a:salateris:721696028201582673> Botun Tokenini Atar** ', '**c!token**')


.setFooter('© Callx!-Bot 2020', client.user.avatarURL)
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'eğlence'
};
