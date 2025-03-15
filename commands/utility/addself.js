// Import Management
const { SlashCommandBuilder } = require('discord.js');
const { addUser } = require('../../database/scripts/users.js');

// Interaction Command
module.exports = {
    data: new SlashCommandBuilder()
        .setName('addself')
        .setDescription('Adds yourself to the user database.'),
    async execute(interaction) {
        const id = await interaction.user.id;
        const username = await interaction.user.username;

        const user = addUser(id, username);

        await interaction.reply(`The following user has been added:\n\`\`\`${user}\`\`\``);
    },
};