//user for the inputs
let subArray1 = prompt("Enter the names (Genevieve,Juan,Luna,Gabriel,Elise): ");
let subArray2 = prompt("Enter the ages (24,65,21,5,9): ");

//then splitting it with comma
let names = subArray1.split(",");
let age = subArray2.split(",").map(Number);

//creating of multi-dimensional array
let array = names.map((name, index) => [name, age[index]]);

//printing the result
array.forEach(item => console.log(`[Name: ${item[0]}, Age: ${item[1]}]`));