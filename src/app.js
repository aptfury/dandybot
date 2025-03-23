import { Client, Collection, Events, GatewayIntentBits, MessageFlags } from 'discord.js';
import './configs/env.js';
import logger from './configs/logger.js';
import fs from 'node:fs';
import path from 'node:path';

const token = process.env.TOKEN;

const bot = new Client({
    intents: [
        GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessagePolls,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildExpressions,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessagePolls,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildModeration,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.MessageContent
    ]
});

// bot command handler
bot.commands = new Collection();

const commandsPath = path.join(import.meta.dirname, './bot/interactions/commands');
const commandFolders = fs.readdirSync(commandsPath);

for (const folder of commandFolders) {
    const commandPath = path.join(commandsPath, folder);
    const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandPath, file);
        import(filePath)
        .then(command => {
            if ('data' in command && 'execute' in command) {
                bot.commands.set(command.data.name, command);
                logger.info(`${command.data.name} has been added.`);
            }
            else {
                logger.warn(`The command at ${filePath} is missing the "data" and/or "execute" property.`);
            }
        })
        .catch(e => logger.error(e));
    }
};

bot.once(Events.ClientReady, readyBot => {
    logger.info(`Ready and logged in as ${readyBot.user.tag}`);
});

bot.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        logger.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    }
    catch (e) {
        logger.error(e);

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: `There was an error whle executing this command!`, flags: MessageFlags.Ephemeral });
        }
        else {
            await interaction.reply({ content: 'There was an error while executing this command!', flags: MessageFlags.Ephemeral });
        }
    }
});

process.on('unhandledRejection', error => logger.error('Unhandled promise Rejection:', error));

bot.login(token);