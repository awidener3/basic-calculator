// Setup
let a;
let operation;
let displayValue = document.querySelector('.selection');
let equation_div = document.querySelector('.equation');
const clear_button = document.querySelector('#clear')
const digit_button = document.querySelectorAll('.digit');
const operator_button = document.querySelectorAll('#operator');
const equals_button = document.querySelector('#equals');
// const check_button = document.querySelector('.check');

// basic functions

function add (a, b) {
    return Number(a) + Number(b); // convert returned strings as numbers before adding
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
    equation_div.textContent = '';
    num2 = displayValue.textContent;    // assign the current displayed number to num2
    switch (operator) {
        case '+':
            displayValue.textContent = add(num1,num2).toFixed(9);
            break;
        case '-':
            displayValue.textContent = subtract(num1,num2).toFixed(9);
            break;
        case '*':
            displayValue.textContent = multiply(num1,num2).toFixed(9);
            break;
        case '/':
            if (num2 == 0) {
                displayValue.textContent = 'ERROR';
            } else {
                displayValue.textContent = divide(num1, num2).toFixed(9);
            }
            break;
    }
}

// clear & check button

clear_button.addEventListener('click', () => {
    displayValue.textContent = '';      // reset displayed number to empty
    equation_div.textContent = '';      // reset equation display
    a = undefined;                      // reset 'a' to undefined
    operation = undefined;              // reset 'operation' to undefined
});

    // check_button.addEventListener('click', () => {
    //     console.log(`${a} ${operation} ${b}`);
    // })

// digit buttons

for (let i = 0; i < digit_button.length; i++) {
    digit_button[i].addEventListener('click', function() {
        displayValue.textContent += this.textContent;   // add numbers to the displayed number field
    })
}

// operator buttons

for (let i = 0; i < operator_button.length; i++) {
    operator_button[i].addEventListener('click', function() {
        a = displayValue.textContent;   // set 'a' to current displayed number
        displayValue.textContent = '';  // reset displayed number to empty
        operation = this.value;         // assign the operator to 'operation'
        equation_div.textContent = `${a} ${operation}`
    })
}

equals_button.addEventListener('click', () => operate(operation, a));



// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

// You should already have the code that can populate the display, so once operate() has been called, update the display with the ‘solution’ to the operation.
