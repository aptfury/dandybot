require('dotenv').config({ path: '../src/configs/.env' });
const { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder, MessageFlags, UserContextMenuCommandInteraction, ModalSubmitInteraction } = require('discord.js');
const { customQuoteModal } = require('../../modals/addUserQuote');
const quotesChannel = process.env.dandy_quotes_chan_id;

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Quote User')
        .setType(ApplicationCommandType.User),
    /**
     * 
     * @param {UserContextMenuCommandInteraction} interaction 
     * @returns 
     */
    async execute(interaction) {
        const targetMember = interaction.targetMember;
        const nick = targetMember.nickname || targetMember.displayName;
        const channel = interaction.guild.channels.cache.get(quotesChannel);

        if (targetUser === interaction.client.user) {
            interaction.reply({ content: "Sorry! I am simply too powerful to be quoted!", flags: MessageFlags.Ephemeral });
            return;
        }

        customQuoteModal(interaction, nick);

        /**
         * 
         * @param {ModalSubmitInteraction} interaction 
         * @returns 
         */
        const filter = (interaction) => interaction.customId === 'addUserQuote';
        interaction.awaitModalSubmit({ filter, time: 15_000 })
        .then(
            /**
             * 
             * @param {ModalSubmitInteraction} interaction 
             * @returns
             */
            (interaction) => {
                const response = interaction.fields.getTextInputValue('content');

                const quoteEmbed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setDescription(`${response}`)
                    .setTimestamp()
                    .setFooter({ text: `${nick}` });
                
                channel.send({ embeds: [ quoteEmbed ] });
                interaction.reply({ content: "Sent to the quote channel!", flags: MessageFlags.Ephemeral });
            }
        )
        .catch(e => console.log(e));
    }
}