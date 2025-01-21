//  assignment assertion operator (!)

// console.log("aValue = " + aValue); // error: Variable 'aValue' is used before being assigned.
// var aValue = 1;
// console.log("aValue = " + aValue);

// console.log("aValue = " + aValue);
// var aValue!: number;
// aValue = 1;
// console.log("aValue = " + aValue);

// var globalString: string;
// setGlobalString("this string is set");
// console.log(`globalString = ${globalString!}`); // No error

// function setGlobalString(value: string) {
//   globalString = value;
// }

// var globalString!: string;

// setGlobalString("this string is set");

// console.log(`globalString = ${globalString}`);

// function setGlobalString(value: string) {
//   globalString = value;
// }
var example!: number; // Telling TypeScript we will assign this later
initializeExample();
console.log(example); // No error, as the variable is assigned in the function

function initializeExample() {
  example = 42;
}
class Person {
  name!: string; // We promise to initialize this later

  initialize(name: string) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

const person = new Person();
person.initialize("Ashis");
person.printName(); // Output: Ashis
