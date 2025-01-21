const obj: Record<string, number> = {
  a: 1,
  b: 2,
  c: 3,
};

type UserRoles =
  | "admin"
  | "user"
  | "guest"
  | "superAdmin"
  | "editor"
  | "moderator"
  | "developer";

// type ActiveRoles = Exclude<UserRoles, "guest">;
// Alternative
type ActiveRoles = Extract<UserRoles, "guest" | "user" | "admin">;
const userPermissions: Record<UserRoles, string[]> = {
  admin: ["read", "write", "delete"],
  user: ["read", "view"],
  guest: ["read"],
  superAdmin: ["read", "write", "delete", "update"],
  editor: ["read", "write"],
  moderator: ["read", "write", "delete"],
  developer: ["read", "write", "delete", "update", "create"],
};

// console.log(userPermissions.admin); // ["read", "write", "delete"]

const myRecord: Record<string | number, string | number | boolean | string[]> =
  {
    1: "one",
    "2": "two",
    three: 3,
    four: true,
    5: ["five"],
    six: ["six"],
    seven: true,
  };

// console.log(myRecord[1]); // one
// console.log(myRecord[5]); // ["five"]
