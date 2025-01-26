import { REST, Routes, SlashCommandBuilder } from 'discord.js';
import { configDotenv } from 'dotenv';

const register = async (botId, botToken, serverId) => {
	const rest = new REST().setToken(botToken);
	try {
		console.log('Started refreshing application (/) commands.');
		await rest.put(Routes.applicationGuildCommands(botId, serverId), {
			body: [
				{
					name: 'hello',
					description: 'Know more about the bot.',
				},
				new SlashCommandBuilder()
					.setName('teach')
					.setDescription(
						'Ajarn Kun will teach you new word, phrase, or sentence.',
					)
					.addStringOption((option) =>
						option
							.setName('text')
							.setDescription('Text to be taught.')
							.setRequired(true)
							.setMinLength(2)
							.setMaxLength(100),
					),
			],
		});
		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
};

configDotenv();
register(
	process.env.DISCORD_BOT_ID,
	process.env.DISCORD_BOT_TOKEN,
	process.env.DISCORD_SERVER_ID,
);
