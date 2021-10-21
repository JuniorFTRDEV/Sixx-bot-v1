const Discord = require('discord.js');
const moment = require('moment'); 
moment.locale('pt-BR');

exports.run = (bot, message, args) => {


    let embed = new Discord.RichEmbed()


    let topicSemNada = 'Não definido.';
    let topic = message.channel.topic || topicSemNada;

    let nsfwnao = 'Não.';
    let nsfwsim = 'Sim.';
    let nsfw = message.channel.nsfw ? nsfwsim : nsfwnao;
  
    embed.setTitle(` Informações do canal: #` + message.channel.name.toString())
    embed.setDescription(`**ID do discord**\n• ${message.channel.id}\n**Menção do canal**\n• ${message.channel}\n**Tópico do canal**\n• ${topic}\n**Guild**\n• ${message.guild.name}\n⚠️ **NSFW**\n• ${nsfw}`)
    embed.addField('**Canal criado há**', moment(message.channel.createdAt).format('LLL'))
    embed.setFooter(`${bot.user.username}`)
    embed.setThumbnail('https://cdn.discordapp.com/emojis/646064870642679812.png?v=1')
    embed.setColor("RANDOM")

    message.channel.send(embed);
}
 
module.exports.help = {
    name: "infochannel"
}