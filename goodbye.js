const { MessageEmbed } = require("discord.js");
const DbHandler = require("better.db");
const goodbyeDB = new DbHandler("./db/goodbye.db");


module.exports = async (member) => {
    await goodbyeDB.get(`goodbye_${member.guild.id}`).then(async (res) => {
        if (!res) { return(false) } //No goodbye message channel set
        let byeChannel = await Client.channels.cache.get(res);
        if (!byeChannel) { return(false) } //The channel dosen't exist
        if (!member) { return(false) } //Visible confusion
        //We have everything we need
        let emb = new MessageEmbed()
            .setTitle(`Sayonara ${member.user.username}`) // Sayonara = Goodbye
            .setDescription(`${member.guild.name} left`)
            .setImage("https://i.imgur.com/TO6N0qZ.gifv")
        byeChannel.send(emb).catch(console.log);
    });
}