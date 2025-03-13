// imports
const { SlashCommandBuilder } = require('discord.js');

// test command
module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Checks if app is responsive.'),
    async execute(interaction) {
        await interaction.reply('I am alive!');
    },
};