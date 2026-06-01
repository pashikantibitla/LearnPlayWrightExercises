# Chapter 11: Arrays

This chapter covers everything about JavaScript arrays — creation, access, adding/removing elements, searching, iterating, transforming, slicing, splicing, concatenating, and checking.

---

## Files & What They Exercise

| File | Topic | Methods / Functions Used |
|------|-------|--------------------------|
| `83_Arrays.js` | Array basics — literal, index, length | `console.log(value: any): void` |
| `84_Arrays.js` | Array constructor, `Array.of()`, `Array.from()` | `console.log(value: any): void`, `Array.of(...elements: any[]): any[]`, `Array.from(arrayLike: object): any[]` |
| `85_Access_Array.js` | Accessing & modifying elements, `.at()` | `console.log(value: any): void`, `Array.prototype.at(index: number): any` |
| `86_Arrays_Adding_Remove.js` | `push`, `pop`, `unshift`, `shift` | `console.log(value: any): void`, `Array.prototype.push(...items: any[]): number`, `Array.prototype.pop(): any`, `Array.prototype.unshift(...items: any[]): number`, `Array.prototype.shift(): any` |
| `87_Adding_Remove2.js` | `splice` — add, remove, replace | `console.log(value: any): void`, `Array.prototype.splice(start: number, deleteCount?: number, ...items: any[]): any[]` |
| `88_REAL_Example.js` | Real-world browser list manipulation | `console.log(value: any): void`, `Array.prototype.pop(): any`, `Array.prototype.shift(): any` |
| `89_Searching.js` | `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast` | `console.log(value: any): void`, `Array.prototype.indexOf(searchElement: any, fromIndex?: number): number`, `Array.prototype.lastIndexOf(searchElement: any, fromIndex?: number): number`, `Array.prototype.includes(searchElement: any, fromIndex?: number): boolean`, `Array.prototype.find(callback: function): any`, `Array.prototype.findIndex(callback: function): number`, `Array.prototype.findLast(callback: function): any` |
| `90_Iterate.js` | `for`, `for...of`, `forEach`, `for...in`, `.entries()` | `console.log(value: any): void`, `Array.prototype.forEach(callback: function): void`, `Array.prototype.entries(): IterableIterator<[number, any]>` |
| `91_Transform_Array.js` | `map`, `filter`, `reduce`, `flat` | `console.log(value: any): void`, `Array.prototype.map(callback: function): any[]`, `Array.prototype.filter(callback: function): any[]`, `Array.prototype.reduce(callback: function, initialValue?: any): any`, `Array.prototype.flat(depth?: number): any[]` |
| `92_Arrays.js` | `sort` behavior & custom compare functions | `console.log(value: any): void`, `Array.prototype.sort(compareFn?: function): any[]` |
| `93_Array_Slicing.js` | `slice` (non-mutating) & `splice` (mutating) | `console.log(value: any): void`, `Array.prototype.slice(start?: number, end?: number): any[]`, `Array.prototype.splice(start: number, deleteCount?: number, ...items: any[]): any[]` |
| `94_Concat_array.js` | `concat`, spread operator, `join` | `console.log(value: any): void`, `Array.prototype.concat(...arrays: any[]): any[]`, `Array.prototype.join(separator?: string): string` |
| `95_Array_Checking.js` | `Array.isArray`, `every`, `some` | `console.log(value: any): void`, `Array.isArray(value: any): boolean`, `Array.prototype.every(callback: function): boolean`, `Array.prototype.some(callback: function): boolean` |

---

## Array Methods Summary

| Method | Description | Input | Return Type |
|--------|-------------|-------|-------------|
| `Array.of(...elements)` | Creates a new array from the given elements. | Any number of values. | any[] — the new array. |
| `Array.from(arrayLike)` | Creates a new array from an array-like or iterable object. | An array-like object. | any[] — the new array. |
| `arr.at(index)` | Returns the element at the given index (supports negatives). | number index. | any — the element, or undefined. |
| `arr.push(...items)` | Adds elements to the end of the array. | One or more values. | number — new length. |
| `arr.pop()` | Removes the last element. | No input. | any — the removed element. |
| `arr.unshift(...items)` | Adds elements to the beginning. | One or more values. | number — new length. |
| `arr.shift()` | Removes the first element. | No input. | any — the removed element. |
| `arr.splice(start, deleteCount, ...items)` | Removes/replaces/adds elements at any position. | start index, count, optional new items. | any[] — removed elements. |
| `arr.slice(start, end)` | Extracts a portion without modifying the original. | Optional start and end indices. | any[] — new extracted array. |
| `arr.indexOf(searchEl, fromIndex)` | Returns first index of element, or -1. | Element to find, optional start index. | number — index or -1. |
| `arr.lastIndexOf(searchEl, fromIndex)` | Returns last index of element, or -1. | Element to find, optional start index. | number — index or -1. |
| `arr.includes(searchEl, fromIndex)` | Checks if array contains element. | Element to find, optional start index. | boolean — true if found. |
| `arr.find(callback)` | Returns first element matching callback. | Predicate function. | any — matching element or undefined. |
| `arr.findIndex(callback)` | Returns index of first matching element. | Predicate function. | number — index or -1. |
| `arr.findLast(callback)` | Returns last element matching callback. | Predicate function. | any — matching element or undefined. |
| `arr.forEach(callback)` | Executes callback for each element. | Callback function `(el, i, arr) => void`. | void — returns nothing. |
| `arr.entries()` | Returns an iterator of [index, value] pairs. | No input. | IterableIterator<[number, any]>. |
| `arr.map(callback)` | Creates a new array with transformed values. | Callback function `(el, i, arr) => any`. | any[] — new array. |
| `arr.filter(callback)` | Creates a new array with elements that pass the test. | Predicate function. | any[] — new filtered array. |
| `arr.reduce(callback, init)` | Reduces array to a single value. | Reducer function and optional initial value. | any — the accumulated result. |
| `arr.flat(depth?)` | Flattens nested arrays up to the given depth. | Optional depth number (default 1). | any[] — flattened array. |
| `arr.sort(compareFn?)` | Sorts elements in place (lexicographic by default). | Optional compare function. | any[] — sorted array (same reference). |
| `arr.concat(...arrays)` | Merges arrays into a new array. | Arrays or values to concatenate. | any[] — new merged array. |
| `arr.join(separator?)` | Joins all elements into a string. | Optional separator string (default ","). | string — joined string. |
| `Array.isArray(value)` | Checks if a value is an array. | Any value. | boolean — true if array. |
| `arr.every(callback)` | Checks if ALL elements pass the test. | Predicate function. | boolean — true if all pass. |
| `arr.some(callback)` | Checks if ANY element passes the test. | Predicate function. | boolean — true if at least one passes. |

---

## Key Concepts

- **Array Literal:** `[]` — the most common way to create an array.
- **Array Constructor:** `new Array()` or `Array.of()` / `Array.from()`.
- **Zero-Based Indexing:** The first element is at index `0`.
- **Mutating vs Non-Mutating:** `splice`, `push`, `pop`, `shift`, `unshift`, `sort` mutate the original; `slice`, `map`, `filter`, `concat` return new arrays.
- **Callback Functions:** Many array methods (`map`, `filter`, `reduce`, `forEach`, `find`) accept a callback function.
- **Template Literals:** Often used with `join()` and `map()` to build dynamic strings from arrays.
- **Lexicographic Sorting:** Default `sort()` converts elements to strings before comparing.
- **Numeric Sorting:** Requires a compare function `(a, b) => a - b` for ascending order.
