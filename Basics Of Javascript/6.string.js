// ======================= String =========================

// String declarations
const myVariable = "Name";
//  String length
console.log(myVariable.length);

// String Interpolation
const firstName = "Ruchita";
const lastName = "Duggal";


const fullName = firstName + " " + lastName;
console.log(fullName);

// Advance syntax for string interpolation

const completeName = `${firstName} ${lastName}`;
console.log(completeName);

// Escape Character
/*
    \ Backslash says while compiling ignore the very next symbol and while executing (Printing) use it.

*/
const paragraph = "He said \"I am going to home\". \" \" ";
console.log(paragraph);


const whenWeHaveToPrintSlashAsWell = "The character \\ is called backslash."
console.log(whenWeHaveToPrintSlashAsWell);

/* 
    \b	Backspace
    \f	Form Feed
    \n	New Line
    \r	Carriage Return
    \t	Horizontal Tabulator
    \v	Vertical Tabulator
*/

// console.log("Something \n testing")
// console.log("Something \r testing")

// ======================= String Methods =========================


console.log("======================= String Methods =========================");
let test = " 1234 "
console.log(test);
console.log(test.length);
// test = test.trim();
// console.log(test.length);

test = test.trimStart();
console.log(test);
console.log(test.length);

test = test.trimEnd();
console.log(test);
console.log(test.length);


const splittingStringVariable = "Hi I am Ruchita Kutti."
console.log(splittingStringVariable.split(" "));
console.log(splittingStringVariable.split("h"));
console.log(splittingStringVariable.split("i"));
console.log(splittingStringVariable.split("I"));

console.log(splittingStringVariable.slice(1)); // Remove the number of char


// Addition of two string

const string1 = "First";
const string2 = "Second";

console.log(string1 + " " + string2);
console.log(string1.concat(string2));


// Adding number with string;

const numberVar = 3;
const stringVar = "3"

console.log(numberVar + stringVar);

// Type Casting of number to  string
console.log(typeof (numberVar))
console.log(typeof (numberVar.toString()))
console.log(numberVar.toString() + stringVar);