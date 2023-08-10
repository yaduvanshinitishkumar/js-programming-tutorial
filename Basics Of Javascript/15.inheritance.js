class Car {
    constructor() {
        console.log("Car constructor");

        this.numberOfWheels = 4; 
        this.numberOfDoors = 5;
        this.color = "white";
        this.passengerSeat = 7;
        Car.wheelColor = "#000000";
    }

    // Methods =================================================================
    moveForward() {
        console.log("moveForward");
    }

    // getter methods =================================================================
    // If we add get keyword in front of any method which just returns the value it can be called as a instance property
    get getNumberOfWheels() {
        return this.numberOfWheels;
    }

    setNumberOfWheels(value) {
        this.numberOfWheels = value;
    }

    moveBackward() {
        console.log("moveBackward");
    }

    openTheDoor() {
        console.log("openTheDoor");
    }

    static iAmStaticMethod() {
        console.log("iAmStaticMethod");
    }
}

class SUV extends Car {
    constructor() {
        super(); // super means the parent of the current class. Here parent is Car.
        // When do we need to call super() ? : When we do some operations inside the constructor of the current class. And super() should be the very first line in the constructor
        console.log("SUV constructor");
    }
}

class Automatic extends Car {

}

const car = new Car();
const suvCar = new SUV();
const automaticCar = new Automatic();

// Method is always called with methodName() <- this common bracket indicates that the method is called
car.setNumberOfWheels(50);

// Property is always called without ().

// getter is called here like a property, but is defined as a method with get keyword in front of the it.
// If we add get keyword in front of any method which just returns the value it can be called as a instance property
console.log(car.getNumberOfWheels);

car.setNumberOfWheels(60)
console.log(car.getNumberOfWheels);