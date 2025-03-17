const { ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        if (interaction.commandName === 'ping') {
            const modal = new ModalBuilder()
                .setCustomId('pingModal')
                .setTitle('Ping Modal');

            const reply = new TextInputBuilder()
                .setCustomId('replyInput')
                .setLabel('What should the bot reply with?')
                .setStyle(TextInputStyle.Short)
                .setRequired(true)
                .setValue('Pong!');

            const firstActionRow = new ActionRowBuilder().addComponents(reply);

            modal.addComponents(firstActionRow);

            await interaction.showModal(modal);
        }
    },

    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isModalSubmit()) return;
        if (!interaction.customId === 'pingModal') return;
        const reply = interaction.fields.getTextInputValue('reply');

        await interaction.reply(reply);
    }
}