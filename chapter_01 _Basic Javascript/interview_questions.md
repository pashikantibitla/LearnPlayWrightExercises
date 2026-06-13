# Chapter 1 — Interview Questions & Deep Dive: Basic JavaScript

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### What is JavaScript?

JavaScript is a lightweight, interpreted, just-in-time compiled programming language with first-class functions. It is the programming language of the Web and is now used on servers (Node.js), mobile devices, and even desktop applications.

```
┌─────────────────────────────────────────────────────────────────┐
│                     JAVASCRIPT ECOSYSTEM                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐             │
│  │   Browser   │  │  Node.js    │  │  Mobile     │             │
│  │   (Client)  │  │  (Server)   │  │  (React Native│             │
│  └─────────────┘  └─────────────┘  └─────────────┘             │
└─────────────────────────────────────────────────────────────────┘
```

---

### console.log — The Debugger's Best Friend

```js
console.log("Hello, World!");           // Basic output
console.log(42);                         // Number
console.log(true);                       // Boolean
console.log({ name: "John" });           // Object
console.log([1, 2, 3]);                  // Array

// Multiple values
console.log("Name:", "John", "Age:", 30); // Multiple arguments

// Template literals
const name = "John";
console.log(`Hello, ${name}!`);           // Hello, John!

// Objects with labels
console.log({ user: "John", role: "admin" }); // Pretty-prints object

// Table output
console.table([{ name: "John", age: 30 }, { name: "Jane", age: 25 }]);
```

---

### var vs let vs const

```
┌─────────────────┬─────────────────────┬─────────────────────┬─────────────────────┐
│   Feature       │        var          │        let          │       const         │
├─────────────────┼─────────────────────┼─────────────────────┼─────────────────────┤
│ Scope           │ Function-scoped     │ Block-scoped { }    │ Block-scoped { }    │
│ Redeclare?      │ ✅ Yes              │ ❌ No               │ ❌ No               │
│ Reassign?       │ ✅ Yes              │ ✅ Yes              │ ❌ No               │
│ Hoisted?        │ ✅ Yes (undefined)  │ ✅ Yes (TDZ)        │ ✅ Yes (TDZ)        │
│ Must initialize?│ ❌ No               │ ❌ No               │ ✅ Yes              │
│ Modern usage    │ Legacy only         │ Preferred variables │ Preferred constants│
└─────────────────┴─────────────────────┴─────────────────────┴─────────────────────┘
```

---

### V8 Engine & JIT Compilation

```
┌─────────────────────────────────────────────────────────────┐
│                     V8 ENGINE PIPELINE                        │
│                                                               │
│  Source Code → Parser → AST → Ignition (Interpreter)          │
│                                      ↓                        │
│                              ┌──────────────┐               │
│                              │  TurboFan    │               │
│                              │  (Compiler)  │               │
│                              │  Hot code →  │               │
│                              │  Machine code│               │
│                              └──────────────┘               │
└─────────────────────────────────────────────────────────────┘
```

- **Ignition:** Bytecode interpreter — fast startup, slower execution.
- **TurboFan:** Optimizing compiler — monitors "hot" code and compiles it to machine code for speed.
- **Hot Code:** Functions that are called frequently get optimized by TurboFan.

---

## 2. Interview Questions & Coding Examples

### Q1. What is the difference between `var`, `let`, and `const`?

```js
// var — function-scoped, hoisted, can be redeclared
var x = 10;
var x = 20; // ✅ Allowed

// let — block-scoped, hoisted in TDZ, cannot be redeclared
let y = 10;
// let y = 20; // ❌ SyntaxError

// const — block-scoped, must be initialized, cannot be reassigned
const z = 10;
// z = 20; // ❌ TypeError

// Block scope demonstration
function test() {
    if (true) {
        var a = 1;  // Function-scoped
        let b = 2;  // Block-scoped
        const c = 3; // Block-scoped
    }
    console.log(a); // ✅ 1 — var leaks out
    console.log(b); // ❌ ReferenceError — let is block-scoped
    console.log(c); // ❌ ReferenceError — const is block-scoped
}
```

---

### Q2. What is hoisting and how does it work?

```js
// var hoisting — declaration moved to top, initialized as undefined
console.log(hoistedVar); // undefined (not ReferenceError!)
var hoistedVar = "I am hoisted";

// Behind the scenes:
// var hoistedVar;        // hoisted declaration
// console.log(hoistedVar); // undefined
// hoistedVar = "I am hoisted";

// let hoisting — declaration moved to top but in TDZ
// console.log(hoistedLet); // ❌ ReferenceError: Cannot access before initialization
let hoistedLet = "I am in TDZ";

// function hoisting — entire function body is hoisted
sayHello(); // ✅ Works!
function sayHello() {
    console.log("Hello!");
}

// function expression — NOT hoisted (only var declaration is)
// sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function() {
    console.log("Hi!");
};
```

---

### Q3. What is the Temporal Dead Zone (TDZ)?

```js
// TDZ starts at the beginning of the block and ends at the declaration
{
    // TDZ begins here
    console.log(a); // ❌ ReferenceError — still in TDZ
    let a = 5;      // TDZ ends here
    console.log(a); // ✅ 5
}

// TDZ also applies to const
{
    // console.log(b); // ❌ ReferenceError
    const b = 10;
}

// var does NOT have a TDZ — it's initialized as undefined
{
    console.log(c); // ✅ undefined
    var c = 15;
}
```

---

### Q4. Why is `typeof null` equal to `"object"`?

```js
console.log(typeof null); // "object" — A 26-year-old JavaScript bug

// Explanation:
// In the first version of JavaScript, values were represented as a type tag
// and a value. The type tag for objects was 0.
// null was represented as the NULL pointer (0x00), which was interpreted as
// an object type tag.
// This bug was preserved for backward compatibility and cannot be fixed.

// How to check for null properly:
function isNull(value) {
    return value === null;
}
console.log(isNull(null));      // true
console.log(isNull(undefined)); // false
console.log(isNull({}));        // false
```

---

### Q5. What is the difference between `undefined` and `not defined`?

```js
let a;
console.log(a);       // undefined — declared but not assigned
console.log(typeof a); // "undefined"

// console.log(b);    // ❌ ReferenceError: b is not defined

// Key difference:
// undefined = variable exists but has no value
// not defined = variable does not exist at all

function check(value) {
    if (value === undefined) {
        console.log("Variable exists but has no value");
    }
}

check(a); // "Variable exists but has no value"
```

---

### Q6. Explain the JavaScript execution context.

```js
// Global Execution Context (GEC)
// Created when JS starts — global object (window in browser, global in Node)

// Function Execution Context (FEC)
// Created whenever a function is called

function outer() {
    let outerVar = "I am outer";
    
    function inner() {
        let innerVar = "I am inner";
        console.log(outerVar); // ✅ Can access outer scope
    }
    
    inner();
    // console.log(innerVar); // ❌ ReferenceError
}

outer();

// Execution Stack:
// 1. GEC is pushed
// 2. outer() called → FEC for outer pushed
// 3. inner() called → FEC for inner pushed
// 4. inner() finishes → FEC popped
// 5. outer() finishes → FEC popped
// 6. Program ends → GEC popped
```

---

### Q7. What is the difference between a function and a method?

```js
// Function — standalone
function greet() {
    console.log("Hello!");
}
greet(); // Called independently

// Method — belongs to an object
const user = {
    name: "John",
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};
user.greet(); // Called via object

// Comparison:
// ┌─────────────┬─────────────────────┬─────────────────────┐
// │ Feature     │ Function           │ Method              │
// ├─────────────┼─────────────────────┼─────────────────────┤
// │ Belongs to  │ Standalone         │ Object              │
// │ Call syntax │ functionName()     │ object.method()     │
// │ this access │ Global/window      │ The parent object   │
// └─────────────┴─────────────────────┴─────────────────────┘
```

---

### Q8. What are JavaScript's primitive data types?

```js
// 7 primitive types in JavaScript
const string = "Hello";      // typeof: "string"
const number = 42;           // typeof: "number"
const boolean = true;        // typeof: "boolean"
const nothing = null;        // typeof: "object" (bug!)
const notAssigned = undefined; // typeof: "undefined"
const symbol = Symbol("id"); // typeof: "symbol"
const bigNumber = 9007199254740991n; // typeof: "bigint"

// Primitives are immutable
let str = "Hello";
str[0] = "Y"; // Silently fails (or TypeError in strict mode)
console.log(str); // Still "Hello"

// Comparison table:
// ┌──────────┬─────────────┬─────────────┬─────────────────────────────┐
// │ Type     │ typeof      │ Example     │ Notes                       │
// ├──────────┼─────────────┼─────────────┼─────────────────────────────┤
// │ string   │ "string"    │ "hello"     │ Immutable sequence of chars  │
// │ number   │ "number"    │ 42, 3.14    │ Includes NaN and Infinity    │
// │ boolean  │ "boolean"   │ true, false │ Only two values              │
// │ null     │ "object"    │ null        │ Historical bug               │
// │ undefined│ "undefined" │ undefined   │ Uninitialized variable       │
// │ symbol   │ "symbol"    │ Symbol()    │ Unique identifier            │
// │ bigint   │ "bigint"    │ 123n        │ Arbitrary precision integer  │
// └──────────┴─────────────┴─────────────┴─────────────────────────────┘
```

---

### Q9. What is the difference between `null` and `undefined`?

```js
// undefined — automatically assigned by JavaScript
let a;
console.log(a); // undefined

// null — intentionally set by the programmer
let b = null;
console.log(b); // null

// Loose equality
console.log(null == undefined);  // true

// Strict equality
console.log(null === undefined); // false

// typeof
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (bug)

// Best practice: Use null to intentionally clear a value
let user = { name: "John" };
user = null; // Explicitly saying "no user"
```

---

### Q10. What is the difference between a parameter and an argument?

```js
// Parameter — variable in the function DEFINITION
function greet(name, age) { // name and age are PARAMETERS
    console.log(`${name} is ${age} years old`);
}

// Argument — actual value passed when CALLING
greet("John", 30); // "John" and 30 are ARGUMENTS

// ┌─────────────┬────────────────────────────┬────────────────────────────┐
// │ Aspect      │ Parameter                  │ Argument                   │
// ├─────────────┼────────────────────────────┼────────────────────────────┤
// │ Where       │ Function definition        │ Function call              │
// │ What        │ Placeholder variable       │ Actual value               │
// │ Example     │ function fn(a, b)          │ fn(1, 2)                   │
// │ Count       │ Called "arity"             │ Called "arguments"         │
// └─────────────┴────────────────────────────┴────────────────────────────┘
```

---

## 3. Quick Reference

### console.log Variations

```js
console.log("message");           // Basic
console.log("Name:", value);        // Multiple values
console.log(`Value: ${value}`);     // Template literal
console.log({ value });             // Object shorthand
console.table(array);               // Table format
console.error("Error!");              // Error styling
console.warn("Warning!");           // Warning styling
console.info("Info");               // Info styling
console.time("timer");              // Start timer
console.timeEnd("timer");           // End timer
console.trace("trace");             // Stack trace
console.group("group");             // Start group
console.groupEnd("group");          // End group
```

### typeof Results

```js
typeof "hello"       // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object" (bug!)
typeof {}            // "object"
typeof []            // "object" (arrays are objects!)
typeof function(){}  // "function"
typeof Symbol()      // "symbol"
typeof 123n          // "bigint"
```

---

## 4. Key Takeaways

1. **Always use `const` by default** — prevents accidental reassignment.
2. **Use `let` only when reassignment is necessary** — loop counters, accumulators.
3. **Avoid `var`** — function scope and hoisting cause bugs.
4. **`console.log` is your primary debugging tool** — learn all its variations.
5. **JavaScript has 7 primitive types** — string, number, boolean, null, undefined, symbol, bigint.
6. **`typeof null === "object"`** — a historical bug you must know.
7. **Hoisting moves declarations, not assignments** — `var` gets `undefined`, `let`/`const` get TDZ.
8. **Function declarations are hoisted** — entire body. Function expressions are not.
9. **A parameter is a placeholder** — an argument is the actual value passed.
10. **V8 compiles hot code** — frequently called functions get optimized to machine code.

---

**Happy coding! 🚀**

*Master the basics and you master everything else.*
