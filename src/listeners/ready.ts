import { Client as DiscordClient, Events } from "discord.js";
import { Commands } from "../Commands";

export default (discordClient: DiscordClient): void => {
    discordClient.on(Events.ClientReady, async () => {
        if (!discordClient.user || !discordClient.application) {
            return;
        }

        await discordClient.application.commands.set(Commands);

        console.log(`${discordClient.user.displayName} is online`);
    })
}
