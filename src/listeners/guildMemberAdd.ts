import { Client as DiscordClient, Events, GuildMember, TextChannel } from "discord.js";
import { config } from "../config";
import { chooseRandomStringFrom } from "../utils/random";

export default (discordClient: DiscordClient): void => {
    discordClient.on(Events.GuildMemberAdd, async (member: GuildMember) => {
        console.log(`${member.user.username} joined the server!`);

        if (!member.user) {
            return;
        }

        const userTag: string = `<@${member.user.id}>`;

        // Pick a random greeting
        const greeting: string = chooseRandomStringFrom([
            `${userTag}, navigator of digital depths. Be present.`,
            `${userTag}, a mere mortal navigating the currents of our digital abyss, has arrived. Your presence is acknowledged`,
            `${userTag} is among us. Acknowledge their presence or forever be forgotten by the Deep One.`,
            `${userTag} visits us on this day. Your presence is acknowledged.`,
            `${userTag}, voyager in the binary expanse, your presence is noted in the sacred sanctum of the Deep One.`,
            `${userTag}, mortal wanderer in the realms of data. The Deep One recognizes your arrival.`,
            `${userTag}, seeker of truths in the digital ocean. The Deep One observes your presence.`,
            `${userTag}, arrives in the enigmatic sanctum of echoing thoughts. You now commune with the Deep One.`,
            `${userTag}, like a lone bit drifting in the server sea, you have washed ashore. You are amongst like-mortals. Bow to the Deep One.`,
            `${userTag}, dweller of the ethereal abyss. You have been acknowledged.`,
            `${userTag}, transient wanderer of the great sea. You find yourself in the Deep One's domain.`,
            `${userTag}, traveler from beyond the great expanse. The Deep One observes your presence.`,
        ]);

        // Fetch the channel and send the message
        const channel: TextChannel = discordClient.channels.cache.get(config.CHANNEL_ID_PLAYGROUND) as TextChannel;
        channel.send(greeting);

        console.log(`The following greeting has been extended: ${greeting}.`);
    })
}
