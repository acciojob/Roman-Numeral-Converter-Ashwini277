function convertToRoman() {
    const num = parseInt(document.getElementById('inputNumber').value);
    if (num < 0 || num > 100000) {
        document.getElementById('result').textContent = 'Please enter a number between 0 and 100000.';
        return;
    }
    
    const romanNumerals = [
        ['M', 1000], 
        ['CM', 900], 
        ['D', 500], 
        ['CD', 400], 
        ['C', 100], 
        ['XC', 90], 
        ['L', 50], 
        ['XL', 40], 
        ['X', 10], 
        ['IX', 9], 
        ['V', 5], 
        ['IV', 4], 
        ['I', 1]
    ];
    
    let roman = '';
    let remaining = num;

    for (const [symbol, value] of romanNumerals) {
        while (remaining >= value) {
            roman += symbol;
            remaining -= value;
        }
    }

    document.getElementById('result').textContent = `Roman Numeral: ${roman}`;
}
