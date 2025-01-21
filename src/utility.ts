// type User = {
//   id: number;
//   name: string;
//   email: string;
//   role: "admin" | "user" | "guest";
// };

// type NewUser = Omit<User, "id" | "role">;

// type UpdateUser = Partial<Omit<User, "id">>;

// function createUser(input: NewUser): User {
//   return {
//     id: Math.floor(Math.random() * 100),
//     role: "user",
//     ...input,
//   };
// }

// const user1 = createUser({
//   name: "John Doe",
//   email: "John@gmail.com",
// });
// console.log(user1);

// const user2 = createUser({ name: "Jane Doe", email: "Doe@gmail.com" });
// console.log(user2);

// function updateUser(id: number, user: User, updates: UpdateUser): User {
//   return {
//     ...user,
//     ...updates,
//   };
// }

// const updatedUser = updateUser(user1.id, user1, {
//   name: "John Doe Jr.",
//   role: "admin",
// });
// console.log(updatedUser);

// const updatedUser2 = updateUser(user2.id, user2, {
//   name: "Doe Jr.",
//   role: "guest",
// });
// console.log(updatedUser2);

type User = {
  readonly id: number;
  name: string;
  email: string;
  address: string;
  profession: string;
  salary: number;
  role: "admin" | "user" | "guest";
  createdAt: Date;
  updatedAt: Date;
};

type NewUser = Omit<User, "id" | "role" | "createdAt" | "updatedAt">;
type pickUser = Pick<
  User,
  "name" | "email" | "address" | "profession" | "salary"
>;

type Optional = {
  name?: string;
  email?: string;
  address?: string;
  profession?: string;
  salary?: number;
};

type AllRequired = Required<Optional>;

type UpdateUser = Partial<Omit<User, "id" | "createdAt">>;

function createUser(input: pickUser): User {
  return {
    id: Math.floor(Math.random() * 100),
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    ...input,
  };
}

function updateUser(id: number, user: User, updates: UpdateUser): User {
  return {
    ...user,
    ...updates,
    updatedAt: new Date(),
  };
}

const user1 = createUser({
  name: "Ashis",
  email: "ashis@gmail.com",
  address: "Dhaka",
  profession: "Software Engineer",
  salary: 100000,
});

// console.log(user1);

const updatedUser = updateUser(user1.id, user1, {
  name: "Ashis Kumar",
  address: "Dhaka, Bangladesh",
  profession: "Full Stack Developer",
  salary: 120000,
});

// console.log(updatedUser);

// non-nullable type

type UserInput = string | null | undefined;
type ValidUserInput = NonNullable<UserInput>;

function printUserInput(input: ValidUserInput): void {
  console.log(input);
}

// printUserInput("Ashis");
// printUserInput(null); // Error

// ReturnType

function FetchData(input: string) {
  return {
    id: 1,
    secret: "secret",
    data: input,
    key: "key",
  };
}

type fetchData = typeof FetchData;

type FetchDataReturnType = ReturnType<fetchData>;

// Promise

function fetchData2(): Promise<User> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Ashis",
        email: "asion@gmail.com",
        address: "Dhaka",
        profession: "Software Engineer",
        salary: 100000,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }, 2000);
  });
}

type FetchDataReturnType2 = Awaited<ReturnType<typeof fetchData2>>;
