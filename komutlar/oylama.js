const Discord = require('discord.js');
/*



*/
exports.run = function(client, message, args){
  const evet  =  '739742111121014784';
  const hayir = '739742142406197259';
 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(':warning: | Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')
  const msg = args.join(' ');
  if(!msg) return message.channel.send('**Oylamam için bir şey gir!**');
  message.react('739742109635969085');
  message.channel.send(new Discord.RichEmbed() .setTitle('Oylama') .setDescription(msg) .setColor('RANDOM') .setFooter(message.author.tag+' tarafından başlatıldı..',message.author.avatarURL)).then(function(i){
     i.react(hayir)
     i.react(evet)
     
// evet hayır Şeklinde Sorar :)

  });

}

exports.conf = {
 enabled:true,
  guildOnly:false,
  aliases:['oyla'],
  permLevel:0

}
exports.help = {
  name:'oylama',
  description:'İstediğiniz şeyi oylar',
  category:'kullanıcı',
  usage:'oylama [İçerik]'

}