const createPromise = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "Hello, World!";
    // const data: string = "";
    if (data) {
      resolve(data);
    } else {
      reject("No data found");
    }
  });
};

const showData = async () => {
  try {
    const data: string = await createPromise();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

// showData();

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const getTodo = async (): Promise<Todo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const todo: Todo = await response.json();
  console.log("Todo:", todo);
  return todo;
};
getTodo();
