/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: JavaScript variable declaration with let and const, and common naming conventions (cases).
 *
 * Functions/Methods Used:
 *   - console.log(message: any): undefined
 *     Description: Outputs the provided value(s) to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: undefined (void) — returns nothing; only outputs to console.
 *
 * Keywords Used:
 *   - let (keyword)
 *     Description: Declares a block-scoped local variable, optionally initializing it to a value.
 *     Input: Requires an identifier (variable name) and optionally an initial value assignment.
 *     Return Type: void (undefined) — the declaration itself does not return a value.
 *   - const (keyword)
 *     Description: Declares a block-scoped, read-only named constant that must be initialized at declaration.
 *     Input: Requires an identifier (constant name) and a mandatory initial value assignment.
 *     Return Type: void (undefined) — the declaration itself does not return a value.
 *
 * Key Concepts:
 *   - camelCase: First word lowercase, subsequent words capitalized (standard for JS variables and functions).
 *   - PascalCase: Every word starts with a capital letter (standard for JS classes and constructors).
 *   - snake_case: Words separated by underscores.
 *   - SCREAMING_SNAKE_CASE: All uppercase with underscores (convention for constants).
 *   - Hungarian Notation: Prefixing variable names with type indicators (older style).
 * ============================================================
 */

let name = "Pramod";
console.log("the value of name is : ", name);

let firstName = "Pramod";
console.log("the value of firstName is : ", firstName);
let lastName = "Dutta"; // CamelCase
console.log("the value of lastName is : ", lastName);

let first_name = "Amit"; // Snake Case
console.log("the value of first_name is : ", first_name);

// Naming Conventions (Cases)
// ============================================
// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
console.log("the value of userName is : ", userName);
let totalPrice = 99.99;
console.log("the value of totalPrice is : ", totalPrice);
let isLoggedIn = true;
console.log("the value of isLoggedIn is : ", isLoggedIn);



// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
console.log("the value of UserProfile is : ", UserProfile);
let ShoppingCart = "class name style";
console.log("the value of ShoppingCart is : ", ShoppingCart);



// 3. snake_case (underscore separated)
let user_name = "snake_case";
console.log("the value of user_name is : ", user_name);
let total_price = 49.99;
console.log("the value of total_price is : ", total_price);
let is_logged_in = false;
console.log("the value of is_logged_in is : ", is_logged_in);


// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
console.log("the value of MAX_SIZE is : ", MAX_SIZE);
const API_KEY = "abc123";
console.log("the value of API_KEY is : ", API_KEY);
const DATABASE_URL = "localhost";
console.log("the value of DATABASE_URL is : ", DATABASE_URL);


// 5. Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
console.log("the value of strName is : ", strName);
let bActive = true;       // boolean
console.log("the value of bActive is : ", bActive);
let nCount = 5;           // number
console.log("the value of nCount is : ", nCount);
let arrItems = [];        // array
console.log("the value of arrItems is : ", arrItems);

/*
============================================================
  EDUCATOR EXPLANATION BLOCK
============================================================

DETAILED EXPLANATION:
This file introduces JavaScript naming conventions, also known
as "cases," while using the 'let' and 'const' keywords. Naming
conventions are not enforced by the engine, but they are critical
for readability and team collaboration. The script demonstrates
camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, and
Hungarian notation. It also reinforces that let creates mutable
variables while const creates read-only references.

CODE BREAKDOWN:
Step 1: let name = "Pramod";
        - Simple declaration using let.

Step 2: let firstName = "Pramod"; let lastName = "Dutta";
        - camelCase: first word lowercase, subsequent words
          capitalized. Standard for variables and functions.

Step 3: let first_name = "Amit";
        - snake_case: words separated by underscores.

Step 4: let userName, totalPrice, isLoggedIn
        - More camelCase examples with varied types.

Step 5: let UserProfile = "PascalCase"; let ShoppingCart = ...;
        - PascalCase: every word starts with a capital letter.
          Standard for class names and constructors.

Step 6: let user_name, total_price, is_logged_in
        - snake_case applied to multiple variables.

Step 7: const MAX_SIZE = 100; const API_KEY = "abc123";
        - SCREAMING_SNAKE_CASE: all uppercase with underscores.
          Industry standard for constants that never change.

Step 8: let strName, bActive, nCount, arrItems
        - Hungarian notation: prefix indicates data type.
          Older style, rarely used in modern JavaScript.

Step 9: console.log(...) for each variable.
        - Outputs every value to verify declarations.

KEY CONCEPTS:
- camelCase: userName, getUserInfo (variables & functions).
- PascalCase: UserProfile, Person (classes & constructors).
- snake_case: user_name, total_price (some APIs / databases).
- SCREAMING_SNAKE_CASE: MAX_SIZE, API_KEY (true constants).
- Hungarian notation: strName, bActive (type prefixes; legacy).

COMPARISON TABLE: Naming Conventions at a Glance
| Convention            | Pattern              | When to use in JS            |
|-----------------------|----------------------|------------------------------|
| camelCase             | firstName            | Variables, functions          |
| PascalCase            | FirstName            | Classes, constructor functions|
| snake_case            | first_name           | Optional, API payloads       |
| SCREAMING_SNAKE_CASE  | FIRST_NAME           | const constants               |
| Hungarian             | strFirstName         | Legacy / avoid in modern code |

REAL-WORLD USE CASES:
- A team agrees on camelCase for all variables so code reviews
  are faster and more consistent.
- Exporting a configuration object where keys like API_KEY and
  DATABASE_URL are instantly recognizable as constants.
- Naming React components with PascalCase (e.g., ShoppingCart)
  so the build system knows they are components.

COMMON MISTAKES TO AVOID:
- Mixing conventions in the same file (e.g., userName and
  user_name) without a good reason; this confuses teammates.
- Using const for an object and then trying to mutate its
  properties. const freezes the binding, not the object.
- Using Hungarian notation in modern codebases; it adds noise
  because editors and TypeScript already show types.

KEY TAKEAWAY:
Consistent naming conventions make code readable and
maintainable. Use camelCase for everyday variables, PascalCase
for classes, and SCREAMING_SNAKE_CASE for constants. Leave
Hungarian notation in the history books.
*/