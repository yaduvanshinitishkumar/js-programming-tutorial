// ======================= Object =========================

// Object can be const or var

var variableObject = {
    name: "Name",
    age: 24
}

// console.log(variableObject);
// console.log(variableObject.name);

variableObject = {
    name: "Ruchita",
}

// console.log(variableObject);
// console.log(variableObject.name);


const constantObject = {
    name: "Name",
    age: 24,
    "First Name": "First Name"
}

console.log(constantObject);
console.log(constantObject.name);

/*
const type object can't be re assigned a value

constantObject = {
    name: "Ruchita",
}

console.log(constantObject);
console.log(constantObject.name);

*/

constantObject.name = "Ruchita";
constantObject["First Name"] = "First Name Updated";

console.log(constantObject);


// How to add new key to an existing object
constantObject.newKey = "newKey";
constantObject["New Key"] = "New Key";
console.log(constantObject);