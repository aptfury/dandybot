require('dotenv').config({ path: '../src/configs/.env' });
const { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder, MessageFlags } = require('discord.js');
const { customQuoteModal } = require('../../modals/addUserQuote');
const quotesChannel = process.env.dandy_quotes_chan_id;

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Quote User')
        .setType(ApplicationCommandType.User),
    async execute(interaction) {
        /* const targetMember = interaction.targetMember;
        const nick = targetMember.nickname || targetMember.displayName; */
        const targetUser = interaction.targetUser;
        const id = targetUser.id;
        const member = interaction.guild.members.cache.get(id);
        const nick = member.nickname;
        const channel = interaction.guild.channels.cache.get(quotesChannel);

        if (targetUser === interaction.client.user) {
            interaction.reply({ content: "Sorry! I am simply too powerful to be quoted!", flags: MessageFlags.Ephemeral });
            return;
        }

        /**
         * FIXME:
         *      - Is no longer working after messing with type enforcers and event handler set ups
         *      - MessageQuote is working fine so it may be either the function or an issue in the base code here.
         *      - Causing bugs severe enough to break the code. This should be handled ASAP.
         *      - Appears to be an issue with the modal so it might be worth rebuilding the Modal from the ground up.
         *      - The modal isn't populating on the discord side at all but is a giving an error that it did not receive a string for the response.
         *      - will post error in bot-dev
         */
        customQuoteModal(interaction, nick);

        const filter = (interaction) => interaction.customId === 'addUserQuote';
        interaction.awaitModalSubmit({ filter, time: 15_000 })
        .then((interaction) => {
                const response = interaction.fields.getTextInputValue('content');

                const quoteEmbed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setDescription(`${response}`)
                    .setTimestamp()
                    .setFooter({ text: `${nick}` });
                
                channel.send({ embeds: [ quoteEmbed ] });
                interaction.reply({ content: "Sent to the quote channel!", flags: MessageFlags.Ephemeral });
        })
        .catch(e => console.log(e));
    }
}