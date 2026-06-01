/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Basic JavaScript literals and the typeof operator
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Outputs the specified value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - typeof operand: string
 *     Description: Unary operator that returns a string indicating the data type of the operand.
 *     Input: Accepts any variable, value, or expression as its operand.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "boolean", "undefined", "object").
 *
 * Key Concepts:
 *   - String literal: A sequence of characters enclosed in single or double quotes (e.g., "pramod", 'mounika').
 *   - Boolean literal: Represents true or false (e.g., true).
 *   - Number/Float literal: Represents numeric values, including decimals (e.g., 3.14).
 *   - null literal: Represents the intentional absence of any object value.
 *   - undefined: Indicates a variable has been declared but has not yet been assigned a value.
 * ============================================================
 */

let age = "pramod" ; //the string literal assigned to "age" variable 
let isbook = true ; // the boolean literal assigned to "isbook" variable
let pi = 3.14; //float literal assigned to "pi" variable
let name = 'mounika'; //sthe string vliterla assigned to "name" variable
let nullvalue = null; // the null value literal assigned to "nullValue" variable --> 'null' means varaible value is known befoer, after sometime it became null
let undefinedValue; // the undefined variable is declaration but not assigned, where literal value is not known

//typeOf operator --> gives type of variable
console.log(typeof age);
console.log(typeof isbook);
console.log(typeof pi);
console.log(typeof name)
console.log(typeof nullvalue)
console.log(typeof undefinedValue) 