
let result: number | string;
result = 10; // OK
result = 'Hi'; // also OK

function add(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

function add4(a: number | string, b: number | string): number | string | undefined {
    if (typeof a === 'number' && typeof b === 'number') {
        return a +b
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a +b
    }
}
add4(2, 4)