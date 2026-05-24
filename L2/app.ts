// Object, Array, Tuple, Enum

//Object
// const student: {
//     firstName: string;
//     age: number;
//     location: {
//         address: string
//     }
// } = {
//     firstName: "Rudra",
//     age: 24,
//     location: {
//         address: "Kolkata"
//     }
// }

// console.log(student.firstName);


//Array
// const student: {
//     firstName: string;
//     age: number;
//     skills: string[];
// } = {
//     firstName: "Rudra",
//     age: 24,
//     skills: ["Nodejs", "React"]
// }

// console.log(student);


//Tuple
// const person : {
//     name: string;
//     age: number;
//     skills: string[];
//     product: [number, string]
// } = {
//     name: "Patel",
//     age: 21,
//     skills: ["Nodejs", "React"],
//     product: [10, "Mackbook M2"]
// }


//enum
enum UserRole {ADMIN, AUTHOR, READ_USER_ONLY}

const person1: {
    name: string;
    age: number;
    skills: string[];
    product: [number, string];
    role: UserRole;
} = {
    name: "Patel",
    age: 21,
    skills: ["Nodejs", "React"],
    product: [10, "Mackbook M2"],
    role: UserRole.AUTHOR
}

if (person1.role === UserRole.AUTHOR) {
    console.log("author");
}


