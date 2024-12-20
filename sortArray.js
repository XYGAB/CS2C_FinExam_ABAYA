// Create arrays using prompt() function
let numbers = prompt("Enter numbers (e.g., 24, 65, 21, 5, 9, 32, 42, 80, 57)").split(',').map(Number);
let names = prompt("Enter names (e.g., Zenvo, Erica, Jordie, Alicia, Rendon)").split(',');

// Merge the two arrays
let combinedArray = numbers.concat(names);

// Log the merged array to console
console.log("Merged Array:", combinedArray);

// Sort numbers in reverse order and log it
console.log("Sorted Numbers (Reverse):", numbers.sort((a, b) => b - a));

// Sort names alphabetically and log it
console.log("Sorted Names (Alphabetical):", names.sort());
