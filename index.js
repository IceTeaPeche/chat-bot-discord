require('dotenv/config');
const { Client, Intents, IntentsBitField } = require('discord.js');
const axios = require('axios');



 
const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages, IntentsBitField.Flags.MessageContent]
});
 
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  
    
    

    
    
//////////////////                  LES COMMANDES DU BOT                 //////////////////////    
    
    
    
/////////// Gère le help    //////////////
  if (message.content.startsWith('!help')) {
    
    message.channel.send(
         "```\n" +
  "Here are the available commands:\n" +
  "- !help : Show this help message\n" +
  "- !Charles : For Charles\n" +
  "- !duel @user : Duel with a user and the looser is kick from the server\n" +
  "- !La roulette : Plays itself, you have a 1 in 3 chance of being kicked off the server\n" +
  "- !La roulette (number): It plays itself, the number chosen corresponds to the number of times the trigger will be pressed, you have a chance on 3 to be kick of the server.\n" +
  "- !nuke: Clear all messages in the channel\n" +
  "- !pp @user : Get the profile picture of a user\n" +
  "- !kick @user : Kick a user from the server (admin only)\n" +
  "- !ban @user : Ban a user from the server (admin only)\n" +
  "- !timeout @user : timeout a user for 1 minute (admin only)\n" +
  "- !timeout2 @user : timeout a user for 1 minute without admin\n" +
  "- !kick2 @user : Kick a user from the server without admin\n" +
  "- !ban2 @user : Ban a user from the server without admin\n" +
  "- ?your question : Ask a question to the bot\n" +
  "```"
    );
    return;
  }
    
    
/////////// Gère Charles    //////////////
  if (message.content.startsWith('!Charles')) {
    
    message.channel.send(
        "Charles, un nom qui résonne comme une mélodie douce et réconfortante, incarne la bonté et l'entraide à son paroxysme. Son aura bienveillante éclaire notre quotidien, tel un phare dans la tempête.Doté d'une coupe de cheveux qui semble taillée sur mesure par les mains même des dieux de la mode, Charles rayonne d'une élégance naturelle.Chaque mèche semble danser en harmonie avec sa personnalité, soulignant son charisme inné et son assurance tranquille.Mais ce qui distingue véritablement Charles, c'est sa générosité sans bornes et sa disponibilité inépuisable. Toujours prêt à tendre la main à ceux qui en ont besoin, il se mue en un véritable ange gardien pour ceux qui croisent son chemin. Sa gentillesse inégalable fait de lui un véritable pilier de solidarité, un roc sur lequel on peut toujours compter.Sa compassion dépasse les frontières de l'ordinaire, et son altruisme n'a d'égal que sa modestie. Toujours à l'écoute, il sait trouver les mots justes pour apaiser les tourments et éclairer les chemins obscurs.Au-delà de ses talents et de son charme indéniable, Charles incarne les valeurs les plus nobles de l'humanité : l'empathie, la bienveillance et le désir sincère d'aider son prochain. En sa présence, on se sent enveloppé d'une chaleur réconfortante, comme si rien ne pouvait altérer le bien-être qui émane de sa personne.En définitive, Charles est bien plus qu'un ami, bien plus qu'un confident. Il est le symbole vivant de ce que signifie être humain : aimer, soutenir, et partager sans compter. Et pour cela, il mérite toute notre admiration et notre gratitude éternelle."
    );
    return;
  }
    
    
    
/////////// Gère le ban    //////////////
if (message.content.startsWith('!ban')) {

    const roleadmin = message.guild.roles.cache.find(role => role.name === "admin"); 
    if (message.member.roles.cache.has(roleadmin.id)) {

      const userban = message.mentions.users.first();
      if (userban) {

        const member = message.guild.members.cache.get(userban.id);
        if (member) {
          member.ban().then(() => {
            message.reply(`${userban.tag} à quitté le serveur.`);
          }).catch(err => {
            message.reply('Marche pas');
            console.error(err);
          });
        }else {
          message.reply("Cette personne n'existe pas");
        }
      }else {
        message.reply("tu dois mentionner la personne pour le ban");
      }
    }else {
      message.reply("Tu n'as pas le rôle pour cette commande!");
    }
    }
    







/////////// Gère le kick    //////////////
if (message.content.startsWith('!kick')) {

    const roleadmin = message.guild.roles.cache.find(role => role.name === "admin");
    if (message.member.roles.cache.has(roleadmin.id)) {

      const userkick = message.mentions.users.first();
      if (userkick) {

          const member = message.guild.members.cache.get(userkick.id);
        if (member) {
          member.kick().then(() => {
            message.reply(` ${userkick.tag} est parti au goulag.`);
          }).catch(err => {
            message.reply('Marche pas');
            console.error(err);
          });
        } else {
          message.reply("Cette personne n'existe pas!");
        }
      } else {
        message.reply("Tu dois mentionner la personne pour le kick");
      }
    } else {
      message.reply("Tu n'as pas le rôle pour cette commande!");
    }
}
    
    
     
/////////// Gère le ban  sans etre admin  //////////////
if (message.content.startsWith('!ban2')) {


      const userban = message.mentions.users.first();
      if (userban) {

        const member = message.guild.members.cache.get(userban.id);
        if (member) {
          member.ban().then(() => {
            message.reply(`${userban.tag} à quitté le serveur.`);
          }).catch(err => {
            message.reply('Marche pas');
            console.error(err);
          });
        }else {
          message.reply("Cette personne n'existe pas");
        }
      }
    }
    







/////////// Gère le kick sans etre admin   //////////////
if (message.content.startsWith('!kick2')) {


      const userkick = message.mentions.users.first();
      if (userkick) {

          const member = message.guild.members.cache.get(userkick.id);
        if (member) {
          member.kick().then(() => {
            message.reply(` ${userkick.tag} est parti au goulag.`);
          }).catch(err => {
            message.reply('Marche pas');
            console.error(err);
          });
        } else {
          message.reply("Cette personne n'existe pas!");
        }
      } 
     }
    
    
    
    
    
/////////// Gère le timeout    //////////////
if (message.content.startsWith('!timeout')) {
  const roleadmin = message.guild.roles.cache.find(role => role.name === "admin");
  if (message.member.roles.cache.has(roleadmin.id)) {
    const userTimeout = message.mentions.members.first();
    const timeoutRole = message.guild.roles.cache.find(role => role.name === "Chut !"); 
    if (userTimeout && timeoutRole) {
      userTimeout.roles.add(timeoutRole);
      message.reply(` ${userTimeout.user.tag} à du scotch sur la  bouche pendant 1O secondes.`);
      setTimeout(() => {
        userTimeout.roles.remove(timeoutRole);
        message.channel.send(`${userTimeout.user.tag} à mangé son scotch, il peut de nouveau parler.`);
      }, 1 * 10 * 1000); 
    }else {
      message.reply("tu n'as pas mentionné la personne");
    }
  }else {
    message.reply("Tu n'a pas le rôle pour utiliser cette commande");
  }
   }

    
    /////////// Gère le timeout  sans admin   //////////////
if (message.content.startsWith('!timeout2')) {
 
    const userTimeout = message.mentions.members.first();
    const timeoutRole = message.guild.roles.cache.find(role => role.name === "Chut !"); 
    if (userTimeout && timeoutRole) {
      userTimeout.roles.add(timeoutRole);
      message.reply(` ${userTimeout.user.tag} à du scotch sur la  bouche pendant 1O secondes.`);
      setTimeout(() => {
        userTimeout.roles.remove(timeoutRole);
        message.channel.send(`${userTimeout.user.tag} à mangé son scotch, il peut de nouveau parler.`);
      }, 1 * 10 * 1000); 
    }
  }
  
    
    
    
    
    
    
/////////// Gère la roulette en  duel  //////////////
if (message.content.startsWith('!duel')) {
    const userkick = message.author;
    let randomNum = Math.floor(Math.random() * 2) + 1;
    
      if (randomNum === 1) {
        
          const member = message.guild.members.cache.get(userkick.id);
          member.kick().then(() => {
              message.reply(` ${userkick.tag} est parti au goulag.`);
              member.send("Ceci est un message privé.")
        .catch(console.error); 
          });
    } 
     if (randomNum === 2) {
        
          const member = message.mentions.members.first();
          member.kick().then(() => {
              message.reply(` ${member.user.username} est parti au goulag.`);
              member.send("Ceci est un message privé.")
        .catch(console.error); 
          });
    } 
    

      } 

    
    
    
    /////////// Gère la roulette //////////////
if (message.content.startsWith('!La roulette')) {
    const userkick = message.author;
    let randomNum = Math.floor(Math.random() * 3) + 1;
    
      if (randomNum === 1) {

          const member = message.guild.members.cache.get(userkick.id);
        if (member) {
          member.kick().then(() => {
            message.reply(` ${userkick.tag} est parti au goulag.`);
          });
        } 
      } 
    }
    

    /////////// Gère la roulette avec un nombre pour la boucle  //////////////
if (message.content.startsWith('!La roulette')) {
    const userkick = message.author;
    const args = message.content.split(' ');
    const times = args[2] ? parseInt(args[2]) : 1; 

    for (let i = 0; i < times; i++) {
        setTimeout(() => { 
            let randomNum = Math.floor(Math.random() * 3) + 1;
            message.channel.send(`Tentative ${i + 1} sur ${times}`);
            if (randomNum === 1) {
                const member = message.guild.members.cache.get(userkick.id);
                if (member) {
                    member.kick().then(() => {
                        if (i === 1) {
                            message.reply(` ${userkick.tag} est parti au goulag sur la ${i + 1} ère tentative .`);
                        } else {
                            message.reply(` ${userkick.tag} est parti au goulag sur la ${i + 1} ème tentive  .`);
                        }
                    });
                } 
            } 
        }, i * 1400); 
    }
}
    
   
    
    
    
    
    
    
 /////////// clear all tchat  //////////////
if (message.content.startsWith('!nuke')) {
   
    message.channel.clone().then((channel) => {
      channel.setPosition(message.channel.position);
      message.channel.delete();
    });
  
    }

  
  /////////// prend PP  //////////////
if (message.content.startsWith('!pp')) {
    const userpp = message.mentions.members.first();
     if (userpp) {
        const avatarURL = userpp.user.displayAvatarURL({ format: 'png', dynamic: true });
        message.channel.send(avatarURL);
    }}
    
    
    
    
    
    
    
    
    
    /////////// chat bot avec open ai  //////////////
  if (!message.content.startsWith('?')) return;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [
          {
              "role": "system",
              "content": "You are a helpful assistant."
          },
          {
              "role": "user",
              "content": message.content.slice(1)
          }
      ]
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    message.reply(response.data.choices[0].message.content.trim());
  } catch (error) {
    if (error.response && error.response.status === 429) {
      let retryAfter = error.response.headers['retry-after'];
      console.log('Limite de requêtes OpenAI  ', error);
      message.channel.send(
        `Erreur : y a eu trop de requete zebi. Veuillez réessayer après ${retryAfter} secondes.`
      );
    } else {
      console.log('Une erreur est survenue:');
    }
  }
});




client.on('ready', () => {
  console.log(`Bot is ready as: ${client.user.tag}`);
});
 
client.login(process.env.DISCORD_TOKEN);
