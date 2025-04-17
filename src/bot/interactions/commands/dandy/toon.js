const { SlashCommandBuilder, ChatInputCommandInteraction, MessageFlags } = require('discord.js');
const Toons = require('../../../services/models/toons.js');
const { createToon, createTwisted } = require('../../../services/character.js');
const Twisteds = require('../../../models/twisteds.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('newtoon')
        .setDescription('Adds a new toon to the database.')
        .addSubcommand(subcommand =>
            subcommand
                .setName('add')
                .setDescription('Add a new toon to dand-e')
                .addStringOption(option => option.setName('name').setDescription('Name of the new toon.').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('find')
                .setDescription('Finds a toon')
                .setStringOption(option => option.setName('search').setDescription('Search for the toon by their name.').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('edit')
                .setDescription('Edits the toon profile')
                .setStringOption(option => option.setName('toon').setDescription('The name of the toon to edit.').setRequired(true))
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete')
                .setDescription('Deletes a toon from the database \(staff only\)')
                .setStringOption(option => option.setName('removing').setDescription('The name of the toon to deleted.').setRequired(true))
        ),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        const subcom = interaction.options.getSubcommand();

        if (subcom === 'add') {
            const nameData = {
                name: interaction.options.getString('name')
            };
            const toon = new Toons(nameData);
            const twisted = new Twisteds(nameData);
            const response = {
                twisted: null,
                toon: null
            }

            await createTwisted(twisted)
            .then(res => response.twisted = res)
            .catch(e => console.error(e));
            await createToon(toon)
            .then(res => response.toon = res)
            .catch(e => console.error(e));

            await interaction.reply(`\`\`\`${response}\`\`\``);
        }
        else if (subcom === 'find') {
            const name = interaction.options.getString('name');
            const toon = { name: name };

            await readToon(toon)
            .then(async response => await interaction.reply(response))
            .catch(e => console.error(e));
        }
        else if (subcom === 'edit') {

        }
        else if (subcom === 'delete') {

        }
        else {
            await interaction.reply({ content: 'You can either add, find, edit, or delete a toon using this command. The delete feature can only be used by staff. Please reach out to a staff member if you need them to remove a toon.', flags: MessageFlags.Ephemeral });
        }
    }
}