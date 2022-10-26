// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        // Checking the condition if the number is multiples for both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzBuzz");
            // Checking the condition if the number is multiples for 3
        } else if (i % 3 === 0) {
            console.log("fizz");
            // Checking the condition if the number is multiples for 5
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else console.log(i);
    }
}

fizzBuzz(15)


//Try seperately run this file in console since this module is not being exported.