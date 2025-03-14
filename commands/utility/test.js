const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Replies if it is working.'),
    async execute(interaction) {
        await interaction.reply('I am working!');
    },
};