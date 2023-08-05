// ======================= Function =========================
console.log("======================= Function =========================");

// ======================= Function Without params =========================
// function  => keyword
// functionName => This is user defined name of the function

// Old Syntax ES5 syntax
// This is known as function declaration syntax
function functionName() {
    // This is known as function definition syntax
    console.log("Function Called");
}
// Calling of function
functionName();

// New Syntax ES6 syntax
// This is known as function declaration syntax
const arrowFunctionName = () => {
    // This is known as function definition syntax
    console.log("Arrow Function Called");
}
// Calling of function
arrowFunctionName();


// ======================= Function with params =========================

function functionWithParamsName(x, y) {
    console.log("functionWithParamsName Called", x, y);
}


const arrowFunctionWithParamsName = (x, y) => {
    console.log("arrowFunctionWithParamsName Called", x, y);
}
arrowFunctionWithParamsName(1, 3);


// Function can return any data type i.e Object, Array, Number, string , function, boolean etc.
function functionReturningFunction(x, y) {
    console.log("functionReturningFunction Called", x, y);

    // Here we are returning a function Note: This function is declared here not called
    return () => {
        console.log("I am returning from functionReturningFunction");
    }
}

const result = functionReturningFunction(1, 2); // Result will hold ref to the returned function
/* 
    const result = functionReturningFunction(1, 2);

    The above syntax is same as  
    const result = () => {
        console.log("I am returning from functionReturningFunction");
    }

*/
// Note: The returned function is called here.
result();

// ======================= let vs var using functions =========================

const functionHavingScopedVariable = () => {
    let x = 10;
    var y = 20;
    console.log("functionHavingScopedVariable called x: ", x);
    console.log("functionHavingScopedVariable called y: ", y);
}
// console.log("functionHavingScopedVariable called OutSide x: ", x);
// console.log("functionHavingScopedVariable called OutSide y: ", y);
functionHavingScopedVariable();

/*

var y = 20; // This is having scope all across the file. : Say Global scope 
const functionHavingScopedVariable = () => {
    let x = 10;
    console.log("functionHavingScopedVariable called x: ", x);
    console.log("functionHavingScopedVariable called y: ", y);
}
// console.log("functionHavingScopedVariable called OutSide x: ", x);
console.log("functionHavingScopedVariable called OutSide y: ", y);
functionHavingScopedVariable();

const functionHavingScopedVariable = () => {
    let x = 10;
    console.log("functionHavingScopedVariable called x: ", x);
    console.log("functionHavingScopedVariable called y: ", y);
}
// console.log("functionHavingScopedVariable called OutSide x: ", x);
console.log("functionHavingScopedVariable called OutSide y: ", y);
functionHavingScopedVariable();
var y = 20;

let x = 10;
const functionHavingScopedVariable = () => {
    console.log("functionHavingScopedVariable called x: ", x);
    console.log("functionHavingScopedVariable called y: ", y);
}
// console.log("functionHavingScopedVariable called OutSide x: ", x);
console.log("functionHavingScopedVariable called OutSide y: ", y);
functionHavingScopedVariable();
var y = 20;

const functionHavingScopedVariable = () => {
    console.log("functionHavingScopedVariable called x: ", x);
    console.log("functionHavingScopedVariable called y: ", y);
}
// console.log("functionHavingScopedVariable called OutSide x: ", x);
console.log("functionHavingScopedVariable called OutSide y: ", y);
functionHavingScopedVariable();
let x = 10;
var y = 20;

*/

// Conclusions of the above functions: let throws error.
/*
    Sequence to call let correctly: Declare or assign And then only print or use the value.

    let declareVariable;
    or 
    let declareAndInitializeVariable = 10; 

    console.log(declareAndInitializeVariable);

*/


// ======================= Scope of functions =========================

/*
    ==== Outside the function Scope ====
    function functionName() {
        ==== START of function Scope ====
    
        ==== END of function Scope ====
    }
    ==== Outside the function Scope ====

*/

function functionHavingScopedVariable2() {
    let scopedVariable = 20;
    var scopedVariable2 = 50;

    console.log(scopedVariable);
    console.log(scopedVariable2);
}
functionHavingScopedVariable2();
console.log(scopedVariable2);
console.log(scopedVariable);