let firstName = "Sai";
let middleName = " Pramod";
let lastName = " Jawake.";

let fullName = firstName.concat(middleName, lastName);
let fullNameArray = fullName.split("");

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.startsWith("S"));
console.log(fullName.endsWith("."));
console.log(fullName.substring(4, 10));
console.log("             Sai Pramod Jawake.           ".trim());
console.log(fullNameArray);
console.log(fullNameArray.sort((a, b) => a.localeCompare(b)));
console.log(fullNameArray.sort((a, b) => b.localeCompare(a)));