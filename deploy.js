// Import Management
require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const token = process.env.DISCORD_TOKEN;
const botID = process.env.BOT_ID;
// const devServerID = process.env.DEV_SERVER;
// const mainServerID = process.env.MAIN_SERVER;

// Commands Array
const commands = [];

// Get command folders and files
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        // Get SlashCommandBuilder#toJSON() output from command metadata
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing the data or execute properties.`);
        }
    }
}

// REST Instance
const rest = new REST().setToken(token);

// Deploy commands
(async () => {
    try {
        console.log('Refreshing commands...');

        // Use put method to referesh all commands, whether global or guild isolated
        const data = await rest.put(
            Routes.applicationCommands(botID), // puts global commands
            // Routes.applicationGuildCommands(botID, devServerID), puts guild commands for dev server
            // Routes.applicationGuildCommands(botID, mainServerID), puts guild commands for main server
            { body: commands },
        );

        console.log(`Successfully refreshed ${data.length} commands...`);
    } catch (err) {
        console.error(err);
    }
})();