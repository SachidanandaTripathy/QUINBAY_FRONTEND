let sampleWord = "astronaut";
let pwRegex = /^(?=.*[a-zA-Z])(?=.*\d{2})[a-zA-Z0-9]+$/;  // Change this line
let result = pwRegex.test(sampleWord);