/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Strict Equality (===) vs Loose Equality (==)
 * 
 * Built-in Methods/Keywords Used:
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Loose Equality (==): Compares values after performing type coercion (converting operands to a common type).
 *   - Strict Equality (===): Compares both value and data type without type coercion.
 *   - Type Coercion Examples: 0 == "" is true because "" is coerced to 0; true == 1 is true because true is coerced to 1.
 *   - Inequality Operators: != is the loose inequality counterpart; !== is the strict inequality counterpart.
 * ============================================================
 */

// // number == string
console.log(42 == "42"); // == -> loose compasion
console.log(42 === "42"); //data type and converconsoleted value
// console.log(42 == "45"); //value different


console.log(5 === 5);
console.log(5 === "5");

console.log(5 == 5);
console.log(5 == "5");

console.log(0 == ""); // ?  "" = conveted to 0 - checked by the loose
console.log(0 === ""); 


console.log(true == 1);
console.log(false == 0);
console.log(true == "1");
console.log(true == 2);


console.log(5 != "5"); // false , 5 = int, "5" string, both of them are not equal? - lose couple
console.log(5 !== "5"); // true ( value, dataType)
//console.log(5 !=== "5"); This doesn't excit


// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.
