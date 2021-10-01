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

function operate(operator, a, b) {
  if (operator === '+') {
    return add(a, b);
  } else if (operator === '-') {
    return subtract(a, b);
  } else if (operator === '*') {
    return multiply(a, b);
  } else if (operator === '/') {
    return divide(a, b);
  } else {
    return 'Invalid operator!';
  }
}

const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const operatorButtons = document.querySelectorAll('.math-operator');
const equalsButton = document.querySelector('.operate');
const clearButton = document.querySelector('.clear-operator');

let firstNumber, operator;

let currentNumbers = [];
let displayNumbers = [];
let result = [];

clearButton.addEventListener('click', () => {
  clearEverything();
});

equalsButton.addEventListener('click', () => {
  secondNumber = parseInt(currentNumbers.join(''));
  result.push(operate(operator, firstNumber, secondNumber));
  updateDisplay(result);
});

for (const item of operatorButtons) {
  item.addEventListener('click', () => {
    operatorPress();
    operator = item.textContent;
    displayNumbers.push(item.textContent);
    updateDisplay(displayNumbers);
  });
}

for (const button of numberButtons) {
  button.addEventListener('click', () => {
    displayNumbers.push(button.textContent);
    currentNumbers.push(button.textContent);
    updateDisplay(displayNumbers);
  });
}

function updateDisplay(toDisplay) {
  let stringNumbers = toDisplay.join('');
  display.textContent = stringNumbers;
};

function operatorPress(){
  firstNumber = parseInt(display.textContent);
  currentNumbers = [];
};

function clearEverything() {
  firstNumber = 0;
  operator = '';
  currentNumbers = [];
  displayNumbers = [];
  result = [];
  updateDisplay(displayNumbers);
}
