type User = {
  status: string;
  data: unknown; // Unknown type for generic API responses
};

function isUser(input: unknown): input is User {
  return (
    typeof input === "object" &&
    input !== null &&
    "id" in input &&
    typeof (input as any).id === "number" &&
    "username" in input &&
    typeof (input as any).username === "string"
  );
}

async function fetchUser(url: string): Promise<User | null> {
  const response = await fetch(url);
  const data: unknown = await response.json();

  if (isUser(data)) {
    return data;
  } else {
    console.log("Invalid user data", data);
    return null;
  }
}

// fetchUser("https://jsonplaceholder.typicode.com/users/1").then((user) => {
//   if (user) {
//     console.log(`User ID: ${user.data}, Username: ${user.status}`);
//   }
// });

// function isMouseEvent(event: Event): event is MouseEvent {
//   return "clientX" in event && "clientY" in event;
// }

// document.addEventListener("click", (event) => {
//   if (isMouseEvent(event)) {
//     console.log("Mouse coordinates: ", event.clientX, event.clientY);
//   } else {
//     console.log("Keyboard event");
//   }
// });

// type Cat = {
//   meow: () => void;
// };
// type Dog = {
//   bark: () => void;
// };

// type Animal = Cat | Dog;

// function isCat(animal: Animal): animal is Cat {
//   return (animal as Cat).meow !== undefined;
// }

// function makeSound(animal: Animal) {
//   if (isCat(animal)) {
//     animal.meow();
//   } else {
//     animal.bark();
//   }
// }

// const cat: Cat = {
//   meow: () => console.log("Meow"),
// };

// const dog: Dog = {
//   bark: () => console.log("Bark"),
// };

// makeSound(cat);
// makeSound(dog);

type Order = {
  id: string;
  total: number;
  items: string[];
};

function isOrder(data: unknown): data is Order {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    typeof (data as any).id === "string" &&
    "total" in data &&
    typeof (data as any).total === "number" &&
    "items" in data &&
    Array.isArray((data as any).items)
  );
}

function processOrder(json: string) {
  const parsedData: unknown = JSON.parse(json);

  if (isOrder(parsedData)) {
    console.log(
      `Processing order ${parsedData.id} with total: ${parsedData.total}`
    );
  } else {
    console.error("Invalid order data.");
  }
}

const validOrderJSON =
  '{"id": "123", "total": 50.5, "items": ["item1", "item2"]}';

processOrder(validOrderJSON);

const invalidOrderJSON = '{"id": "123", "total": 50.5, "items": "item1"}';
processOrder(invalidOrderJSON);

function isError(error: unknown): error is Error {
  return error instanceof Error;
}

try {
  throw new Error("Something went wrong!");
} catch (error: unknown) {
  if (isError(error)) {
    console.error(`Error: ${error.message}`);
  } else {
    console.error("Unknown error occurred.");
  }
}
