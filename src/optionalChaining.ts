const objectA = {
  nestedProperty: {
    property: "value",
  },
};

// function printNestedProperty(obj) { //error: parameter 'obj' implicitly has an 'any' type
//   console.log(obj);
// }
// printNestedProperty(objectA);

// function printNestedProperty(obj: { nestedProperty: { property: string } }) {
//   console.log(obj.nestedProperty.property);
// }
// printNestedProperty(objectA);

// or
// function printNestedProperty(obj: any) {
//   if (obj && obj.nestedProperty && obj.nestedProperty.property) {
//     console.log(obj.nestedProperty.property);
//   } else {
//     console.log("nestedProperty or property not found");
//   }
// }

// simpler from of optional chaining
function printNestedProperty(obj: any) {
  if (obj?.nestedProperty?.property) {
    console.log(`name = ${obj.nestedProperty.property}`);
  } else {
    console.log(`name not found or undefined`);
  }
}

// printNestedProperty(objectA);
printNestedProperty(undefined);
printNestedProperty({
  aProperty: "another property",
});
printNestedProperty({
  nestedProperty: {
    property: null,
  },
});
printNestedProperty({
  nestedProperty: {
    property: "nestedPropertyName",
  },
});
