// ======================= Var Variables =========================
console.log("======================= Var Variables =========================")

// How to declare a Variable
var runTimeVariable; // default value is undefined : This Step is know has Declarations
console.log("Line: 6 => runTimeVariable", runTimeVariable);
console.log("Line: 7 => Type of runTimeVariable", typeof(runTimeVariable));

// Declare variable with initial value
var initialVariable = 10; // : This Step is know has Declaration & Initialization

// Initialize variable on Runtime
runTimeVariable = 20; // : This Step is know has Initialization

console.log("Line: 15 => runTimeVariable", runTimeVariable);
console.log("Line: 16 => Type of runTimeVariable", typeof (runTimeVariable));

// var types variables can be assigned with any value during runtime
runTimeVariable = 22;
runTimeVariable = "Ruchita";

runTimeVariable = 23.1; // double is also number type in javascript
console.log("Line: 23 => Type of runTimeVariable", typeof (runTimeVariable));
console.log("Line: 24 => runTimeVariable", runTimeVariable);

initialVariable = "Ruchita";
console.log("Line: 27 => Type of initialVariable", typeof (initialVariable));
// Variables don't have any fixed type

runTimeVariable = ["Ruchita", 2]; // Array Data type is Object type in javascript
console.log("Line: 31 => Type of runTimeVariable", typeof (runTimeVariable));
console.log("Line: 32 => runTimeVariable", runTimeVariable);

runTimeVariable = { "Name": "Ruchita", "class": "Programming", count: 2 }; // Object Or Map
console.log("Line: 35 => Type of runTimeVariable", typeof (runTimeVariable));
console.log("Line: 36 => runTimeVariable", runTimeVariable);

// ======================= Const Variables =========================
console.log("======================= Const Variables =========================")

const fixedValueVariable = 10; // : This Step is know has Declaration & Initialization
console.log("Line: 42 => fixedValueVariable", fixedValueVariable);
console.log("Line: 43 => Type of fixedValueVariable", typeof (fixedValueVariable));

fixedValueVariable = 23; // Constant variables cannot be reassigned
console.log("Line: 46 => fixedValueVariable", fixedValueVariable);
console.log("Line: 47 => Type of fixedValueVariable", typeof (fixedValueVariable));

// Note: const type variables always must have declaration and initialization

// ======================= let Variables =========================

console.log("It is same as var, but has one key difference that is scope of the variable, that we will study in later chapters");