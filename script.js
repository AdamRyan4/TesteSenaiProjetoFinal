let currentNumber = "0";
let previousNumber = null;
let currentOperator = null;

const display = document.getElementById("display");

function updateDisplay() {
  display.textContent = currentNumber;
}

function appendNumber(number) {
  if (currentNumber === "0" && number !== ".") {
    currentNumber = number;
  } else if (number === "." && currentNumber.includes(".")) {
    return; // Prevent multiple dots
  } else {
    currentNumber += number;
  }
  updateDisplay();
}

function clearDisplay() {
  currentNumber = "0";
  previousNumber = null;
  currentOperator = null;
  updateDisplay();
}

function toggleSign() {
  currentNumber = (parseFloat(currentNumber) * -1).toString();
  updateDisplay();
}

function percent() {
  currentNumber = (parseFloat(currentNumber) / 100).toString();
  updateDisplay();
}

function setOperator(operator) {
  if (currentOperator && previousNumber !== null) {
    calculate(); // Perform the existing calculation first
  }
  currentOperator = operator;
  previousNumber = currentNumber;
  currentNumber = "0";
}

function calculate() {
  if (currentOperator === null || previousNumber === null) return;

  const prev = parseFloat(previousNumber);
  const curr = parseFloat(currentNumber);
  let result;

  switch (currentOperator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
    default:
      return;
  }

  currentNumber = result.toString();
  previousNumber = null;
  currentOperator = null;
  updateDisplay();
}
