const Discord = require("discord.js");
const Client = new Discord.Client({ ws: { intents: [
        'GUILD_MEMBERS',
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_EMOJIS'
    ]}
});


const Settings = require("./settings");
const Welcome = require("./welcome");


const DbHandler = require("better.db");
const welcomeDB = new DbHandler("./db/welcome.db");
Client.on("ready", () => {
    console.log(`Ready and listening in ${Client.guilds.cache.size} servers`);
    Client.guilds.cache.forEach(g => console.log(g.name));
});

Client.on('guildMemberAdd', (member) => {
    Welcome(member);
});

/*Client.on('guildMemberRemove', member => {
    member.guild.channels.get('channelID').send('**' + member.user.username + '**, has left the server');
});*/

Client.on("message", message => {
    console.log(message.content);
});
Client.login(Settings.BOT_TOKEN);
