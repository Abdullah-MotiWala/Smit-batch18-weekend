console.log("1");

function ourCallback(c) {
  const result = c * 2;
  console.log(result)
}

setTimeout(function () {
  const a = 1;
  const b = 2;
  const c = a + b;
  console.log("2");
  ourCallback();
}, 3000);

console.log("3")
