// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



//Solution #1

// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('')
// }



//Solution #2


// function reverse(str) {
//     let reversed = '';
//     for (let characters of str) {
//         reversed = characters + reversed;
//     }

//     return reversed;
// }



//Solution #3


function reverse(str) {
    return str.split('').reduce((reversed, characters) => characters + reversed, '');
}

const result = reverse("Rishad Siddiqy");

module.exports = result;