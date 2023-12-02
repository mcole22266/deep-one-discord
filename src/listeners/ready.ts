import { ActivityType, Client as DiscordClient, Events, TextChannel } from "discord.js";
import { Commands } from "../Commands";
import { handleWelcomeMessage } from "../utils/messages";

export default (discordClient: DiscordClient): void => {
    discordClient.on(Events.ClientReady, async () => {
        if (!discordClient.user || !discordClient.application) {
            return;
        }

        // Register all Slash Commands
        await discordClient.application.commands.set(Commands);

        // Set Activity
        discordClient.user.setActivity('in silence the cosmic currents emerging from the great abyss', {
            type: ActivityType.Watching
        });

        // Set Welcome Message
        handleWelcomeMessage(discordClient);

        console.log(`${discordClient.user.displayName} is online`);
    })
}
