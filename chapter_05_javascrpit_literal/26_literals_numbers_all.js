// JavaScript supports only one number type: Number (IEEE 754 double-precision 64-bit floating point)
// However, numbers can be written in various literal formats

// 1. Integer Literals (Whole numbers)
let decimalInt = 42;
console.log("Integer:", decimalInt, "-> Type:", typeof decimalInt);

// 2. Floating-Point Literals (Decimal numbers)
let floatNum = 3.14;
console.log("Float:", floatNum, "-> Type:", typeof floatNum);

// 3. Binary Literals (Base-2, prefixed with 0b or 0B)
let binaryNum = 0b1010; // Equals 10 in decimal
console.log("Binary 0b1010:", binaryNum, "-> Type:", typeof binaryNum);

// 4. Octal Literals (Base-8, prefixed with 0o or 0O)
let octalNum = 0o17; // Equals 15 in decimal
console.log("Octal 0o17:", octalNum, "-> Type:", typeof octalNum);

// 5. Hexadecimal Literals (Base-16, prefixed with 0x or 0X)
let hexNum = 0x1F; // Equals 31 in decimal
console.log("Hexadecimal 0x1F:", hexNum, "-> Type:", typeof hexNum);

// 6. Exponential Notation (Scientific notation)
let expNum = 1.5e3; // 1.5 * 10^3 = 1500
let smallExp = 1.5e-3; // 1.5 * 10^-3 = 0.0015
console.log("Exponential 1.5e3:", expNum);
console.log("Exponential 1.5e-3:", smallExp);

// 7. Positive and Negative Numbers
let positiveNum = +25;
let negativeNum = -25;
console.log("Positive:", positiveNum, "Negative:", negativeNum);

// 8. Special Number Values
// Infinity - represents positive infinity
let posInfinity = Infinity;
let negInfinity = -Infinity;
console.log("Infinity:", posInfinity, "-> Type:", typeof posInfinity);
console.log("-Infinity:", negInfinity);

// NaN - Not a Number (invalid number operation result)
let notANumber = NaN;
console.log("NaN:", notANumber, "-> Type:", typeof notANumber);
console.log("0/0 =", 0 / 0); // Results in NaN

// 9. BigInt - for arbitrarily large integers (suffix with n)
let bigNumber = 9007199254740991n;
console.log("BigInt:", bigNumber, "-> Type:", typeof bigNumber);

// Note: All regular numbers in JS are of type 'number'
// BigInt is a separate type 'bigint'
