## Overview

This is a basic calculator web application that performs arithmetic operations (addition, subtraction, multiplication, and division). The calculator features a clean interface with digit buttons, operator buttons, and special function buttons like clear and backspace.

## Features

- Basic arithmetic operations:
  - Addition (+)
  - Subtraction (-)
  - Multiplication (×)
  - Division (÷)
- Clear button (C) to reset the calculator
- Equals button (=) to compute results
- Decimal point input for floating-point numbers
- Backspace button (←) to undo the last input
- Keyboard support for all operations
- Error handling for division by zero
- Display that shows current input and results

## How to Use

1. **Basic Operations**:

   - Enter the first number
   - Click an operator button (+, -, ×, ÷)
   - Enter the second number
   - Click the equals button (=) to see the result

2. **Special Functions**:

   - **C (Clear)**: Resets the calculator to its initial state
   - **← (Backspace)**: Removes the last entered digit
   - **. (Decimal)**: Adds a decimal point to the current number (only one per number)

3. **Keyboard Support**:
   - Use number keys (0-9) for digits
   - Use +, -, \*, / for operators
   - Enter or = for equals
   - Backspace for backspace
   - Escape for clear
   - . for decimal point

## Technical Implementation

- **HTML**: Structure of calculator buttons and display
- **CSS**: Styling for calculator appearance
- **JavaScript**: Core calculator logic including:
  - Event listeners for button clicks
  - Arithmetic operation functions
  - Display management
  - State tracking for current operation

## Known Issues

- The calculator evaluates one operation at a time (does not follow standard order of operations)
- Maximum display length is limited to prevent overflow

## Future Improvements possible

- Implement order of operations (PEMDAS/BODMAS)
- Add memory functions (M+, M-, MR, MC)
- Support for scientific calculator functions
- Theme customization options

## Installation

No installation required - simply open the `index.html` file in any modern web browser.

## License

This project is open source and available for anyone to use or modify.
