import { ActivityType, Client as DiscordClient, Events } from "discord.js";
import { Commands } from "../Commands";

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

        console.log(`${discordClient.user.displayName} is online`);
    })
}
