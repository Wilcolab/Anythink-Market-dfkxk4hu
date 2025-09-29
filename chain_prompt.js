function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }

    // Trim spaces and handle empty string
    const trimmed = input.trim();
    if (trimmed === '') return '';

    // Replace underscores and hyphens with spaces
    let str = trimmed.replace(/[_\-]+/g, ' ');

    // Insert space before uppercase letters (camelCase)
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Remove extra spaces
    str = str.replace(/\s+/g, ' ');

    // Split into words, join with hyphens, and lowercase
    return str.split(' ')
        .filter(Boolean)
        .join('-')
        .toLowerCase();
}

// Example test cases:
console.log(toKebabCase("Hello World")); // "hello-world"
console.log(toKebabCase("thisIsATest")); // "this-is-a-test"
console.log(toKebabCase(" mix_and-MATCH Case ")); // "mix-and-match-case"