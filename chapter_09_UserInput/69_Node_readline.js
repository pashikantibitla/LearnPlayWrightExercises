/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 *
 * Topic: Reading user input in Node.js using the built-in 'readline' module.
 *        Demonstrates an asynchronous, callback-based approach to handling
 *        command-line input through process.stdin and process.stdout.
 *
 * Functions/Methods Used:
 *   - require(id: string): any
 *     Description: A Node.js function used to import built-in modules or
 *     third-party packages. Here it imports the 'readline' module.
 *     Input: Accepts a module name string as a direct string literal,
 *     variable, or expression.
 *     Return Type: any — returns the exported module object.
 *
 *   - readline.createInterface(options: object): readline.Interface
 *     Description: Creates an interface instance for reading line-by-line
 *     input from a readable stream (e.g., process.stdin) and writing output
 *     to a writable stream (e.g., process.stdout).
 *     Input: Accepts an options object as a direct object literal, variable,
 *     or expression containing properties like input and output streams.
 *     Return Type: readline.Interface — returns a new readline interface instance.
 *
 *   - rl.question(query: string, callback: (answer: string) => void): void
 *     Description: Displays the query string and waits for user input.
 *     When the user presses Enter, it passes the input string to the
 *     callback function.
 *     Input: Accepts a query string and a callback function. The string is
 *     a direct string literal, variable, or expression. The callback is a
 *     function expression or reference that receives the answer string.
 *     Return Type: void (undefined) — initiates the question and returns
 *     nothing; the result is passed to the callback.
 *
 *   - Number(value: any): number
 *     Description: Converts the provided value into a number primitive.
 *     Used here to convert the string input into a numeric value.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: number — returns the numeric equivalent of the input value.
 *
 *   - console.log(message: any): void
 *     Description: Writes the provided message to the console (stdout).
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 *
 *   - rl.close(): void
 *     Description: Closes the readline.Interface instance and releases
 *     control of the input/output streams.
 *     Input: No arguments required; called directly on the readline interface
 *     instance.
 *     Return Type: void (undefined) — returns nothing.
 *
 * Built-in Objects / Properties:
 *   - process.stdin
 *     Description: A readable stream representing standard input (keyboard).
 *     Input: No input parameters; it is a property accessed directly on
 *     the global process object.
 *     Return Type: Stream — returns a readable stream.
 *
 *   - process.stdout
 *     Description: A writable stream representing standard output (console).
 *     Input: No input parameters; it is a property accessed directly on
 *     the global process object.
 *     Return Type: Stream — returns a writable stream.
 *
 *   - Arrow function (callback)
 *     Description: A concise anonymous function expression used as the
 *     callback to handle the user input asynchronously.
 *     Input: Receives parameters from the calling context (e.g., a string
 *     answer passed by rl.question).
 *     Return Type: any — depends on the function body; often returns void
 *     or an explicit value.
 *
 * Key Concepts:
 *   - Node.js Built-in Modules: The 'readline' module is provided by Node.js
 *     specifically for handling readable streams line by line.
 *   - Asynchronous Programming: User input is handled via a callback
 *     so the program does not block while waiting for input.
 *   - stdin / stdout: Standard input and standard output streams that allow
 *     Node.js programs to interact with the terminal.
 *   - Type Conversion: Input from readline is always a string; numeric
 *     operations require explicit conversion using Number().
 * ============================================================
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
    let num = Number(input);

    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }

    r1.close();
});

/*
================================================================================
                        COMPREHENSIVE EDUCATIONAL GUIDE
================================================================================

DETAILED EXPLANATION:
---------------------
This file demonstrates how to read user input in Node.js using the built-in
"readline" module. Unlike browsers, Node.js does not have a native prompt()
function. Instead, it provides the "readline" module which creates an interface
between your program and the standard input/output streams (process.stdin and
process.stdout).

The readline approach is asynchronous and event-driven. When rl.question() is
called, it prints a query to the console and waits for the user to type a line
of text and press Enter. The user's input is then passed as a string argument
to the provided callback function. This non-blocking design is a hallmark of
Node.js and allows the program to handle other tasks while waiting for input.

STEP-BY-STEP CODE BREAKDOWN:
----------------------------
Step 1: const readline = require("readline");
        - Imports Node.js's built-in readline module using CommonJS require().
        - The module provides methods for reading data from a readable stream
          one line at a time.

Step 2: const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
        - Creates a readline.Interface instance.
        - process.stdin is the readable stream (keyboard input).
        - process.stdout is the writable stream (console output).
        - This interface buffers input until a newline character is received.

Step 3: rl.question("Enter a number: ", (input) => { ... });
        - Displays "Enter a number: " to the user.
        - Waits asynchronously for the user to type a response and press Enter.
        - The callback (arrow function) receives the raw string input.

Step 4: let num = Number(input);
        - Converts the user's string input into a number.
        - If the user typed "7", num becomes 7.
        - If the user typed "abc", num becomes NaN.

Step 5: if (num % 2 === 0) { ... } else { ... }
        - Uses the modulo operator to determine even or odd.
        - Prints the result to the console.

Step 6: rl.close();
        - Closes the readline interface.
        - Releases the input/output streams so the Node.js process can exit.
        - Without this, the program would hang indefinitely waiting for more input.

KEY CONCEPTS:
-------------
- Asynchronous Programming: Node.js uses callbacks to handle operations that
take time (like waiting for user input) without freezing the entire program.
- Streams: process.stdin and process.stdout are continuous streams of data.
Readline wraps these streams into a convenient line-by-line interface.
- Callback Functions: A function passed as an argument to another function,
which is then invoked inside the outer function to complete some kind of action.
- Type Conversion: Input from readline is always a string; explicit conversion
is mandatory for numeric calculations.

COMPARISON TABLE: Input Methods in Node.js
-------------------------------------------
| Feature            | readline (built-in)    | prompt-sync (npm)          |
|--------------------|------------------------|----------------------------|
| Synchronous?       | No (async/callback)    | Yes (blocking)             |
| Built-in?           | Yes                    | No (must npm install)      |
| Complexity          | Medium (more code)     | Low (single line)          |
| Best For            | Interactive CLIs       | Simple scripts & learners  |
| Memory Overhead     | Low                    | Very Low                   |
| Customization       | High (events, history) | Low                        |

REAL-WORLD USE CASES:
---------------------
- Building Command Line Interfaces (CLIs) for developer tools.
- Creating interactive wizards for project scaffolding (e.g., npm init).
- Developing text-based games or chat applications in the terminal.
- Reading large files line-by-line to avoid loading the entire file into memory.
- Building REPLs (Read-Eval-Print Loops) like the Node.js shell.

COMMON MISTAKES TO AVOID:
-------------------------
1. Forgetting to call rl.close() → the Node.js process will hang forever.
2. Missing the Number() conversion and performing string concatenation instead
   of math (e.g., "5" + "3" = "53", not 8).
3. Not handling empty input or non-numeric strings, which produce NaN.
4. Using var instead of let/const for the readline instance, which pollutes
   the function or global scope unnecessarily.
5. Trying to use return values from rl.question() synchronously; it returns
   undefined immediately and delivers the real answer via the callback.

KEY TAKEAWAY:
-------------
The "readline" module is the standard, built-in way to handle terminal input in
Node.js. It is powerful, flexible, and event-driven. Mastering readline is
essential for building professional CLI tools. Always remember to close the
interface when you are done, and always validate and convert user input before
using it in calculations or logic.

================================================================================
*/