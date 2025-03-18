const { EmbedBuilder, SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const { DandyPlayable } = require('../../../services/models');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('viewcharacter')
        .setDescription('Pull up character info.')
        .addStringOption((option) =>
            option.setName('name')
                .setDescription('character name')
                .setRequired(true)
        ),
    async execute(interaction) {
        const character = await interaction.options.getString('name');

        try {
            DandyPlayable.findOne({
                where: {
                    name: `${character}`
                }
            })
            .then(char => {
                if (char === null) {
                    return interaction.reply("Character has not been added to the database.");
                }

                const { id, name, hearts, skillcheck, movement_speed, stamina, stealth, extraction_speed, ability_name, ability_type, ability_description } = char;

                const characterEmbed = new EmbedBuilder()
                    .setColor('#518E87')
                    .setTitle(name)
                    .setAuthor({ name: 'Playable Characters' })
                    .addFields(
                        {
                            name: 'hearts',
                            value: hearts
                        },
                        {
                            name: 'skillcheck',
                            value: skillcheck
                        },
                        {
                            name: 'movement speed',
                            value: movement_speed
                        },
                        {
                            name: 'stamina',
                            value: stamina
                        },
                        {
                            name: 'stealth',
                            value: stealth
                        },
                        {
                            name: 'extraction speed',
                            value: extraction_speed
                        },
                        {
                            name: `ability: ${ability_name.toLowerCase()} \*\(${ability_type.toLowerCase()}\)\*`,
                            value: `${ability_description}`
                        }
                    )
                    .setFooter({ text: `${id}` })

                interaction.reply({ embeds: [characterEmbed] });
            })
            .catch(console.error);
        } catch (e) {
            throw new Error(e);
        }
    }
}