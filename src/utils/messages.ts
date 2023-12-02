import { Client as DiscordClient, Emoji, GuildEmoji, Message, MessageReaction, TextChannel } from "discord.js";
import { config } from "../config";

interface ReactOption {
    emoji: string,
    emoji_unicode: string,
    content: string
};

export function handleWelcomeMessage(discordClient: DiscordClient): void {
    const channel: TextChannel = discordClient.channels.cache.get(config.CHANNEL_ID_WELCOME) as TextChannel;

    const reactOptions: ReactOption[] = [
        {
            emoji: 'dragon',
            emoji_unicode: '🐉',
            content: "I'm available for DND One Shots"
        },
        {
            emoji: 'game_die',
            emoji_unicode: '🎲',
            content: "I'm available for Non-DND One Shots"
        },
        {
            emoji: 'mage',
            emoji_unicode: '🧙',
            content: "I'm open to running TTRPGs"
        }
    ]

    // Build the message
    const reactOptionsString: string = reactOptions.map((option: ReactOption) => `:${option.emoji}:  \`${option.content}\``).join('\n');
    const messageContent: string = [
        'The Deep One cares not for mere mortals. The Deep One will not stir for you.',
        '_React with the following emojis to be auto-assigned Roles:_',
        '',
        reactOptionsString,
        '',
        '**Reacting will auto-assign roles which can be used to notify you if someone is looking to run games. Keep \`@mention\` notifications on!**'
    ].join('\n');

    // Update the message
    console.log('Updating Role Self-Assign Message');
    channel.messages.edit(config.MESSAGE_ROLE_SELF_ASSIGN, {
        content: messageContent
    });

    // Add each reaction ahead of time
    reactOptions.map((option: ReactOption) => {
        channel.messages.react(config.MESSAGE_ROLE_SELF_ASSIGN, option.emoji_unicode);
    });
}
