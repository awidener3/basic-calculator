// Setup
let a;
let operation;
let displayValue = document.querySelector('.selection');
const clear_button = document.querySelector('#clear')
const digit_button = document.querySelectorAll('.digit');
const operator_button = document.querySelectorAll('#operator');
const equals_button = document.querySelector('#equals');
const check_button = document.querySelector('.check');
let b = displayValue.textContent;

// basic functions

function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

// calculator functionality

function operate (operator, num1, num2) {
    num1 = a;
    num2 = b;
    operator = operation;
    console.log(num1);
    console.log(operator);
    console.log(num2);
}

// clear & check button

clear_button.addEventListener('click', () => displayValue.textContent = '')
check_button.addEventListener('click', () => {
    console.log(`${a} ${operation} ${b}`);
})

// digit buttons

for (let i = 0; i < digit_button.length; i++) {
    digit_button[i].addEventListener('click', function() {
        displayValue.textContent += this.textContent;
    })
}

// operator buttons

for (let i = 0; i < operator_button.length; i++) {
    operator_button[i].addEventListener('click', function() {
        a = displayValue.textContent;
        displayValue.textContent = '';
        operation = this.value;
    })
}

equals_button.addEventListener('click', () => operate());



// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

// You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
