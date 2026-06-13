# Chapter 13 — Interview Questions & Deep Dive: Strings

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### String Properties & Character Encoding

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         STRING PROPERTIES                                │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │ Property           │  │ Type               │  │ Description        │  │
│  ├────────────────────┼────────────────────┼────────────────────┤  │
│  │ length             │  │ number             │  │ UTF-16 code units  │  │
│  │ [index]            │  │ string             │  │ Character at index │  │
│  │ typeof             │  │ "string"           │  │ Primitive type     │  │
│  │ Immutable          │  │ N/A                │  │ Cannot be changed  │  │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘  │
│                                                                         │
│  JavaScript strings are immutable — any "modification" creates a new    │
│  string. Internally stored as UTF-16 code units.                       │
│  ASCII characters: 1 code unit (2 bytes)                                │
│  Emojis and some Unicode: 2 code units (surrogate pair)                 │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### String Methods Categories

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         STRING METHODS                                  │
│  ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐  │
│  │ SEARCH & CHECK     │  │ EXTRACT & MODIFY   │  │ TRANSFORM & CONVERT│  │
│  │ ───────────────────│  │ ───────────────────│  │ ───────────────────│  │
│  │ indexOf()          │  │ slice()            │  │ toUpperCase()      │  │
│  │ lastIndexOf()      │  │ substring()        │  │ toLowerCase()      │  │
│  │ includes()         │  │ substr()           │  │ trim()             │  │
│  │ startsWith()       │  │ replace()          │  │ padStart()         │  │
│  │ endsWith()         │  │ replaceAll()       │  │ padEnd()           │  │
│  │ search()           │  │ concat()           │  │ repeat()           │  │
│  │ match()            │  │ split()            │  │ toString()         │  │
│  │ matchAll()         │  │                    │  │                    │  │
│  └────────────────────┘  └────────────────────┘  └────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. What is the difference between `slice`, `substring`, and `substr`?

```js
const str = "Hello, World!";

// slice(start, end) — supports negative indices
console.log(str.slice(0, 5));   // "Hello"
console.log(str.slice(7, 12));  // "World"
console.log(str.slice(-6, -1)); // "World"
console.log(str.slice(7));      // "World!"

// substring(start, end) — no negative indices, swaps if start > end
console.log(str.substring(0, 5));   // "Hello"
console.log(str.substring(7, 12));  // "World"
console.log(str.substring(-6, -1)); // "" — negative treated as 0
console.log(str.substring(12, 7));  // "World" — swaps to (7, 12)

// substr(start, length) — deprecated, do not use
console.log(str.substr(7, 5));  // "World"

// Comparison:
// ┌────────────┬────────────┬────────────┬────────────┬────────────┐
// │ Feature    │ slice()    │ substring()│ substr()   │            │
// ├────────────┼────────────┼────────────┼────────────┼────────────┤
// │ Params     │ (start, end)│ (start, end)│ (start, length)│         │
// │ Negative   │ ✅ Counts from end │ ❌ Treated as 0 │ ✅ Counts from end│
// │ start > end│ Returns "" │ Swaps them │ Uses length │            │
// │ Status     │ Standard   │ Standard   │ Deprecated │            │
// │ Use        │ ✅ Preferred│ ✅ Okay    │ ❌ Avoid   │            │
// └────────────┴────────────┴────────────┴────────────┴────────────┘
```

---

### Q2. How do you check if a string contains a substring?

```js
const str = "Hello, World!";

// includes() — modern, returns boolean
console.log(str.includes("World"));  // true
console.log(str.includes("world"));  // false — case-sensitive
console.log(str.includes("o", 5));   // true — start from index 5

// indexOf() — returns index or -1
console.log(str.indexOf("World"));  // 7
console.log(str.indexOf("world"));  // -1
console.log(str.indexOf("o"));      // 4
console.log(str.indexOf("o", 5));   // 8

// lastIndexOf() — last occurrence
console.log(str.lastIndexOf("o"));  // 8

// startsWith() — check beginning
console.log(str.startsWith("Hello"));  // true
console.log(str.startsWith("World", 7)); // true

// endsWith() — check end
console.log(str.endsWith("!"));        // true
console.log(str.endsWith("World", 12)); // true

// search() — regex support
console.log(str.search(/world/i)); // 7 — case-insensitive regex

// match() — regex
console.log(str.match(/o/g)); // ["o", "o"] — all matches

// matchAll() — returns iterator
for (const match of str.matchAll(/o/g)) {
    console.log(match.index); // 4, 8
}
```

---

### Q3. What is the difference between `replace` and `replaceAll`?

```js
const str = "The quick brown fox jumps over the lazy dog. The fox is quick.";

// replace() — replaces first occurrence (or regex with g flag)
console.log(str.replace("fox", "cat"));
// "The quick brown cat jumps over the lazy dog. The fox is quick."

// replaceAll() — replaces all occurrences (ES2021)
console.log(str.replaceAll("fox", "cat"));
// "The quick brown cat jumps over the lazy dog. The cat is quick."

// replace with regex — global flag replaces all
console.log(str.replace(/fox/g, "cat"));
// "The quick brown cat jumps over the lazy dog. The cat is quick."

// replace with function
console.log(str.replace(/fox/g, (match, index) => `[${match} at ${index}]`));
// "The quick brown [fox at 16] jumps over the lazy dog. The [fox at 49] is quick."

// replaceAll with regex — must have global flag
// console.log(str.replaceAll(/fox/, "cat")); // ❌ TypeError!
console.log(str.replaceAll(/fox/g, "cat")); // ✅

// Comparison:
// ┌────────────┬────────────┬────────────┬────────────┬────────────┐
// │ Feature    │ replace()  │ replaceAll()│ Regex g    │            │
// ├────────────┼────────────┼────────────┼────────────┼────────────┤
// │ First match│ Replaces   │ Replaces   │ Replaces   │            │
// │ All matches│ With g flag│ Always     │ Always     │            │
// │ String arg │ ✅         │ ✅         │ ✅         │            │
// │ Regex arg  │ ✅         │ ✅ (g req) │ ✅         │            │
// │ Function   │ ✅         │ ✅         │ ✅         │            │
// │ Returns    │ New string │ New string │ New string │            │
// │ Mutates?   │ No         │ No         │ No         │            │
// └────────────┴────────────┴────────────┴────────────┴────────────┘
```

---

### Q4. How do you reverse a string in JavaScript?

```js
// Method 1: split, reverse, join (most common)
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"

// Method 2: spread operator
const reverse = str => [...str].reverse().join("");
console.log(reverse("hello")); // "olleh"

// Method 3: for loop
function reverseLoop(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseLoop("hello")); // "olleh"

// Method 4: reduce
const reverseReduce = str => str.split("").reduce((rev, char) => char + rev, "");
console.log(reverseReduce("hello")); // "olleh"

// Method 5: recursive
function reverseRecursive(str) {
    if (str === "") return "";
    return reverseRecursive(str.slice(1)) + str[0];
}
console.log(reverseRecursive("hello")); // "olleh"

// ⚠️ Unicode surrogate pairs (emojis) break simple reversal
const emoji = "hello 👋";
console.log(reverseString(emoji)); // "👋 olleh" — may break!

// Safe Unicode reversal
function reverseUnicode(str) {
    return Array.from(str).reverse().join("");
}
console.log(reverseUnicode(emoji)); // "👋 olleh"
```

---

### Q5. How do you check if a string is a palindrome?

```js
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === [...cleaned].reverse().join("");
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("12321")); // true

// Two-pointer approach
function isPalindromeTwoPointer(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0, right = cleaned.length - 1;
    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }
    return true;
}

console.log(isPalindromeTwoPointer("A man, a plan, a canal: Panama")); // true
```

---

### Q6. What are template literals and their features?

```js
// Basic interpolation
const name = "John";
const age = 30;
console.log(`Hello, ${name}! You are ${age} years old.`);

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
const result = highlight`User ${name} is ${age} years old`;
console.log(result); // "User **John** is **30** years old"

// Raw strings
const path = String.raw`C:\\Users\\John\\Documents`;
console.log(path); // "C:\\Users\\John\\Documents" (backslashes preserved)

// Nested template literals
const items = ["apple", "banana", "cherry"];
const list = `
    <ul>
        ${items.map(item => `<li>${item}</li>`).join('')}
    </ul>
`;
```

---

### Q7. How do you pad a string?

```js
const str = "42";

// padStart — pad from beginning
console.log(str.padStart(5, "0")); // "00042"
console.log(str.padStart(5, " ")); // "   42"
console.log(str.padStart(5, "abc")); // "abc42"

// padEnd — pad from end
console.log(str.padEnd(5, "0")); // "42000"
console.log(str.padEnd(5, " ")); // "42   "

// Practical: Format numbers
function formatNumber(num, length) {
    return String(num).padStart(length, "0");
}
console.log(formatNumber(7, 2)); // "07"
console.log(formatNumber(42, 4)); // "0042"

// Practical: Right-align text
function alignRight(text, width) {
    return text.padStart(width, " ");
}
console.log(alignRight("Hello", 10)); // "     Hello"

// Practical: Credit card masking
function maskCard(card) {
    return card.slice(-4).padStart(card.length, "*");
}
console.log(maskCard("1234567890123456")); // "************3456"
```

---

### Q8. How do you trim whitespace from a string?

```js
const str = "   Hello, World!   ";

// trim() — both ends
console.log(str.trim()); // "Hello, World!"

// trimStart() / trimLeft() — beginning only
console.log(str.trimStart()); // "Hello, World!   "
console.log(str.trimLeft()); // "Hello, World!   "

// trimEnd() / trimRight() — end only
console.log(str.trimEnd()); // "   Hello, World!"
console.log(str.trimRight()); // "   Hello, World!"

// Custom trim
function trimChar(str, char) {
    const regex = new RegExp(`^[${char}]+|[${char}]+$`, "g");
    return str.replace(regex, "");
}
console.log(trimChar("xxHelloxx", "x")); // "Hello"

// Practical: Clean user input
function cleanInput(input) {
    return input.trim().replace(/\\s+/g, " ");
}
console.log(cleanInput("  hello   world  ")); // "hello world"
```

---

### Q9. How do you split a string and join an array?

```js
const str = "apple,banana,cherry";

// split — string to array
const fruits = str.split(","); // ["apple", "banana", "cherry"]

// split by whitespace
const sentence = "The quick brown fox";
const words = sentence.split(" "); // ["The", "quick", "brown", "fox"]

// split by regex
const messy = "a, b,  c, d";
const items = messy.split(/,\\s*/); // ["a", "b", "c", "d"]

// split by character
const chars = "hello".split(""); // ["h", "e", "l", "l", "o"]

// split with limit
const limited = "a,b,c,d".split(",", 2); // ["a", "b"]

// join — array to string
const joined = ["apple", "banana", "cherry"].join(" - "); // "apple - banana - cherry"

// Practical: CSV parsing
function parseCSV(csv) {
    return csv.split("\\n").map(line => line.split(","));
}
const csv = "name,age\\nJohn,30\\nJane,25";
console.log(parseCSV(csv)); // [["name", "age"], ["John", "30"], ["Jane", "25"]]

// Practical: Sentence case
function toSentenceCase(str) {
    return str.split(" ").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(" ");
}
console.log(toSentenceCase("hello world")); // "Hello World"
```

---

### Q10. How do you repeat a string?

```js
const str = "Hello";

// repeat() — ES2015
console.log(str.repeat(3)); // "HelloHelloHello"
console.log(str.repeat(0)); // ""
console.log("*".repeat(10)); // "**********"

// Edge cases
// console.log(str.repeat(-1)); // RangeError
// console.log(str.repeat(Infinity)); // RangeError
console.log(str.repeat(3.5)); // "HelloHelloHello" (truncates to integer)

// Polyfill for older environments
function repeatString(str, count) {
    if (count < 0) throw new RangeError();
    let result = "";
    for (let i = 0; i < count; i++) {
        result += str;
    }
    return result;
}

// Practical: Create a separator line
function createLine(length, char = "-") {
    return char.repeat(length);
}
console.log(createLine(20)); // "--------------------"

// Practical: Indent string
function indent(text, spaces) {
    const indentation = " ".repeat(spaces);
    return text.split("\\n").map(line => indentation + line).join("\\n");
}
console.log(indent("Hello\\nWorld", 4));
// "    Hello
//     World"
```

---

## 3. Quick Reference

### String Methods

```js
// Search
str.indexOf(substr, fromIndex)     // First index
str.lastIndexOf(substr, fromIndex)  // Last index
str.includes(substr, fromIndex)     // Boolean
str.startsWith(substr, fromIndex)   // Boolean
str.endsWith(substr, fromIndex)     // Boolean
str.search(regex)                   // Index or -1
str.match(regex)                    // Array or null
str.matchAll(regex)                 // Iterator

// Extract
str.slice(start, end)               // Portion
str.substring(start, end)           // Portion
str.at(index)                       // Character (supports negative)
str.charAt(index)                   // Character
str.charCodeAt(index)               // UTF-16 code
str.codePointAt(index)              // Unicode code point

// Modify
str.replace(search, replacement)    // First match
str.replaceAll(search, replacement) // All matches
str.replace(regex, fn)              // With function
str.toUpperCase()                   // Uppercase
str.toLowerCase()                   // Lowercase
str.trim()                          // Both ends
str.trimStart()                     // Beginning
str.trimEnd()                      // End
str.padStart(targetLength, pad)     // Pad beginning
str.padEnd(targetLength, pad)       // Pad end
str.repeat(count)                   // Repeat
str.concat(str2, str3, ...)          // Concatenate

// Convert
str.split(separator, limit)         // To array
str.toString()                      // String
str.valueOf()                       // Primitive

// Template literal
`${expression}`                      // Interpolation
String.raw`\\path`                   // Raw strings
```

---

## 4. Key Takeaways

1. **Strings are immutable** — every "modification" creates a new string.
2. **Use `slice()` over `substring()` and `substr()`** — `substr()` is deprecated.
3. **Template literals (`` ` ``) support interpolation and multi-line** — prefer over concatenation.
4. **Use `includes()` for simple checks** — `indexOf() !== -1` is old school.
5. **`replaceAll()` replaces all occurrences** — available in ES2021.
6. **`padStart()`/`padEnd()` format strings** — useful for alignment and numbering.
7. **Use `Array.from(str)` for Unicode-safe operations** — `split("")` breaks surrogate pairs.
8. **Regular expressions are powerful** — `match()`, `matchAll()`, `replace()`, `search()`.
9. **`trim()` removes whitespace from both ends** — `trimStart()`/`trimEnd()` for specific ends.
10. **`repeat()` creates repeated strings** — cleaner than loops.

---

**Happy coding! 🚀**

*Strings are the most common data type — master them for clean, readable code.*
