require('dotenv').config({ path: '../src/configs/.env' });
const { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder, MessageFlags } = require('discord.js');
const quotesChannel = process.env.dandy_quotes_chan_id;

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Quote Message')
        .setType(ApplicationCommandType.Message),
    async execute(interaction) {
        const message = interaction.targetMessage;
        const content = message.content.toString();
        const id = message.author.id;
        const member = interaction.guild.members.cache.get(id);
        const author = member.nickname || member.displayName;
        const channel = await interaction.guild.channels.cache.get(quotesChannel);

        if (message.author === interaction.client.user) {
            interaction.reply({ content: "Sorry! I am simply too powerful to be quoted!", flags: MessageFlags.Ephemeral });
            return;
        }

        const quoteEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setDescription(`${content}`)
            .setTimestamp()
            .setFooter({ text: `${author}` });

        try {
            await message.react('⭐');
            await channel.send({ embeds: [ quoteEmbed ] });
            await interaction.reply({ content: "The message you selected has been sent to the quotes channel!", flags: MessageFlags.Ephemeral });
        }
        catch (e) {
            throw new Error(e);
        }
    }
}