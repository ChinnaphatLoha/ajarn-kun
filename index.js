import { configDotenv } from 'dotenv';
import OpenAI from 'openai';
import { Client } from 'discord.js';

configDotenv();

const client = new Client({
	intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});

const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

client.on('messageCreate', async (message) => {
	if (message.author.bot) return;
	if (message.channel.id !== CHANNEL_ID) return;

	console.log(`Hello ${message.content}!`);
});

client.login(process.env.DISCORD_BOT_TOKEN);
