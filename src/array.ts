const num: number[] = [
  1.347328947923874, 2.347328947923874, 3.347328947923874, 4.347328947923874,
  5.347328947923874,
];

// num.push("test"); // Error: Argument of type '"test"' is not assignable to parameter of type 'number'.
num.push(6);
num.push(6);

num.forEach((n) => {
  console.log(n.toFixed(2));
});

// console.log(num);

const testStr: string[] = num.map((n) => n.toFixed(2));

console.log(testStr);
