require('dotenv').config({ path: '../src/configs/.env' });
const { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder, MessageFlags } = require('discord.js');
const quotesChannel = process.env.dandy_quotes_chan_id;

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Quote Message')
        .setType(ApplicationCommandType.User),
    async execute(interaction) {
        const targetUser = interaction.targetUser;
        const channel = await interaction.guild.channels.cache.get(quotesChannel);

        if (targetUser === interaction.client.user) {
            interaction.reply({ content: "Sorry! I am simply too powerful to be quoted!", flags: MessageFlags.Ephemeral });
            return;
        }

        const quoteEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setDescription(`${content}`)
            .setTimestamp()
            .setFooter({ text: `${author}` });

        try {
            await channel.send({ embeds: [ quoteEmbed ] });
            await interaction.reply({ content: "The message you selected has been sent to the quotes channel!", flags: MessageFlags.Ephemeral });
        }
        catch (e) {
            throw new Error(e);
        }
    }
}