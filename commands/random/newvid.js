const commando = require('discord.js-commando');

class newvid extends commando.Command {

constructor(client) {
super(client, {
name: 'newvid',
group: 'random',
memberName: 'newvid',
description: 'Post the newest video that money lord uploaded'
});
}

async run(message, args){
	var roll = Math.floor(Math.random() * 6) + 1 
	message.channel.send("Here's the newest video of Money Lord :D https://goo.gl/iktfbb, Make sure to leave a like!");
	}
};

	
	
	module.exports = newvid;
