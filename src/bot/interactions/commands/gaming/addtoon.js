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
        )
        .addIntegerOption(option =>
            option.setName('skillcheck')
                .setDescription('Toon\'s skillcheck')
        )
        .addIntegerOption(option =>
            option.setName('movement')
                .setDescription('Toon\'s movement speed')
        )
        .addIntegerOption(option =>
            option.setName('stamina')
                .setDescription('Toon\'s stamina')
        )
        .addIntegerOption(option =>
            option.setName('stealth')
                .setDescription('Toon\'s stealth')
        )
        .addIntegerOption(option =>
            option.setName('extraction')
                .setDescription('Toon\'s extraction speed')
        )
        .addStringOption(option =>
            option.setName('abilityname')
                .setDescription('Toon\'s ability name')
        )
        .addStringOption(option =>
            option.setName('abilitytype')
                .setDescription('Toon\'s ability type')
        )
        .addStringOption(option =>
            option.setName('abilitydescription')
                .setDescription('Toon\'s ability description')
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
        const photo = require(`../../../../assets/images/dandys/toons/${name}`);
        const avatar = require(`../../../../assets/images/dandys/toons/avatar/${name}`);

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
                photo: photo,
                avatar: avatar,
            }).then(chara => {
                interaction.reply(`Character Created:\n\`\`\`${JSON.stringify(chara, null, 4)}\`\`\``);
            });
        } catch (e) {
            interaction.reply(`\`\`\`${e}\`\`\``);
        }
    }
}