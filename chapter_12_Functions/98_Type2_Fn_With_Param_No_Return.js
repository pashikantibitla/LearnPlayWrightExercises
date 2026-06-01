/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Type-2 Function — with parameters, but no explicit return value.
 *
 * Functions/Methods Used:
 *   - greetByName(name: string): undefined
 *     Description: A user-defined function that prints a personalized greeting.
 *     Input: One parameter `name` of type string, provided as a direct string value or variable.
 *     Return Type: undefined — no explicit return statement; console.log only prints.
 *
 *   - begger(money: number): undefined
 *     Description: A user-defined function that prints a thank-you message with a money value.
 *     Input: One parameter `money` of type number, provided as a direct numeric value or variable.
 *     Return Type: undefined — no explicit return statement; console.log only prints.
 *
 *   - console.log(value1: any, value2: any): void
 *     Description: Prints one or more values to the standard output (console), separated by space.
 *     Input: Accepts any data type(s) as direct values, variables, or expressions.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Type-2 Function: Accepts input via parameters but does not return a meaningful value.
 *   - Parameter vs Argument: `name` and `money` are parameters (in definition); "Pramod", "Amit", 100 are arguments (at call time).
 *   - Implicit Return: Without `return`, the function result is always `undefined`.
 * ============================================================
 */

function greetByName(name) {
    console.log("Hi ", name);
}

greetByName("Pramod");
let result = greetByName("Amit");
console.log(result);


function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);
console.log(returnMesomething);
