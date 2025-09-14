//while loop in typescript
//A while loop is used to repeat a block of code as long as a specified condition is true.

let count: number = 1;
while (count <= 5) {
    console.log(`Count is: ${count}`);
    count++; //incrementing the count variable to avoid infinite loop
}

//Example 2: Print even numbers from 1 to 10
let num: number = 1;
while (num <= 10) {
    if (num % 2 == 0) {
        console.log(`Even number: ${num}`);
    }
    num++;
}

//Example 3: Print in reverse order from 10 to 1
let reverseNum: number = 10;
while (reverseNum >= 1) {
    console.log(`number is: ${reverseNum}`);
    reverseNum--;
}

//do-while loop in typescript
//A do-while loop is similar to a while loop, but it guarantees that the block of code will be executed at least once before checking the condition.

let i: number = 1;
do {
    console.log(`Value of i is: ${i}`);
    i++;
} while (i <= 5);