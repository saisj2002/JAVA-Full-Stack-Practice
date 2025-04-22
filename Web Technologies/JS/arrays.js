let data1 = [10, "sai", true, 'A'];
let data2 = [6.7, 9, "Hii"];

// Showing Elements
console.log(data1);
console.log(data2);
console.log(data1[2]);
console.log(data2[2]);

console.log();

// Length of Array
console.log("Total Length of Array 1:", data1.length);
console.log("Total Length of Array 2:", data2.length);

console.log();

// Inserting/Deleting At End
data1.push(33, 33, 33, 33);
data1.pop();
console.log(data1);
data1.push(data2);
console.log(data1);

console.log();

// Inserting/Deleting At Start
data1.shift();
console.log(data1);
data1.unshift(12);
console.log(data1);


// Element Operations
console.log(data1.includes("sai"));
console.log(data1.indexOf(33)+1);
console.log(data1.lastIndexOf(33)+1);

