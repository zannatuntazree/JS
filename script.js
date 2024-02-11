// quotes + color
document.addEventListener('DOMContentLoaded', function () {
    const quotes = [
        "The only way to do great work is to love what you do.",
        "Your time is limited, don't waste it living someone else's life.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "In the middle of difficulty lies opportunity."
    ];
    const quoteText = document.getElementById('quote-text');
    quoteText.textContent = getRandomQuote();

    window.changeColors = function (color) {
        const quoteBox = document.getElementById('quote-box');
        const colors = {
            red: ['#ff0000', '#990000', '#ffe6e6'],
            blue: ['#0000ff', '#000099', '#e6f7ff'],
            green: ['#00cc00', '#006600', '#e6ffe6'],
            purple: ['#800080', '#4b004b', '#f2e6ff']
        };

        quoteBox.style.color = colors[color][0];
        quoteBox.style.borderColor = colors[color][1];
        quoteBox.style.backgroundColor = colors[color][2];
    };

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
        
    function convert() {
        const weightInput = document.getElementById('weight').value;
        const unitSelector = document.getElementById('unit-selector');
        const resultSpan = document.getElementById('result');

        const weight = parseFloat(weightInput);

        if (isNaN(weight)) {
            alert('Please enter a valid number for weight.');
            return;
        }

        const selectedOption = unitSelector.options[unitSelector.selectedIndex].value;
        let convertedWeight;

        if (selectedOption === 'kg-to-lb') {
            convertedWeight = weight * 2.2046;
        } else {
            convertedWeight = weight * 0.4536;
        }

        resultSpan.textContent = convertedWeight.toFixed(2);
    }

});

// convertor
function convert() {
    const weightInput = document.getElementById('weight').value;
    const unitSelector = document.getElementById('unit-selector');
    const resultSpan = document.getElementById('result');

    const weight = parseFloat(weightInput);

    if (isNaN(weight)) {
        alert('Please enter a valid number for weight.');
        return;
    }

    const selectedOption = unitSelector.options[unitSelector.selectedIndex].value;
    let convertedWeight;

    if (selectedOption === 'kg-to-lb') {
        // Convert from kilograms to pounds
        convertedWeight = weight * 2.2046;
    } else {
        // Convert from pounds to kilograms
        convertedWeight = weight * 0.4536;
    }

    resultSpan.textContent = convertedWeight.toFixed(2);
}
   
//Number Series Analyzer
document.addEventListener('DOMContentLoaded', function () {
    
    window.analyzeSeries = function () {
        const seriesInput = document.getElementById('number-series').value;
        const resultContainer = document.getElementById('result-container');

        
        const numberArray = seriesInput.split(',').map(Number);

        if (numberArray.some(isNaN)) {
            alert('Please enter a valid series of numbers.');
            return;
        }
        const maxResult = Math.max(...numberArray);
        const minResult = Math.min(...numberArray);
        const sumResult = numberArray.reduce((acc, num) => acc + num, 0);
        const averageResult = sumResult / numberArray.length;
        const reverseResult = numberArray.slice().reverse().join(', ');

        
        document.getElementById('max-result').textContent = maxResult;
        document.getElementById('min-result').textContent = minResult;
        document.getElementById('sum-result').textContent = sumResult;
        document.getElementById('average-result').textContent = averageResult.toFixed(2);
        document.getElementById('reverse-result').textContent = reverseResult;

        
        resultContainer.style.display = 'block';
    };
});



//magic box
document.addEventListener('DOMContentLoaded', function () {
    function getTextLines() {
        const textArea = document.getElementById('text-area');
        return textArea.value.split('\n');
    }

    function setTextLines(lines) {
        const textArea = document.getElementById('text-area');
        textArea.value = lines.join('\n');
    }

    window.clearAll = function () {
        const textArea = document.getElementById('text-area');
        textArea.value = '';
    };

    window.toggleCase = function () {
        const textArea = document.getElementById('text-area');
        const lines = getTextLines();
        const toggledLines = lines.map(line => {
            return line.toUpperCase() === line ? line.toLowerCase() : line.toUpperCase();
        });
        setTextLines(toggledLines);
    };

    window.sortLines = function () {
        const lines = getTextLines();
        const sortedLines = lines.sort();
        setTextLines(sortedLines);
    };

    window.reverseLines = function () {
        const lines = getTextLines();
        const reversedLines = lines.map(line => line.split('').reverse().join(''));
        setTextLines(reversedLines);
    };

    window.stripBlank = function () {
        const lines = getTextLines();
        const strippedLines = lines.filter(line => line.trim() !== '');
        setTextLines(strippedLines);
    };

    window.addNumbers = function () {
        const lines = getTextLines();
        const numberedLines = lines.map((line, index) => `${index + 1}. ${line}`);
        setTextLines(numberedLines);
    };

    window.shuffleLines = function () {
        const lines = getTextLines();
        const shuffledLines = lines.sort(() => Math.random() - 0.5);
        setTextLines(shuffledLines);
    };
});

