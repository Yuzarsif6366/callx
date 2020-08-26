

const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`<a:music:721696020576337930>${client.user.username} - Müzik Komutlar Menüsü<a:music:721696020576337930>`)
       .addField('**<a:music:721696020576337930> o!çal**' , '**Belirttiğiniz şarkıyı/url linkini çalmaya başlar.**')
    .addField('**<a:music:721696020576337930> o!tekrar**','**En son çalınan şarkıyı tekrar oynatır**')
    .addField('**<a:music:721696020576337930 o!geç**','**Belirtilen şarkıyı geçer ve kuyruk listesine uyar.**')
   .addField('**<a:music:721696020576337930> o!çalan**','**Şarkı oynatma listesini listeler.**')
   .addField('**<a:music:721696020576337930> o!durdur**','** Çalınan şarkıyı durdur**')
   .addField('**<a:music:721696020576337930> o!devamet**',' **Durdurulan şarkıyı devam ettirir**')
   .addField('**<a:music:721696020576337930> o!ses**','**Çalınan şarkının ses seviyesini ayarlamak içindir.**')
   
   
        .setThumbnail(client.user.avatarURL)
        .addField(`Linkler(Bot)`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=713817203224346685&scope=bot&permissions=805314622)` ,`[Destek Sunucumuz] (https://discord.gg/n7JmXvv)`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
   // bak yazıyo okulamısın kısmında api keyi nasıl alıcan 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardımm','muzik','çall',''],
  permLevel: 0,
};

exports.help = {
  name: 'müzik-yardım',
  description: '',
  usage: ''
};
   