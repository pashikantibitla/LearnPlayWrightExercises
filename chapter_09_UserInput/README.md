# Chapter 9: User Input

This chapter covers three different ways to read user input in a Node.js environment — browser `prompt()`, built-in `readline`, and the `prompt-sync` npm package.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `68_user_input.js` | Browser `prompt()` limitation in Node | `console.log(value: any): void`, `Number(value: any): number` |
| `69_Node_readline.js` | Node built-in `readline` module | `console.log(value: any): void`, `require(id: string): any`, `readline.createInterface(options: object): readline.Interface`, `rl.question(query: string, callback: function): void`, `rl.close(): void`, `Number(value: any): number` |
| `70_prompt_sync.js` | `prompt-sync` npm package | `console.log(value: any): void`, `require(id: string): any`, `Number(value: any): number` |

---

## Functions, Methods & Keywords Exercised

### console.log(value: any): void
- **Description:** Prints the given value to the standard output (console).
- **Input:** Accepts any data type as a direct value, variable, or expression.
- **Return Type:** void (undefined) — returns nothing; only outputs to console.

### require(id: string): any
- **Description:** Loads a module, library, or npm package in a Node.js environment.
- **Input:** A string representing the module name or file path.
- **Return Type:** any — the exported object/function from the required module.

### readline.createInterface(options: object): readline.Interface
- **Description:** Creates a readline interface instance for reading lines from a readable stream.
- **Input:** An options object containing `input` (readable stream) and `output` (writable stream), typically `process.stdin` and `process.stdout`.
- **Return Type:** readline.Interface — an instance used to prompt for user input.

### rl.question(query: string, callback: function): void
- **Description:** Displays a query to the user and waits for input. The callback receives the user's answer as a string.
- **Input:** A prompt string and a callback function `(answer: string) => void`.
- **Return Type:** void — asynchronous; result is passed to the callback.

### rl.close(): void
- **Description:** Closes the readline interface and releases the input/output streams.
- **Input:** No input.
- **Return Type:** void — terminates the readline session.

### Number(value: any): number
- **Description:** Converts the given value to a number primitive.
- **Input:** Any value (string, boolean, etc.).
- **Return Type:** number — the numeric representation; returns `NaN` if conversion fails.

### prompt(message: string): string
- **Description:** (From `prompt-sync` package) Displays a message and waits for the user to type input synchronously.
- **Input:** A string message to display as a prompt.
- **Return Type:** string — the raw text entered by the user.

### process.stdin
- **Description:** A readable stream for the standard input (keyboard) in Node.js.
- **Input:** No input — accessed as a property.
- **Return Type:** stream.Readable — the stdin stream object.

### process.stdout
- **Description:** A writable stream for the standard output (console) in Node.js.
- **Input:** No input — accessed as a property.
- **Return Type:** stream.Writable — the stdout stream object.

### Arrow Function (Callback)
- **Description:** A concise function expression commonly used as a callback.
- **Input:** Defined by its parameters (e.g., `(answer) => { ... }`).
- **Return Type:** Depends on the function body; often `void` for callbacks.

---

## Key Concepts

- **Synchronous vs Asynchronous Input:** `prompt-sync` blocks until input is received; `readline` is event-driven.
- **Type Conversion:** User input is always a string; use `Number()` to convert to numeric.
- **Browser vs Node:** `prompt()` is a browser API and does NOT exist in Node.js.
- **Callback Pattern:** `readline.question` uses a callback to handle asynchronous input.
