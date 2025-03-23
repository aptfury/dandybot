const { SlashCommandBuilder, ChatInputCommandInteraction } = require('discord.js');
// const Toons = require('../../../services/models/toons.js');
const { readToon } = require('../../../services/character.js');
const { logger } = require('../../../../configs/logger.js');

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
        const toon = { name: name };

        await readToon(toon)
        .then(async response => await interaction.reply(response))
        .catch(e => logger.error(e));
    }
}