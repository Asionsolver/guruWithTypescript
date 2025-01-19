let data: any;
data = 10; // valid
data = "Hello"; // valid
data = true; // valid
data = [1, 2, 3]; // valid
data = { name: "John" }; // valid
console.log(data.toUpperCase()); // No compile-time error, but runtime error if `data` is not a string.
