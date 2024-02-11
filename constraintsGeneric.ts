function myFunc<T extends MyInfoType>(obj: T) {
    return obj
}
type mandetoryType = {
    name: string;
    age: number;
}
type MyInfoType = {
    email: string;
    salary: number
}
const myInfo ={name: 'rayhan', age: 26, email: 'coder@gmail.com', salary: 20000}

const res = myFunc<MyInfoType>(myInfo)
console.log(res);

// constrains keyof
interface SakibInfoType {
    name: string;
    age: number;
    occupation: string;
    type: string
}
const sakib:SakibInfoType = {
    name: 'sakib',
    age: 36,
    occupation: 'crickter',
    type: 'all-rounder'
}

function getProprty<T, Y extends keyof T>(obj:T, key:Y) {
    return obj[key]
} 
console.log(getProprty(sakib, 'name'));
