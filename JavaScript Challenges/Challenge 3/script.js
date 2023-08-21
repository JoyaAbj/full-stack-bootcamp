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