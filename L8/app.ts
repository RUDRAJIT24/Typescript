//Generics

type Person = {
    name: string;
    age: number;
}

const Boy: Person = {
    name: "Virat",
    age: 37
}

const children: Array<Person> = [{name: "Vivek", age: 12}];
console.log(children);


