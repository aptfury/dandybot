// imports
require('dotenv').config({
    path: './configs/.env'
});
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const logger = require('./configs/logger');
const { User, DandyToon, DandyTwisted } = require('./bot/services/models');

// .env
const token = process.env.token;
const chan = process.env.dandy_bot_dev_chan_id;
const admin = process.env.dandy_bot_admin_id;

// app initialization
const app = new Client({
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

// app command handler
app.commands = new Collection();

const foldersPath = path.join(__dirname, './bot/interactions/commands'); // gets path to commands folder
const commandFolders = fs.readdirSync(foldersPath); // gets each folder within commands folder

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder); // gets the path of current commands folder
    const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js')); // gets the command files

    // cycles through individual command files
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file); // gets the path to the command file
        const command = require(filePath); // gets the individual command

        // checks validity of the command
        if ('data' in command && 'execute' in command) {
            app.commands.set(command.data.name, command);
            logger.info(`${command.data.name} has been added.`);
        } else {
            logger.warn(`The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

// app contexts handler
app.contexts = new Collection();

const contextFolderPath = path.join(__dirname, './bot/interactions/menus');
const contextFolders = fs.readdirSync(contextFolderPath);

for (const folder of contextFolders) {
    const contextsPath = path.join(contextFolderPath, folder);
    const contextFiles = fs.readdirSync(contextsPath).filter((file) => file.endsWith('.js'));

    for (const file of contextFiles) {
        const filePath = path.join(contextsPath, file);
        const context = require(filePath);

        if ('data' in context && 'execute' in context) {
            app.contexts.set(context.data.name, context);
            logger.info(`${context.data.name} has been added.`);
        } else {
            logger.warn(`The context menu at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

// app ready
app.once(Events.ClientReady, (readyApp) => {
    User.sync();
    DandyToon.sync();
    DandyTwisted.sync();

    logger.info(`Logged in as ${readyApp.user.tag}.`);
})

// app debug
app.on(Events.Debug, info => logger.debug(info));

// app warn
app.on(Events.Warn, info => logger.warn(info));

// app error
app.on(Events.Error, error => logger.error(error));

// app message context menu event
app.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isMessageContextMenuCommand()) return;

    const context = interaction.client.contexts.get(interaction.commandName);

    if (!context) {
        logger.error(`No context matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await context.execute(interaction);
    } catch (error) {
        logger.error(error);

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp('There was an error while executing this context menu command.');
            await interaction.guild.channels.cache.get(chan).send(`<@${admin}> Error Report:\n\`\`\`${error}\`\`\``);
        } else {
            await interaction.reply('There was an error while executing this context menu command.');
            await interaction.guild.channels.cache.get(chan).send(`<@${admin}> Error Report:\n\`\`\`${error}\`\`\``);
        }
    }
});

// app chat command event
app.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        logger.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        logger.error(error);

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp('There was an error while executing this command. The bot developer has been notified.');
            await interaction.guild.channels.cache.get(chan).send(`<@${admin}> Error Report:\n\`\`\`${error}\`\`\``);
        } else {
            await interaction.reply('There was an error while executing this command. The bot developer has been notified.');
            await interaction.guild.channels.cache.get(chan).send(`<@${admin}> Error Report:\n\`\`\`${error}\`\`\``);
        }
    }
});

// app login
app.login(token);