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
inputText = document.querySelector("#input");
answerText = document.querySelector("#answer");

buttonFunctionality(btn0);

function buttonFunctionality(button) {
    button.addEventListener("click", () => {
        receiveInput(button);
    });
}

function receiveInput(button) {
    if (button.getAttribute('id') == "b0") {
        inputText.textContent = "0";
    }
    if (button.getAttribute('id') == "b1") {
        inputText.textContent = "1";
    }
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