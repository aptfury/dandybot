require('dotenv').config();
const { EmbedBuilder, InteractionContextType, PermissionFlagsBits, SlashCommandBuilder, MessageFlags, ChatInputCommandInteraction } = require('discord.js');

const quotesChannel = process.env.DANDY_QUOTES_CHAN_ID;
const chan = process.env.DANDY_BOT_DEV_CHAN_ID;

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Post a quote to the quotes channel.')
        .addUserOption((option) =>
            option.setName('user')
                .setDescription('Who said it?')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('quote')
                .setDescription('What to quote.')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
        .setContexts(InteractionContextType.Guild),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        const user = interaction.options.getMember('user');
        const quote = interaction.options.getString('quote')
        const channel = interaction.guild.channels.cache.get(quotesChannel);
        const name = user.displayName;

        const quoteEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setDescription(`${quote}`)
            .setTimestamp()
            .setFooter({ text: `${name}` });

        try {
            await channel.send({ embeds: [ quoteEmbed ] });
            await interaction.reply({ content: 'Successfully quoted!', flags: MessageFlags.Ephemeral });
        } catch (e) {
            throw new Error(e);
        }
    }
}