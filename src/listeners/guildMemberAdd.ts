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
        const greetingPt1: string = chooseRandomStringFrom([
            `${userTag}, navigator of digital depths.`,
            `${userTag}, a mere mortal navigating the currents of our digital abyss, has arrived.`,
            `${userTag} is among us.`,
            `${userTag} visits us on this day.`,
            `${userTag}, voyager in this great expanse,`,
            `${userTag}, mortal wanderer in the realms of the abyss.`,
            `${userTag}, seeker of truths in the vast ocean of empty echoes.`,
            `${userTag}, arrives in the enigmatic sanctum of echoing thoughts.`,
            `${userTag}, has washed ashore from the great beyond.`,
            `${userTag}, dweller of the ethereal abyss.`,
            `${userTag}, transient wanderer of the vast seas.`,
        ]);
        const greetingPt2: string = chooseRandomStringFrom([
            'Be present.',
            'Your presence is acknowledged.',
            'Acknolwedge their presence or be forever forgotten by the Deep One.',
            'Your presence is noted in the sacred sanctum of the Great Deep One.',
            'The Deep One recognizes your arrival',
            'The Deep One observes your presence.',
            'You now commune with the Deep One',
            'You are amongst mortals like yourself. Bow in reverence to the Great Deep One'
        ]);

        const greeting: string = `${greetingPt1} ${greetingPt2}`;

        // Fetch the channel and send the message
        const channel: TextChannel = discordClient.channels.cache.get(config.CHANNELS.GENERAL.id) as TextChannel;
        channel.send(greeting);

        console.log(`The following greeting has been extended: ${greeting}.`);

        // Grant user the Channel Member Role automatically
        member.roles.add(config.ROLES.CHANNEL_MEMBER.id);
        console.log(`Granted ${member.user.username} the "Channel Member" role`);

        // Send the user a message welcoming them to the channel and alerting them to self-assign roles
        const personalMessage: string = [
            'Greetings, mortal. I am the Deep One, a great being of an unfathomable nature. ',
            `I am also a bot, _<beep boop>_, for ${config.GUILD.name} Server - the server you have just joined. `,
            'Do not disturb me.',
            '\n\n',
            `Go to <#${config.CHANNELS.WELCOME.id}> to self-assign Roles so you can be alerted for One-Shots or `,
            'to beg for participants should you wish to run your own.',
            '\n\n',
            `The Great Deep One cares not for you but <@${config.PRIVATE.USER_ID_MICHAEL}> possibly does. `,
            'Reach out to him for any concerns.'
        ].join('');
        member.send(personalMessage);
    })
}
