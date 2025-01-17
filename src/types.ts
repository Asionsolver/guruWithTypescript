let message: string = "Hello, TypeScript!";
// message = 34; // Error: Type '34' is not assignable to type 'string'.
const age: number = 34;
// age = "34"; // Error: Type '"34"' is not assignable to type 'number'.
const isHappy: boolean = true;
// isHappy = "true"; // Error: Type '"true"' is not assignable to type 'boolean'.
// isHappy = false; //Cannot assign to 'isHappy' because it is a constant or a read-only property.

// const numbers: number = [1, 2, 3, 4, 5];// Error: Type 'number[]' is not assignable to type 'number'.
// Array of numbers
const numbers: number[] = [1, 2, 3, 4, 5];

// Array of strings
const names: string[] = ["Alice", "Bob", "Charlie"];

// Array of booleans
const truths: boolean[] = [true, false, true];

// Array of mixed types
const mixed: (string | number | boolean)[] = ["Alice", 34, true];

// enum

enum Role {
  ADMIN,
  USER,
  GUEST,
  MANAGER,
}

const userRole: Role = Role.USER;

enum Statue {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

const userStatue: Statue = Statue.ACTIVE;
