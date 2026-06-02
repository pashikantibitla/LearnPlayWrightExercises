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

/*
=====================================
DETAILED EXPLANATION
=====================================
This file demonstrates template literals (backtick strings) in JavaScript.
Template literals, introduced in ES6, allow variable interpolation, expression evaluation,
and multi-line strings without explicit newline characters or concatenation.
They are invaluable for building dynamic URLs, log messages, JSON payloads, and Playwright selectors.

CODE BREAKDOWN
=====================================
1. let fullname = `Hi ${firstname} Dutta`;
   - Basic variable interpolation using ${}.
2. const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
   - Dynamic URL construction with multiple interpolated values.
3. Playwright selector example (commented):
   - await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click();
   - Template literals make complex dynamic selectors readable.
4. console.log(`[${status}] ${testName} completed in ${duration}s`);
   - Formatted log messages with multiple embedded variables.
5. JSON payload with new Date().toISOString() inside ${}:
   - Expressions, not just variables, can be interpolated.

KEY CONCEPTS
=====================================
- Template Literal: A string enclosed in backticks (`) supporting embedded expressions.
- Variable Interpolation: Injecting variable values directly into a string using ${variableName}.
- Expression Interpolation: Evaluating any valid JS expression inside ${}.
- Multi-Line Strings: Backticks allow strings to span multiple lines naturally.
- const vs let: const is used for values that should not be reassigned; let for values that may change.

COMPARISON TABLE: Template Literal vs Regular String
=====================================
| Feature              | Regular String (''/"") | Template Literal (``)     |
|----------------------|-------------------------|--------------------------|
| Simple text          | Yes                     | Yes                      |
| Variable injection   | No                      | Yes (${var})             |
| Multi-line           | No (needs \n or +)      | Yes (preserves newlines) |
| Expression inside    | No                      | Yes (${a + b})           |
| Quote escaping       | Often needed            | Less often needed        |

REAL-WORLD USE CASES
=====================================
- Building dynamic API URLs with environment and ID segments.
- Creating formatted log messages for test automation frameworks.
- Generating dynamic CSS selectors or XPath expressions in Playwright/Selenium.
- Constructing JSON payloads with embedded timestamps and computed values.
- Writing multi-line SQL queries or HTML templates in code.

COMMON MISTAKES
=====================================
- Using regular quotes ('' or "") with ${} syntax (results in literal ${} characters).
- Forgetting backticks when switching from concatenation to interpolation.
- Not escaping backticks inside template literals (use backslash \`).
- Introducing unwanted whitespace in multi-line template literals.

KEY TAKEAWAY
=====================================
Template literals are the modern standard for building dynamic strings. Use backticks whenever you need variables, expressions, or multiple lines inside a string.
*/