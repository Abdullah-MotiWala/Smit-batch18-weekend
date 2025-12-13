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
fristName = "Motiwala";

var firstName = "Mohd. Abdullah";
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

let age = 23;
// age = age +1
// age += 1

age++;
++age;

age--;
--age;
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
// if (result > passingPer) alert("You're passed");

// const onReception = prompt("Is There anyone on reception")
// // true === "true"
// // 1== "1"
// // 1 === "1"
// if(onReception === true) {
//     alert("Please bring the water")
// } else  {
//     alert("Come back!")
// }

// let myAge = 24;
// myAge = 25;

// let myAge = 25;

// const dob = "12-05-2002";
// > >= >= GreaterThan
// < <= <= LesserThan
// == === EqualTo

let qadriAge = 13;
let qadriAge2 = "13";
console.log(qadriAge == qadriAge2);
console.log(qadriAge === qadriAge2);
// if (qadriAge = 15) {
//   alert("Success");
// }
// console.log(qadriAge)
// if(true){alert("asdf")}

// const currentValue = 10
// if(currentValue >= 10)

// const value = parseFloat("25.01")
// // console.log(value)
// const value = Number(prompt("Enter Your Age!"));
// // isNaN()
// console.log(typeof value, isNaN(value), value);
// console.log(typeof 25,"type")

// let value = prompt("Enter your age!");
// value = Number(value);

// console.log(typeof value, isNaN(value))

// if (typeof value === "number") {
//   alert("You've entered correct value");
// } else {
//   alert("You've entered wrong value");
// }

// const dob = 2025 - value;
// alert("Your birth year is " + dob);

// const salesTarget = 2000;
// const userSales = +prompt("Enter your this month sales");
// console.log(salesTarget >= userSales)
// if (userSales >= salesTarget) {
//   alert("Promotion");
// } else {
//   alert("Fired!");
// }

// if (userSales === salesTarget) alert("Salary Released");
// else if (userSales > salesTarget) alert("Bonus");
// else alert("Fired");

const isGuilty = true;
const prisonerAge = 18;
const isOfficial = false;

// if (isGuilty === true) {
//   if (isOfficial === false) {
//     if (prisonerAge < 18) {
//       alert("Send her to centeral jail");
//     } else {
//       alert("Send him to adaila jail");
//     }
//   } else {
//     alert("Be Izzat Bari");
//   }
// } else {
//   alert("Ba Izzat Bari");
// }

if (isGuilty === true && isOfficial === false) {
  if (prisonerAge < 18) {
    alert("Send him to children jail");
  } else {
  }
} else {
  alert("Riha");
}

const userAge = 22;
const hasCar = true;
const hasJob = true;
const height = 6.1;
const hasHome = false;
const istikhara = true;
// if (
//   userAge > 18 &&
//   hasCar === true &&
//   hasJob === true &&
//   height > 6 &&
//   hasHome
// ) {
//   if (istikhara === false) {
//     alert("Dil ki suno");
//   } else {
//     alert("Istikhire me han");
//   }
// } else {
//   alert("Istikhare me na aya");
// }

const doesKnowCooking = true;
const isBeautiful = false;
const isForeign = false;

if (doesKnowCooking || isBeautiful || isForeign) {
  console.log("Success");
}

// const isClassGoingOn = true;
// const condition = isClassGoingOn === true
// // NOT
// if (!isClassGoingOn) {
//   alert("Don't Disturb");
// }

// const isMarried = false;
// if (!isMarried) {
//   alert("Let's marry");
// }

// const carBudget = true;
// const money = 500001;
// if (money !== 500000) {
//   alert("cultus 2005");
// } else {
//   alert("you have to increase your budget");
// }

// const isFeesSubmitted = false;
// if (isFeesSubmitted) {
//   alert("Please submit your fees");
// }

let user1 = "Umer";
// let user2 = "Ibrahim";
// let user3 = "Farooq";
// let user4 = "Ali";
// let user5 = "Bilawal";

// let users = [
//   "Ume,r",
//   "Ibrahim",
//   "Farooq",
//   "Ali",
//   "Bilawal",
//   25,
//   // ["Index0", "Index1"],
//   // {},
//   false,
//   undefined,
//   null,
//   user1,
// ];
// console.log(users[2],users[6][1]);

// const userage = 24;
// userage.toString();

// const fruits = ["Mango", "Banana", "Apple", "Orange"];
// let abc = fruits.push("Watermelon");
// let firstFruit = fruits.shift();
// let fruitBasketLength = fruits.unshift("Guava");
// fruits.pop()

// console.log(fruits, firstFruit,fruitBasketLength);
const classes = 2;
const classesInString = classes.toString();

console.log(classes, classesInString);

const students = ["Ahmed", "Ali", "Samad"];
const updatedLenght = students.push("Rauf", "Haider");
students.unshift("Ghafoor");

// students.shift()
// students.pop()
// students.splice(1,2,"Bashir")
// students.splice(1,0,"Bashir")
// students.splice(0, 0, "Farooq", "Usman", 5, updatedLenght);
const studentsCopy = students.slice(0, 4);
console.log(studentsCopy, students);

// console.log(students);

// for (let start = 26; start <= 30; start = start + 2) {

// }

// for (let i = 1; i <= 10; i++) {
//   const tableNumber = 14
//   console.log(tableNumber +" X " + i + " = ", i * tableNumber);
// }
// let one = 1;
// console.log("2 X 2 = ", 2 * 2);
// console.log("2 X 3 = ", 3 * 2);
// console.log("2 X 4 = ", 4 * 2);
// console.log("2 X 5 = ", 5 * 2);
// console.log("2 X 6 = ", 6 * 2);
// console.log("2 X 7 = ", 7 * 2);
// console.log("2 X 8 = ", 8 * 2);
// console.log("2 X 9 = ", 9 * 2);
// console.log("2 X 10 = ", 10 * 2);
const chaiTypes = [
  "masala",
  "doodh pati",
  "kashmiri",
  "cut", 
  "Kahwa",
  "Karak",
  "chainak",
  "Gur wali",
];
// const oneIndexValue = chaiTypes[1];
// console.log(oneIndexValue);
for (let i = 0; i < 8; i++) {
  const chai = chaiTypes[i];
  console.log(chai);
  debugger;
  if (chai === "cut") {
    alert("1 cut ustaad");
    // break;
    continue;
  }
  alert("Ustadd Cut hai kya?")
}
