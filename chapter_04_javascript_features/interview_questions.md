# Chapter 4 — Interview Questions & Deep Dive: var, let, const, Hoisting & Scope

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### Scope Types in JavaScript

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         SCOPE HIERARCHY                                   │
│                                                                         │
│  Global Scope ──────────────────────────────┐                          │
│  │ Variables accessible everywhere          │                          │
│  │ e.g., var x = 10; (in global)           │                          │
│  │                                          │                          │
│  ├── Function Scope ───────────────────┐   │                          │
│  │   │ var is function-scoped          │   │                          │
│  │   │ e.g., function() { var a = 1; } │   │                          │
│  │   │                                   │   │                          │
│  │   └── Block Scope ──────────────┐   │   │                          │
│  │       │ let/const are block-scoped│   │                          │
│  │       │ e.g., { let b = 2; }     │   │                          │
│  │       └─────────────────────────────┘   │                          │
│  └──────────────────────────────────────────┘                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Hoisting Visualization

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         HOISTING BEHAVIOR                                 │
│                                                                         │
│  var: ────────────────────────────────────────────────────               │
│  │ Declaration hoisted, initialized as undefined                        │
│  │ console.log(x); // undefined                                          │
│  │ var x = 5;                                                            │
│  │                                                                       │
│  let: ────────────────────────────────────────────────────               │
│  │ Declaration hoisted, but NOT initialized (TDZ)                         │
│  │ console.log(y); // ReferenceError                                     │
│  │ let y = 5;                                                            │
│  │                                                                       │
│  const: ─────────────────────────────────────────────────               │
│  │ Same as let — hoisted but in TDZ, must be initialized                  │
│  │                                                                       │
│  function: ────────────────────────────────────────────────               │
│  │ Entire function body hoisted                                           │
│  │ sayHi(); // ✅ Works!                                                 │
│  │ function sayHi() { console.log("Hi"); }                               │
│  │                                                                       │
│  function expression: ──────────────────────────────────               │
│  │ Only var declaration hoisted, NOT the function body                     │
│  │ greet(); // ❌ TypeError                                               │
│  │ var greet = function() { console.log("Hello"); };                       │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. What is the output of the following code?

```js
console.log(a);
var a = 5;

console.log(b);
let b = 10;

sayHello();
function sayHello() {
    console.log("Hello");
}

// greet();
var greet = function() {
    console.log("Greetings");
};
```

**Answer:**
```
undefined
ReferenceError: Cannot access 'b' before initialization
Hello
// greet() would throw TypeError if uncommented
```

**Explanation:**
- `var a` is hoisted and initialized as `undefined`, so `console.log(a)` prints `undefined`.
- `let b` is hoisted but in the TDZ, so `console.log(b)` throws a `ReferenceError`.
- `function sayHello()` is fully hoisted, so the call works.
- `var greet` is hoisted as `undefined`, but `greet()` would throw `TypeError` because `undefined` is not a function.

---

### Q2. Explain the Temporal Dead Zone (TDZ) with examples.

```js
// TDZ starts at the beginning of the block
// and ends at the variable declaration

{
    // TDZ starts here
    console.log(x); // ❌ ReferenceError
    let x = 5;      // TDZ ends here
    console.log(x); // ✅ 5
}

// TDZ with const
{
    // console.log(y); // ❌ ReferenceError
    const y = 10;     // Must be initialized!
}

// typeof in TDZ — also throws!
{
    // console.log(typeof z); // ❌ ReferenceError (not undefined!)
    let z = 20;
}

// var does NOT have TDZ
{
    console.log(typeof w); // "undefined" — no error
    var w = 30;
}

// Nested scopes have separate TDZs
function outer() {
    let a = 1;
    function inner() {
        // console.log(a); // ❌ ReferenceError
        let a = 2; // Different 'a', TDZ applies here
    }
    inner();
}
```

---

### Q3. What is the difference between function scope and block scope?

```js
// Function scope (var)
function test() {
    if (true) {
        var a = 10; // Function-scoped, NOT block-scoped
    }
    console.log(a); // ✅ 10 — leaked out of the block
}
test();

// Block scope (let, const)
function test2() {
    if (true) {
        let b = 20; // Block-scoped
        const c = 30; // Block-scoped
    }
    // console.log(b); // ❌ ReferenceError
    // console.log(c); // ❌ ReferenceError
}
test2();

// Loop scope (var vs let)
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 3, 3, 3
}

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100); // 0, 1, 2
}

// Why? var i is function-scoped, so all closures share the same i.
// let j is block-scoped, so each iteration gets a new j.
```

---

### Q4. What is the output of the following loop with var?

```js
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3

// Fix with let
for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}
// Output: 0, 1, 2

// Fix with IIFE
for (var k = 0; k < 3; k++) {
    (function(capturedK) {
        setTimeout(() => console.log(capturedK), 100);
    })(k);
}
// Output: 0, 1, 2

// Explanation:
// var i is declared in the outer scope (function or global).
// By the time setTimeout callbacks run, the loop has finished and i === 3.
// let j creates a new binding for each iteration, so each callback captures its own value.
```

---

### Q5. What is the difference between var and let in for loops?

```js
// var — loop variable leaks to outer scope
for (var i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // ✅ 3 — leaked out!

// let — loop variable stays in the loop block
for (let j = 0; j < 3; j++) {
    console.log(j); // 0, 1, 2
}
// console.log(j); // ❌ ReferenceError

// const in for loop — can be used for iteration variable
// for (const k = 0; k < 3; k++) { } // ❌ TypeError — k cannot be reassigned

// const in for...of loop — works!
const arr = [1, 2, 3];
for (const item of arr) {
    console.log(item); // 1, 2, 3 — item is re-bound each iteration
}
```

---

### Q6. What is the scope chain?

```js
// Scope chain: inner scopes can access outer scopes
let globalVar = "I am global";

function outer() {
    let outerVar = "I am outer";
    
    function inner() {
        let innerVar = "I am inner";
        console.log(innerVar);  // ✅ Found in inner scope
        console.log(outerVar);  // ✅ Found in outer scope
        console.log(globalVar); // ✅ Found in global scope
    }
    
    inner();
    // console.log(innerVar); // ❌ ReferenceError — outer cannot access inner
}

outer();
// console.log(outerVar); // ❌ ReferenceError — global cannot access outer

// Visual scope chain:
// inner() → outer() → global → null
// If a variable is not found, JS traverses the chain upward.
// If not found anywhere, ReferenceError.
```

---

### Q7. What is lexical scoping?

```js
// Lexical scoping — scope is determined by WHERE the function is defined,
// not where it is called.

let name = "Global";

function outer() {
    let name = "Outer";
    
    function inner() {
        console.log(name); // "Outer" — looks at outer's scope, not caller
    }
    
    return inner;
}

function another() {
    let name = "Another";
    const fn = outer();
    fn(); // "Outer", NOT "Another"!
}

another();

// Explanation:
// inner() is DEFINED inside outer(), so it has access to outer()'s variables.
// Even when called from another(), it still looks at outer()'s scope.
// This is lexical scoping.
```

---

### Q8. What is the output of these hoisting examples?

```js
// Example 1
var x = 1;
function test() {
    console.log(x); // undefined (hoisted var shadows outer x)
    var x = 2;
}
test(); // undefined

// Example 2
var y = 1;
function test2() {
    console.log(y); // 1 — no local y, looks up the chain
    y = 2;
}
test2();
console.log(y); // 2

// Example 3
function test3() {
    // console.log(z); // ReferenceError
    let z = 3;
}
test3();

// Example 4
foo();
var foo = 1;
function foo() { console.log("foo"); }

// What happens:
// 1. Function declaration foo() is hoisted
// 2. var foo is hoisted (but declaration is ignored since foo already exists)
// 3. foo() is called — prints "foo"
// 4. var foo = 1 overwrites foo with number 1
// console.log(typeof foo); // "number"
```

---

### Q9. What is the difference between `var` in global scope and `let` in global scope?

```js
// In browser:
var globalVar = 1;
console.log(window.globalVar); // ✅ 1 — becomes a property of window

let globalLet = 2;
console.log(window.globalLet); // undefined — does NOT become a property of window

// In Node.js:
// var creates a property on global object
// let does NOT create a property on global object

// Both are accessible globally
console.log(globalVar); // 1
console.log(globalLet); // 2

// But only var pollutes the global object
```

---

### Q10. Explain variable shadowing in detail.

```js
let name = "Global";

function outer() {
    let name = "Outer"; // Shadows global name
    
    function inner() {
        let name = "Inner"; // Shadows outer name
        console.log(name); // "Inner"
    }
    
    inner();
    console.log(name); // "Outer"
}

outer();
console.log(name); // "Global"

// Shadowing with var vs let
var x = 10;
function test() {
    var x = 20; // Separate function-scoped variable
    console.log(x); // 20
}
test();
console.log(x); // 10

// Shadowing in blocks
let y = 100;
if (true) {
    let y = 200; // Shadows outer y
    console.log(y); // 200
}
console.log(y); // 100

// Illegal shadowing (var cannot shadow let in same block)
let z = 1;
function test2() {
    // var z = 2; // ❌ SyntaxError in some cases
}
```

---

## 3. Quick Reference

### Hoisting Cheat Sheet

```
┌────────────────────┬──────────┬───────────────┬──────────────────────┐
│ Declaration        │ Hoisted? │ Initial Value │ Usable Before Line?  │
├────────────────────┼──────────┼───────────────┼──────────────────────┤
│ var                │ Yes      │ undefined     │ Yes (but undefined)  │
│ let                │ Yes      │ TDZ (none)    │ No (ReferenceError)  │
│ const              │ Yes      │ TDZ (none)    │ No (ReferenceError)  │
│ function           │ Yes      │ Full body     │ Yes                  │
│ function expression│ Yes (var)│ undefined     │ No (TypeError)       │
│ class              │ Yes      │ TDZ (none)    │ No (ReferenceError)  │
└────────────────────┴──────────┴───────────────┴──────────────────────┘
```

### Scope Comparison

```
┌────────────────────┬────────────────────┬─────────────────────────────┐
│ Feature            │ var                │ let / const                  │
├────────────────────┼────────────────────┼─────────────────────────────┤
│ Scope              │ Function           │ Block                        │
│ Hoisting           │ Yes (undefined)    │ Yes (TDZ)                    │
│ Redeclare          │ Allowed            │ Not allowed                  │
│ Reassign           │ Allowed            │ let: yes, const: no           │
│ Global object      │ Added to window    │ Not added                    │
│ Loop behavior      │ Leaks outside      │ Stays inside                  │
│ Closure behavior   │ Shared (one var)   │ Separate per iteration        │
└────────────────────┴────────────────────┴─────────────────────────────┘
```

---

## 4. Key Takeaways

1. **`var` is function-scoped**, `let` and `const` are block-scoped.
2. **All declarations are hoisted**, but `let`/`const` enter the TDZ.
3. **The TDZ** is the period between hoisting and initialization where accessing the variable throws a `ReferenceError`.
4. **Function declarations are fully hoisted** — body and all.
5. **Function expressions are NOT hoisted** as functions — only the `var` declaration is.
6. **Use `let` in `for` loops** — each iteration gets a new binding.
7. **`var` pollutes the global object** (`window` in browser, `global` in Node); `let`/`const` do not.
8. **Lexical scoping** — scope is determined by where the function is defined, not where it is called.
9. **Scope chain** — inner scopes can access outer scopes, but not vice versa.
10. **Always prefer `const`**, then `let`, never `var`.

---

**Happy coding! 🚀**

*Understanding scope and hoisting is the key to avoiding 80% of JavaScript bugs.*
