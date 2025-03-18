const { SlashCommandBuilder } = require('discord.js');
const { DandyPlayable } = require('../../../services/models');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addcharacter')
        .setDescription('Adds a character into the database.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('ksdjf')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('hearts')
                .setDescription('ksdjf')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('skillcheck')
                .setDescription('ksdjf')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('movement')
                .setDescription('ksdjf')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('stamina')
                .setDescription('ksdjf')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('stealth')
                .setDescription('ksdjf')
                .setRequired(true)
        )
        .addIntegerOption(option =>
            option.setName('extraction')
                .setDescription('ksdjf')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('abilityname')
                .setDescription('ksdjf')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('abilitytype')
                .setDescription('ksdjf')
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('abilitydescription')
                .setDescription('ksdjf')
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
        const abilitydescription = interaction.options.getString('abilitydescription')

        try {
            await DandyPlayable.create({
                name: name,
                hearts: hearts,
                skillcheck: skillcheck,
                movement_speed: movement,
                stamina: stamina,
                stealth: stealth,
                extraction_speed: extraction,
                ability_name: abilityname,
                ability_type: abilitytype,
                ability_description: abilitydescription
            }).then(chara => {
                interaction.reply(`Character Created:\n\`\`\`${JSON.stringify(chara, null, 4)}\`\`\``);
            });
        } catch (e) {
            interaction.reply(`\`\`\`${e}\`\`\``)
        }
    }
}