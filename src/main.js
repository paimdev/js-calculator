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
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return "Invalid operator!";
  }
}

const numberButtons = document.querySelectorAll(".number");
const display = document.querySelector('#display');
const operators = document.querySelectorAll('.math-operator');

let firstNumber, secondNumber, operator;

let displayNumbers = [];

for (const item of operators) {
  item.addEventListener('click', () => {
    operatorPress();
    operator = item.textContent;
  });
}

for (const button of numberButtons) {
  button.addEventListener('click', () => {
    displayNumbers.push(button.textContent);
    updateDisplay(displayNumbers);
  });
}

function updateDisplay(displayNumbers) {
  let stringNumbers = displayNumbers.join('');
  display.textContent = stringNumbers;
};


function operatorPress(){
  firstNumber = parseInt(display.textContent);
};
