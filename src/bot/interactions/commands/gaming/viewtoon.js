const { EmbedBuilder, SlashCommandBuilder, blockQuote, bold, italic, quote, spoiler, strikethrough, underline, subtext } = require('discord.js');
const { DandyPlayable } = require('../../../services/models');

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
            DandyPlayable.findOne({
                where: {
                    name: `${character}`
                }
            })
            .then(char => {
                if (char === null) {
                    return interaction.reply("Character has not been added to the database.");
                }

                const { id, name, hearts, skillcheck, movement_speed, stamina, stealth, extraction_speed, ability_name, ability_type, ability_description, photo, avatar } = char;

                const characterEmbed = new EmbedBuilder()
                    .setColor('#518E87')
                    .setTitle(name)
                    .setDescription(`
                        ${bold("Hearts:")} ${hearts}\n
                        ${bold("Skill Check:")} ${skillcheck}\n
                        ${bold("Movement Speed:")} ${movement_speed}\n
                        ${bold("Stamina:")} ${stamina}\n
                        ${bold("Stealth:")} ${stealth}\n
                        ${bold("Extraction Speed:")} ${extraction_speed}\n\n
                        ${bold("Ability:")} ${bold(ability_name)} [${italic(ability_type)}]\n
                        ${ability_description}
                    `)
                    .setFooter({ text: `${id}` })

                    if (photo) {
                        characterEmbed.setImage(photo);
                    }

                    if (avatar) {
                        characterEmbed.setAuthor({ name: "Playable Toon", iconURL: avatar });
                    } else {
                        characterEmbed.setAuthor({ name: "Playabale Toon" });
                    }

                interaction.reply({ embeds: [characterEmbed] });
            })
            .catch(console.error);
        } catch (e) {
            throw new Error(e);
        }
    }
}