import { Command } from './Command';
import { Hello } from './commands/Hello';
import { WhoAmI } from './commands/WhoAmI';

export const Commands: Command[] = [
    Hello,
    WhoAmI
];
