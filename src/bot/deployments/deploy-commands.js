import { REST, Routes } from 'discord.js';
import '../../configs/env.js';
import fs from 'node:fs';
import path from 'node:path';
import logger from '../../configs/logger.js';

const commands = [];

const foldersPath = path.join(import.meta.dirname, '../interactions/commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFolders = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

    for (const folder of commandFolders) {
        const commandsPath = path.join(foldersPath, folder);
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            import(filePath)
            .then(command => {
                if ('data' in command && 'execute' in command) {
                    commands.push(command.data.toJSON());
                }
                else {
                    logger.warn(`The command at ${filePath} is missing a required "data" and/or "execute" property.`);
                }
            })
            .catch(e => logger.error(e));
        }
    }
}