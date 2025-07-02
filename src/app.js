/**
 * FIXME: make sure in-memory is a garbage disposal and does not take up much space
 *        be sure to purge memory after each use
 */

/***********************************
 *      IMPORTS
 ***********************************/
require('dotenv').config();
const { Client, Collection, Events, GatewayIntentBits, MessageFlags } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

/***********************************
 *      .ENV VARIABLES
 ***********************************/
const token = process.env.TOKEN;
const devChannel = process.env.DANDY_BOT_DEV_CHAN_ID;

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
            console.info(`${command.data.name} has been added.`);
        }
        else {
            console.error(`The command at ${filePath} is missing the "data" and/or "execute" property. [APP.JS]`);
        }
    }
};

/***********************************
 *      CONTEXTS HANDLER
 ***********************************/
bot.contexts = new Collection();

const contextsPath = path.join(__dirname, './bot/interactions/menus');
const contextFolders = fs.readdirSync(contextsPath);

for (const folder of contextFolders) {
    const contextPath = path.join(contextsPath, folder);
    const contextFiles = fs.readdirSync(contextPath).filter(file => file.endsWith('.js'));

    for (const file of contextFiles) {
        const filePath = path.join(contextPath, file);
        const context = require(filePath);

        if ('data' in context && 'execute' in context) {
            bot.contexts.set(context.data.name, context);
            console.info(`${context.data.name} has been added.`);
        } else {
            console.warn(`The context menu at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

/***********************************
 *      BOT READY EVENT
 ***********************************/
bot.once(Events.ClientReady, readyBot => {
    console.info(`Ready and logged in as ${readyBot.user.tag}`);
});

/***********************************
 *      CHAT COMMAND EVENT
 ***********************************/
bot.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    }
    catch (e) {
        console.error(e);

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
bot.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isMessageContextMenuCommand()) return;

    const context = interaction.client.contexts.get(interaction.commandName);

    if (!context) {
        console.error(`This message context menu could not be found.`);
        return;
    }

    try {
        await context.execute(interaction);
    }
    catch (e) {
        console.error(e);

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: `There was an error while executing this message context menu command.`, flags: MessageFlags.Ephemeral });
            await interaction.guild.channels.get(devChannel).send(`Error Report:\n\`\`\`${e}\`\`\``);
        } else {
            await interaction.reply({ content: `There was an error executing this message context menu command.`, flags: MessageFlags.Ephemeral });
            await interaction.guild.channels.get(devChannel).send(`Error Report:\n\`\`\`${e}\`\`\``);
        }
    }
});

/***********************************
 *      CONTEXT_USER EVENT
 ***********************************/
bot.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isUserContextMenuCommand()) return;

    const context = interaction.client.contexts.get(interaction.commandName);

    if (!context) {
        console.error(`This user context menu could not be found.`);
        return;
    }

    try {
        await context.execute(interaction);
    }
    catch (e) {
        console.error(e);

        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: `There was an error while executing this user context menu command.`, flags: MessageFlags.Ephemeral });
            await interaction.guild.channels.get(devChannel).send(`Error Report:\n\`\`\`${e}\`\`\``);
        } else {
            await interaction.reply({ content: `There was an error executing this user context menu command.`, flags: MessageFlags.Ephemeral });
            await interaction.guild.channels.get(devChannel).send(`Error Report:\n\`\`\`${e}\`\`\``);
        }
    }
})

/***********************************
 *      UNHANDLED REJECTION
 ***********************************/
process.on('unhandledRejection', error => console.error('Unhandled promise Rejection:', error));

/***********************************
 *      BOT LOGIN
 ***********************************/
bot.login(token);