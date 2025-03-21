const { EmbedBuilder, SlashCommandBuilder, bold, italic, Attachment, AttachmentBuilder, underline } = require('discord.js');
const { DandyToon } = require('../../../services/models');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('viewtoon')
        .setDescription('Pull up character info.')
        .addStringOption((option) =>
            option.setName('name')
                .setDescription('character name')
                .setRequired(true)
        ),
    async execute(interaction) {
        const character = await interaction.options.getString('name');

        try {
            DandyToon.findOne({
                where: {
                    name: `${character}`
                }
            })
            .then(char => {
                if (char === null) {
                    return interaction.reply("Character has not been added to the database.");
                }

                const assignHearts = {
                    0: ":broken_heart: :broken_heart: :broken_heart:",
                    1: ":heart: :broken_heart: :broken_heart:",
                    2: ":heart: :heart: :broken_heart:",
                    3: ":heart: :heart: :heart:"
                }

                const assignStars = {
                    0: ":eight_pointed_black_star: :eight_pointed_black_star: :eight_pointed_black_star:",
                    1: ":star: :eight_pointed_black_star: :eight_pointed_black_star:",
                    2: ":star: :star: :eight_pointed_black_star:",
                    3: ":star: :star: :star:",
                }

                const { id, name, hearts, skillcheck, movement_speed, stamina, stealth, extraction_speed, ability_name, ability_type, ability_description } = char;

                const characterEmbed = new EmbedBuilder()
                    .setColor('#518E87')
                    .setTitle(name)
                    .addFields(
                        { name: 'Hearts:', value: assignHearts[hearts], inline: true },
                        { name: 'Skill Check:', value: assignStars[skillcheck], inline: true },
                        { name: 'Movement Speed:', value: assignStars[movement_speed], inline: true },
                        { name: 'Stamina:', value: assignStars[stamina], inline: true },
                        { name: 'Stealth:', value: assignStars[stealth], inline: true },
                        { name: 'Extraction Speed:', value: assignStars[extraction_speed], inline: true },
                        { name: `${ability_name} \(${ability_type}\)`, value: ability_description }
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