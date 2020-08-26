const Discord = require("discord.js");
const botadi = " NΛSΛ Bot";
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = function(client, message) {
  const embed = new Discord.RichEmbed()
    .setColor("#EA2027")
    .setTitle(`Callx!-Bot | Kayıt Sistemi`)
    .setTimestamp()
    .addField(
      "Erkek Kayıt",
      `Üyeleri Kayıt Yaparsınız.\nKullanım: **${ayarlar.prefix}erkek <@Kişi> <İsim> <Yaş>**`
    )
    .addField(
      "Bayan Kayıt",
      `Bayanları Kayıt Yaparsınız.\nKullanım: **${ayarlar.prefix}bayan <@Kişi> <İsim> <Yaş>**`
    )
    .addField(
      "Kayıtsız Bayan Rol Ayarla",
      `Kayıtsız Rolünu Ayarlarsınız.\nKullanım: **${ayarlar.prefix}bayan-rol <@rol>**`
    )
    .addField(
      "Kayıtsız ErkekRol Ayarla",
      `Kayıtsız Rolünu Ayarlarsınız.\nKullanım: **${ayarlar.prefix}erkek-rol <@rol>**`
    )
    .addField(
    "**Hoşgeldin Kanal Ayarlama**",
      `**c!hgka #kanaletiket**`
    )
    .addField(
      "**Diğer Komutlar Yakında Eklenicektir.**",
      `Yakında!`
    )
    .addField(
     "**Diğer Komutlar Yakında Eklenicektir.**",
      `Yakında!`//sindi oldu
    )
    .setFooter(`Callx!-Bot | Kayıt Sistemi`, client.user.avatarURL)
    .setTimestamp()
    .setThumbnail(client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
    kategori: "kayıt",
  aliases: ["yardım kayıt", "kayıtsistemi", "kayıt-sistemi"],
  permLevel: 0
};

exports.help = {
  name: "kayıt-yardım",
  description: "Tüm komutları gösterir.",
  usage: "yardım"
};
