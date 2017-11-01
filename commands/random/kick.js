const commando = require('discord.js-commando');

class kick extends commando.Command {

    constructor(client) {
        
        super(client, {
            name: 'kick',
            group: 'random',
            memberName: 'kick',
            description: 'Kick Dem xd'
        });

    }
    async run(message, args){
        if(!message.member.roles.some(r=>["Owner/Money lord", "Co-owner", "Head Administrater", "Administrative Team"].includes(r.name)) ){
            message.channel.send({"embed": {
                "description": ":no_entry: Insignificant Permissions",
                "color": 0xE74C3C
                }
            });
        }else{
            let member = message.mentions.members.first();
            if(!member){
                message.channel.send({"embed": {
                    "description": ":no_entry: Invalid Member",
                    "color": 0xE74C3C
                    }
                });
            }else{
                if(!member.kickable){
                    message.channel.send({"embed": {
                        "description": ":no_entry: Unable To Kick **" + member.user.username + "**. Do they have a higher role?",
                        "color": 0xE74C3C
                        }
                    });
                }else{
                    let reason = args.slice(21).concat(' ');
                    if(!reason){
                        message.channel.send({"embed": {
                            "description": ":no_entry: Invalid reason!",
                            "color": 0xE74C3C
                            }
                        });
                    }else{
                        await member.kick(reason)
                        .catch(error =>  message.channel.send({"embed": {
                            "description": ":no_entry: Unable to kick **"+member.user.username+"** because a error occurred. The error was: **"+error,
                            "color": 0xE74C3C
                            }
                        }));
                        message.channel.send({"embed": {
                            "description": ":boot: **"+member.user.username+"** Has been kicked by **"+message.author.username+"** for the reason, **"+reason+"**",
                            "color": 0x2ECC71
                            }
                        });
                    }
                }
            }
        }
    }
}


module.exports = kick;
