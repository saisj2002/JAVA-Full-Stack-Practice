// Problem 1 = Find even Numbers from given array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number) => {
    if (number % 2 == 0) {
        console.log(number, "EVEN");
    } else {
        console.log(number, "ODD");
    }
});

console.log();

for (let element in numbers) {
    if (numbers[element] % 2 == 0) {
        console.log(numbers[element]);
    }
}

console.log();

let evenArray = numbers.filter((num) => {
    if (num % 2 == 0) return num
});
console.log(evenArray);

console.log();

console.log("EVEN NUMBERS TABLE");
console.table([evenArray]);

console.log();


// Problem 2 = Find total of number array

// let sumArray = numbers.map((sum)=>{
//     let additionOfArray = add + sum; 
//     return additionOfArray
// });
// console.log(sumArray);

let sum = 0, total = 0;
for (let element of numbers) {
    sum = sum + element;
};
console.log("By for & of:",sum);

let redu = numbers.reduce((pv, cv) => {
    return pv + cv
},);
console.log("By reduce:",redu);

console.log();

// Problem3: square all numbers in array and then add only even numbers

let data7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let summ = 0
// for(let element of data7){
//     let sq = element * element
//     if(sq%2==0){
//          summ = summ + sq;
//     }
// }

let summ = data7.map((element) => element * element)
                .filter((even) => even % 2 == 0)
                .reduce((num1, num2) => num1 + num2); // Chaining

console.log("Addition of squared even elements in array:",summ);