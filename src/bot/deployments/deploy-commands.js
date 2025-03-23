require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { logger } = require('../../configs/logger.js');

const token = process.env.TOKEN;
const bot_id = process.env.APP_ID;

const commands = [];

const foldersPath = path.join(__dirname, '../interactions/commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        }
        else {
            logger.error(`The command at ${filePath} is missing the "data" and/or "execute" property. [DEPLOY-COMMANDS.JS]`);
        }
    }
}

const rest = new REST().setToken(token);

(async () => {
    try {
        logger.info(`Started refreshing ${commands.length} application commands.`);

        const data = await rest.put(
            Routes.applicationCommands(bot_id),
            { body: commands },
        );

        logger.info(`Successfully reloaded ${data.length} application commands.`);
    }
    catch (e) {
        logger.error(e);
    }
})();