//break statement
//The break statement is used to exit a loop or switch statement before it has completed all its iterations or cases.

for (let i: number = 1; i <= 10; i++) {
    if (i === 5) {
        break; //when i is 5, the loop will terminate
    }
    console.log(`Value of i is: ${i}`);
}
console.log("Loop terminated using break statement");

//continue statement
//The continue statement is used to skip the current iteration of a loop and move to the next iteration.

for (let j: number = 1; j <= 10; j++) {
    if (j % 2 === 0) {
        continue; //when j is even, skip the rest of the loop and move to the next iteration
    }
    console.log(`Odd number: ${j}`);
}
console.log("Loop completed using continue statement");