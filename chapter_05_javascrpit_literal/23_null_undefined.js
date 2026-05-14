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
