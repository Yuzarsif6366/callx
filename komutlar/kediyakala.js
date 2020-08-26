exports.run = (client, message) => {
  message.channel.send("Kedicik Tutma loading...").then(message => {
    var espriler = [
      "Afferim Kedicikleri Yakaladın!",
      "Kedicikleri Yakaladın Sat bence",
      "afferim kedi seni görmeden korkup gitti",
      "Kediye Hıyar vERDİN :)",
      "Asyalı Kedicik Tutun onu yapmayacaksın Herhalde?",
      "Hıyarı Kediye verdin diye dava açıldı hmm",
      "köpek mi tutun lanet olsun",
      "Maalesef lanet kediyi kovmakta geç davrandın! ",
      "kızı niye kovdun aq",
      "Maalesef Kedi Bu kez başarılı Oldu! ",
      "Kedi Kedi GİTT ARTIK"
    ];
    var espri = espriler[Math.floor(Math.random() * espriler.length)];
    message.edit(`${espri}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [
    "kedicikleri-yakala",
    "kedi-yakala",
    "tut-kedicikleri",
    "kedicikleri-kov",
    "kediyakala"
  ],
  permLevel: 0
};

exports.help = {
  name: "kedicikleriyakala",
  description: "kediyi yakalarsın.",
  usage: "kedicikleriyakala"
};