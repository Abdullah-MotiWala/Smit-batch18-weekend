"use strict";
// let value = "1";
// value + 1
const myUser = {
    id: 1,
    //   name: 123,
    isActive: true,
};
const myUser1 = {
    id: 1,
    name: "Ali",
    isActive: true,
    personalIdNumber: "asdf",
};
function myFoo(a, b) {
    return a + 1;
}
const myFoo2 = (a, b) => {
    return a + 1;
};
function myFoo3(value) {
    const myArr = [];
    return value;
}
myFoo3("1");
const userResponse = {
    success: true,
    statusCode: 200,
    data: { name: "Ali", rollNum: 123 },
};
const signupResponse = {
    success: true,
    statusCode: 200,
    data: { id: "123", password: 1234 },
};
console.log("runnning");
class BankAccount {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
}
// class BankAccount {
//   private balance: number;
//   constructor(initialBalance: number) {
//     this.balance = initialBalance;
//   }
//   // public method to deposit money
//   deposit(amount: number) {
//     if (amount > 0) {
//       this.balance += amount;
//     }
//   }
//   // public method to withdraw money
//   withdraw(amount: number) {
//     if (amount <= this.balance) {
//       this.balance -= amount;
//     } else {
//       console.log("Insufficient balance");
//     }
//   }
//   // controlled access (getter)
//   getBalance() {
//     return this.balance;
//   }
// }
const account = new BankAccount(1500);
const balance = account.getBalance();
console.log(balance);
