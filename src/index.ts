import { Client as DiscordClient } from "discord.js";
import { deployCommands } from "./deploy-commands";
import { commands } from "./commands";
import { config } from "./config";

const discordClient: DiscordClient = new DiscordClient({
    intents: [
        'Guilds',
        'GuildMessages',
        'DirectMessages'
    ]
});

// Alert when the bot is ready
discordClient.once('ready', () => {
    console.log('Discord bot is ready!');
});

// Deploy upon creation of a guild
discordClient.on('guildCreate', async (guild) => {
    await deployCommands({
        guildId: guild.id
    });
});

// Run commands when prompted by a user
discordClient.on('interactionCreate', async (interaction) => {
    // Return immediately if not a command
    if (!interaction.isCommand()) {
        return;
    }

    const { commandName } = interaction;
    if (commands[commandName as keyof typeof commands]) {
        commands[commandName as keyof typeof commands].execute(interaction);
    }
});

// Login
discordClient.login(config.DISCORD_TOKEN);
