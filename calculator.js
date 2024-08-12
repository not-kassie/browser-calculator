//set up variables 

let number = 0; 
let operator = null;
let secondNumber = 0; 
plzResetScreen = false;
const bottomScreen = document.getElementById('bottomDisplay');
const numberButtons = document.querySelectorAll('[number]');
const operatorButtons = document.querySelectorAll('[operator]');

//check for operator so we can use a switch statement in operate function
if(document.getElementById('add').clicked == true){
    operator = '+';
} if (document.getElementById('sub').clicked == true){
    operator = '-';
} if (document.getElementById('multiply').clicked == true){
    operator = 'x';
} if (document.getElementById('divide').clicked == true){
    operator = '÷';
}

//set up buttons! 
numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendNumber(button.textContent))
)
operatorButtons.forEach((button) =>
    button.addEventListener('click', () => 
        appendNumber(button.textContent))
)

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
        case '+':
            return addition(firstNumber, secondNumber);
        case '-':
            return subtraction(firstNumber, secondNumber);
        case 'x':
            return multiplication(firstNumber, secondNumber);
        case '÷':
            return division(firstNumber, secondNumber);
        default:
            return "Error: Invalid operator.";
    }
}

function appendNumber(number) {
    if (bottomScreen.textContent === '0' || plzResetScreen)
        resetScreen();
    bottomScreen.textContent += number;
}

function resetScreen() {
    bottomScreen.textContent = ''; 
    plzResetScreen = false;
}