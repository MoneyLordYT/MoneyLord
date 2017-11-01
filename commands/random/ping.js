const commando = require('discord.js-commando');

class ping extends commando.Command {

constructor(client) {
super(client, {
name: 'ping',
group: 'random',
memberName: 'ping',
description: 'Replys With Pong!'
});
}

async run(message, args){
	var roll = Math.floor(Math.random() * 6) + 1 
	message.channel.send({

embed: {

    color: 0x2ECC71,

    description : ":ping_pong: Pong!",
	
	footer: {
      text: "Took " + (this.client.ping).toFixed() + "ms"
    }
}
}
)
}

}


module.exports = ping;
