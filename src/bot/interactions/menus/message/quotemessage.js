require('dotenv').config();
const { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder, MessageFlags, MessageContextMenuCommandInteraction, quote } = require('discord.js');
const quotesChannel = process.env.DANDY_QUOTE_CHAN_ID;

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('Quote Message')
        .setType(ApplicationCommandType.Message),
    /**
     * 
     * @param {MessageContextMenuCommandInteraction} interaction
     * @returns
     */
    async execute(interaction) {
        const message = interaction.targetMessage;
        const content = message.content.toString();
        const member = message.member;
        const author = member.nickname || member.displayName;
        const channel = interaction.guild.channels.cache.get(quotesChannel);

        if (message.author === interaction.client.user) {
            interaction.reply({
                content: "Sorry! I am simply too powerful to be quoted!",
                flags: MessageFlags.Ephemeral
            });
            return;
        }

        const quoteEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setDescription(`${content}`)
            .setTimestamp()
            .setFooter({ text: `${author}` })

        try {
            await message.react('⭐');
            await channel.send({ embeds: [ quoteEmbed ] });
            await interaction.reply({
                content: "The message you selected has been sent to the quotes channel!",
                flags: MessageFlags.Ephemeral
            });
        }
        catch (e) {
            console.error(e);
        }
    }
}