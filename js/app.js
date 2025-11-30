// alert("This is js");

// var my name = 25; //space NOT allowed
// var myname = 25 // _ and $ allowed just
// var 1myname = 25 // number at start NOT allowed
// var myName1 = 25 number at the end and in between allowed
// var myName = "a"
// var myname = "a"

var myFirstName = 25; //camel case
var MyFirstName = 25; //Pascal case
var my_first_name = 25; //snake case
var MY_FIRST_NAME = 25; //screaming snake case

// Data Types

// Primitive
var firstName = "Abdullah"; //string
var firstName = `myFirstName`; //string
var isMarried = true; // boolean e.g true/false
var childrenCount = 4; //number
var hasPowred = null; //null
var reason = undefined; //undefined

// Non Primitive
// [], {}

// var a;
// a = 1;
// var a = 3
// var a = 2 //re initialize
// a = 3 // new assignement

var a = 4;
a = 5;

var greetings = "Hello, How're you?";
// alert(greetings);

var a = 1 + 1;
// alert(a);
var b = 2 - 1;
var c = 2 * 2;
var d = 6 / 3;
// console.log("test")
var e = 3 ** 4;
var d = 6 % 2; // %=modulus, remainder
var e = 5 % 2;
console.log(d, e, "==answer");
// alert(e);
// BODMAS | Bracket Open, Divide, Multiply, Addition, Substraction
var g = (2 * 9) / (5 * 8 + 8) - 8 + 9;

var BO1 = 18;
var BO2 = 48;
var division = BO1 / BO2;
console.log(division, "===div");
var addition = 1;
var substraction = division + addition;
// var result = substraction;
// console.log(result, g);

var f = "a" + "a"; //concatenat in case of addition
var j = "1" * "1";
var g = "1" * "1"; // "1" number like string
var h = "1" + 1;
var i = "10" / 5;
console.log(f);
console.log(h, "===j");

// var result2 = isNaN(f)
// console.log(result2,"===result")

var j = 9 % 2;
console.log(j);

var openVar = 1;
var openVar = 5; //allowed
openVar = 6; //allowed

let openLet = 1;
openLet = 2; //allowed
// let openLet = 1 //illegal

const closedConst = 3.14;
// const closedConst = 3.15 // illegal
// closedConst = 3.15 // illegal

let age = 22;
// age = age + 1;
// age = age + 1;
// age += 1;
// let newAge = (age = age + 1);
let newAge = ++age;
// let newAge = age++
console.clear();
console.log(age, "<==age", "==>newAge", newAge, "prev");

// age++ //post increment
// ++age //pre-increment
// age++
// let anotherAge = ++age;

age--; //post-decrement
--age; //pre-decrement
let anotherAge = age++;
// console.log(anotherAge, age);

// age--
// console.log(age, "===age");
// age + 5

// const userName = prompt("What is your name?");
// console.clear();
// console.log(userName, "===userName");
// alert("Happy Birthday" + userName);

// const userAge = prompt("Enter Your Age");
// const currentYear = 2025;

// const birthYear = currentYear - userAge;
// alert(birthYear);

// const userAge = +prompt("Enter your current age");
// const userYearToAge = +prompt("Enter your future age", 25);

// // const userAgeInNum = Number(userAge);
// const userYearToAgeInNum = parseInt(userYearToAge);
// const userAgeInNum = +userAge;

// console.log(userAge, userAgeInNum, "===userAge");

// const futureAge = userAge + userYearToAge;
// alert(futureAge);

const result = 72;
const passingPer = 70;
// if (result > passingPer) {
//   alert("You're Passed");
// } else {
//     alert("You're failed")
// }
if(result>passingPer) alert("You're passed")
