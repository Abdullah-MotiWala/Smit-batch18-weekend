// alert("This is js");

// var my name = 25; //space NOT allowed
// var myname = 25 // _ and $ allowed just
// var 1myname = 25 // number at start NOT allowed
// var myName1 = 25 number at the end and in between allowed
// var myName = "a"
// var myname = "a"

// var myFirstName = 25; //camel case
// var MyFirstName = 25; //Pascal case
// var my_first_name = 25; //snake case
// var MY_FIRST_NAME = 25; //screaming snake case

// Data Types

// Primitive
// var firstName = "Abdullah"; //string
// fristName = "Motiwala";

// var firstName = "Mohd. Abdullah";
// var firstName = `myFirstName`; //string
// var isMarried = true; // boolean e.g true/false
// var childrenCount = 4; //number
// var hasPowred = null; //null
// var reason = undefined; //undefined

// Non Primitive
// [], {}

// var a;
// a = 1;
// var a = 3
// var a = 2 //re initialize
// a = 3 // new assignement

// var a = 4;
// a = 5;

var greetings = "Hello, How're you?";
// alert(greetings);

// var a = 1 + 1;
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

// var BO1 = 18;
// var BO2 = 48;
// var division = BO1 / BO2;
// console.log(division, "===div");
// var addition = 1;
// var substraction = division + addition;
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
// const chaiTypes = [
//   "masala",
//   "doodh pati",
//   "kashmiri",
//   "cut",
//   "Kahwa",
//   "Karak",
//   "chainak",
//   "Gur wali",
// ];
// const oneIndexValue = chaiTypes[1];
// console.log(oneIndexValue);
// for (let i = 0; i < 8; i++) {
//   const chai = chaiTypes[i];
//   console.log(chai);
//   debugger;
//   if (chai === "cut") {
//     alert("1 cut ustaad");
//     // break;
//     continue;
//   }
//   alert("Ustadd Cut hai kya?")
// }

const studentsName = ["abdullah", "talha", "uzair", "shahzaib"];
// studentsName.splice(1, 1, "sarib");
// const newList = studentsName.slice(1, 4);
// console.log(studentsName, newList);

// for (let i = 0; i <= 10; i++) {
//   const listName = studentsName[i];
//   debugger;
//   if (listName === "uzair") {
//     alert("we find uzair");
//     continue;
//   }
//   alert("did you find uzair");
// }
const rowStudents = [
  "wajeeh",
  "fardeen",
  "mazhar",
  "kaleem",
  "kabir",
  "talha",
  "abdullah",
  "zohaib",
];
// for (let i = 0; i < 6; i++) {
//   // const currentRow = i + 1;
//   const userV
//   console.log(currentRow, "row wala bande ko uthao");
//   if (currentRow === 3) {
//     alert("skip");
//     continue;
//   }
//   alert("slap");
// }

// for (let i = 0; i < rowStudents.length; i++) {
//   const userName = rowStudents[i];
//   if (userName === "mazhar") {
//     continue;
//   }
//   console.log(userName, "khara hoja");
// }
// let ageNumber = 20;
// let hardwork = 1;
// let isSucceed = false;
// while (!isSucceed) {
//   ageNumber++;
//   hardwork++;
//   if (condition) continue;
//   console.log("keep growing and working hard");
//   if (ageNumber > 35 || hardwork > 15) isSucceed = true;
// }
console.clear();
// const homeDistance = 18
// let busDistanceCovered = 0
// // console.log(++busDistanceCovered,"first")
// // console.log(busDistanceCovered,"second")
// while (busDistanceCovered < homeDistance) {
//   alert("Conductor: Landhi, Korangi...");
//   ++busDistanceCovered
//
// let userInput = 0
// do {
//   let userInput = Number(prompt("Enter Your Age"));
//   if (isNaN(userInput)) alert("You Entered the wrong input");
// } while (isNaN(userInput));
// const winnerNumber = 66;

// let userRandomNumber = 0;

// do {
//   userRandomNumber = Number(prompt("Guess a number"));
//   console.log("Loop Running", userRandomNumber);
// } while (userRandomNumber != winnerNumber);

// const studentName = ["ali", "basit", "uzair"];
// for (let i = studentName.length - 1; i >= 0; i--) {
//   console.log(studentName[i]);
//   if (studentName[i] === "basit") {
//     continue;
//   }
//   console.log(studentName[i], "card check kro");
// }
// studentName.push("huzaifa");

// let acButtonNumber = null;

const masjidButton = ["f", "l", "f", "ac", "b", "f", "m"];
const n = masjidButton.length;
let buttonFound = false;
// (0)n
for (let i = 0; i < masjidButton.length; i++) {
  const button = masjidButton[i];
  if (button === "ac") {
    buttonFound = true;
    const difBetweenIndexAndNumber = 1;
    acButtonNumber = i + difBetweenIndexAndNumber;
    // con;
  }
}

// console.log(acButtonNumber);
const floor = [
  // n = 4
  ["floor-1 flat-1", "floor-1 flat-2"], //m=4
  ["floor-2 flat-1", "floor-2 flat-2"],
  ["floor-3 flat-1", "floor-3 flat-2"],
  ["floor-4 flat-1", "floor-4 flat-2"],
];
// (O)mn ()n^2
// for (let i = 0; i < floor.length; i++) {
//   const floorNumber = floor[i];
//   for (let j = 0; j < floorNumber.length; j++) {
//     const flat = floorNumber[j];
//     console.log(floorNumber, flat);
//   }
//   // console.log(i, "I loop end");
// }

// let flag = true;
// const studentsInClass = [];
// while (flag) {
//   const studentId = Math.random()
//   studentsInClass.push(studentId)
//   if (studentsInClass.length === 100) flag = false;
//   debugger;
// }
// let flag = false;
// do {console.log("isRunning")} while (flag);

// // 21-12-25

const firstName = ["ali", "uzair", "usman", "bilal"];
const lastName = ["haider", "baloch", "ashraf", "jabbar"];

// const fullName = [];
// for (let i = 0; i < firstName.length; i++) {
//   for (let j = 0; j < lastName.length; j++) {
//     fullName.push(firstName[i] + lastName[j]);
//   }
// }
// console.log(fullName);
// console.time("User Detail")
// const userInput = prompt("Are you married?").toLowerCase();
// const userLowerInput = userInput.toLowerCase();
// const userUpperInput = userInput.toUpperCase();
// console.log(userInput, userLowerInput);
// if (userLowerInput === "yes") {
//   alert("You're married");
// }
// console.timeEnd("User Detail")

// const city = "Karrachi";
// console.log(city.indexOf("pani"))
// console.log(city.lastIndexOf("a"))
// console.log(city[3])
// console.log(city.charAt(1))
// const cityShort = city.slice(0, 3);
// console.log(city, cityShort);
// console.log(city.length)
// for (let i = 0; i < city.length; i++) {
//   console.log(city[i]);
// }

// const userInput = prompt("Enter Your Name");
// console.log(userInput, userInput.charAt(userInput.length -1));

let text =
  "world war II changed history in many countries, and many nations were involved during world war II. People remember world war II for its global impact, as technology advanced rapidly because of world war II. Families were deeply affected by world war II, and lessons were learned from the events of world war II. Books and films often focus on world war II, and today, students still study world war II in school.";

// for (let i = 0; i < text.length; i++) {
//   const targetWord = "world war II";
//   const newWord = "Second World War";
//   const targetWordLenght = targetWord.length;

//   const startIndexOfTargetElement = text.indexOf(targetWord);

//   const endIndexOfTargetElement =
//     startIndexOfTargetElement + targetWordLenght - 1;

//   if (startIndexOfTargetElement != -1) {
//     const earlierPart = text.slice(0, startIndexOfTargetElement);

//     const afterPart = text.slice(endIndexOfTargetElement + 1);

//     text = earlierPart + newWord + afterPart;
//     // debugger;
//   }

//   // debugger;
// }
// text = text.replace("world war II","second world war")
text = text.replaceAll("world war II", "second world war");
console.log(text);

let stringText = "a b c a";
let stringArray = stringText.split(" ");
let stringArrayJoined = stringArray.join("");
stringText = stringText.toUpperCase();
const stringLenght = stringText.length;
const newString = stringText.slice(0, 2);
// const aIndex = stringText.indexOf("A");
const aIndex = stringText.lastIndexOf("A");
// const replacedString = stringText.replace(/A/g, "b");

console.log(aIndex, stringText, stringLenght, newString);

// const alphabets = "ABCDA";
// let totalCounts = 0;
// for (let i = 0; i < alphabets.length; i++) {
//   const alphabet = alphabets.charAt(i);
//   if (alphabet === "A") {
//     // indexNumber = i;
//     totalCounts++;
//     // debugger;
//     // break;
//   }
// }

// console.log(totalCounts);
// console.log(stringArray, stringArrayJoined);

// let ourString = "abcdefgh" + "ijk";
// const ourNewString = "lmno";
// const ourNewString1 = "pqrs";
// ourString = ourString.concat(ourNewString, ourNewString1);
// const ourRegex = /[b-z]/g;
// console.log(
//   ourString,
//   ourString.at(-1),
//   ourString.endsWith("rs"),
//   ourString.includes("cdefgh"),
//   ourString.match(ourRegex),
//   ourString.matchAll(ourRegex)
// );
// let newNumber = "10."
// console.log(newNumber.padEnd(5,"123"), "Sorry".repeat(100))
// const untrimmedString = "  a b c   "
// console.log(untrimmedString.trimEnd())

// let newNumber = 123456

// newNumber= newNumber.toString()
// console.log(newNumber)

// SHOP COUNTER
// const userBill = +prompt("Enter your bill");
// const userPayment = +prompt("Please Pay the bill");
// // const userRoundBill = Math.ceil(userBill);
// const userRoundBill = Math.floor(userBill);

// let remainings = userPayment - userRoundBill;

// if (remainings > 0) alert("Your remainings are " + remainings.toFixed(2));
// const gameElements = ["rock","paper","scissor"]
// const randomNumber = Math.random()
// const currentIndex = Math.floor(randomNumber * 3)
// const gameElement = gameElements[currentIndex]
// console.log(gameElement)

// console.log(Number.MAX_VALUE,Number.MIN_VALUE)
// const keyVariable = "name";
// const ourObject = {
//   name: "Abdullah",
//   role: "Instructor",
//   salary: "---",
//   dob: "11-08-2002",
//   experience: "Bahut Zyaada",
//   cast: "Memon",
// };
// ourObject.name = "Abdullah Motiwala";
// ourObject.age = 24;
// delete ourObject.cast;

// update + insert = upsert

// console.log(ourObject, ourObject[name]);
const randomNumber = Math.random();
const fixed = randomNumber.toFixed(4);
console.log(fixed);

const headOfc = {
  floor: 4,
  isItDepartment: true,
  manager: "Mr. Ihtisan",
};

headOfc.floor = 6;
headOfc.instructorCount = 3;
delete headOfc.isItDepartment;

// update + insert = upsert

console.log(headOfc, headOfc.manager);

const objectA = {
  name: "Ali",
  fname: "Mohd",
  age: 25,
  children: ["Ahsan", "Zaid", "Ghafoor"],
  job: {
    salary: 50000,
    timings: "9-5",
  },
};
// Shallow Copy
// const objectB = objectA

// Deep Copy
// const objectB = {};
// objectB.name = objectA.name;
// objectB.fname = objectA.fname;
// objectB.age = objectA.age;
// objectB.children = objectA.children;
// objectB.job = objectA.job;

// objectB.name = "Karim";
// objectB.children.push("Usman");
// objectB.job.salary = 70000;
// objectB.age = 27;
// console.log(objectA, objectB);

console.clear();
// const rightNow = new Date();
// const date = rightNow.getDate();
// const day = rightNow.getDay();
// const month = rightNow.getMonth();
// const year = rightNow.getFullYear();
// const hour = rightNow.getHours();
// const mins = rightNow.getMinutes();
// const sec = rightNow.getSeconds();
// const miliSecs = rightNow.getMilliseconds();
// const time = rightNow.getTime();
// // console.log(rightNow,rightNow.toString());
// console.log(date, month, year, hour, mins, sec, miliSecs, day, time, "===date");
// const uniqueId = time + "_" + Math.random()
// console.log(uniqueId)

// const dob = prompt("Please enter your dob");
// const userDOBDate = new Date(dob);
// const currentDate = new Date();

// const userAgeTime = userDOBDate.getTime();
// const currentDateTime = currentDate.getTime();

// const ageInMs = currentDateTime - userAgeTime;
// const userCalculatedAge = Math.floor(ageInMs / 1000 / 60 / 60 / 24 / 365);
// alert(userCalculatedAge);

function myFoo(userName) {
  // if ("conditions") {
  //   var a = 1;
  // }
  console.log(a);
  alert("Hello " + userName + ", Nice Pic");
}

// invoke/call
// myFoo("Uzair");
// myFoo("Rehman");

// Function is a block of code
// Definition
function greet(userName, userAge) {
  alert("===cal");
  // const userName2 = "Abc";
  // debugger;
  // console.log(userName);
  // alert("Welcome ");
}

// invoke /call
// greet("Wasif");
// greet(25);
// greet("Abdullah");

// passing reference
// const newGreet = greet;
// console.log(newGreet);
console.log("abc", "def");

// function sum(value1, value2) {
//   let value = 1;
//   value++;
//   console.log(value);
//   // return finalValue;
// }
// const result1 = sum();
// sum();

// console.log(result1);

function addition(value1, value2) {
  const result = value1 + value2;
  return result;
}

function substraction(value1, value2) {
  const result = value1 - value2;
  return result;
}

function division(value1, value2) {
  const result = value1 / value2;
  return result;
}

function multiplicate(value1, value2) {
  const result = value1 * value2;
  return result;
}

// function sum(value1, value2, operator) {
//   if (operator === "+") return addition(value1, value2);
//   if (operator === "-") return substraction(value1, value2);
//   if (operator === "/") return division(value1, value2);
//   if (operator === "*") return multiplicate(value1, value2);

//   alert("Invalid Operator");
// }
// function sum(value1, value2, operator) {
//   let result = null;
//   // return null;
//   if (operator === "+") {
//     result = addition(value1, value2);
//   }
//   if (operator === "-") {
//     result = substraction(value1, value2);
//   }
//   if (operator === "/") {
//     result = division(value1, value2);
//   }
//   if (operator === "*") {
//     result = multiplicate(value1, value2);
//   }

//   if(result === null) {
//     alert("Invalid Operator");
//     return;
//   }
//   return result;
// }

// const sumResult = sum(10, 12, "*");
// console.log(sumResult);

// // function-scope
// var

// // block-scope
// let
// const
// let a = 123
// function myFoo2() {
//   let fooVar = 123;

//   if (true) {
//     console.log(fooVar,"abc");
//   }
// }
// console.log(fooVar)
// myFoo2()

// function myFoo2() {
//   let a = 1;
//   let b = 2;

//   function myFoo3() {
//     let c = 3;
//     debugger;
//   }
//   debugger;
//   myFoo3();
//   debugger;
// }

// myFoo2();
// alert("abc");

function newGreet(name) {
  alert("Hi " + name);
}

// newGreet("a");
// newGreet("b");
// newGreet("c");
// const users = ["Ali", "Tayyab", "Fareed"];
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   newGreet(user);
// }

// const isCondition = true;
// function newGreet2() {
//   if (true) {
//     var abcdef = "1";
//     let abcdefgh = "1";
//     console.log(abcdefgh, "inside inside");
//   }
//   console.log(abcdefgh, "inside");
//   console.log(abcdef, "inside");
// }

// newGreet2();

// const day = "fri";
// switch (day) {
//   case "mon":
//     alert("Waking up at 7");
//     break;

//   case "wed":
//     alert("Waking up at 8");
//     break;

//   case "fri":
//     alert("Waking up at 9");
//     break;

//   default:
//     alert("Keep sleeping");
// }

// alert("Hi I'm alert")
// console.log(location, "===location");

// debugger;
// console.log(a, "===a");
// let a = 1;

// myFoo23()
// var myFoo23 = () => {
//   console.log("runnin");
// };
// function myFoo(){
//   console.log("===running")
// }

// const myLocation = window.location
// console.log(myLocation)

// const myArr = ["a", "b"];
// myArr.push("c", "d", "e", "f");
// console.log(myArr);

// function myFoo(a, b, ...c) {
//   console.log(a, b, c);
// }
// myFoo("a", "b", "c", "d", "e", "f", "g");
const myArr1 = ["a", "b", "c"];
const myArr2 = ["d", "e", "f"];

const myArr3 = [...myArr1, myArr2];
console.log(myArr3);

const myObj1 = {
  a: 1,
  b: 2,
  c: 3,
};

const myObj2 = {
  e: 1,
  f: 2,
  g: 3,
  a: 4,
};

const myObj3 = {
  ...myObj2,
  ...myObj1,
};
console.log(myObj3);

const student = {
  name: "Ali",
  age: 25,
  qualification: "Matric",
};

// const {
//   name,
//   age:sAge,
//   qualification,
// } = student;

// const studentName = student.name
// const studentAge = student.age
// const studentQualification = student.qualification

// console.log(name, sAge, qualification);

// const studentsNew = ["Ali", "Bashir", "Usman"];
// const [firstStudent,_,secondStudent] = studentsName

// function myFoo(b,a=1) {
//   // if(a === undefined){
//   //   a = 1
//   // }
//   console.log(a);
// }
// myFoo(6);

// function parent(cb) {
//   setTimeout(() => {
//     let a = 1 + 1;
//     console.log("===parent run");
//     cb()
//   }, 3000);
// }

// parent(function () {
//   console.log("===callback run");
// });

// function getIngredients(cb) {
//   setTimeout(() => {
//     console.log("Ingredients ready");
//     cb(["tomatoes", "onions", "spices"]);
//   }, 1000);
// }

// function chopIngredients(ingredients, callback) {
//   setTimeout(() => {
//     console.log("Ingredients chopped:", ingredients);
//     callback("chopped ingredients");
//   }, 1000);
// }

// function cook(choppedIngredients, callback) {
//   setTimeout(() => {
//     console.log("Cooking:", choppedIngredients);
//     callback("cooked meal");
//   }, 1000);
// }

// function plate(meal, callback) {
//   setTimeout(() => {
//     console.log("Plating:", meal);
//     callback("plated dish");
//   }, 1000);
// }

// function serve(dish, callback) {
//   setTimeout(() => {
//     console.log("Serving:", dish);
//     callback("served to customer");
//   }, 1000);
// }

// // Callback Hell 😬
// getIngredients((err, ingredients) => {
//   if (err) return console.error(err);

//   chopIngredients(ingredients, (err, chopped) => {
//     if (err) return console.error(err);

//     cook(chopped, (err, cookedMeal) => {
//       if (err) return console.error(err);

//       plate(cookedMeal, (err, platedDish) => {
//         if (err) return console.error(err);

//         serve(platedDish, (err, result) => {
//           if (err) return console.error(err);

//           console.log("Done:", result);
//         });
//       });
//     });
//   });
// });

// getIngredients(function (ingredients) {
//   chopIngredients(ingredients, function (chopIngredients) {
//     cook(chopIngredients, function (cooked) {
//       plate(cooked, function (platedMeal) {
//         serve(platedMeal, function () {
//           alert("Order completed");
//         });
//       });
//     });
//   });
// });

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     reject("Data");
//   }, 3000);
// });

// promise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.log(err,"===catch");
//   });

// console.log(promise, "===promise");

function getIngredients() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Ingredients ready");
      resolve(["tomatoes", "onions", "spices"]);
    }, 1000);
  });
}

function chopIngredients(ingredients) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Ingredients chopped:", ingredients);
      resolve("chopped ingredients");
    }, 1000);
  });
}

function cook(choppedIngredients) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Cooking:", choppedIngredients);
      resolve("cooked meal");
    }, 1000);
  });
}

function plate(meal) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Plating:", meal);
      resolve("plated dish");
    }, 1000);
  });
}

function serve(dish) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Serving:", dish);
      resolve("served to customer");
    }, 1000);
  });
}

// getIngredients()
//   .then(chopIngredients)
//   .then(cook)
//   .then(plate)
//   .then(serve)
//   .then((result) => {
//     console.log("Done:", result);
//   })
//   .catch((err) => {
//     console.error("Error:", err);
//   });

// console.log("===run")

// 🧑‍🍳 Main async function
// async function makeDish() {
//   try{

//     const ingredients = await getIngredients();
//     const chopped = await chopIngredients(ingredients);
//     const cooked = await cook(chopped);
//     const plated = await plate(cooked);
//     const result = await serve(plated);

//     console.log("Done:", result);
//   }catch(){

//   }
// }

// // Run it
// makeDish();

// function chopVegetables() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Vegetables chopped");
//       resolve("chopped veggies");
//     }, 1000);
//   });
// }

// function prepareSauce() {
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("Sauce ready");
//       reject("sauce");
//     }, 1000);
//   });
// }

// async function makeDish() {
//   try {
//     const results= await Promise.allSettled([
//       chopVegetables(),
//       prepareSauce(),
//     ]);

//     console.log(results)
//     // console.log("Using:", veggies, "and", sauce);
//     console.log("Dish ready!");
//   } catch (err) {
//     console.error(err);
//   }
// }

// makeDish();

function chefCounter() {
  let count = 0;

  function update() {
    count++;
    console.log("Dishes made:", count);
  }

  return update;
}

// const cook = chefCounter();

// cook();
// cook();
// cook();

// let count = 0;
// function chefCounter() {
//   count++;
// }

// chefCounter();
// chefCounter();
// chefCounter();
// chefCounter();
// chefCounter();

const myArray = ["a", "b", "c", "d"];
// for (let ele of myArray) {
//   console.log(ele, "===ele");
// }

// myArray.forEach((ele) => {
//   console.log(ele, "===e");
// });

const result2 = myArray.map((ele) => {
  console.log(ele, "===ele");
  const newEle = (ele += "abc");
  return newEle;
});

console.log(myArray, result2);

class Student {
  #password = "abc";
  age = 25;
  #name = "Ali";
  // constructor() {}
  getDetails() {
    return {
      name: this.#name,
      age: this.age,
    };
  }
  updateDetails(name, age, password) {
    this.age = age;
    this.#name = name;
    this.#password = password;
  }
}

const student1 = new Student(); //instantiate
const student2 = new Student();
console.log(student1);

// student1.updateDetails("Abdullah", 15);

// console.log(student1.getDetails(), student2.getDetails());

// console.log(student1.getDetails(), "===student1");

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
  eat() {
    console.log(this.name + " eat the food");
  }
}

// const animal = new Animal("Dog");
// console.log(animal.eat());

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  eat() {
    console.log(this.name + " eat the food");
  }

  speak() {
    console.log(this.name + " barks");
  }

  showBreed() {
    console.log("Breed:", this.breed);
  }
}

const dog = new Dog("Buddy", "Labrador");
const dog2 = new Dog("Buddy", "Rottwiller");

// d.speak(); // Buddy barks
dog.showBreed(); // Breed: Labrador
dog2.showBreed(); // Breed: Labrador
dog.speak();

// const myMap = new Map();

// const key1 = { id: 1 };
// const key2 = { id: 2 };

// // Set values
// myMap.set(key1, "Value for key1");
// myMap.set(key2, "Value for key2");

// // Get values
// console.log(myMap.get(key1)); // "Value for key1"
// console.log(myMap.get(key2)); // "Value for key2"
// console.log(myMap)

const myArr = [1, 2, 2, 3];
const mySet = [...new Set(myArr)];

// mySet.add(1);
// mySet.add(2);
// mySet.add(2);
// mySet.add(3);

// console.log(mySet);

// const numbers = [1, 2, 3, 4, 5];
// const evens = numbers.filter(function (e, ind, arr) {
//   // console.log(e, ind, arr, "===e");
//   return e % 2 === 0;
// });
// console.log(evens); // [2, 4]

// function filter(cb) {
//   const filteredArray = [];
//   for (let i = 0; i < this.array.length; i++) {
//     const result = cb();
//     if (result) filteredArray.push(this.array[i]);
//   }

//   return filteredArray;
// }

// const numbers = ["a", "b", "c", "d"];
// const sum = numbers.reduce((acc, curr, ind) => {
//   console.log(acc, curr, ind);
//   return acc + curr;
// },"_");
// console.log(sum); // 10

// const users = [
//   { name: "Ali", age: 25 },
//   { name: "Sara", age: 30 }
// ];

// const user = users.find(u => u.age > 26);
// console.log(user); // { name: 'Sara', age: 30 }

// const index = users.findIndex(u => u.name === "Ali");
// console.log(index); // 0

const nested = [1, [2, 3], [4, [5, [6]]]];
const flated = nested.flat();
console.log(flated);

const words = ["hello world", "foo bar"];

const result1 = words.flatMap((w) => w.split(" "));
console.log(result1); // ["hello", "world", "foo", "bar"]

function greet(greeting, punctuation) {
  console.log(this, "===this");
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

// greet()

const person = { name: "Ali" };

// greet.call(person, "Hello", "!"); // Hello, Ali!
const newFoo = greet.bind(person, "Hello", "!"); // Hello, Ali!
// greet.apply(person, ["Hello", "!"]); // Hello, Ali!

newFoo();
const myArr12 = [0,1, 2, 3];
function myFun1(ind,arr) {
  return myArr12[ind];
}

myFun1(1,myArr12)
