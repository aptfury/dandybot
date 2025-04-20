const { SlashCommandBuilder, ChatInputCommandInteraction, MessageFlags } = require('discord.js');
const Toons = require('../../../models/toons.js')
const Twisteds = require('../../../models/twisteds.js');
const { Stats, Abilities, Images, Requirements, Mastery } = require('../../../models/stats.js');
const { createToon, createTwisted, exists, getToonId } = require('../../../services/character.js');
const { createStats } = require('../../../services/stats.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('newtoon')
        .setDescription('Adds a new toon to the database.')
        .addStringOption(option => 
            option
                .setName('name')
                .setDescription(`The toon's name`)
                .setRequired(true)
        )
        .addStringOption(option => 
            option
                .setName('gender')
                .setDescription(`The toon's gender`)
        )
        .addStringOption(option => 
            option
                .setName('pronouns')
                .setDescription(`The toon's pronouns`)
        )
        .addStringOption(option => 
            option
                .setName('rank')
                .setDescription(`The toon's rank`)
                .addChoices(
                    { name: 'Common', value: 'Common' },
                    { name: 'Uncommon', value: 'Uncommon' },
                    { name: 'Rare', value: 'Rare' },
                    { name: 'Main', value: 'Main' },
                    { name: 'Lethal', value: 'Lethal' }
                )
        )
        .addStringOption(option =>
            option
                .setName('health')
                .setDescription(`Number of hearts they have`)
                .addChoices(
                    { name: '1 Heart', value: 1 },
                    { name: '2 Hearts', value: 2 },
                    { name: '3 Hearts', value: 3 }
                )
        )
        .addStringOption(option =>
            option
                .setName('skillcheck')
                .setDescription(`Skillcheck rating`)
                .addChoices(
                    { name: '1 Stars', value: 1 },
                    { name: '2 Stars', value: 2 },
                    { name: '3 Stars', value: 3 },
                    { name: '4 Stars', value: 4 },
                    { name: '5 Stars', value: 5 },
                )
        )
        .addStringOption(option =>
            option
                .setName('speed')
                .setDescription(`Speed rating`)
                .addChoices(
                    { name: '1 Stars', value: 1 },
                    { name: '2 Stars', value: 2 },
                    { name: '3 Stars', value: 3 },
                    { name: '4 Stars', value: 4 },
                    { name: '5 Stars', value: 5 },
                )
        )
        .addStringOption(option =>
            option
                .setName('stamina')
                .setDescription(`Stamina rating`)
                .addChoices(
                    { name: '1 Stars', value: 1 },
                    { name: '2 Stars', value: 2 },
                    { name: '3 Stars', value: 3 },
                    { name: '4 Stars', value: 4 },
                    { name: '5 Stars', value: 5 },
                )
        )
        .addStringOption(option =>
            option
                .setName('stealth')
                .setDescription(`Stealth rating`)
                .addChoices(
                    { name: '1 Stars', value: 1 },
                    { name: '2 Stars', value: 2 },
                    { name: '3 Stars', value: 3 },
                    { name: '4 Stars', value: 4 },
                    { name: '5 Stars', value: 5 },
                )
        )
        .addStringOption(option =>
            option
                .setName('extraction')
                .setDescription(`Extraction rating`)
                .addChoices(
                    { name: '1 Stars', value: 1 },
                    { name: '2 Stars', value: 2 },
                    { name: '3 Stars', value: 3 },
                    { name: '4 Stars', value: 4 },
                    { name: '5 Stars', value: 5 },
                )
        )
        .addStringOption(option =>
            option
                .setName('light')
                .setDescription(`Can they produce their own source of light?`)
                .addChoices(
                    { name: 'Yes', value: true },
                    { name: 'No', value: false }
                )
        )
        .addIntegerOption(option =>
            option
                .setName('roaming')
                .setDescription(`The roaming speed of this twisted`)
        )
        .addIntegerOption(option =>
            option
                .setName('pursuit')
                .setDescription(`The pursuit speed of this twisted`)
        )
        .addStringOption(option =>
            option
                .setName('special')
                .setDescription(`Select this twisted's special speed if they have one`)
                .addChoices(
                    { name: 'Static', value: 'Static' },
                    { name: 'Blackout', value: 'Blackout' },
                    { name: 'Enraged', value: 'Enraged' },
                    { name: 'Persistent', value: 'Persistent' },
                    { name: 'Other', value: 'Other' }
                )
        )
        .addIntegerOption(option =>
            option
                .setName('attention')
                .setDescription(`The twisted's attention span in seconds`)
        )
        .addIntegerOption(option =>
            option
                .setName('direct')
                .setDescription(`The twisted's detection range for direct vision`)
        )
        .addIntegerOption(option =>
            option
                .setName('peripheral')
                .setDescription(`The twisted's detection range for peripheral vision`)
        )
        .addStringOption(option =>
            option
                .setName('ability1')
                .setDescription(`toon's primary ability name`)
        )
        .addStringOption(option =>
            option
                .setName('desc1')
                .setDescription(`toon's primary ability description`)
        )
        .addStringOption(option =>
            option
                .setName('type1')
                .setDescription(`toon's primary ability type`)
                .addChoices(
                    { name: 'Active', value: 'Active' },
                    { name: 'Passive', value: 'Passive' }
                )
        )
        .addStringOption(option =>
            option
                .setName('ability2')
                .setDescription(`The toon's secondary ability name \(leave blank if none\)`)
        )
        .addStringOption(option =>
            option
                .setName('desc2')
                .setDescription(`The toon's secondary ability description \(leave blank if none\)`)
        )
        .addStringOption(option =>
            option
                .setName('type2')
                .setDescription(`The toon's secondary ability type`)
                .addChoices(
                    { name: 'Active', value: 'Active' },
                    { name: 'Passive', value: 'Passive' }
                )
        )
        .addStringOption(option =>
            option
                .setName('mechanic')
                .setDescription(`The twisted's mechanic`)
        )
        .addStringOption(option =>
            option
                .setName('requirement1')
                .setDescription(`Requirement for unlocking this toon`)
        )
        .addStringOption(option =>
            option
                .setName('requirement2')
                .setDescription(`Requirement for unlocking this toon`)
        )
        .addStringOption(option =>
            option
                .setName('requirement3')
                .setDescription(`Requirement for unlocking this toon`)
        )
        .addStringOption(option =>
            option
                .setName('mastery1')
                .setDescription(`Mastery quest`)
        )
        .addStringOption(option =>
            option
                .setName('mastery2')
                .setDescription(`Mastery quest`)
        )
        .addStringOption(option =>
            option
                .setName('mastery3')
                .setDescription(`Mastery quest`)
        )
        .addStringOption(option =>
            option
                .setName('mastery4')
                .setDescription(`Mastery quest`)
        )
        .addStringOption(option =>
            option
                .setName('mastery5')
                .setDescription(`Mastery quest`)
        )
        .addStringOption(option =>
            option
                .setName('mastery6')
                .setDescription(`Mastery quest`)
        )
        .addStringOption(option =>
            option
                .setName('toonimage')
                .setDescription(`URL to the wiki's image of the toon`)
        )
        .addStringOption(option =>
            option
                .setName('twistedimage')
                .setDescription(`URL to the wiki's image of the twisted`)
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        const subcom = interaction.options.getSubcommand();

        /**
         * TODO: Refactor this back into commands: add, view, edit, and delete and then split through subcommands that way. This is way to convoluted.
         */
    }
}