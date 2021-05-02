// var year = 2020;

// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("This year " + year + " is a leap year");
//         } else {
//             console.log("This year " + year + " is not a leap year");
//         }
//     } else {
//         console.log("This year " + year + " is a leap year");
//     }
// } else {
//     console.log("This year " + year + " is not a leap year");
// }

// Falsy values 0, null, NaN, false, undefined

// if (null) {
//     console.log("You Loss!");
// } else {
//     console.log("You Won!");
// }

// Ternary Operator

// var age = 19;
// console.log((age >= 18) ? "You can vote" : "you can't vote")

// Switch Statements 
var area = 'circle';

switch (area) {
    case 'rectangle':
        console.log('rectangle')
        break;
    case 'circle':
        console.log('circle')
        break;
    case 'triangle':
        console.log('triangle')
        break;
    default:
        break;
}