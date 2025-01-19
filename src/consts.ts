// const OrderStatus = {
//   PENDING: "PENDING",
//   CONFIRMED: "CONFIRMED",
//   DELIVERED: "DELIVERED",
//   CANCELED: "CANCELED",
// } as const;

// // type OderStatus = typeof OderStatus;
// // type OrderStatusKey = keyof OderStatus;

// function generateColorCodeForOder(status: keyof typeof OrderStatus) {
//   switch (status) {
//     case OrderStatus.PENDING:
//       return "#FFA500";
//     case OrderStatus.CONFIRMED:
//       return "#008000";
//     case OrderStatus.DELIVERED:
//       return "#0000FF";
//     case OrderStatus.CANCELED:
//       return "#FF0000";
//     default:
//       return "#000000";
//   }
// }

// console.log(generateColorCodeForOder("CANCELED"));

// const orders = [
//   {
//     id: 1,
//     status: OrderStatus.PENDING,
//   },
//   {
//     id: 2,
//     status: OrderStatus.CONFIRMED,
//   },
//   {
//     id: 3,
//     status: OrderStatus.DELIVERED,
//   },
//   {
//     id: 4,
//     status: OrderStatus.CANCELED,
//   },
// ];

// console.log(generateColorCodeForOder(orders[0].status));

const API_ROUTES = {
  USERS: "/api/users",
  PRODUCTS: "/api/products",
  ORDERS: "/api/orders",
} as const;

// Type of API_ROUTES is:
// {
//   readonly USERS: "/api/users";
//   readonly PRODUCTS: "/api/products";
//   readonly ORDERS: "/api/orders";
// }

function fetchFromApi(route: keyof typeof API_ROUTES): string {
  return API_ROUTES[route]; // Ensures type safety
}

// console.log(fetchFromApi("USERS")); // ✅ Allowed
// fetchFromApi("INVALID"); // ❌ Error: Argument of type '"INVALID"' is not assignable

const COLORS = ["red", "green", "blue"] as const;

// Type of COLORS is: readonly ["red", "green", "blue"]

type Color = (typeof COLORS)[number]; // "red" | "green" | "blue"

function setBackgroundColor(color: Color): string {
  console.log(`Setting background color to ${color}`);
  return color;
}

console.log(setBackgroundColor("red")); // ✅ Allowed
// setBackgroundColor("yellow"); // ❌ Error: Type '"yellow"' is not assignable to type '"red" | "green" | "blue"'
