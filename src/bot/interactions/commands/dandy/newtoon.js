const { SlashCommandBuilder, ChatInputCommandInteraction } = require('discord.js');
const Toons = require('../../../services/models/toons.js');
const { createToon, createTwisted } = require('../../../services/character.js');
const { logger } = require('../../../../configs/logger.js');
const Twisteds = require('../../../models/twisteds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('newtoon')
        .setDescription('Adds a new toon to the database.')
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
        const nameData = {
            name: interaction.options.getString('name')
        };
        const toon = new Toons(nameData);
        const twisted = new Twisteds(nameData);
        const response = {
            twisted: null,
            toon: null
        }

        await createTwisted(twisted)
        .then(res => response.twisted = res)
        .catch(e => logger.error(e));
        await createToon(toon)
        .then(res => response.toon = res)
        .catch(e => logger.error(e));

        await interaction.reply(`\`\`\`${response}\`\`\``);
    }
}