// addition, subtraction, multiplication, division adn operate functions
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
