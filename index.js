const express = require("express");
const result = require("./string reversal/index");
const palindromeResult = require("./palindrome/index");
const reverseIntResult = require("./reverse integer/index");
const app = express();


console.log(`Successfully solved the reverse string problem and the solution is "${result}"`);
console.log(`Successfully solved the palindrome string problem and the solution is "${palindromeResult}"`);
console.log(`Successfully solved the reverse integer problem and the solution is "${reverseIntResult}"`);

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});