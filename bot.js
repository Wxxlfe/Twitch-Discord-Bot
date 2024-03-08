// Discord bot
const Discord = require('discord.js');
const axios = require('axios');
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Bot is ready as: ${bot.user.tag}`);
});

bot.on('message', async (msg) => {
  if (msg.content.startsWith('!addchannel')) {
    const channelName = msg.content.split(' ')[1];
    const response = await axios.post('http://localhost:3000/addchannel', { channelName, discordChannelId: msg.channel.id });
    msg.reply(response.data.message);
  }
});

bot.login('your-bot-token');