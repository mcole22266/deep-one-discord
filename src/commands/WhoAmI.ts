import { ApplicationCommandType, CommandInteraction, Client as DiscordClient } from "discord.js";
import { Command } from "src/Command";

const NAME: string = 'whoami';
const DESCRIPTION: string = 'The Deep One looks into your very soul.';

export const WhoAmI: Command = {
    name: NAME,
    description: DESCRIPTION,
    type: ApplicationCommandType.ChatInput,
    run: async (discordClient: DiscordClient, interaction: CommandInteraction) => {
        const content = generateResponse(interaction);

        await interaction.followUp({
            ephemeral: true,
            content
        });
    }
}

function generateResponse(interaction: CommandInteraction): string {
    // Recognize the user
    const whoYouAre: string = `You are ${interaction.user.displayName} and have been here since ${interaction.user.createdTimestamp}.`;

    // Pick a deep feeling
    const deepFeelings: string[] = [
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
    ];
    const deepFeeling: string = deepFeelings[Math.floor(Math.random() * deepFeelings.length)];

    // Pick a final thought
    const finalThoughts: string[] = [
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
    ];
    const finalThought: string = finalThoughts[Math.floor(Math.random() * finalThoughts.length)];

    return `${whoYouAre} ${deepFeeling} ${finalThought}`;
}
