/* QUESTION 3.1: How do you loop through an array in JavaScript?
 * We can loop through an array using different methods.
 * Some common ways are: for, while, forEach, and map.
 */

const products = ["Laptop", "Smartphone", "Tablet", "Monitor", "Keyboard"];

// for
// This loop goes through the array using an index number
// If we want to control the loop with an index, we use a for loop
// Example:
// for (let i = 0; i < products.length; i++) {
//   console.log(products[i]);
// }

// while
// This loop runs while the condition is true
// If we want to loop until a condition is met, we use a while loop
// Example:
// let index = 0;
// while (index < products.length) {
//   console.log(products[index]);
//   index++;
// }

// forEach
// This method runs once for each item in the array
// If we want to run a function for each item, we use forEach
// Example:
// products.forEach((product) => {
//   console.log(product);
// });

// map
// This method is used to create a new array
// If we want to change each item and create a new array, we use map
// Example:
// const newProducts = products.map((product) => {
//   return product;
// });

/* QUESTION 3.2: How would you print each product name to the console?
 */
// To print each product name to the console, I would use the forEach method
//because it is simple and effective for this purpose.
products.forEach((product) => {
  console.log(product);
});
