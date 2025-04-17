/***********************************
 *      IMPORTS
 ***********************************/
require('dotenv').config();
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const { logger } = require('./configs/logger.js');
const fs = require('node:fs');
const path = require('node:path');

/***********************************
 *      .ENV VARIABLES
 ***********************************/
const token = process.env.TOKEN;

/***********************************
 *      BOT CLIENT INIT
 ***********************************/
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

/***********************************
 *      COMMAND HANDLER
 ***********************************/
bot.commands = new Collection();

const commandsPath = path.join(__dirname, './bot/interactions/commands');
const commandFolders = fs.readdirSync(commandsPath);

for (const folder of commandFolders) {
    const commandPath = path.join(commandsPath, folder);
    const commandFiles = fs.readdirSync(commandPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            bot.commands.set(command.data.name, command);
            logger.info(`${command.data.name} has been added.`);
        }
        else {
            logger.error(`The command at ${filePath} is missing the "data" and/or "execute" property. [APP.JS]`);
        }
    }
};

/***********************************
 *      CONTEXT HANDLER
 ***********************************/



/***********************************
 *      BOT READY EVENT
 ***********************************/
bot.once(Events.ClientReady, readyBot => {
    logger.info(`Ready and logged in as ${readyBot.user.tag}`);
});

/***********************************
 *      CHAT COMMAND EVENT
 ***********************************/
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

/***********************************
 *      CONTEXT_MESSAGE EVENT
 ***********************************/

/***********************************
 *      CONTEXT_USER EVENT
 ***********************************/

/***********************************
 *      UNHANDLED REJECTION
 ***********************************/
process.on('unhandledRejection', error => logger.error('Unhandled promise Rejection:', error));

/***********************************
 *      BOT LOGIN
 ***********************************/
bot.login(token);