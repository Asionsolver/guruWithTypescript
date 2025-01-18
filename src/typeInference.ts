let message2 = "Hello, World!"; // Type inference

const age2 = 34; // Type inference

const isHappy2 = true; // Type inference

// Array of numbers
const numbers2 = [1, 2, 3, 4, 5]; // Type inference

// Array of strings
const names2 = ["Alice", "Bob", "Charlie"]; // Type inference

// Array of booleans
const truths2 = [true, false, true]; // Type inference

// Array of mixed types
const mixed2 = ["Alice", 34, true]; // Type inference

// Object with properties
const person2 = { id: 1, name: "Alice", age: 34, isHappy: true }; // Type inference

person2.name = "Bob"; // OK
// person2.name = 34; // Error
// type inference with functions
function add2(a = 3, b = 53) {
  return a + b;
}

// typeof operator is the good example of type inference
function printUser(user: typeof person2) {
  console.log(user);
}

// printUser(person2);

const numbers3 = [1, 2, 3, 4, 5]; // Type inference
const doubled = numbers3.map((n) => n * 2); // Type inference
// console.log(doubled);

// Without type inference

function validateForm(formData: {
  email: string;
  password: string;
  age: number;
  isAdmin: boolean;
}): boolean {
  const email: string = formData.email;
  const password: string = formData.password;
  const age: number = formData.age;
  const isAdmin: boolean = formData.isAdmin;

  if (email.includes("@") && password.length > 6 && age > 18 && isAdmin) {
    return true;
  }
  return false;
}

// With type inference
function validateForm2(formData: {
  email: string;
  password: string;
  age: number;
  isAdmin: boolean;
}): boolean {
  const { email, password, age, isAdmin } = formData;
  if (email.includes("@") && password.length >= 6 && age > 18 && isAdmin) {
    return true;
  }
  return false;
}

console.log(
  validateForm2({
    email: "asion@gmail.com",
    password: "123456",
    age: 20,
    isAdmin: true,
  })
);

/**
 * @Best Practices for Type Inference
 *
 * Trust TypeScript: Use type inference whenever possible, but provide explicit types for:
 *   - Function arguments
 *   - Public APIs
 *   - Complex or ambiguous types
 *   - Combine with Explicit types: Use tye inference for local variables but provide types for more complex structures.
 *   - Avoid any: Relying on inference discourages the use of the any type, improving type safety.
 */
