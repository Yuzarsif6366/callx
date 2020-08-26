const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  let bayanzrol = await db.fetch(`bayanrol_${message.guild.id}`);
  let kayıtszrol = await db.fetch(`kayıtsızrol_${message.guild.id}`);
  let yetkilizrol = await db.fetch(`yetkilirol_${message.guild.id}`);
  let kayıtkanal = await db.fetch(`kayıtkanal_${message.guild.id}`);

  
      // if(message.member.roles.has(yetkilizrol) === false) return message.channel.send(`Zaten Rolun yok ne kullanıyor aq`)
    

    if (!bayanzrol)
      return message.channel.send(
        new Discord.RichEmbed()
          .setColor("#e74c3c")
          .setDescription(
            `Bayan Rolü Ayarlanmamış..\nAyarlamak İçin: **${prefix}bayan-rol <@Rol>**`
          )
          .setTimestamp()
      );

   
  let kanal = await db.fetch(`kayıtkanal_${message.guild.id}`);
/*
  if (!kanal)
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("#e74c3c")
        .setDescription("Kayıt Kanalı Ayarlanmamış!")
        .setTimetamp()
    );

 */

  let member =
    message.mentions.users.first() || client.users.get(args.join(" "));
  const hata1 = new Discord.RichEmbed() //kişi hata
    .setColor(`#e74c3c`)
    .setTitle(`:negative_squared_cross_mark: Kayıt işlemi başarısız.`)
    .addField(`Doğru Kullanım:`, `\`${ayarlar.prefix}bayan @Üye İsim Yaş\``)
    .setFooter(`${message.author.tag}`, message.author.avatarURL);
  if (!member) return message.channel.send(hata1);
  const m = message.guild.member(member);
  const nick = args[1];
  const yas = args[2];

  const hata2 = new Discord.RichEmbed() //nick hata
    .setColor(`#e74c3c`)
    .setTitle(`:negative_squared_cross_mark: Kayıt işlemi başarısız.`)
    .addField(`Doğru Kullanım:`, `\`${ayarlar.prefix}bayan @Üye İsim Yaş\``)
    .setFooter(`${message.author.tag}`, message.author.avatarURL);
  if (!nick) return message.channel.send(hata2);

  const hata3 = new Discord.RichEmbed() //yas hata
    .setColor(`#e74c3c`)
    .setTitle(`:negative_squared_cross_mark: Kayıt işlemi başarısız.`)
    .addField(`Doğru Kullanım:`, `\`${ayarlar.prefix}bayan @Üye İsim Yaş\``)
    .setFooter(`${message.author.tag}`, message.author.avatarURL);
  if (!yas) return message.channel.send(hata3);

  m.addRole(bayanzrol);
  m.removeRole(kayıtszrol);
  m.setNickname(` ${nick} / ${yas}`);

  const embed = new Discord.RichEmbed()
    .setColor(`#2ecc71`)
    .setTitle(`:white_check_mark: Kayıt İşlemi Başarılı!`)
    .addField(`Kayıt Edilen Kişi:`, `${member}`)
    .addField(`Kayıt İşleminde Verilen Rol:`, `<@&${bayanzrol}>`)
    .addField(`Belirlenen İsim:`, ` ${nick} [${yas}]`)
    .addField(`Kayıt eden yetkili`, `<@${message.author.id}>`)
    .setFooter(`${message.author.tag}`, message.author.avatarURL);
  message.channel.send(embed);
  db.add(`kayit_${message.guild.id}_${message.author.id}`, 1)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
   kategori: "kayıt",
  aliases: ['b'],
  permLevel: 3
};

exports.help = {
  name: "bayan",
  usage: "",
  description: "Bayanları Kayıt Yapar."
};
