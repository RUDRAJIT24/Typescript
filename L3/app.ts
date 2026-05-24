//UNION
// LITERAL TYPES 
// TYPE ALIAS / CUSTOM TYPES


//UNION -> |
// function combine(num1: number | string, num2: number | string) {
//     let result;
//     if (typeof num1 === "number" && typeof num2 === "number") {
//         result = num1 + num2
//     } else {
//         result = num1.toString() + num2.toString()
//     }
//     return result
// }

// const sum = combine(10, 20)
// const combinedName = combine("Rudrajit", " Saha Roy")
// console.log(sum, combinedName);


// LITERAL TYPES 
// function combine(num1: number | string, num2: number | string, conversionType: "as-number" | "as-string") {
//     let result;
//     if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
//         result = +num1 + +num2
//     } else {
//         result = num1.toString() + num2.toString()
//     }
//     return result
// }

// const sum1 = combine("10", "20", "as-number")
// const sum2 = combine(10, 50, "as-number")
// const combinedName = combine("Rudrajit", " Saha Roy", "as-string")
// console.log(sum1, combinedName);



// TYPE ALIAS / CUSTOM TYPES
type Combinable = number | string
type ConversionType = "as-number" | "as-string"

function combine(num1: Combinable, num2: Combinable, conversionType: ConversionType) {
    let result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2
    } else {
        result = num1.toString() + num2.toString()
    }
    return result
}

const sum1 = combine("10", "20", "as-number")
const sum2 = combine(10, 50, "as-number")
const combinedName = combine("Rudrajit", " Saha Roy", "as-string")
console.log(sum1, combinedName);


type User = {
    name: string;
    age: number
}

const user: User = {
    name: "Rudra",
    age: 20
}