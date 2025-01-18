type Person = {
  id: number | string;
  name: string;
  age: number;
};

type Employee = Person & {
  role: "developer" | "designer" | "manager";
  salary: number;
};

type Customer = Person & {
  role: "customer";
  balance: number;
};

const user3: Customer = {
  id: 1,
  name: "John",
  age: 30,
  role: "customer",
  balance: 100,
};

const user4: Employee = {
  id: 2,
  name: "Jane",
  age: 25,
  role: "developer",
  salary: 5000,
};

type BaseProps = {
  id: number | string;
  className?: string;
};

type ButtonProps = BaseProps & {
  label: string;
  onClick: () => void;
};

type InputProps = BaseProps & {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};
