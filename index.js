const express = require("express");
const result = require("./string reversal/index");
const app = express();


console.log(`Successfully solved the reverse string problem and the solution is "${result}"`);

const port = 3000;

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});