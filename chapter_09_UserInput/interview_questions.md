# Chapter 9 — Interview Questions & Deep Dive: User Input

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### Ways to Get User Input

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         USER INPUT METHODS                              │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │ Browser: prompt()  │  │ Node: readline     │  │ Node: prompt-sync  │  │
│  │ Synchronous        │  │ Asynchronous        │  │ Synchronous        │  │
│  │ Returns string     │  │ Callback-based      │  │ Blocks until input │  │
│  │ ❌ Not in Node.js  │  │ ✅ Built-in          │  │ ⚠️ npm package     │  │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘  │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │ Browser: <input>   │  │ Node: process.argv  │  │ Environment vars   │  │
│  │ HTML form field      │  │ Command line args   │  │ process.env        │  │
│  │ Event-driven         │  │ Array of strings    │  │ Read from system   │  │
│  │ ✅ Browser only      │  │ ✅ Built-in           │  │ ✅ Built-in          │  │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. How do you get user input in Node.js?

```js
// Method 1: readline (built-in, asynchronous)
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
});

// Method 2: prompt-sync (npm package, synchronous)
const prompt = require('prompt-sync')();
const name = prompt('What is your name? ');
console.log(`Hello, ${name}!`);

// Method 3: process.argv (command line arguments)
const args = process.argv.slice(2);
console.log('Arguments:', args);

// Method 4: Environment variables
const env = process.env.USERNAME || process.env.USER;
console.log('Current user:', env);
```

---

### Q2. What is the difference between synchronous and asynchronous input?

```js
// Synchronous (prompt-sync) — blocks execution
const prompt = require('prompt-sync')();
const name = prompt('Enter name: '); // Execution PAUSES here
console.log(`Hello ${name}`);
console.log('This runs AFTER input');

// Asynchronous (readline) — non-blocking, callback
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter name: ', (name) => {
    console.log(`Hello ${name}`);
    rl.close();
});
console.log('This runs IMMEDIATELY, before input');

// Comparison:
// ┌──────────────────┬────────────────────┬────────────────────┐
// │ Aspect           │ Synchronous        │ Asynchronous       │
// ├──────────────────┼────────────────────┼────────────────────┤
// │ Execution        │ Blocks             │ Non-blocking       │
// │ Return           │ Direct value       │ Callback           │
// │ Performance      │ Simpler for scripts│ Better for servers │
// │ Use case         │ CLI tools, scripts │ Web servers, apps  │
// └──────────────────┴────────────────────┴────────────────────┘
```

---

### Q3. How do you convert string input to numbers?

```js
const prompt = require('prompt-sync')();

const input = prompt('Enter a number: '); // Always returns string

// Method 1: Number()
const num1 = Number(input);

// Method 2: parseInt()
const num2 = parseInt(input);

// Method 3: parseFloat()
const num3 = parseFloat(input);

// Method 4: Unary plus
const num4 = +input;

// Method 5: Math.floor/Math.ceil
const num5 = Math.floor(input);

// Differences:
// Number("123") → 123
// Number("123abc") → NaN
// Number("123.45") → 123.45
// Number(""), Number(" ") → 0
// Number(null) → 0
// Number(undefined) → NaN
// Number(true) → 1
// Number(false) → 0

// parseInt("123abc") → 123 (stops at first non-digit)
// parseInt("abc123") → NaN
// parseInt("10", 2) → 2 (binary)
// parseInt("FF", 16) → 255 (hex)

// parseFloat("123.45abc") → 123.45
// parseFloat("abc123.45") → NaN

// Check if valid number
function isValidNumber(input) {
    return !isNaN(input) && !isNaN(parseFloat(input));
}
```

---

### Q4. What are the differences between browser `prompt()` and Node.js input?

```js
// Browser prompt() — synchronous, modal dialog
const name = prompt('What is your name?');
// Returns null if cancelled
// Returns empty string "" if OK clicked with empty input
// Returns string value

// Node.js readline — callback-based
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('What is your name? ', (name) => {
    console.log(name);
    rl.close();
});

// Node.js prompt-sync — synchronous
const prompt = require('prompt-sync')();
const name = prompt('What is your name? ');

// Differences:
// ┌────────────────────┬────────────────────┬────────────────────┐
// │ Feature            │ Browser prompt()   │ Node.js readline   │
// ├────────────────────┼────────────────────┼────────────────────┤
// │ Returns null on    │ ✅                 │ ❌ (returns "")   │
// │ cancel             │                    │                    │
// │ Synchronous        │ ✅                 │ ❌ (callback)   │
// │ Modal dialog       │ ✅                 │ ❌ (terminal)    │
// │ Requires module    │ ❌ (built-in)      │ ✅ (readline)    │
// │ Input echo         │ ✅                 │ ✅ (can disable) │
// └────────────────────┴────────────────────┴────────────────────┘
```

---

### Q5. How do you handle multiple inputs in sequence?

```js
// Using readline with promises
const readline = require('readline');

function askQuestion(rl, question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => resolve(answer));
    });
}

async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const name = await askQuestion(rl, 'Name: ');
    const age = await askQuestion(rl, 'Age: ');
    const city = await askQuestion(rl, 'City: ');

    console.log(`${name}, ${age}, ${city}`);
    rl.close();
}

main();

// Using prompt-sync (simpler)
const prompt = require('prompt-sync')();
const name = prompt('Name: ');
const age = prompt('Age: ');
const city = prompt('City: ');
console.log(`${name}, ${age}, ${city}`);
```

---

## 3. Quick Reference

### Input Conversion

```js
// String to number
Number(str);      // NaN if invalid
parseInt(str);    // Stops at first non-digit
parseFloat(str);  // For decimals
+str;             // Unary plus

// String to boolean
str === "true";   // Only "true" string
Boolean(str);     // Any non-empty string is true

// Check for valid number
!isNaN(num) && isFinite(num);
```

---

## 4. Key Takeaways

1. **Browser `prompt()` does not exist in Node.js** — use `readline` or `prompt-sync`.
2. **readline is asynchronous and callback-based** — better for servers.
3. **prompt-sync is synchronous and blocks** — simpler for scripts.
4. **All input is returned as string** — convert with `Number()`, `parseInt()`, `parseFloat()`.
5. **Command line arguments are in `process.argv`** — first two are node path and script path.
6. **Environment variables are in `process.env`** — system configuration.
7. **Check for NaN after conversion** — invalid input becomes NaN.
8. **Use `parseInt(str, 10)` to avoid octal parsing** — always specify radix.
9. **Empty string input is different from cancelled prompt** — check for `null` vs `""`.
10. **Use async/await with readline promises** — cleaner code for sequential inputs.

---

**Happy coding! 🚀**

*Input is always a string — convert it before you compute with it.*
