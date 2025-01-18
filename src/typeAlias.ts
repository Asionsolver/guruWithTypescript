import { UserData } from "./user";

// const user = "John Doe";
// const age3 = 30;

// type name = string; // type alias
type ID = string | number; // type alias

// function printId(id: ID) {
//   console.log(`Your ID is: ${id}`);
// }

// printId("1");
// printId(1);
// printId(true); // Error: Argument of type 'true' is not assignable to parameter of type 'ID'.

// type User = {
//   id: ID;
//   firstName: string;
//   lastName?: string;
//   skills: string[];
// };

// ! First way return type same as User. This is the best way
// function createUser(firstName: string, lastName?: string): User {
//   return {
//     id: crypto.randomUUID(),
//     firstName,
//     lastName,
//     skills: [],
//   };
// }

// Second way return type  same as User using satisfies
// function createUser(firstName: string, lastName?: string) {
//   return {
//     id: crypto.randomUUID(),
//     firstName,
//     lastName,
//     skills: [],
//   } satisfies User;
// }

// ! Third way return type same as User using type annotation. This is the best way
// function createUser(firstName: string, lastName?: string) {
//   const user: User = {
//     id: crypto.randomUUID(),
//     firstName,
//     lastName,
//     skills: [],
//   };

//   return user;
// }

// Fourth way return type same as User using as. This is not the best way. But it is last option
// function createUser(firstName: string, lastName?: string) {
//   const user = {
//     id: crypto.randomUUID(),
//     firstName,
//     lastName,
//     skills: [],
//   } as User;

//   return user;
// }

// const user = createUser("John", "Doe");
// console.log(user.skills.map((skill) => skill.toUpperCase()));

// type User = {
//   id: ID;
//   firstName: string;
//   lastName?: string;
//   skills: string[];
//   address: {
//     street: string;
//     city: string;
//     country: string;
//     position: {
//       lat: number;
//       long: number;
//     };
//   };
// };

// type Address = User["address"];

// type Position = User["address"]["position"];

// or

// type Position = Address["position"];

// function printAddress(address: User["address"]) {
//   console.log(address);
// }

// function printPosition(position: User["address"]["position"]) {
//   console.log(position);
// }
type User = {
  id: ID;
  firstName: string;
  lastName?: string;
  skills: {
    name: string;
    level: string;
    experience: string;
    interest: string;
  }[];
  address: {
    street: string;
    city: string;
    country: string;
    position: {
      lat: number;
      long: number;
    };
  };
  contact: {
    email: string;
    phone: string;
    website: string;
    social: {
      facebook: string;
      twitter: string;
      linkedin: string;
    };
    availability: {
      days: string[];
      hours: string;
    };
    languages: string[];
    timezone: string;
  };
  education: {
    degree: string;
    school: string;
    major: string;
    graduation: string;
  };
  experience: {
    title: string;
    company: string;
    location: string;
    dates: string;
    description: string;
  }[];
  projects: {
    name: string;
    description: string;
    technologies: string[];
  }[];
  certifications: {
    name: string;
    date: string;
    organization: string;
  }[];
  hobbies: string[];
  awards: {
    name: string;
    date: string;
  }[];
  languages: [];
  interests: string[];
};

const user = JSON.parse(UserData) as User;
// console.log(user);

// function printEducation(user: User) {
//   console.log(user.education);
// }
// console.log(printEducation(user));

function printEducation(education: User["education"]) {
  console.log(education.school);
}

function printExperiences(experience: User["experience"]) {
  //   console.log(experience.map((exp) => exp.title));
  console.log(experience);
}

function printExperience(experience: User["experience"][number]) {
  console.log(experience);
}

// printEducation(user.education);
// printExperiences(user.experience);
// printExperience(user.experience[0]);

// Basic function type
// type CB = () => void;

// Function that accepts a callback
// function testCB(cb: CB) {
//   cb();
// }

// Call the function with a callback
// testCB(() => console.log("Hello"));

// Basic function type with arguments
// type CB2 = (arg1: string, arg2: string, arg3: string) => void;

// Function that accepts a callback with arguments
// function testCB2(cb: CB2) {
//   cb("Hello", "World", "!");
// }

// Call the function with a callback with arguments
// testCB2((arg1, arg2, arg3) => console.log(arg1, arg2, arg3));

// Basic function type with arguments and return type
// type CB3 = (arg1: string, arg2: string, arg3: string) => string;

// Function that accepts a callback with arguments and return type
// function testCB3(cb: CB3) {
//   console.log(cb("Hello", "World", "!"));
// }

// Call the function with a callback with arguments and return type
// testCB3((arg1, arg2, arg3) => arg1 + arg2 + arg3);
