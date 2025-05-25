// Renamed to AppUser to avoid duplicate identifier 'User'
type AppUser = {
  id: string;
  name: string;
  email: string;
};

type Developer = AppUser & {
  programmingLanguages: string[];
  yearsOfExperience: number;
};

const exampleDeveloper: Developer = {
  id: "dev123",
  name: "Alice Smith",
  email: "alice.smith@example.com",
  programmingLanguages: ["TypeScript", "JavaScript"],
  yearsOfExperience: 5,
};

const appUser: AppUser = {
  id: "user456",
  name: "Bob Johnson",
  email: "bob.johnson@example.com",
};

const appUserTwo: AppUser = {
  id: "user789",
  name: "Charlie Brown",
  email: "charlie.brown@example.com",
};

interface AppDeveloperTeam {
  id: string;
  name: string;
  members: AppUser[];
  developers?: Developer[]; // Optional field for developers
}

const exampleTeam: AppDeveloperTeam = {
  id: "team789",
  name: "Development Team",
  members: [appUser, appUserTwo],
  developers: [exampleDeveloper], // Optional field can be omitted
};

// console.log("Example Developer:", exampleDeveloper);
// console.log("Example Team:", exampleTeam.members[1]?.email);

interface WebDeveloperTeam extends AppDeveloperTeam {
  id: string;
  name: string;
  email: string;
  programmingLanguages: string[];
  yearsOfExperience: number;
}

const webDeveloperTeam: WebDeveloperTeam = {
  id: "web-team-001",
  name: "Web Development Team",
  email: "web.dev.team@example.com",
  programmingLanguages: ["HTML", "CSS", "JavaScript"],
  yearsOfExperience: 4,
  members: [appUser, appUserTwo],
  developers: [exampleDeveloper], // Optional field can be omitted
};

// console.log("Web Developer Team:", webDeveloperTeam);

type NumberArray = number[];

const arr1: NumberArray = [1, 2, 3, 4, 5];

interface StringArray {
  [index: number]: string; // Index signature for string array
}
const arr2: StringArray = ["one", "two", "three", "four", "five"];

interface ReadonlyStringArray {
  readonly [index: number]: string; // Readonly index signature for string array
}
const arr3: ReadonlyStringArray = ["one", "two", "three", "four", "five"];

// arr3.push("six"); // Error: Property 'push' does not exist on type 'readonly string[]'.

type add = (a: number, b: number) => number;
const addNumbers: add = (a, b) => a + b;
// console.log("Sum with Type Alias:", addNumbers(5, 10));

interface AddFunction {
  (a: number, b: number): number;
}
const addNumbersWithInterface: AddFunction = (a, b) => a + b;
// console.log("Sum with Interface:", addNumbersWithInterface(15, 20));

interface UserThree {
  id: string;
  name: string;
}

interface UserThree {
  email?: string;
}

const userWithOptionalEmail: UserThree = {
  id: "user001",
  name: "John Doe",
};

console.log("User with Optional Email:", userWithOptionalEmail);

// type UserFour = {
//   id: string;
//   name: string;
// }

// // Duplicate identifier 'UserFour'
// type UserFour = {
//   email?: string; // Optional property
// };
