const { EmbedBuilder, SlashCommandBuilder, bold, italic, Attachment, AttachmentBuilder, underline } = require('discord.js');
const { DandyTwisted } = require('../../../services/models');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('viewtwisted')
        .setDescription('Pull up twisted info.')
        .addStringOption((option) =>
            option.setName('name')
                .setDescription('character name')
                .setRequired(true)
        ),
    async execute(interaction) {
        const character = await interaction.options.getString('name');

        try {
            DandyTwisted.findOne({
                where: {
                    name: `${character}`
                }
            })
            .then(char => {
                if (char === null) {
                    return interaction.reply("Character has not been added to the database.");
                }

                const assignStars = {
                    0: ":eight_pointed_black_star: :eight_pointed_black_star: :eight_pointed_black_star:",
                    1: ":star: :eight_pointed_black_star: :eight_pointed_black_star:",
                    2: ":star: :star: :eight_pointed_black_star:",
                    3: ":star: :star: :star:",
                }

                const { id, name, threat, kiting_difficulty, movement_speed, sight, attention_span, ability_name, ability_cooldown, ability_description, info } = char;

                const characterEmbed = new EmbedBuilder()
                    .setColor('#518E87')
                    .setTitle(name)
                    .setDescription(info)
                    .addFields(
                        { name: 'Threat:', value: threat, inline: true },
                        { name: 'Type:', value: kiting_difficulty, inline: true },
                        { name: 'Movement Speed:', value: assignStars[movement_speed], inline: true },
                        { name: 'Sight:', value: assignStars[sight], inline: true },
                        { name: 'Aggro Time:', value: assignStars[attention_span], inline: true },
                        { name: 'Cooldown:', value: `${ability_cooldown} sec.`, inline: true },
                        { name: `${ability_name}`, value: ability_description }
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