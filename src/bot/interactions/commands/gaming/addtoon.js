const { SlashCommandBuilder } = require('discord.js');
const { DandyToon } = require('../../../services/models');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addtoon')
        .setDescription('Adds a character into the database.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('Toon\'s Name')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('hearts')
                .setDescription('Toon\'s hearts')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('skillcheck')
                .setDescription('Toon\'s skillcheck')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('movement')
                .setDescription('Toon\'s movement speed')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('stamina')
                .setDescription('Toon\'s stamina')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('stealth')
                .setDescription('Toon\'s stealth')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('extraction')
                .setDescription('Toon\'s extraction speed')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('abilityname')
                .setDescription('Toon\'s ability name')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('abilitytype')
                .setDescription('Toon\'s ability type')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('abilitydescription')
                .setDescription('Toon\'s ability description')
                .setRequired(true)
        ),
    async execute(interaction) {
        const name = interaction.options.getString('name');
        const hearts = interaction.options.getInteger('hearts');
        const skillcheck = interaction.options.getInteger('skillcheck');
        const movement = interaction.options.getInteger('movement');
        const stamina = interaction.options.getInteger('stamina');
        const stealth = interaction.options.getInteger('stealth');
        const extraction = interaction.options.getInteger('extraction');
        const abilityname = interaction.options.getString('abilityname');
        const abilitytype = interaction.options.getString('abilitytype');
        const abilitydescription = interaction.options.getString('abilitydescription');

        try {
            await DandyToon.create({
                name: name,
                hearts: hearts,
                skillcheck: skillcheck,
                movement_speed: movement,
                stamina: stamina,
                stealth: stealth,
                extraction_speed: extraction,
                ability_name: abilityname,
                ability_type: abilitytype,
                ability_description: abilitydescription,
            }).then(chara => {
                interaction.reply(`Character Created:\n\`\`\`${JSON.stringify(chara, null, 4)}\`\`\``);
            });
        } catch (e) {
            interaction.reply(`\`\`\`${e}\`\`\``);
        }
    }
}