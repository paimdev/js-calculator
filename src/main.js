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
  if (a === 0 || b === 0) {
    return "Mhmm, can't really do that!";
  }
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
    clearEverything();
    return 'Invalid operator!';
  }
}

const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('#display');
const operatorButtons = document.querySelectorAll('.math-operator');
const equalsButton = document.querySelector('.operate');
const clearButton = document.querySelector('.clear-operator');

let firstNumber, operator;
let operatorCounter = 0;

let currentNumbers = [];
let displayNumbers = [];
let result = [];

clearButton.addEventListener('click', () => {
  clearEverything();
});

equalsButton.addEventListener('click', () => {
  equalsOperation();
  operatorCounter = 0;
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
  if (operatorCounter === 0) {
    firstNumber = parseInt(display.textContent);
    currentNumbers = [];
    operatorCounter++;
  } else {
    equalsOperation();
  }
};

function equalsOperation() {
  secondNumber = parseInt(currentNumbers.join(''));
  result.push(operate(operator, parseInt(firstNumber), secondNumber));
  firstNumber = result.join('');
  updateDisplay(result);
  displayNumbers = [result];
  currentNumbers = [];
  result = [];
}

function clearEverything() {
  firstNumber = 0;
  operator = '';
  operatorCounter = 0;
  currentNumbers = [];
  displayNumbers = [];
  result = [];
  updateDisplay(displayNumbers);
}
