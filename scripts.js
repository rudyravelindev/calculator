document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('calcDisplay');
  const numButtons = document.querySelectorAll('.num-btn');
  const opButtons = document.querySelectorAll('.operator-btn');
  const clearButton = document.querySelector('.clear-btn');
  const deleteButton = document.querySelector('.delete-btn');
  const equalButton = document.querySelector('.equal-btn');

  // Add numbers to display
  numButtons.forEach((button) => {
    button.addEventListener('click', () => {
      display.value += button.value;
    });
  });

  // Add operators to display
  opButtons.forEach((button) => {
    button.addEventListener('click', () => {
      display.value += button.value;
    });
  });

  // Clear display
  clearButton.addEventListener('click', () => {
    display.value = '';
  });

  // Delete last character
  deleteButton.addEventListener('click', () => {
    display.value = display.value.toString().slice(0, -1);
  });

  // Calculate result
  equalButton.addEventListener('click', () => {
    try {
      display.value = safeEvaluate(display.value);
    } catch (error) {
      display.value = 'Error';
      setTimeout(() => {
        display.value = '';
      }, 1000);
    }
  });

  // Safe evaluation function
  function safeEvaluate(expr) {
    // Remove any characters that aren't numbers, operators, or parentheses
    const sanitized = expr.replace(/[^-()\d/*+.]/g, '');

    // Check for empty expression
    if (!sanitized) return '';

    // Check for balanced parentheses
    const parenthesesCount =
      (sanitized.match(/\(/g) || []).length -
      (sanitized.match(/\)/g) || []).length;
    if (parenthesesCount !== 0) {
      throw new Error('Unbalanced parentheses');
    }

    // Use Function constructor as a safer alternative to eval
    try {
      return new Function(`return ${sanitized}`)();
    } catch (e) {
      throw new Error('Invalid expression');
    }
  }
});
