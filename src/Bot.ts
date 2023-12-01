import { Client as DiscordClient } from "discord.js";
import { config } from "./config";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";

console.log('Bot is starting...');

// Create Client
const discordClient: DiscordClient = new DiscordClient({
    intents: []
});

// Register Listeners
ready(discordClient);
interactionCreate(discordClient);

// Login with the Bot
discordClient.login(config.DISCORD_TOKEN);
