# Chapter 10 — Interview Questions & Deep Dive: Loops

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### Loop Types

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         LOOP TYPES IN JAVASCRIPT                        │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │ for                │  │ while              │  │ do-while           │  │
│  │ ───────────────────│  │ ───────────────────│  │ ───────────────────│  │
│  │ for (init; cond;   │  │ while (cond) {     │  │ do {               │  │
│  │      update) {      │  │   // code          │  │   // code          │  │
│  │   // code           │  │ }                  │  │ } while (cond);    │  │
│  │ }                   │  │                    │  │                    │  │
│  │                     │  │ Pre-test loop      │  │ Post-test loop     │  │
│  │ Most flexible       │  │ May run 0 times    │  │ Runs at least 1    │  │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘  │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │ for...of           │  │ for...in           │  │ forEach            │  │
│  │ ───────────────────│  │ ───────────────────│  │ ───────────────────│  │
│  │ for (item of arr)  │  │ for (key in obj)   │  │ arr.forEach(fn)    │  │
│  │                    │  │                    │  │                    │  │
│  │ Values of iterable │  │ Keys of object     │  │ Array method       │  │
│  │ Arrays, strings,     │  │ Including inherited│  │ No break/continue  │  │
│  │ maps, sets           │  │ (use hasOwnProperty)│  │ Returns undefined  │  │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. What is the difference between `for`, `while`, and `do-while`?

```js
// for loop — pre-test, flexible
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// while loop — pre-test, may not execute
let i = 0;
while (i < 5) {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
}

// do-while — post-test, always executes at least once
let j = 0;
do {
    console.log(j); // 0, 1, 2, 3, 4
    j++;
} while (j < 5);

// Edge case: do-while runs at least once
let k = 10;
do {
    console.log(k); // 10 (printed even though condition is false)
} while (k < 5);

// Comparison table:
// ┌────────────────────┬────────────────────┬────────────────────┬────────────────────┐
// │ Feature            │ for                │ while              │ do-while            │
// ├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
// │ Test timing        │ Before iteration   │ Before iteration   │ After iteration   │
// │ Min iterations     │ 0                  │ 0                  │ 1                  │
// │ Use case           │ Known iterations   │ Unknown iterations │ Always run once   │
// │ Counter            │ Built-in           │ Manual             │ Manual             │
// │ Break/continue     │ ✅                 │ ✅                 │ ✅                 │
// └────────────────────┴────────────────────┴────────────────────┴────────────────────┘
```

---

### Q2. What is the output of these for loop traps?

```js
// Trap 1: Off-by-one error
for (let i = 0; i <= 5; i++) { // <= instead of <
    console.log(i); // 0, 1, 2, 3, 4, 5 (6 iterations!)
}

// Trap 2: Missing increment
for (let i = 0; i < 5; ) {
    console.log(i); // Infinite loop! i never increments
    // i++; // Missing!
}

// Trap 3: var in loop
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 3, 3, 3
}
// Fix: use let
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 0, 1, 2
}

// Trap 4: Modifying loop variable inside
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 2, 4
    i++; // Skips next iteration!
}

// Trap 5: Float loop
for (let i = 0; i < 1; i += 0.1) {
    console.log(i); // 0, 0.1, 0.2... but may miss 1 due to float precision
}
```

---

### Q3. What is the difference between `for...of`, `for...in`, and `forEach`?

```js
const arr = ["a", "b", "c"];
const obj = { a: 1, b: 2, c: 3 };

// for...of — values of iterable
for (const item of arr) {
    console.log(item); // a, b, c
}

// for...in — keys (including inherited)
for (const key in obj) {
    console.log(key, obj[key]); // a 1, b 2, c 3
}

// for...in on array — indices as strings
for (const index in arr) {
    console.log(index, arr[index]); // "0" a, "1" b, "2" c
}

// forEach — array method, no break
arr.forEach((item, index) => {
    console.log(index, item); // 0 a, 1 b, 2 c
});

// Differences:
// ┌────────────────────┬────────────────────┬────────────────────┬────────────────────┐
// │ Feature            │ for...of            │ for...in           │ forEach            │
// ├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
// │ Iterates over      │ Values             │ Keys (strings)     │ Values             │
// │ Works on           │ Iterables           │ Objects            │ Arrays only        │
// │ Break/continue     │ ✅                 │ ✅                 │ ❌                 │
// │ Return value       │ N/A                │ N/A                │ undefined          │
// │ Inherited props    │ No                 │ Yes (use hasOwn)   │ No                 │
// │ Async support      │ ✅                 │ ✅                 │ ❌                 │
// │ Performance        │ Fast               │ Slow               │ Slower             │
// └────────────────────┴────────────────────┴────────────────────┴────────────────────┘
```

---

### Q4. What is the difference between `break` and `continue`?

```js
// break — exits the loop entirely
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i); // 0, 1, 2, 3, 4
}

// continue — skips current iteration, moves to next
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i); // 0, 1, 2, 3, 4, 6, 7, 8, 9
}

// break in nested loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) break; // Breaks inner loop only
        console.log(i, j); // (0,0), (1,0), (2,0)
    }
}

// labeled break — breaks outer loop
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j === 1) break outer; // Breaks outer loop
        console.log(i, j); // (0,0)
    }
}

// continue in while loop
let n = 0;
while (n < 5) {
    n++;
    if (n === 3) continue;
    console.log(n); // 1, 2, 4, 5
}
```

---

### Q5. What is the output of the following loop with var vs let?

```js
// var — function-scoped, shared across iterations
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 3, 3, 3

// let — block-scoped, new binding per iteration
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2

// Fix var with IIFE
for (var i = 0; i < 3; i++) {
    (function(captured) {
        setTimeout(() => console.log(captured), 100);
    })(i);
}
// Output: 0, 1, 2

// Fix var with let inside
for (var i = 0; i < 3; i++) {
    let j = i;
    setTimeout(() => console.log(j), 100);
}
// Output: 0, 1, 2
```

---

### Q6. What are the differences between `forEach`, `map`, and `for` loops?

```js
const arr = [1, 2, 3, 4, 5];

// for loop — most control, can break
const forResult = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 3) break; // ✅ Can break
    forResult.push(arr[i] * 2);
}
console.log(forResult); // [2, 4]

// forEach — cleaner, no break
arr.forEach((item, index) => {
    // if (item === 3) break; // ❌ SyntaxError!
    console.log(index, item);
});

// map — returns new array
const doubled = arr.map(item => item * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// for...of — clean, can break
const ofResult = [];
for (const item of arr) {
    if (item === 3) break; // ✅ Can break
    ofResult.push(item * 2);
}
console.log(ofResult); // [2, 4]

// Performance comparison
// for loop is fastest (especially cached length)
// for...of is slightly slower
// forEach is slowest (function call overhead)
// map is similar to forEach but creates new array
```

---

### Q7. What is the output of this while loop trap?

```js
// Trap 1: Infinite loop
// let i = 0;
// while (i < 5) {
//     console.log(i); // 0, 0, 0... forever!
//     // i++ missing!
// }

// Trap 2: Off-by-one in do-while
let count = 0;
do {
    console.log(count); // 0, 1, 2 (3 iterations)
    count++;
} while (count < 3);

// Trap 3: Condition never met
let num = 10;
while (num < 5) {
    console.log(num); // Never printed!
}

// Trap 4: while with continue
let x = 0;
while (x < 5) {
    x++;
    if (x === 3) continue;
    console.log(x); // 1, 2, 4, 5
}

// Trap 5: while with break
let y = 0;
while (true) {
    if (y === 5) break;
    console.log(y); // 0, 1, 2, 3, 4
    y++;
}
```

---

### Q8. How do you iterate over an object safely?

```js
const obj = {
    name: "John",
    age: 30,
    city: "NYC"
};

// Add inherited property
Object.prototype.nationality = "USA";

// for...in — includes inherited
for (const key in obj) {
    console.log(key, obj[key]); // name, age, city, nationality
}

// Safe for...in with hasOwnProperty
for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(key, obj[key]); // name, age, city
    }
}

// Object.keys — own enumerable only
Object.keys(obj).forEach(key => {
    console.log(key, obj[key]); // name, age, city
});

// Object.entries — key-value pairs
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value); // name John, age 30, city NYC
});

// Object.values — values only
Object.values(obj).forEach(value => {
    console.log(value); // John, 30, NYC
});

// Modern: for...of with Object.keys
for (const key of Object.keys(obj)) {
    console.log(key, obj[key]);
}
```

---

### Q9. How do you iterate over arrays with index and value?

```js
const arr = ["a", "b", "c"];

// Method 1: for with index
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]); // 0 a, 1 b, 2 c
}

// Method 2: for...of with entries
for (const [index, value] of arr.entries()) {
    console.log(index, value); // 0 a, 1 b, 2 c
}

// Method 3: forEach
arr.forEach((value, index) => {
    console.log(index, value); // 0 a, 1 b, 2 c
});

// Method 4: for...in (not recommended for arrays)
for (const index in arr) {
    console.log(index, arr[index]); // "0" a, "1" b, "2" c
}

// Method 5: while
let i = 0;
while (i < arr.length) {
    console.log(i, arr[i]);
    i++;
}

// Method 6: do-while
let j = 0;
do {
    console.log(j, arr[j]);
    j++;
} while (j < arr.length);

// Performance: for loop with cached length is fastest
// for (let i = 0, len = arr.length; i < len; i++) { ... }
```

---

### Q10. What are common loop optimization techniques?

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Technique 1: Cache array length
for (let i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i]);
}

// Technique 2: Reverse loop (slightly faster, no length check)
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// Technique 3: Use while for simple loops
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

// Technique 4: Avoid creating functions in loops (for forEach)
const process = (item) => console.log(item);
arr.forEach(process); // Better than inline arrow function

// Technique 5: Break early when possible
let found = false;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
        found = true;
        break; // Stop searching!
    }
}

// Technique 6: Use for...of for iterables
for (const item of arr) {
    console.log(item);
}

// Technique 7: Use for...of with Set/Map
const set = new Set([1, 2, 3]);
for (const item of set) {
    console.log(item);
}
```

---

## 3. Quick Reference

### Loop Control

```js
// break — exits loop
for (...) { if (condition) break; }

// continue — skips iteration
for (...) { if (condition) continue; }

// labeled break — exits outer loop
outer: for (...) {
    for (...) { if (condition) break outer; }
}

// return — exits function (and loop)
function findItem(arr) {
    for (const item of arr) {
        if (item === target) return item;
    }
}
```

---

## 4. Key Takeaways

1. **Use `for` when you know the number of iterations** — most flexible and fastest.
2. **Use `while` when the condition is dynamic** — may run 0 times.
3. **Use `do-while` when the block must run at least once** — post-test condition.
4. **Use `for...of` for values of iterables** — clean syntax, can break.
5. **Use `for...in` for object keys** — but always check `hasOwnProperty`.
6. **Avoid `forEach` if you need to break** — use `for` or `for...of` instead.
7. **`forEach` is not async-friendly** — `for...of` with `await` works better.
8. **Use `let` in loops** — each iteration gets its own binding.
9. **Cache array length** — `for (let i = 0, len = arr.length; i < len; i++)`.
10. **Break early when possible** — don't iterate more than necessary.

---

**Happy coding! 🚀**

*Loops are the engines of iteration — choose the right one for the job.*
