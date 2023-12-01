import { CommandInteraction, Client as DiscordClient, Events, Interaction } from "discord.js";
import { Commands } from '../Commands'

export default (discordClient: DiscordClient): void => {
    discordClient.on(Events.InteractionCreate, async (interaction: Interaction) => {
        if (interaction.isCommand() || interaction.isContextMenuCommand()) {
            await handleSlashCommand(discordClient, interaction);
        }
    });
};

const handleSlashCommand = async (discordClient: DiscordClient, interaction: CommandInteraction): Promise<void> => {
    const slashCommand = Commands.find(command => command.name === interaction.commandName);

    if (!slashCommand) {
        interaction.followUp({
            content: 'An error has occurred'
        });
        return;
    }

    await interaction.deferReply();

    slashCommand.run(discordClient, interaction);
};
