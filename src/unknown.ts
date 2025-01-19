// let data: unknown;

// data = 10; // valid
// data = "hello"; // valid
// data = true; // valid
// data = { key: "value" }; // valid

// if (typeof data === "string") {
//   console.log(data.toUpperCase());
// } else {
//   console.log(data);
// }

// function processAsString(input: unknown) {
//   if (typeof input !== "string") {
//     throw new Error("Input must be a string");
//   }
//   //   const str = input as string;
//   console.log(input.toUpperCase());
// }

// processAsString("hello");
// processAsString(10); // Error

// function processAsString(input: unknown) {
//   if (typeof input === "string") {
//     console.log(input.toUpperCase());
//   } else if (typeof input === "number") {
//     console.log(input.toFixed(2));
//   } else if (typeof input === "boolean") {
//     console.log(input.toString().toUpperCase());
//   } else if (Array.isArray(input)) {
//     console.log(input.join(","));
//     console.log(input.length);
//   } else if (typeof input === "object") {
//     console.log(input);
//   } else {
//     console.log("Unknown type");
//   }
// }

// processAsString("hello");
// processAsString(10.8456465465);
// processAsString(true);
// processAsString([1, 2, 3]);
// processAsString({ key: "value" });

// type User = {
//   id: number;
//   username: string;
// };

// function isUser(input: unknown): input is User {
//   return (
//     typeof input === "object" &&
//     input !== null &&
//     "id" in input &&
//     typeof (input as any).id === "number" &&
//     "username" in input &&
//     typeof (input as any).username === "string"
//   );
// }

// function processUser(input: unknown) {
//   if (isUser(input)) {
//     console.log(`User ID: ${input.id}, Username: ${input.username}`);
//   } else {
//     console.log("Input is not a valid user");
//   }
// }

// processUser({ id: "1", username: "john" });

// processUser({ id: 1, username: "ashis" });

type APIResponse = {
  status: string;
  data: unknown; // Unknown type for generic API responses
};

function handleResponse(response: APIResponse) {
  if (typeof response.data === "string") {
    console.log("Data is a string: ", response.data.toUpperCase());
  } else if (typeof response.data === "object" && response.data !== null) {
    console.log("Data is an object: ", response.data);
  } else {
    console.log("Data is something else: ", response.data);
  }
}

const response1: APIResponse = {
  status: "ok",
  data: "hello",
};
const response2: APIResponse = {
  status: "ok",
  data: { key: "value" },
};
const response3: APIResponse = {
  status: "ok",
  data: 10,
};

handleResponse(response1);
handleResponse(response2);
handleResponse(response3);
