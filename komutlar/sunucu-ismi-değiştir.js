const Discord = require('discord.js')

exports.run = (client, message, args) => {

message.guild.setName(args.join(" ")).then(() => message.channel.send(`Sahip Sunucunun İsmini \`${args.join(" ")}\`Yaptım `)).catch(_ => message.channel.send(`Sahip Sunucunun İsmini Değişmem İçin Yeterli İznim **__Yok__!**`))
}

exports.conf = { 
enabled: true, guildOnly: true, 
permlevel: 4, 
aliases: ["sie"]
}

exports.help = {
name: "sid", 
description: "sunucu ismi değiştirir", 
usage: "sunucu-ismi-değiştir <yeni isim>"
}