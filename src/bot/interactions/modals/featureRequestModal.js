const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

const featureRequest = new ModalBuilder()
    .setCustomId('featureRequest')
    .setTitle('Feature Request')

const requestTitle = new TextInputBuilder()
    .setCustomId('requestTitle')
    .setLabel('The name of your request')
    .setStyle(TextInputStyle.Short)

const requestInfo = new TextInputBuilder()
    .setCustomId('requestInfo')
    .setLabel('What you are requesting')
    .setStyle(TextInputStyle.Paragraph)

const titleRow = new ActionRowBuilder().addComponents(requestTitle);
const infoRow = new ActionRowBuilder().addComponents(requestInfo);

featureRequest.addComponents(titleRow, infoRow);

module.exports = { featureRequest };