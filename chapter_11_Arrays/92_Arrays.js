/**
 * ============================================================
 * FILE SUMMARY / NOTES
 * ============================================================
 * 
 * Topic: Sorting arrays and understanding default vs custom sort behavior.
 * 
 * Functions/Methods Used:
 *   - Array.prototype.sort(compareFn?: (a: any, b: any) => number): Array
 *     Description: Sorts the elements of the array in place. Without a compare function, elements are converted to strings and sorted lexicographically.
 *     Input: Accepts an optional compare function callback that defines sort order, or no arguments.
 *     Return Type: Array — the same array reference, sorted in place.
 *   - console.log(value: any): void
 *     Description: Outputs the provided value to the console.
 *     Input: Accepts any data type as a direct value, variable, or expression.
 *     Return Type: void (undefined) — returns nothing; only outputs to console.
 * 
 * Key Concepts:
 *   - In-place sorting: sort() modifies the original array rather than creating a copy.
 *   - Lexicographic default: Default sort compares string representations,
 *     which causes unexpected ordering for numbers (e.g., 10 before 2).
 *   - Compare function: A callback like (a, b) => a - b enables proper numeric
 *     ascending sorting; reversing the operands gives descending order.
 *   - Stable sort: Modern engines guarantee that equal elements maintain
 *     their relative order after sorting.
 * ============================================================
 */

/**
 * ============================================================
 * SLICE vs SPLICE - Key Differences
 * ============================================================
 *
 * SLICE() - Extracts a portion of an array WITHOUT modifying the original array
 * ---------------------------------------------------------------------------
 * - Input Type:   (startIndex, endIndex)  -- both optional integers
 * - Return Type:  new Array (shallow copy of extracted elements)
 * - Mutates Original?  NO (non-destructive / immutable)
 * - Description:  Returns a new array containing elements from startIndex
 *                  up to (but NOT including) endIndex.
 *                  Negative indices count from the end (-1 = last element).
 *                  If endIndex is omitted, slices to end of array.
 *
 *   Example:
 *      let arr = [1, 2, 3, 4, 5];
 *      let sliced = arr.slice(1, 4);   // Returns: [2, 3, 4]
 *      console.log(arr);               // Original unchanged: [1, 2, 3, 4, 5]
 *
 * SPLICE() - Adds/removes elements by MODIFYING the original array
 * ---------------------------------------------------------------------------
 * - Input Type:   (startIndex, deleteCount, item1, item2, ...)
 *                  startIndex  -> integer (required)
 *                  deleteCount -> integer (optional, how many to remove)
 *                  item1...    -> elements to insert (optional)
 * - Return Type:  new Array containing the DELETED elements
 * - Mutates Original?  YES (destructive / mutable)
 * - Description:  Changes the contents of an array by removing, replacing,
 *                  or adding elements at a specified index.
 *                  Returns an array of the removed elements.
 *
 *   Example:
 *      let arr = [1, 2, 3, 4, 5];
 *      let removed = arr.splice(2, 1, 'a', 'b');  // Removes 1 element at index 2
 *      console.log(removed);                     // Returns: [3]
 *      console.log(arr);                         // Original modified: [1, 2, 'a', 'b', 4, 5]
 *
 * SUMMARY TABLE:
 * | Feature         | slice()               | splice()              |
 * |-----------------|-----------------------|-----------------------|
 * | Mutates original| NO                    | YES                   |
 * | Return value    | New extracted array   | Array of removed items|
 * | Primary use     | Copy/extract portion  | Insert/delete/replace |
 * | Parameters      | (start, end)          | (start, delCount, ...items) |
 * | Negative index  | Supported             | Supported             |
 * ============================================================
 */

let fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits);

let number = [3, 1, 4];
number.sort()
console.log(number);

let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);
// Natural Sorting, lexicographic Sorting)
nums.sort((a, b) => a - b); // Ascending
console.log(nums);
nums.sort((a, b) => b - a);
console.log(nums);