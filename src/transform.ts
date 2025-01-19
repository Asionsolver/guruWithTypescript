type CustomUser = {
  id: number;
  firstName: string;
  lastName?: string;
  age: number;
  score?: number;
};

type CustomUserKey = keyof CustomUser;

type FilterCriteria = {
  [key in CustomUserKey]?: CustomUser[key];
};

type FieldsToAggregate = "age" | "score";

type TransformUser = {
  id: number;
  fullName: string;
  age: number;
  score?: number;
};

function processUserData(
  users: CustomUser[],
  criteria: FilterCriteria = {},
  fieldsToAggregate: FieldsToAggregate[] = []
) {
  const filteredUsers = users.filter((user) => {
    return Object.keys(criteria).every(
      ([key, value]) => user[key as CustomUserKey] === value
    );
  });

  const aggregatedData = fieldsToAggregate.reduce((acc, field) => {
    acc[field] = filteredUsers.reduce((sum, user) => {
      if (user[field] && typeof user[field] === "number") {
        return sum + user[field];
      }
      return sum;
    }, 0);
    return acc;
  }, {} as Record<FieldsToAggregate, number>);

  const transformedData = filteredUsers.map((user) => ({
    id: user.id,
    fullName: `${user.firstName} ${user.lastName ?? ""}`.trim(),
    ...aggregatedData,
  }));

  return transformedData;
}
const users = [
  { id: 1, firstName: "Alice", lastName: "Doe", age: 25, score: 90 },
  { id: 2, firstName: "Bob", age: 30 }, // Missing 'lastName' and 'score'
  { id: 3, firstName: "Charlie", lastName: "Brown", age: 25, score: 80 },
];

// console.log(processUserData(users));
console.log(processUserData(users, { age: 25 }, ["age", "score"]));
