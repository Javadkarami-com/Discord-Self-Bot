// =============== Port ===============
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Bot Is Working Well!'));
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
// =============== Bot ===============
const Discord  = require('discord.js-self');
var fs = require('fs');
const client = new Discord.Client();
const prefix = "247"
const owner = "498080931895050242" 
const ownername = "SexyDevil" 
// ==============================
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({
    status: 'dnd',
    activity: {
        name: `IG: icyshop.ir`,
        type: 'PLAYING',
    }
  })
});
client.on("message", (message) => {
// =============== Voice ===============
const vc_error = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('❌ Voice ID Eshtebahe ❌')
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);
const vc_success = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('✅ Join Channel shdm ✅')
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);      
// =============== Bot Avatar ===============
const av_error = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('❌ URL Eshtebahe ❌')
.setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);  
fs.readFile('./package.json', 'utf8', function(err, contents) {
// =============== Commands =============
  if (message.mentions.has(client.user.id)) {
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    message.channel.send(mentionmsg).catch(e => {message.channel.send('```js\n' + e + '\n```');});
  };
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    const VC = message.content.slice(prefix.length).trim().split(' ');
    const command = VC.shift().toLowerCase();  
    const channel = client.channels.cache.get(`${VC}`);
  if (command === `join`){
    if (!channel) return message.channel.send(vc_error);
    channel.join().then(connection => {
    connection.voice.setSelfDeaf(false);
    connection.voice.setSelfMute(false);
    message.channel.send(vc_success)
    }).catch(e => {
    const errormsg = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('❌ Error Table ❌')
    .setDescription('```js\n' + e + '\n```')
    .setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);
    message.channel.send(errormsg);
  });
}
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const AV = message.content.slice(prefix.length).trim().split(' ');
  const avchange = AV.shift().toLowerCase();
  const av_success = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('✅ Avatar Avaz shd be : ✅')
  .setImage(`${AV}`)
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username} | Coded By ${ownername}`);    
  if (message.author.id === `${owner}`){
    if (avchange === 'avchange') {
      if (!AV.length) {
        return message.channel.send(av_error);
      }
      client.user.setAvatar(`${AV}`)
      message.channel.send(av_success);
    }
  }
  
});
});  




// =============== End ===============
client.login(process.env.token);
