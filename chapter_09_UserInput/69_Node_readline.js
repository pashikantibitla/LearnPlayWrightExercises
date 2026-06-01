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