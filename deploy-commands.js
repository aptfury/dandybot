/**
 * IMPORTS START
 */

// .env init
require('dotenv').config();

// discord packages
const { REST, Routes } = require('discord.js');

// node packages
const fs = require('node:fs');
const path = require('node:path');

/**
 * IMPORTS END
 */

// environment variables
const bot_id = process.env.BOT_ID;
const token = process.env.DISCORD_TOKEN;

const commands = [];

// grab command folders
const foldersPath = path.join(import.meta.dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    // grab command files
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    // grab JSON output of command metadata
    for (const file of commandFiles) {
        const filePath = path.join(`./commands/${folder}`, file);
        const command = require(filePath);

        // set command bot.commands
        if ('data' in command && 'execute' in command) {
            bot.commands.set(command.data.name, command);
        } else if ('data' in command) {
            
            console.log('Data is present.');
        } else if ('execute' in command) {
            
            console.log('Execute is present.');
        } else {
            console.log(`[WARNING] The command at ${file} is missing a required "data" or "execute" property.`)
        };
    };
};

// construct REST module
const rest = new REST().setToken(token);

// deploy commands
(async () => {
    try {
        console.log(`Refreshing ${commands.length} bot commands.`);

        // refreshes registered commands
        const data = await rest.put(
            Routes.applicationCommands(bot_id),
            {
                body: commands
            },
        );

        console.log(`Successfully reloaded ${data.length} application commands.`);
    }
    catch (error) {
        console.error(error);
    }
})();