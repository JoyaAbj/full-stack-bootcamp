//step 1
//Basic Function
function addNumbers (num1, num2) {
    return num1 + num2;
}


console.log(addNumbers(10,90));  

//Function with Conditional Statements
function findMax (num11,num22) {
    if (num11 > num22) {
        return num11;
    } else if (num11<num22) {
        return num22;
    } else {
        return "Both are equal"
    }
}
console.log (findMax(10,20));
console.log (findMax(50,20));
console.log (findMax(4,4));

//Nested Function
function compute (num111, num222, operation) {
    function add () {
        return num111+num222;
    }
    function substract() {
        return num111-num222;
    }
    function multiply () {
        return num111*num222;
    }
    function divide() {
        if (num222 !==0) {
            return num111/num222;
        } else {
            return "Cannot divide by 0";
        }
    }
    switch (operation) {
        case "add":
            return add();
         case "subtract":
            return subtract();
        case "multiply":
             return multiply();
        case "divide":
             return divide();
        default:
            return "Invalid operation";
            }
    }
console.log (compute (10, 50, "multiply"));
console.log (compute (2,0,"divide"));

//step 2
//Arrow Function
const squareNumber = (number) => number * number;
console.log (squareNumber(2));

//Understanding Scopes
const globalVar = 4;
console.log (squareNumber(globalVar));

const squareNumber1 = (number1) => {
    const localVar = 5;
    return number1*number1;
}


//Step 3
//for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//While Loop
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}

// Do-While Loop with Conditionals
do {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);

//Advanced Loop Challenge
const favoriteFruit = ["apple", "banana", "strawberry", "watermelon", "pineapple", "grape", "pear"];

let y = 0;
while (y < favoriteFruit.length) {
    const fruit = favoriteFruit[y];
    if (fruit.length > 5) {
        console.log(fruit);
    }
    y++;
}


