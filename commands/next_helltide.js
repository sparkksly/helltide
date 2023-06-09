const { SlashCommandBuilder } = require('discord.js');
module.exports = {
	data: new SlashCommandBuilder()
		.setName('next')
		.setDescription('Provides the next helltide starting time in CST'),
	async execute(interaction) {
		await interaction.reply(`Next helltime will start at ${next_time} CST`);
	},
};