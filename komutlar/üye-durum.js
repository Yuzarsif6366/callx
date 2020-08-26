const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(` <a:tac:721711125778923590> Toplam Kişi Sayısı`, üyesayi, true)
  .addField(` <a:dc:721696032177520640> Toplam Kullanıcı Sayısı`, kullanıcılar, true)
  .addField(` <a:tmr:721696009104916563> Botlar`, botlar , true)
  .addField(`Aktif Üyeler <a:online:721696018433048696>`, `${message.guild.members.filter(o => o.presence.status === 'online').size} `, true)
  .addField(`Boşta Üyeler  <a:bosta:721696014922285098>`, `${message.guild.members.filter(i => i.presence.status === 'idle').size}`, true)
  .addField(`Rahatsız Modda Üyeler <a:rahatsizeetmeyin:721696017065574461>`, `${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size} `, true)
  .addField(`İnaktif Üyeler <a:offline:716337659286388766>`, `${message.guild.members.filter(off => off.presence.status === 'offline').size} `, true)
  
  
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "üye-durum",
  description: "üye-durum",
  usage: "üye-durum"
};
