const a = 0;
const b = 0;
const operator = '';

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
inputText = document.querySelector("#input");
answerText = document.querySelector("#answer");

buttonFunctionality(btn0);
buttonFunctionality(btn1);
buttonFunctionality(btn2);
buttonFunctionality(btn3);
buttonFunctionality(btn4);
buttonFunctionality(btn5);
buttonFunctionality(btn6);
buttonFunctionality(btn7);
buttonFunctionality(btn8);
buttonFunctionality(btn9);
plusButtonFunctionality(btnPlus);
minusButtonFunctionality(btnMinus);
multiplyButtonFunctionality(btnMultiply);
divideButtonFunctionality(btnDivide);

function buttonFunctionality(button) {
    button.addEventListener("click", () => {
        lastLetter = button.id.substring(button.id.length - 1, button.id.length);
        inputText.textContent = lastLetter;
    });
}

function plusButtonFunctionality(button) {
    button.addEventListener("click", () => {
        input.textContent = "+";
    });
}

function minusButtonFunctionality(button) {
    button.addEventListener("click", () => {
        input.textContent = "-";
    });
}

function multiplyButtonFunctionality(button) {
    button.addEventListener("click", () => {
        input.textContent = "*";
    });
}

function divideButtonFunctionality(button) {
    button.addEventListener("click", () => {
        input.textContent = "/";
    });
}

function operate(a, operator, b) {
    if (operator = '+') {
        add(a, b);
    }
    if (operator = '-') {
        subtract(a, b);
    }
    if (operator = '*') {
        multiply(a, b);
    }
    if (operator = '/') {
        divide(a, b);
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