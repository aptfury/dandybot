// Import Management
const { SlashCommandBuilder } = require('discord.js');
const { viewUsers } = require('../../database/scripts/users.js');

// Interaction Command
module.exports = {
    data: new SlashCommandBuilder()
        .setName('viewusers')
        .setDescription('Views users in database.'),
    async execute(interaction) {
        const users = await viewUsers()
        await interaction.reply(`\`\`\`json ${users}\`\`\``);
    },
};