//Type Guards, Type Assertion


//Type Guards
// type Combinable = string | number;
// type Numeric = number | boolean;

// type Universal = Combinable & Numeric

// function add(a: Combinable, b: Combinable) {
//     //add type guards
//     if(typeof a === "string" || typeof b === "string") {
//         return a.toString() + b.toString();
//     }
//     return a + b
// }

// console.log(add(20, 30));
// console.log(add("20", 30));



//  Type Assertion / Type Casting

// const userInput = <HTMLInputElement>document.getElementById("user-input")!
const userInput = document.getElementById("user-input")! as HTMLInputElement
userInput.value = "Hello"