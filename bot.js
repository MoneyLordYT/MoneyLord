// Requires Discord API
const commando = require('discord.js-commando');
// Requires The Config
const config = require("./config.json");
// Requires the Colors to make it look nice ;)
var colors = require('colors/safe');
// Sets up the bot client.
const bot = new commando.Client({
	// says if its a selfbot
	selfbot: false,
	// Sets its cmd prefix
	commandPrefix: config.prefix,
	// etc random stuff lol
	unkownCommandResponse: false,
	owner: '248551663974088715',
	messageCacheMaxSize: 50,
	messageCacheLifetime: 30,
	messageSweepInterval: 60,
	fetchAllMembers: true,
	disableEveryone: true,
	disabledEvents: [
		'typingStart',
		'userUpdate',
		'voiceStateUpdate'
	]
});

// Says that you logged into the client and it says it in blue
console.log(colors.cyan('Logged in to discord client!'));


// Registers all the commands 
bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");
// Logs Into VIA the bot token that you specified in the config
bot.login(config.token);