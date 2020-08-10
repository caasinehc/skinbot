/*
 * Skinbot
 * v1.0.0
 * By Isaac Chen and Bue
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
	if(msg.content.toLowerCase() === "!ping") {
		msg.reply("pong");
	}
});
