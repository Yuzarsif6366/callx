const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`<a:tmr:721696009104916563> Botu Ekle! <a:tmr:721696009104916563>`, `[Tıkla!](https://discord.com/oauth2/authorize?client_id=738761360699162634&scope=bot&permissions=805314622)`, true)
      //.addField(`<a:dc:713848273894375424> Destek Suncuma Gitmek İçin <a:dc:713848273894375424>`, `[Tıkla!](https://discord.gg/n7JmXvv)`, true)
  //.addField(`<a:sabit:713848281100189931> Web Sitesine Gitmek İçin <a:sabit:713848281100189931>`, `[Tıkla!](https://botodoin.glitch.me/)`, true)
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
  name: "davet",
  description: "davet",
  usage: "davet"
};
