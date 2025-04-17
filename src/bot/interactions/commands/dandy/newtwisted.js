/**
 * FIXME: DEPRECATED
 */

const { SlashCommandBuilder, ChatInputCommandInteraction } = require('discord.js');
const Twisteds = require('../../../services/models/twisteds.js');
const { createTwisted } = require('../../../services/character.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('newtwisted')
        .setDescription('Adds a new twisted to the database.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Name of the twisted.')
                .setRequired(true)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        const name = interaction.options.getString('name');
        const twisted = new Twisteds(name);

        await createTwisted(twisted)
        .then(async response => await interaction.reply(response))
        .catch(e => console.error(e));
    }
}