// ============== Encapsulation ==============

/*

    Encapsulation is a way to restrict the direct access to some components of an object, 
    so users cannot access state values for all of the variables/methods of a particular object. 
    Encapsulation can be used to hide both data members and data functions or methods 
    associated with an instantiated class or object.

*/
class RuchitaMaths {
    constructor(first, second) {
        console.log("main call ho raha hu");
        this.a = first;
        this.b = second;
    }
    addition() {
        console.log("main add kar hu");
        this.additionresult = this.a + this.b;

    }
    subtraction() {
        console.log("main minus kar raha hu");
        this.subtractionresult = this.a - this.b;
    }
    multiply() {
        console.log("main multiply kar raha hu");
        this.multiplyresult = this.a * this.b;
    }
    printResult() {
        console.log(this.additionresult);
        console.log(this.subtractionresult);
        console.log(this.multiplyresult);
    }
}
const question = new RuchitaMaths(2, 2);
const question2 = new RuchitaMaths(2, 4);
question.addition();
question2.addition();
question2.multiply();
question.subtraction();
question.multiply();
question2.subtraction();
question.printResult();

question2.printResult();
