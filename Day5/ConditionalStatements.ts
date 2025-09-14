//if statement
/**
 * if(condition){ //condition always comes from relational or logical operators
 *  //statements
 * }
 * else if(condition){ //if the if condition is false then only this block will be executed
 *  //statements
 * }
 * else{ //if all the above conditions are false then only this block will be executed
 *  //statements
 * }
 */

//Example 1: Check whether a person is eligible to vote or not
let age: number = 17;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

//Example 2: Check whether a number is even or odd
let num: number = 10;
if (num % 2 == 0) {
    console.log(`${num} is Even number`);
} else {
    console.log(`${num} is Odd number`);
}

//Exmaple 3: Nested if-else
let marks: number = 1;
if (marks >= 0 && marks <= 100) {
    if (marks >= 90) {
        console.log("Grade A");
    } else if (marks >= 75) {
        console.log("Grade B");
    } else if (marks >= 60) {
        console.log("Grade C");
    } else if (marks >= 50) {
        console.log("Grade D");
    } else {
        console.log("Grade F");
    }
} else {
    console.log("Invalid marks");
}

//Example 4 : Browser selection
let browser: string = "Opera"; //Chrome, Firefox, Safari, Edge
if (browser.toLowerCase() === "chrome") {
    console.log("You are using Chrome browser");
} else if (browser.toLowerCase() === "firefox") {
    console.log("You are using Firefox browser");
} else if (browser.toLowerCase() === "safari") {
    console.log("You are using Safari browser");
} else if (browser.toLowerCase() === "edge") {
    console.log("You are using Edge browser");
} else {
    console.log(`Please use a valid browser, entered browser is : ${browser}`);
}


//switch case
/**
 * switch(expression){
 *  case value1:
 *      //statements
 *      break;
 *  case value2:
 *      //statements
 *      break;
 *  ...
 *  default:
 *      //statements
 * }
 */

//Browser selection using switch case
let browser1: string = "Opera"; //Chrome, Firefox, Safari, Edge
switch (browser1.toLowerCase()) {
    case "chrome":
        console.log("You are using Chrome browser");
        break;
    case "firefox":
        console.log("You are using Firefox browser");
        break;
    case "safari":
        console.log("You are using Safari browser");
        break;
    case "edge":
        console.log("You are using Edge browser");
        break;
    default:
        console.log(`Please use a valid browser, entered browser is : ${browser1}`);
        break;
}

//break is optional in switch case, if break is not used then all the cases after the matched case will be executed
let browser2: string = "Firefox"; //Chrome, Firefox, Safari, Edge
switch (browser2.toLowerCase()) {
    case "chrome":
        console.log("You are using Chrome browser");
    case "firefox":
        console.log("You are using Firefox browser");
    case "safari":
        console.log("You are using Safari browser");
    case "edge":
        console.log("You are using Edge browser");
    default:
        console.log(`Please use a valid browser, entered browser is : ${browser2}`);
}   