import { Client, Events, GatewayIntentBits } from 'discord.js';
import './configs/env.js';
import logger from './configs/logger.js';

const token = process.env.TOKEN;

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessagePolls,
        GatewayIntentBits.GuildModeration
    ]
});

bot.once(Events.ClientReady, readyBot => {
    logger.info(`Ready and logged in as ${readyBot.user.tag}`);
});

bot.login(token);