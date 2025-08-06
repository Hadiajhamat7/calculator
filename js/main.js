// Core Calculator Logic
let currentInput = '0';
let previousInput = '';
let currentOperation = null;
let shouldResetScreen = false;

const display = document.getElementById('display');
const resultPreview = document.getElementById('resultPreview');

// Initialize calculator
loadThemePreference();
updateDisplay();

function updateDisplay() {
    display.textContent = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        resetScreen();
    }
    currentInput += number;
    updateDisplay();
    updatePreview();
}

function appendDecimal() {
    if (shouldResetScreen) {
        resetScreen();
    }
    if (currentInput.includes('.')) return;
    if (currentInput === '') {
        currentInput = '0';
    }
    currentInput += '.';
    updateDisplay();
    updatePreview();
}

function resetScreen() {
    currentInput = '';
    shouldResetScreen = false;
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    currentOperation = null;
    resultPreview.textContent = '';
    updateDisplay();
}

function backspace() {
    if (currentInput.length === 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
    updatePreview();
}

function chooseOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        compute();
    }
    currentOperation = operation;
    previousInput = currentInput;
    shouldResetScreen = true;
    updatePreview();
}

function compute() {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === '/' && currentInput === '0') {
        showError("Can't divide by zero");
        return;
    }
    
    try {
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);
        let result;
        
        switch (currentOperation) {
            case '+': result = prev + current; break;
            case '-': result = prev - current; break;
            case '*': result = prev * current; break;
            case '/': result = prev / current; break;
            default: return;
        }
        
        const calculation = `${previousInput} ${currentOperation} ${currentInput} = ${result}`;
        addToHistory(calculation);
        
        currentInput = result.toString();
        currentOperation = null;
        previousInput = '';
        resultPreview.textContent = '';
        updateDisplay();
    } catch (error) {
        showError("Calculation error");
    }
}

function updatePreview() {
    if (currentOperation !== null) {
        resultPreview.textContent = `${previousInput} ${currentOperation} ${currentInput}`;
    } else {
        resultPreview.textContent = '';
    }
}

function calculate() {
    compute();
    shouldResetScreen = true;
}

function showError(message) {
    currentInput = message;
    updateDisplay();
    setTimeout(() => {
        clearDisplay();
    }, 1500);
}

// Keyboard Support
document.addEventListener('keydown', function(event) {
    if (/[0-9]/.test(event.key)) {
        appendNumber(event.key);
    } else switch(event.key) {
        case '.': appendDecimal(); break;
        case '+': case '-': case '*': case '/': 
            chooseOperation(event.key); break;
        case 'Enter': case '=': 
            event.preventDefault(); 
            calculate(); break;
        case 'Escape': clearDisplay(); break;
        case 'Backspace': backspace(); break;
    }
});