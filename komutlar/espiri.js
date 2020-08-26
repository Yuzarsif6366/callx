const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    var sans = ["Adamın bir varmış. İkinci dönem düzetmiş" ,"Çok tatlısın ama bende şeker hastasıyım.", "Adamın biri gülmüş, bahçeye dikmişler.", "Uzun lafın kısası : U.L.", "Funda Arar dediler ama hala daha aramadı.", "En çok eşek yavrusu nerede olur? -- Spa merkezinde.", "Mafya babası olmak için oğlumun adını “Mafya” koydum.", "Masada hangi örtü kullanılmaz? - Bitki Örtüsü.", "Ben Yedigün içiyorum sen Onbeşgün iç.", "Saçını sarıya boyatıp kaşlarını zift karası bırakınca doğal sarışın olmuyorsun tatlım. Borussia Dortmund deplasman forması gibi oluyon.", "üniversiteli nereye geldim sorusuna cevap bulamadığı için ne oldum delisi olur, liseli ise büyüdüğünü sandığı için ne oldum delisi", "liseli çalışmadan ders geçer, üniversiteli çalışsa da geçemez", "liseli arabesk/fantezi dinler, üniversiteli rock/metal"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`**Espiri**`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['esriri','espiri-yap'],
  permLevel: 0
};

exports.help = {
  name: 'espiri',
  description: 'espiri yapar',
  usage: 'espiri'
};