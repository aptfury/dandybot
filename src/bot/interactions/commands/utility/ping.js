import { SlashCommandBuilder, ChatInputCommandInteraction, Client } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!'),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     * @param {Client} bot
     */
    async execute(interaction, bot) {
        await interaction.reply(`Pong! Response Time: ${bot.ws.ping}ms`);
    }
}