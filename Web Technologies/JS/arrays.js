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

console.log();

// Element Operations
console.log(data1.includes("sai"));
console.log(data1.indexOf(33) + 1);
console.log(data1.lastIndexOf(33) + 1);

console.log();

// Splice
console.log("Normal:", data1);
data1.splice(2, 0, 101);
console.log("Added 101 at second position:", data1);
data1.splice(1, 2, 1, 8);
console.log("Added 1, 8 at 1st position and also deleted 2 elements from 1st position:", data1);

console.log();

// Slice
console.log(data1);
console.log(data1.slice(3, 8));
data1.pop();
console.log(data1);
console.log(data1.slice(-5, -2));
console.log(data1);
console.log(data1.slice(-4));

console.log();

// Loop
console.log("ELEMENTS");
for (let element of data1) {
    console.log(element);
}
console.log("INDEXES");
for (let element in data1) {
    console.log(element);
}
console.log("INDEXES AND ELEMENTS");
for (let element in data1) {
    console.log("  ", element, "   -    ", data1[element]);
}

console.log();

// Table
console.table([data1]);

console.log();

// For Each
console.log("Via forEach =");
console.log("Index", "Values");
data1.forEach((val, ind) => {
    console.log(`  ${ind}     ${val}`);
});

console.log();

// Map
console.log("Via map =");
console.log("Index", "Values");
data1.map((val, ind) => {
    console.log(`  ${ind}     ${val}`);
});

let newArray = data1.map((val) => {
    return val * val
});

console.log(newArray);

console.log();

// Sorting Numbers
let data3 = [67, 84, 23, 1, 4, 5, 90, 33, 22, 82, 40];
let data4 = [67, 84, 23, 1, 4, 5, 90, 33, 22, 82, 40];

let sortedArrayFromBiggerToSmaller = data3.sort((a, b) => b - a);
let sortedArrayFromSmallerToBigger = data4.sort((a, b) => a - b);

console.log("From Bigger to Smaller:", sortedArrayFromBiggerToSmaller);
console.log("From Smaller to Bigger:", sortedArrayFromSmallerToBigger);



// Sorting Strings
let data5 = ["SAI", "SAMEER", "AKASH", "DIGVIJAY", "ADITYA", "ABHISHEK"];
let data6 = ["SAI", "SAMEER", "AKASH", "DIGVIJAY", "ADITYA", "ABHISHEK"];

let StringsortedArrayFromBiggerToSmaller = data5.sort((a, b) => b.localeCompare(a));
let StringsortedArrayFromSmallerToBigger = data6.sort((a, b) => a.localeCompare(b));

console.log("From Bigger to Smaller:", StringsortedArrayFromBiggerToSmaller);
console.log("From Smaller to Bigger:", StringsortedArrayFromSmallerToBigger);


console.log();









