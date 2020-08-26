const Discord = require('discord.js');

exports.run = async (client, msg, args) => {
   let pre = args.slice(0).join(' ');
      if (!pre[0]) {
       msg.channel.send(":x: | Not: `ayrıl` ya da `katıl` yazmalısın!") 
  }
   
       if (pre === 'ayrıl') {
          client.emit('guildMemberRemove', msg.member || await msg.guild.fetchMember(msg.author));
         msg.channel.send('Başarılı!')
         
        
       }
  if (pre === 'katıl') {
     client.emit('guildMemberAdd', msg.member || await msg.guild.fetchMember(msg.author));
    msg.channel.send('Başarılı!')
        
       }
   }   


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'sahte',
  description: '',
  usage: ''
};