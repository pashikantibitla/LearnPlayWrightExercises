/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Introduction to Functions in JavaScript — defining and calling a function.
 *
 * Functions/Methods Used:
 *   - greet(): void
 *     Description: A user-defined function that prints a greeting message to the console.
 *     Input: No input parameters (empty parentheses).
 *     Return Type: void (undefined) — no explicit return statement; console.log only prints.
 *
 *   - console.log(value: any): void
 *     Description: Prints the given value to the standard output (console).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 * Key Concepts:
 *   - Function Declaration: Using the `function` keyword to create a named function.
 *   - Function Call / Invocation: Executing a function by writing its name followed by parentheses.
 * ============================================================
 *
 * ============================================================
 * FUNCTION vs METHOD
 * ============================================================
 *
 * FUNCTION:
 *   - Description: A standalone block of code designed to perform a specific task.
 *   - Input: Receives input through parameters declared in its definition.
 *   - Return Type: Can return any data type (number, string, boolean, object, array, void).
 *   - Usage: Called independently by its name, e.g., greet(), add(2, 3).
 *   - Example: function greet() { console.log("Hi"); }
 *
 * METHOD:
 *   - Description: A function that is a property of an object. It operates on the data inside that object.
 *   - Input: Receives input through parameters AND has access to the object via `this`.
 *   - Return Type: Can return any data type; often returns the result of an operation on the object.
 *   - Usage: Called on an object using dot notation, e.g., arr.push(5), str.toUpperCase().
 *   - Example: let arr = [1, 2]; arr.push(3);  // push is a method of Array object.
 *
 * | Feature       | Function              | Method                          |
 * |---------------|-----------------------|---------------------------------|
 * | Belongs to    | Standalone / Global   | Belongs to an Object            |
 * | Call syntax   | functionName()        | objectName.methodName()         |
 * | `this` access | No / Global object    | Yes (refers to the object)      |
 * | Example       | greet()               | arr.push(), str.length()        |
 *
 * ============================================================
 * PARAMETER vs ARGUMENT
 * ============================================================
 *
 * PARAMETER:
 *   - Description: A variable listed in the function's DEFINITION. It acts as a placeholder
 *                  for the value that will be passed in when the function is called.
 *   - Input Type: Declared as part of the function signature; type is dynamic in JS.
 *   - Usage: Defined inside the parentheses of a function declaration/expression.
 *   - Example: In function greet(name) { ... },  `name` is the PARAMETER.
 *
 * ARGUMENT:
 *   - Description: The ACTUAL VALUE passed to the function when it is CALLED/INVOKED.
 *   - Input Type: A direct value, variable, or expression provided at call time.
 *   - Usage: Provided inside the parentheses when calling the function.
 *   - Example: In greet("Alice");  the string "Alice" is the ARGUMENT.
 *
 * | Term       | When is it used?        | Where does it appear?           |
 * |------------|-------------------------|---------------------------------|
 * | Parameter  | At function DEFINITION  | function greet(name) { ... }      |
 * | Argument   | At function CALL        | greet("Alice");                 |
 *
 * ============================================================
 * RETURN vs RETURN TYPE
 * ============================================================
 *
 * RETURN:
 *   - Description: A keyword (`return`) that immediately exits a function and optionally
 *                  sends a value back to the place where the function was called.
 *   - Input: Can accept a value, variable, or expression after the `return` keyword.
 *   - Usage: Written inside the function body: return expression;
 *   - Example: return a + b;
 *
 * RETURN TYPE:
 *   - Description: The DATA TYPE of the value that a function sends back after execution.
 *                  It describes WHAT KIND of value the caller receives.
 *   - Possible values: number, string, boolean, object, array, undefined, void (no return), function.
 *   - Usage: Determined by what value follows the `return` keyword; if no return, type is undefined.
 *   - Example: function add(a, b) { return a + b; }  // Return Type is number.
 *
 * | Term        | What is it?                      | Example                              |
 * |-------------|----------------------------------|--------------------------------------|
 * | return      | Keyword that sends value back    | return a + b;                        |
 * | Return Type | Data type of the returned value  | number, string, boolean, void, etc.  |
 *
 * NOTE: If a function has NO `return` statement, its Return Type is `undefined` (void).
 * ============================================================
 */

// Functions

// Define - Step 1
function greet() {
    console.log("Hi, how are you?")
}

// call - Step 2
greet();
