const commando = require('discord.js-commando');

class ban extends commando.Command {

    constructor(client) {
        
        super(client, {
            name: 'ban',
            group: 'random',
            memberName: 'ban',
            description: 'Kick Dem xd'
        });

    }
    async run(message, args){
        if(!message.member.roles.some(r=>["Kick/Ban Perm"].includes(r.name)) ){
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
                        "description": ":no_entry: Unable To Ban **" + member.user.username + "**. Do they have a higher role?",
                        "color": 0xE74C3C
                        }
                    });
                }else{
                    let reason = args.slice(1).concat(' ');
                    if(!reason){
                        message.channel.send({"embed": {
                            "description": ":no_entry: Invalid reason!",
                            "color": 0xE74C3C
                            }
                        });
                    }else{
                        await member.kick(reason)
                        .catch(error =>  message.channel.send({"embed": {
                            "description": ":no_entry: Unable to ban **"+member.user.username+"** because a error occurred. The error was: **"+error,
                            "color": 0xE74C3C
                            }
                        }));
                        message.channel.send({"embed": {
                            "description": ":hammer: **"+member.user.username+"** Has been banned by **"+message.author.username+"** for the reason, **"+reason+"**",
                            "color": 0x2ECC71
                            }
                        });
                    }
                }
            }
        }
    }
}


module.exports = ban;
