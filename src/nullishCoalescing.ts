// nullish coalescing operator (??)
function nullishCheck(a: number | undefined | null) {
  console.log(`a : ${a ?? `undefined or null`}`);
}
// nullishCheck(1);
// nullishCheck(null);
// nullishCheck(undefined);
// nullishCheck(0);
// nullishCheck("");
// nullishCheck(false);
// nullishCheck(NaN);
const a = 0;
const b = a || 10; // Using ||
const c = a ?? 10; // Using ??

// console.log(`b: ${b}`); // Output: b: 10 (0 is treated as falsy by ||)
// console.log(`c: ${c}`); // Output: c: 0 (0 is not nullish, so ?? uses the left side)

const userName: string | null = null;
const displayName = userName ?? "Guest";
console.log(displayName); // Output: Guest

const input: number | undefined = undefined;
const result = input ?? 42;
console.log(result); // Output: 42

function greetUser(name: string | null) {
  console.log(`Hello, ${name ?? "Guest"}!`);
}

greetUser("Ashis"); // Output: Hello, Ashis!
greetUser(null); // Output: Hello, Guest!

type Address = {
  city: string;
  road:string;
  parmanentAddress?: string;
  presentAddress: string;
}
type User = {
  name: string;
  address: Address;
}

const userOne:User = {
  name: "ashis",
  address:{
    city: "Rajshahi",
    road: "345 Baliaghatta",
    presentAddress: "Jessore"
  }
}


const permanentAddress = userOne?.address?.parmanentAddress ?? "No Parmanent Address Add";
console.log({permanentAddress}); // output: { parmanentAddress: "No Parmanent Address Add"}