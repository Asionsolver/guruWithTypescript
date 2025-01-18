type ID = string | number; // Union Type

type Admin = {
  id: ID;
  role: "admin";
  fullControl: boolean;
};

type Manager = {
  id: ID;
  role: "manager";
};

type User = Admin | Manager;

function redirectUser(user: User) {
  if (user.role === "admin") {
    console.log("I have fullControl");
  } else {
    console.log("I don't have fullControl");
  }
}

const user: User = {
  id: "1",
  role: "admin",
  fullControl: true,
};

const user2: User = {
  id: 2,
  role: "manager",
};

// redirectUser(user);
// redirectUser(user2);

function formatValue(value: string | number): number | string {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
}

// console.log(formatValue("hello"));
// console.log(formatValue(10.1234));

type ErrorResponseType = {
  error: true;
  message: string;
};

type SuccessResponseType = {
  error: false;
  data: string;
};

type ApiResponseType = ErrorResponseType | SuccessResponseType;

function handleResponse(response: ApiResponseType) {
  if (response.error) {
    console.log(response.message);
  } else {
    console.log(response.data);
  }
}
const response2: ApiResponseType = {
  error: true,
  message: "Error",
};
const response: ApiResponseType = {
  error: false,
  data: "Hello World",
};

handleResponse(response2);
handleResponse(response);
