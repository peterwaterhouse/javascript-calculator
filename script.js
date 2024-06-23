buttons = document.querySelectorAll("input[type=button]");
btn0 = document.querySelector("#b0");
btn1 = document.querySelector("#b1");
btn2 = document.querySelector("#b2");
btn3 = document.querySelector("#b3");
btn4 = document.querySelector("#b4");
btn5 = document.querySelector("#b5");
btn6 = document.querySelector("#b6");
btn7 = document.querySelector("#b7");
btn8 = document.querySelector("#b8");
btn9 = document.querySelector("#b9");
btnPlus = document.querySelector("#bPlus");
btnMinus = document.querySelector("#bMinus");
btnMultiply = document.querySelector("#bMultiply");
btnDivide = document.querySelector("#bDivide");
btnClear = document.querySelector("#bClear");
btnEquals = document.querySelector("#bEquals");

display = document.querySelector("#display");

numberButtonFunctionality(btn0);
numberButtonFunctionality(btn1);
numberButtonFunctionality(btn2);
numberButtonFunctionality(btn3);
numberButtonFunctionality(btn4);
numberButtonFunctionality(btn5);
numberButtonFunctionality(btn6);
numberButtonFunctionality(btn7);
numberButtonFunctionality(btn8);
numberButtonFunctionality(btn9);
plusButtonFunctionality(btnPlus);
minusButtonFunctionality(btnMinus);
multiplyButtonFunctionality(btnMultiply);
divideButtonFunctionality(btnDivide);
clearButtonFunctionality(btnClear);
equalsButtonFunctionality(btnEquals);

let inputString = "";
let numA = 0;
let numB = 0;
let operator = "";
let operatorPressed = false;

function receiveInputNumber(input) {
    inputString = inputString + input;
    display.textContent = inputString;
}

function receiveInputOperator(input) {
    //if we haven't pressed the operator button yet, make numA what's on the display
    if (!operatorPressed) {
        numA = parseFloat(inputString);
        operator = input;
        console.log(inputString);
        inputString = "";
        operatorPressed = true;
    }
    //if the operator has been pressed, make numB what's on the display
    //display the new calculation
    else {
        numB = parseFloat(inputString);
        inputString = operate(numA, operator, numB);
        display.textContent = inputString;
        numA = parseFloat(inputString);
        numB = 0;
        operator = input;
        inputString = "";
        //operatorPressed = false;
    }
}


function equalsButtonFunctionality(button) {
    button.addEventListener("click", () => {
        if (operatorPressed) {
            numB = parseFloat(inputString);
            inputString = operate(numA, operator, numB);
            display.textContent = inputString;
            operatorPressed = false;
            numA = 0;
            numB = 0;
        }
    });
}

function numberButtonFunctionality(button) {
    button.addEventListener("click", () => {
        lastLetter = button.id.substring(button.id.length - 1, button.id.length);
        receiveInputNumber(lastLetter);
    });
}

function plusButtonFunctionality(button) {
    button.addEventListener("click", () => {
        receiveInputOperator("+");
    });
}

function minusButtonFunctionality(button) {
    button.addEventListener("click", () => {
        receiveInputOperator("-");
    });
}

function multiplyButtonFunctionality(button) {
    button.addEventListener("click", () => {
        receiveInputOperator("*");
    });
}

function divideButtonFunctionality(button) {
    button.addEventListener("click", () => {
        receiveInputOperator("/");
    });
}

function clearButtonFunctionality(button) {
    button.addEventListener("click", () => {
        numA = 0;
        numB = 0;
        operator = "";
        inputString = "";
        display.textContent = inputString;
        operatorPressed = false;
    });
}

function operate(a, operator, b) {
    if (operator === '+') {
        return add(a, b);
    }
    if (operator === '-') {
        return subtract(a, b);
    }
    if (operator === '*') {
        return multiply(a, b);
    }
    if (operator === '/') {
        return divide(a, b);
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}