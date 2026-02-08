// var a = 1; // declaration & assignment
// var a = 2;
// a = 3

// const a = 1;
// const a = 2;
// a = 2;

// let b = 1;
// let b = 5;
// b = 2;

// Hoisting || JITC Just-In-Time-Compilation

// debugger;
// console.log(a);
// debugger;
// var a = 1;
// console.log(a)
// debugger;

// function foo() {
//   var b = 1;
//   console.log("a");

//   function foo2() {
//     var c = 1;
//     debugger;
//   }
//   foo2()
//   debugger;

// }

// foo();
// debugger;

// debugger;
// console.log(a)

// let a = 1;
// console.log(a)
// debugger;
// console.log(foo)
// debugger;
// foo()
// function foo() {
//   let a = 1;
//   console.log(a);
// }
// a()

// const a = function () {
//   console.log("===running");
// };
// a()

// var a = function () {
//     console.log("===running");
// };
// foo()
// a()

// const a = { userName: "john", age: 30 };
// const userName = a.userName;
// const age = a.age;

// const { userName, age } = a;
// console.log(name,myAge)

// const b = ["john", 30];
// const [userName, age] = b;

// const userName = "Ahmed";
// const age = 30;

// const c = { userName, age: age };
// console.log(c);

// function myFoo(instructor, assistant, ...student) {
//   // student.push("asjkldf","asdf0","asdfds")
//   console.log({ instructor, assistant, student });
// }

// myFoo("Ahmed", "Ali", "Bashir", "Shabbir", "Ghulam");

// const d = ["a", "b", [], "c"];
// const e = [...d];
// // e.pop();
// d[2].push("test");
// console.log(d, e);

// const f = ["a", "b"];
// const g = f;

// f.pop();
// console.log(f, g);

// const a = [1, ["a"]];
// const b = [...a];

// b.push(2);
// b[1].push("b")

// console.log(a, b);

// function getUpdatedArray(arr) {
//   const newArr = [...arr];
//   newArr.push("new")

//   return newArr;
// }

// const a = ["1", "2"];
// const b = ["3", "4"];
// const c = [...a, ...b];

const users = [
  "john",
  "ahmed",
  "ali",
  "bashir",
  "shabbir",
  "ghulam",
  "john",
  "ahmed",
  "ali",
  "bashir",
  "shabbir",
  "ghulam",
  "john",
  "ahmed",
  "ali",
  "bashir",
  "shabbir",
  "ghulam",
  "john",
  "ahmed",
  "ali",
  "bashir",
  "shabbir",
  "ghulam",
];

// const newUser = users.forEach(function (user, index, array) {
//   console.log(index, "===running", user, array);
// });

// console.log(newUser)

// for (let i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

const studentsRollNo = [479979, 479980, 479981, 479982, 479983];

// studentsRollNo.reverse()
// const reversedStudentsRollNo = studentsRollNo.toReversed();
// console.log(studentsRollNo)
// console.log(reversedStudentsRollNo)
// const newStudentsRollNo = [];

// studentsRollNo.forEach(function (rollNo) {
//   const newRoll = "SMIT-" + rollNo;
//   newStudentsRollNo.push(newRoll);
// });

// console.log(newStudentsRollNo)

// const newStudentsRollNo = studentsRollNo.map(function (rollNo) {
//   const newRoll = "SMIT-" + rollNo;
//   console.log(newRoll);
//   return newRoll;
// });

// console.log(newStudentsRollNo)

// const userAge = [20, 25, 30, 35, 40];
// const genzUsers = [];
// for (let i = 0; i < userAge.length; i++) {
//   const user = userAge[i];
//   if (user >= 14 && user <= 29) genzUsers.push(user);
// }

// console.log(genzUsers);

// const isAdult = userAge.every(function (age) {
//   return age >= 18;
// });

// const filteredUser = userAge.filter(function (age) {
//   return age >= 30;
// });

// console.log(userAge,filteredUser);

// const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// newArray.fill("test", 2, 5);
// console.log(newArray);

const players = [
  { name: "Agha G", score: 250, avg: 30, sr: 130, parchi: false },
  { name: "Fakhar Zaman", score: 200, avg: 20, sr: 150, parchi: false },
  {
    name: "Usman Khan",
    score: 350,
    avg: 40,
    sr: 120,
    parchi: true,
  },
  { name: "Bobzie the King", score: 300, avg: 50, sr: 80, parchi: false },
  { name: "Rana Sahab", score: 180, avg: 35, sr: 190, parchi: false },
  { name: "Asif Ali", score: 220, avg: 25, sr: 110, parchi: false },
  { name: "Iftikhar Ahmed", score: 270, avg: 45, sr: 140, parchi: false },
  { name: "Hassan Nawaz", score: 240, avg: 75, sr: 140, parchi: false },
];

// const bestPlayer = players.find(function (player) {
//   //   console.log(player);
// //   if (player.parchi) return true;

//   const isSRGood = player.sr >= 80;
//   const isAvgGood = player.avg >= 40;
//   const isScoreGood = player.score >= 250;

//   return isSRGood && isAvgGood && isScoreGood;
// });

const bestPlayers = players.filter(function (player) {
  //   console.log(player);
//   if (player.parchi) return true;

  const isSRGood = player.sr >= 80;
  const isAvgGood = player.avg >= 40;
  const isScoreGood = player.score >= 250;

  return isSRGood && isAvgGood && isScoreGood;
});


console.log(bestPlayers);
