// let value = "1";
// value + 1

// let value: number = 1;
// let value2: string = "a";
// let value3: boolean = true;
// let value4: null = null;
// let value5: undefined = undefined;
// let value6: { a: number; b: number; c?: boolean } = { a: 1, b: 2 };
// value6.c = true;

// let value7: any = ["a", "b", 2];
// value7 = "abc";

// let value8: unknown = ["a", "b", 2];
// value7 = "abc";

// value7.push(2)
// value = "a"

// JS = Dynamic Typed Language
// TS = Static Typed Language
// type Status = "loading" | "success" | "error";
// const state= "loading";
// let state: "loading" | "pending" | "completed" = "loading";
// let state: Status = "loading";
// state = "pending";
// state = "failed";

// type User = {
//   id: number;
//   name: string;
//   isActive: boolean;
// };

interface User {
  id: number | string;
  name?: string;
  isActive: boolean;
}

interface PersonalUser extends User {
  personalIdNumber: string;
}

const myUser: User = {
  id: 1,
  //   name: 123,
  isActive: true,
};
const myUser1: PersonalUser = {
  id: 1,
  name: "Ali",
  isActive: true,
  personalIdNumber: "asdf",
};

function myFoo(a: number, b: string): number {
  return a + 1;
}

const myFoo2: (a: number, b: string) => number = (a, b) => {
  return a + 1;
};

function myFoo3<abc>(value: abc): abc {
  const myArr: abc[] = [];
  return value;
}

myFoo3<string>("1");

type ApiResponse<T = { id: number }> = {
  success: boolean;
  statusCode: number;
  data: T;
};

const userResponse: ApiResponse<{ name: string; rollNum: number }> = {
  success: true,
  statusCode: 200,
  data: { name: "Ali", rollNum: 123 },
};

const signupResponse: ApiResponse<{ id: string; password: number }> = {
  success: true,
  statusCode: 200,
  data: { id: "123", password: 1234 },
};
console.log("runnning");

// Encapsulation
class BankAccount {
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  public getBalance() {
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

abstract class Payment {
  abstract pay(amount: number): void;

  log(amount: number) {
    console.log("Processing payment:", amount);
  }
}

class EasyPaisa extends Payment {
  pay(amount: number) {
    this.log(amount);
    console.log("Paid using EasyPaisa");
  }
}
class JazzCash extends Payment {
  pay(amount: number) {
    this.log(amount);
    console.log("Paid using Jazzcash");
  }
}

function processPayment(method: Payment) {
  method.pay(1000);
}

const instance = new EasyPaisa();
processPayment(instance);

processPayment(new JazzCash());

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a sound`);
  }

  eatFood() {
    console.log(`${this.name} eats food`);
  }
}

class Dog extends Animal {
    makeSound() {
      console.log(`${this.name} says Woof!`);
    }
}
const dog = new Dog("Tom");
dog.makeSound()



class Vehicle {
  protected brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }

  start() {
    console.log(`${this.brand} vehicle is starting`);
  }
}

class Car extends Vehicle {
  private wheels: number;

  constructor(brand: string, wheels: number) {
    super(brand);
    this.wheels = wheels;
  }

  drive() {
    // can access protected variable from parent
    console.log(`${this.brand} car is driving with ${this.wheels} wheels`);
  }
}
const vehicle = new Vehicle("Toyota")
const myCar = new Car("Toyota", 4);
myCar.start();  // Vehicle method
myCar.drive();  // Car method


// const Direction = {
//     Up :0,
// }
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right,
  Center,  // 3,
}

enum State {
    Loading,
    Pending,
    Failed,
    Succeed
}

let move: Direction = Direction.Up;
console.log(move); // 0