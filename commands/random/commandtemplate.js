// requires the bot API
const commando = require('discord.js-commando');

// Sets up the command name ( How the program reads it )
class commandname extends commando.Command {

    constructor(client) {
        
        super(client, {
            // Sets the command name ( How the user accesses it. )
            name: 'commandname',
            // Sets the group ( Leave this as it is always )
            group: 'random',
            // Sets the call name ( Don't mind this just keep it the same as the name )
            memberName: 'commandname',
            // Description of the command
            description: 'Template Command!'
        });

    }
    // Declares what will happen when someone calls the command ( Usually by doing [prefix][commandname] )
    async run(message, args){
        // Sends a message to the channel the command was called from
        message.channel.send('This is a command!');
    }
}

// Export and declare the end of the command ( Make sure it is equall to the command name that the program reads )
module.exports = commandname;
