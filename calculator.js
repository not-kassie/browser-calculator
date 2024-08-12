//set up variables 
let number = 0; 
let operator = null;
let secNumber = 0; 
plzResetScreen = false;

//set up button variables
const bottomScreen = document.getElementById('bottomDisplay');
const topScreen = document.getElementById('topDisplay');
const numberButtons = document.querySelectorAll('[number]');
const operatorButtons = document.querySelectorAll('[operator]');
const clearButton = document.getElementById('clearButton');
const decimalButton = document.getElementById('decimalButton');
const evalButton = document.getElementById('equal');

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
        getOperation(button.textContent))
)

clearButton.addEventListener('click', clear);
decimalButton.addEventListener('click', appendDecimal);
evalButton.addEventListener('click', calculate);

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
    a = Number(firstNumber);
    b = Number(secondNumber);
    switch (operator) {
        case '+':
            return addition(a, b);
        case '-':
            return subtraction(a, b);
        case 'x':
            return multiplication(a, b);
        case '÷':
            return division(a, b);
        default:
            return "Error: Invalid operator.";
    }
}

function appendNumber(numberTemp) {
    if (bottomScreen.textContent === '0' || plzResetScreen)
        resetScreen();
    bottomScreen.textContent += numberTemp;
}

function resetScreen() {
    bottomScreen.textContent = ''; 
    plzResetScreen = false;
}

function clear() {
    bottomScreen.textContent = '0';
    topScreen.textContent = ' ';
    number = '';
    secNumber = '';
    operator = null;
}

function appendDecimal() {
    if (!bottomScreen.textContent.includes('.'))
        bottomScreen.textContent += '.';
}

function getOperation(operatorTemp) {
    if (operator !== null) {
        calculate();
    }
    number = bottomScreen.textContent;
    operator = operatorTemp;
    topScreen.textContent = `${number} ${operator}`;
    plzResetScreen = true;
}

function roundResult(result) {
    return Number(result.toFixed(8));
}

function calculate() {
    if (operator === null || plzResetScreen) {
        return;
    }
    secNumber = bottomScreen.textContent;
    topScreen.textContent = `${number} ${operator} ${secNumber} =`;
    bottomScreen.textContent = 
        roundResult(operate(number, operator, secNumber));
    operator = null;
}
