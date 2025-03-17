const { SlashCommandBuilder } = require('discord.js');
const { pingModal } = require('../../modals/pingModal');
const logger = require('../../../../configs/logger');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    async execute(interaction) {
        await interaction.showModal(pingModal)

        const filter = (interaction) => interaction.customId === 'pingModal';
        interaction.awaitModalSubmit({ filter, time: 15_000 })
            .then((interaction) => {
                const response = interaction.fields.getTextInputValue('pingResponse');
                interaction.reply(response);
            })
            .catch(logger.error);
    }
}