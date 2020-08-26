const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('»  **__Callx!-Bot | Yetkili Komutları __** ')
.setTimestamp()
.addField('**»  Otorol** ', '**c!otorol**')

.addField('**» Sunucunuzda Küfür Koruması Aktif Eder**','**c!küfür aç**')

.addField('**» Sunucunuzda Bot Otorolünü Aktif Eder(ayarlar ama göstermez)**','**c!bototo-rol-ayarla @bot**')

.addField('**» Hoşgeldin kanal ayarla**','**c!hgka #hoşgeldiniz **')

.addField('**»Sunucunuzda Reklam Korumasını Aktif Eder**','**c!reklam aç**')

.addField('**»  Sayaç** ', '**c!sayaç-ayarla**')

.addField ('**» Kullanıcıyı Sunucudan Atma ** ','**c!kick @kişietiket <sebeb> **')

.addField ('**  Kullanıcıyı Sunucudan Banlama** ','**c!ban @kişietiket <sebeb>**')



.addField('** Etiketlediğiniz Kişiyi Özelden Uyarır**','**c!uyar @uyarıcağınızkişi**')

.addField('** Kanalda Belirlediğiniz Süre Bekliyerek Yazamanızı Sağlar**','**c!slowmode (Belirlediğiniz Süre Örnek: 1,2,3)**')



.addField('**»  Sunucu içersinde Oylama Yapımı**','**c!oylama (Yapıcağınız Oylama yı Yazınız)**')

.addField('**»  Hazır Sunucu Kurulumu**','**c!sunucu-kur**')

.addField ('**» mod-log** ','**c!mod-log #kanal-etiket**')


.addField ('**»< Ban Kaldırma** ','**c!unban[Kaldırmak İstediğiniz Kişinin İds i]**')

.addField ('**»Herkesin Banını Kaldır** ','**c!unbanall**')

.addField ('**»İstek Kanal Belirleme** ','**c!istek-kanal #kanal **')

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
  name: 'yetkili',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili'
};
