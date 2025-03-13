// imports
import { SlashCommandBuilder } from "discord.js";

// test command
const TestCommand = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('Verifies operational status.'),
    async execute(interaction) {
        await interaction.reply('I am operational.');
    },
};

// exports
export { TestCommand };