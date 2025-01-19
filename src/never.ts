// A function that always throws an error never returns a value. Hence, its return type is never.
function throwError(message: string): never {
  throw new Error(message);
}
// A function with an infinite loop never completes execution, so it has a never return type.

function infiniteLoop(): never {
  while (true) {
    console.log("This runs forever");
  }
}

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "triangle"; base: number; height: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side ** 2;
    case "triangle":
      return (shape.base * shape.height) / 2;
    case "rectangle":
      return shape.width * shape.height;
    default:
      const _exhaustiveCheck: never = shape; // Ensures all cases are handled
      throw new Error(`Unhandled shape kind: ${_exhaustiveCheck}`);
  }
}

const circle: Shape = { kind: "circle", radius: 10 };
console.log(getArea(circle));
