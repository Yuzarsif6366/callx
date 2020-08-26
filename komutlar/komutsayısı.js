const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = (' 713817203224346685') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`${client.user.username} - Komut Sayısı Menüsü`)
        .setDescription('**Botumuzdaki komut sayısını mı öğrenmek istiyorsun, doğru yere geldiniz.** \n \n **Komut sayısı neye göre yapılır?** \n Komut sayısı botta bulunan `komutlar/` eki ile başlayan şeylere göre sıralanır buna görede listelenir. \n \n **Komut sayısına hangi komutlar erişemez?** \n Komut sayısına eklenmeyen bazı komutlar başka dosyalarda olduğu için eklenmez.Eğer `komutlar/` eki ile başlıyorsa eklenir. \n \n **Komut sayımız:** \n Botumuzda **' + client.commands.size + '** adet komut bulunmaktadır.')
        .setThumbnail(client.user.avatarURL)
        .addField(`Linkler(Bot)`, `[Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=713817203224346685&scope=bot&permissions=8)    **-**   [Destek Sunucusu](https://discord.gg/dJPrZ7m) **`)
        .setFooter(`${message.author.username} tarafından istenildi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  aliases: ['komut-sayısı','komuts','ks','ksayı','ksayi'],
  guildOnly: false,
  permLevel: 0,
  kategori:'bot',
};

exports.help = {
  name: 'komutsayısı',
  description: 'Bottaki Komut Sayısını Gösterir.',
  usage: 'komutlar'
};