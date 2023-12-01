import { ApplicationCommandType, CommandInteraction, Client as DiscordClient } from "discord.js";
import { Command } from "src/Command";

export const Hello: Command = {
    name: 'hello',
    description: 'Returns a greeting',
    type: ApplicationCommandType.ChatInput,
    run: async (discordClient: DiscordClient, interaction: CommandInteraction) => {
        const content = 'Hello there!';

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}
