"use strict"
console.log("hello")
console.log("Infinity: ", Infinity)
console.log("Return: ", Number.POSITIVE_INFINITY)
console.log(1/0)
console.log("0xEF:",0xEF)

//Binary, Octal, Hexa
const num = 11;

console.log("Binary: ", num.toString(2));
console.log("Octal: ", num.toString(8));
console.log("Hexa: ", num.toString(16));


//Fixed Decimal
const x = 4.56367;

console.log(x.toFixed(2));
console.log(x.toFixed(3));
console.log(x.toFixed(6));

//Round Off/Precision
const y = 4.56367;

console.log(y.toPrecision(2));
console.log(y.toPrecision(3));
console.log(y.toPrecision(4));

//MAX and MIN
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);