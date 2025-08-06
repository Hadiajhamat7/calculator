function convertUnit(conversionType) {
    const value = parseFloat(currentInput);
    if (isNaN(value)) return;
    
    switch(conversionType) {
        case 'inchToCm':
            currentInput = (value * 2.54).toFixed(2).toString();
            break;
        case 'cmToInch':
            currentInput = (value / 2.54).toFixed(2).toString();
            break;
        default:
            return;
    }
    updateDisplay();
}