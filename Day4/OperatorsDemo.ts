let a:number = 5, b:number = 2;

// Arithmetic Operators
console.log("****Arithmetic Operators****");
console.log(`Addition is : ${a + b}`);
console.log(`Subtraction is : ${a - b}`);
console.log(`Multiplication is : ${a * b}`);
console.log(`Division is : ${a / b}`);
console.log(`Modulus is : ${a % b}`);
console.log(`Exponentiation is : ${a ** b}`);

// Assignment Operators
a = 10;
b = 3;

a = a + b; // a = 10 + 3 = 13
console.log("****Assignment Operators****");
console.log(`Value of a after a = a + b is : ${a}`);

console.log(`Value of a after a after a += b is : ${a += b}`); // a = a + b
console.log(`Value of a after a after a -= b is : ${a -= b}`); // a = a - b
console.log(`Value of a after a after a *= b is : ${a *= b}`); // a = a * b
console.log(`Value of a after a after a /= b is : ${a /= b}`); // a = a / b
console.log(`Value of a after a after a %= b is : ${a %= b}`); // a = a % b
console.log(`Value of a after a after a **= b is : ${a **= b}`); // a = a ** b

//Relational Operators
//returns boolean value 
// < , > , <= , >= , == , != , === , !==

console.log("****Relational Operators****");
console.log(`a < b : ${a < b}`);
console.log(`a > b : ${a > b}`);
console.log(`a <= b : ${a <= b}`);
console.log(`a >= b : ${a >= b}`);
console.log(`a == b : ${a == b}`); // compares only value
console.log(`a != b : ${a != b}`);
console.log(`a === b : ${a === b}`); // compares value and type
console.log(`a !== b : ${a !== b}`);

//Logical Operators
// && , || , !
//returns boolean value 

console.log("****Logical Operators****");

/** 
 * b1       b2    b1&&b2   b1||b2   !b1
 * -------------------------------------
 * true    true    true     true     false
 * true    false   false    true     false
 * false   true    false    true     true
 * false   false   false    false    true
*/
 
//! - NOT Operator -> inverts the boolean value
console.log(`!true : ${!true}`);
console.log(`!false : ${!false}`);

let b1:boolean = true, b2:boolean = false;
// && - AND Operator -> true if both operands are true
console.log(`b1 && b2 : ${b1 && b2}`); // true && false -> false
console.log(`true && true : ${true && true}`);
console.log(`false && false : ${false && false}`);

// || - OR Operator -> true if at least one operand is true
console.log(`b1 || b2 : ${b1 || b2}`); // true || false -> true
console.log(`true || true : ${true || true}`);
console.log(`false || false : ${false || false}`);

//Combination of relational and logical operators
let age:number = 25;
let hasDrivingLicense:boolean = true;

console.log("****Combination of relational and logical operators****");
// Check if a person is eligible to drive
// Eligibility criteria: age >= 18 AND hasDrivingLicense == true

let isEligibleToDrive:boolean = (age >= 18) && (hasDrivingLicense == true);
console.log(`Is the person eligible to drive? : ${isEligibleToDrive}`);