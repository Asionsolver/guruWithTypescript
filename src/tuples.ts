let tuple1: [string, boolean];

// Valid tuple assignment
tuple1 = ["test", true];
console.log(tuple1); // Output: ["test", true]

// Invalid tuple assignment
// tuple1 = ["test"]; // Error: Property '1' is missing in type '[string]' but required in type '[string, boolean]'
// tuple1 = [true, "test"]; // Error: Type 'string' is not assignable to type 'boolean'
let tuple: [number, string, boolean] = [42, "Hello", true];

// Accessing elements
console.log(tuple[0]); // Output: 42 (number)
console.log(tuple[1]); // Output: "Hello" (string)
console.log(tuple[2]); // Output: true (boolean)
let tuple5: [string, number?];

// Both are valid
tuple5 = ["test"];
tuple5 = ["test", 42];

// Invalid: Adding more elements than defined
// tuple5 = ["test", 42, true]; // Error: Source has 3 element(s) but target allows only 2
console.log(tuple5); // Output: ["test", 42]
let tuple6: [string, ...number[]];

// Valid
tuple6 = ["test"];
tuple6 = ["test", 1, 2, 3];

// Invalid: Adding elements of incorrect type
// tuple6 = ["test", 1, "wrong"]; // Error: Type 'string' is not assignable to type 'number'

console.log(tuple6); // Output: ["test", 1, 2, 3]
let tuple7: [string, number] = ["hello", 42];

// Destructuring
let [greeting, number] = tuple7;

console.log(greeting); // Output: "hello"
console.log(number); // Output: 42

function printTuple(tuple: [string, number]): void {
  console.log(`Name: ${tuple[0]}, Age: ${tuple[1]}`);
}

printTuple(["Alice", 25]); // Output: Name: Alice, Age: 25
function getTuple(): [string, number] {
  return ["Bob", 30];
}

let person = getTuple();
console.log(person); // Output: ["Bob", 30]
let readonlyTuple: readonly [string, number] = ["immutable", 100];

// readonlyTuple[0] = "mutable"; // Error: Cannot assign to '0' because it is a read-only property
console.log(readonlyTuple); // Output: ["immutable", 100]
type Person = [string, number, boolean];

let person1: Person = ["John", 25, true]; // Valid
let person2: Person = ["Jane", 30, false]; // Valid

// Invalid
// let person3: Person = ["John", true, 25]; // Error: Type 'boolean' is not assignable to type 'number'
let tupleRest: [number, ...string[]];
tupleRest = [1];
tupleRest = [1, "string1"];
tupleRest = [1, "string1", "string2"];

// Invalid: Adding elements of incorrect type
// tupleRest = [1, "string1", "string2", 2]; // Error: Type 'number' is not assignable to type 'string'

console.log(tupleRest); // Output: [1, "string1", "string2"]
