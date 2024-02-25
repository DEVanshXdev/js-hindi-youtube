// Javascript is a dynamically typed language

// On the basis of how data is stored in memory, data types are of two types: primitive and non-primitive

// Primitive -- call by value -- reference to the original data is not given but copied, and changes happen in the copy

// 7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const score1 = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");                             // symbol provide unique identification even to same value 
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 345335848448294802n;

// Reference (NON-PRIMITIVE)

// Array, Objects, Function // datatype is object

// Array
const heroes = ["Shatiman", "naagraj", "doga"]; // multiple values stored inside one variable

// Object                               // object exist in key pair value 
let myobj = {
  name: "hitesh",
  age: 22,
};

// Function
const myFunction = function () {
  console.log("Hello");
};

// Find datatype
// console.log(typeof bigNumber); // commented out bigNumber since it's not declared

// Find datatype of score1
console.log(typeof score1);


//************************************************************************************* */

// Stack (Primitive), Heap (Non - Primitive)  Memory


// Stack - primitive data type copy 
let myYoutubename = "HiteshChoudhary"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)


//Heap - non primitive data type/ refrence
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne);
console.log(userTwo);