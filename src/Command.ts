import { ChatInputApplicationCommandData, CommandInteraction, Client as DiscordClient } from "discord.js";

export interface Command extends ChatInputApplicationCommandData {
    run: (discordClient: DiscordClient, interaction: CommandInteraction) => void;
}
