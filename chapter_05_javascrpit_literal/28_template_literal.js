/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Template literals (backtick strings) in JavaScript, demonstrating variable interpolation, expression evaluation, and practical use cases.
 *
 * Functions/Methods Used:
 *   - console.log(message: any): void
 *     Description: Outputs the specified value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *   - Date.now(): number
 *     Description: Static method of the Date object that returns the number of milliseconds elapsed since January 1, 1970.
 *     Input: No parameters; called directly on the Date object.
 *     Return Type: number — returns the current timestamp in milliseconds.
 *   - new Date().toISOString(): string
 *     Description: Creates a new Date instance and returns it as an ISO 8601 formatted string.
 *     Input: No arguments; called on a new Date instance.
 *     Return Type: string — returns the date and time in ISO 8601 format (e.g., "2023-01-01T00:00:00.000Z").
 *
 * Built-in Methods/Keywords Used:
 *   - let
 *     Description: Declares a block-scoped local variable.
 *     Input: Takes a variable name and an optional initializer value (direct value, variable, or expression).
 *     Return Type: void — does not return a value; it binds the identifier to the value in the current scope.
 *   - const
 *     Description: Declares a block-scoped constant variable that cannot be reassigned.
 *     Input: Takes a variable name and a required initializer value (direct value, variable, or expression).
 *     Return Type: void — does not return a value; it binds the identifier to the value in the current scope.
 *   - Template literal syntax (backticks ``)
 *     Description: Allows embedding expressions inside strings using ${expression}.
 *     Input: A string literal enclosed in backticks, optionally containing ${expression} placeholders where expressions (variables, values, or computations) are inserted.
 *     Return Type: string — returns the evaluated string with interpolated values.
 *
 * Key Concepts:
 *   - Template literal: A string enclosed in backticks (`) that supports multi-line text and embedded expressions.
 *   - Variable interpolation: Injecting variable values directly into a string using ${variableName}.
 *   - Expression interpolation: Evaluating any valid JavaScript expression inside ${} (e.g., ${new Date().toISOString()}).
 *   - Multi-line strings: Backticks allow strings to span multiple lines without explicit newline characters or concatenation.
 *   - const vs let: const is used for values that should not be reassigned; let is used for values that may change.
 * ============================================================
 */

// Template literally. 

let firstname = "Prrammod";
let fullname = `Hi ${firstname} Dutta`;
console.log(fullname);


let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);

// Playwright
const rowIndex = 3;
const columnName = "email";
//await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();

// Logs
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`);


const testCase = "checkout_flow";
const timestamp = Date.now();
//await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` });


const username = "pramod";
const role = "admin";

const payload = `{
  "user": "${username}",
  "role": "${role}",
  "timestamp": "${new Date().toISOString()}"
}`;
console.log(payload);