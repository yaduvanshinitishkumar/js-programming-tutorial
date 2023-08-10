// ================================== Object =======================================


// const myObject = {
//     number: 1,
//     string: 'string',
//     boolean: false,
//     array: [],
//     object: {},
//     subOfTwoNumber: function (a, b) {
//         return a + b
//     },
// }

// console.log(myObject.subOfTwoNumber(1, 2));


// ================================== Class =======================================
class Car {
    constructor() {
        console.log("Car constructor");
        // Variables inside the class are called properties
        this.numberOfWheels = 4; // instance variable can be initialized and called with this keyword
        this.numberOfDoors = 5;
        this.color = "white";
        this.passengerSeat = 7;

        // Static methods can be defined by directly called upon Class Name. (Here: Car is the Class Name)
        Car.wheelColor  = "#000000";
    }

    // Methods =================================================================
    // Functions inside classes are called as methods
    // Instance methods
    moveForward() {
        console.log("moveForward");
    }

    moveBackward() {
        console.log("moveBackward");
    }

    openTheDoor() {
        console.log("openTheDoor");
    }

    // Static Methods =================================================================
    // A method can be made static by adding static keyword in front of the method name
    static iAmStaticMethod() {
        console.log("iAmStaticMethod");
    }
}

// harrier: is Object of Car Class
// harrier: Has blueprint of Car Class
// Here new Car() syntax will call the constructor of the Car class
const harrier = new Car(); // Instance variable will have all the non static methods and properties

// console.log(harrier instanceof Car);
console.log("color",harrier.color);
console.log("numberOfDoors", harrier.numberOfDoors);

harrier.moveForward();
harrier.moveBackward();

// harrier.wheelColor : will be undefined as wheelColor is static property and instance variable harrier can only access non static properties
console.log(harrier.wheelColor);
// harrier.iAmStaticMethod();

// iAmStaticMethod: is Static method
Car.iAmStaticMethod();

// wheelColor: static property can be called directly upon Class name : (here : Car is class name)
console.log(Car.wheelColor);
