import { config } from "./config";
import { ReactOption } from "./models/reactions";

export const ttrpgReactionOptions: ReactOption[] = [
    {
        name: 'OneShots - DND',
        emoji: 'dragon',
        emoji_unicode: '🐉',
        role_id: config.ROLES.ONE_SHOTS_DND.id,
        content: "I'm available for DND One Shots"
    },
    {
        name: 'OneShots - Other',
        emoji: 'game_die',
        emoji_unicode: '🎲',
        role_id: config.ROLES.ONE_SHOTS_OTHER.id,
        content: "I'm available for Non-DND One Shots"
    },
    {
        name: 'Game Master',
        emoji: 'mage',
        emoji_unicode: '🧙',
        role_id: config.ROLES.GAME_MASTER.id,
        content: "I'm open to running TTRPGs"
    }
];

export const otherReactionOptions: ReactOption[] = [
    {
        name: 'Video Games',
        emoji: 'video_game',
        emoji_unicode: '🎮',
        role_id: config.ROLES.VIDEO_GAMER.id,
        content: "I like video games and want to play with others."
    },
    {
        name: 'Golf',
        emoji: 'golf',
        emoji_unicode: '⛳',
        role_id: config.ROLES.GOLFER.id,
        content: "Put me in a channel where I can talk about golf."
    }
];
