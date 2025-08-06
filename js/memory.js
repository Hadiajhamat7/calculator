let memory = 0;

function memoryAdd() {
    const value = parseFloat(currentInput) || 0;
    memory += value;
    showToast(`Added ${value} to memory`);
}

function memorySubtract() {
    const value = parseFloat(currentInput) || 0;
    memory -= value;
    showToast(`Subtracted ${value} from memory`);
}

function memoryRecall() {
    currentInput = memory.toString();
    updateDisplay();
    showToast("Memory recalled");
}

function memoryClear() {
    memory = 0;
    showToast("Memory cleared");
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = 'toast';
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 2000);
}