type Car = {
  brand: string;
  model: string;
  year: number;
};

const car: Car = {
  brand: "Ford",
  model: "Fiesta",
  year: 2019,
};

// console.log(car);

type Object = {
  name: string;
  properties: InnerObject;
  age: number;
};

type InnerObject = {
  id: number;
  type: string;
};

const obj: Object = {
  name: "Object",
  properties: {
    id: 1,
    type: "Type",
  },
  age: 10,
};

function printObject(obj: Object) {
  // console.log(obj);
  console.log(`Object: ${JSON.stringify(obj)}`);
}

printObject(obj);


type EmployeeInfo = {
  name: string;
  age: number;
  designation: string;
  companyName: "Stack Learner" // type --> Literal Typea
}

const emmployeOne: EmployeeInfo ={
  name: "HM Nayem",
  age: 32,
  designation:"Full Stact Developer",
  // companyName: "Stack Learner Bangladesh" // error: Type '"Stack Learner Bangladesh"' is not assignable to type '"Stack Learner"'.
  companyName: "Stack Learner"
}
