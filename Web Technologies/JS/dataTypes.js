let a = 'sai';
let b = 111;
let c = 'jawake'
let d = 222

console.log(a + b); // concatineted
console.log(b + a); // concatineted
console.log(a + c); // concatineted
console.log(d + b); // addition

console.log(a + b +c); // concatineted
console.log(d + b +c); // addition & concatineted
console.log(a + b +d); // concatineted

console.log(typeof(a)); // string
console.log(typeof(b)); // number
console.log(typeof(c)); // string
console.log(typeof(d)); // number

console.log(typeof(a+b)); // string
console.log(typeof(d+b)); // number
console.log(typeof(a+b+c)); // string
console.log(typeof(d+b+a)); // string
console.log(typeof(a+d+b)); // string

let x = 10 // changable // scope oriented
var y = 10 // changable // No scope oriented
const z = 10 // unchangable // scope oriented

if(x==10){
    let x=11
    console.log(x);
    var y=11
    console.log(y);
}

console.log(x); 
console.log(y);

console.table([a,b,c,d,z]);



console.log(typeof a+b); //string111
console.log(typeof b+c); //numberjawake
console.log(typeof c+d); //string222
console.log(typeof d+b); //number111







