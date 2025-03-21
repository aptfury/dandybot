const { SlashCommandBuilder, ChatInputCommandInteraction } = require('discord.js');
const { User } = require('../../../services/models');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Pull up your database info.'),
    /**
     * 
     * @param {ChatInputCommandInteraction} interaction 
     */
    async execute(interaction) {
        const id = interaction.user.id;

        try {
            User.findOne({
                where: {
                    id: `${id}`
                }
            })
            .then(user => {
                if (user === null) {
                    return interaction.reply("We could not find your user information. Please add yourself with the \`/addself\` command.");
                }

                interaction.reply(`Here's your info:\n\`\`\`${JSON.stringify(user, null, 4)}\`\`\``);
            })
            .catch(console.error);
        } catch (e) {
            throw new Error(e);
        }
    }
}