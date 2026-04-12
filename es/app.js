// // var a = 1; // declaration & assignment
// // var a = 2;
// // a = 3

// // const a = 1;
// // const a = 2;
// // a = 2;

// // let b = 1;
// // let b = 5;
// // b = 2;

// // Hoisting || JITC Just-In-Time-Compilation

// // debugger;
// // console.log(a);
// // debugger;
// // var a = 1;
// // console.log(a)
// // debugger;

// // function foo() {
// //   var b = 1;
// //   console.log("a");

// //   function foo2() {
// //     var c = 1;
// //     debugger;
// //   }
// //   foo2()
// //   debugger;

// // }

// // foo();
// // debugger;

// // debugger;
// // console.log(a)

// // let a = 1;
// // console.log(a)
// // debugger;
// // console.log(foo)
// // debugger;
// // foo()
// // function foo() {
// //   let a = 1;
// //   console.log(a);
// // }
// // a()

// // const a = function () {
// //   console.log("===running");
// // };
// // a()

// // var a = function () {
// //     console.log("===running");
// // };
// // foo()
// // a()

// // const a = { userName: "john", age: 30 };
// // const userName = a.userName;
// // const age = a.age;

// // const { userName, age } = a;
// // console.log(name,myAge)

// // const b = ["john", 30];
// // const [userName, age] = b;

// // const userName = "Ahmed";
// // const age = 30;

// // const c = { userName, age: age };
// // console.log(c);

// // function myFoo(instructor, assistant, ...student) {
// //   // student.push("asjkldf","asdf0","asdfds")
// //   console.log({ instructor, assistant, student });
// // }

// // myFoo("Ahmed", "Ali", "Bashir", "Shabbir", "Ghulam");

// // const d = ["a", "b", [], "c"];
// // const e = [...d];
// // // e.pop();
// // d[2].push("test");
// // console.log(d, e);

// // const f = ["a", "b"];
// // const g = f;

// // f.pop();
// // console.log(f, g);

// // const a = [1, ["a"]];
// // const b = [...a];

// // b.push(2);
// // b[1].push("b")

// // console.log(a, b);

// // function getUpdatedArray(arr) {
// //   const newArr = [...arr];
// //   newArr.push("new")

// //   return newArr;
// // }

// // const a = ["1", "2"];
// // const b = ["3", "4"];
// // const c = [...a, ...b];

// const users = [
//   "john",
//   "ahmed",
//   "ali",
//   "bashir",
//   "shabbir",
//   "ghulam",
//   "john",
//   "ahmed",
//   "ali",
//   "bashir",
//   "shabbir",
//   "ghulam",
//   "john",
//   "ahmed",
//   "ali",
//   "bashir",
//   "shabbir",
//   "ghulam",
//   "john",
//   "ahmed",
//   "ali",
//   "bashir",
//   "shabbir",
//   "ghulam",
// ];

// // const newUser = users.forEach(function (user, index, array) {
// //   console.log(index, "===running", user, array);
// // });

// // console.log(newUser)

// // for (let i = 0; i < users.length; i++) {
// //   console.log(users[i]);
// // }

// const studentsRollNo = [479979, 479980, 479981, 479982, 479983];

// // studentsRollNo.reverse()
// // const reversedStudentsRollNo = studentsRollNo.toReversed();
// // console.log(studentsRollNo)
// // console.log(reversedStudentsRollNo)
// // const newStudentsRollNo = [];

// // studentsRollNo.forEach(function (rollNo) {
// //   const newRoll = "SMIT-" + rollNo;
// //   newStudentsRollNo.push(newRoll);
// // });

// // console.log(newStudentsRollNo)

// // const newStudentsRollNo = studentsRollNo.map(function (rollNo) {
// //   const newRoll = "SMIT-" + rollNo;
// //   console.log(newRoll);
// //   return newRoll;
// // });

// // console.log(newStudentsRollNo)

// // const userAge = [20, 25, 30, 35, 40];
// // const genzUsers = [];
// // for (let i = 0; i < userAge.length; i++) {
// //   const user = userAge[i];
// //   if (user >= 14 && user <= 29) genzUsers.push(user);
// // }

// // console.log(genzUsers);

// // const isAdult = userAge.every(function (age) {
// //   return age >= 18;
// // });

// // const filteredUser = userAge.filter(function (age) {
// //   return age >= 30;
// // });

// // console.log(userAge,filteredUser);

// // const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // newArray.fill("test", 2, 5);
// // console.log(newArray);

// const players = [
//   { name: "Agha G", score: 250, avg: 30, sr: 130, parchi: false },
//   { name: "Fakhar Zaman", score: 200, avg: 20, sr: 150, parchi: false },
//   {
//     name: "Usman Khan",
//     score: 350,
//     avg: 40,
//     sr: 120,
//     parchi: true,
//   },
//   { name: "Bobzie the King", score: 300, avg: 50, sr: 80, parchi: false },
//   { name: "Rana Sahab", score: 180, avg: 35, sr: 190, parchi: false },
//   { name: "Asif Ali", score: 220, avg: 25, sr: 110, parchi: false },
//   { name: "Iftikhar Ahmed", score: 270, avg: 45, sr: 140, parchi: false },
//   { name: "Hassan Nawaz", score: 240, avg: 75, sr: 140, parchi: false },
// ];

// // const bestPlayer = players.find(function (player) {
// //   //   console.log(player);
// // //   if (player.parchi) return true;

// //   const isSRGood = player.sr >= 80;
// //   const isAvgGood = player.avg >= 40;
// //   const isScoreGood = player.score >= 250;

// //   return isSRGood && isAvgGood && isScoreGood;
// // });

// const bestPlayers = players.filter(function (player) {
//   //   console.log(player);
//   //   if (player.parchi) return true;

//   const isSRGood = player.sr >= 80;
//   const isAvgGood = player.avg >= 40;
//   const isScoreGood = player.score >= 250;

//   return isSRGood && isAvgGood && isScoreGood;
// });

// // console.log(bestPlayers);

// // let a = 1;

// // function cb(a) {
// //   alert(a);
// // }

// // setTimeout(function () {
// //   a = 2;
// //   cb(a);
// // }, 2000);

// // alert(a);

// function markOrderAsComplete(orderId) {
//   setTimeout(function () {
//     console.log("Marked order as complete", orderId);
//   }, 1000);
// }

// function dispatchOrder(orderId, cb) {
//   setTimeout(function () {
//     console.log("Dispatched order", orderId);
//     cb(orderId);
//   }, 1000);
// }

// function verifyOrder(orderId, cb) {
//   setTimeout(function () {
//     console.log("Verified order", orderId);
//     cb(orderId);
//   }, 1000);
// }

// function getOrderDetails(order, cb) {
//   setTimeout(function () {
//     console.log("Got order details from", order[0].orderId);
//     cb(order[0].orderId);
//     return { orderId: order.orderId, item: "Laptop" };
//   }, 1000);
// }

// function getUserOrders(user, cb) {
//   setTimeout(function () {
//     console.log("Got orders of ", user.name);
//     const orders = [{ orderId: 1 }, { orderId: 2 }];
//     cb(orders);
//     return orders;
//   }, 1000);
// }

// function getUser(userId, cb) {
//   setTimeout(function () {
//     console.log("Got user");
//     const user = { id: userId, name: "Alice" };
//     cb(user);
//     return user;
//   }, 1000);
// }

// // Callback Hell
// // getUser(1, function (user) {
// //   getUserOrders(user, function (orders) {
// //     getOrderDetails(orders, function (orderId) {
// //       verifyOrder(orderId, function (orderId) {
// //         dispatchOrder(orderId, markOrderAsComplete);
// //       });
// //     });
// //   });
// // });

// // function markOrderAsComplete(orderId) {
// //   return
// // }
// // const result = true;
// // const userPromise = new Promise(function (resolve, reject) {
// //   setTimeout(function () {
// //     if (result) resolve("Got user");
// //     else reject("Error while getting user");
// //     // console.log("Got user");
// //     // const user = { id: 1, name: "Alice" };
// //     // resolve(user);
// //   }, 1000);
// // });
// // console.log(userPromise, "===initial State");
// // userPromise
// //   .then(function (val) {
// //     // console.log(val, "===resolve hogya");

// //   })
// //   .catch(function (err) {
// //     console.log(err, "===reject hogya");
// //   });

// // console.log("agay wali line");
// // console.log(userPromise)

// // const res = userPromise.then((val) => {
// //   console.log(val);
// //   return val;
// // });
// // console.log(res);

// // console.log("===agay chl rha");

// // function markOrderAsComplete(orderId) {
// //   return new Promise(function (resolve) {
// //     setTimeout(function () {
// //       console.log("Marked order as complete", orderId);
// //       resolve(orderId);
// //     }, 1000);
// //   });
// // }

// // function bye(orderId) {
// //   return new Promise(function (resolve) {
// //     setTimeout(function () {
// //       console.log("Marked order as complete", orderId);
// //       resolve(orderId);
// //     }, 1000);
// //   });
// // }

// // const result = markOrderAsComplete(1);
// // result.then(function (val) {
// //   console.log(val, "===resolve hogya");
// //   bye(val).then;
// // });

// // async function processOrder() {
// //   const result = await markOrderAsComplete(1);
// //   console.log(result);
// //   console.log("===next line")
// // }

// // processOrder()

// // function myFoo() {
// //   return function myFoo2() {
// //     console.log("===running");
// //   };
// // }

// // function parent() {
// //   let a = 1;

// //   function child() {
// //     console.log(a);
// //   }

// //   return child;
// // }

// // const child = parent();
// // child();

// // let counter = 3;
// function life() {
//   counter--;
//   // function missed() {
//   //   counter--;
//   //   console.log(counter)
//   //   return counter;
//   // }
//   return counter;
// }

// // const missCounter = life();
// // let counterValue = missCounter();

// // let counter = 0;
// // function incrementCounter() {
// //   counter++;
// //   console.log(counter);
// // }

// // function lifespan() {
// //   let counter = 3;

// //   function missed() {
// //     counter--;
// //     return counter;
// //   }

// //   return missed;
// // }

// // const missCounter1 = lifespan();

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Got user");
//       resolve({ id: userId, name: "Alice" });
//     }, 1000);
//   });
// }

// function getOrders(user) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Got orders");
//       resolve([{ orderId: 1 }, { orderId: 2 }]);
//     }, 1000);
//   });
// }

// function getOrderDetails(order) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Got order details");
//       resolve({ orderId: order.orderId, item: "Laptop" });
//     }, 1000);
//   });
// }

// const user = getUser(1);
// user
//   .then((user) => {
//     getOrders(user).then((orders) => {
//       getOrderDetails(orders[0]).then((orderDetails) => {
//         console.log(orderDetails);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err, "===reject hogya");
//   });

// let counterTest = 0;
// function updateCounter() {
//   counterTest++;
// }

// console.log(counterTest, "===iniital value");
// updateCounter();
// updateCounter();
// console.log(counterTest, "===after value");

// function counterParent() {
//   let counter = 0;

//   return function updateCounter() {
//     counter++;
//     return counter;
//   };
// }
// debugger;
// const updateCounterFun = counterParent();

// let currentCounter = updateCounterFun();
// console.log(currentCounter, "===current");

// // var a = 1

// let a = 1;

// // function cb(a) {
// //   alert(a);
// // }

// // setTimeout(function () {
// //   a = 2;
// //   cb(a);
// // }, 2000);

// // alert(a);

// function markOrderAsComplete(orderId) {
//   setTimeout(function () {
//     console.log("Marked order as complete", orderId);
//   }, 1000);
// }

// function dispatchOrder(orderId, cb) {
//   setTimeout(function () {
//     console.log("Dispatched order", orderId);
//     cb(orderId);
//   }, 1000);
// }

// function verifyOrder(orderId, cb) {
//   setTimeout(function () {
//     console.log("Verified order", orderId);
//     cb(orderId);
//   }, 1000);
// }

// function getOrderDetails(order, cb) {
//   setTimeout(function () {
//     console.log("Got order details from", order[0].orderId);
//     cb(order[0].orderId);
//     return { orderId: order.orderId, item: "Laptop" };
//   }, 1000);
// }

// function getUserOrders(user, cb) {
//   setTimeout(function () {
//     console.log("Got orders of ", user.name);
//     const orders = [{ orderId: 1 }, { orderId: 2 }];
//     cb(orders);
//     return orders;
//   }, 1000);
// }

// function getUser(userId, cb) {
//   setTimeout(function () {
//     console.log("Got user");
//     const user = { id: userId, name: "Alice" };
//     cb(user);
//     return user;
//   }, 1000);
// }

// // Callback Hell
// // getUser(1, function (user) {
// //   getUserOrders(user, function (orders) {
// //     getOrderDetails(orders, function (orderId) {
// //       verifyOrder(orderId, function (orderId) {
// //         dispatchOrder(orderId, markOrderAsComplete);
// //       });
// //     });
// //   });
// // });

// // function markOrderAsComplete(orderId) {
// //   return
// // }
// // const result = true;
// // const userPromise = new Promise(function (resolve, reject) {
// //   setTimeout(function () {
// //     if (result) resolve("Got user");
// //     else reject("Error while getting user");
// //     // console.log("Got user");
// //     // const user = { id: 1, name: "Alice" };
// //     // resolve(user);
// //   }, 1000);
// // });
// // console.log(userPromise, "===initial State");
// // userPromise
// //   .then(function (val) {
// //     // console.log(val, "===resolve hogya");

// //   })
// //   .catch(function (err) {
// //     console.log(err, "===reject hogya");
// //   });

// // console.log("agay wali line");
// // console.log(userPromise)

// // const res = userPromise.then((val) => {
// //   console.log(val);
// //   return val;
// // });
// // console.log(res);

// // console.log("===agay chl rha");

// // function markOrderAsComplete(orderId) {
// //   return new Promise(function (resolve) {
// //     setTimeout(function () {
// //       console.log("Marked order as complete", orderId);
// //       resolve(orderId);
// //     }, 1000);
// //   });
// // }

// // function bye(orderId) {
// //   return new Promise(function (resolve) {
// //     setTimeout(function () {
// //       console.log("Marked order as complete", orderId);
// //       resolve(orderId);
// //     }, 1000);
// //   });
// // }

// // const result = markOrderAsComplete(1);
// // result.then(function (val) {
// //   console.log(val, "===resolve hogya");
// //   bye(val).then;
// // });

// // async function processOrder() {
// //   const result = await markOrderAsComplete(1);
// //   console.log(result);
// //   console.log("===next line")
// // }

// // processOrder()

// // function myFoo() {
// //   return function myFoo2() {
// //     console.log("===running");
// //   };
// // }

// // function parent() {
// //   let a = 1;

// //   function child() {
// //     console.log(a);
// //   }

// //   return child;
// // }

// // const child = parent();
// // child();

// let counter = 3;
// function life() {
//   counter--;
//   // function missed() {
//   //   counter--;
//   //   console.log(counter)
//   //   return counter;
//   // }
//   return counter;
// }

// const missCounter = life();
// // let counterValue = missCounter();

// // let counter = 0;
// // function incrementCounter() {
// //   counter++;
// //   console.log(counter);
// // }

// // function lifespan() {
// //   let counter = 3;

// //   function missed() {
// //     counter--;
// //     return counter;
// //   }

// //   return missed;
// // }

// // const missCounter1 = lifespan();

// function getUser(userId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Got user");
//       resolve({ id: userId, name: "Alice" });
//     }, 1000);
//   });
// }

// function getOrders(user) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Got orders");
//       resolve([{ orderId: 1 }, { orderId: 2 }]);
//     }, 1000);
//   });
// }

// function getOrderDetails(order) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Got order details");
//       resolve({ orderId: order.orderId, item: "Laptop" });
//     }, 1000);
//   });
// }

// const user = getUser(1);
// user
//   .then((user) => {
//     getOrders(user).then((orders) => {
//       getOrderDetails(orders[0]).then((orderDetails) => {
//         console.log(orderDetails);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err, "===reject hogya");
//   });

// let counterTest = 0;
// function updateCounter() {
//   counterTest++;
// }

// console.log(counterTest, "===iniital value");
// updateCounter();
// updateCounter();
// console.log(counterTest, "===after value");

// function counterParent() {
//   let counter = 0;

//   return function updateCounter() {
//     counter++;
//     return counter;
//   };
// }
// debugger;
// // const updateCounterFun = counterParent();

// // let currentCounter = updateCounterFun();
// // console.log(currentCounter, "===current");

// // var a = 1;

// const userName = prompt("Enter your name");
sessionStorage.setItem("userName", undefined);

sessionStorage.setItem("userName2", { name: "wasif", age: 30 });

// alert()
// sessionStorage.removeItem("userName");
// const userNameSS = sessionStorage.getItem("userName");
// console.log(typeof userNameSS, "===session storage");


// const userNameSS2 = sessionStorage.getItem("userName2");
// console.log(userNameSS2)











COPILOT_AUTH_TOKEN: {
    "value": "_XII__cmz4UJwHMHfMP0KnOol_UTsuROP71jQyHg61s-oK0QmOQbPQ14Ll_1xp4ydMK0xvM9iEczs6_idMc6xomevlFEUg45QkivcfTKTyM=",
    "expiration": "2026-04-11T17:34:28.000Z",
    "ssoOrgIDs": []
}

COPILOT_AUTH_TOKEN:expiry: 1776013469382