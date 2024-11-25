let displayValue = '';
let operator = '';
let firstOperand = null;
let secondOperand = null;

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function setOperator(op) {
    if (displayValue !== '') {
        firstOperand = parseFloat(displayValue);
        operator = op;
        displayValue = '';
        updateDisplay();
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.innerText = displayValue || '0';
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}

function calculate() {
    if (operator && displayValue !== '') {
        secondOperand = parseFloat(displayValue);
        switch (operator) {
            case '+':
                displayValue = firstOperand + secondOperand;
                break;
            case '-':
                displayValue = firstOperand - secondOperand;
                break;
            case '*':
                displayValue = firstOperand * secondOperand;
                break;
            case '/':
                displayValue = firstOperand / secondOperand;
                break;
            default:
                return;
        }
        displayValue = displayValue.toString();
        operator = '';
        firstOperand = null;
        secondOperand = null;
        updateDisplay();
    }
}
