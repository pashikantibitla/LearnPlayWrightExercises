# Chapter 15 — Interview Questions & Deep Dive: 2D Arrays

---

## Table of Contents

1. [Core Concepts](#1-core-concepts)
2. [Interview Questions & Coding Examples](#2-interview-questions--coding-examples)
3. [Quick Reference](#3-quick-reference)
4. [Key Takeaways](#4-key-takeaways)

---

## 1. Core Concepts

### 2D Array Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         2D ARRAY (MATRIX)                               │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  const grid = [                                                  │   │
│  │    [1, 2, 3],   ← row 0                                          │   │
│  │    [4, 5, 6],   ← row 1                                          │   │
│  │    [7, 8, 9]    ← row 2                                          │   │
│  │  ];                                                              │   │
│  │                                                                  │   │
│  │  Access: grid[row][col]                                          │   │
│  │  grid[0][0] → 1  grid[0][1] → 2  grid[0][2] → 3                 │   │
│  │  grid[1][0] → 4  grid[1][1] → 5  grid[1][2] → 6                 │   │
│  │  grid[2][0] → 7  grid[2][1] → 8  grid[2][2] → 9                 │   │
│  │                                                                  │   │
│  │  Rows = grid.length        → 3                                   │   │
│  │  Cols = grid[0].length     → 3                                   │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  Visual:                                                                │
│  ┌─────┬─────┬─────┐                                                   │
│  │ 1   │ 2   │ 3   │  ← row 0                                          │
│  ├─────┼─────┼─────┤                                                   │
│  │ 4   │ 5   │ 6   │  ← row 1                                          │
│  ├─────┼─────┼─────┤                                                   │
│  │ 7   │ 8   │ 9   │  ← row 2                                          │
│  └─────┴─────┴─────┘                                                   │
│    ↑     ↑     ↑                                                        │
│   col0  col1  col2                                                      │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 3D Array Structure

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         3D ARRAY (CUBE)                                 │
│                                                                         │
│  const cube = [                                                          │
│    [  // Layer 0                                                        │
│      [1, 2], [3, 4]                                                   │
│    ],                                                                   │
│    [  // Layer 1                                                        │
│      [5, 6], [7, 8]                                                   │
│    ]                                                                    │
│  ];                                                                     │
│                                                                         │
│  Access: cube[layer][row][col]                                          │
│  cube[0][0][0] → 1   cube[0][1][1] → 4                                │
│  cube[1][0][0] → 5   cube[1][1][1] → 8                                │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Interview Questions & Coding Examples

### Q1. How do you create and iterate a 2D array?

```js
// Create 2D array
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Iterate with nested for
for (let i = 0; i < grid.length; i++) {       // rows
    for (let j = 0; j < grid[i].length; j++) { // cols
        console.log(`grid[${i}][${j}] = ${grid[i][j]}`);
    }
}

// Iterate with nested for...of
for (const row of grid) {
    for (const cell of row) {
        console.log(cell);
    }
}

// Iterate with forEach
grid.forEach((row, i) => {
    row.forEach((cell, j) => {
        console.log(`grid[${i}][${j}] = ${cell}`);
    });
});

// Flatten to 1D
const flat = grid.flat(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
const flat2 = grid.flat(Infinity); // same for 2D

// Create 2D array programmatically
const rows = 3, cols = 4;
const matrix = [];
for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
        matrix[i][j] = i * cols + j + 1;
    }
}
console.log(matrix);
// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]

// Create with Array.from
const matrix2 = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => i * cols + j + 1)
);
```

---

### Q2. How do you traverse a 2D array in different patterns?

```js
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Row-wise traversal
console.log("Row-wise:");
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        process.stdout.write(grid[i][j] + " ");
    }
    console.log();
}
// 1 2 3
// 4 5 6
// 7 8 9

// Column-wise traversal
console.log("Column-wise:");
for (let j = 0; j < grid[0].length; j++) {
    for (let i = 0; i < grid.length; i++) {
        process.stdout.write(grid[i][j] + " ");
    }
    console.log();
}
// 1 4 7
// 2 5 8
// 3 6 9

// Diagonal traversal (main diagonal)
console.log("Main diagonal:");
for (let i = 0; i < grid.length; i++) {
    console.log(grid[i][i]);
}
// 1, 5, 9

// Anti-diagonal traversal
console.log("Anti-diagonal:");
for (let i = 0; i < grid.length; i++) {
    console.log(grid[i][grid.length - 1 - i]);
}
// 3, 5, 7

// Spiral traversal
function spiralTraverse(grid) {
    const result = [];
    let top = 0, bottom = grid.length - 1;
    let left = 0, right = grid[0].length - 1;

    while (top <= bottom && left <= right) {
        // Top row
        for (let j = left; j <= right; j++) result.push(grid[top][j]);
        top++;
        // Right column
        for (let i = top; i <= bottom; i++) result.push(grid[i][right]);
        right--;
        // Bottom row
        if (top <= bottom) {
            for (let j = right; j >= left; j--) result.push(grid[bottom][j]);
            bottom--;
        }
        // Left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) result.push(grid[i][left]);
            left++;
        }
    }
    return result;
}
console.log(spiralTraverse(grid)); // [1, 2, 3, 6, 9, 8, 7, 4, 5]

// Zigzag traversal
console.log("Zigzag:");
for (let i = 0; i < grid.length; i++) {
    if (i % 2 === 0) {
        for (let j = 0; j < grid[i].length; j++) {
            process.stdout.write(grid[i][j] + " ");
        }
    } else {
        for (let j = grid[i].length - 1; j >= 0; j--) {
            process.stdout.write(grid[i][j] + " ");
        }
    }
    console.log();
}
// 1 2 3
// 6 5 4
// 7 8 9
```

---

### Q3. How do you transpose a matrix?

```js
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Transpose — rows become columns
function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = [];

    for (let j = 0; j < cols; j++) {
        result[j] = [];
        for (let i = 0; i < rows; i++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}

console.log(transpose(matrix));
// [[1, 4, 7],
//  [2, 5, 8],
//  [3, 6, 9]]

// Modern approach with map
const transpose2 = matrix =>
    matrix[0].map((_, j) => matrix.map(row => row[j]));

console.log(transpose2(matrix));
// Same result

// For rectangular matrices
const rect = [
    [1, 2, 3],
    [4, 5, 6]
];
console.log(transpose(rect));
// [[1, 4],
//  [2, 5],
//  [3, 6]]
```

---

### Q4. How do you rotate a matrix?

```js
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Rotate 90 degrees clockwise
function rotate90(matrix) {
    const n = matrix.length;
    const result = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            result[j][n - 1 - i] = matrix[i][j];
        }
    }
    return result;
}

console.log(rotate90(matrix));
// [[7, 4, 1],
//  [8, 5, 2],
//  [9, 6, 3]]

// Rotate 90 degrees clockwise — in-place (for square matrices)
function rotate90InPlace(matrix) {
    const n = matrix.length;
    // Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse each row
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
    return matrix;
}

// Rotate 180 degrees
function rotate180(matrix) {
    return matrix.slice().reverse().map(row => row.slice().reverse());
}

// Rotate 270 degrees (or -90)
function rotate270(matrix) {
    return rotate90(rotate90(rotate90(matrix)));
}
```

---

### Q5. How do you find the sum of rows, columns, and diagonals?

```js
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Row sums
const rowSums = grid.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSums); // [6, 15, 24]

// Column sums
const colSums = grid[0].map((_, j) =>
    grid.reduce((sum, row) => sum + row[j], 0)
);
console.log(colSums); // [12, 15, 18]

// Main diagonal sum
const mainDiagonal = grid.reduce((sum, row, i) => sum + row[i], 0);
console.log(mainDiagonal); // 15

// Anti-diagonal sum
const antiDiagonal = grid.reduce((sum, row, i) => sum + row[row.length - 1 - i], 0);
console.log(antiDiagonal); // 15

// All elements sum
const totalSum = grid.flat().reduce((a, b) => a + b, 0);
console.log(totalSum); // 45

// Maximum element
const max = Math.max(...grid.flat());
console.log(max); // 9

// Minimum element
const min = Math.min(...grid.flat());
console.log(min); // 1
```

---

### Q6. How do you search in a 2D array?

```js
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Linear search
function findElement(grid, target) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === target) {
                return { row: i, col: j };
            }
        }
    }
    return null;
}
console.log(findElement(grid, 5)); // { row: 1, col: 1 }
console.log(findElement(grid, 10)); // null

// Search in sorted matrix (row-wise and column-wise sorted)
const sorted = [
    [1, 4, 7, 11],
    [2, 5, 8, 12],
    [3, 6, 9, 16],
    [10, 13, 14, 17]
];

function searchSorted(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return { row, col };
        } else if (matrix[row][col] > target) {
            col--; // Move left
        } else {
            row++; // Move down
        }
    }
    return null;
}
console.log(searchSorted(sorted, 5)); // { row: 1, col: 1 }
console.log(searchSorted(sorted, 20)); // null
```

---

### Q7. How do you create a matrix filled with zeros or specific values?

```js
const rows = 3, cols = 4;

// Fill with zeros
const zeros = Array.from({ length: rows }, () => Array(cols).fill(0));
console.log(zeros);
// [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]

// Fill with incrementing numbers
const numbers = Array.from({ length: rows }, (_, i) =>
    Array.from({ length: cols }, (_, j) => i * cols + j)
);
console.log(numbers);
// [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]]

// Fill with random numbers
const random = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => Math.floor(Math.random() * 10))
);
console.log(random);

// ⚠️ Common mistake: Array(rows).fill(Array(cols).fill(0))
const wrong = Array(rows).fill(Array(cols).fill(0));
wrong[0][0] = 99;
console.log(wrong); // All rows have 99 at [0]!
// Because the inner array is shared across all rows

// Correct: Create new array for each row
const correct = Array.from({ length: rows }, () => Array(cols).fill(0));
correct[0][0] = 99;
console.log(correct); // Only first row has 99
```

---

### Q8. How do you create a multiplication table and Pascal's triangle?

```js
// Multiplication table
function multiplicationTable(n) {
    const table = [];
    for (let i = 1; i <= n; i++) {
        table[i - 1] = [];
        for (let j = 1; j <= n; j++) {
            table[i - 1][j - 1] = i * j;
        }
    }
    return table;
}
console.log(multiplicationTable(3));
// [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

// Pascal's triangle
function pascalTriangle(rows) {
    const triangle = [];
    for (let i = 0; i < rows; i++) {
        triangle[i] = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }
    return triangle;
}
console.log(pascalTriangle(5));
// [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

// Right-aligned pattern
function rightAlignedPattern(n) {
    for (let i = 1; i <= n; i++) {
        const spaces = " ".repeat(n - i);
        const stars = "* ".repeat(i);
        console.log(spaces + stars.trim());
    }
}
rightAlignedPattern(5);
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
```

---

### Q9. How do you work with jagged arrays (irregular 2D arrays)?

```js
// Jagged array — rows have different lengths
const jagged = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];

// Iterate safely
for (let i = 0; i < jagged.length; i++) {
    for (let j = 0; j < jagged[i].length; j++) {
        console.log(jagged[i][j]);
    }
}

// Check if rectangular
function isRectangular(matrix) {
    if (matrix.length === 0) return true;
    const cols = matrix[0].length;
    return matrix.every(row => row.length === cols);
}
console.log(isRectangular(jagged)); // false
console.log(isRectangular([[1, 2], [3, 4]])); // true

// Get max row length
const maxRowLength = Math.max(...jagged.map(row => row.length));
console.log(maxRowLength); // 4

// Pad jagged array to make rectangular
function padJagged(matrix, fillValue = 0) {
    const maxLength = Math.max(...matrix.map(row => row.length));
    return matrix.map(row => [...row, ...Array(maxLength - row.length).fill(fillValue)]);
}
console.log(padJagged(jagged));
// [[1, 2, 3, 0], [4, 5, 0, 0], [6, 7, 8, 9]]
```

---

### Q10. How do you work with CSV data (2D array from strings)?

```js
const csv = `name,age,city
John,30,NYC
Jane,25,LA
Bob,35,Chicago`;

// Parse CSV to 2D array
function parseCSV(csv) {
    return csv.split("\n").map(row => row.split(","));
}

const data = parseCSV(csv);
console.log(data);
// [["name", "age", "city"], ["John", "30", "NYC"], ["Jane", "25", "LA"], ["Bob", "35", "Chicago"]]

// Convert to objects
function csvToObjects(data) {
    const headers = data[0];
    return data.slice(1).map(row => {
        const obj = {};
        headers.forEach((header, i) => {
            obj[header] = row[i];
        });
        return obj;
    });
}

const users = csvToObjects(data);
console.log(users);
// [{ name: "John", age: "30", city: "NYC" }, ...]

// Convert objects to CSV
function objectsToCSV(objects, headers) {
    const rows = objects.map(obj => headers.map(h => obj[h]).join(","));
    return [headers.join(","), ...rows].join("\n");
}

const csvOutput = objectsToCSV(users, ["name", "age", "city"]);
console.log(csvOutput);

// Filter rows
const adults = users.filter(u => Number(u.age) >= 30);
console.log(adults);

// Sort by column
const sortedByAge = [...users].sort((a, b) => Number(a.age) - Number(b.age));
console.log(sortedByAge);
```

---

## 3. Quick Reference

### 2D Array Operations

```js
// Create
const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const zeros = Array.from({ length: rows }, () => Array(cols).fill(0));

// Access
grid[row][col]

// Dimensions
const rows = grid.length;
const cols = grid[0].length;

// Iterate
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        console.log(grid[i][j]);
    }
}

// Flatten
const flat = grid.flat();

// Transpose
const transposed = grid[0].map((_, j) => grid.map(row => row[j]));

// Row sum
const rowSums = grid.map(row => row.reduce((a, b) => a + b, 0));

// Column sum
const colSums = grid[0].map((_, j) => grid.reduce((sum, row) => sum + row[j], 0));

// Find element
function find(grid, target) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === target) return { row: i, col: j };
        }
    }
    return null;
}
```

---

## 4. Key Takeaways

1. **2D arrays are arrays of arrays** — `grid[row][col]` is the access pattern.
2. **Always check dimensions before accessing** — `grid[0].length` for columns.
3. **Use `Array.from()` to create rows** — `Array(rows).fill(Array(cols))` shares inner arrays!
4. **Row-wise traversal is cache-friendly** — adjacent memory access.
5. **Transpose swaps rows and columns** — `matrix[row][col]` becomes `matrix[col][row]`.
6. **Rotate 90° clockwise = transpose + reverse rows** — efficient in-place for square matrices.
7. **Jagged arrays have rows of different lengths** — check `row.length` before accessing.
8. **CSV is naturally a 2D array** — split by `\n` then by `,`.
9. **Use `flat()` to convert 2D to 1D** — `grid.flat()` flattens one level.
10. **Matrix operations are common in interviews** — practice transpose, rotate, search, and spiral traversal.

---

**Happy coding! 🚀**

*2D arrays are the foundation of grids, matrices, and image processing — master them!*
