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
