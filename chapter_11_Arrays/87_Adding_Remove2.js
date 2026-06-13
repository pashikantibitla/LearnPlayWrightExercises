/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Advanced in-place array modification using splice.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.splice(start: number, deleteCount: number, ...items: any[]): Array
 *     Description: Removes, replaces, or inserts elements at a specified index. Returns an array of the removed elements. Mutates the original array.
 *     Input: Accepts a start index (number), a delete count (number), and optional items to insert as direct values, variables, or expressions.
 *     Return Type: Array — an array containing the removed elements.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - In-place mutation: splice changes the original array directly.
 *   - Versatile parameters: Can delete items, insert items, or replace items
 *     depending on the arguments provided.
 *   - Return value: Returns an array containing only the removed elements.
 * ============================================================
 */

let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);
// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

// splice(start, deleteCount, ...itemsToAdd)
// arr.splice(2, 1);
// console.log(arr);

// arr.splice(2, 0, 99); // add
// arr.splice(2, 1, 99); // repace
// console.log(arr);


// arr = [1, 2, 3, 4, 5, 6]
// index=0,1,2,3,4,5

arr.splice(1, 2, 10, 20);
console.log(arr);

/*
============================================================
DETAILED EXPLANATION
============================================================

This file dives into splice(), the Swiss Army knife of array methods.
Unlike push/pop/shift/unshift, which only work at the ends, splice()
can add, remove, or replace elements at ANY index. It mutates the
original array and returns the removed elements.

============================================================
CODE BREAKDOWN (Step-by-Step)
============================================================

Step 1: let arr = [1, 2, 3];
        Creates the initial array.

Step 2: arr.push(4, 5, 6);
        Appends 4, 5, 6 to the end.
        Array is now [1, 2, 3, 4, 5, 6].

Step 3: arr.splice(1, 2, 10, 20);
        start = 1  -> Start at index 1 (value 2).
        deleteCount = 2 -> Remove 2 elements: 2 and 3.
        items = 10, 20 -> Insert 10 and 20 at that position.
        Array becomes [1, 10, 20, 4, 5, 6].
        Returns [2, 3] (the removed elements), though not captured.

============================================================
KEY CONCEPTS (Plain English)
============================================================

splice(start, deleteCount, ...items):
  - start: The index where the operation begins.
  - deleteCount: How many elements to remove (0 = remove none).
  - items: New elements to insert at the start position.

Replacement:
  When deleteCount > 0 and you provide items, you are effectively
  replacing existing elements with new ones.

Insertion:
  When deleteCount = 0 and you provide items, you insert without
  removing anything.

Deletion:
  When you omit items, you only delete deleteCount elements.

============================================================
COMPARISON TABLE: splice vs Other Mutating Methods
============================================================

| Method     | Location     | Mutates? | Can Replace? | Returns             |
|------------|--------------|----------|--------------|---------------------|
| push()     | End only     | Yes      | No           | New length          |
| pop()      | End only     | Yes      | No           | Removed item        |
| shift()    | Start only   | Yes      | No           | Removed item        |
| unshift()  | Start only   | Yes      | No           | New length          |
| splice()   | Any index    | Yes      | Yes          | Array of removed    |

============================================================
REAL-WORLD USE CASES
============================================================

- Deleting a user from a list by index: users.splice(index, 1).
- Replacing a failed test case in a test suite array at position 2.
- Inserting a new product into a sorted product array at the correct
  index found via binary search.

============================================================
COMMON MISTAKES TO AVOID
============================================================

1. Confusing splice with slice:
   splice() mutates; slice() does NOT.
   splice(start, deleteCount); slice(start, end).

2. Forgetting the return value is the REMOVED items:
   If you expect the modified array, you will be surprised.
   The original array IS modified, but the return value is what
   was taken out.

3. Negative start index confusion:
   splice(-1, 1) removes the last element, but the behavior of
   negative starts can be tricky. When in doubt, use positive indices.

============================================================
KEY TAKEAWAY
============================================================

splice() is the ultimate in-place array editor. Use it when you need
to delete, insert, or replace elements in the middle of an array.
Always remember: it mutates the original and returns the removed elements.
*/