// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, SlashCommandBuilder } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds], });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
const CHANNEL_ID = '365947704523882509';

//client.on('ready', client => {
//  client.channels.cache.get(CHANNEL_ID).send('Hello here!');
//})


client.on('ready', () => {
  var testChannel = client.channels.cache.find(channel => channel.id === CHANNEL_ID);

  console.log("I'm connected !");

  setInterval(() => {
  var helltime_start_time = new Date(2023, 5, 9, 10, 15, 0, 0);
  var current_time = new Date();
  var diff = current_time - helltime_start_time;
  remaining_time = 135 - diff%(1000*60*60*2.25)/60000;

  var next_time = new Date(current_time.getTime() + remaining_time*60000).toLocaleString('en-US', { timeZone: 'America/Chicago' });

  remaining_time = Math.round(remaining_time)
  console.log(remaining_time)
  if (remaining_time<35 && remaining_time%10==0 && remaining_time>0) {
    testChannel.send(`Hell tide is starting in ${remaining_time} minutes!`);
  }
  else if (remaining_time > 61 && remaining_time%10==5) {
    testChannel.send(`Hell tide has begun and will end in ${remaining_time-60} minutes!`)
  }
  else if (remaining_time==0) {
    testChannel.send(`Hell tide has begun!`);
  }
  else {
  }
  }, 60000);
});

