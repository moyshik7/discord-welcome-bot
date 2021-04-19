const { MessageEmbed } = require("discord.js");


module.exports = (member, channel) => {
    let emb = new MessageEmbed()
        .setTitle(`Everyone welcome ${member.user.username}`)
        .setDescription(`Welcome to ${member.guild.name}. Have a nice time`)
        .setImage("https://i.imgur.com/TO6N0qZ.gifv")
    channel.send(emb).catch(console.log);
}
