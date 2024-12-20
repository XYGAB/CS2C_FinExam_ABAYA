
// Prompt the user to enter two words
let Rcar= prompt("Enter the first word (RACECAR):");
let Recor = prompt("Enter the second word (RECORDER):");

// Reverse the strings using split, reverse, and join
let reverseRcar = Rcar.split('').reverse().join('');
let reverseRecor = Recor.split('').reverse().join('');

// Log original and reversed strings to the console
console.log("Original String 1:", Rcar);
console.log("Reversed String 1:", reverseRcar);
console.log("Original String 2:", Recor);
console.log("Reversed String 2:", reverseRecor);

// Check if original strings are equivalent to their reversed versions
console.log(`Is "${Rcar}" equivalent to its reverse?`, Rcar.toUpperCase() === reverseRcar.toUpperCase());
console.log(`Is "${Recor}" equivalent to its reverse?`, Recor.toUpperCase() === reverseRecor.toUpperCase());
