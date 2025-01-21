let firstObj: object = { id: 1, name: "firstObj" };
let secondObj: object = { ...firstObj };

// two ways to copy an object
// let secondObj:object = Object.assign({}, firstObj);
// let secondObj: object = firstObj;
// console.log(`secondObj : ${JSON.stringify(secondObj)}`);

let nameObj: object = { name: "nameObj name" };
let idObj: object = { id: 1 };
let obj3 = { ...nameObj, ...idObj };
// console.log(`obj3 = ${JSON.stringify(obj3)}`);

// if two objects have a property with the same name, then the object that was specified last will take precedence
let objPrec1: object = { id: 1, name: "obj1 name" };
let objPrec2: object = { id: 1001, desc: "obj2 description" };
let objPrec3 = { ...objPrec1, ...objPrec2 };
console.log(`objPrec3 : ${JSON.stringify(objPrec3, null, 4)}`);
// console.log(
//   `objPrec3 : ${JSON.stringify(
//     objPrec3,
//     (key, value) => {
//       if (key === "desc") {
//         return undefined;
//       }
//       return value;
//     },
//     4
//   )}`
// );

// let obj = {
//   id: 1,
//   name: "John",
//   details: { age: 30, city: "New York" },
// };

// let jsonString = JSON.stringify(obj, (key, value) => {
//   if (key === "city") return "San Francisco"; // Replace "city" value
//   return value;
// });

// console.log(jsonString);

// let firstArray = [1, 2, 3];
// let secondArray = [3, 4, 5];
// let thirdArray = [...firstArray, ...secondArray];
// console.log(`third array = ${thirdArray}`);

// let stringArray1 = ["one", "two", "three"];
// let stringArray2 = ["three", "five", "six"];

// let stringArray3 = [...stringArray1, ...stringArray2];
// console.log(`stringArray3 = ${stringArray3}`);

let objArray1 = [{ id: 1, name: "first element" }];
let objArray2 = [{ id: 2, name: "second element" }];
let objArray3 = [...objArray1, { id: 3, name: "third element" }, ...objArray2];
console.log(`objArray3 = ${JSON.stringify(objArray3, null, 4)}`);
