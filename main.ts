/**
 * Introduction to TypeScript
TypeScript is a superset of JavaScript.
TypeScript builds on top of JavaScript. First, you write the TypeScript code. Then, you compile the TypeScript code into plain JavaScript code using a TypeScript compiler.
Once you have the plain JavaScript code, you can deploy it to any environment that JavaScript runs.
TypeScript files use the .ts extension rather than the .js extension of JavaScript files.
TypeScript uses the JavaScript syntaxes and adds additional syntaxes for supporting Types.
If you have a JavaScript program that doesn’t have any syntax errors, it is also a TypeScript program. It means that all JavaScript programs are TypeScript programs. This is very helpful if you’re migrating an existing JavaScript codebase to TypeScript.
*/

function add(x: number, y: number):number {
    return x + y;
 }