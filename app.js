// Setup
let firstValue = 0;
let secondValue = 0;
let operation;
let displayValue = document.querySelector('.display-value');
let equation_div = document.querySelector('.equation');
const clear_button = document.querySelector('#clear')
const digit_button = document.querySelectorAll('.digit');
const operator_button = document.querySelectorAll('#operator');
const equals_button = document.querySelector('#equals');
const decimal_button = document.querySelector('.decimal');

// basic functions

function add (a, b) {
    return Number(a) + Number(b); // convert returned strings as numbers before adding
}
function subtract (a, b) {
    return a - b;}

function multiply (a, b) {
    return a * b;
}
function divide (a, b) {
    return a / b;
}
function checkForDecimals(result) {
    if (result % 1 != 0) {
        return result.toFixed(2);
    } else {
        return result;
    }
}

// calculator functionality

function operate (operator, num1, num2) {
    equation_div.textContent = '';
    num2 = displayValue.textContent;    // assign the current displayed number to num2
    switch (operator) {
        case '+':
            displayValue.textContent = checkForDecimals(add(num1,num2));
            break;
        case '-':
            displayValue.textContent = checkForDecimals(subtract(num1,num2));
            break;
        case '*':
            displayValue.textContent = checkForDecimals(multiply(num1,num2));
            break;
        case '/':
            if (num2 == 0) {
                displayValue.textContent = 'ERROR';
            } else {
                displayValue.textContent = checkForDecimals(divide(num1, num2));
            }
            break;
    }
}

// DIGITS

for (let i = 0; i < digit_button.length; i++) {
    digit_button[i].addEventListener('click', function() {
        displayValue.textContent += this.textContent;   // add numbers to the displayed number field
        // disable decimal button if a decimal is present
        if (displayValue.textContent.includes('.')) {
            decimal_button.disabled = true;
        }
    })
}

// OPERATIONS //

for (let i = 0; i < operator_button.length; i++) {
    operator_button[i].addEventListener('click', function() {
        firstValue = displayValue.textContent;   // set 'a' to current displayed number
        operation = this.value;         // assign the operator to 'operation'
        displayValue.textContent = '';  // reset displayed number to empty
        equation_div.textContent = `${firstValue} ${operation}`; 
        decimal_button.disabled = false;
    })
}

equals_button.addEventListener('click', () => operate(operation, firstValue));

// clear & check button

clear_button.addEventListener('click', () => {
    displayValue.textContent = '';      // reset displayed number to empty
    equation_div.textContent = '';      // reset equation display
    a = undefined;                      // reset 'a' to undefined
    operation = undefined;              // reset 'operation' to undefined
    decimal_button.disabled = false;
});

// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

// You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.