function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    return 'Error: Cannot divide by zero';
  }
  return a / b;
}

function operate(num1, calculation, num2) {
  if (calculation === '+') {
    return addition(num1, num2);
  } else if (calculation === '-') {
    return subtraction(num1, num2);
  } else if (calculation === '*') {
    return multiplication(num1, num2);
  } else if (calculation === '/') {
    return division(num1, num2);
  } else {
    return 'Error';
  }
}

const result = document.querySelector('#calculator-display');
const digitButtons = document.querySelectorAll('.digits');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equal');

let firstNumber = '';
let currentOperator = '';
let operatorClicked = false;

for (let i = 0; i < digitButtons.length; i++) {
  const currentButton = digitButtons[i];

  currentButton.addEventListener('click', () => {
    if (operatorClicked) {
      result.textContent = '';
      operatorClicked = false;
    }
    result.textContent += currentButton.textContent;
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  const currentOperatorButton = operatorButtons[i];

  currentOperatorButton.addEventListener('click', () => {
    firstNumber = result.textContent;
    currentOperator = currentOperatorButton.textContent;
    operatorClicked = true;
  });
}

equalButton.addEventListener('click', () => {
  let secondNumber = result.textContent;

  let calculationResult = operate(
    Number(firstNumber),
    currentOperator,
    Number(secondNumber),
  );

  result.textContent = calculationResult;

  firstNumber = calculationResult;
  operatorClicked = true;
});

const decimalButton = document.querySelector('.decimal');
decimalButton.addEventListener('click', () => {
  if (operatorClicked) {
    result.textContent = '';
    operatorClicked = false;
  }

  if (!result.textContent.includes('.')) {
    if (result.textContent === '') {
      result.textContent = '0.';
    } else {
      result.textContent += '.';
    }
  }
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
  result.textContent = '';
  firstNumber = '';
  currentOperator = '';
  operatorClicked = false;
});

const backspaceButton = document.querySelector('.backspace');
backspaceButton.addEventListener('click', () => {
  result.textContent = result.textContent.slice(0, -1);
});
