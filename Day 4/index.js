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

let arr = [2, 3, 5, 8, 9]

let newArr = arr.map((elements) => {
    return elements * 2
}).filter((elements) => {
    return elements >= 10
})

console.log(newArr);

