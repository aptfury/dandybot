require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');

const token = process.env.TOKEN;
const bot_id = process.env.APP_ID;

const commands = [];

const commandsPath = path.join(__dirname, '../interactions/commands');
const commandFolders = fs.readdirSync(commandsPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(commandsPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        }
        else {
            console.error(`The command at ${filePath} is missing the "data" and/or "execute" property. [DEPLOY-COMMANDS.JS]`);
        }
    }
}

const contextsPath = path.join(__dirname, '../interactions/menus');
const contextFolders = fs.readdirSync(contextsPath);

for (const folder of contextFolders) {
    const contextsPath = path.join(contextsPath, folder);
    const contextFiles = fs.readdirSync(contextsPath).filter(file => file.endsWith('.js'));

    for (const file of contextFiles) {
        const filePath = path.join(contextsPath, file);
        const context = require(filePath);

        if ('data' in context && 'execute' in context) {
            commands.push(context.data.toJSON());
        } else {
            console.warn(`The context menu at ${filePath} is missing a required "data" or "execute" property.`);
        }
    }
}

const rest = new REST().setToken(token);

(async () => {
    try {
        console.info(`Started refreshing ${commands.length} application commands.`);

        const data = await rest.put(
            Routes.applicationCommands(bot_id),
            { body: commands },
        );

        console.info(`Successfully reloaded ${data.length} application commands.`);
    }
    catch (e) {
        console.error(e);
    }
})();