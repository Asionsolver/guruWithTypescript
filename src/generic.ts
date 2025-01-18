function functionName<T>(value: T) {
  console.log(value, typeof value);
  return value;
}

// functionName(10); // number
// functionName("Hello"); // string
// functionName(true); // boolean
// functionName({}); // object
// functionName([]); // object

// function mergerObjects<T, U>(obj1: T, obj2: U) {
//   return { ...obj1, ...obj2 };
// }

// const mergedObj = mergerObjects({ name: "Max" }, { age: 30 });
// console.log(mergedObj);
// const mergedObj2 = mergerObjects(
//   { name: "Max" },
//   { age: 30, hobbies: ["Sports"] }
// );
// console.log(mergedObj2);
// const mergedObj3 = mergerObjects({ name: "Max", hobbies: ["Sports"] }, 45);
// console.log(mergedObj3);

type User3 = { name: string; age: number };

type MysteryBox<T> = {
  value: T;
};

const numberBox: MysteryBox<number> = {
  value: 10,
};

const userBox: MysteryBox<User3 | null> = {
  value: null,
};

if (userBox.value) {
  console.log(userBox.value.name);
}

type apiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

type User4 = {
  id: number | string;
  name: string;
  age: number;
};

type Product = {
  id: number | string;
  name: string;
  price: number;
  discount?: number;
};

// async function fetchUser(): Promise<apiResponse<User4>> {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data = await response.json();
//   return {
//     data,
//     status: response.status,
//     message: response.statusText,
//   };
// }

// async function main() {
//   const userResponse = await fetchUser();
//   console.log(userResponse.data.name);
// }

// main();

// async function fetchProduct(): Promise<apiResponse<Product>> {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/products/1"
//   );
//   const data = await response.json();
//   return {
//     data,
//     status: response.status,
//     message: response.statusText,
//   };
// }

// async function main() {
//   const productResponse = await fetchProduct();
//   console.log(productResponse.data.discount);
// }

// main();

const fetchData = async <T>(url: string): Promise<apiResponse<T>> => {
  const response = await fetch(url);
  const data = await response.json();
  return {
    data,
    status: response.status,
    message: response.statusText,
  };
};

async function main() {
  const userResponse = await fetchData<User4>(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  console.log(userResponse.data.name);

  const productResponse = await fetchData<Product>(
    "https://jsonplaceholder.typicode.com/products/1"
  );
  console.log(productResponse.data.name);
}

main();
