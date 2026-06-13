# Chapter 7 — Interview Questions & Deep Dive: If / Else Statements

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### If / Else Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         IF / ELSE FLOW                                  │
│                                                                         │
│  if (condition) { ──────────────────────┐                                │
│  │    // true branch                    │                                │
│  │ } else if (condition2) { ──────────┐ │                                │
│  │    // second condition true         │ │                                │
│  │ } else if (condition3) { ──────────┐ │                                │
│  │    // third condition true          │ │                                │
│  │ } else { ──────────────────────────┐ │                                │
│  │    // all conditions false          │ │                                │
│  │ }                                    │                                │
│  └──────────────────────────────────────┘                                │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │ TRUTHY VALUES                    │ FALSY VALUES                 │   │
│  │ ─────────────────────────────────│──────────────────────────────│   │
│  │ • true                           │ • false                      │   │
│  │ • Any non-zero number            │ • 0                          │   │
│  │ • Any non-empty string           │ • "" (empty string)          │   │
│  │ • Any object (including {})      │ • null                       │   │
│  │ • Any array (including [])       │ • undefined                  │   │
│  │ • Functions                      │ • NaN                        │   │
│  └─────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Nested If / Else

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      NESTED IF / ELSE PATTERN                           │
│                                                                         │
│  if (condition1) {                                                     │
│      if (condition2) {                                                 │
│          // Both true                                                  │
│      } else {                                                          │
│          // 1 true, 2 false                                            │
│      }                                                                 │
│  } else {                                                              │
│      // 1 false                                                        │
│  }                                                                     │
│                                                                         │
│  Alternative: Use logical operators instead of nesting                 │
│  if (condition1 && condition2) { ... }                                 │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. What are truthy and falsy values in JavaScript?

```js
// Falsy values (evaluate to false in conditionals)
if (false)      console.log("false");       // Not printed
if (0)          console.log("0");             // Not printed
if ("")         console.log("empty string");  // Not printed
if (null)       console.log("null");          // Not printed
if (undefined)  console.log("undefined");     // Not printed
if (NaN)        console.log("NaN");           // Not printed

// Truthy values (evaluate to true)
if (true)        console.log("true");         // Printed
if (1)           console.log("1");             // Printed
if ("hello")     console.log("hello");         // Printed
if ({})          console.log("empty object");  // Printed
if ([])          console.log("empty array");   // Printed
if (() => {})    console.log("function");     // Printed
if (-1)          console.log("-1");           // Printed
if ("0")        console.log("string 0");      // Printed
if (" ")        console.log("space string");   // Printed

// Edge case: document.all (legacy browser falsy)
// Modern JavaScript: Only 6 falsy values
```

---

### Q2. What is the difference between `if (x)` and `if (x != null)`?

```js
// if (x) — checks truthiness
function checkTruthy(x) {
    if (x) {
        console.log("Truthy:", x);
    } else {
        console.log("Falsy:", x);
    }
}

checkTruthy(0);        // Falsy: 0
 checkTruthy("");       // Falsy: ""
checkTruthy(null);     // Falsy: null
checkTruthy(undefined); // Falsy: undefined
checkTruthy(false);    // Falsy: false

// Problem: 0 and empty string are valid values!
// if (x != null) — checks for null or undefined only
function checkExists(x) {
    if (x != null) { // catches both null and undefined
        console.log("Exists:", x);
    } else {
        console.log("Missing:", x);
    }
}

checkExists(0);        // Exists: 0
checkExists("");       // Exists: ""
checkExists(null);     // Missing: null
checkExists(undefined); // Missing: undefined
checkExists(false);    // Exists: false

// Best practice: explicit checks
function checkValid(x) {
    if (x !== null && x !== undefined && x !== "") {
        console.log("Valid:", x);
    }
}
```

---

### Q3. What is the output of these if-else expressions?

```js
// Example 1: Implicit coercion
let a = "0";
if (a) {
    console.log("String '0' is truthy"); // Printed
}
if (a == 0) {
    console.log("String '0' == 0"); // Printed (coerced)
}
if (a === 0) {
    console.log("String '0' === 0"); // NOT printed
}

// Example 2: Empty object
if ({}) {
    console.log("{} is truthy"); // Printed
}

// Example 3: Empty array
if ([]) {
    console.log("[] is truthy"); // Printed
}

// Example 4: Nested if
let x = 5, y = 10;
if (x > 0) {
    if (y > 0) {
        console.log("Both positive"); // Printed
    }
}

// Simplified with &&
if (x > 0 && y > 0) {
    console.log("Both positive"); // Same result
}
```

---

### Q4. How do you implement a leap year check?

```js
function isLeapYear(year) {
    // A year is a leap year if:
    // 1. Divisible by 4, AND
    // 2. Not divisible by 100, UNLESS
    // 3. Divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

// Test cases
console.log(isLeapYear(2000)); // true — divisible by 400
console.log(isLeapYear(1900)); // false — divisible by 100 but not 400
console.log(isLeapYear(2024)); // true — divisible by 4, not by 100
console.log(isLeapYear(2023)); // false — not divisible by 4

// Without else
function isLeapYearSimple(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
```

---

### Q5. How do you implement a grade calculator?

```js
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else if (score >= 0 && score < 60) {
        return "F";
    } else {
        return "Invalid score";
    }
}

// Using switch (with Math.floor)
function getGradeSwitch(score) {
    const grade = Math.floor(score / 10);
    switch (grade) {
        case 10: case 9: return "A";
        case 8: return "B";
        case 7: return "C";
        case 6: return "D";
        default: return score >= 0 && score < 60 ? "F" : "Invalid";
    }
}

// Using ternary (not recommended for many cases)
function getGradeTernary(score) {
    return score >= 90 ? "A" :
           score >= 80 ? "B" :
           score >= 70 ? "C" :
           score >= 60 ? "D" :
           score >= 0 ? "F" : "Invalid";
}

// Test cases
console.log(getGrade(95));  // A
console.log(getGrade(82));  // B
console.log(getGrade(45));  // F
console.log(getGrade(101)); // Invalid
console.log(getGrade(-5));  // Invalid
```

---

### Q6. What is the difference between `if (a == b)` and `if (a === b)` in conditionals?

```js
// Loose equality (==) — type coercion
if ("5" == 5) console.log("Loose: true");  // Printed
if (0 == false) console.log("Loose: true"); // Printed
if (null == undefined) console.log("Loose: true"); // Printed

// Strict equality (===) — no coercion
if ("5" === 5) console.log("Strict: true");  // NOT printed
if (0 === false) console.log("Strict: true"); // NOT printed
if (null === undefined) console.log("Strict: true"); // NOT printed

// Best practice: Always use === in conditionals
function isValid(status) {
    if (status === "active") {
        return true;
    }
    return false;
}

// Guard clause pattern
function processUser(user) {
    if (user === null || user === undefined) {
        return "No user";
    }
    if (user.isActive !== true) {
        return "Inactive user";
    }
    if (user.name === "") {
        return "Empty name";
    }
    return `Processing ${user.name}`;
}
```

---

### Q7. How do you check if a number is even or odd?

```js
// Using modulus
function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return n % 2 !== 0;
}

// Test cases
console.log(isEven(4));  // true
console.log(isEven(5));  // false
console.log(isOdd(4));   // false
console.log(isOdd(5));   // true

// Negative numbers
console.log(isEven(-4)); // true
console.log(isOdd(-5));  // true

// Edge case: zero
console.log(isEven(0));  // true
console.log(isOdd(0));   // false

// Using bitwise AND (fastest)
function isEvenBitwise(n) {
    return (n & 1) === 0;
}

// Using Math.floor
function isEvenMath(n) {
    return Math.floor(n / 2) * 2 === n;
}
```

---

### Q8. What is the output of these nested if-else expressions?

```js
// Example 1: Nested conditions
let age = 25;
let hasLicense = true;

if (age >= 18) {
    if (hasLicense) {
        console.log("Can drive");
    } else {
        console.log("Need a license");
    }
} else {
    console.log("Too young");
}
// Output: "Can drive"

// Simplified with &&
if (age >= 18 && hasLicense) {
    console.log("Can drive");
} else if (age >= 18) {
    console.log("Need a license");
} else {
    console.log("Too young");
}

// Example 2: Dangling else
if (true)
    if (false)
        console.log("A");
    else
        console.log("B");
// Output: "B" — else matches the nearest if

// Always use braces to avoid ambiguity
if (true) {
    if (false) {
        console.log("A");
    } else {
        console.log("B");
    }
}
```

---

### Q9. How do you implement a triangle classifier?

```js
function classifyTriangle(a, b, c) {
    // Check if valid triangle
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Invalid: sides must be positive";
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid: triangle inequality violated";
    }
    
    // Classify
    if (a === b && b === c) {
        return "Equilateral";
    } else if (a === b || b === c || a === c) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

// Test cases
console.log(classifyTriangle(3, 3, 3)); // Equilateral
console.log(classifyTriangle(3, 3, 4)); // Isosceles
console.log(classifyTriangle(3, 4, 5)); // Scalene
console.log(classifyTriangle(1, 2, 3)); // Invalid
console.log(classifyTriangle(-1, 2, 3)); // Invalid
```

---

### Q10. What is the output of one-line if statements without braces?

```js
// One-line if (no braces)
if (true) console.log("A");

// Only the first statement is part of the if
if (false)
    console.log("B"); // Not printed
    console.log("C"); // Printed! Not part of the if

// Dangerous!
if (false)
    console.log("D");
else
    console.log("E");
    console.log("F"); // Printed! Not part of the else

// Best practice: Always use braces
if (true) {
    console.log("G");
}

// Ternary for one-liners
const result = condition ? "A" : "B";

// Logical AND as guard
condition && console.log("Only if true");
```

---

## 3. Quick Reference

### If / Else Patterns

```js
// Basic if
if (condition) { ... }

// If-else
if (condition) { ... } else { ... }

// If-else if-else
if (c1) { ... } else if (c2) { ... } else { ... }

// Ternary
const result = condition ? "A" : "B";

// Nullish coalescing for defaults
const value = input ?? "default";

// Logical AND for guard
isValid && doSomething();

// Logical OR for fallback
const name = input || "Anonymous";
```

---

## 4. Key Takeaways

1. **JavaScript has 6 falsy values** — `false`, `0`, `""`, `null`, `undefined`, `NaN`.
2. **Empty objects `{}` and empty arrays `[]` are truthy** — not falsy!
3. **Always use `===` in conditionals** — avoids type coercion bugs.
4. **Use guard clauses** — return early for invalid conditions to reduce nesting.
5. **Always use braces `{}`** — even for one-line if statements, to prevent bugs.
6. **`if (x != null)` catches both `null` and `undefined`** — safer than `if (x)`.
7. **`if (x)` would treat `0`, `""`, `false` as invalid** — be explicit about what you need.
8. **Ternary operator `? :` is great for simple assignments** — not for complex logic.
9. **Logical operators (`&&`, `||`) can replace simple if statements** — but keep readability.
10. **Nested if statements can often be flattened** — combine conditions with `&&` and `||`.

---

**Happy coding! 🚀**

*Conditionals are the decision-makers of your code — make them clear and explicit.*
