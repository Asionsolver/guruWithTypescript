// const acc = { JavaScript: 1, Python: 2 };

// console.log(acc["JavaScript"]);
// let boolObj = new Boolean(true); // Boolean object
// console.log(boolObj);
// let primitiveBool = boolObj.valueOf();
// console.log(primitiveBool);
// let boolObj = new Boolean(false);

// if (boolObj) {
//   console.log("This runs even though the value is false!");
// }

let boolObj = new Boolean(false);

if (boolObj.valueOf()) {
  console.log("This will NOT run because valueOf() gives the primitive false.");
}
