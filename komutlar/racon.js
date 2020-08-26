const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    var sans = ["Eroin Gibisin Varlığın Ölüm Yokluğun Kriz", "Manşet: Diz üstü yaşamaktansa ayakta ölmeyi tercih ederim.", "Ben ölümden korkmuyorum hızlı adımlarla yaşıyorum ama , sen ölümden kork bence , ben cehennemde seni bekliyorum .!", "Çok hızlıyız diyosun ya hani, Sıkıntıyok,radar olup ceza kesmesini de biliriz. . . ", "İkinci şansa inanmam ben ölü ile işim gömene kadardır.","Biz hiç kimseyi yarı yolda bırakmadık onlar hep müsait bir yerde indiler.","Ya av olacaksın ya da avcı. Ama asla avı avcıya götüren köpek olmayacaksın.","Bizim ortamda yaşı büyük olana değil. Adam olana abi denir.","Unutma sen gitmekle eylem yaparsan ben unutmakla devrim yaparım.","Hayatta edindiğim tecrübeler yediğim kazıkların toplamıdır.","Delikanlılık belinde taşıdığın silah değil bedeninde taşıdığın yürektedir.","Gölgene lafım yok o da seni adam sanıp peşinden geliyor.","Kalabalıkta artistlik yapanın tenhada özrü kabul olmaz.","Şımaracak kimsen olmayınca hayat seni kocaman bir adama çevirir.","Bazıları şükretmeyi bazıları küfretmeyi öğretir insana.","Ömrü bitene kadar sevmeli insan. Menfaatleri bitene kadar değil.","Tilki gibi dostum olacağına aslan gibi düşmanım olsun.","Bazı insanları da sadece tanıyana kadar çok seversin!","Deli tarafıma gelme sakın orada ben bile hükümsüzüm.","O kırdığın kalp annenin porselen takımı değil!","İhanetin nedeni olmaz bedeli olur.","Reislerle kurduk mekânı dayılarla harcadık bu yolları serserilerle âleme daldık delikanlılarla şekil yaptık, bizler ağır abileriz herkesi severiz.","Tarz yaratmak için ağır abi olma. Ağır abi dediğin sevdi mi tam sever giydiğini herkes beğenir, saygısı sonsuz sevgisi ebedi olur.",,"Nice delikanlılar gördük kolunda kız cebinde emanet arkasında sürü. Raconu kahpelik yürüyüşü sahtelik, kalbi var yüreği yok.","Hani derler ya bir konuşursam yer yerinden oynar diye. Ben onlardan değilim. Konuşursam derinden kimse kalkamaz yerinden.","Kimseye el uzatıp, yardım isteyecek kadar düşmedik daha. Nasıl düşüyorsam öyle kalkmasını da bilirim.","Sen kasırgalara dayanmışsın, rüzgârla mı yıkılacaksın. Başka çaren yok yüreğim, düşmana karşı ayakta kalacaksın.","Biz, ölmeyi çoktan göze aldık da; yanımızda kimleri götüreceğiz, onu düşünüyoruz.","Bazen arkasına dönüp bakması gerekir insanın; nereden geldiğini unutmaması için.","Şu hayatta ölmek için onlarca nedenim varken, yaşamak için tek bir nedenim var, o da annem.","Çakallarla uğraşacak vaktimiz olsaydı; veteriner olup, iti köpeği tedavi ederdik.","Her sözümde racon aramayın, racon yapmak için konuşmuyorum, konuşuyorum racon oluyor.","Bana kelime cambazlığı yapma kızım, bir laf sokarım, kürtajla bile aldırmazsın.","Hiçbir şeyin altında kalmam, bana yapılanın iki katını yapacak kadar cömertim.","Bazen insanlara küfür ediyorum, sakinleşince haklı olduğumu anlayıp, bir daha ediyorum.","Ya av olacaksın ya da avcı. Ama asla avı avcıya götüren köpek olmayacaksın.","Çok büyüğü olan, büyüyemez.",];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`**Odin Sözleri**`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['racon','racon-kes'],
  permLevel: 0
};

exports.help = {
  name: 'racon',
  description: 'racon sözleri',
  usage: 'w!racon'
};