
const ayarlar = require("../ayarlar.json");
const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");
let talkedRecently = new Set();
module.exports = async message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(" ")[0].slice(ayarlar.prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    let botbakım = db.fetch("callx!-bot.botbakim");
    let bakımyüzde = db.fetch("bakimyüzde");
    let bakımsebep = db.fetch("bakimsebep");
    let cfxtime = await db.fetch(`afk_süre}`);
    let cfxs = ms(Date.now() - cfxtime);
    if (!ayarlar.sahip.includes(message.author.id)) {
      if (botbakım == "aktif") {
        let bakim = new Discord.RichEmbed()
          .setTitle("BOT BAKIMDA")
          .setColor("RANDOM")
          .setDescription(
            `Tahmini bitiş: **${bakımyüzde}**\nBakım sebebi: **${bakımsebep}**`
          )
          .setFooter("Eğer uzun süre açılmazsa yapımcıma başvurunuz!");

        return message.channel.send(bakim);
      }
    }

    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};

  
