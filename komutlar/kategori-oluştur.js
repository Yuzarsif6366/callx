const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok');
    if (kanal.length < 1) return message.reply('Lütfen Oluşturacağım Kategorinin Adını Yaz.!!');
  message.delete();
  guild.createChannel(kanal, 'category');
  message.channel.send("**Kategori Oluşturuldu!**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kategori-aç'],
  permLevel: 3
};

exports.help = {
  name: 'kategori',
  description: 'Bir ses kanalı açar',
  usage: 'kategori-aç [açmak istediğiniz kategorinin adı]'
};