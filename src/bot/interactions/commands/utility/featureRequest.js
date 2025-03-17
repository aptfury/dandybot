require('dotenv').config({ path: '../src/configs/.env' });
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { featureRequest } = require('../../modals/featureRequestModal');
const logger = require('../../../../configs/logger');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('request')
        .setDescription('Requests a feature for dand-e.'),
    async execute(interaction) {
        await interaction.showModal(featureRequest)
        const author = interaction.user.displayName;
        const channelId = process.env.dandy_bot_dev_chan_id;
        const channel = interaction.guild.channels.cache.get(channelId);

        const filter = (interaction) => interaction.customId === 'featureRequest';
        interaction.awaitModalSubmit({ filter, time: 50_000 })
            .then((interaction) => {
                const title = interaction.fields.getTextInputValue('requestTitle');
                const info = interaction.fields.getTextInputValue('requestInfo');

                const requestEmbed = new EmbedBuilder()
                    .setColor(0x0099FF)
                    .setAuthor({ name: `Dand-e feature request by ${author}.` })
                    .addFields(
                        {
                            name: 'Request',
                            value: title
                        },
                        {
                            name: 'Information',
                            value: info
                        }
                    )
                    .setTimestamp()
                
                channel.send({ embeds: [requestEmbed] });
                interaction.reply('Your request has been submitted.');
            })
            .catch(logger.error);
    }
}