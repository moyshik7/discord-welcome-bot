const { MessageEmbed } = require("discord.js");
const DbHandler = require("better.db");
const welcomeDB = new DbHandler("./db/welcome.db");


class Commands{
    constructor(Client, Message, Args){
        this.Client = Client;
        this.Message = Message;
        this.Args = Args;
    }
    setwelcome(){
        if(!this.Args[1]){
            this.Message.channel.send("Please set a valid channel");
            return(false);
        }
        if(!this.Message.member.permissions.has("MANAGE_CHANNELS")){
            this.Message.channel.send("You don't have MANAGE_CHANNELS permission");
            return(false);
        }
        let WelcomeChannel = this.Args[1];
        WelcomeChannel = WelcomeChannel.split(">").join("");
        WelcomeChannel = WelcomeChannel.split("<#").join("");
        if(!WelcomeChannel){
            this.Message.channel.send("Invalid channel");
            return(false);
        }
        welcomeDB.set(`welcome_${message.guild.id}`,WelcomeChannel).then(v => {
            let emb = new MessageEmbed()
                .setTitle("Done")
                .setDescription(`Welcome messages will now be sent to <#${WelcomeChannel} `)
            this.Message.channel.send(emb);
        });
    }
}