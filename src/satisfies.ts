// type Config = {
//   host: string;
//   port: number;
//   useSSL?: boolean;
// };

// const config = {
//   host: "localhost",
//   port: 8080,
//   debug: true, // Extra property allowed
// } satisfies Config;

// Type of config is:
// {
//   host: string;
//   port: number;
//   debug: boolean;
// }

// Ensures that `config` conforms to `Config`, but `debug` is still allowed.
// console.log(config.debug); // ✅ Allowed

// type Action = { type: "ADD"; payload: number } | { type: "DELETE"; id: string };

// const action = {
//   type: "ADD",
//   payload: 5,
// } satisfies Action;

// // TypeScript ensures `action` matches the `Action` type while still allowing type inference.

// function handleAction(action: Action): void {
//   if (action.type === "ADD") {
//     console.log("Adding:", action.payload);
//   } else {
//     console.log("Deleting:", action.id);
//   }
// }

// handleAction(action); // ✅ No errors
type RolePermissions = {
  admin: string[];
  user: string[];
  guest: string[];
};

const permissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"],
  //   extraRole: ["unknown"], // Allowed but not part of `RolePermissions`
} satisfies RolePermissions;

// Type of permissions is validated against RolePermissions,
// but "extraRole" can still exist as an excess property.

// console.log(permissions.extraRole); // ✅ Allowed
// console.log(permissions.admin); // ✅ Allowed
