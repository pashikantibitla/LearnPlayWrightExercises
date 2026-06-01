/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Arrow Functions (ES6) — concise syntax for writing function expressions.
 *
 * Functions/Methods Used:
 *   - doubleIt(n: number): number
 *     Description: An arrow function that doubles the given number.
 *     Input: One parameter `n` of type number, provided as a direct numeric value or variable.
 *     Return Type: number — the result of the expression `n * 2`.
 *
 *   - printIt(name: string): void
 *     Description: An arrow function that prints the given name to the console.
 *     Input: One parameter `name` of type string, provided as a direct string value or variable.
 *     Return Type: void — console.log returns undefined; the arrow function inherits that.
 *
 *   - add(a: number, b: number): number
 *     Description: A standard named function that returns the sum of two numbers.
 *     Input: Two parameters `a` and `b` of type number, provided as direct numeric values or variables.
 *     Return Type: number — the arithmetic result of `a + b`.
 *
 *   - add2(a: number, b: number): number
 *     Description: An arrow function that returns the sum of two numbers (concise body).
 *     Input: Two parameters `a` and `b` of type number, provided as direct numeric values or variables.
 *     Return Type: number — the expression `a + b` is implicitly returned in concise arrow syntax.
 *
 *   - say(): void
 *     Description: A standard named function that prints "Hi" to the console.
 *     Input: No input parameters.
 *     Return Type: void — no explicit return; implicitly returns undefined.
 *
 *   - say1(): void
 *     Description: An arrow function (concise body) that prints "Hi" to the console.
 *     Input: No input parameters.
 *     Return Type: void — console.log returns undefined.
 *
 *   - say2(): string
 *     Description: An arrow function (concise body) that returns the string "Hi".
 *     Input: No input parameters.
 *     Return Type: string — the string literal "Hi" is implicitly returned.
 *
 *   - greet(name: string): string
 *     Description: An arrow function (block body) that builds and returns a greeting message.
 *     Input: One parameter `name` of type string, provided as a direct string value or variable.
 *     Return Type: string — the concatenated string "Hi" + name is explicitly returned.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Arrow Function Syntax: (params) => expression  OR  (params) => { ... }
 *   - Concise Body: When only a single expression exists, curly braces and `return` can be omitted.
 *   - Block Body: Curly braces required; explicit `return` keyword must be used.
 *   - Implicit Return: In concise syntax, the expression result is automatically returned.
 *   - this Binding: Arrow functions do NOT have their own `this`; they inherit from the parent scope.
 * ============================================================
 */

// Arrow Function (ES6)

// const greet = function (name1) {
//     return "Hi" + name1;
// }

// let r = greet("Pramod");
// console.log(r);

// const greet2 = (name1) => "Hi" + name1;
// let r2 = greet2("Pramod");
// console.log(r2);

// If you want to make a normal function to arrow function.
// Remove the keyword function, remove the keyword return, remove the curly braces, and use the =>
//

const doubleIt = n => n * 2;
console.log(doubleIt(10));

const printIt = name => console.log(name);
printIt("Dutta");

function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;

function say() {
    console.log("Hi");
}

const say1 = () => console.log("Hi");
const say2 = () => 'Hi';

const greet = (name) => {
    const message = "Hi" + name;
    return message;
}