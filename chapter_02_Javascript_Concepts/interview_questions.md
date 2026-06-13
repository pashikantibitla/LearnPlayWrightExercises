# Chapter 2 — Interview Questions & Deep Dive: JavaScript Concepts

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### Variable Declaration & Reassignment

```js
// Declaration
var name = "John";

// Reassignment
name = "Jane"; // ✅ Allowed with var and let

// const cannot be reassigned
const PI = 3.14;
// PI = 3.15; // ❌ TypeError

// But const objects CAN be mutated
const user = { name: "John" };
user.name = "Jane"; // ✅ Allowed — mutation, not reassignment
// user = {}; // ❌ TypeError — reassignment
```

---

### Primitive vs Reference Types

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        PRIMITIVE vs REFERENCE                           │
│  ┌─────────────────────┐            ┌─────────────────────┐             │
│  │    PRIMITIVE        │            │    REFERENCE        │             │
│  │  (Stored on Stack)  │            │  (Stored on Heap)   │             │
│  ├─────────────────────┤            ├─────────────────────┤             │
│  │ string              │            │ Object              │             │
│  │ number              │            │ Array               │             │
│  │ boolean             │            │ Function            │             │
│  │ null                │            │ Date                │             │
│  │ undefined             │            │ RegExp              │             │
│  │ symbol              │            │ Map, Set            │             │
│  │ bigint              │            │                     │             │
│  │                     │            │                     │             │
│  │ Copy by VALUE       │            │ Copy by REFERENCE   │             │
│  │ Immutable           │            │ Mutable             │             │
│  └─────────────────────┘            └─────────────────────┘             │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. What happens when you reassign a primitive vs a reference type?

```js
// Primitive — copy by value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — a is unaffected

// Reference — copy by reference
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20 — obj1 is affected!

// Visual:
// Primitive:
// ┌─────────┐    ┌─────────┐
// │ a = 10  │    │ b = 20  │  ← Independent
// └─────────┘    └─────────┘
//
// Reference:
// ┌─────────┐    ┌─────────────────────┐
// │ obj1    │───→│ { value: 20 }         │
// └─────────┘    │ (same object)         │
// ┌─────────┐    └─────────────────────┘
// │ obj2    │───→
// └─────────┘
```

---

### Q2. How do you create a true copy of an object?

```js
// Shallow copy — only top-level copied
const original = { a: 1, b: { c: 2 } };

// Method 1: Spread operator
const copy1 = { ...original };

// Method 2: Object.assign
const copy2 = Object.assign({}, original);

// Method 3: JSON parse/stringify (deep copy for JSON-safe data)
const deepCopy = JSON.parse(JSON.stringify(original));

// Test shallow copy limitation
copy1.b.c = 99;
console.log(original.b.c); // 99 — nested object still shared!

// Test deep copy
deepCopy.b.c = 100;
console.log(original.b.c); // 99 — unaffected!

// Modern deep copy: structuredClone
const modernCopy = structuredClone(original);
```

---

### Q3. What is the difference between `var` reassignment and `let` reassignment?

```js
// var — can be redeclared AND reassigned
var x = 10;
var x = 20; // ✅ Redeclaration allowed
x = 30;     // ✅ Reassignment allowed

// let — can be reassigned but NOT redeclared in same scope
let y = 10;
// let y = 20; // ❌ SyntaxError
y = 20;      // ✅ Reassignment allowed

// const — can neither be redeclared nor reassigned
const z = 10;
// const z = 20; // ❌ SyntaxError
// z = 20;       // ❌ TypeError

// const objects — can mutate properties
const person = { name: "John" };
person.name = "Jane"; // ✅ Allowed
// person = {}; // ❌ TypeError
```

---

### Q4. What are the 8 falsy values in JavaScript?

```js
// All falsy values:
if (!false)       console.log("false is falsy");
if (!0)           console.log("0 is falsy");
if (!"")          console.log("empty string is falsy");
if (!null)        console.log("null is falsy");
if (!undefined)   console.log("undefined is falsy");
if (!NaN)         console.log("NaN is falsy");
if (!document.all) console.log("document.all is falsy"); // Legacy

// Everything else is truthy!
if ({})     console.log("empty object is truthy");
if ([])     console.log("empty array is truthy");
if ("0")    console.log("string '0' is truthy");
if (" ")    console.log("string with space is truthy");
if (-1)     console.log("negative number is truthy");
```

---

### Q5. Explain type coercion with examples.

```js
// Implicit coercion
console.log("5" + 3);    // "53" — number coerced to string
console.log("5" - 3);    // 2 — string coerced to number
console.log("5" * "3");  // 15 — both strings coerced to numbers
console.log(true + 1);   // 2 — true coerced to 1
console.log(false + 1);  // 1 — false coerced to 0

// Coercion in comparisons
console.log("5" == 5);   // true — loose equality coerces
console.log("5" === 5);  // false — strict equality does NOT coerce

// Weird coercion cases
console.log([] + []);    // "" — both coerced to empty strings
console.log([] + {});    // "[object Object]"
console.log({} + []);    // 0 or "[object Object]" (depends on context)
console.log(true + true); // 2
console.log(true - true); // 0
```

---

### Q6. What is the difference between `==` and `===`?

```js
// == (Loose equality) — checks value after type coercion
console.log("5" == 5);        // true
console.log(0 == false);      // true
console.log(null == undefined); // true
console.log("" == 0);         // true
console.log([1,2] == "1,2"); // true

// === (Strict equality) — checks value AND type
console.log("5" === 5);        // false
console.log(0 === false);      // false
console.log(null === undefined); // false
console.log("" === 0);         // false

// Best practice: Always use ===
function isEqual(a, b) {
    return a === b;
}
```

---

### Q7. What is the output of `typeof []` and `typeof null`?

```js
console.log(typeof []);        // "object" — arrays are objects
console.log(typeof null);      // "object" — historical bug
console.log(typeof {});        // "object"
console.log(typeof function(){}); // "function"

// How to check for arrays properly
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// How to check for null properly
function isNull(value) {
    return value === null;
}
console.log(isNull(null)); // true
```

---

### Q8. What is variable shadowing?

```js
let name = "Outer";

function test() {
    let name = "Inner"; // Shadows outer variable
    console.log(name);  // "Inner"
}

test();
console.log(name); // "Outer" — outer variable unchanged

// Shadowing in blocks
let x = 10;
if (true) {
    let x = 20; // Shadows outer x
    console.log(x); // 20
}
console.log(x); // 10

// var does NOT shadow — it overwrites (or creates a new binding)
var y = 10;
function test2() {
    var y = 20; // Separate function-scoped variable
    console.log(y); // 20
}
test2();
console.log(y); // 10
```

---

### Q9. What is the output of these variable declarations?

```js
console.log(a); // undefined
var a = 5;

// console.log(b); // ReferenceError (TDZ)
let b = 10;

// Behind the scenes with var:
// var a;           // hoisted
// console.log(a);  // undefined
// a = 5;           // assignment stays

// Behind the scenes with let:
// let b;           // hoisted but in TDZ
// console.log(b);  // ReferenceError!
// b = 10;          // assignment
```

---

### Q10. Explain `NaN` and how to check for it.

```js
// NaN — Not a Number
console.log(typeof NaN); // "number" — NaN is a number type!

// NaN is the result of failed numeric operations
console.log(Number("hello")); // NaN
console.log(Math.sqrt(-1));     // NaN
console.log(0 / 0);             // NaN

// NaN is NOT equal to itself!
console.log(NaN === NaN); // false

// How to check for NaN
console.log(Number.isNaN(NaN));   // true
console.log(Number.isNaN("hello")); // false
console.log(Number.isNaN(123));   // false

// Old global isNaN — coerces first
console.log(isNaN("hello")); // true — coerces to NaN
console.log(isNaN("123"));   // false — coerces to 123
```

---

## 3. Quick Reference

### Variable Declaration Rules

```js
// var — function scope, hoisted, redeclarable
// let — block scope, hoisted (TDZ), not redeclarable
// const — block scope, hoisted (TDZ), not redeclarable, must initialize

// Best practice order:
// 1. const (default)
// 2. let (when reassignment needed)
// 3. never var
```

### Primitive vs Reference Summary

```js
// Primitives (immutable, copied by value)
// string, number, boolean, null, undefined, symbol, bigint

// References (mutable, copied by reference)
// Object, Array, Function, Date, RegExp, Map, Set

// Copy primitives
let a = 10;
let b = a; // b gets a COPY

// Copy references
let obj1 = { x: 1 };
let obj2 = obj1; // obj2 gets a REFERENCE
```

---

## 4. Key Takeaways

1. **Use `const` by default**, `let` when reassignment is needed, never `var`.
2. **Primitives are immutable** — copied by value, stored on stack.
3. **References are mutable** — copied by reference, stored on heap.
4. **`===` is always safer than `==`** — avoids type coercion surprises.
5. **`typeof null === "object"`** — a known bug, use `=== null` instead.
6. **NaN is a number type** — but not equal to itself. Use `Number.isNaN()`.
7. **Hoisting affects `var`, `let`, `const`, and functions differently** — know the TDZ.
8. **Variable shadowing** — inner scope can hide outer scope variables.
9. **Empty arrays and objects are truthy** — only `false`, `0`, `""`, `null`, `undefined`, `NaN` are falsy.
10. **Type coercion is automatic but dangerous** — understand implicit conversions.

---

**Happy coding! 🚀**

*Variables are the foundation of programming — declare them wisely.*
