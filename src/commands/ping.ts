import { CommandInteraction, SlashCommandBuilder } from "discord.js";

const REPLY: string = "Pong!";

export const data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription(`Replies with ${REPLY}`);

export async function execute(interaction: CommandInteraction) {
    return interaction.reply(REPLY);
}
