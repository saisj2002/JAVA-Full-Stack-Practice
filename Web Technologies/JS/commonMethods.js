let firstName = "Sai";
let middleName = " Pramod";
let lastName = " Jawake.";

let data = [2,4,1,5,3,7,6,9,8,0];

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
console.log(data.sort((a, b) => a-b));
console.log(data.sort((a, b) => b-a));