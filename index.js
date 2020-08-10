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
	let cmdArgs = msg.content.split(" ");
	
	// Ping
	if(msg.content.toLowerCase() === "!ping") {
		msg.reply("pong");
	}
	
	if(cmdArgs[0].toLowerCase() === "!sb") {
		
		// Command 2
		if(cmdArgs[1].toLowerCase() === "hi") {
			msg.channel.send("imagine talking to a discord bot");
		}
		
		// Command 3
		else if(cmdArgs[1].toLowerCase() === "get on") {
			msg.channel.send("get in the fucking call right now");
		}
		
		// WIP
		else if(cmdArgs[1].toLowerCase() === "double") {
			msg.channel.send("Double Trouble Triple Trouble");
		}
		
		// UUID Retrieval
		else if(cmdArgs[1].toLowerCase() === "uuid") {
			msg.channel.send("You are asking about the player named " + cmdArgs[2]);
		}
	}
});
