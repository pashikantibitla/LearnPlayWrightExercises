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

/*
=====================================
DETAILED EXPLANATION
=====================================
This file introduces basic JavaScript literals and the typeof operator.
A literal is a fixed value written directly in source code, not computed or stored in a variable.
The file demonstrates string, boolean, number (float), null, and undefined literals.
typeof is a unary operator that returns a string indicating the data type of its operand.

CODE BREAKDOWN
=====================================
1. let age = "pramod";
   - String literal assigned to variable age.
2. let isbook = true;
   - Boolean literal true assigned to isbook.
3. let pi = 3.14;
   - Floating-point number literal assigned to pi.
4. let nullvalue = null;
   - null literal representing intentional absence of value.
5. let undefinedValue;
   - Variable declared but not assigned; holds undefined by default.
6. console.log(typeof ...)
   - Inspects and prints the type of each variable.

KEY CONCEPTS
=====================================
- String Literal: Sequence of characters enclosed in single or double quotes.
- Boolean Literal: Represents true or false.
- Number/Float Literal: Represents numeric values, including decimals.
- null Literal: Represents the intentional absence of any object value.
- undefined: Indicates a variable has been declared but has not yet been assigned.
- typeof Operator: Returns the data type string (e.g., "string", "number", "boolean", "undefined", "object").

COMPARISON TABLE: Literals and their typeof Results
=====================================
| Literal Example    | typeof Result | Notes                          |
|--------------------|---------------|--------------------------------|
| "pramod"           | "string"      | Single or double quotes        |
| true               | "boolean"     | Only true or false             |
| 3.14               | "number"      | All numbers are type "number"  |
| null               | "object"      | Historic JS quirk/bug          |
| undefined          | "undefined"   | Unassigned variable default    |

REAL-WORLD USE CASES
=====================================
- Initializing test data with known literal values.
- Checking API response types using typeof for validation.
- Debugging unexpected values by logging their types.

COMMON MISTAKES
=====================================
- Confusing null with undefined (they are different types and meanings).
- Expecting typeof null to return "null" (it returns "object" due to a language bug).
- Declaring variables without initialization and forgetting they default to undefined.

KEY TAKEAWAY
=====================================
Know your literals and always verify types with typeof when debugging. Remember that null is intentional emptiness, while undefined is automatic emptiness.
*/