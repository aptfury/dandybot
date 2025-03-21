const { EmbedBuilder, SlashCommandBuilder, bold, italic, Attachment, AttachmentBuilder, underline } = require('discord.js');
const { DandyTwisted } = require('../../../services/models');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addtwisted')
        .setDescription('Adds twisted to the database.')
        .addStringOption((option) =>
            option.setName('name')
                .setDescription('character name')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('threat')
                .setDescription('The threat level of the twisted')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('type')
                .setDescription('The threat type of the twisted')
                .setRequired(true)
        )
        .addIntegerOption((option) =>
            option.setName('movement')
                .setDescription('The movement speed of the twisted')
                .setRequired(true)
        )
        .addIntegerOption((option) =>
            option.setName('sight')
                .setDescription('The sight capabalities of the twisted')
                .setRequired(true)
        )
        .addIntegerOption((option) =>
            option.setName('aggro')
                .setDescription('The aggression time of the twisted')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('abilityname')
                .setDescription('The ability name')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('cooldown')
                .setDescription('The ability cooldown')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('abilitydesc')
                .setDescription('The ability description')
                .setRequired(true)
        )
        .addStringOption((option) =>
            option.setName('info')
                .setDescription('The behavior and activity information')
                .setRequired(true)
        ),
    async execute(interaction) {
        const name = await interaction.options.getString('name');
        const threat = await interaction.options.getString('threat');
        const type = await interaction.options.getString('type');
        const mvmt = await interaction.options.getInteger('movement');
        const sight = await interaction.options.getInteger('sight');
        const aggro = await interaction.options.getInteger('aggro');
        const abilityName = await interaction.options.getString('abilityname');
        const cooldown = await interaction.options.getString('cooldown');
        const abilityDescription = await interaction.options.getString('abilitydesc');
        const info = await interaction.options.getString('info');

        try {
            await DandyTwisted.create({
                name: name,
                threat: threat,
                kiting_difficulty: type,
                movement_speed: mvmt,
                sight: sight,
                attention_span: aggro,
                ability_name: abilityName,
                ability_cooldown: cooldown,
                ability_description: abilityDescription,
                info: info
            }).then(chara => {
                interaction.reply(`Twisted Created:\n\`\`\`${JSON.stringify(chara, null, 4)}\`\`\``);
            });
        } catch (e) {
            throw new Error(e);
        }
    }
}