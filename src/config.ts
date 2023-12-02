import dotenv from "dotenv";

dotenv.config();

const {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,

    GUILD_ID_MICHAEL_DND,

    CHANNEL_ID_GENERAL,
    CHANNEL_ID_WELCOME,
    CHANNEL_ID_PLAYGROUND,

    ROLE_CHANNEL_MEMBER,

    MESSAGE_ROLE_SELF_ASSIGN,
} = process.env;

if (
    !DISCORD_TOKEN ||
    !DISCORD_CLIENT_ID ||

    !GUILD_ID_MICHAEL_DND ||

    !CHANNEL_ID_GENERAL ||
    !CHANNEL_ID_WELCOME ||
    !CHANNEL_ID_PLAYGROUND ||

    !ROLE_CHANNEL_MEMBER ||

    !MESSAGE_ROLE_SELF_ASSIGN
) {
    throw new Error("Missing Environment Variables. Check .env file");
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,

    GUILD_ID_MICHAEL_DND,

    CHANNEL_ID_GENERAL,
    CHANNEL_ID_WELCOME,
    CHANNEL_ID_PLAYGROUND,

    ROLE_CHANNEL_MEMBER,

    MESSAGE_ROLE_SELF_ASSIGN,
};
