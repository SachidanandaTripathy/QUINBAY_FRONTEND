let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)(\s[A-Z]\.)?\sRoosevelt/; // Change this line
let result = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works
console.log(result);