const { SlashCommandBuilder, ChatInputCommandInteraction } = require('discord.js');
const { readTwisted } = require('../../../services/character.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('findtoon')
        .setDescription('Finds a toon in the database.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Name of the toon.')
                .setRequired(true)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        const name = interaction.options.getString('name');
        const twisted = { name: name };

        await readTwisted(twisted)
        .then(async response => await interaction.reply(response))
        .catch(e => console.error(e));
    }
}