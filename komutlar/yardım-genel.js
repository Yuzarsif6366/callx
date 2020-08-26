const Discord = require('discord.js')
exports.run = async(client,message) =>{
  
   const genel = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('» Genel Komutlar ')
    .setTimestamp()
    .addField('**» Yapımcı İle Hatalar Ve Eklemesini İstediğiniz Şeyler Hakkında Canlı Konuşursunuz** ', '**c!canlı-destek**')
    .addField('**»  Afk Kalmanızı Sağlar**','**c!afk (sebeb**)')
    .addField('**»  Bulunduğunuz Sunucuda Davet Kurar**','**c!davet-kur**')
    .addField('**»  Kendi Avatarınız Veya Başka Birinin Avatarını Görmenizi Sağlar.**','**c!avatar @avatarını görmek istediğniz kişiyi etiketleyin**')
    .addField('**» <Döviz Hakkında Bilgi Verir**.','**c!döviz USD...**')

                 //
    .addField('**» Sunucuda Bulunan Emoji Hakkında Bilgi Verir.**','**c!emojibilgi Örnek:tac**')
    .addField('**» <Sunucu İçersinde Kaç Kişi Var Onun Hakkında Bilgi Verir.**','**c!say**')
    .addField('**»  İstediğiniz Kişinin İdsini Gösterir**.','**c!id @idsini görmek istediğiniz kişiyi etiketleyiniz.**')
    .addField('**»  Sunucu ppsini Görmenize Yarar.**','**c!sunucu-pp**')
   
   .addField('**  Owner **','**Callx!...**')
   
  .addField(`<a:tmr:721696009104916563> Botu Ekle! <a:tmr:721696009104916563>`, `[Tıkla!](https://discord.com/oauth2/authorize?client_id=713817203224346685&scope=bot&permissions=805314622)`, true)
    message.channel.send(genel)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı','genel']
}
exports.help = {
  name: 'genel',
  descreption: 'ping',
  usage: 'ping'
}