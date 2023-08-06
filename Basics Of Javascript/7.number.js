let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals

// Extra large or extra small numbers can be written with scientific (exponent) notation:
let z = 123e5;    // 12300000
let t = 123e-5;   // 0.00123


// Adding two numbers 
console.log(x + y);

// Adding number with string;

const numberVar = 3;
const stringVar = "3"

console.log(numberVar + stringVar);

// Type Casting of string to number
console.log(numberVar + Number(stringVar));
console.log(typeof stringVar);
console.log(typeof Number(stringVar));