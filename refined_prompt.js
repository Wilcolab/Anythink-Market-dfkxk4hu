/**
 * Converts a given string to camelCase format.
 *
 * Splits the input string by spaces, underscores, or hyphens, removes empty segments,
 * then lowercases the first word and capitalizes the first letter of each subsequent word.
 *
 * Examples:
 *   camelCase("hello world_example-text") // "helloWorldExampleText"
 *   camelCase("FOO_BAR-baz") // "fooBarBaz"
 *   camelCase("  multiple   separators__here--now ") // "multipleSeparatorsHereNow"
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If the input is not a string.
 */
function camelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Split by spaces, underscores, or hyphens, remove empty parts
    const words = input
        .split(/[\s_\-]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) return '';

    // Lowercase first word, capitalize subsequent words
    return words
        .map((word, idx) => {
            const lower = word.toLowerCase();
            if (idx === 0) return lower;
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(camelCase("hello world_example-text")); // "helloWorldExampleText"
