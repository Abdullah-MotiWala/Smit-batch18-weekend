const profitWrapper = document.getElementById("profit");
const boxWrapper = document.getElementById("box-wrapper");

const form = document.getElementById("item-form");
const formSubmitButton = form.querySelector("button");
const itemTitleElement = form.querySelector("[name='title']");
const itemPriceElement = form.querySelector("[name='price']");
const itemQuantityElement = form.querySelector("[name='quantity']");

let itemCount = 1;
let totalProfit = 0;

function addItemClickHandler() {
  const itemTitle = itemTitleElement.value;
  const itemPrice = itemPriceElement.value;
  const itemQuantity = itemQuantityElement.value;

  addBoxes(itemQuantity, itemTitle, itemPrice);
}

function createABox(title, price) {
  const box = `<div class='box'><p>${itemCount++}</p> <p>${title}</p> <p>${price}</p> <button onclick="soldButtonClickHandler(event)">Sold</button></div>`;
  return box;
  //   const box = document.createElement("div");
  //   box.setAttribute("class", "box");

  //   const idP = document.createElement("p");
  //   const idText = document.createTextNode(itemCount++);
  //   idP.appendChild(idText);

  //   const titleP = document.createElement("p");
  //   const titleText = document.createTextNode(title);
  //   titleP.appendChild(titleText);

  //   const priceP = document.createElement("p");
  //   const priceText = document.createTextNode(price);
  //   priceP.appendChild(priceText);

  //   const soldButton = document.createElement("button");
  //   const soldText = document.createTextNode("Sold");
  //   soldButton.appendChild(soldText);
  //   soldButton.addEventListener("click", soldButtonClickHandler);

  //   box.appendChild(idP);
  //   box.appendChild(titleP);
  //   box.appendChild(priceP);
  //   box.appendChild(soldButton);

  return box;
}

function appendABox(box) {
  boxWrapper.innerHTML += box;
  //   boxWrapper.appendChild(box);
}

function addBoxes(count, itemTitle, itemPrice) {
  for (let i = 0; i < count; i++) {
    const box = createABox(itemTitle, itemPrice);
    appendABox(box);
  }
}

formSubmitButton.addEventListener("click", addItemClickHandler);
function soldButtonClickHandler(event) {
  const soldButton = event.target;
  const box = soldButton.parentNode;

  const price = box.childNodes[2].innerText;
  totalProfit += Number(price);
  profitWrapper.innerText = totalProfit;
  box.remove();
}

const myObj = {
  a: false,
  b: 34,
  c: this,
  getValue: function value() {
    console.log(this, "===this");
    console.log("===called");
  },
};
// if (myObj.a) {
//   console.log("key found");
// } else {
//     console.log("key not found")

// let myKey = "a"
// // }
// const isKeyExist = "a" in myObj
// console.log(isKeyExist)

// console.log(myObj.c)
// myObj.getValue()

function Student(name, age, section) {
  this.firstName = name;
  this.age = age;
  this.section = section;
  this.rollNo = Math.random();
  this.callName = function () {
    alert(this.firstName);
  };
 
}

Student.prototype.greet = function(){
    alert("Hello! How're you?")
  }

const student1 = new Student("Ali", 22, "b");
const student2 = new Student("Jabbar", 22, "c");
student1.callName()
student2.callName()

student1.greet()


new Array()
new String()
