//empty array that will hold the numbers
let numbers = [];
//using prompt to input numbers
let input = prompt("Enter 10 numbers separated by commas (42, 25, 12, 63, 48, 10, 16, 5, 30, 78):");
//converting the input string into an array of numbers using map()
numbers = input.split(',').map(num => parseInt(num.trim())); 
//checking if the 10 numbers are entered
if (numbers.length !== 10) {
  console.log("Please enter exactly 10 numbers.");
} else {
  //function for the bubble sort
  function bubbleSort(arr) {
    let n = arr.length;
    let compProcess = "";

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        compProcess += `Comparing ${arr[j]} and ${arr[j + 1]}\n`;

        //swaping if needed
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    console.log(compProcess); //printing 
    return arr; //returning the sorted array
  }
  //logging the original array
  console.log("Original Array:", numbers);
  //calling the array
  let sortedArray = bubbleSort(numbers);
  //then printing the sorted array
  console.log("Sorted Array:", sortedArray);
}