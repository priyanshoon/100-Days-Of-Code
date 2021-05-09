// Advance JavaScript
// Event Propagation
// Event bubbling and capturing

// Callback function

// const subs = (a, b) => {
//     return Math.abs(a - b)
// }

// const addi = (a, b) => {
//     return a + b
// }

// const mult = (a, b) => {
//     return a * b
// }

// const calculate = (num1, num2, operators) => {
//     return operators(num1, num2)
// }

// console.log(calculate(2, 3, subs))

// Scope Chain

// The scope chain is used to resolve the value of variables names in JavaScript

// Synchornoous Programming

// const fun2 = () => {
//     console.log("This is fun 2")
// }


// const fun1 = () => {
//     console.log("This is fun 1")
//     fun2();
//     console.log("This is fun 1.0")
// }

// fun1()

// Asynchronous Programming 

// const fun2 = () => {
//     setTimeout(() => {
//         console.log("This is fun 2")
//     }, 2000);
// }

// const fun1 = () => {
//     console.log("This is fun 1")
//     fun2()
//     console.log("This is fun 1.0")
// }

// fun1()

// Currying

function sum(a) {
    // console.log(a)
    return function(b) {
        // console.log(b)
        return function(c) {
            console.log(a + b + c);
        }
    }
}


sum(5)(3)(8)

