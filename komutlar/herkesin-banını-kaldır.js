const Discord = require('discord.js')
exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
}

exports.help = {
    name: 'unbanall', 
    description: '',
    usage: ''
}

exports.run = async (client, message, args) => { 
   message.channel.send(' **Sunucudaki Tüm Yasaklanan kullanıcıların yasağını kaldırdı patron.**')

  message.guild.fetchBans().then(bans => {
      bans.forEach(user => {
        message.guild.unban(user)
  });
    });
};
      