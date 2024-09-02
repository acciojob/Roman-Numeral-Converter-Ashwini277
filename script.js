function convertToRoman(num) {
  // Array of Roman numerals and their corresponding values
  const romanSymbols = [
    ['M', 1000], 
    ['D', 500], 
    ['C', 100], 
    ['L', 50], 
    ['X', 10], 
    ['V', 5], 
    ['I', 1]
  ];

  let romanNumeral = ''; // Initialize an empty string for the result

  // Loop through each symbol-value pair
  for (let i = 0; i < romanSymbols.length; i++) {
    const symbol = romanSymbols[i][0];
    const value = romanSymbols[i][1];

    // While the current value can be subtracted from the number, add the symbol
    while (num >= value) {
      romanNumeral += symbol;
      num -= value;
    }

    // Handling subtractive notation for 4, 9, 40, 90, etc.
    if (i % 2 === 0 && i + 2 < romanSymbols.length) {
      const nextValue = romanSymbols[i + 2][1];
      if (num >= value - nextValue) {
        romanNumeral += romanSymbols[i + 2][0] + symbol;
        num -= value - nextValue;
      }
    }
  }

  return romanNumeral; // Return the resulting Roman numeral string
}

// Examples:
console.log(convertToRoman(14));   // Outputs: XIV
console.log(convertToRoman(798));  // Outputs: DCCXCVIII
