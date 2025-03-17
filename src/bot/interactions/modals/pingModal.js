const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

const pingModal = new ModalBuilder()
    .setCustomId('pingModal')
    .setTitle('Ping Modal')

const pingResponse = new TextInputBuilder()
    .setCustomId('pingResponse')
    .setLabel('What should my reply be?')
    .setStyle(TextInputStyle.Short);

const actionRow = new ActionRowBuilder().addComponents(pingResponse);

pingModal.addComponents(actionRow);

module.exports = { pingModal };