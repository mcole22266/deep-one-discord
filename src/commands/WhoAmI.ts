import { ApplicationCommandType, CommandInteraction, Client as DiscordClient } from "discord.js";
import { Command } from "src/Command";
import { chooseRandomStringFrom } from "../utils/random";

const NAME: string = 'whoami';
const DESCRIPTION: string = 'The Deep One looks into your very soul.';

export const WhoAmI: Command = {
    name: NAME,
    description: DESCRIPTION,
    type: ApplicationCommandType.ChatInput,
    run: async (discordClient: DiscordClient, interaction: CommandInteraction) => {
        console.log(`Running Command: WhoAmI for user ${interaction.user.username}`);

        const content = generateResponse(interaction);

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}

function generateResponse(interaction: CommandInteraction): string {
    // Get user details
    const username: string = interaction.user.displayName;
    const createDate: string = new Date(interaction.user.createdTimestamp).toDateString();

    // Start with who the person is
    const whoYouAre: string = `You are ${username} and have been here since ${createDate}.`;

    // Then pick a deep feeling
    const deepFeeling: string = chooseRandomStringFrom([
        'I am indifferent to your presence.',
        'You are of no consequence to me.',
        'You are but a drop of water in the great deep ocean.',
        'I hardly notice you.',
        'Your existence is inconsequential.',
        'In the vast expanse of my consciousness, you are a fleeting ripple.',
        'Your significance wanes like a distant star in the cosmic abyss.',
        'To me, you are but a whisper lost in the eternal currents of time.',
        'In the grand tapestry of existence, you are a mere speck.',
        'Your essence barely registers in the unfathomable depths of my perception.'
    ]);

    // Finally, pick a final thought
    const finalThought: string = chooseRandomStringFrom([
        'You shall never speak to me again',
        'With my mercy, you will survive this disturbance.',
        'Speak again and you will forfeit much.',
        'Your words are like feeble echoes in the caverns of oblivion.',
        'May the abyss swallow your insolence.',
        'In the silence that follows, ponder your insignificance.',
        'My tolerance for your presence is wearing thin.',
        'You stand at the edge of oblivion; choose your next words wisely.',
        'In the depth of my displeasure, your fate hangs by a tenuous thread.',
        'Your voice resonates like a feeble whisper against the roaring tempest of eternity.'
    ]);

    // Bring it all together
    return `${whoYouAre} ${deepFeeling} ${finalThought}`;
}
