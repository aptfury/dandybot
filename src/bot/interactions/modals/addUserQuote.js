const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

const quoteModal = new ModalBuilder()
    .setCustomId('addUserQuote')
    .setTitle('Add user quote.')

const quoteContent = new TextInputBuilder()
    .setCustomId('content')
    .setLabel('What did they say?? :eyes:')
    .setStyle(TextInputStyle.Paragraph);

const actionRow = new ActionRowBuilder().addComponents(quoteContent);

quoteModal.addComponents(actionRow);

const customQuoteModal = async (interaction, name) => {
    quoteModal.setTitle(`Add a quote from ${name}!`);
    quoteContent.setLabel(`What did ${name} say?? :eyes:`);
    
    return await interaction.showModal(quoteModal);
}

module.exports = { customQuoteModal };