
const Discord = require('discord.js');

exports.run = async(bot, message, args) => {

 
        let usuario = message.mentions.members.first() || message.member;
        let avatar = usuario.user.displayAvatarURL
        let embed = new Discord.RichEmbed()
       

        embed.setAuthor(` ${message.author.username}`, `${message.author.avatarURL}`)
        embed.setColor("RANDOM")
        embed.setTitle(`:frame_photo: | Clique aqui para baixar`)
        embed.setURL(avatar)
        embed.setImage(usuario.user.displayAvatarURL)
        embed.setFooter(`${bot.user.username}`, bot.user.avatarURL)
        embed.setTimestamp()
        message.reply(embed);
  
    
}