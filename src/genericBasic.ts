// // const numberArray: number[] = [1, 2, 3, 4, 5];
// const numberArray: Array<number> = [1, 2, 3, 4, 5]; // using Generic Array type
// // const stringArray: string[] = ["a", "b", "c", "d", "e"];
// const stringArray: Array<string> = ["a", "b", "c", "d", "e"]; // using Generic Array type
// // const booleanArray: boolean[] = [true, false, true, false, true];
// const booleanArray: Array<boolean> = [true, false, true, false, true]; // using Generic Array type

// console.log(numberArray);
// console.log(stringArray);
// console.log(booleanArray);

// type GenericNumberArray = Array<number>;
// const numberArray: GenericNumberArray = [1, 2, 3, 4, 5]; // using Generic Array type

// type GenericStringArray = Array<string>;
// const stringArray: GenericStringArray = ["a", "b", "c", "d", "e"]; // using Generic Array type

// type GenericBooleanArray = Array<boolean>;
// const booleanArray: GenericBooleanArray = [true, false, true, false, true]; // using Generic Array type

// console.log(numberArray);
// console.log(stringArray);
// console.log(booleanArray);

type GenericArray<T> = Array<T>;
// const numberArray: GenericArray<number> = [1, 2, 3, 4, 5]; // using Generic Array type
// const stringArray: GenericArray<string> = ["a", "b", "c", "d", "e"]; // using Generic Array type
// const booleanArray: GenericArray<boolean> = [true, false, true, false, true]; // using Generic Array type
// console.log(numberArray);
// console.log(stringArray);
// console.log(booleanArray);

type UserObject = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
};
const user: GenericArray<UserObject> = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    isActive: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    isActive: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 28,
    isActive: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 28,
    isActive: true,
  },
];
// console.log(user);

type GenericObject = {
  id: number;
  name: string;
  age: number;
};

// Generic Tuple
type GenericTuple<T, U> = [T, U];
const userTuple: GenericTuple<string, number> = ["Alice", 28]; // using Generic Tuple type

const userTuple2: GenericTuple<string, GenericObject> = [
  "Bob",
  { id: 2, name: "Bob", age: 25 },
]; // using Generic Tuple type

const userTuple3: GenericTuple<GenericObject, GenericObject> = [
  { id: 1, name: "Charlie", age: 30 },
  { id: 2, name: "Dave", age: 35 },
]; // using Generic Tuple

console.log(userTuple3);
