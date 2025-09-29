// few_shot_prompt.js
// קובץ זה מיועד להחזיק prompt מסוג few-shot עבור פרויקט Anythink Market.
// הוסף כאן דוגמאות או תבניות לשימוש ב-AI.

module.exports = {
  examples: [
    // דוגמה: { input: "...", output: "..." }
  ]
};
/**
 * Converts a string to camelCase.
 * Handles spaces, underscores, hyphens, and uppercase words.
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
    return str
        .replace(/[_\-\s]+/g, ' ')
        .trim()
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
            index === 0 ? word.toLowerCase() : word.toUpperCase()
        )
        .replace(/\s+/g, '');
}

module.exports.toCamelCase = toCamelCase;

/**
 * Adds two numbers and returns their sum.
 * Throws an error if inputs are not valid numbers.
 * @param {*} a
 * @param {*} b
 * @returns {number}
 */
function addNumbers(a, b) {
    if (a === undefined || b === undefined || a === null || b === null) {
        throw new Error('Both inputs must be defined and not null.');
    }
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
        throw new Error('Both inputs must be valid numbers.');
    }
    return a + b;
}

module.exports.addNumbers = addNumbers;