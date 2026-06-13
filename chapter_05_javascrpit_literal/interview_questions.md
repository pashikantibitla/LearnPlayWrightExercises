# Chapter 5 — Interview Questions & Deep Dive: JavaScript Literals

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### What is a Literal?

A literal is a notation for representing a fixed value in source code. It is the raw data you write directly in your code.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         LITERAL TYPES IN JS                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │  String     │  │  Number     │  │  Boolean    │  │  Null       │   │
│  │  "hello"    │  │  42         │  │  true       │  │  null       │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │  Undefined  │  │  Symbol     │  │  BigInt     │  │  Object     │   │
│  │  undefined  │  │  Symbol()   │  │  123n       │  │  {a: 1}     │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │  Array      │  │  RegExp     │  │  Function   │  │  Template   │   │
│  │  [1,2,3]    │  │  /abc/g     │  │  (x)=>x     │  │  `hi ${x}`  │   │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Number Literal Formats

```js
// Decimal
const dec = 42;

// Binary (0b or 0B)
const bin = 0b1010; // 10

// Octal (0o or 0O)
const oct = 0o17; // 15

// Hexadecimal (0x or 0X)
const hex = 0xFF; // 255

// Exponential
const exp = 1e6; // 1,000,000
const exp2 = 1e-3; // 0.001

// Numeric separator (ES2021)
const separator = 1_000_000; // 1,000,000
const binSep = 0b1010_0001; // 161

// BigInt
const big = 12345678901234567890n;

// Special number values
const inf = Infinity;
const negInf = -Infinity;
const notNum = NaN;

// typeof
console.log(typeof 42);        // "number"
console.log(typeof 123n);      // "bigint"
console.log(typeof NaN);       // "number"
console.log(typeof Infinity);  // "number"
```

---

### String Literal Formats

```js
// Single quotes
const str1 = 'Hello';

// Double quotes
const str2 = "World";

// Backticks (template literals)
const str3 = `Hello, World`;

// Escaping
const quote = "He said \"Hello\""; // He said "Hello"
const newline = "Line 1\nLine 2";  // Line 1
                                    // Line 2
const tab = "Col1\tCol2";          // Col1    Col2
const backslash = "C:\\Windows";   // C:\Windows

// No difference in functionality between ' and "
const same = 'Hello' === "Hello"; // true

// Multi-line with backticks
const multi = `
    Line 1
    Line 2
    Line 3
`;

// Comparison
// ┌────────────────┬──────────────┬──────────────┬──────────────────────┐
// │ Feature        │ Single '     │ Double "     │ Backtick `           │
// ├────────────────┼──────────────┼──────────────┼──────────────────────┤
// │ Interpolation  │ ❌           │ ❌           │ ✅ ${expr}           │
// │ Multi-line     │ ❌ (need \n) │ ❌ (need \n) │ ✅ (natural)         │
// │ Escape '       │ \\'          │ '            │ '                    │
// │ Escape "       │ "            │ \\"          │ "                    │
// │ Escape `       │ `            │ `            │ \\`                   │
// └────────────────┴──────────────┴──────────────┴──────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. What are all the literal types in JavaScript?

```js
// String literal
const str = "Hello";

// Number literal
const num = 42;
const float = 3.14;
const exp = 1e5;

// Boolean literal
const flag = true;
const flag2 = false;

// Null literal
const empty = null;

// Undefined literal
const notSet = undefined;

// Symbol literal
const sym = Symbol("description");
const sym2 = Symbol.for("global"); // Global symbol registry

// BigInt literal
const big = 9007199254740991n;

// Object literal
const obj = { name: "John", age: 30 };

// Array literal
const arr = [1, 2, 3];

// RegExp literal
const regex = /[a-z]+/g;

// Function literal (function expression)
const fn = function(x) { return x * 2; };
const arrow = (x) => x * 2;

// Template literal
const name = "John";
const greeting = `Hello, ${name}!`;
```

---

### Q2. What is the difference between `null` and `undefined`?

```js
// undefined — automatically set by JavaScript
let a;
console.log(a); // undefined

// null — intentionally set by the programmer
let b = null;
console.log(b); // null

// typeof
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" — known bug!

// Loose equality
console.log(null == undefined); // true

// Strict equality
console.log(null === undefined); // false

// When to use which:
// undefined = variable declared but not assigned
// null = intentional absence of value

// Defensive check
function process(value) {
    if (value == null) { // catches both null and undefined
        console.log("No value provided");
    }
}

process(null);      // "No value provided"
process(undefined); // "No value provided"
process(0);         // passes
```

---

### Q3. What are BigInt and when should you use them?

```js
// Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

// Beyond this, precision is lost
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992 (wrong!)

// BigInt solves this
const big = 9007199254740991n;
console.log(big + 1n); // 9007199254740992n
console.log(big + 2n); // 9007199254740993n (correct!)

// BigInt literal with 'n' suffix
const huge = 123456789012345678901234567890n;

// BigInt constructor
const fromNumber = BigInt(123);
const fromString = BigInt("12345678901234567890");

// Cannot mix with Number
// console.log(10n + 5); // TypeError
console.log(10n + BigInt(5)); // 15n

// Division truncates
console.log(10n / 3n); // 3n (not 3.333...)

// Use cases:
// - Financial calculations with large numbers
// - Cryptographic operations
// - High-precision timestamps
// - IDs that exceed MAX_SAFE_INTEGER
```

---

### Q4. What are Symbol literals and what are they used for?

```js
// Symbol — unique, immutable primitive value
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // false — every Symbol is unique

// Unique object keys
const id = Symbol("id");
const user = {
    name: "John",
    [id]: 12345 // hidden property
};
console.log(user.name); // "John"
console.log(user[id]);  // 12345

// Symbols are not enumerable
console.log(Object.keys(user)); // ["name"] — symbol hidden
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(id)]

// Global symbol registry
const globalSym = Symbol.for("app.id");
const sameGlobal = Symbol.for("app.id");
console.log(globalSym === sameGlobal); // true

// Reverse lookup
console.log(Symbol.keyFor(globalSym)); // "app.id"

// Well-known symbols
class MyClass {
    [Symbol.iterator]() {
        let step = 0;
        return {
            next: () => ({ value: step++, done: step > 5 })
        };
    }
}
const instance = new MyClass();
console.log([...instance]); // [0, 1, 2, 3, 4]

// Use cases:
// - Unique property keys to avoid collisions
// - Private-like properties (not truly private, but hidden)
// - Customizing built-in behavior (Symbol.iterator, Symbol.toStringTag)
// - Enum-like values
const Color = {
    RED: Symbol("red"),
    GREEN: Symbol("green"),
    BLUE: Symbol("blue")
};
```

---

### Q5. What is the output of these number literal expressions?

```js
console.log(0.1 + 0.2 === 0.3); // false — floating point precision!
console.log(0.1 + 0.2);         // 0.30000000000000004

// Why? Binary floating point cannot represent 0.1 exactly
// Solution: Use epsilon comparison or decimals

console.log(1/0);    // Infinity
console.log(-1/0);   // -Infinity
console.log(0/0);    // NaN
console.log(Infinity - Infinity); // NaN
console.log(Infinity + 1); // Infinity

console.log(Number("hello")); // NaN
console.log(parseInt("10px")); // 10
console.log(parseFloat("10.5px")); // 10.5
console.log(~~10.7); // 10 — double bitwise NOT (floor)

console.log(1_000_000); // 1000000 — numeric separator
console.log(0b1010);    // 10 — binary
console.log(0o17);      // 15 — octal
console.log(0xFF);      // 255 — hex
```

---

### Q6. What are template literals and their advanced features?

```js
// Basic interpolation
const name = "John";
const age = 30;
console.log(`Name: ${name}, Age: ${age}`);

// Expression interpolation
console.log(`Sum: ${5 + 10}`); // "Sum: 15"
console.log(`Max: ${Math.max(1, 5, 3)}`); // "Max: 5"

// Multi-line
const html = `
    <div>
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
`;

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => {
        return acc + str + (values[i] ? `**${values[i]}**` : '');
    }, '');
}
const result = highlight`Hello ${name}, you are ${age} years old`;
// "Hello **John**, you are **30** years old"

// Raw strings
const path = String.raw`C:\\Users\\John\\Documents`;
console.log(path); // "C:\\Users\\John\\Documents" (no escape needed)

// Accessing raw strings in tag function
function logRaw(strings, ...values) {
    console.log(strings.raw); // Array of raw strings
}
logRaw`Hello\nWorld`;

// Nested template literals
const items = ["apple", "banana", "cherry"];
const list = `
    <ul>
        ${items.map(item => `<li>${item}</li>`).join('')}
    </ul>
`;
```

---

### Q7. What are the special values in JavaScript numbers?

```js
// Infinity
console.log(Infinity);       // Infinity
console.log(Infinity + 1);   // Infinity
console.log(Infinity * 2);   // Infinity
console.log(Infinity - Infinity); // NaN
console.log(1 / 0);          // Infinity
console.log(-1 / 0);         // -Infinity

// NaN
console.log(NaN);            // NaN
console.log(typeof NaN);     // "number"
console.log(NaN === NaN);    // false — NaN is not equal to itself!
console.log(Number.isNaN(NaN)); // true
console.log(isNaN("hello")); // true — coerces first
console.log(Number.isNaN("hello")); // false — does not coerce

// -0
console.log(0 === -0);       // true
console.log(1 / 0);          // Infinity
console.log(1 / -0);         // -Infinity
console.log(Object.is(0, -0)); // false — Object.is distinguishes 0 and -0

// MIN_VALUE and MAX_VALUE
console.log(Number.MIN_VALUE);       // 5e-324 (smallest positive)
console.log(Number.MAX_VALUE);       // 1.79e+308 (largest positive)
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.MAX_SAFE_INTEGER);  // 9007199254740991
console.log(Number.EPSILON);         // 2.22e-16 (smallest difference)
```

---

### Q8. What is the difference between object literals and JSON?

```js
// JavaScript Object Literal
const jsObj = {
    name: "John",
    age: 30,
    greet: function() { return "Hello"; }, // Functions allowed
    isActive: true,
    score: null,
    data: undefined // Allowed in JS objects
};

// JSON (JavaScript Object Notation)
const jsonStr = `{
    "name": "John",
    "age": 30,
    "isActive": true,
    "score": null
}`;

// Key differences:
// ┌────────────────┬────────────────────┬────────────────────┐
// │ Feature        │ JS Object Literal  │ JSON               │
// ├────────────────┼────────────────────┼────────────────────┤
// │ Key quotes     │ Optional           │ Required (double)  │
// │ String quotes  │ Single or double   │ Double only        │
// │ Trailing comma │ Allowed            │ Not allowed        │
// │ Comments       │ Allowed            │ Not allowed        │
// │ Functions      │ Allowed            │ Not allowed        │
// │ undefined      │ Allowed            │ Not allowed        │
// │ undefined value│ Allowed            │ Converts to null   │
// │ Date           │ Date object        │ String (ISO format)│
// └────────────────┴────────────────────┴────────────────────┘

// Convert between them
const json = JSON.stringify(jsObj); // Object → JSON string
const obj = JSON.parse(jsonStr);     // JSON string → Object
```

---

## 3. Quick Reference

### Number Formats

```js
// Literals
42          // Decimal
0b1010      // Binary
0o17        // Octal
0xFF        // Hexadecimal
1e6         // Exponential
1_000_000   // Numeric separator (ES2021)
123n        // BigInt

// Special values
Infinity, -Infinity, NaN
Number.MAX_VALUE, Number.MIN_VALUE
Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER
Number.EPSILON, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
```

### String Escape Sequences

```js
\\     // Backslash
\'     // Single quote
\"     // Double quote
\n     // Newline
\r     // Carriage return
\t     // Tab
\b     // Backspace
\f     // Form feed
\uXXXX // Unicode character (e.g., \u0041 = "A")
\u{X}  // Unicode code point (e.g., \u{1F600} = emoji)
```

---

## 4. Key Takeaways

1. **Literals are raw values** — not variables, not expressions, just fixed data.
2. **JavaScript has 8 primitive types** — string, number, bigint, boolean, undefined, symbol, null.
3. **Template literals (`` ` ``) support interpolation and multi-line** — prefer over concatenation.
4. **`typeof null === "object"`** — a historical bug, always check with `=== null`.
5. **`undefined` means not assigned** — `null` means intentionally empty.
6. **BigInt (`123n`) handles numbers beyond `MAX_SAFE_INTEGER`** — cannot mix with Number.
7. **Symbol creates unique values** — perfect for hidden object properties and custom iteration.
8. **Floating point arithmetic is imprecise** — `0.1 + 0.2 !== 0.3`.
9. **NaN is not equal to itself** — use `Number.isNaN()` to check.
10. **JSON is a subset of JavaScript object literals** — keys must be quoted, no functions, no comments.

---

**Happy coding! 🚀**

*Literals are the building blocks of every JavaScript program.*
