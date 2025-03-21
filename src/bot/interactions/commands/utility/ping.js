const { SlashCommandBuilder, ChatInputCommandInteraction, ModalSubmitInteraction } = require('discord.js');
const { pingModal } = require('../../modals/pingModal');
const logger = require('../../../../configs/logger');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with Pong!'),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        await interaction.showModal(pingModal)

        /**
         * 
         * @param {ModalSubmitInteraction} interaction 
         * @returns 
         */
        const filter = (interaction) => interaction.customId === 'pingModal';
        interaction.awaitModalSubmit({ filter, time: 15_000 })
            .then(
                /**
                 * 
                 * @param {ModalSubmitInteraction} interaction 
                 */
                (interaction) => {
                    const response = interaction.fields.getTextInputValue('pingResponse');
                    interaction.reply(response);
                }
            )
            .catch(logger.error);
    }
}