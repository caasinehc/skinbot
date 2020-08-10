/*
 * Skinbot
 * v1.0.0
 * By Isaac Chen and BigBrainBue
 * 8/10/2020
 */

// Requires
require("dotenv").config();
const Discord = require("discord.js");
const HTTP = require("http");

// Bot and token
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN

// Login the bot
bot.login(TOKEN);

// When the bot is ready, log to the console
bot.on("ready", () => {
	console.info(`Logged in as ${bot.user.tag}!`);
});

// Handle messages
bot.on("message", msg => {
	// Ping
	if(msg.content.toLowerCase() === "?ping") {
		msg.reply("dong");
	}
	
	// Command 2
	else if(msg.content.toLowerCase() === "hi") {
		msg.channel.send("imagine talking to a discord bot");
	}
	
	// Command 3
	else if(msg.content.toLowerCase() === "get on") {
		msg.channel.send("get in the fucking call right now");
	}
	
	// WIP
	else if(msg.content.toLowerCase() === "double") {
		msg.channel.send("Trouble Triple Trouble");
	}
});
