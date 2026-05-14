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
