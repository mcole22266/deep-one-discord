import { Client as DiscordClient, TextChannel } from "discord.js";
import { config } from "../config";
import { ReactOption } from "../models/reactions";
import { otherReactionOptions, ttrpgReactionOptions } from "../ReactOptions";

export function handleWelcomeMessage(discordClient: DiscordClient): void {
    const channel: TextChannel = discordClient.channels.cache.get(config.CHANNELS.WELCOME.id) as TextChannel;

    // Build the message
    const reactOptionsString: string = ttrpgReactionOptions.map((option: ReactOption) => `:${option.emoji}:  \`${option.content}\``).join('\n');
    const otherOptionsString: string = otherReactionOptions.map((option: ReactOption) => `:${option.emoji}:  \`${option.content}\``).join('\n');
    const messageContent: string = [
        'The Deep One cares not for mere mortals. The Deep One will not stir for you.',
        '',
        '_React with the following emojis to be auto-assigned Roles:_',
        reactOptionsString,
        '',
        '_Some Less Nerdy Roles:_',
        otherOptionsString,
        ''
    ].join('\n');

    // Update the message
    console.log('Updating Role Self-Assign Message');
    channel.messages.edit(config.MESSAGES.SELF_ASSIGN_ROLES.id, {
        content: messageContent
    });

    // Add each reaction ahead of time
    [
        ttrpgReactionOptions,
        otherReactionOptions
    ].map((reactionOptions: ReactOption[]) => {
        reactionOptions.map((option: ReactOption) => {
            channel.messages.react(config.MESSAGES.SELF_ASSIGN_ROLES.id, option.emoji_unicode);
        });
    })
}
