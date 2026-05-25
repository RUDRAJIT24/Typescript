// interface Person {
//    name: string;
//    age:number;
//    greet(text: string): void; 
// }

// const user: Person = {
//     name: "Rudra",
//     age: 24,
//     greet(text) {
//         console.log(`${text} ${this.name}`);
//     }
// }

// console.log(user);


//optional
interface Named {
    readonly name: string;
    outputName?: string;
}

class Person implements Named {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}
