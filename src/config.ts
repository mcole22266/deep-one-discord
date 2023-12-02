import dotenv from "dotenv";

dotenv.config();

const {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,

    GUILD_ID_MICHAEL_DND,

    CHANNEL_ID_GENERAL,
    CHANNEL_ID_PLAYGROUND
} = process.env;

if (
    !DISCORD_TOKEN ||
    !DISCORD_CLIENT_ID ||

    !GUILD_ID_MICHAEL_DND ||

    !CHANNEL_ID_GENERAL ||
    !CHANNEL_ID_PLAYGROUND
) {
    throw new Error("Missing Environment Variables. Check .env file");
}

export const config = {
    DISCORD_TOKEN,
    DISCORD_CLIENT_ID,

    GUILD_ID_MICHAEL_DND,

    CHANNEL_ID_GENERAL,
    CHANNEL_ID_PLAYGROUND
};
