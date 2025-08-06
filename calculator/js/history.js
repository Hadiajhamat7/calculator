const history = [];

function addToHistory(calculation) {
    history.unshift(calculation);
    if (history.length > 5) history.pop();
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = history.map(item => 
        `<div class="history-item">${item}</div>`
    ).join('');
}

function clearHistory() {
    history.length = 0;
    updateHistoryDisplay();
}