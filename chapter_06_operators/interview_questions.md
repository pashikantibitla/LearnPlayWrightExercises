# Chapter 6 — Interview Questions & Deep Dive: Operators

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### Operator Categories

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         OPERATOR CATEGORIES                             │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐│
│  │ ARITHMETIC         │  │ COMPARISON         │  │ LOGICAL            ││
│  │ +  -  *  /  %  **  │  │ ==  ===  !=  !==  │  │ &&  ||  !          ││
│  │ ++  --             │  │ >  <  >=  <=       │  │ ??  ?.             ││
│  └────────────────────┘  └────────────────────┘  └────────────────────┘│
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐│
│  │ ASSIGNMENT         │  │ BITWISE            │  │ OTHER              ││
│  │ =  +=  -=  *=  /=  │  │ &  |  ^  ~  <<  >> │  │ typeof  instanceof ││
│  │ %=  **=  ??=  ||=  │  │ >>>                │  │ delete  in  void   ││
│  └────────────────────┘  └────────────────────┘  └────────────────────┘│
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐│
│  │ TERNARY            │  │ SPREAD/REST        │  │ COMMA              ││
│  │ ? :                │  │ ...                │  │ ,                  ││
│  └────────────────────┘  └────────────────────┘  └────────────────────┘│
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Strict vs Loose Equality — The Full Coercion Table

```
┌─────────────────────┬─────────────────────┬─────────────────────┐
│ Expression          │ == (Loose)          │ === (Strict)        │
├─────────────────────┼─────────────────────┼─────────────────────┤
│ "5" == 5            │ true                │ false               │
│ 0 == false          │ true                │ false               │
│ "" == 0             │ true                │ false               │
│ null == undefined   │ true                │ false               │
│ [1,2] == "1,2"      │ true                │ false               │
│ [] == false         │ true                │ false               │
│ {} == "[object Object]"│ true             │ false               │
│ NaN == NaN          │ false               │ false               │
│ +0 == -0            │ true                │ true                │
│ new String("a") == "a"│ true             │ false               │
└─────────────────────┴─────────────────────┴─────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. What is the difference between `==` and `===`?

```js
// Loose equality (==) — type coercion happens
console.log("5" == 5);        // true — string coerced to number
console.log(0 == false);      // true — false coerced to 0
console.log(null == undefined); // true — special rule
console.log("" == 0);         // true — empty string coerced to 0

// Strict equality (===) — no coercion, type must match
console.log("5" === 5);        // false — different types
console.log(0 === false);      // false — different types
console.log(null === undefined); // false — different types
console.log("" === 0);         // false — different types

// Best practice: Always use ===
function isEqual(a, b) {
    return a === b;
}

// One exception: null/undefined shorthand
if (value == null) { // catches both null and undefined
    console.log("No value");
}
```

---

### Q2. What is the output of the following loose equality expressions?

```js
console.log([] == []);        // false — different objects
console.log([] == ![]);       // true — [] is truthy, ![] is false, [] == false
console.log({} == {});        // false — different objects
console.log({} == !{});       // false — {} is truthy, !{} is false, {} != false
console.log("" == false);     // true — both coerce to 0
console.log("0" == false);    // true — both coerce to 0
console.log(0 == "0");        // true — both coerce to 0
console.log(false == "0");    // true — both coerce to 0
console.log(null == false);   // false — null only equals undefined
console.log(undefined == false); // false
console.log(NaN == NaN);      // false — NaN is never equal to anything
console.log(NaN === NaN);     // false
```

---

### Q3. What is the difference between `||` and `??`?

```js
// || (Logical OR) — returns first TRUTHY value
console.log("hello" || "world");  // "hello"
console.log(0 || "default");    // "default" — 0 is falsy!
console.log("" || "default");   // "default" — empty string is falsy!
console.log(false || "default"); // "default" — false is falsy!
console.log(null || "default");  // "default"
console.log(undefined || "default"); // "default"

// ?? (Nullish Coalescing) — returns first NON-NULLISH value
console.log("hello" ?? "world");  // "hello"
console.log(0 ?? "default");    // 0 — 0 is not nullish!
console.log("" ?? "default");   // "" — empty string is not nullish!
console.log(false ?? "default"); // false — false is not nullish!
console.log(null ?? "default");  // "default" — null IS nullish
console.log(undefined ?? "default"); // "default" — undefined IS nullish

// Nullish values: null, undefined
// Falsy values: false, 0, "", null, undefined, NaN

// Use case: Default values
const count = 0;
const result1 = count || 10;   // 10 — wrong! 0 is valid
const result2 = count ?? 10;     // 0 — correct! 0 is not nullish

// Practical example
function getConfig(userConfig) {
    const timeout = userConfig.timeout ?? 5000; // 0 is valid
    const retries = userConfig.retries || 3;    // 0 would default to 3
    return { timeout, retries };
}
```

---

### Q4. What is the output of the following increment/decrement expressions?

```js
// Pre-increment: increment first, then return
let a = 5;
console.log(++a); // 6 (a becomes 6, then returns 6)
console.log(a);     // 6

// Post-increment: return first, then increment
let b = 5;
console.log(b++); // 5 (returns 5, then b becomes 6)
console.log(b);   // 6

// Pre-decrement
let c = 5;
console.log(--c); // 4

// Post-decrement
let d = 5;
console.log(d--); // 5
console.log(d);   // 4

// Tricky examples
let x = 1;
console.log(x++ + ++x); // 1 + 3 = 4
// x++ returns 1, then x becomes 2
// ++x increments x to 3, then returns 3

let y = 5;
console.log(y++ + y++ + ++y); // 5 + 6 + 8 = 19
// y++ returns 5, y becomes 6
// y++ returns 6, y becomes 7
// ++y increments y to 8, returns 8
```

---

### Q5. What is the difference between `&&` and `||` as short-circuit operators?

```js
// && (AND) — returns first FALSY value, or last value if all truthy
console.log("hello" && "world");  // "world" — both truthy, returns last
console.log(0 && "world");      // 0 — first falsy, short-circuits
console.log("hello" && 0);      // 0 — second falsy
console.log(null && "world");  // null — first falsy

// || (OR) — returns first TRUTHY value, or last value if all falsy
console.log("hello" || "world"); // "hello" — first truthy
console.log(0 || "world");     // "world" — first falsy, returns second
console.log(0 || "" || null);  // null — all falsy, returns last

// Practical use: Default values
const user = { name: "John" };
const name = user.name || "Anonymous"; // "John"
const role = user.role || "user";      // "user" — default

// Guard patterns
const result = user && user.profile && user.profile.name;
// Returns undefined if any part is null/undefined

// Modern: Optional chaining
const modern = user?.profile?.name; // Same as above, cleaner
```

---

### Q6. What is the output of the following ternary and conditional expressions?

```js
// Ternary operator
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Nested ternary
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // "B"

// Ternary with multiple operations
const result = true ? (console.log("A"), 1) : (console.log("B"), 2);
// "A" is logged, result is 1 (comma operator)

// Logical AND with ternary
const user = { name: "John", isActive: true };
const message = user.isActive && user.name === "John" ? "Welcome John" : "Access denied";
console.log(message); // "Welcome John"
```

---

### Q7. What is the `typeof` operator and what are its quirks?

```js
// typeof returns a string indicating the type
console.log(typeof "hello");      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" — BUG!
console.log(typeof {});           // "object"
console.log(typeof []);           // "object" — arrays are objects
console.log(typeof function(){}); // "function"
console.log(typeof Symbol());     // "symbol"
console.log(typeof 123n);         // "bigint"

// typeof quirks
console.log(typeof NaN);          // "number" — NaN is a number!
console.log(typeof Infinity);     // "number"
console.log(typeof undeclared);   // "undefined" — safe for undeclared vars

// But typeof is NOT safe for TDZ
// console.log(typeof tdz); // ReferenceError if let tdz is declared below
// let tdz;

// typeof with expressions
console.log(typeof (1 + 2));      // "number"
console.log(typeof "hello" + "world"); // "stringworld" — precedence!
console.log(typeof ("hello" + "world")); // "string"
```

---

### Q8. What is the difference between `Object.is()` and `===`?

```js
// Most cases: same behavior
console.log(Object.is(1, 1));     // true
console.log(Object.is("a", "a")); // true
console.log(Object.is({}, {}));   // false — different objects

// Differences:
// NaN comparison
console.log(NaN === NaN);        // false
console.log(Object.is(NaN, NaN)); // true

// -0 vs +0
console.log(-0 === 0);           // true
console.log(Object.is(-0, 0));   // false
console.log(Object.is(-0, -0));  // true
console.log(Object.is(0, 0));    // true

// Same-value-zero (used in Map/Set)
// Map and Set treat -0 and +0 as the same key
const map = new Map();
map.set(0, "zero");
console.log(map.get(-0)); // "zero" — same key!
```

---

### Q9. What is the output of the following compound assignment expressions?

```js
let a = 10;

// Compound assignment
a += 5;  // a = a + 5 = 15
a -= 3;  // a = a - 3 = 12
a *= 2;  // a = a * 2 = 24
a /= 4;  // a = a / 4 = 6
a %= 4;  // a = a % 4 = 2
a **= 3; // a = a ** 3 = 8

// Logical compound assignment (ES2021)
let b = null;
b ??= "default"; // b = b ?? "default" = "default"

let c = false;
c ||= true; // c = c || true = true

let d = 0;
d &&= 5; // d = d && 5 = 0 (0 is falsy, returns 0)

let e = 10;
e &&= 5; // e = e && 5 = 5 (10 is truthy, returns 5)
```

---

### Q10. What is the comma operator and how does it work?

```js
// Comma operator evaluates both operands and returns the last one
let a = (1, 2, 3); // a = 3

// Common use: multiple expressions in for loop
for (let i = 0, j = 10; i < j; i++, j--) {
    console.log(i, j);
}

// In ternary operator
const result = true ? (console.log("A"), 1) : (console.log("B"), 2);
// Logs "A", result is 1

// In arrow functions (be careful!)
const fn = (a, b) => (console.log(a), a + b);
// Logs a, returns a + b

// Practical: Swap variables without temp
let x = 1, y = 2;
x = (y = x + y, y - x); // Not a good pattern — confusing!
// Better: [x, y] = [y, x];

// Precedence: comma is the lowest
let result2 = 1 + 2, 3 + 4; // result2 = 3, 3 + 4 is ignored
let result3 = (1 + 2, 3 + 4); // result3 = 7
```

---

## 3. Quick Reference

### Operator Precedence (Highest to Lowest)

```
()                          Grouping
.  []  new(args)  ()        Member access, call
new                         new (without args)
++  --  (postfix)           Increment/decrement
!  ~  +  -  typeof  void  delete  ++  -- (prefix)
**                          Exponentiation
*  /  %                     Multiplication, division, modulo
+  -                        Addition, subtraction
<<  >>  >>>                 Bitwise shift
<  <=  >  >=  instanceof  in
==  !=  ===  !==            Equality
&                           Bitwise AND
^                           Bitwise XOR
|                           Bitwise OR
&&                          Logical AND
||                          Logical OR
??                          Nullish coalescing
? :                         Ternary
=  +=  -=  *=  /=  %=  **=  &&=  ||=  ??=  Assignment
,                           Comma
```

---

## 4. Key Takeaways

1. **Always use `===` over `==`** — type coercion in `==` causes bugs.
2. **`||` returns first truthy, `??` returns first non-nullish** — `??` is safer for defaults.
3. **`&&` and `||` are short-circuit operators** — they stop evaluating once the result is determined.
4. **`typeof null === "object"`** — a known bug; use `=== null` to check for null.
5. **`NaN === NaN` is false** — use `Number.isNaN()` to check.
6. **`Object.is()` is like `===` but treats `NaN` as equal and `-0` as different from `0`.**
7. **Pre-increment (`++a`) increments before returning; post-increment (`a++`) returns before incrementing.**
8. **The comma operator evaluates both sides and returns the right** — useful in `for` loops.
9. **Operator precedence determines evaluation order** — use parentheses to be explicit.
10. **Logical compound assignment (`??=`, `||=`, `&&=`)** — concise default assignment (ES2021).

---

**Happy coding! 🚀**

*Operators are the verbs of JavaScript — master them to write precise code.*
