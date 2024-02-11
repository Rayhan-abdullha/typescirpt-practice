let counter: number = 10
let nameJohn: string = 'John';
let age: number = 25;
let active: boolean = true;
let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let person1: {
    name: string;
    age: number
 };
 
 person1 = {
    name: 'John',
    age: 25
}; // valid
 
let greeting: (name: string) => void;
greeting = function () {
    console.log('Hello');
};