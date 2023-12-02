import { ApplicationCommandType, CommandInteraction, Client as DiscordClient } from "discord.js";
import { Command } from "src/Command";

const NAME: string = 'hello';
const DESCRIPTION: string = 'The Deep One extends a polite greeting';

export const Hello: Command = {
    name: NAME,
    description: DESCRIPTION,
    type: ApplicationCommandType.ChatInput,
    run: async (discordClient: DiscordClient, interaction: CommandInteraction) => {
        console.log(`Running Command: Hello for user ${interaction.user.username}`);

        const content = 'Greetings, mortal.';

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}
