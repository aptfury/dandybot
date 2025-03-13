/**
 * IMPORTS START
 */

// .env init and vars
import 'dotenv/config';
const bot_id = process.env.BOT_ID;
const token = process.env.DISCORD_TOKEN;
const dev_server_id = process.env.DEV_SERVER;
const main_server_id = process.env.MAIN_SERVER;

// discord packages
import { REST, Routes } from 'discord.js';

// node packages
import fs from 'node:fs';
import path from 'node:path';

/**
 * IMPORTS END
 */

const commands = [];

// grab command folders
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    // grab command files
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    // grab JSON output of command metadata
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);

        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        } else {
            console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
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