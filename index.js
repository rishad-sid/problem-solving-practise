const express = require("express");
const result = require("./string reversal/index");
const palindromeResult = require("./palindrome/index");
const reverseIntResult = require("./reverse integer/index");
const maxCharResult = require("./max character/index");
const chunkResult = require("./array chunk/index");
const anagramResult = require("./anagram/index");
const app = express();


console.log(`Successfully solved the reverse string problem and the solution is "${result}"`);
console.log(`Successfully solved the palindrome string problem and the solution is "${palindromeResult}"`);
console.log(`Successfully solved the reverse integer problem and the solution is "${reverseIntResult}"`);
console.log(`Successfully solved the Max Character in a string problem and the solution is "${maxCharResult}"`);
console.log("Successfully solved the array chunk problem and the solution is" + " ", chunkResult);
console.log(`Successfully solved the anagram problem and the solution is "${anagramResult}"`);

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});