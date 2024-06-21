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

let firstNumberString = "";

let addedOperator = false;

function buildInputString(input) {

    for (i = 0; i < inputString.length + 1; i++) {
        //allow user to input a negative number for the first character
        if (i === 0 && input === "-") {
            addInputToString(input);
        }
        //if user is inputting a number, add it to the input string
        if (!isNaN(Number(input))) {
            addInputToString(input);
        }

        //if input is an operator, and the string doesn't contain an operator, add it
        if (((input) === "+") ||
            ((input) === "-") ||
            ((input) === "*") ||
            ((input) === "/")) {
            if ((inputString.indexOf("+") === -1) &&
                (inputString.indexOf("-") < 1) &&
                (inputString.indexOf("*") === -1) &&
                (inputString.indexOf("/") === -1)) {
                addInputToString(input);
                addedOperator = true;
            }
        }

        //allow use to input a negative number after the operator has been added
        if (addedOperator) {
            if(input === "-") {
                addInputToString(input);
                addedOperator = false;
            }
        }

    }
}


// function buildInputString(input) {
//     //if input is a number, add it to the end of the string
//     if (!isNaN(Number(input))) {
//         addInputToString(input);
//     }
//     //if input is an operator, and string doesn't contain an operator, add operator to the string
//     if (((input) === "+") ||
//         ((input) === "-") ||
//         ((input) === "*") ||
//         ((input) === "/")) {
//         if (!(inputString.indexOf("+") > -1) &&
//             !(inputString.indexOf("-") > -1) &&
//             !(inputString.indexOf("*") > -1) &&
//             !(inputString.indexOf("/") > -1)) {
//             //make first number all the characters before the operator
//             numA = parseFloat(inputString);
//             //assign the operator to the input
//             operator = input;
//             addInputToString(input);
//             //if the string already has an operator:
//         } else {
//             //if the character after the operator is a number, and the user inputs an operator,
//             //find the answer to the current equation and put it in the input field
//             if (!isNaN(Number((inputString.indexOf("+") + 1))) && ((inputString.indexOf("+") + 1) !== "") ||
//                 !isNaN(Number((inputString.indexOf("-") + 1))) && ((inputString.indexOf("-") + 1) !== "") ||
//                 !isNaN(Number((inputString.indexOf("*") + 1))) && ((inputString.indexOf("*") + 1) !== "")||
//                 !isNaN(Number((inputString.indexOf("/") + 1))) && ((inputString.indexOf("/") + 1) !== "")) {
//                 let numAstring = inputString.substring(0, inputString.indexOf(operator));
//                 numA = parseFloat(numAstring);
//                 numB = parseFloat(inputString.slice(inputString.indexOf(operator) + 1));
//                 let answer = operate(numA, operator, numB);
//                 inputString = answer + input;
//                 inputText.textContent = inputString;
//             }
//         }

//     }
// }


function equalsButtonFunctionality(button) {
    button.addEventListener("click", () => {
        let numAstringG = inputString.substring(0, (inputString.indexOf(operator)));
        numA = parseFloat(numAstringG);
        console.log(numAstringG);
        console.log(numA);
        numB = parseFloat(inputString.slice(inputString.indexOf(operator) + 1));
        console.log(numB);
        let answer = operate(numA, operator, numB);
        console.log(answer);
        answerText.textContent = answer;
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