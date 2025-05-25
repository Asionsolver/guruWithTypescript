let anything: any;

anything = "Hello, world!"; // ✅ Valid

console.log((anything as string).length); // This is a type assertion
const kgToGrams = (value: number | string): number | string | undefined => {
  if (typeof value === "string") {
    // console.log(`Converting string value: ${value}`);
    const parsedValue = parseFloat(value) * 1000;
    // console.log(`Parsed value: ${parsedValue}`);
    return `${parsedValue} grams`;
  }
  if (typeof value === "number") {
    return value * 1000;
  }
};

// Example usage

const weightInGrams = kgToGrams(5) as number; // This is a type assertion

const weightInGramsString = kgToGrams("4.5") as string; // This is a type assertion

console.log(weightInGrams); // Outputs: 5000
console.log(weightInGramsString); // Outputs: 4500

// const invalidWeight = kgToGrams(true); // ❌ Error: Argument of type 'boolean' is not assignable to parameter of type 'number | string'.
const invalidWeightString = kgToGrams("invalid"); // ❌ Error: Argument of type 'string' is not assignable to parameter of type 'number | string'.
console.log(invalidWeightString); // Outputs: naN grams

type CustomError = {
  message: string;
  code: number;
  details?: string;
};

try {
  const result = kgToGrams("invalid");
} catch (error) {
  console.log((error as CustomError).code || 500); // This is a type assertion
  console.log((error as CustomError).message || "An error occurred"); // This is a type assertion
  console.log(
    (error as CustomError).details || "No additional details provided"
  ); // This is a type assertion
}
