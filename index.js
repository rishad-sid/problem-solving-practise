const express = require("express");
const result = require("./string reversal/index");
const palindromeResult = require("./palindrome/index");
const app = express();


console.log(`Successfully solved the reverse string problem and the solution is "${result}"`);
console.log(`Successfully solved the palindrome string problem and the solution is "${palindromeResult}"`);

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});