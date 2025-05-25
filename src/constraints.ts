// interface Course {
//   id: number;
//   name: string;
//   duration: string;
//   fee: number;
//   teacher: Teacher[];
//   students: Student[];
// }

// interface Address {
//   zip: string;
//   city: string;
//   state: string;
//   street: string;
//   country: string;
// }

// interface Teacher {
//   t_id: number;
//   name: string;
//   subject: string;
//   email: string;
//   isActive: boolean;
//   address: Address;
// }

// interface Student {
//   s_id: number;
//   name: string;
//   age: number;
//   email: string;
//   devTypes?: string[];
//   isActive: boolean;
//   address: Address;
// }
// const addCourseToStudent = <T extends Student>(students: T[]): Course => {
//   const course: Course = {
//     id: 1,
//     name: "Next Level TypeScript",
//     duration: "3 months",
//     fee: 50000,
//     teacher: [
//       {
//         t_id: 1,
//         name: "John Doe",
//         subject: "TypeScript",
//         email: "john.doe@example.com",
//         isActive: true,
//         address: {
//           zip: "12345",
//           city: "Wonderland",
//           state: "CA",
//           street: "123 Main St",
//           country: "USA",
//         },
//       },
//       {
//         t_id: 2,
//         name: "Jane Smith",
//         subject: "JavaScript",
//         email: "jane.smith@example.com",
//         isActive: true,
//         address: {
//           zip: "54321",
//           city: "Dreamland",
//           state: "NY",
//           street: "456 Elm St",
//           country: "USA",
//         },
//       },
//     ],
//     students: students,
//   };

//   return course;
// };

// const students1 = addCourseToStudent<Student>([
//   {
//     s_id: 1,
//     name: "Alice",
//     age: 20,
//     email: "alice@example.com",
//     devTypes: ["Frontend", "Backend"],
//     isActive: true,
//     address: {
//       zip: "12345",
//       city: "Wonderland",
//       state: "CA",
//       street: "123 Main St",
//       country: "USA",
//     },
//   },
// ]);

// console.log(JSON.stringify(students1, null, 2));

// Generic Constraints with keyof operator

type Vehicle = {
  car: string;
  bike: string;
  bus: string;
  ship: string;
  train: string;
  airplane: string;
};

// type Owner = car | bike | bus | ship | train | airplane; // manually defined union type
type Owner = keyof Vehicle;

const person: Owner = "car"; // valid
// const person1: Owner = "truck"; // Type '"truck"' is not assignable to type 'keyof Vehicle'.

const getPropertyValue = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};

const vehicle: Vehicle = {
  car: "Toyota",
  bike: "Yamaha",
  bus: "Mercedes",
  ship: "Titanic",
  train: "Bullet Train",
  airplane: "Boeing 747",
};
const carValue = getPropertyValue(vehicle, "car"); // valid
console.log(carValue); // Output: Toyota

const bikeValue = getPropertyValue(vehicle, "bike"); // valid
console.log(bikeValue); // Output: Yamaha

interface Person {
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}
const getPersonProperty = <T extends Person, K extends keyof T>(
  person: T,
  key: K
): T[K] => {
  return person[key];
};
const person1: Person = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
  isActive: true,
};
const personName = getPersonProperty(person1, "name"); // valid
console.log(personName); // Output: John Doe
