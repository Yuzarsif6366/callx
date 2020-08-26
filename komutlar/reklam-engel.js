const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  if (!args[0]){
    message.channel.send("Reklam Engel için Doğru Kullanım: o!reklam-engel aç / o!reklam-engel kapat")
  }
  if (args[0] === 'aç'){
    message.channel.send("**__Görünüşe Göre Reklam Koruması Zaten Aktif Dostum<a:source:713850851898294322> \n Kick Yetkisi Olanları Engellemez!__**")
    
    db.set(`reklam_${message.guild.id}`, "acik")
  }
  if (args[0] === 'kapat'){
    message.channel.send("<a:source:713850851898294322> Reklam Filtresi başarıyla kapatıldı!.<a:source:713850851898294322>")
    
    db.set(`reklam_${message.guild.id}`, "kapali")
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam"],
  permLevel: 0
}
exports.help = {
  name: "reklam-engel",
  description: "Reklam engel açar yada kapatır.",
  usage: "!reklam-engel"
}