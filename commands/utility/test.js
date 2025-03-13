// imports
import { SlashCommandBuilder } from "discord.js";

// test command
export default {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Verifies operational status.'),
    async execute(interaction) {
        await interaction.reply('I am operational.');
    },
};