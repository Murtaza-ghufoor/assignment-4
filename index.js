"use strict";
// Question no 1
let greeting = 'Hello world';
console.log('greetin=', greeting);
// Question no 2
let n1 = 10;
let n2 = 15;
// addition
console.log(n1 + n2);
// division
console.log(n1 / n2);
// product
console.log(n1 * n2);
// quotient
console.log(n1 ** n2);
// Question no 3 
// Swap
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log('a=', a);
console.log('b=', b);
// Question no 4
let trystringintonumbertype = 'hello';
//trystringintonumbertype= 10 error, this is not possible that we can create a string variable and try changing its type.
// Question no 5
console.log(n1 % n2);
// Question no 6
a++;
console.log('a=', a);
a += 1;
console.log('a=', a);
// Question no 7
let a1 = true;
let b1 = true;
let c1 = false;
// Andgate
let andgate = a1 && b1;
console.log('andgate=', andgate);
let andgate1 = b1 && a1;
console.log('andgate1=', andgate1);
let andgate2 = a1 && c1;
console.log('andgaye2=', andgate2);
let andgate3 = b1 && c1;
console.log('andgate3=', andgate3);
// ORgate
let orgate = a1 || c1;
console.log('orgate=', orgate);
let orgate1 = a1 || b1;
console.log('orgate1=', orgate1);
let orgate2 = b1 || c1;
console.log('orgate2=', orgate2);
let orgate3 = b1 || a1;
console.log('orgate3=', orgate3);
// Notgate
let notgate = !a1;
console.log('notgate=', notgate);
let notgate1 = !b1;
console.log('notgate1=', notgate1);
let notgate2 = !c1;
console.log('notgate2=', notgate2);
// Question no 8
let num = 15;
num += 15;
console.log(num);
num -= 5;
console.log(num);
num *= 10;
console.log(num);
num /= 2;
console.log(num);
// Question no 9
// for even
let no = 4;
let result = no % 2;
if (result == 0) {
    console.log('even');
}
else {
    console.log('odd');
}
// for odd
let no1 = 15;
let result1 = no % 2;
if (result == 0) {
    console.log('even');
}
else {
    console.log('odd');
}
// Question no 10
let ageforvote = 18;
if (ageforvote >= 18) {
    console.log('eligible for vote');
}
else {
    console.log('=', 'Not eligible for vote ');
}
// Question no 11
let score = 100;
if (score >= 85) {
    console.log('Grade A');
}
else if (score >= 75) {
    console.log('Grade B');
}
else if (score >= 65) {
    console.log('Grade c');
}
else if (score >= 50) {
    console.log('Grade D');
}
else {
    console.log('Grade F');
}
// Question no 12
let x1 = 13;
let y1 = 14;
let z1 = 15;
if (x1 >= y1 && x1 >= z1) {
    console.log("x is the largest:", x1);
}
else if (y1 >= x1 && y1 >= z1) {
    console.log("y is the largest:", y1);
}
else {
    console.log("z is the largest:", z1);
}
// Question no 14
let fahrenheit = 68;
if (fahrenheit = 68) {
    console.log("fahrenheit 68 into celsius is:", 20);
}
