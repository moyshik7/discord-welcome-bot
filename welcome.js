const { MessageEmbed } = require("discord.js");
const DbHandler = require("better.db");
const welcomeDB = new DbHandler("./db/welcome.db");


module.exports = async (member, Client) => {
    await welcomeDB.get(`welcome_${member.guild.id}`).then(async (res) => {
        if (!res) { return(false) } //No welcome message channel set
        let welChannel = await Client.channels.cache.get(res);
        if (!welChannel) { return(false) } //The channel dosen't exist
        if (!member) { return(false) } //Visible confusion
        //We have everything we need
        let emb = new MessageEmbed()
            .setTitle(`Everyone welcome ${member.user.username}`)
            .setDescription(`Welcome to ${member.guild.name}. Have a nice time`)
            .setImage("https://i.imgur.com/TO6N0qZ.gifv")
        welChannel.send(emb).catch(console.log);
    });
}