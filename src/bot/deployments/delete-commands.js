require('dotenv').config();
const { REST, Routes } = require('discord.js');

const token = process.env.TOKEN;
const bot_id = process.env.APP_ID;

const rest = new REST().setToken(token);

(async () => {
    try {
        console.info(`Started deleting registered commands...`);

        const data = await rest.put(
            Routes.applicationCommands(bot_id),
            { body: [] }
        );

        console.info(`Commands have been successfully deleted. Total: ${data.length}`);
    }
    catch (e) {
        console.error(e);
    }
})();