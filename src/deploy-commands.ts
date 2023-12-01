import { REST, Routes } from "discord.js";
import { commands } from "./commands"
import { config } from "./config";

const commandsData = Object.values(commands).map((command) => {
    command.data
});

const rest = new REST({ version: '10' }).setToken(config.DISCORD_TOKEN);

export async function deployCommands(props: DeployCommandsProps) {
    try {
        console.log('Started refreshing application (/) commands');

        await rest.put(
            Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, props.guildId),
            {
                body: commandsData
            }
        );

        console.log('Successfully reloaded application (/) commands');
    } catch (error) {
        console.error(error);
    }
}
