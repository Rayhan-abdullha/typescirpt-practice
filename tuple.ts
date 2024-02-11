/**
 * Introduction to TypeScript Tuple type
A tuple works like an array with some additional considerations:
The number of elements in the tuple is fixed.
The types of elements are known, and need not be the same.
 */

let skill: [string, number]
skill = ['messi', 36]

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0,'coder', 255, 255, 0.5]; // any type
headerColor = [0, 255, 255];