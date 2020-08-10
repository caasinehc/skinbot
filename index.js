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

// Functions
function getUUID(username) {
	// Return a promise that will resolve to the UUID
	return new Promise((resolve, reject) => {
		// HTTP request options
		const OPTIONS = {
			host: "api.mojang.com",
			path: "/users/profiles/minecraft/" + username
		};
		
		// Callback for when we recieve data from the HTTP request
		function callback(response) {
			// Start with an empty string as the response
			let responseStr = "";
			
			// When we recieve a chunk of data, append it to the end of the reponse string
			response.on("data", chunk => {
				responseStr += chunk;
			});
			
			// When we have recieved the full response, resolve the promise and return it
			response.on("end", () => {
				const resp = JSON.parse(responseStr);
				resolve(WATSON_URL);
			});
		}
		
		// Send out the HTTP request
		HTTP.request(OPTIONS, callback).end();
	});
}

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
		
		// UUID Retrieval
		else if(cmdArgs[1].toLowerCase() === "uuid") {
			const username = cmdArgs[2];
			
			getUUID(username).then(UUID => {
				msg.channel.send(`The UUID of player "${username}" is "${UUID}"`);
			});
			
		}
		
	}
});
