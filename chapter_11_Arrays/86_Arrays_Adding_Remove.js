/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Adding and removing elements at the beginning and end of an array.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.push(...elements: any[]): number
 *     Description: Adds one or more elements to the end of the array and returns the new length.
 *     Input: Accepts one or more elements of any type as direct values, variables, or expressions.
 *     Return Type: number — the new length of the array after adding the elements.
 *   - Array.prototype.pop(): any
 *     Description: Removes and returns the last element of the array.
 *     Input: No input parameters required.
 *     Return Type: any — the removed last element, or undefined if the array is empty.
 *   - Array.prototype.unshift(...elements: any[]): number
 *     Description: Adds one or more elements to the beginning of the array and returns the new length.
 *     Input: Accepts one or more elements of any type as direct values, variables, or expressions.
 *     Return Type: number — the new length of the array after adding the elements.
 *   - Array.prototype.shift(): any
 *     Description: Removes and returns the first element of the array.
 *     Input: No input parameters required.
 *     Return Type: any — the removed first element, or undefined if the array is empty.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - Mutating methods: push, pop, shift, and unshift modify the original array.
 *   - Multiple arguments: push and unshift can accept multiple items at once.
 *   - LIFO / FIFO behavior: pop/push act like a stack; shift/unshift act like a queue.
 * ============================================================
 */

let arr = [1, 2, 3];
console.log(arr);

// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);


// Remove from BEGINNING
arr.shift();
console.log(arr);


console.log(arr);
arr.unshift(100);
console.log(arr);
arr.shift();
console.log(arr);

/*
============================================================
DETAILED EXPLANATION
============================================================

This file covers the four fundamental "ends" methods for arrays:
push, pop, shift, and unshift. These methods add or remove elements
at the beginning or end of an array, and they all mutate the original
array in place.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let arr = [1, 2, 3];
        Starting array with three numeric elements.

Step 2: arr.push(4);
        Adds 4 to the END of the array.
        Array becomes [1, 2, 3, 4].
        Returns the new length (4), though we don't capture it here.

Step 3: arr.pop();
        Removes the LAST element (4).
        Array becomes [1, 2, 3] again.
        Returns the removed element (4), though we don't capture it.

Step 4: arr.push(5, 6);
        Adds 5 and 6 to the END in one call.
        Array becomes [1, 2, 3, 5, 6].

Step 5: arr.unshift(0);
        Adds 0 to the BEGINNING of the array.
        Array becomes [0, 1, 2, 3, 5, 6].
        Returns the new length.

Step 6: arr.shift();
        Removes the FIRST element (0).
        Array becomes [1, 2, 3, 5, 6].
        Returns the removed element (0).

Step 7: arr.unshift(100);
        Adds 100 to the BEGINNING.
        Array becomes [100, 1, 2, 3, 5, 6].

Step 8: arr.shift();
        Removes the FIRST element (100).
        Array returns to [1, 2, 3, 5, 6].

============================================================
KEY CONCEPTS (Plain English)
============================================================

push:
  Think of it as "pushing" a book onto the top of a stack.
  The stack grows at the end.

pop:
  Think of it as "popping" the top book off the stack.
  The stack shrinks from the end.

unshift:
  Think of it as "shifting" everything to the right to make room
  at the front door, then letting a new item in first.

shift:
  Think of it as "shifting" everyone forward one step because the
  first person in line just left.

============================================================
COMPARISON TABLE: push/pop/shift/unshift
============================================================

| Method    | Position  | Action   | Returns           | Speed Note               |
|-----------|-----------|----------|-------------------|--------------------------|
| push(...) | End       | Add      | New length        | Fast                     |
| pop()     | End       | Remove   | Removed element   | Fast                     |
| unshift(...) | Beginning | Add     | New length        | Slow (re-indexes all)    |
| shift()   | Beginning | Remove   | Removed element   | Slow (re-indexes all)    |

============================================================
REAL-WORLD USE CASES
============================================================

- push: Appending a new chat message to a messages array.
- pop: Implementing an "Undo" stack where the last action is removed.
- unshift: Adding a high-priority task to the front of a todo list.
- shift: Processing a queue of print jobs in first-come-first-served order.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Forgetting that these methods mutate the original array:
   If you pass an array into a function and call .push() inside,
   the caller's array WILL change. Clone it first if needed.

2. Performance issues with large arrays:
   unshift and shift on an array of 100,000 elements are slow
   because every single element must be re-indexed.
   For large data, prefer push/pop or use linked-list structures.

3. Expecting push to return the array:
   push returns the new LENGTH, not the array itself.
   let x = arr.push(5); // x is a number, not an array.

============================================================
KEY TAKEAWAY
============================================================

push and pop are fast end operations perfect for stack behavior.
shift and unshift are front operations useful for queues but slower
on big arrays because they re-index every element.
*/
