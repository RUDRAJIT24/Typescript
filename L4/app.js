"use strict";
//Functions return type
// function add(num1: number, num2: number): number {
//     return num1 + num2 //return 30
// }
// console.log(add(10, 20))
// function greet(name: string): void {
//     console.log(`Hi, ${name}`);
// }
// let combinedFunction: (a: number, b: number) => number
// combinedFunction = add //valid
// // combinedFunction = greet //invalid
// console.log(combinedFunction(100, 200));
//Function type & callbacks
function addHandle(num1, num2, cb) {
    const result = num1 + num2;
    cb(result);
}
addHandle(10, 20, (result) => {
    console.log(result);
});
