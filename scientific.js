let scientificMode = false;

function toggleScientificMode() {
    scientificMode = !scientificMode;
    const sciButtons = document.querySelectorAll('.scientific');
    sciButtons.forEach(btn => {
        btn.style.display = scientificMode ? 'block' : 'none';
    });
    showToast(scientificMode ? "Scientific Mode ON" : "Scientific Mode OFF");
}

function squareRoot() {
    const value = parseFloat(currentInput);
    if (value < 0) {
        showError("Invalid input");
        return;
    }
    currentInput = Math.sqrt(value).toString();
    updateDisplay();
}

function power() {
    const value = parseFloat(currentInput);
    currentInput = Math.pow(value, 2).toString();
    updateDisplay();
}

function percentage() {
    const value = parseFloat(currentInput);
    currentInput = (value / 100).toString();
    updateDisplay();
}