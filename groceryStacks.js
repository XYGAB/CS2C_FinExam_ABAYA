//array for the input
let groceryItems = [];
// function for peek for cart
function peek(){
  if (groceryItems.length === 0) {
    return "Stack is empty.";
  } else {
    return groceryItems[groceryItems.length - 1];
  }
}
// function for push, adds an item to the stack, FIFO
function push(item) {
  groceryItems.push(item);
  console.log("Updated Stack:", groceryItems);
}
//pop function, removes the last item from the stack, FIFO
function pop() {
  if (groceryItems.length === 0) {
    console.log("Stack is empty.");
  } else {
    let removedItem = groceryItems.pop();
    console.log("Removed item:", removedItem);
    console.log("Updated Stack:", groceryItems);
  }
}
//loop to collect the 5 grocery items select by the user
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}:`);
  push(item);
}
console.log("Top:", peek()); //printing the item
pop(); //removing the last item