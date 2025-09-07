//1. Scope of Variables in TypeScript

//var ~ function scoped
function varTest() {
    if (true) {
        var a = 10;
        console.log(`Inside var's if block: ${a}`);
    }
    console.log(`Outside var'sif block: ${a}`);
}

//let ~ block scoped
function letTest() {
    if (true) {
        let b = 20;
        console.log(`Inside let's if block: ${b}`);
    }
    //console.log(`Outside let's if block: ${b}`); // Error: b is not defined
}

varTest();
letTest();

//2. Variable Declarations

//var
var x;
console.log(`Value of x before: ${x}`);
x = 5;
console.log(`Value of x after: ${x}`);

//let
let y;
console.log(`Value of y before: ${y}`);
y = 10;
console.log(`Value of y after: ${y}`);

//const
//const z;// Error: Missing initializer in const declaration
//z = 15; // Error: Cannot assign to 'z' because it is a constant or read-only property
const z = 15;//correct
console.log(`Value of z: ${z}`);

//3. Redeclaration

//var allow redeclaration
var city = "New York";
console.log(`City before redeclaration: ${city}`);
var city = "Los Angeles"; // Redeclaration allowed
console.log(`City after redeclaration: ${city}`);

//let and const do not allow redeclaration in the same scope
function redeclarationTest() {
    if (true) {
        let a = 10;
        console.log(`Inside first let declaration: ${a}`);
        // let a = 20; // Error: Cannot redeclare block-scoped variable 'a'
    }
    let a = 30; // Correct: different block
    console.log(`Outside if block let declaration: ${a}`);
}
redeclarationTest();

const b = 40;
// const b = 50; // Error: Cannot redeclare block-scoped variable 'b'
console.log(`Value of const b: ${b}`);

//4. Reassignment

//var and let allow reassignment
var num = 100;
console.log(`Value of num before reassignment: ${num}`);
num = 200;
console.log(`Value of num after reassignment: ${num}`);

let count = 300;
console.log(`Value of count before reassignment: ${count}`);
count = 400;
console.log(`Value of count after reassignment: ${count}`);

//const does not allow reassignment
const pi = 3.14;
console.log(`Value of pi: ${pi}`);
// pi = 3.14159; // Error: Cannot assign to 'pi' because it is a constant or read-only property

//However, if a const variable holds an object or array, the contents can be modified
const arr = [1, 2, 3];
console.log(`Array before modification: ${arr}`);
arr.push(4); // Modifying the contents is allowed
console.log(`Array after modification: ${arr}`);

const obj = { name: "Alice" };
console.log(`Object before modification: ${JSON.stringify(obj)}`);
obj.name = "Bob"; // Modifying the contents is allowed
console.log(`Object after modification: ${JSON.stringify(obj)}`);

//5. Hoisting

console.log(`Value of hoistedVar before declaration: ${hoistedVar}`); // undefined
var hoistedVar = 50;
console.log(`Value of hoistedVar after declaration: ${hoistedVar}`);

//console.log(`Value of hoistedLet before declaration: ${hoistedLet}`); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = 60;
console.log(`Value of hoistedLet after declaration: ${hoistedLet}`);

//console.log(`Value of hoistedConst before declaration: ${hoistedConst}`); // Error: Cannot access 'hoistedConst' before initialization
const hoistedConst = 70;
console.log(`Value of hoistedConst after declaration: ${hoistedConst}`);