/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Comprehensive guide to null vs undefined in JavaScript, including comparisons, typeof, JSON behavior, and practical patterns.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Outputs messages to the console for debugging and demonstration.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - greet(name: any): void
 *     Description: Logs the value of the name parameter; demonstrates missing function arguments defaulting to undefined.
 *     Input: Accepts any data type as a direct value, variable, or expression; if omitted, defaults to undefined.
 *     Return Type: void (undefined) — returns nothing; only logs to console.
 *   - doNothing(): undefined
 *     Description: A function with no return statement, implicitly returning undefined.
 *     Input: No parameters required.
 *     Return Type: undefined — implicitly returns undefined because there is no return statement.
 *   - isEmpty(value: any): boolean
 *     Description: Returns true if the value is strictly null or strictly undefined.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: boolean — returns true when the value is null or undefined, otherwise false.
 *   - displayMessage(message: any): void
 *     Description: Logs a message to the console, using the nullish coalescing operator (??) to provide a default.
 *     Input: Accepts any data type as a direct value, variable, or expression; if null or undefined, a default message is used.
 *     Return Type: void (undefined) — returns nothing; only logs the final message to console.
 *   - JSON.stringify(value: any): string
 *     Description: Converts a JavaScript object into a JSON string; undefined properties are omitted, while null properties are preserved.
 *     Input: Accepts a JavaScript value (object, array, string, number, boolean, null) as a direct value, variable, or expression.
 *     Return Type: string — returns a JSON-formatted string representation of the input value.
 *   - typeof operand: string
 *     Description: Returns the data type of the operand as a string.
 *     Input: Accepts any variable, value, or expression as its operand.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "boolean", "undefined", "object").
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable.
 *     Input: Takes a variable name and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void — does not return a value; it binds the identifier to the value in the current scope.
 *   - function
 *     Description: Declares a named function.
 *     Input: Takes a function name, a parameter list (optional), and a function body containing statements.
 *     Return Type: void or any — returns undefined if no return statement is provided, otherwise returns the value specified by return.
 *   - return
 *     Description: Exits a function and optionally passes a value back to the caller.
 *     Input: Optionally accepts a value, variable, or expression to return.
 *     Return Type: any — returns the provided value to the caller; if no value is given, returns undefined.
 *   - == (loose equality)
 *     Description: Compares values after performing type coercion.
 *     Input: Takes two operands (values, variables, or expressions) on either side of the operator.
 *     Return Type: boolean — returns true if the values are equal after type coercion, otherwise false.
 *   - === (strict equality)
 *     Description: Compares both value and type without coercion.
 *     Input: Takes two operands (values, variables, or expressions) on either side of the operator.
 *     Return Type: boolean — returns true if the values and types are identical, otherwise false.
 *   - ?? (nullish coalescing)
 *     Description: Returns the right-hand operand when the left-hand operand is null or undefined.
 *     Input: Takes two operands (values, variables, or expressions) on either side of the operator.
 *     Return Type: any — returns the left-hand operand if it is not null or undefined, otherwise returns the right-hand operand.
 *
 * Key Concepts:
 *   - undefined: Automatically assigned by JavaScript when a variable is declared but not initialized, a function argument is missing, a non-existent object property is accessed, or a function has no return statement.
 *   - null: An intentional absence of value, explicitly set by the developer to indicate "no value".
 *   - typeof quirk: typeof null returns "object", which is a long-standing JavaScript bug; typeof undefined returns "undefined".
 *   - Loose vs Strict equality: null == undefined is true because of type coercion, but null === undefined is false because their types differ.
 *   - JSON behavior: JSON.stringify removes undefined properties but keeps null properties.
 *   - Falsy values: Both null and undefined are falsy, but they are distinct from other falsy values like 0, false, or "".
 * ============================================================
 */

/*
    ============================================================
    NULL vs UNDEFINED in JavaScript - Complete Guide
    ============================================================
    
    Both null and undefined represent "empty" or "no value" states,
    but they are used in different situations.

    ------------------------------------------------------------
    | Feature          | undefined               | null        |
    ------------------------------------------------------------
    | Meaning          | Variable declared but   | Intentional |
    |                  | not assigned a value    | absence of  |
    |                  |                         | value       |
    |------------------------------------------------------------
    | Who sets it?     | JavaScript (automatic)  | Developer   |
    |                  |                         | (manual)    |
    |------------------------------------------------------------
    | Data Type        | undefined               | object      |
    |                  | (primitive)             | (primitive  |
    |                  |                         | but typeof  |
    |                  |                         | says object)|
    |------------------------------------------------------------
    | Use case         | Uninitialized variables | Resetting   |
    |                  | Missing function args   | a variable  |
    |                  | Object property absent  | intentionally|
    |------------------------------------------------------------
    | == comparison    | true (loosely equal)    | true        |
    | === comparison   | false (strictly equal)  | false       |
    ------------------------------------------------------------

*/

// ============================================================
// 1. UNDEFINED - JavaScript Sets This Automatically
// ============================================================

// A variable is declared but not assigned any value
let userName;
console.log("1. Declared but not assigned:", userName); // undefined

// A function parameter that wasn't provided
function greet(name) {
    console.log("2. Missing parameter:", name); // undefined
}
greet();

// Accessing a property that doesn't exist in an object
let person = { age: 25 };
console.log("3. Missing property:", person.name); // undefined

// A function that doesn't return anything
function doNothing() {
    // no return statement
}
console.log("4. No return value:", doNothing()); // undefined

// Accessing an array element that doesn't exist
let fruits = ["apple", "banana"];
console.log("5. Missing array element:", fruits[5]); // undefined


// ============================================================
// 2. NULL - Developer Sets This Intentionally
// ============================================================

// You explicitly set a variable to "nothing"
let selectedProduct = { id: 1, name: "Laptop" };
console.log("6. Product exists:", selectedProduct);

// Later, when user deselects the product
selectedProduct = null;
console.log("7. Product deselected:", selectedProduct); // null

// Clearing a value intentionally
let searchQuery = "JavaScript tutorials";
searchQuery = null; // User cleared the search
console.log("8. Cleared search:", searchQuery); // null


// ============================================================
// 3. TYPEOF - Checking the Data Type
// ============================================================

console.log("\n--- typeof checks ---");
console.log("typeof undefined:", typeof undefined);     // "undefined"
console.log("typeof null:", typeof null);               // "object" (JS bug since beginning!)

// This is a well-known JavaScript quirk/bug
// null is a primitive value, but typeof incorrectly returns "object"


// ============================================================
// 4. COMPARISON - == vs ===
// ============================================================

console.log("\n--- Comparisons ---");

// Loose equality (==) - checks value only
console.log("null == undefined:", null == undefined);   // true
// Reason: JavaScript considers them "similarly empty"

// Strict equality (===) - checks value AND type
console.log("null === undefined:", null === undefined); // false
// Reason: Different types (undefined vs object)


// ============================================================
// 5. SIMPLE MEMORY ANALOGY
// ============================================================

/*
    Think of a variable as a box:

    UNDEFINED = You have a box with a label on it,
                but nothing has been put inside yet.
                The box itself exists, but it's empty
                because no one filled it.

    NULL = You have a box that HAD something in it,
           but you intentionally emptied it and put
           a note inside saying "this is intentionally empty".

    Real-life example:
    - undefined = A coffee cup that was given to you empty (not filled yet)
    - null = A coffee cup that had coffee, but you drank it all 
             and placed it back empty on purpose
*/


// ============================================================
// 6. PRACTICAL EXAMPLES
// ============================================================

// Example 1: Checking if a value is "empty" in either way
function isEmpty(value) {
    return value === null || value === undefined;
}

console.log("\n--- isEmpty function ---");
console.log(isEmpty(null));        // true
console.log(isEmpty(undefined));   // true
console.log(isEmpty(""));          // false (empty string is different!)
console.log(isEmpty(0));           // false (0 is a valid value!)
console.log(isEmpty(false));       // false (false is a valid value!)

// Example 2: Default values (common pattern)
function displayMessage(message) {
    // If message is undefined or null, use default
    let finalMessage = message ?? "No message provided";
    console.log("Message:", finalMessage);
}

console.log("\n--- Default values ---");
displayMessage("Hello!");          // "Hello!"
displayMessage(undefined);         // "No message provided"
displayMessage(null);              // "No message provided"

// Example 3: JSON behavior
console.log("\n--- JSON behavior ---");
let data = {
    name: "John",
    middleName: null,      // intentionally no middle name
    nickname: undefined     // this will be removed in JSON!
};
console.log("Object:", data);
console.log("JSON string:", JSON.stringify(data));
// Output: {"name":"John","middleName":null}
// Notice: undefined property is completely removed, null stays!


// ============================================================
// 7. KEY TAKEAWAYS
// ============================================================

/*
    ✅ undefined = "I don't have a value yet" (JS says this)
    ✅ null = "I am choosing to have no value" (You say this)

    ✅ undefined is automatically assigned by JavaScript
    ✅ null must be manually assigned by the developer

    ✅ Both mean "empty" but undefined is accidental,
       null is intentional

    ✅ Always use === (strict equality) to avoid confusion

    ✅ In JSON: null is preserved, undefined is removed

    ✅ Both are falsy values (if (value) { } won't execute)

    ✅ Use null when you WANT to clear/reset something
    ✅ Let undefined happen naturally (don't assign it manually)
*/


// ============================================================
// 8. QUICK SUMMARY CODE
// ============================================================

console.log("\n========== SUMMARY ==========");

let notSet;                    // undefined - automatic
let empty = null;              // null - intentional

console.log("notSet:", notSet, "| type:", typeof notSet);
console.log("empty:", empty, "| type:", typeof empty);

console.log("null == undefined:", null == undefined, "(loosely equal)");
console.log("null === undefined:", null === undefined, "(strictly NOT equal)");

/*
=====================================
DETAILED EXPLANATION
=====================================
This file provides a comprehensive guide to null vs undefined in JavaScript.
Both represent "empty" states, but undefined is automatically set by JavaScript
while null is intentionally set by the developer to indicate "no value".
The file also covers typeof quirks, loose vs strict equality, JSON behavior,
nullish coalescing, and practical patterns for handling empty values.

CODE BREAKDOWN
=====================================
1. UNDEFINED scenarios:
   - Declared but unassigned variable.
   - Missing function parameter.
   - Non-existent object property.
   - Function with no return statement.
   - Out-of-bounds array access.
2. NULL scenarios:
   - Explicitly clearing a selected product.
   - Resetting a search query to empty.
3. typeof checks:
   - typeof undefined returns "undefined".
   - typeof null returns "object" (a well-known historical bug).
4. Comparisons:
   - null == undefined is true (loose equality with coercion).
   - null === undefined is false (strict equality checks type).
5. JSON behavior:
   - JSON.stringify removes undefined properties but preserves null.
6. Practical utilities:
   - isEmpty() checks for null or undefined.
   - displayMessage() uses nullish coalescing (??) for defaults.

KEY CONCEPTS
=====================================
- undefined: Automatically assigned by JS when a value is missing.
- null: Intentional absence of value, set by the programmer.
- typeof Quirk: typeof null returns "object" — a bug that cannot be fixed for compatibility.
- Loose vs Strict Equality: == coerces types; === checks both value and type.
- JSON Behavior: undefined is stripped, null is kept during serialization.
- Nullish Coalescing (??): Returns the right operand only when left is null or undefined.

COMPARISON TABLE: null vs undefined
=====================================
| Feature          | undefined               | null                      |
|------------------|-------------------------|---------------------------|
| Meaning          | Not assigned yet        | Intentionally empty       |
| Who sets it?     | JavaScript (automatic)  | Developer (manual)        |
| typeof result    | "undefined"             | "object" (bug)            |
| == comparison    | true (loosely equal)    | true (loosely equal)      |
| === comparison   | false                   | false                     |
| In JSON          | Removed                 | Preserved                 |

REAL-WORLD USE CASES
=====================================
- Setting a variable to null when a user deselects an item.
- Using undefined to detect missing function arguments.
- Building API payloads where null is meaningful but undefined should be omitted.
- Providing default values with ?? in configuration objects.

COMMON MISTAKES
=====================================
- Using == instead of === when comparing null/undefined.
- Manually assigning undefined instead of null (use null for intentional emptiness).
- Forgetting that 0, false, and "" are NOT null/undefined and will not trigger ??.
- Relying on typeof null to accurately identify null (use === null instead).

KEY TAKEAWAY
=====================================
undefined means "not yet given a value"; null means "deliberately emptied". Always use strict equality (===) for reliable comparisons, and use null to clear values intentionally.
*/
