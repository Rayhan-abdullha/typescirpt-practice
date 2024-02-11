interface PersonType {
    firstName: string;
    lastName: string;
    age?: number;
    readonly ssn: string;
}
function getFullName(person: PersonType) {
    return `${person.firstName} ${person.lastName}`;
}

let person:PersonType = {
    firstName: 'John',
    lastName: 'Doe',
    ssn: '171-28-0926'
};

console.log(getFullName(person));

// function type
interface StringFormat {
    (str: string, isUpper: boolean): string
}
let format: StringFormat;

format = function (str: string, isUpper: boolean) {
    return isUpper ? str.toLocaleUpperCase() : str.toLocaleLowerCase();
};

console.log(format('hi', true));