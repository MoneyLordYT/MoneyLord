const commando = require('discord.js-commando');

class help extends commando.Command {

  constructor(client) {
    super(client, {
    name: 'help',
    group: 'random',
    memberName: 'help',
    description: 'Rolls a 6faced die.'
    });
  }
  async run(message, args){
    message.channel.send(
      {
      // Sets up the message as a embed ( Makes it look nice :P )
      embed: {
        color: 0x27AE60,
        footer: {
        text: "!help"
        },
        fields: [
          {
            name: ":ping_pong: Ping",
            value: "Makes the bot respond with **Pong!**"
          },
          {
            name: ":boot: Kick [MENTION]",
            value: "Kicks the mentioned user."
          },
          {
            name: ":hammer: Ban [MENTION]",
            value: "Bans the mentioned user."
          }
        ]
      }
    });
  }
}
module.exports = help;
