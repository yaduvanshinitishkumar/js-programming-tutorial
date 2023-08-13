// ============== Polymorphism ==============

class Car {
    moveForward() {
        console.log("moveForward with Speed: 5");
    }
}

class SUV extends Car {
    moveForward() {
        console.log("moveForward with Speed: 10");
    }
}

class Automatic extends SUV {
    moveForward() {
        console.log("moveForward with Speed: 100");
    }
}

const car = new Car();
const suvCar = new SUV();
const automaticCar = new Automatic();

// console.log("Calling car.moveForward()");
// car.moveForward();

console.log("Calling suvCar.moveForward()");
suvCar.moveForward();

console.log("Calling automaticCar.moveForward()");
automaticCar.moveForward();