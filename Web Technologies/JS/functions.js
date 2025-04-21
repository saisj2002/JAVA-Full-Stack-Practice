// Simple Function Calling
function a(){
    console.log("My Name is: ");
}

function b(){
    a();
    console.log("Sai");
}

b();

console.log();

// Calling For Value
function c(a, b){
    return a+b;
}

let result = c(20, 20);
console.log(result);

console.log();

// CALL BACK FUNCTION
function addition(x, y){
    console.log("Addition is: ", x+y);
}

function d(callByFunction){
    callByFunction(10, 20);
}

d(addition);

console.log();

// ARROW FUNCTION
let add=(v1, v2) => console.log("Addition: ",v1+v2);
let sub=(v1, v2) => console.log("Subtraction: ",v1-v2);
let mul=(v1, v2) => console.log("Multiplication: ",v1*v2);
let div=(v1, v2) => console.log("DIvision: ",v1/v2);

let performOperation=(parameter1, parameter2, parameter3) => parameter1(parameter2, parameter3);

performOperation(add, 20, 90);
performOperation(sub, 90, 70);
performOperation(mul, 2, 9);
performOperation(div, 20, 5);

console.log();

//