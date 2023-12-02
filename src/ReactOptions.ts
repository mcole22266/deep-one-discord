import { config } from "./config";
import { ReactOption } from "./models/reactions";

export const reactOptions: ReactOption[] = [
    {
        name: 'OneShots - DND',
        emoji: 'dragon',
        emoji_unicode: '🐉',
        role_id: config.ROLE_ONESHOTS_DND,
        content: "I'm available for DND One Shots"
    },
    {
        name: 'OneShots - Other',
        emoji: 'game_die',
        emoji_unicode: '🎲',
        role_id: config.ROLE_ONESHOTS_OTHER,
        content: "I'm available for Non-DND One Shots"
    },
    {
        name: 'Game Master',
        emoji: 'mage',
        emoji_unicode: '🧙',
        role_id: config.ROLE_GAME_MASTER,
        content: "I'm open to running TTRPGs"
    }
];
