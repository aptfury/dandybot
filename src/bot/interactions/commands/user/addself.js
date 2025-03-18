const { SlashCommandBuilder } = require('discord.js');
const { User } = require('../../../services/models');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addself')
        .setDescription('Adds your own info to the database.'),
    async execute(interaction) {
        const id = interaction.user.id;
        const username = interaction.user.username;

        try {
            await User.create({ id: id, username: username });
            interaction.reply('You have been added to the database!');
        } catch (e) {
            throw new Error(e);
        }
    }
}