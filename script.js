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
clearButtonFunctionality(btnClear);
equalsButtonFunctionality(btnEquals);

let inputString = "";
let numA = 0;
let numB = 0;
let operator = "";


function buildInputString(input) {
    //if input is a number, add it to the end of the string
    if (!isNaN(Number(input))) {
        addInputToString(input);
    }
    console.log(Number(input));
    //if input is an operator, and string doesn't contain an operator, add operator to the string
    if (((input) === "+") ||
        ((input) === "-") ||
        ((input) === "*") ||
        ((input) === "/")) {
        if (!(inputString.indexOf("+") > -1) &&
            !(inputString.indexOf("-") > -1) &&
            !(inputString.indexOf("*") > -1) &&
            !(inputString.indexOf("/") > -1)) {
            //make first number all the characters before the operator
            numA = Number(inputString);
            //assign the operator to the input
            operator = input;
            addInputToString(input);
        }
    }
}

function equalsButtonFunctionality(button) {
    button.addEventListener("click", () => {
        numB = Number(inputString.slice(inputString.indexOf(operator)));
        console.log(numA);
        console.log(operator);
        console.log(numB);
        let answer = operate(numA, operator, numB);
        console.log(answer);
    });
}

function addInputToString(input) {
    inputString = inputString + input;
    inputText.textContent = inputString;
}

function buttonFunctionality(button) {
    button.addEventListener("click", () => {
        lastLetter = button.id.substring(button.id.length - 1, button.id.length);
        buildInputString(lastLetter);
    });
}

function plusButtonFunctionality(button) {
    button.addEventListener("click", () => {
        buildInputString("+");
    });
}

function minusButtonFunctionality(button) {
    button.addEventListener("click", () => {
        buildInputString("-");
    });
}

function multiplyButtonFunctionality(button) {
    button.addEventListener("click", () => {
        buildInputString("*");
    });
}

function divideButtonFunctionality(button) {
    button.addEventListener("click", () => {
        buildInputString("/");
    });
}

function clearButtonFunctionality(button) {
    button.addEventListener("click", () => {
        input.textContent = "";
    });
}

function operate(a, operator, b) {
    if (operator === '+') {
        add(a, b);
    }
    if (operator === '-') {
        subtract(a, b);
    }
    if (operator === '*') {
        multiply(a, b);
    }
    if (operator === '/') {
        divide(a, b);
    }
}

function add(a, b) {
    alert();
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