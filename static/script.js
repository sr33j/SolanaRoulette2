document.addEventListener('DOMContentLoaded', function() {
    const spinButton = document.getElementById('spin-button');
    const resultDisplay = document.getElementById('result');

    spinButton.addEventListener('click', function() {
        // Simulate roulette spin result
        const result = Math.floor(Math.random() * 37); // 0 to 36
        resultDisplay.textContent = `Result: ${result}`;
    });
});