let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Matches all non-alphanumeric characters globally
let result = quoteSample.match(nonAlphabetRegex).length;
