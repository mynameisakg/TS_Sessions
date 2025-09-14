//Increement and Decrement Operators
let z:number = 10;
console.log("****Increement and Decreement Operators****");
console.log(`Initial Value of a is : ${z}`);

//Post Increement
console.log(`Value of z after Post Increement is : ${z++}`); //10
console.log(`Value of z after Post Increement is : ${z}`); //11
//In the above example, first the value of z is returned and then it is incremented by 1

//Pre Increement
console.log(`Value of z after Pre Increement is : ${++z}`); //12
console.log(`Value of z after Pre Increement is : ${z}`); //12
//In the above example, first the value of z is incremented by 1 and then it is returned

let x:number = 20;
console.log(`Initial Value of x is : ${x}`);
let result:number = x++ + 5; //20 + 5 = 25
console.log(`Value of result is : ${result}`); //25
console.log(`Value of x after Post Increement is : ${x}`); //21