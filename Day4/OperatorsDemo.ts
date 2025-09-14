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