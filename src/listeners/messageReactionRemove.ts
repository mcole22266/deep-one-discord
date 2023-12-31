import {
    Client as DiscordClient,
    Events,
    GuildMember,
    MessageReaction,
    PartialMessageReaction,
    PartialUser,
    User
} from "discord.js";
import { otherReactionOptions, ttrpgReactionOptions } from "../ReactOptions";
import { ReactOption } from "src/models/reactions";
import { config } from "../config";

export default (discordClient: DiscordClient): void => {
    discordClient.on(Events.MessageReactionRemove, async (reaction: MessageReaction | PartialMessageReaction, user: User | PartialUser) => {

        if (user.bot) {
            // Ignore bots
            console.log(`${user.username} is a bot. Not granting a role.`);
            return;
        }

        // When a reaction is removed, check if the structure is partial
        // https://discordjs.guide/popular-topics/reactions.html#listening-for-reactions-on-old-messages
        if (reaction.partial) {
            console.log('Reaction is a partial reaction');
            try {
                // If the message this reaction belongs to was removed, the fetching might result in an
                // API error which should be handled
                await reaction.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message: ', error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }

        // Skip if a user is a partial user
        if (user.partial) {
            console.log('User is a partial user');
            return;
        }

        // Ensure the message is the Role Self-Assignment Message
        if (reaction.message.id !== config.MESSAGES.SELF_ASSIGN_ROLES.id) {
            return;
        }

        // Search for the Role based on the emoji
        const allReactOptions: ReactOption[] = ttrpgReactionOptions.concat(otherReactionOptions);
        const option: ReactOption | undefined = allReactOptions.find((option: ReactOption, index: number) => {
            if (option.emoji_unicode === reaction.emoji.name) {
                return true;
            }
        });

        // Do nothing if the reaction emoji is not an expected one
        if (!option) {
            console.log(`Reaction ${reaction.emoji.name} is not one of the expected reactions. No action to take.`);
            return;
        }

        // Add the role to the member who reacted
        reaction.message.guild?.members.fetch(user).then((member: GuildMember) => {
            console.log(`${user.username} requested to be removed from ${option.name}`);
            member.roles.remove(option.role_id);
        })
    })
}
