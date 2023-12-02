import { Client as DiscordClient, TextChannel } from "discord.js";
import { config } from "../config";

export function handleWelcomeMessage(discordClient: DiscordClient): void {
    const channel: TextChannel = discordClient.channels.cache.get(config.CHANNEL_ID_WELCOME) as TextChannel;

    const message: string = `
    The Deep One cares not for mere mortals. The Deep One will not stir for you. React to this message to assign roles yourself:

    :dragon: \`I'm available for DND One Shots\`
    :game_die: \`I'm available for Non-DND One Shots\`
    :mage: \`I'm open to running TTRPGs\`

    **Reacting will auto-assign roles which can be used to notify you if someone is looking to run games. Keep \`@mention\` notifications on!**
    `;

    console.log('Updating Role Self-Assign Message');
    channel.messages.edit(config.MESSAGE_ROLE_SELF_ASSIGN, {
        content: message
    });

}
