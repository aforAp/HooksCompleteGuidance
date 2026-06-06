//primitives: number, string, boolean
//more complex types: arrays, objects
//function types, parameters

//Primitives
let age: number = 24;
let userName: string = 'Max';

let hobbies: string[];

hobbies = ['hello', 'world'];

type Person = {
    name: string,
    age: number
};

let person: Person;

person = {
    name: 'Max',
    age: 32
};


let people:Person[];

//Type inference

let course: string | number = "hello how are you?";
course = 12;

type Add = {
    a: number,
    b: number
}

function add(a: number, b: number): number {
  return a + b;
}


function print(value: any) {
    console.log(value);
}



