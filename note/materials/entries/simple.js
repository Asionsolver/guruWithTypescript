const person = { name: "Ashis", age: 30, country: "India" };

console.log(Object.entries(person)); // [["name", "Ashis"], ["age", 30], ["country", "India"]]

// Iterating over the entries
const car = { brand: "Tesla", model: "Model 3", year: 2023 };

for (const [key, value] of Object.entries(car)) {
  console.log(`${key}: ${value}`);
}
