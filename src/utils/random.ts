/**
 * A simple function to random a random string from a list of strings
 * 
 * @param options: A list of strings to choose from
 * @returns a random string from the options list
 */
export function chooseRandomStringFrom(options: string[]): string {
    return options[Math.floor(Math.random() * options.length)];
}
