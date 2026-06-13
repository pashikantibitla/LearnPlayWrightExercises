# Chapter 12 — Interview Questions & Deep Dive: Functions

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### Function Types

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         FUNCTION TYPES                                  │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │ Declaration        │  │ Expression         │  │ Arrow              │  │
│  │ ───────────────────│  │ ───────────────────│  │ ───────────────────│  │
│  │ function name() {} │  │ const fn =         │  │ const fn = () => {}│  │
│  │                    │  │   function() {}    │  │                    │  │
│  │ Hoisted ✅         │  │ Not hoisted ❌     │  │ Not hoisted ❌     │  │
│  │ Named ✅           │  │ Can be named       │  │ Anonymous (mostly) │  │
│  │                    │  │                    │  │ No own this        │  │
│  │                    │  │                    │  │ Concise syntax     │  │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘  │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │ IIFE               │  │ Constructor        │  │ Generator          │  │
│  │ ───────────────────│  │ ───────────────────│  │ ───────────────────│  │
│  │ (function() {} )() │  │ function User() {} │  │ function* gen() {} │  │
│  │                    │  │ new User()         │  │ yield value        │  │
│  │ Immediate invoke   │  │ Creates object     │  │ Pause/resume       │  │
│  │ Private scope      │  │ this = new object  │  │ Iterable           │  │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### The Four Function Types

```
┌────────────────────┬────────────────────┬────────────────────┬────────────────────┐
│ Type               │ Parameters         │ Return Value       │ Example            │
├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ Type 1             │ No                 │ No                 │ function greet()   │
│                    │                    │                    │   { console.log() }│
├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ Type 2             │ Yes                │ No                 │ function greet(name)│
│                    │                    │                    │   { console.log() }│
├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ Type 3             │ No                 │ Yes                │ function greet()   │
│                    │                    │                    │   { return "Hi" }  │
├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ Type 4             │ Yes                │ Yes                │ function add(a, b) │
│                    │                    │                    │   { return a + b } │
└────────────────────┴────────────────────┴────────────────────┴────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. What is the difference between function declaration and function expression?

```js
// Function declaration — hoisted
sayHello(); // ✅ Works!
function sayHello() {
    console.log("Hello");
}

// Function expression — NOT hoisted
// sayHi(); // ❌ TypeError
const sayHi = function() {
    console.log("Hi");
};
sayHi(); // ✅ Works!

// Named function expression
const sayHey = function greet() {
    console.log("Hey");
    // greet() is available inside (for recursion)
};

// Arrow function expression
const sayYo = () => {
    console.log("Yo");
};

// Comparison:
// ┌────────────────────┬────────────────────┬────────────────────┐
// │ Feature            │ Declaration        │ Expression         │
// ├────────────────────┼────────────────────┼────────────────────┤
// │ Hoisted            │ Yes (full body)    │ No                 │
// │ Can be called before│ Yes                │ No                 │
// │ Named in stack trace│ Yes                │ Yes (if named)     │
// │ Syntax             │ function name(){}  │ const name = fn(){}│
// │ this binding       │ Own this           │ Own this (arrow: no)│
// └────────────────────┴────────────────────┴────────────────────┘
```

---

### Q2. What is the difference between arrow functions and regular functions?

```js
// Regular function — has its own this
const obj = {
    name: "John",
    greet() {
        console.log(this.name); // "John"
    }
};
obj.greet();

// Arrow function — inherits this from parent
const obj2 = {
    name: "Jane",
    greet: () => {
        console.log(this.name); // undefined — this is window/global!
    }
};
obj2.greet();

// Arrow function inside method — inherits this
const obj3 = {
    name: "Bob",
    greet() {
        const arrow = () => {
            console.log(this.name); // "Bob" — inherits from greet
        };
        arrow();
    }
};
obj3.greet();

// Arrow function arguments
const arrow = () => {
    console.log(arguments); // ReferenceError — no arguments object!
};

// Regular function arguments
function regular() {
    console.log(arguments); // ✅ Arguments object
}
regular(1, 2, 3);

// Arrow function cannot be used as constructor
const Foo = () => {};
// new Foo(); // ❌ TypeError

// Arrow function has no prototype
console.log(Foo.prototype); // undefined

// Comparison:
// ┌────────────────────┬────────────────────┬────────────────────┐
// │ Feature            │ Regular function   │ Arrow function     │
// ├────────────────────┼────────────────────┼────────────────────┤
// │ this               │ Own this           │ Inherited this     │
// │ arguments          │ Has arguments      │ No arguments       │
// │ new                │ Can be constructor │ Cannot be constructor│
// │ prototype          │ Has prototype      │ No prototype       │
// │ Syntax             │ function() {}      │ () => {}           │
// │ Implicit return    │ No                 │ Yes (single expr)  │
// │ Use as method      │ Yes                │ ⚠️ Careful with this│
// │ Use as callback    │ Yes                │ ✅ Preferred        │
// └────────────────────┴────────────────────┴────────────────────┘
```

---

### Q3. What is the difference between `call`, `apply`, and `bind`?

```js
function greet(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
}

const user = { name: "John" };

// call — invoke with given this and args
 greet.call(user, "Hello", "!"); // "Hello, John!"

// apply — invoke with given this and array of args
greet.apply(user, ["Hello", "!"]); // "Hello, John!"

// bind — returns new function with fixed this
const boundGreet = greet.bind(user, "Hello");
boundGreet("!"); // "Hello, John!"

// Differences:
// ┌────────────────────┬────────────────────┬────────────────────┬────────────────────┐
// │ Feature            │ call()             │ apply()            │ bind()             │
// ├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
// │ Invokes function?  │ Yes                │ Yes                │ No (returns fn)    │
// │ Arguments          │ Comma-separated    │ Array              │ Partial application│
// │ Returns            │ Function result    │ Function result    │ New function       │
// │ Use case           │ Borrow method      │ Spread array       │ Fix this permanently│
// └────────────────────┴────────────────────┴────────────────────┴────────────────────┘

// Practical: Borrowing methods
const arr = [1, 2, 3];
const obj = { 0: "a", 1: "b", 2: "c", length: 3 };

// Borrow Array.prototype methods
Array.prototype.push.call(obj, "d");
console.log(obj); // {0: "a", 1: "b", 2: "c", 3: "d", length: 4}

// Convert array-like to array
const realArray = Array.prototype.slice.call(obj);
console.log(realArray); // ["a", "b", "c", "d"]

// Modern: Array.from() is cleaner
const modern = Array.from(obj);
```

---

### Q4. What is a closure and what are its use cases?

```js
// Closure — function retains access to outer scope
function makeCounter() {
    let count = 0;
    return {
        increment() { return ++count; },
        decrement() { return --count; },
        get() { return count; }
    };
}

const counter = makeCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.get());       // 2
console.log(counter.count);       // undefined — private!

// Closure for data privacy
function createUser(name) {
    let _password = "secret"; // private
    return {
        getName() { return name; },
        checkPassword(pw) { return pw === _password; }
    };
}

const user = createUser("John");
console.log(user.getName());      // "John"
console.log(user._password);      // undefined — private!
console.log(user.checkPassword("secret")); // true

// Closure for function factory
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = makeMultiplier(2);
const triple = makeMultiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Closure in loops (with var trap)
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 3, 3, 3
}
// Fix with let or IIFE
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 0, 1, 2
}
```

---

### Q5. What is the difference between `this` in regular functions, arrow functions, and methods?

```js
// Regular function — this depends on how it's called
function showThis() {
    console.log(this);
}
showThis(); // global (window in browser, global in Node)

// Arrow function — this from parent scope
const arrow = () => {
    console.log(this);
};
arrow(); // this from where arrow was defined

// Object method — this is the object
const obj = {
    name: "John",
    regular() {
        console.log(this.name); // "John"
    },
    arrow: () => {
        console.log(this.name); // undefined — this is global
    }
};
obj.regular(); // "John"
obj.arrow();   // undefined

// Event handler — this is the element
// button.addEventListener("click", function() {
//     console.log(this); // button element
// });
// button.addEventListener("click", () => {
//     console.log(this); // window (inherits from outer scope)
// });

// call/apply/bind — explicitly set this
function greet() {
    console.log(this.name);
}
const person = { name: "Alice" };
greet.call(person); // "Alice"

// Constructor — this is the new object
function Person(name) {
    this.name = name;
}
const p = new Person("Bob");
console.log(p.name); // "Bob"
```

---

### Q6. What are default parameters, rest parameters, and spread operator?

```js
// Default parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
console.log(greet()); // "Hello, Guest!"
console.log(greet("John")); // "Hello, John!"
console.log(greet("John", "Hi")); // "Hi, John!"

// Default with expression
function getTimestamp(date = new Date()) {
    return date.getTime();
}

// Default with previous parameter
function createUser(name, role = "user", isAdmin = role === "admin") {
    return { name, role, isAdmin };
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Rest must be last
function process(first, second, ...rest) {
    console.log(first, second, rest);
}
process(1, 2, 3, 4, 5); // 1, 2, [3, 4, 5]

// Spread operator — expand iterable
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

// Spread in function calls
const numbers = [1, 2, 3];
console.log(Math.max(...numbers)); // 3

// Comparison:
// ┌────────────────────┬────────────────────┬────────────────────┐
// │ Feature            │ Rest (...)         │ Spread (...)       │
// ├────────────────────┼────────────────────┼────────────────────┤
// │ Position           │ Parameter list     │ Call/Array/Object  │
// │ Action             │ Collects into array│ Expands into items │
// │ Example            │ function(...args)  │ [..arr, 4]         │
// │ Must be last?      │ Yes (in params)    │ No                 │
// └────────────────────┴────────────────────┴────────────────────┘
```

---

### Q7. What is an IIFE and why use it?

```js
// IIFE — Immediately Invoked Function Expression
(function() {
    console.log("I run immediately!");
})();

// IIFE with arrow function
(() => {
    console.log("Arrow IIFE");
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("John");

// Use case 1: Create private scope
const counter = (function() {
    let count = 0;
    return {
        increment: () => ++count,
        get: () => count
    };
})();
console.log(counter.increment()); // 1
console.log(counter.get());       // 1

// Use case 2: Avoid global pollution
(function() {
    const temp = "not global";
    console.log(temp);
})();
// console.log(temp); // ReferenceError

// Use case 3: Capture loop variable
const funcs = [];
for (var i = 0; i < 3; i++) {
    funcs.push((function(captured) {
        return () => console.log(captured);
    })(i));
}
funcs.forEach(f => f()); // 0, 1, 2

// Modern alternative: let in loop
const funcs2 = [];
for (let i = 0; i < 3; i++) {
    funcs2.push(() => console.log(i));
}
funcs2.forEach(f => f()); // 0, 1, 2
```

---

### Q8. What is the difference between pure and impure functions?

```js
// Pure function — same input, same output, no side effects
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same)

// Impure function — side effects or external state
let counter = 0;
function increment() {
    return ++counter; // Modifies external state
}

// Impure — depends on external state
function getTimestamp() {
    return Date.now(); // Different output each time
}

// Impure — modifies input
function addItem(arr, item) {
    arr.push(item); // Mutates input!
    return arr;
}

// Pure — returns new array
function addItemPure(arr, item) {
    return [...arr, item]; // New array
}

// Pure function benefits:
// ✅ Predictable and testable
// ✅ Cacheable (memoization)
// ✅ Parallelizable
// ✅ Easier to debug

// Comparison:
// ┌────────────────────┬────────────────────┬────────────────────┐
// │ Feature            │ Pure Function      │ Impure Function    │
// ├────────────────────┼────────────────────┼────────────────────┤
// │ Same input         │ Same output        │ May differ         │
// │ Side effects       │ None               │ Yes                │
// │ External state     │ Does not read      │ May read/modify    │
// │ Testability        │ Easy               │ Harder             │
// │ Memoization        │ Possible           │ Not possible       │
// └────────────────────┴────────────────────┴────────────────────┘
```

---

### Q9. What is a higher-order function?

```js
// Higher-order function — takes or returns a function

// Takes a function as argument
function runWithLogging(fn, name) {
    console.log(`Starting ${name}...`);
    const result = fn();
    console.log(`Finished ${name}`);
    return result;
}

const add = () => 2 + 3;
runWithLogging(add, "addition"); // 5

// Returns a function
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15

// Both: takes and returns
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}
const add1 = x => x + 1;
const mul2 = x => x * 2;
const addThenMul = compose(mul2, add1);
console.log(addThenMul(5)); // 12 (5 + 1 = 6, 6 * 2 = 12)

// Built-in higher-order functions
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
[1, 2, 3].filter(x => x > 1); // [2, 3]
[1, 2, 3].reduce((a, b) => a + b, 0); // 6
```

---

### Q10. What is the output of these function-related expressions?

```js
// Function hoisting
console.log(typeof hoist); // "function"
function hoist() {}

// Variable hoisting
console.log(typeof hoistVar); // "undefined"
var hoistVar = function() {};

// Arrow function and this
const obj = {
    name: "John",
    regular: function() {
        return function() {
            console.log(this.name); // undefined
        };
    },
    arrow: function() {
        return () => {
            console.log(this.name); // "John"
        };
    }
};
const regularFn = obj.regular();
regularFn(); // undefined
const arrowFn = obj.arrow();
arrowFn(); // "John"

// Default parameters with null
function greet(name = "Guest") {
    console.log(name);
}
greet(undefined); // "Guest"
greet(null);      // null — null is not undefined!

// Rest vs arguments
function showArgs(...args) {
    console.log(args); // [1, 2, 3] — real array
}
function showArguments() {
    console.log(arguments); // [1, 2, 3] — array-like object
}
showArgs(1, 2, 3);
showArguments(1, 2, 3);
```

---

## 3. Quick Reference

### Function Types Summary

```
┌────────────────────┬────────────────────┬────────────────────┬────────────────────┐
│ Type               │ Syntax             │ Hoisted?           │ this               │
├────────────────────┼────────────────────┼────────────────────┼────────────────────┤
│ Declaration        │ function fn() {}   │ Yes                │ Own                │
│ Expression         │ const fn =         │ No                 │ Own                │
│                    │   function() {}    │                    │                    │
│ Arrow              │ const fn = () => {}│ No                 │ Inherited          │
│ IIFE               │ (function() {} )() │ N/A                │ Own                │
│ Constructor        │ function Fn() {}   │ Yes                │ new object         │
│ Generator          │ function* fn() {}  │ Yes                │ Own                │
└────────────────────┴────────────────────┴────────────────────┴────────────────────┘
```

---

## 4. Key Takeaways

1. **Function declarations are hoisted** — expressions are not.
2. **Arrow functions have no `this`** — they inherit from the parent scope.
3. **`call`/`apply` invoke immediately, `bind` returns a new function** — know the difference.
4. **Closures retain access to outer scope** — used for privacy, factories, and state.
5. **`this` value depends on how a function is called** — not where it is defined.
6. **Default parameters use `undefined` as trigger** — passing `null` does not trigger defaults.
7. **Rest parameters collect remaining args into a real array** — unlike `arguments` object.
8. **Spread expands an iterable into individual elements** — opposite of rest.
9. **IIFE creates a private scope** — useful for avoiding global pollution.
10. **Pure functions are predictable and testable** — prefer them when possible.

---

**Happy coding! 🚀**

*Functions are the heart of JavaScript — master them to master the language.*
