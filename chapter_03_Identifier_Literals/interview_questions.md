# Chapter 3 — Interview Questions & Deep Dive: Identifiers & Literals

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### Identifier Rules

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         IDENTIFIER RULES                                │
│                                                                         │
│  ✅ ALLOWED:                                                             │
│     • Letters (a-z, A-Z)                                                │
│     • Digits (0-9) — but NOT as first character                         │
│     • Underscore (_)                                                    │
│     • Dollar sign ($)                                                    │
│     • Unicode characters (e.g., é, ñ, 中文)                             │
│                                                                         │
│  ❌ NOT ALLOWED:                                                         │
│     • Cannot start with a digit                                         │
│     • Cannot contain spaces or special characters (!@#%)                │
│     • Cannot be a reserved keyword (let, const, function, etc.)           │
│                                                                         │
│  📌 CASE-SENSITIVE: myVar, myvar, and MyVar are DIFFERENT                │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Naming Conventions

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      NAMING CONVENTIONS TABLE                            │
│  ┌────────────────────┬────────────────────┬─────────────────────────┐   │
│  │ Convention         │ Pattern            │ Example                 │   │
│  ├────────────────────┼────────────────────┼─────────────────────────┤   │
│  │ camelCase          │ lowerUpper         │ getUserInfo, firstName   │   │
│  │ PascalCase         │ UpperUpper         │ UserInfo, PersonClass    │   │
│  │ snake_case         │ lower_lower        │ get_user_info, first_name│   │
│  │ kebab-case         │ lower-lower        │ get-user-info (CSS/HTML) │   │
│  │ SCREAMING_SNAKE_CASE│ UPPER_UPPER       │ MAX_SIZE, API_KEY        │   │
│  │ Hungarian Notation │ typeName           │ strName, bIsActive (old) │   │
│  └────────────────────┴────────────────────┴─────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Comments in JavaScript

```js
// Single-line comment

/*
 * Multi-line comment
 * Used for detailed explanations
 */

/**
 * JSDoc comment — used for documentation
 * @param {string} name — The user's name
 * @param {number} age — The user's age
 * @returns {string} — A greeting message
 */
function greet(name, age) {
    return `Hello ${name}, you are ${age}`;
}

// VS Code shortcut: Ctrl+/ (toggle line comment)
// VS Code shortcut: Shift+Alt+A (toggle block comment)
```

---

## 2. Interview Questions & Coding Examples

### Q1. Which of these are valid JavaScript identifiers?

```js
// Valid identifiers
let myVar;       // ✅
let _private;    // ✅
let $jquery;     // ✅
let userName;    // ✅
let user2;       // ✅
let MAX_SIZE;    // ✅
let имя;         // ✅ (Unicode allowed)

// Invalid identifiers
// let 2user;      // ❌ Cannot start with digit
// let my-var;     // ❌ Hyphen not allowed
// let my var;     // ❌ Space not allowed
// let let;        // ❌ Reserved keyword
// let class;      // ❌ Reserved keyword
// let function;   // ❌ Reserved keyword
// let my@var;     // ❌ Special characters not allowed
```

---

### Q2. What are JavaScript reserved keywords?

```js
// Reserved keywords (cannot be used as identifiers)
// break, case, catch, class, const, continue, debugger, default
// delete, do, else, export, extends, finally, for, function, if
// import, in, instanceof, let, new, return, super, switch, this
// throw, try, typeof, var, void, while, with, yield

// Strict mode reserved words
// implements, interface, let, package, private, protected, public
// static, yield

// Future reserved words
// enum, await, abstract, boolean, byte, char, double, final, float
// goto, int, long, native, short, synchronized, throws, transient, volatile

// All of these will throw a SyntaxError if used as variable names:
// let class = 5;     // ❌
// let return = 10;   // ❌
// let function = 20; // ❌
```

---

### Q3. Explain camelCase, PascalCase, and snake_case with examples.

```js
// camelCase — variables, functions
const firstName = "John";
const lastName = "Doe";
function getUserInfo() {
    return { firstName, lastName };
}

// PascalCase — classes, constructors, components
class UserProfile {
    constructor(name) {
        this.name = name;
    }
}
function MyComponent() {
    return "Hello";
}

// snake_case — constants, configuration
const API_BASE_URL = "https://api.example.com";
const MAX_RETRY_COUNT = 3;
const db_config = { host: "localhost", port: 5432 };

// SCREAMING_SNAKE_CASE — constants, env vars
const ENVIRONMENT = "production";
const SECRET_KEY = "abc123";

// Comparison table
// ┌────────────────────┬────────────────────┬──────────────────────────┐
// │ Convention         │ Use For            │ Example                  │
// ├────────────────────┼────────────────────┼──────────────────────────┤
// │ camelCase          │ Variables, functions│ getUserInfo, firstName   │
// │ PascalCase         │ Classes, components │ UserProfile, MyComponent │
// │ snake_case         │ Config, constants   │ db_config, api_key       │
// │ SCREAMING_SNAKE_CASE│ Global constants    │ MAX_SIZE, API_KEY        │
// │ kebab-case         │ CSS, HTML IDs       │ user-profile, nav-bar    │
// └────────────────────┴────────────────────┴──────────────────────────┘
```

---

### Q4. What is the difference between single-line and multi-line comments?

```js
// Single-line comment: //
// — Cannot span multiple lines
// — Used for quick notes
// — Can be placed at the end of a line
let x = 5; // This is a trailing comment

/* Multi-line comment: /* */
/* — Can span multiple lines
   — Used for detailed explanations
   — Can comment out blocks of code
*/

/* 
 * This is a JSDoc-style comment
 * @param {string} name
 * @returns {string}
 */
function greet(name) {
    return `Hello, ${name}`;
}

// Nesting comments
/* Outer comment
   // Inner single-line comment is okay
   /* But multi-line comments cannot be nested */
// This would be outside the comment */

// Practical: Commenting out code
// console.log("This is disabled");
/*
console.log("This entire block");
console.log("is disabled");
*/
```

---

### Q5. What are the best practices for naming variables?

```js
// ✅ DO's:
// Use descriptive names
const userName = "John";     // Good
const userAge = 30;          // Good
const isActive = true;       // Good
const hasPermission = true;  // Good — boolean prefix

// Use camelCase for variables
const firstName = "John";    // Good
const lastName = "Doe";      // Good

// Use PascalCase for classes
class UserAccount { }        // Good

// Use SCREAMING_SNAKE_CASE for constants
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// ❌ DON'Ts:
// Avoid single-letter names (except loops)
const n = "John";            // Bad — what is n?
const i = 0;                 // Okay for loop counter

// Avoid abbreviations
const usrNm = "John";        // Bad — not clear
const userName = "John";     // Good

// Avoid magic numbers
if (size > 5242880) { }      // Bad — what is this number?
if (size > MAX_FILE_SIZE) { } // Good — self-documenting

// Avoid starting with uppercase unless class
const User = "John";         // Bad — looks like a class
```

---

### Q6. What are JavaScript literals?

```js
// Literals — raw values written directly in code

// String literals
const str1 = "Hello";       // Double quotes
const str2 = 'World';       // Single quotes
const str3 = `Hello`;       // Backticks (template literal)

// Number literals
const num1 = 42;            // Integer
const num2 = 3.14;          // Float
const num3 = 0b1010;        // Binary (10)
const num4 = 0o17;          // Octal (15)
const num5 = 0xFF;          // Hex (255)
const num6 = 1e6;           // Exponential (1,000,000)
const num7 = 1_000_000;    // Numeric separator (ES2021)

// Boolean literals
const flag = true;
const flag2 = false;

// Null literal
const empty = null;

// Undefined literal
const notSet = undefined;

// BigInt literal
const big = 12345678901234567890n;

// Array literal
const arr = [1, 2, 3];

// Object literal
const obj = { name: "John", age: 30 };

// Regular expression literal
const regex = /abc/g;

// Function literal (function expression)
const fn = function(x) { return x * 2; };
```

---

### Q7. What is the difference between a literal and a constructor?

```js
// String literal vs constructor
const literal = "hello";           // typeof: "string"
const constructed = new String("hello"); // typeof: "object"

console.log(typeof literal);       // "string"
console.log(typeof constructed);   // "object"
console.log(literal === constructed); // false — different types!
console.log(literal == constructed);  // true — coercion happens

// Number literal vs constructor
const numLiteral = 42;
const numConstructed = new Number(42);
console.log(typeof numLiteral);       // "number"
console.log(typeof numConstructed);   // "object"

// Best practice: Always use literals
// They are simpler, faster, and don't have object wrapper overhead

// Array literal vs constructor
const arrLiteral = [1, 2, 3];       // ✅ Preferred
const arrConstructed = new Array(1, 2, 3); // ⚠️ Avoid

// Object literal vs constructor
const objLiteral = { x: 1 };        // ✅ Preferred
const objConstructed = new Object(); // ⚠️ Avoid
```

---

### Q8. What are template literals and their features?

```js
// Basic template literal
const name = "John";
const message = `Hello, ${name}!`; // "Hello, John!"

// Expression interpolation
const a = 5;
const b = 10;
console.log(`Sum: ${a + b}`); // "Sum: 15"

// Multi-line strings
const multiLine = `
    Line 1
    Line 2
    Line 3
`;
console.log(multiLine);

// Tagged templates
function highlight(strings, ...values) {
    return strings.reduce((acc, str, i) => {
        return acc + str + (values[i] ? `<b>${values[i]}</b>` : '');
    }, '');
}
const user = "John";
const age = 30;
const result = highlight`User ${user} is ${age} years old`;
// "User <b>John</b> is <b>30</b> years old"

// Raw strings
const raw = String.raw`C:\\Windows\\System32`;
console.log(raw); // "C:\\Windows\\System32" (backslashes preserved)

// Comparison with regular strings
// ┌────────────────────┬────────────────────┬──────────────────────────┐
// │ Feature            │ Regular String     │ Template Literal         │
// ├────────────────────┼────────────────────┼──────────────────────────┤
// │ Quotes             │ ' or "             │ `                        │
// │ Multi-line         │ Needs \\n          │ Automatic                │
// │ Interpolation      │ + concatenation    │ ${expression}            │
// │ Expression         │ ❌                 │ ✅                       │
// │ Tagged             │ ❌                 │ ✅                       │
// │ Raw strings        │ ❌                 │ ✅                       │
// └────────────────────┴────────────────────┴──────────────────────────┘
```

---

## 3. Quick Reference

### Identifier Rules Summary

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      VALID IDENTIFIER CHECKLIST                            │
│  ✅ Starts with letter, _, or $                                          │
│  ✅ Contains only letters, digits, _, $                                  │
│  ✅ Is not a reserved keyword                                            │
│  ✅ Case-sensitive                                                       │
│  ✅ Can use Unicode characters                                           │
│  ❌ Cannot start with a digit                                            │
│  ❌ Cannot contain spaces or special characters                          │
└─────────────────────────────────────────────────────────────────────────┘
```

### Reserved Keywords

```
break     case      catch     class     const     continue
debugger  default   delete    do        else      export
extends   false     finally   for       function  if
import    in        instanceof new       null      return
super     switch    this      throw     true      try
typeof    var       void      while     with      yield
```

---

## 4. Key Takeaways

1. **Identifiers must start with letter, `_`, or `$`** — never with a digit.
2. **JavaScript is case-sensitive** — `myVar` and `myvar` are different.
3. **Reserved keywords cannot be used as identifiers** — `let`, `const`, `class`, etc.
4. **Use camelCase for variables and functions** — `getUserInfo`.
5. **Use PascalCase for classes and components** — `UserProfile`.
6. **Use SCREAMING_SNAKE_CASE for constants** — `MAX_SIZE`.
7. **Template literals (`` ` ``) support interpolation and multi-line** — prefer over concatenation.
8. **Always use literals instead of constructors** — `