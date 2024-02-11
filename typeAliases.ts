type alphanumeric = string | number;
let input: alphanumeric;
input = 100; // valid
input = 'Hi'; // valid

type Person = {
    name: string
    age: number
}
const person: Person = {
    name: 'ronalod',
    age: 39
}