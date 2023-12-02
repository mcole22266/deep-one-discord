import { Client as DiscordClient, GatewayIntentBits } from "discord.js";
import { config } from "./config";
import ready from "./listeners/ready";
import interactionCreate from "./listeners/interactionCreate";
import guildMemberAdd from "./listeners/guildMemberAdd";

console.log('Bot is starting...');

// Create Client
console.log('Creating Discord Client');
const discordClient: DiscordClient = new DiscordClient({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

// Register Listeners
console.log('Readying listeners');
ready(discordClient);
interactionCreate(discordClient);
guildMemberAdd(discordClient);

// Login with the Bot
console.log('Logging in');
discordClient.login(config.DISCORD_TOKEN);

console.log('Bot is ready...');
