/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Comprehensive comparison of hoisting behavior for var, let, const, and functions
 *
 * Functions/Methods Used:
 *   - demoVarHoisting(): void
 *     Description: Demonstrates var hoisting inside a function and var leaking out of block scope.
 *     Input: Takes no parameters.
 *     Return Type: void — returns undefined; only logs to console.
 *   - sayHello(): void
 *     Description: A function declaration that is fully hoisted, allowing it to be called before its definition.
 *     Input: Takes no parameters.
 *     Return Type: void — returns undefined; only logs to console.
 *   - sayHi(): void (function expression)
 *     Description: Assigned to a var, it behaves like a var variable (hoisted as undefined, not callable before declaration).
 *     Input: Takes no parameters.
 *     Return Type: void — returns undefined; only logs to console.
 *   - conditionalDemo(flag: boolean): void
 *     Description: Shows the difference between var and let hoisting inside an if block.
 *     Input: Takes a boolean value provided as a direct value, variable, or expression.
 *     Return Type: void — returns undefined; only logs to console.
 *   - setTimeout(callback: Function, delay: number): number (commented in loops)
 *     Description: Schedules a callback to execute after a delay; used to demonstrate closure/loop scope issues.
 *     Input: Accepts a callback function and a delay in milliseconds provided as direct values, variables, or expressions.
 *     Return Type: number — returns a timeout identifier that can be used with clearTimeout.
 *   - console.log(message: any): void
 *     Description: Used extensively to log hoisting results and comparison outputs.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void — returns nothing; only outputs to console.
 *
 * Built-in Methods/Keywords:
 *   - var
 *     Description: Hoisted and initialized with undefined; function-scoped; leaks out of blocks.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding initialized with undefined when hoisted.
 *   - let
 *     Description: Hoisted but not initialized; block-scoped; throws ReferenceError in TDZ.
 *     Input: Takes a variable name and an optional initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a variable binding in the current block scope that starts in the Temporal Dead Zone.
 *   - const
 *     Description: Hoisted but not initialized; block-scoped; must be initialized at declaration; throws ReferenceError in TDZ.
 *     Input: Takes a variable name and a required initial value provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; creates a read-only binding in the current block scope.
 *   - function
 *     Description: Fully hoisted (declaration + body); safe to call before its definition.
 *     Input: Takes a function name, an optional parameter list enclosed in parentheses, and a function body wrapped in curly braces.
 *     Return Type: void (as a declaration statement) — does not return a value in the statement context; creates a named function object in the current scope.
 *   - typeof
 *     Description: Returns a string indicating the type of the operand; throws ReferenceError in TDZ for let/const.
 *     Input: Accepts a single operand provided as a variable, value, or expression.
 *     Return Type: string — returns the name of the data type (e.g., "number", "string", "undefined").
 *   - for loop
 *     Description: Demonstrates var leaking vs let creating a new binding per iteration.
 *     Input: Accepts three optional expressions (initialization, condition, increment) separated by semicolons.
 *     Return Type: void — does not return a value; controls iteration flow.
 *   - if statement
 *     Description: Conditional block used to show block scope differences between var and let.
 *     Input: Accepts a boolean condition provided as a direct value, variable, or expression.
 *     Return Type: void — does not return a value; controls execution flow based on the condition.
 *   - {} (block)
 *     Description: Creates a block scope where let and const respect boundaries but var does not.
 *     Input: Contains a sequence of statements wrapped in curly braces.
 *     Return Type: void — does not return a value; defines a new block scope.
 *   - .push(item: any): number
 *     Description: Array method that adds an element to the end; allowed on const-bound arrays because the binding is constant, not the contents.
 *     Input: Takes an item to add provided as a direct value, variable, or expression.
 *     Return Type: number — returns the new length of the array after the element is added.
 *
 * Key Concepts:
 *   - Hoisting: JavaScript's behavior of moving declarations to the top of their scope during compilation.
 *   - Temporal Dead Zone (TDZ): The span from block entry to let/const declaration where access is illegal.
 *   - Function declaration vs expression: Declarations are fully hoisted; expressions assigned to variables follow variable hoisting rules.
 *   - Scope differences: var is function-scoped; let and const are block-scoped.
 *   - const mutability: const prevents reassignment of the binding but does not make objects/arrays immutable.
 *   - Best practices: Prefer const by default, use let when reassignment is needed, avoid var in modern JavaScript.
 * ============================================================
 */

// =============================================================================
// HOISTING IN JAVASCRIPT: var vs let vs const
// =============================================================================
// Hoisting is JavaScript's default behavior of moving declarations to the top
// of their containing scope (global or function) during the compilation phase.
// However, the behavior differs significantly between var, let, and const.
// =============================================================================


// =============================================================================
// PART 1: var HOISTING
// =============================================================================
// "var" declarations are hoisted to the top of their scope and initialized
// with "undefined" automatically. This means you can access them before their
// declaration without getting a ReferenceError, but the value will be undefined.

console.log("========== var HOISTING ==========");

console.log(hoistedVar); // Output: undefined (no error!)
var hoistedVar = "I am a var variable";
console.log(hoistedVar); // Output: "I am a var variable"

// BEHIND THE SCENES - What JS Engine actually does:
// var hoistedVar;              // 1. Declaration hoisted and initialized with undefined
// console.log(hoistedVar);    // 2. undefined
// hoistedVar = "I am a var variable";  // 3. Assignment stays in place
// console.log(hoistedVar);    // 4. "I am a var variable"


// Example 2: var inside a function
function demoVarHoisting() {
    console.log(innerVar); // Output: undefined
    var innerVar = "Inside function";
    console.log(innerVar); // Output: "Inside function"
}
demoVarHoisting();

// Note: var is FUNCTION-SCOPED, not block-scoped
if (true) {
    var blockVar = "I leak out of block";
}
console.log(blockVar); // Output: "I leak out of block" - var ignores block boundaries!


// =============================================================================
// PART 2: let HOISTING
// =============================================================================
// "let" declarations are ALSO hoisted, but they are NOT initialized.
// They enter the "Temporal Dead Zone" (TDZ) from the start of the block
// until the declaration is encountered. Accessing them before declaration
// results in a ReferenceError.

console.log("\n========== let HOISTING ==========");

// console.log(hoistedLet); 
// ^ Uncommenting the above line will throw:
// ReferenceError: Cannot access 'hoistedLet' before initialization

let hoistedLet = "I am a let variable";
console.log(hoistedLet); // Output: "I am a let variable"


// Example 2: let with Temporal Dead Zone (TDZ)
{
    // TDZ starts here for 'score'
    // console.log(score);     // ReferenceError - Cannot access before initialization
    // typeof score;           // ReferenceError - even typeof fails in TDZ!
    let score = 100;         // TDZ ends here
    console.log("Score is:", score); // Output: 100
}


// Example 3: let in different scopes
let outer = "I am outer";
{
    // console.log(outer);   // ReferenceError! The 'outer' here refers to the
                           // block-scoped 'outer' below, NOT the global one.
    let outer = "I am block-scoped";
    console.log(outer);    // Output: "I am block-scoped"
}
console.log(outer);        // Output: "I am outer"


// Example 4: let is block-scoped (unlike var)
if (true) {
    let blockLet = "I stay in block";
}
// console.log(blockLet);  // ReferenceError: blockLet is not defined


// =============================================================================
// PART 3: const HOISTING
// =============================================================================
// "const" behaves exactly like "let" regarding hoisting:
// - It is hoisted to the top of its block scope
// - It enters the Temporal Dead Zone (TDZ)
// - Accessing before declaration throws ReferenceError
// ADDITIONAL RULE: const MUST be initialized at the time of declaration.

console.log("\n========== const HOISTING ==========");

// console.log(hoistedConst);
// ^ Uncommenting the above line will throw:
// ReferenceError: Cannot access 'hoistedConst' before initialization

const hoistedConst = "I am a const variable";
console.log(hoistedConst); // Output: "I am a const variable"

// const uninitializedConst;
// ^ Uncommenting the above line will throw:
// SyntaxError: Missing initializer in const declaration


// Example 2: const also has TDZ
{
    // console.log(PI);       // ReferenceError - TDZ violation
    const PI = 3.14159;     // TDZ ends here
    console.log("PI value:", PI); // Output: 3.14159
}


// Example 3: const is block-scoped
{
    const secret = "block secret";
}
// console.log(secret);     // ReferenceError: secret is not defined


// =============================================================================
// PART 4: FUNCTION HOISTING (for comparison)
// =============================================================================
// Function declarations are fully hoisted - both the declaration AND
// the function body are moved to the top. This is why you can call
// a function before it appears in the code.

console.log("\n========== FUNCTION HOISTING ==========");

sayHello(); // Works perfectly even before declaration!

function sayHello() {
    console.log("Hello from hoisted function!");
}

// BEHIND THE SCENES:
// function sayHello() { ... }   // Entire function body hoisted
// sayHello();                   // Call works fine


// Note: Function expressions (assigned to var/let/const) follow the
// hoisting rules of the variable they are assigned to!
// sayHi(); 
// ^ Uncommenting above throws TypeError: sayHi is not a function
// Because 'sayHi' is hoisted as 'undefined', and undefined() is not callable

var sayHi = function() {
    console.log("Hi!");
};

sayHi(); // Works fine after declaration


// =============================================================================
// PART 5: COMPARISON TABLE AND KEY DIFFERENCES
// =============================================================================

console.log("\n========== COMPARISON SUMMARY ==========");

/*
| Feature              | var                    | let                    | const                  |
|----------------------|------------------------|------------------------|------------------------|
| Hoisted?             | YES                    | YES                    | YES                    |
| Initialized when     | YES (with undefined)   | NO (TDZ)               | NO (TDZ)               |
| hoisted?             |                        |                        |                        |
| Scope                | Function-scoped        | Block-scoped           | Block-scoped           |
| Can redeclare?       | YES (in same scope)    | NO                     | NO                     |
| Can reassign?        | YES                    | YES                    | NO                     |
| Must initialize?     | NO                     | NO                     | YES                    |
| TDZ exists?          | NO                     | YES                    | YES                    |
| Access before decl?  | undefined              | ReferenceError         | ReferenceError         |
*/


// =============================================================================
// PART 6: PRACTICAL DEMONSTRATIONS
// =============================================================================

console.log("\n========== PRACTICAL EXAMPLES ==========");

// ----- Example 1: The Classic Interview Question -----
console.log("\n--- Example 1: Loop with var ---");
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log("var i:", i), 10);
}
// Output: 3, 3, 3 (because 'i' is function-scoped and shared)

console.log("--- Example 2: Loop with let ---");
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log("let j:", j), 20);
}
// Output: 0, 1, 2 (because 'j' is block-scoped and new for each iteration)


// ----- Example 3: Hoisting with conditionals -----
console.log("\n--- Example 3: Hoisting in conditionals ---");
function conditionalDemo(flag) {
    if (flag) {
        var a = "Inside if";
        let b = "Inside if";
    }
    console.log("var a:", a);   // undefined if flag is false, "Inside if" if true
    // console.log("let b:", b); // ReferenceError if flag is false
}
conditionalDemo(false); // var is hoisted, so 'a' exists (undefined), 'b' doesn't


// ----- Example 4: Temporal Dead Zone in practice -----
console.log("\n--- Example 4: TDZ demonstration ---");
{
    // From the opening brace { to let tdzVar declaration,
    // tdzVar is in the Temporal Dead Zone
    
    // typeof is usually safe, but NOT in TDZ:
    // console.log(typeof tdzVar);  // ReferenceError!
    
    let tdzVar = "now I'm safe";
    console.log(typeof tdzVar);     // Output: "string"
}


// ----- Example 5: const with objects/arrays -----
console.log("\n--- Example 5: const with mutable values ---");
const person = { name: "Alice", age: 25 };
// person = { name: "Bob" };     // TypeError: Assignment to constant variable
person.name = "Bob";              // ALLOWED - mutation is fine
person.age = 30;                  // ALLOWED
console.log(person);              // Output: { name: "Bob", age: 30 }

const numbers = [1, 2, 3];
// numbers = [4, 5, 6];          // TypeError
numbers.push(4);                  // ALLOWED
console.log(numbers);             // Output: [1, 2, 3, 4]


// =============================================================================
// PART 7: BEST PRACTICES
// =============================================================================

/*
1. ALWAYS declare variables at the top of their scope to minimize TDZ confusion.

2. Prefer 'const' by default - it prevents accidental reassignment.
   Use 'let' only when you need to reassign the variable.
   Avoid 'var' in modern JavaScript (ES6+).

3. Remember: hoisting moves DECLARATIONS, not INITIALIZATIONS.
   Good code:
       const greeting = "Hello";
       console.log(greeting);
   
   Bad code (relies on hoisting):
       console.log(greeting);
       var greeting = "Hello";

4. Function declarations are safe to call before their definition,
   but for readability, declare functions before using them.

5. In loops, always use 'let' or 'const' instead of 'var'
   to avoid closure-related bugs.
*/

console.log("\n========== END OF HOISTING RESEARCH ==========");

/*
=====================================
DETAILED EXPLANATION
=====================================
This comprehensive research file explores hoisting behavior for var, let, const, and functions.
It contains 7 parts: var hoisting, let hoisting (with TDZ), const hoisting, function hoisting,
a comparison table, practical demonstrations, and best practices.
The file is an excellent reference for understanding JavaScript's two-phase execution model.

CODE BREAKDOWN
=====================================
1. PART 1: var Hoisting
   - var is hoisted and initialized with undefined.
   - Access before declaration returns undefined, not an error.
   - var inside blocks leaks to the enclosing function.
2. PART 2: let Hoisting
   - let is hoisted but NOT initialized; it enters the TDZ.
   - Access before declaration throws ReferenceError.
   - let is block-scoped and safe for loops and conditionals.
3. PART 3: const Hoisting
   - const behaves like let but MUST be initialized at declaration.
   - Also has TDZ and is block-scoped.
4. PART 4: Function Hoisting
   - Function declarations are fully hoisted (body included).
   - Function expressions assigned to variables follow variable hoisting rules.
5. PART 5: Comparison Table
   - Summarizes hoisting, scope, redeclaration, and reassignment rules.
6. PART 6: Practical Examples
   - Loop closure bugs with var vs let, TDZ demonstrations, const mutability.
7. PART 7: Best Practices
   - Prefer const, use let for reassignment, avoid var, declare at top of scope.

KEY CONCEPTS
=====================================
- Hoisting: JavaScript moves declarations to the top of their scope during compilation.
- Temporal Dead Zone (TDZ): The span from block entry to let/const declaration where access is illegal.
- Function Declaration vs Expression: Declarations are fully hoisted; expressions follow variable rules.
- const Mutability: const prevents reassignment of the binding but does not make objects/arrays immutable.

COMPARISON TABLE: Quick Reference
=====================================
| Feature              | var                    | let                    | const                  |
|----------------------|------------------------|------------------------|------------------------|
| Hoisted?             | YES                    | YES                    | YES                    |
| Initialized when hoisted? | YES (undefined)   | NO (TDZ)               | NO (TDZ)               |
| Scope                | Function-scoped        | Block-scoped           | Block-scoped           |
| Can redeclare?       | YES                    | NO                     | NO                     |
| Can reassign?        | YES                    | YES                    | NO                     |
| Must initialize?     | NO                     | NO                     | YES                    |
| Access before decl?  | undefined              | ReferenceError         | ReferenceError         |

REAL-WORLD USE CASES
=====================================
- Interview preparation for JavaScript roles.
- Debugging closure bugs in loops with setTimeout.
- Choosing the right declaration keyword for configuration, counters, and constants.
- Refactoring legacy var-based code to modern ES6+ standards.

COMMON MISTAKES
=====================================
- Using var in loops with asynchronous callbacks (all callbacks share the same variable).
- Forgetting that const objects can still be mutated (push, pop, property changes).
- Calling function expressions before their assignment line.
- Assigning undefined manually instead of using null for intentional emptiness.

KEY TAKEAWAY
=====================================
Master hoisting and the Temporal Dead Zone to write bug-free JavaScript. Prefer const, use let when reassignment is needed, and avoid var entirely in modern code.
*/
