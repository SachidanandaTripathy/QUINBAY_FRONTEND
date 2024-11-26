let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Uses lazy matching and avoids hardcoding "h1"
let result = text.match(myRegex);
