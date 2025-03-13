// .env init
import 'dotenv/config';

// node packages
import fs from 'node:fs';
import path from 'node:path';

// discord.js classes
import { Client, Collection, Events, GatewayIntentBits, Message, MessageFlags } from 'discord.js';

// env variables
const token = process.env.DISCORD_TOKEN;
const log_id = process.env.LOG_ID;

// bot instance
const bot = new Client({
    intents: [GatewayIntentBits.Guilds]
});

/**
 * COMMAND HANDLER START
 */

bot.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        // set command bot.commands
        if ('data' in command && 'execute' in command) {
            bot.commands.set(command.data.name, command);
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
        };
    };
};

// to receive command interactions
bot.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;

    const command = interaction.client.commands.get(interaction.commandName);
    const log_chan = bot.channels.cache.get(`${log_id}`);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        await interaction.reply(`Oops! This command couldn't be found!`);
        log_chan.send(`${interaction.user} used the command ${interaction.commandName}, but that command could not be found.`);
    };

    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error);
        log_chan.send(`\`\`\`${error}\`\`\``);
        
        // reply with error notice for each case
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({
                content: 'There was an error while executing this command!',
                flags: MessageFlags.Ephemeral
            });
        } else {
            await interaction.reply({
                content: 'There was an error while executing this command!',
                flags: MessageFlags.Ephemeral
            });
        };
    };
});

/**
 * COMMAND HANDLER END
 */

// alert: ready
bot.once(Events.ClientReady, readyClient => {
    console.log(`Logged in as ${readyClient.user.tag}.`);
});

// [KEEP AT BOTTOM] bot login
bot.login(token);