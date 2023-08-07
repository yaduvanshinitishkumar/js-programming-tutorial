// ======================= Loops =========================

// For loop
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (initialValue, condition , updateIndex)

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Index: ${index} Element: ${element}`);
}

// While loop

// Condition is checked before
console.log("While loop");

let index = 0;
while (index !== 9) {
    console.log(index);
    index++;
}

// Do while loop
// Condition is checked after
console.log("Do while loop");
let index2 = 0;
do {
    console.log(index2);
    index2++;
} while (index2 !== 1)

console.log("For Each Loop");

// For Each Loop
array.forEach(function (element) {
    console.log(element);
})
console.log("For Each Loop With Index");

// array.forEach(function (element,index) { 
//     console.log(`Index: ${index} Element: ${element}`);
// })

array.forEach((element, index) => {
    console.log(`Index: ${index} Element: ${element}`);
})

// For of loop

// for (const item of array) {
//     console.log(item);
// }

const userData = {
    name: "Ruchita",
    age: 25,
}

const array2 = [userData, userData, userData, userData, userData, userData]

for (const element of array2) {
    console.log(`Name: ${element.name} Age: ${element.age}`)
}