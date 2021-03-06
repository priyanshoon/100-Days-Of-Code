// Filters in Javascript

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newArray = array1.filter((elements, index, arr) => {
//     return elements > 9
// })

// console.log(newArray)

// Map method in JavaScript

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newArray = array1.map((elements, index, array) => {
//     return elements > 9
// })

// console.log(newArray)

// let number = [25, 36, 49, 64, 81]

// let sqrtOfNumber = number.map((elements) => {
//     return Math.sqrt(elements)
// })

// console.log(sqrtOfNumber)

// Chaining Style in Javascript

// let arr = [2, 3, 5, 8, 9]

// let newArr = arr.map((elements) => {
//     return elements * 2
// }).filter((elements) => {
//     return elements >= 10
// }).reduce((accumulator, elements) => {
//     return accumulator+elements
// })

// console.log(newArr);

// Reduce method in JavaScript
// fatten array means to convert the 3d or 2d array into a single dimensional array

// let arr = [1, 2, 3, 4];

// let sum = arr.reduce((accumulator, elements, index, array) => {
//     debugger
//     return accumulator + elements
// });

// console.log(sum)

// How to fatten an array

// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// let flatArray = arr.reduce((accumulator, elements) => {
//     return accumulator.concat(elements)
// })

// console.log(flatArray)

// String in JavaScript

// Strings can created as premitives, from string literals, or as objects, using the String() constructor

// let ytName = new String("CodeWithPriyansh");
// console.log(ytName)

// Date and Time in JavaScript

// There are 4 ways to create Days objects

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// It take 7 arguments
// new Date(milliseconds)
// We cannot avoid month section
// new Date(date string)

// let currDate = new Date().toLocaleString();
// let currDate1 = new Date().toString();
// console.log(currDate);
// console.log(currDate1);

// Date.now()
// Returns the numeric values corresponding to the current time-the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

// console.log(Date.now());

// January is 0 and December is 11

// let d = new Date(2021, 4, 4, 22, 03, 0);
// console.log(d.toLocaleString())

// Month is compulsory

// new Date(dateString)
// new Date(dateString) creates a new date object from a string

// var d = new Date("May 4, 2021 10:10:00")
// console.log(d.toLocaleString());

// How to get individual date

const currDate = new Date()
console.log(currDate.getDay())
console.log(currDate.getFullYear())
console.log(currDate.getMonth())
console.log(currDate.getSeconds())
console.log(currDate.getHours())

