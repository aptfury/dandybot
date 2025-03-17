// imports
require('dotenv').config({ path: '../src/configs/.env' });
const { REST, Routes } = require('discord.js');
const logger = require('../../configs/logger');
const fs = require('node:fs');
const path = require('node:path');

const token = process.env.token;
const appId = process.env.app_id;
const commands = [];

// get command folders
const foldersPath = path.join(__dirname, '../interactions/commands');
const commandFolders = fs.readdirSync(foldersPath);

// cycle through command folders
for (const folder of commandFolders) {
    // get command files from the command folders
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith('.js'));

    // get the SlashCommandBuilder#toJSON() output of each command's data for deployment
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        } else {
            throw new Error(`The command at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

// REST module instance
const rest = new REST().setToken(token);

// deploy commands
(async () => {
    try {
        logger.info(`Started refreshing ${commands.length} application (/) commands.`);

        const data = await rest.put(
            Routes.applicationCommands(appId),
            { body: commands },
        );

        logger.info(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        logger.error(error);
    }
})();