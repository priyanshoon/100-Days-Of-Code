// OOPs in JavaScript
// (Object Oriented Programmings)

// 1st Way

// let bioData = {
//     myName: "Priyanshu",
//     myAge: 17,
//     getData: function(){
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`)
//     }
// }

// bioData.getData()

// 2nd Way

// let bioData = {
//     myName: "Priyanshu",
//     myAge: 17,
//     getData() {
//         console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`)
//     }
// }

// bioData.getData()

// Object in Object

// let bioData = {
//     myName: {
//         myRealName: "Priyanshu",
//         myNickName: "PriyanshGupt"
//     },
//     myAge: 17,
//     getData() {
//         console.log(`My real name is ${bioData.myName.myRealName} and my nick name is ${bioData.myName.myNickName} and my age is ${bioData.myAge}`)
//     }
// }

// bioData.getData()

// this in JavaScript

// console.log(this)

// newObject = {
//     myName: {
//         realName: "Priyanshu Prasad Gupta",
//         nickName: "Priyanshupg"
//     },
//     myAge: 17,
//     getData() {
//         console.log(`My name is ${this.myName.realName} and insta id is ${this.myName.nickName} and my age is ${this.myAge}`)
//     }
// }

newObject.getData()

// Array Destructuring 

// const myBiodata = ["Priyanshu", "Rounak", "Krish"]

// let [first, second, third] = myBiodata
// console.log(first)

// Object Destructuring

// const data = {
//     myName: "Priyanshu Prasad Gupta",
//     myAge: 17,
//     iAm: "Programmer"
// }

// let {myName, myAge, iAm} = data

// console.log(iAm)

// Objects Properties
// no need to write key and value both are same 

// Speard Operators

const color = ["Red", "Blue", "Green", "Yellow", "Black", "Pink"]

const myColor = [...color, "Brown", "Munde"]
console.log(myColor)
