const names = ["ashis kumar", "asion solver", "pritom paul"];
// result: [{first: 'ashis', last: 'kumar'}, {first: 'asion', last: 'solver'}, {first: 'pritom', last: 'paul'}]

const result = names.map((name) => {
  const [first, last] = name.split(" ");
  return { first, last };
});

// console.log(result);

const users = [
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "Go",
  "JavaScript",
  "Python",
  "JavaScript",
  "Java",
  "Python",
  "Python",
  "JavaScript",
  "Go",
  "Python",
  "Java",
  "JavaScript",
];

const resultSum = users.reduce((acc, language) => {
  if (acc[language]) {
    acc[language]++;
  } else {
    acc[language] = 1;
  }
  return acc;
}, {});

// console.log(resultSum);

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
// console.log(fruitCount);

// Group items by a property
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 30 },
  { name: "Edward", age: 25 },
  { name: "Frank", age: 30 },
  { name: "George", age: 35 },
];
const groupedByAge = people.reduce((acc, person) => {
  const age = person.age;
  if (!acc[age]) acc[age] = [];
  acc[age].push(person);
  return acc;
}, {});
// console.log(groupedByAge);

// Calculate total price of products

const cart = [
  { product: "Book", price: 10, quantity: 2 },
  { product: "Pen", price: 1, quantity: 5 },
  { product: "Notebook", price: 5, quantity: 3 },
];

const totalPrice = cart.reduce((acc, items) => {
  return acc + items.price * items.quantity;
}, 0);

console.log(totalPrice);
