// imports
require('dotenv').config({ path: '../src/configs/.env' });
const { REST, Routes } = require('discord.js');
const logger = require('../../configs/logger');

const token = process.env.token;
const appId = process.env.app_id;

// REST module instance
const rest = new REST().setToken(token);

// deploy commands
(async () => {
    try {
        logger.info(`Started deleting registered commands..`);

        const data = await rest.put(
            Routes.applicationCommands(appId),
            { body: [] },
        );

        logger.info(`Commands have been successfully deleted. Total ${data.length}.`);
    } catch (error) {
        logger.error(error);
    }
})();