const Discord = require("discord.js");
const config = require("../config.json");

exports.run = async (client, message, args) => {

    let embed = new Discord.MessageEmbed()
    .addField(`discord`, `https://discord.gg/nE7kcD8`, true)
    .addField('bot invite', 'https://discord.com/api/oauth2/authorize?client_id=734652015174746134&permissions=117824&scope=bot', true)

    message.channel.send(embed).catch(err => {
        message.author.send("i cant send messages to that channel")
    })

}