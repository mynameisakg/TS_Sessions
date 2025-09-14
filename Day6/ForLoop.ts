//for loop in typescript
//A for loop is used to repeat a block of code a specific number of times.

for (let count: number = 1; count <= 5; count++) {
    console.log(`Count is: ${count}`);
}

//Example 2: Print even numbers from 1 to 10
for (let num: number = 1; num <= 10; num++) {
    if (num % 2 == 0) {
        console.log(`Even number: ${num}`);
    }
}
//remember, let num will execute only once and then the flow will be "condition -> block statement execution -> increment/decrement"

//Example 3: 
let i : number;
for(let i:number=10; i>=1; i--){
    console.log(`number is: ${i}`);
}
console.log(`Value of i after the loop is: ${i}`); //error, because the scope of i is only within the for loop block

//Example 4: Tricky
let j: number = 1;

for (j = 1; j <= 5; j++); //semicolon here means the for loop has no body, so it just increments j from 1 to 6 and then exits the loop
    
console.log(`Value of j is: ${j}`); //6, because of the semicolon after the for loop, the loop has no body, so it just increments j from 1 to 6 and then exits the loop
