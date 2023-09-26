let displayValue = '';
let history = [];

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('result').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('result').value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        if (!isNaN(result) && isFinite(result)) {
            displayValue = result.toString();
            document.getElementById('result').value = displayValue;

            
            history.push(displayValue);
            if (history.length > 10) {
                history.shift();
            }
            updateHistory();
        } else {
            alert('Invalid input');
            clearDisplay();
        }
    } catch (error) {
        alert('Error: ' + error.message);
        clearDisplay();
    }
}

function updateHistory() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    history.forEach((calculation, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Calculation ${index + 1}: ${calculation}`;
        historyList.appendChild(listItem);
    });
}
