// Express server
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/twitch-discord-bot', { useNewUrlParser: true, useUnifiedTopology: true });

const Channel = mongoose.model('Channel', new mongoose.Schema({
  name: String,
  discordChannelId: String
}));

app.post('/addchannel', async (req, res) => {
  const channel = new Channel(req.body);
  await channel.save();
  res.json({ message: 'Channel added successfully' });
});

app.listen(3000, () => console.log('Server started'));
