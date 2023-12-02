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
