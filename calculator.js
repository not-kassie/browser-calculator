//set up variables 

let number = 0; 
let operator = 0;
let secondNumber = 0; 

//check for operator so we can use a switch statement in operate function
if(document.getElementById('add').clicked == true){
    operator = '1';
} if (document.getElementById('sub').clicked == true){
    operator = '2';
} if (document.getElementById('multiply').clicked == true){
    operator = '3';
} if (document.getElementById('divide').clicked == true){
    operator = '4';
}

//set up functions 
function addition(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtraction(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
    if (secondNumber === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return firstNumber / secondNumber;
}

function operate(firstNumber, operator, secondNumber) {
    switch (operator) {
        case '1':
            return addition(firstNumber, secondNumber);
        case '2':
            return subtraction(firstNumber, secondNumber);
        case '3':
            return multiplication(firstNumber, secondNumber);
        case '4':
            return division(firstNumber, secondNumber);
        default:
            return "Error: Invalid operator.";
    }
}