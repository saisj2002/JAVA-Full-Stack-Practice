console.log("AGE");
console.log();

let age1 = 0;
console.log("- BY TERNERY OPERATOR");
console.log(age1>=18?"ELIGIBLE" : "NOT ELIGIBLE");

console.log()

console.log("- BY DEFAULT OPERATOR"); // checks for falsy values(0, null , not defined)
let age2 = age1 || 18;
console.log(age2);

console.log()

console.log("- BY GUARD OPERATOR");
let age3 = age1 ?? 18;
console.log(age3);