// Setup
let num1 = 0;
let num2;
let operation;
let displayValue = document.querySelector('.display-value');
let equation_div = document.querySelector('.equation');
const clear_button = document.querySelector('#clear')
const digit_button = document.querySelectorAll('.digit');
const operator_button = document.querySelectorAll('#operator');
const equals_button = document.querySelector('#equals');
const decimal_button = document.querySelector('.decimal');
const backspace_button = document.querySelector('#backspace');
const toggle_button = document.querySelector('#toggle-neg');

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
            return add(num1, num2);
        case '-':
            displayValue.textContent = checkForDecimals(subtract(num1,num2));
            return subtract(num1, num2);
        case '*':
            displayValue.textContent = checkForDecimals(multiply(num1,num2));
            return multiply(num1, num2);
        case '/':
            if (num2 == 0) {
                displayValue.textContent = 'ERROR';
                return 'ERROR';
            } else {
                displayValue.textContent = checkForDecimals(divide(num1, num2));
                return divide(num1,num2);
            } 
    }
}

function onPressBackspace() {
    displayValue.textContent = displayValue.textContent.substring(0, displayValue.textContent.length - 1);
}

function togglePositiveToNegative(num) {
    if (Math.sign(num) >= 0) {
        displayValue.textContent = -Math.abs(num);
    } else {
        displayValue.textContent = Math.abs(num);
    }
}

// DIGIT BUTTONS //

for (let i = 0; i < digit_button.length; i++) {
    digit_button[i].addEventListener('click', function() {
        displayValue.textContent += this.textContent;   // add numbers to the displayed number field
        // disable decimal button if a decimal is present
        if (displayValue.textContent.includes('.')) {
            decimal_button.disabled = true;
        }
    })
}

// OPERATION BUTTONS //

for (let i = 0; i < operator_button.length; i++) {
    operator_button[i].addEventListener('click', function() {
        num1 = displayValue.textContent;    // set 'num1' to current displayed number
        equals_button.disabled = false;
        if (num2 !== undefined) {
            num2 = operate(operation, num2, num1);
            
        } else {
            num2 = num1;
        }
        
        operation = this.value;             // assign the operator to 'operation'
        equation_div.textContent = `${num2} ${operation}`; 
        displayValue.textContent = '';      // reset displayed number to empty
        decimal_button.disabled = false;
    })
}

equals_button.addEventListener('click', function() { 
    operate(operation, num1, num2);
    equals_button.disabled=true;
});

// CLEAR BUTTON //

clear_button.addEventListener('click', () => {
    displayValue.textContent = '';      // reset displayed number to empty
    equation_div.textContent = '';      // reset equation display
    num1 = undefined;                      // reset 'a' to undefined
    num2 = undefined;
    operation = undefined;              // reset 'operation' to undefined
    decimal_button.disabled = false;
    equals_button.disabled = false;
});

// BACKSPACE BUTTON //

backspace_button.addEventListener('click', function() {
    onPressBackspace();
})

// TOGGLE POS AND NEG //

toggle_button.addEventListener('click', function() {
    togglePositiveToNegative(displayValue.textContent);
})