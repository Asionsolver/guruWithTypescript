# Example Code Snippets

1. Convert an array of objects into a single object

Imagine you have an array of key-value pairs and want to turn it into an object:

```javascript
const keyValuePairs = [
  ["name", "Ashis"],
  ["age", 25],
  ["profession", "Frontend Developer"],
];
const object = keyValuePairs.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});
console.log(object);
// Output: { name: 'Ashis', age: 25, profession: 'Frontend Developer' }
```

Find the average of an array.

```javascript
const numbers = [10, 20, 30, 40];
const average = numbers.reduce(
  (acc, num, _, array) => acc + num / array.length,
  0
);
console.log(average); // Output: 25
```

Remove duplicates from an array.

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = numbers.reduce((acc, curr) => {
  if (!acc.includes(curr)) acc.push(curr);
  return acc;
}, []);
console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
```

Sort an array of objects by a property

```javascript
const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 88 },
];
const sortedByGrade = students.reduce((acc, curr) => {
  const index = acc.findIndex((student) => student.grade > curr.grade);
  if (index === -1) acc.push(curr);
  else acc.splice(index, 0, curr);
  return acc;
}, []);
console.log(sortedByGrade);
// Output: [{ name: 'Alice', grade: 85 }, { name: 'Charlie', grade: 88 }, { name: 'Bob', grade: 92 }]
```

Create a histogram from an array

```javascript
const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const histogram = numbers.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
console.log(histogram);
// Output: { 1: 1, 2: 2, 3: 3, 4: 4 }
```

Group and aggregate data

```javascript
const orders = [
  { product: "Book", quantity: 2 },
  { product: "Pen", quantity: 5 },
  { product: "Book", quantity: 3 },
  { product: "Pen", quantity: 2 },
];
const groupedOrders = orders.reduce((acc, { product, quantity }) => {
  if (!acc[product]) acc[product] = 0;
  acc[product] += quantity;
  return acc;
}, {});
console.log(groupedOrders);
// Output: { Book: 5, Pen: 7 }
```

Implement a custom filter using reduce

```javascript
const numbers = [1, 2, 3, 4, 5];
const customFilter = (arr, callback) =>
  arr.reduce((acc, curr) => {
    if (callback(curr)) acc.push(curr);
    return acc;
  }, []);
const evenNumbers = customFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

Parse CSV data

```javascript
const csvData = `
name,age,profession
Ashis,25,Developer
Alice,30,Designer
Bob,28,Manager
`.trim();

const rows = csvData.split("\n");
const headers = rows[0].split(",");
const data = rows.slice(1).reduce((acc, row) => {
  const values = row.split(",");
  const entry = headers.reduce((obj, header, index) => {
    obj[header] = values[index];
    return obj;
  }, {});
  acc.push(entry);
  return acc;
}, []);
console.log(data);
/* Output:
[
  { name: 'Ashis', age: '25', profession: 'Developer' },
  { name: 'Alice', age: '30', profession: 'Designer' },
  { name: 'Bob', age: '28', profession: 'Manager' }
]
*/
```

Build a deep copy of a nested object

```javascript
const nestedObject = {
  a: { b: { c: 1 } },
  d: 2,
};
const deepCopy = (obj) =>
  Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = typeof value === "object" ? deepCopy(value) : value;
    return acc;
  }, {});
const copy = deepCopy(nestedObject);
console.log(copy); // Output: { a: { b: { c: 1 } }, d: 2 }
```

## Advanced Real-World Scenarios

1. Create a Leaderboard
   Imagine you have a game where players earn points, and you want to calculate their total points and rank them:

javascript
Copy
Edit
const gameScores = [
{ player: 'Ashis', points: 50 },
{ player: 'Alice', points: 30 },
{ player: 'Bob', points: 70 },
{ player: 'Alice', points: 40 },
{ player: 'Ashis', points: 30 }
];
const leaderboard = gameScores.reduce((acc, { player, points }) => {
if (!acc[player]) acc[player] = 0;
acc[player] += points;
return acc;
}, {});
const ranked = Object.entries(leaderboard)
.sort((a, b) => b[1] - a[1])
.map(([player, points], rank) => ({ rank: rank + 1, player, points }));
console.log(ranked);
/_ Output:
[
{ rank: 1, player: 'Bob', points: 70 },
{ rank: 2, player: 'Ashis', points: 80 },
{ rank: 3, player: 'Alice', points: 70 }
]
_/ 2. Aggregate Employee Salaries
Group employees by department and calculate total salaries:

javascript
Copy
Edit
const employees = [
{ name: 'Alice', department: 'HR', salary: 3000 },
{ name: 'Bob', department: 'Engineering', salary: 4000 },
{ name: 'Charlie', department: 'Engineering', salary: 5000 },
{ name: 'Dave', department: 'HR', salary: 2500 }
];
const salaryByDepartment = employees.reduce((acc, { department, salary }) => {
if (!acc[department]) acc[department] = 0;
acc[department] += salary;
return acc;
}, {});
console.log(salaryByDepartment);
// Output: { HR: 5500, Engineering: 9000 } 3. Validate and Structure Form Data
For a web form, convert raw inputs into a structured object and validate them:

javascript
Copy
Edit
const formData = [
{ field: 'name', value: 'Ashis' },
{ field: 'email', value: 'ashis@example.com' },
{ field: 'age', value: '25' }
];
const structuredData = formData.reduce((acc, { field, value }) => {
acc[field] = value;
return acc;
}, {});
console.log(structuredData);
// Output: { name: 'Ashis', email: 'ashis@example.com', age: '25' } 4. Analyze Website Traffic Data
Group and count page views per URL:

javascript
Copy
Edit
const pageViews = [
{ url: '/home', views: 5 },
{ url: '/about', views: 3 },
{ url: '/home', views: 8 },
{ url: '/contact', views: 2 }
];
const trafficAnalysis = pageViews.reduce((acc, { url, views }) => {
if (!acc[url]) acc[url] = 0;
acc[url] += views;
return acc;
}, {});
console.log(trafficAnalysis);
// Output: { '/home': 13, '/about': 3, '/contact': 2 }
