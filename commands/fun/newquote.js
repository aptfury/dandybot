// Import Management
const { EmbedBuilder, InteractionContextType, PermissionFlagsBits, SlashCommandBuilder } = require('discord.js');

// Interaction Command
module.exports = {
    data: new SlashCommandBuilder()
        .setName('newquote')
        .setDescription('Post a quote to the quotes channel.')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('Who said it?')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('quote')
                .setDescription('What was said?')
                .setRequired(true)
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.SendMessages)
        .setContexts(InteractionContextType.Guild),
    async execute(interaction) {
        const target = await interaction.options.getMember('target');
        const quote = await interaction.options.getString('quote');
        const channel = await interaction.guild.channels.cache.get('1344087819835932712');
        const targetName = target.displayName;

        const quoteEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setDescription(`${quote}`)
            .setTimestamp()
            .setFooter({ text: `${targetName}` });

        await channel.send({ embeds: [ quoteEmbed ] });
        await interaction.reply({ content: 'Posted!', flags: MessageFlags.Ephemeral });
    }
};