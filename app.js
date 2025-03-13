// .env
import 'dotenv/config';

// discord.js classes
import { Client, Events, GatewayIntentBits } from 'discord.js';

// discord access token
const token = process.env.DISCORD_TOKEN;

// bot instance
const bot = new Client({
    intents: [GatewayIntentBits.Guilds]
});

// alert: ready
bot.once(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}.`);
});

// [KEEP AT BOTTOM] bot login
bot.login(token);