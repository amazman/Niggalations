const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

//Command Handler
client.on('message', message => {

    let args = message.content.slice(config.prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (message.channel.type === "dm") return;
    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    try {
        delete require.cache[require.resolve(`./commands/${cmd}.js`)]
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(client, message, args)
    } catch (e) {
        //console.log(e)
        return;
    }
});

//Status
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setPresence({
        activity: {
            name: `Reading niggalations for ${client.users.cache.size} people`
        }
    })
});

client.on("guildCreate", guild => {
    console.log(`Added to guild: ${guild.name} | ${guild.id}`)
    client.user.setPresence({
        activity: {
            name: `Reading niggalations for ${client.users.cache.size} people`
        }
    })
})

//Logging Errors
client.on('error', console.error);

//Logging DMs
client.on('message', message => {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) {
            return
        } else {
            return console.log(`Logged direct message from ${message.author.tag} : ${message.content}`)
        }
    }
});

client.login(config.token)