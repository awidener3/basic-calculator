// Setup
let num1 = '';
let num2 = '';
let operation = '';
let displayValue = document.querySelector('.display-value');
let equation_div = document.querySelector('.equation');
const clear_button = document.querySelector('#clear')
const digit_button = document.querySelectorAll('.digit');
const operator_button = document.querySelectorAll('#operator');
const equals_button = document.querySelector('#equals');
const decimal_button = document.querySelector('.decimal');
const backspace_button = document.querySelector('#backspace');
const toggle_button = document.querySelector('#toggle-neg');
equals_button.disabled = true;

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

function checkForDecimals(result) {
    if (result % 1 != 0) {
        return result.toFixed(2);
    } else {
        return result;
    }
}

function operate (operator, num1, num2) {
    equation_div.textContent = '';
    let result = '';
    switch (operator) {
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 == 0) {
                return 'ERROR';
            } else {
                result = divide(num1,num2);
            } 
            break;
    }
    return checkForDecimals(result);
}

function onPressBackspace() {
    num1 = num1.substring(0, num1.length - 1);
    displayValue.textContent=num1;
}

function togglePositiveToNegative(num) {
    if (Math.sign(num) >= 0) {
        num1 = -Math.abs(num);
        displayValue.textContent = num1;
    } else {
        num1 = Math.abs(num);
        displayValue.textContent = num1;
    }
}

// DIGIT BUTTONS //

for (let i = 0; i < digit_button.length; i++) {
    digit_button[i].addEventListener('click', function() {
        num1 += this.value; 
        displayValue.textContent = num1;
        if (num1.includes('.')) {
            decimal_button.disabled = true;
        }
    }) 
}

// OPERATION BUTTONS //

for (let i = 0; i < operator_button.length; i++) {
    operator_button[i].addEventListener('click', function() {
        if (num2 !== '') {
            num2 = operate(operation, num2, num1);
        } else {
            num2 = num1;
        }
        operation = this.value;
        num1 = '';
        equation_div.textContent = `${num2} ${operation}`; 
        equals_button.disabled = false;
        decimal_button.disabled = false;
        digit_button.forEach(digit_button => digit_button.disabled = false);
    })
}

equals_button.addEventListener('click', function() { 
    displayValue.textContent = operate(operation, num2, num1);
    num1 = displayValue.textContent;
    num2 = '';
    equals_button.disabled = true;
    digit_button.forEach(digit_button => digit_button.disabled = true);
});

// CLEAR BUTTON //

clear_button.addEventListener('click', () => {
    num1 = ''; // reset displayed number to empty
    num2 = '';
    operation = ''; // reset 'operation' to undefined
    displayValue.textContent = num1;
    equation_div.textContent = ''; // reset equation display
    decimal_button.disabled = false;
    equals_button.disabled = true;
    digit_button.forEach(digit_button => digit_button.disabled = false);
});

// BACKSPACE BUTTON //
backspace_button.addEventListener('click', () => {
    onPressBackspace();
    if (num1.includes('.') == false) {
        decimal_button.disabled = false;
    }
});

// TOGGLE POS AND NEG //
toggle_button.addEventListener('click', () => togglePositiveToNegative(num1));