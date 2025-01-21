/**
 *
 *@Function
 * Typed Parameters
 * Typed Return Values
 * Optional Parameters
 * Default values
 * Rest Parameters
 */

/**
 * This function takes two numbers and returns a number
 * @param a - number
 * @param b - number
 * @returns the sum of two numbers
 * @example
 * add(5, 3) // 8
 */

// ! Typed Parameters
function add(a: number, b: number): number {
  return a + b;
}

// console.log(add(5, 3));

// ! Optional Parameters
// function greet(name: string, message?: string) {
//   return `Hello, ${name} ! ${message || "Welcome to TypeScript"}`;
// }

// ! Default values
// function greet(name: string, message: string = "Welcome to TypeScript") {
//   return `Hello, ${name} ! ${message}`;
// }
// console.log(greet("John"));
// console.log(greet("John", "Happy Coding"));

// ! Rest Parameters
// function greet(name: string, ...messages: string[]) {
//   return `Hello, ${name} ! ${messages.join(" ")}`;
// }

// console.log(greet("John", "Welcome to TypeScript.", "Happy Coding."));

enum Role {
  AUTHOR = "AUTHOR",
  DEVELOPER = "DEVELOPER",
  EDITOR = "EDITOR",
}

const employees: {
  id: number;
  name: string;
  age: number;
  salary: number;
  role: Role;
}[] = [];

employees.push({
  id: 1,
  name: "John Doe",
  age: 34,
  salary: 50000,
  role: Role.AUTHOR,
});

employees.push({
  id: 2,
  name: "Alice",
  age: 28,
  salary: 60000,
  role: Role.DEVELOPER,
});

employees.push({
  id: 3,
  name: "Bob",
  age: 30,
  salary: 70000,
  role: Role.EDITOR,
});

// console.log(employees);

function findById(id: number): {
  id: number;
  name: string;
  age: number;
  salary: number;
  role: Role;
} {
  const users = employees.find((user) => user.id === id);
  if (!users) {
    throw new Error(`User with id: ${id} not found`);
  }
  return users;
}

// console.log(findById(1));
// console.log(findById(6));
function myCallback(text: string): void {
  console.log(`myCallback called with ${text}`);
}
function withCallbackArg(message: string, callbackFn: (text: string) => void) {
  console.log(`withCallback called, message : ${message}`);
  callbackFn(`${message} from withCallback"`);
}

withCallbackArg("hello", myCallback);
