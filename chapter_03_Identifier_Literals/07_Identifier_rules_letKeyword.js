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