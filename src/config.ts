import dotenv from "dotenv";

dotenv.config();

const {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,
    USER_ID_MICHAEL
} = process.env;

if (
    !DISCORD_TOKEN ||
    !DISCORD_CLIENT_ID ||
    !USER_ID_MICHAEL
) {
    throw new Error("Missing Environment Variables. Check .env file");
}

export const config = {
    PRIVATE: {
        DISCORD_TOKEN,
        DISCORD_CLIENT_ID,
        USER_ID_MICHAEL
    },
    GUILD: {
        name: 'Michael\'s RPGs',
        id: '1180346031460847646'
    },
    CHANNELS: {
        GENERAL: {
            name: 'general',
            id: '1004582910222946377',
        },
        WELCOME: {
            name: 'welcome',
            id: '1180332186017214596',
        },
        DALLAS_GANG: {
            name: 'dallas-gang',
            id: '1131207517863690332',
        },
        AVAILABLE_TO_PLAY: {
            name: 'available-to-play',
            id: '1180373982403375144'
        },
        CURSE_OF_STRAHD: {
            name: 'curse-of-strahd',
            id: '1097662730258878494'
        },
        CALL_OF_CTHULHU: {
            name: 'call-of-cthulhu',
            id: '1125889683101069383'
        },
        VIDEO_GAMES: {
            name: 'video-games',
            id: '1180580831962615908'
        },
        GOLF: {
            name: 'golf',
            id: '1180580598310518874'
        },
        PLAYGROUND: {
            name: 'playground',
            id: '1098784272862674975',
        }
    },
    ROLES: {
        CHANNEL_MEMBER: {
            name: 'Channel Member',
            id: '1180332833655504997',
        },
        GAME_MASTER: {
            name: 'Game Master',
            id: '1180356492856148000',
        },
        ONE_SHOTS_DND: {
            name: 'Oneshots - DND',
            id: '1180356290757799968',
        },
        ONE_SHOTS_OTHER: {
            name: 'Oneshots - Other',
            id: '1180356440511230044',
        },
        CURSE_OF_STRAHD: {
            name: 'Curse of Strahd',
            id: '1079201850659708958'
        },
        CALL_OF_CTHULHU: {
            name: 'Call of Cthulhu',
            id: '1125889378355519639'
        },
        GOLFER: {
            name: 'Golfer',
            id: '1180580321662611536'
        },
        VIDEO_GAMER: {
            name: 'Video Gamer',
            id: '1180580406551130202'
        },
        DALLAS_GANG: {
            name: 'Dallas Gang',
            id: '1131207779940581439'
        },
        MIDJOURNIER: {
            name: 'Midjournier',
            id: '1019002384875262053'
        }
    },
    MESSAGES: {
        SELF_ASSIGN_ROLES: {
            name: '',
            id: '1180346031460847646',
        }
    }
};
