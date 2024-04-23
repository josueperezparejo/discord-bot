const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quote')
        .setDescription('Replies with a random quote!'),
    async execute(interaction) {
        const res = await fetch(`https://api.breakingbadquotes.xyz/v1/quotes`)
        const data = await res.json()
        const { quote, author } = data[0]
        await interaction.reply(`${quote} by ${author}`);
    },
};
