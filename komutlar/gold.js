const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var request = require('request');
const db = require('quick.db')
const ms = require("ms")
require("moment-duration-format")
const dateFormat = require("dateformat")
const client = new Discord.Client()
exports.run = (client, message, args) => {
   let code = args[1]
if(args[0] == 'liste'){
  let kişi = ''
 
  let kişiAll = db.all().filter(i => i.ID.startsWith('gold_'))
  kişiAll.forEach(s => {
    kişi += s.ID.replace('gold_','<@') + "> \n" 
  })

  const embed = new Discord.RichEmbed()
  .setAuthor("Callx! Gold Listesi", client.user.avatarURL)
  .setColor(0xffb900)
  .setDescription(kişi)
  .setFooter(client.user.username, client.user.avatarURL)
  return message.channel.send(embed)
}
if (args[0] === 'yap') {
   let sunucu = client.users.get(code).tag

      

 let süre = args[2]
 const moment = require("moment")
 
 const duration = moment
      .duration(db.fetch(`goldsüre.${code}`) - Date.now())
      .format(" D [gün], H [saat], m [dakika], s [saniye]");
let daysCreated = moment.duration(süre).format("Y [yıl], D [gün], H [saat], m [dakika], s [saniye]")

 const bed = new Discord.RichEmbed()
 .setColor(0xffb900)
   .setDescription(`Başarılı Bir Şekilde \`\`${sunucu}\`\` adlı kullanıcıya gold üyelik verdim. Gold Üyelik ${süre.replace('s', ' saniye').replace('m', ' dakika').replace('h', ' saat').replace('days', ' gün').replace('y', ' yıl')} sonra dolacak.`, true)
 message.channel.send(bed)   

//let obj = {gold: true, süre: ms(args[2]) + Date.now(), isim: sunucu, id: code,}

   
     //   db.push(`gold.${code}`, obj)
  db.set(`gold_${code}`, code)
//  db.set(`goldlar_${code}`, code)
  db.set(`gold.${code}`, true)
  db.push("goldlar", code)
}

  if (args[0] === 'al') {
   let i =  db.fetch(`gold.${code}`, true)
  if (i) {
    //if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('`YÖNETİCİ` yetkin yok!')
   let dktf =  db.delete(`premium.${code}`)
 let log =  client.channels.get("739955607229956286")
 let sunucu = client.users.get(code).name
 const bed = new Discord.MessageEmbed()
 .setColor(0xffb900)
 .setDescription(`${process.env.basarili} Başarılı Bir Şekilde \`\`${sunucu}\`\` adlı kullanıcının gold üyeliğini aldım.`)
 message.channel.send(bed)   
 // message.channel.send(process.env.basarili + `Başarılı Bir Şekilde \`\`${sunucu}\`\` adlı sunucuda premiumu aktif edildi.`)

//      db.delete(`goldsüre.${code}`)
   // db.delete(`goldüyeK.${code}`)
db.delete(`gold_${code}`)
  }
 
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};
exports.help = {
  name: 'gold',
  description: '[Admin Komutu]',
  usage: 'karaliste <ID>'
};
  