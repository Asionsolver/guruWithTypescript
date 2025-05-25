 type Admin = "admin";
type Users = "user";
type Guest = "guest";

// Conditional type to determine the role based on the provided types
type Role = Admin extends "admin"
  ? "admin"
  : Users extends "user"
  ? "user"
  : Guest extends "guest"
  ? "guest"
  : never;

type Delete = "delete";
type Read = "read";
type Write = "write";

// Conditional type to determine the action based on the provided types
type Permission = Admin extends "admin"
  ? Read extends "read"
    ? Write extends "write"
      ? Delete extends "delete"
        ? "all"
        : "You are not Admin"
      : "Guest"
    : "No Access"
  : "User";

interface Car {
  brand: string;
  model: string;
  year: number;
}
interface House {
  address: string;
  size: number; // in square feet
}
interface Yacht {
  name: string;
  length: number; // in feet
}
interface PrivateJet {
  model: string;
  capacity: number; // number of passengers
}
interface PrivateIsland {
  name: string;
  area: number; // in acres
}

type RichMan = {
  car: Car;
  house: House;
  yacht: Yacht;
  privateJet: PrivateJet;
  privateIsland: PrivateIsland;
};

type Types<T extends RichMan[keyof RichMan]> = T extends Car
  ? "Car"
  : T extends House
  ? "House"
  : T extends Yacht
  ? "Yacht"
  : T extends PrivateJet
  ? "PrivateJet"
  : T extends PrivateIsland
  ? "PrivateIsland"
  : never;

// Example usage
type MyRichMan = RichMan;
type Type = Types<MyRichMan[keyof MyRichMan]>;

type ResultOne = Types<MyRichMan["house"]>; // "House"
type ResultTwo = Types<MyRichMan["yacht"]>; // "Yacht"
type ResultThree = Types<MyRichMan["privateJet"]>; // "PrivateJet"

type Sheikh = {
  car: string;
  house: string;
  yacht: string;
  privateJet: string;
  privateIsland: string;
};
type TypesSheikh<T> = T extends keyof Sheikh ? "true" : "false";
// Example usage for Sheikh
type hasCar = TypesSheikh<"car">; // "true"
type hasHouse = TypesSheikh<"house">; // "true"
type hasYacht = TypesSheikh<"yacht">; // "true"
type hasPrivateJet = TypesSheikh<"privateJet">; // "true"
type hasPrivateIsland = TypesSheikh<"privateIsland">; // "true"
type hasBike = TypesSheikh<"bike">; // "false"
